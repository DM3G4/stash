interface Transaction {
    description: string,
    amount: number,
    date: Date
}

interface Account {
    name: string,
    color: string
    date: Date
    transactions: Transaction[],
}

const now = new Date();
export const initialState: { accounts: Account[] } = {
    accounts: [
        {
            name: "Nómina",
            color: "#4ade80",
            date: now,
            transactions: [
                { description: "Salario septiembre", amount: 2500.00, date: new Date("2026-09-15") },
                { description: "Renta", amount: -850.00, date: new Date("2026-09-01") },
                { description: "Supermercado", amount: -132.47, date: new Date("2026-09-08") },
            ],
        },
        {
            name: "Ahorros",
            color: "#60a5fa",
            date: now,
            transactions: [
                { description: "Transferencia mensual", amount: 400.00, date: new Date("2026-09-05") },
                { description: "Intereses", amount: 1.83, date: new Date("2026-09-30") },
            ],
        },
        {
            name: "Tarjeta de Crédito",
            color: "#f59e0b",
            date: now,
            transactions: [
                { description: "Café", amount: -4.50, date: new Date("2026-09-21") },
                { description: "Bus", amount: -12.00, date: new Date("2026-09-22") },
            ],
        },
        {
            name: "Efectivo",
            color: "#f87171",
            date: now,
            transactions: [
                { description: "Streaming", amount: -15.99, date: new Date("2026-09-10") },
                { description: "Cena aniversario", amount: -87.30, date: new Date("2026-09-14") },
                { description: "Pago tarjeta", amount: 300.00, date: new Date("2026-09-20") },
            ],
        },
    ],
};

export let globalState = $state(initialState)

export function setGlobalState(state: Account[]) {
    globalState.accounts = state
}

export function getBalance(): number {
    return globalState.accounts.reduce((balance, acc) => balance + getAccountBalance(acc), 0);
}

export function getAccountBalance(acc: Account): number {
    return acc.transactions.reduce((balance, tx) => balance + tx.amount, 0);
}

export function getTotalTransactions(): number {
    return globalState.accounts.reduce((total, acc) => total + acc.transactions.length, 0);
}

export function getTotalIncome(): number {
    return globalState.accounts.reduce((total, acc) => {
        return total + acc.transactions
            .filter((tx) => tx.amount > 0)
            .reduce((sum, tx) => sum + tx.amount, 0);
    }, 0);
}

export function getTotalExpenses(): number {
    return globalState.accounts.reduce((total, acc) => {
        return total + acc.transactions
            .filter((tx) => tx.amount < 0)
            .reduce((sum, tx) => sum + tx.amount, 0);
    }, 0);
}

export function getMonthTotal(date: Date): number {
    return globalState.accounts.reduce((total, acc) => {
        return total + acc.transactions
            .filter((tx) =>
                tx.date.getFullYear() === date.getFullYear() &&
                tx.date.getMonth() === date.getMonth(),
            )
            .reduce((sum, tx) => sum + tx.amount, 0);
    }, 0);
}

export function getMonthTransactions(date: Date): Transaction[] {
    return globalState.accounts.flatMap((acc) => acc.transactions)
        .filter((tx) =>
            tx.date.getFullYear() === date.getFullYear() &&
            tx.date.getMonth() === date.getMonth(),
        )
        .sort((a, b) => b.date.getTime() - a.date.getTime()); // más recientes primero
}

export function addTransaction(
    account: string,
    transaction: any,
): Account[] {
    return globalState.accounts = globalState.accounts.map((acc) =>
        acc.name === account
            ? { ...acc, transactions: [...acc.transactions, transaction] }
            : acc,
    );
}

export function deleteTransaction(description: string): Account[] {
    return globalState.accounts = globalState.accounts.map((acc) => ({
        ...acc,
        transactions: acc.transactions.filter(
            (tx) => tx.description !== description,
        ),
    }));
}

// ------------


function getMonthTxs(date: Date): Transaction[] {
    return globalState.accounts.flatMap((acc) => acc.transactions).filter((tx) =>
        tx.date.getFullYear() === date.getFullYear() &&
        tx.date.getMonth() === date.getMonth(),
    );
}

function sumIncome(txs: Transaction[]): number {
    return txs.filter((t) => t.amount > 0).reduce((s, t) => s + t.amount, 0);
}

function sumExpenses(txs: Transaction[]): number {
    return txs.filter((t) => t.amount < 0).reduce((s, t) => s + t.amount, 0);
}

function formatChange(current: number, previous: number): string {
    if (previous === 0) return current > 0 ? "∞" : "0";
    const change = ((current - previous) / Math.abs(previous)) * 100;
    return Math.abs(change).toFixed(1);
}

function getPreviousMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}

// ---- Funciones pedidas ----

export function getIncreaseSinceLastMonth(): string {
    const now = new Date();
    const current = getMonthTxs(now)
        .reduce((s, t) => s + t.amount, 0);
    const previous = getMonthTxs(getPreviousMonth(now))
        .reduce((s, t) => s + t.amount, 0);
    return formatChange(current, previous);
}

export function getMonthlyIncome() {
    return sumIncome(getMonthTxs(new Date()));
}

export function getMontlyIncomeSinceLastMonth(): string {
    const now = new Date();
    const current = sumIncome(getMonthTxs(now));
    const previous = sumIncome(getMonthTxs(getPreviousMonth(now)));
    return formatChange(current, previous);
}

export function getMonthlyExpense() {
    return sumExpenses(getMonthTxs(new Date()));
}

export function getMontlyExpenseSinceLastMonth(): string {
    const now = new Date();
    const current = sumExpenses(getMonthTxs(now));
    const previous = sumExpenses(getMonthTxs(getPreviousMonth(now)));
    return formatChange(current, previous);
}

export function savingsPercentage(): number {
    const txs = getMonthTxs(new Date());
    const income = sumIncome(txs);
    if (income === 0) return 0;
    const expenses = Math.abs(sumExpenses(txs));
    return Math.round(((income - expenses) / income) * 100);
}

export function getRecentTransactions(count = 8): Transaction[] {
    return globalState.accounts
        .flatMap((acc) => acc.transactions)
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .slice(0, count);
}

export function filterTransactions(
    query: string,
): Account[] {
    const q = query.toLowerCase().trim();
    return globalState.accounts.map((acc) => ({
        ...acc,
        transactions: acc.transactions.filter(
            (tx) => tx.description.toLowerCase().includes(q),
        ),
    }));
}
