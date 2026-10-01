<script>
    import {
        getAccountBalance,
        getBalance,
        getIncreaseSinceLastMonth,
        getMonthlyExpense,
        getMonthlyIncome,
        getMontlyExpenseSinceLastMonth,
        getMontlyIncomeSinceLastMonth,
        getRecentTransactions,
        globalState,
        savingsPercentage,
    } from "$lib/shared/state.svelte";
    import { TrendingUp, TrendingDown, Gift, Coins, SquareArrowOutUpRight } from "@lucide/svelte";
</script>

<div class="space-y-4">
    <div>
        <h1 class="text-xl font-semibold tracking-tight">Dashboard</h1>
        <!-- TODO: CODE DYNAMIC DATE -->
        <p class="text-md text-muted-foreground mt-0.5">
            Resumen de {new Date().toLocaleDateString("es", {
                month: "long",
                day: undefined,
                year: "numeric",
            })}
        </p>
    </div>

    <!-- {/* Two-column grid on desktop */} -->
    <div class="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-4 items-start">
        <!-- {/* ── Left column ── */} -->
        <!-- {/* Balance hero */} -->
        <div
            class="rounded-xl border border-border bg-card p-6 neon-border-orange relative overflow-hidden">
            <div class="absolute inset-0 pointer-events-none">
                <div
                    class="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-orange-accent/6 blur-2xl">
                </div>
            </div>
            <p class="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Balance total
            </p>
            <p class="text-4xl font-semibold mono mt-2 tracking-tight">
                <!-- TODO: CODE TOTAL BALANCE -->
                ${getBalance().toFixed(2)}
            </p>
            <div class="flex items-center gap-3 mt-3">
                <div class="flex items-center gap-1.5">
                    <!-- TODO: CODE STATS -->
                    <TrendingUp class="text-green-accent" />
                    <span class="text-green-text text-sm font-medium text-green-accent">
                        {getIncreaseSinceLastMonth()}%
                    </span>
                    <span class="text-muted-foreground text-sm">al mes anterior</span>
                </div>
                <div class="h-3 w-px bg-border"></div>
                <span class="text-muted-foreground text-sm">
                    <!-- TODO: CODE TOTAL BALANCE -->
                    {globalState.accounts.length} cuentas
                </span>
            </div>
        </div>

        <div class="flex flex-col rounded-xl border bg-card p-4 neon-border-green h-full gap-3">
            <div class="flex items-center justify-between mb-1">
                <p class="text-sm text-muted-foreground">Ingresos mensuales</p>
                <TrendingUp class="text-green-accent" />
            </div>
            <p class="flex text-2xl font-semibold mono grow">
                ${getMonthlyIncome()}
            </p>
            <p class="text-sm mt-1 text-muted-foreground">
                {getMontlyIncomeSinceLastMonth()}% al mes anterior
            </p>
        </div>

        <!-- {/* Recent transactions */} -->
        <div class="rounded-xl border border-border bg-card overflow-hidden h-full">
            <div class="flex items-center justify-between px-4 py-3.5 border-b border-border">
                <h2 class="text-md font-semibold">Transacciones recientes</h2>
                <a
                    href="/accounts"
                    class="text-sm text-(--orange-text) hover:opacity-80 hover:underline flex items-center gap-1">
                    Ver todas <SquareArrowOutUpRight class="scale-75" />
                </a>
            </div>
            <!-- {/* Table header — desktop only */} -->
            <div
                class="hidden md:grid grid-cols-[1fr_240px_80px] gap-2 px-4 py-2 border-b border-border">
                {#each ["Transacción", "Fecha", "Monto"] as th}
                    <!-- key={th} -->
                    <span
                        class="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {th}
                    </span>
                {/each}
            </div>
            <div class="divide-y divide-border">
                {#each getRecentTransactions() as tx}
                    <!-- TODO: CODE TRANSACTION LIST -->
                    <!-- {recentTxns.map((t) => ( -->
                    <!-- key={t.id} -->
                    <div
                        class="flex md:grid md:grid-cols-[1fr_240px_80px] items-center gap-3 md:gap-2 px-4 py-3 hover:bg-secondary transition-colors">
                        <!-- {/* Transaction */} -->
                        <div class="flex items-center gap-3 min-w-0 flex-1">
                            <div
                                class="w-8 h-8 rounded-lg bg-secondary flex text-orange-accent/60 items-center justify-center text-md shrink-0">
                                <Coins />
                            </div>
                            <p class="text-md font-medium truncate">{tx.description}</p>
                        </div>
                        <!-- {/* Date */} -->
                        <p class="hidden md:block text-sm text-muted-foreground">
                            {tx.date.toLocaleDateString("es", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </p>
                        <!-- {/* Amount */} -->
                        <!-- ${t.type === "income" ? "text-green-text" : ""} -->
                        <p class={`text-md justify-end font-semibold mono shrink-0 md:text-right `}>
                            ${tx.amount}
                        </p>
                        <!-- {/* Mobile: category + date */} -->
                        <div class="md:hidden shrink-0 text-right">
                            <p class="text-sm text-muted-foreground">
                                {new Date().toLocaleDateString("es", {
                                    month: "short",
                                    day: "numeric",
                                })}
                            </p>
                        </div>
                    </div>
                {/each}

                <!-- ))} -->
            </div>
        </div>

        <div class="space-y-4">
            <!-- {/* Stat cards */} -->
            <div class="flex flex-col gap-3">
                <div class="rounded-xl border bg-card p-4 neon-border-orange">
                    <div class="flex items-center justify-between mb-1">
                        <p class="text-sm text-muted-foreground">Gastos mensuales</p>
                        <TrendingDown class="text-orange-accent" />
                    </div>
                    <p class="text-2xl font-semibold mono">
                        ${getMonthlyExpense()}
                    </p>
                    <p class="text-sm mt-1 text-muted-foreground">
                        {getMontlyExpenseSinceLastMonth()}% al mes anterior
                    </p>
                </div>

                <div class="col-span-2 md:col-span-1 rounded-xl border border-border bg-card p-4">
                    <p class="text-sm text-muted-foreground mb-1">Porcentaje de ahorro</p>
                    <p class="text-2xl font-semibold mono">
                        {savingsPercentage()}%
                    </p>
                    <div class="mt-3 h-1.5 rounded-full bg-secondary overflow-hidden">
                        <div
                            class="h-full rounded-full bg-green-accent transition-all duration-700"
                            style={`width: ${Math.min(savingsPercentage(), 100)}%`}>
                        </div>
                    </div>
                    <p class="text-sm text-muted-foreground mt-1.5">ingresos ahorrados este mes</p>
                </div>
                <!-- {/* Accounts */} -->
                <div class="rounded-xl border border-border bg-card overflow-hidden">
                    <div
                        class="flex items-center justify-between px-4 py-3.5 border-b border-border">
                        <h2 class="text-md font-semibold">Cuentas</h2>
                        <a
                            href="/accounts"
                            class="text-sm text-(--orange-text) hover:opacity-80 hover:underline flex items-center gap-1">
                            Ver todas <SquareArrowOutUpRight class="scale-75" />
                        </a>
                    </div>
                    <!-- {/* Allocation bar */} -->
                    <div class="px-4 py-3 border-b border-border">
                        <div class="flex h-1.5 rounded-full bg-secondary overflow-hidden">
                            {#each globalState.accounts as acc}
                                <div
                                    class="h-full first:rounded-l-full last:rounded-r-full transition-all"
                                    style={`width: ${(getAccountBalance(acc) / getBalance()) * 100}%; background-color: ${acc.color};`}
                                    title={`${acc.name}: ${getAccountBalance(acc)}`}>
                                </div>
                            {/each}
                        </div>
                    </div>
                    <div class="divide-y divide-border">
                        {#each globalState.accounts as acc}
                            <div
                                class="flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors">
                                <div
                                    class="w-2 h-2 rounded-full shrink-0"
                                    style={`background-color: ${acc.color};`}>
                                </div>
                                <p class="text-md flex-1 truncate">{acc.name}</p>
                                <!-- ${acc.balance < 0 ? "text-red-text" : ""} -->
                                <p class={`text-md font-semibold mono `}>
                                    ${getAccountBalance(acc)}
                                </p>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
