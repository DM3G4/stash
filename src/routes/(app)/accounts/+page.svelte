<script>
    import { Landmark } from "@lucide/svelte";
</script>

<div class="space-y-6">
    <div>
        <h1 class="text-xl font-semibold tracking-tight">Cuentas</h1>
        <p class="text-sm text-muted-foreground mt-0.5">0 accounts linked</p>
    </div>

    <!-- {/* Net worth summary */} -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div
            class="col-span-2 md:col-span-1 rounded-xl border border-border bg-card p-4 neon-border-green">
            <p class="text-xs text-muted-foreground mb-1">Net Worth</p>
            <p class="text-2xl font-semibold mono">
                <!-- {fmt(netWorth)} -->
                0$
            </p>
        </div>
        <div class="rounded-xl border border-border bg-card p-4">
            <p class="text-xs text-muted-foreground mb-1">Assets</p>
            <p class="text-lg font-semibold mono text-green-text)]">
                <!-- {fmt(totalAssets)} -->
                0$
            </p>
        </div>
        <div class="rounded-xl border border-border bg-card p-4">
            <p class="text-xs text-muted-foreground mb-1">Debt</p>
            <p class="text-lg font-semibold mono text-red-text)]">
                <!-- {fmt(Math.abs(totalDebt))} -->
                0$
            </p>
        </div>
    </div>

    <!-- {/* Allocation bar */} -->
    <div class="rounded-xl border border-border bg-card p-5">
        <p class="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
            Allocation
        </p>
        <div class="flex rounded-full overflow-hidden h-3 gap-0.5">
            <!-- {accounts.filter((a) => a.balance > 0).map((a) => ( -->
            <!-- style={{ width: `${(a.balance / totalAssets) * 100}%`, backgroundColor: a.color }}
                title={`${a.name}: ${fmt(a.balance)}`} -->
            <div class="h-full first:rounded-l-full last:rounded-r-full transition-all"></div>
            <!-- ))} -->
        </div>
        <div class="flex flex-wrap gap-x-4 gap-y-2 mt-4">
            <!-- {accounts.filter((a) => a.balance > 0).map((a) => ( -->
            <div class="flex items-center gap-1.5">
                <!-- style={{ backgroundColor: a.color }} -->
                <div class="w-2 h-2 rounded-full shrink-0"></div>
                <span class="text-xs text-muted-foreground)]">
                    <!-- {a.name} -->
                    Cuenta
                </span>
                <span class="text-xs font-medium mono">
                    <!-- {((a.balance / totalAssets) * 100).toFixed(0)}% -->
                    0%
                </span>
            </div>
            <!-- ))} -->
        </div>
    </div>

    <!-- {/* Account cards */} -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each [1, 2, 3] as test}
            <!-- {accounts.map((acc) => {
          const txns = accountTxns(acc.id);
          const monthlyFlow = txns.reduce((s, t) => (t.type === "income" ? s + t.amount : s - t.amount), 0);
          return ( -->
            <div class="rounded-xl border border-border bg-card overflow-hidden">
                <!-- {/* Header */} -->
                <!-- style={{ borderTopColor: acc.color, borderTopWidth: 2 }} -->
                <div class="flex items-center gap-4 p-5 border-b border-border)]">
                    <!-- style={{ backgroundColor: `${acc.color}18` }} -->
                    <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl">
                        <!-- {typeIcon[acc.type]} -->
                        <Landmark />
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2">
                            <h3 class="font-semibold truncate">
                                <!-- {acc.name} -->
                                Cuenta
                            </h3>
                            <span
                                class="text-[10px] text-muted-foreground border border-border px-1.5 py-0.5 rounded-full">
                                <!-- {typeLabel[acc.type]} -->
                                Banco
                            </span>
                        </div>
                        <p class="text-xs text-muted-foreground mt-0.5">
                            Updated {new Date().toLocaleDateString("es", {
                                month: "short",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                    <div class="text-right">
                        <!-- ${acc.balance < 0 ? "text-red-text)]" : ""} -->
                        <p class={`text-xl font-semibold mono `}>
                            <!-- {fmt(acc.balance)} -->
                            $0
                        </p>
                        <!-- ${monthlyFlow >= 0 ? "text-green-text)]" : "text-red-text)]"} -->
                        <p class={`text-xs mt-0.5 `}>
                            <!-- {monthlyFlow >= 0 ? "+" : ""}{fmt(monthlyFlow)} this month -->
                            0$
                        </p>
                    </div>
                </div>

                <!-- {/* Recent txns */} -->
                <!-- {txns.length > 0 && ( -->
                <div class="divide-y divide-border)]">
                    <!-- {txns.map((t) => ( -->
                    <div
                        class="flex items-center gap-3 px-5 py-2.5 hover:bg-secondary transition-colors">
                        <p class="text-sm flex-1 truncate text-muted-foreground)]">
                            <!-- {t.description} -->
                            Postre
                        </p>
                        <p class="text-xs text-muted-foreground)]">
                            {new Date().toLocaleDateString("es", {
                                month: "short",
                                day: "numeric",
                            })}
                        </p>
                        <!-- ${t.type === "income" ? "text-green-text)]" : ""} -->
                        <p class={`text-sm font-semibold mono `}>
                            <!-- {t.type === "income" ? "+" : "−"}{new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(t.amount)} -->
                            $0
                        </p>
                    </div>
                    <!-- ))} -->
                </div>
                <!-- )} -->
                <!-- {txns.length > 0 && ( -->
                <div class="divide-y divide-border)]">
                    <!-- {txns.map((t) => ( -->
                    <div
                        class="flex items-center gap-3 px-5 py-2.5 hover:bg-secondary transition-colors">
                        <p class="text-sm flex-1 truncate text-muted-foreground)]">
                            <!-- {t.description} -->
                            Postre
                        </p>
                        <p class="text-xs text-muted-foreground)]">
                            {new Date().toLocaleDateString("es", {
                                month: "short",
                                day: "numeric",
                            })}
                        </p>
                        <!-- ${t.type === "income" ? "text-green-text)]" : ""} -->
                        <p class={`text-sm font-semibold mono `}>
                            <!-- {t.type === "income" ? "+" : "−"}{new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(t.amount)} -->
                            $0
                        </p>
                    </div>
                    <!-- ))} -->
                </div>
                <!-- )} -->
                <!-- {txns.length > 0 && ( -->
                <div class="divide-y divide-border)]">
                    <!-- {txns.map((t) => ( -->
                    <div
                        class="flex items-center gap-3 px-5 py-2.5 hover:bg-secondary transition-colors">
                        <p class="text-sm flex-1 truncate text-muted-foreground)]">
                            <!-- {t.description} -->
                            Postre
                        </p>
                        <p class="text-xs text-muted-foreground)]">
                            {new Date().toLocaleDateString("es", {
                                month: "short",
                                day: "numeric",
                            })}
                        </p>
                        <!-- ${t.type === "income" ? "text-green-text)]" : ""} -->
                        <p class={`text-sm font-semibold mono `}>
                            <!-- {t.type === "income" ? "+" : "−"}{new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(t.amount)} -->
                            $0
                        </p>
                    </div>
                    <!-- ))} -->
                </div>
                <!-- )} -->
            </div>
            <!-- );
        })} -->
        {/each}
    </div>
</div>
