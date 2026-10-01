<script>
    import {
        getAccountBalance,
        getBalance,
        getTotalExpenses,
        getTotalIncome,
        globalState,
    } from "$lib/shared/state.svelte";
    import { Wallet } from "@lucide/svelte";
</script>

<div class="space-y-6">
    <div>
        <h1 class="text-xl font-semibold tracking-tight">Cuentas</h1>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div
            class="col-span-2 md:col-span-1 rounded-xl border border-border bg-card p-4 neon-border-green">
            <p class="text-xs text-muted-foreground mb-1">Balance total</p>
            <p class="text-2xl font-semibold mono">
                ${getBalance().toFixed(2)}
            </p>
        </div>
        <div class="rounded-xl border border-border bg-card p-4">
            <p class="text-xs text-muted-foreground mb-1">Saldo</p>
            <p class="text-lg font-semibold mono text-(--green-text)">
                ${getTotalIncome().toFixed(2)}
            </p>
        </div>
        <div class="rounded-xl border border-border bg-card p-4">
            <p class="text-xs text-muted-foreground mb-1">Gastos</p>
            <p class="text-lg font-semibold mono text-(--red-text)">
                ${getTotalExpenses().toFixed(2)}
            </p>
        </div>
    </div>

    <!-- {/* Allocation bar */} -->
    <div class="rounded-xl border border-border bg-card p-5">
        <p class="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
            Distribución
        </p>
        <div class="flex mt-3 h-3 rounded-full bg-secondary overflow-hidden">
            {#each globalState.accounts as acc}
                <div
                    class="h-full first:rounded-l-full last:rounded-r-full transition-all"
                    style={`width: ${(getAccountBalance(acc) / getBalance()) * 100}%; background-color: ${acc.color};`}
                    title={`${acc.name}: ${getAccountBalance(acc)}`}>
                </div>
            {/each}
        </div>
        <div class="flex flex-wrap gap-x-4 gap-y-2 mt-4">
            {#each globalState.accounts as acc}
                <div class="flex items-center gap-1.5">
                    <div
                        class="w-2 h-2 rounded-full shrink-0"
                        style={`background-color: ${acc.color};`}>
                    </div>
                    <span class="text-xs text-muted-foreground)]">
                        {acc.name}
                    </span>
                    <span class="text-xs font-medium mono">
                        {((getAccountBalance(acc) / getBalance()) * 100).toFixed(2)}%
                    </span>
                </div>
            {/each}
        </div>
    </div>

    <!-- {/* Account cards */} -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each globalState.accounts as acc}
            <div class="rounded-xl border border-border bg-card overflow-hidden">
                <!-- {/* Header */} -->
                <div
                    class="flex items-center gap-4 p-5 border-b border-border border-t-2"
                    style={`border-top-color: ${acc.color};`}>
                    <div
                        class="w-11 h-11 rounded-xl flex items-center justify-center text-xl bg-secondary">
                        <Wallet />
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2">
                            <h3 class="font-semibold truncate">
                                {acc.name}
                            </h3>
                            <!-- <span
                                class="text-[10px] text-muted-foreground border border-border px-1.5 py-0.5 rounded-full">
                                {typeLabel[acc.type]}
                                Banco
                            </span> -->
                        </div>
                        <p class="text-xs text-muted-foreground mt-0.5">
                            Creada {acc.date.toLocaleDateString("es", {
                                month: "short",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                    <div class="text-right">
                        <!-- ${acc.balance < 0 ? "text-red-text)]" : ""} -->
                        <p class={`text-xl font-semibold mono ${getAccountBalance(acc) >= 0 ? "text-(--green-text)" : "text-(--red-text)"}`}>
                            ${getAccountBalance(acc)}
                        </p>
                        <!-- ${monthlyFlow >= 0 ? "text-green-text)]" : "text-red-text)]"}
                        <p class={`text-xs mt-0.5 `}>
                            {monthlyFlow >= 0 ? "+" : ""}{fmt(monthlyFlow)} this month
                            0$
                        </p> -->
                    </div>
                </div>

                <!-- {/* Recent txns */} -->
                <div class="divide-y divide-border">
                    {#each acc.transactions as t}
                        <div
                            class="flex items-center gap-3 px-5 py-2.5 hover:bg-secondary transition-colors">
                            <p class="text-sm flex-1 truncate text-muted-foreground)]">
                                {t.description}
                            </p>
                            <p class="text-xs text-muted-foreground)]">
                                {t.date.toLocaleDateString("es", {
                                    month: "short",
                                    day: "numeric",
                                })}
                            </p>
                            <p
                                class={`text-sm font-semibold mono ${t.amount >= 0 ? "text-(--green-text)" : "text-(--red-text)"}`}>
                                {t.amount >= 0 ? "+" : ""}{new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                }).format(t.amount)}
                            </p>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
