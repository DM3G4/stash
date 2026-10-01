<script lang="ts">
    import {
        addTransaction,
        deleteTransaction,
        filterTransactions,
        getMonthTotal,
        getMonthTransactions,
        getTotalTransactions,
        globalState,
        initialState,
        setGlobalState,
    } from "$lib/shared/state.svelte";
    import { Trash, Funnel, ChevronDown, Coins, X } from "@lucide/svelte";

    function handleSubmit(event: any) {
        event.preventDefault();
        console.log(newTransaction);
        addTransaction(newTransaction.account!, {
            ...newTransaction,
            date: new Date(newTransaction.date),
        });
        newTransaction = {
            description: undefined,
            amount: undefined,
            date: now,
            account: undefined,
        };
        dialog.close();
    }

    const monthNames = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    let now = new Date();
    let previousMonth = new Date();
    previousMonth.setMonth((now.getMonth() + 11) % 12);
    let nextMonth = new Date();
    nextMonth.setMonth((now.getMonth() + 1) % 12);

    let newTransaction = $state({
        description: undefined,
        amount: undefined,
        date: now,
        account: undefined,
    });
    let filter = $state("");
    function handleFilter() {
        if (filter !== "") {
            setGlobalState(initialState.accounts);
            setGlobalState(filterTransactions(filter));
        }
    }
</script>

<div class="space-y-4">
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-semibold tracking-tight">Transacciones</h1>
            <p class="text-md text-muted-foreground mt-0.5">{getTotalTransactions()} en total</p>
        </div>
        <button
            class="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-accent text-white text-xs font-semibold hover:opacity-90 transition-opacity shadow-md shadow-orange-accent/20"
            command="show-modal"
            commandfor="dialog">
            <span>+</span> Añadir
        </button>
    </div>

    <!-- SEARCH -->
    <section
        aria-labelledby="filter-heading"
        class="grid items-center border-t border-b border-border">
        <h2 id="filter-heading" class="sr-only">Filters</h2>
        <div class="relative col-start-1 row-start-1 py-4">
            <div
                class="mx-auto flex max-w-7xl divide-x divide-border px-4 text-md sm:px-6 lg:px-8 items-center">
                <div class="pr-6">
                    <div class="flex flex-1 justify-center px-2">
                        <div class="grid w-full grid-cols-1">
                            <input
                                name="search"
                                placeholder="Search"
                                aria-label="Search"
                                class="col-start-1 row-start-1 block w-full rounded-md bg-white/5 py-1.5 pr-3 pl-10 text-base text-white outline -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:text-white focus:outline-2 focus:outline-orange-accent sm:text-sm/6"
                                onchange={() => handleFilter()}
                                bind:value={filter} />
                            <svg
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                data-slot="icon"
                                aria-hidden="true"
                                class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400">
                                <path
                                    d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                                    clip-rule="evenodd"
                                    fill-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="px-4">
                    <button
                        type="button"
                        class="text-muted-foreground hover:text-white"
                        onclick={() => setGlobalState(initialState.accounts)}>Show all</button>
                </div>

                <div class="ml-auto py-4">
                    <div class="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                        <el-dropdown class="relative inline-block">
                            <div class="flex">
                                <button
                                    class="group inline-flex justify-center items-center text-md font-medium text-muted-foreground hover:text-white">
                                    Sort <ChevronDown />
                                </button>
                            </div>

                            <el-menu
                                anchor="bottom end"
                                popover
                                class="w-40 origin-top-right rounded-md bg-card shadow-2xl ring-1 ring-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                <div class="py-1">
                                    <!-- Selected: "font-medium text-gray-900", Not Selected: "text-gray-500" -->
                                    <a
                                        href="#"
                                        class="block px-4 py-2 text-md font-medium text-card-foreground focus:bg-secondary focus:outline-hidden"
                                        >Default</a>
                                </div>
                            </el-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="md:block">
        <div class="flex flex-col-reverse md:grid md:grid-cols-3 rever gap-4">
            {#each [previousMonth, now, nextMonth] as month}
                <!-- style={{ gridTemplateColumns: `repeat(${grouped.length}, minmax(280px, 1fr))` }} -->
                <!-- {grouped.map(([key, list]) => {
            const total = monthTotal(list);
            return ( -->
                <div class="flex flex-col min-w-0">
                    <!-- {/* Month header */} -->
                    <div class="flex items-center justify-between mb-2 px-1">
                        <h2
                            class="text-md font-semibold text-muted-foreground uppercase tracking-widest truncate">
                            {monthNames[month.getMonth()]}
                        </h2>
                        <span
                            class={`text-xs font-semibold mono shrink-0 ml-2 ${getMonthTotal(month) >= 0 ? "text-(--green-text)" : "text-(--red-text)"}`}>
                            {getMonthTotal(month) >= 0 ? "+" : ""}{getMonthTotal(month).toFixed(2)}
                        </span>
                    </div>
                    <!-- {/* Transactions */} -->
                    <div
                        class="rounded-xl border border-border bg-card divide-y divide-border flex-1">
                        <!-- {list.map((t) => (
                    <TxnRow key={t.id} t={t} fmt={fmt} onView={openView} onEdit={openEdit} onDelete={(id) => setDeleteConfirm(id)} compact />
                  ))} -->
                        {#if getMonthTransactions(month).length > 0}
                            {#each getMonthTransactions(month) as tx}
                                <!-- onClick={() => onView(t)} -->
                                <div
                                    class="flex items-center gap-3 px-3 py-2.5 hover:bg-secondary transition-colors group cursor-pointer">
                                    <div
                                        class={`rounded-lg bg-secondary flex items-center justify-center shrink-0`}>
                                        <Coins />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-md font-medium truncate leading-tight">
                                            {tx.description}
                                        </p>
                                        <p class="text-sm text-muted-foreground truncate">
                                            {tx.date.toLocaleDateString("es", {
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </p>
                                    </div>
                                    <div class="flex items-center gap-1 shrink-0">
                                        <!-- ${t.type === "income" ? "text-[var(--green-text)]" : ""} -->
                                        <p class={`text-md mono `}>
                                            {tx.amount >= 0 ? "+" : "-"}${Math.abs(
                                                tx.amount,
                                            ).toFixed(2)}
                                        </p>
                                        <!-- onClick={(e) => e.stopPropagation()} -->
                                        <div
                                            class="flex opacity-0 group-hover:opacity-100 transition-opacity">
                                            <!-- onClick={() => onEdit(t)} -->
                                            <!-- <button
                                                class="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground scale-75">
                                                <Pencil />
                                            </button> -->
                                            <!-- onClick={() => onDelete(t.id)} -->
                                            <button
                                                class="p-1 rounded hover:bg-red-500/20 text-muted-foreground hover:text-red-texts scale-75"
                                                onclick={() => deleteTransaction(tx.description)}>
                                                <Trash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        {:else}
                            <div
                                class="flex justify-center w-full items-center gap-3 p-5 hover:bg-secondary transition-colors group cursor-pointer">
                                <p
                                    class="text-md font-medium text-muted-foreground truncate leading-tight">
                                    No hay transacciones
                                </p>
                            </div>
                        {/if}
                    </div>
                </div>
                <!-- );
          })} -->
            {/each}
        </div>
    </div>

    <!-- Modal -->
    <el-dialog>
        <dialog
            id="dialog"
            aria-labelledby="dialog-title"
            class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
            <el-dialog-backdrop
                class="fixed inset-0 bg-background/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            ></el-dialog-backdrop>

            <div
                class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                <el-dialog-panel
                    class="relative transform overflow-hidden rounded-lg bg-card px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-5 text-card-foreground">
                            <h3 class="font-semibold">
                                <!-- {initial ? "Edit Transaction" : "New Transaction"} -->
                                Nueva transacción
                            </h3>
                            <!-- onClick={onClose} -->
                            <button
                                class="text-muted-foreground hover:text-foreground p-1"
                                command="close"
                                commandfor="dialog">
                                <X />
                            </button>
                        </div>
                        <form onsubmit={handleSubmit} class="space-y-4">
                            <!-- <div class="flex gap-2 p-1 rounded-lg bg-secondary">
                                <button
                                    type="button"
                                    class="flex-1 py-1.5 text-md font-bold capitalize transition-all border-b-4 border-b-accent text-foreground">
                                    Gasto
                                </button>
                                <button
                                    type="button"
                                    class="opacity-25 flex-1 py-1.5 text-md font-bold capitalize transition-all border-b-4 border-b-green-accent text-foreground">
                                    Ingreso
                                </button>
                            </div> -->

                            <div>
                                <label
                                    for="description"
                                    class="block text-xs font-medium text-muted-foreground mb-1.5"
                                    >Descripción</label>
                                <!-- value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} -->
                                <input
                                    id="description"
                                    required
                                    class="w-full px-3 py-2 rounded-lg border border-border bg-secondary text-md text-foreground focus:outline-none focus:border-orange-accent focus:ring-1 focus:ring-orange-accent/30"
                                    placeholder="e.g. Netflix subscription"
                                    bind:value={newTransaction.description} />
                            </div>
                            <div>
                                <label
                                    for="amount"
                                    class="block text-xs font-medium text-muted-foreground mb-1.5"
                                    >Monto</label>
                                <!-- value={form.amount || ""} onChange={(e) => setForm((f) => ({ ...f, amount: parseFloat(e.target.value) || 0 }))} -->
                                <input
                                    id="amount"
                                    required
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    class="w-full px-3 py-2 rounded-lg border border-border bg-secondary text-md text-foreground focus:outline-none focus:border-orange-accent focus:ring-1 focus:ring-orange-accent/30 mono"
                                    placeholder="0.00"
                                    bind:value={newTransaction.amount} />
                            </div>
                            <div>
                                <label
                                    for="date"
                                    class="block text-xs font-medium text-muted-foreground mb-1.5"
                                    >Fecha</label>
                                <!-- value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} -->
                                <input
                                    id="date"
                                    required
                                    type="date"
                                    class="w-full px-3 py-2 rounded-lg border border-border bg-secondary text-foreground text-md focus:outline-none focus:border-orange-accent focus:ring-1 focus:ring-orange-accent/30"
                                    bind:value={newTransaction.date} />
                            </div>
                            <div>
                                <label
                                    for="accounts"
                                    class="block text-xs font-medium text-muted-foreground mb-1.5"
                                    >Cuenta</label>
                                <!-- value={form.accountId} onChange={(e) => setForm((f) => ({ ...f, accountId: e.target.value }))} -->
                                <select
                                    id="accounts"
                                    class="w-full px-3 py-2 rounded-lg border border-border text-foreground bg-secondary text-md focus:outline-none focus:border-orange-accent focus:ring-1 focus:ring-orange-accent/30"
                                    bind:value={newTransaction.account}>
                                    <option selected disabled>Seleccionar...</option>
                                    {#each globalState.accounts as acc}
                                        <option value={acc.name}>{acc.name}</option>
                                    {/each}
                                </select>
                            </div>

                            <button
                                type="submit"
                                class="w-full py-2.5 rounded-lg bg-orange-accent text-white text-md font-semibold hover:opacity-90 mt-2 shadow-md shadow-orange-accent/20"
                                command="close"
                                commandfor="dialog">
                                Añadir transacción
                            </button>
                        </form>
                    </div>
                </el-dialog-panel>
            </div>
        </dialog>
    </el-dialog>
</div>
