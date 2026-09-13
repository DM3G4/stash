<div class="space-y-4">
    <div>
        <h1 class="text-xl font-semibold tracking-tight">Dashboard</h1>
        <p class="text-sm text-[var(--muted-foreground)] mt-0.5">August 2026 overview</p>
    </div>

    <!-- {/* Two-column grid on desktop */} -->
    <div class="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-4 items-start">
        <!-- {/* ── Left column ── */} -->
        <div class="space-y-4">
            <!-- {/* Balance hero */} -->
            <div
                class="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 neon-border-orange relative overflow-hidden">
                <div class="absolute inset-0 pointer-events-none">
                    <div
                        class="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-[var(--orange-accent)]/6 blur-2xl" />
                </div>
                <p
                    class="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-widest">
                    Total Balance
                </p>
                <p class="text-4xl font-semibold mono mt-2 tracking-tight">
                    <!-- {fmt(totalBalance)} -->
                </p>
                <div class="flex items-center gap-3 mt-3">
                    <div class="flex items-center gap-1.5">
                        <!-- <TrendUpIcon class="text-[var(--green-text)]" /> -->
                        <span class="text-[var(--green-text)] text-xs font-medium">+2.4%</span>
                        <span class="text-[var(--muted-foreground)] text-xs">vs last month</span>
                    </div>
                    <div class="h-3 w-px bg-[var(--border)]" />
                    <span class="text-[var(--muted-foreground)] text-xs">
                        <!-- {accounts.length} accounts -->
                    </span>
                </div>
            </div>

            <!-- {/* Recent transactions */} -->
            <div class="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
                <div
                    class="flex items-center justify-between px-4 py-3.5 border-b border-[var(--border)]">
                    <h2 class="text-sm font-semibold">Recent Transactions</h2>
                    <!-- <Link to="/transactions" class="text-xs text-[var(--orange-text)] hover:opacity-80 flex items-center gap-1">
                View all <ArrowUpRightIcon />
              </Link> -->
                </div>
                <!-- {/* Table header — desktop only */} -->
                <div
                    class="hidden md:grid grid-cols-[1fr_120px_80px_90px] gap-2 px-4 py-2 border-b border-[var(--border)]">
                    <!-- {["Merchant", "Category", "Date", "Amount"].map((h) => (
                <span key={h} class="text-[10px] font-medium text-[var(--muted-foreground)] uppercase tracking-wider">{h}</span>
              ))} -->
                </div>
                <div class="divide-y divide-[var(--border)]">
                    <!-- {recentTxns.map((t) => (
                <div key={t.id} class="flex md:grid md:grid-cols-[1fr_120px_80px_90px] items-center gap-3 md:gap-2 px-4 py-3 hover:bg-[var(--secondary)] transition-colors">
                  {/* Merchant */}
                  <div class="flex items-center gap-3 min-w-0 flex-1">
                    <div class="w-8 h-8 rounded-lg bg-[var(--secondary)] flex items-center justify-center text-sm flex-shrink-0">
                      {categoryIcons[t.category] ?? "📦"}
                    </div>
                    <p class="text-sm font-medium truncate">{t.description}</p>
                  </div>
                  {/* Category */}
                  <div class="hidden md:block">
                    <span class="text-[11px] text-[var(--muted-foreground)] border border-[var(--border)] px-2 py-0.5 rounded-full">{t.category}</span>
                  </div>
                  {/* Date */}
                  <p class="hidden md:block text-xs text-[var(--muted-foreground)]">
                    {new Date(t.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </p>
                  {/* Amount */}
                  <p class={`text-sm font-semibold mono flex-shrink-0 md:text-right ${t.type === "income" ? "text-[var(--green-text)]" : ""}`}>
                    {t.type === "income" ? "+" : "−"}{fmt(t.amount)}
                  </p>
                  {/* Mobile: category + date */}
                  <div class="md:hidden flex-shrink-0 text-right">
                    <p class="text-[11px] text-[var(--muted-foreground)]">
                      {t.category} · {new Date(t.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </p>
                  </div>
                </div>
              ))} -->
                </div>
            </div>
        </div>

        <!-- {/* ── Right column ── */} -->
        <div class="space-y-4">
            <!-- {/* Stat cards */} -->
            <div class="grid grid-cols-2 md:grid-cols-1 gap-3">
                <div class="rounded-xl border bg-[var(--card)] p-4 neon-border-green">
                    <div class="flex items-center justify-between mb-1">
                        <p class="text-xs text-[var(--muted-foreground)]">Monthly Income</p>
                        <!-- <TrendUpIcon class="text-[var(--green-text)]" /> -->
                    </div>
                    <p class="text-2xl font-semibold mono">
                        <!-- {fmt(monthlyIncome)} -->
                    </p>
                    <p class="text-xs mt-1 text-[var(--green-text)]">+12% vs last month</p>
                </div>

                <div class="rounded-xl border bg-[var(--card)] p-4 neon-border-orange">
                    <div class="flex items-center justify-between mb-1">
                        <p class="text-xs text-[var(--muted-foreground)]">Monthly Expenses</p>
                        <!-- <TrendDownIcon class="text-[var(--orange-text)]" /> -->
                    </div>
                    <p class="text-2xl font-semibold mono">
                        <!-- {fmt(monthlyExpenses)} -->
                    </p>
                    <p class="text-xs mt-1 text-[var(--muted-foreground)]">−3% vs last month</p>
                </div>

                <div
                    class="col-span-2 md:col-span-1 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
                    <p class="text-xs text-[var(--muted-foreground)] mb-1">Savings Rate</p>
                    <p class="text-2xl font-semibold mono">
                        <!-- {savingsRate.toFixed(1)}% -->
                    </p>
                    <div class="mt-3 h-1.5 rounded-full bg-[var(--secondary)] overflow-hidden">
                        <div
                            class="h-full rounded-full bg-[var(--green-accent)] transition-all duration-700" />
                        <!--
                            style={{ width: `${Math.min(savingsRate, 100)}%` }}
                            -->
                    </div>
                    <p class="text-[10px] text-[var(--muted-foreground)] mt-1.5">
                        of income saved this month
                    </p>
                </div>
            </div>

            <!-- {/* Accounts */} -->
            <div class="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
                <div
                    class="flex items-center justify-between px-4 py-3.5 border-b border-[var(--border)]">
                    <h2 class="text-sm font-semibold">Accounts</h2>
                    <!-- <Link to="/accounts" class="text-xs text-[var(--orange-text)] hover:opacity-80 flex items-center gap-1">
                View all <ArrowUpRightIcon />
              </Link> -->
                </div>
                <!-- {/* Allocation bar */} -->
                <div class="px-4 py-3 border-b border-[var(--border)]">
                    <div class="flex rounded-full overflow-hidden h-1.5 gap-px">
                        <!-- {accounts.filter((a) => a.balance > 0).map((a) => (
                  <div
                    key={a.id}
                    class="h-full first:rounded-l-full last:rounded-r-full"
                    style={{ width: `${(a.balance / totalAssets) * 100}%`, backgroundColor: a.color }}
                  />
                ))} -->
                    </div>
                </div>
                <div class="divide-y divide-[var(--border)]">
                    <!-- {accounts.map((acc) => (
                <div key={acc.id} class="flex items-center gap-3 px-4 py-3 hover:bg-[var(--secondary)] transition-colors">
                  <div class="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: acc.color }} />
                  <p class="text-sm flex-1 truncate">{acc.name}</p>
                  <p class={`text-sm font-semibold mono ${acc.balance < 0 ? "text-[var(--red-text)]" : ""}`}>
                    {fmt(acc.balance)}
                  </p>
                </div>
              ))} -->
                </div>
            </div>
        </div>
    </div>
</div>
