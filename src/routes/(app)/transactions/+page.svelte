<script>
    import { Trash, Pencil, Gift, Funnel, ChevronDown, Cherry, X } from "@lucide/svelte";
</script>

<div class="space-y-4">
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-semibold tracking-tight">Transacciones</h1>
            <p class="text-md text-muted-foreground mt-0.5">0 total</p>
        </div>
        <!-- onClick={openAdd} -->
        <button
            class="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-accent text-white text-xs font-semibold hover:opacity-90 transition-opacity shadow-md shadow-orange-accent/20"
            command="show-modal"
            commandfor="dialog">
            <span>+</span> Añadir
        </button>
    </div>

    <section
        aria-labelledby="filter-heading"
        class="grid items-center border-t border-b border-border">
        <h2 id="filter-heading" class="sr-only">Filters</h2>
        <div class="relative col-start-1 row-start-1 py-4">
            <div class="mx-auto flex max-w-7xl divide-x divide-border px-4 text-md sm:px-6 lg:px-8">
                <div class="pr-6">
                    <button
                        type="button"
                        command="--toggle"
                        commandfor="filters-panel"
                        class="group flex items-center font-medium text-muted-foreground hover:text-white gap-2">
                        <Funnel />
                        2 Filtros activos
                    </button>
                </div>
                <div class="pl-6">
                    <button type="button" class="text-muted-foreground hover:text-white"
                        >Clear all</button>
                </div>
            </div>
        </div>
        <el-disclosure id="filters-panel" hidden class="block border-t border-gray-200 py-10">
            <div
                class="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-md sm:px-6 md:gap-x-6 lg:px-8">
                <div class="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                    <fieldset>
                        <legend class="block font-medium">Price</legend>
                        <div class="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                            <div class="flex gap-3">
                                <div class="flex h-5 shrink-0 items-center">
                                    <div class="group grid size-4 grid-cols-1">
                                        <input
                                            id="price-0"
                                            type="checkbox"
                                            name="price[]"
                                            value="0"
                                            class="col-start-1 row-start-1 appearance-none rounded-sm border border-border bg-secondary checked:border-primary-600 checked:bg-primary-600 indeterminate:border-primary-600 indeterminate:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:border-border disabled:bg-secondary/50 disabled:checked:bg-secondary/50 forced-colors:appearance-auto" />
                                    </div>
                                </div>
                                <label
                                    for="price-0"
                                    class="text-base text-muted-foreground sm:text-md">
                                    $0+
                                </label>
                            </div>
                            <div class="flex gap-3">
                                <div class="flex h-5 shrink-0 items-center">
                                    <div class="group grid size-4 grid-cols-1">
                                        <input
                                            id="price-0"
                                            type="checkbox"
                                            name="price[]"
                                            value="0"
                                            class="col-start-1 row-start-1 appearance-none rounded-sm border border-border bg-secondary checked:border-primary-600 checked:bg-primary-600 indeterminate:border-primary-600 indeterminate:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:border-border disabled:bg-secondary/50 disabled:checked:bg-secondary/50 forced-colors:appearance-auto" />
                                    </div>
                                </div>
                                <label
                                    for="price-0"
                                    class="text-base text-muted-foreground sm:text-md">
                                    $50+
                                </label>
                            </div>
                            <div class="flex gap-3">
                                <div class="flex h-5 shrink-0 items-center">
                                    <div class="group grid size-4 grid-cols-1">
                                        <input
                                            id="price-0"
                                            type="checkbox"
                                            name="price[]"
                                            value="0"
                                            class="col-start-1 row-start-1 appearance-none rounded-sm border border-border bg-secondary checked:border-primary-600 checked:bg-primary-600 indeterminate:border-primary-600 indeterminate:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:border-border disabled:bg-secondary/50 disabled:checked:bg-secondary/50 forced-colors:appearance-auto" />
                                    </div>
                                </div>
                                <label
                                    for="price-0"
                                    class="text-base text-muted-foreground sm:text-md">
                                    $75+
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </el-disclosure>
        <div class="col-start-1 row-start-1 py-4">
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
    </section>

    <!-- {/* Mobile: stacked by month */} -->
    <div class="md:hidden space-y-4">
        <!-- {grouped.map(([key, list]) => { -->
        <!-- const total = monthTotal(list); -->
        <!-- return ( -->
        {#each [1, 2, 3, 4] as test}
            <!-- key={key} -->
            <div>
                <div class="flex items-center justify-between mb-2 px-1">
                    <h2
                        class="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                        <!-- {monthLabel(key)} -->
                    </h2>
                    <!-- ${total >= 0 ? "text-[var(--green-text)]" : "text-[var(--red-text)]"} -->
                    <span class={`text-xs font-semibold mono `}>
                        <!-- {total >= 0 ? "+" : ""}{fmt(total)} -->
                    </span>
                </div>
                <div class="rounded-xl border border-border bg-card divide-y divide-border">
                    <!-- onClick={() => onView(t)} -->
                    <div
                        class="flex items-center gap-3 px-3 py-2.5 hover:bg-secondary transition-colors group cursor-pointer">
                        <!-- ${compact ? "w-7 h-7 text-md" : "w-9 h-9 text-base"} -->
                        <div
                            class={` rounded-lg bg-secondary flex items-center justify-center shrink-0`}>
                            <Gift />
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-md font-medium truncate leading-tight">
                                <!-- {t.description} -->
                                Regalo
                            </p>
                            <p class="text-[10px] text-muted-foreground truncate">
                                {new Date().toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })}
                            </p>
                        </div>
                        <div class="flex items-center gap-1 shrink-0">
                            <!-- ${t.type === "income" ? "text-[var(--green-text)]" : ""} -->
                            <p class={`text-md font-semibold mono `}>
                                <!-- {t.type === "income" ? "+" : "−"}{fmt(t.amount)} -->
                            </p>
                            <!-- onClick={(e) => e.stopPropagation()} -->
                            <div class="flex gap-0.5 group-hover:opacity-100 transition-opacity">
                                <!--  onClick={() => onEdit(t)} -->
                                <button
                                    class="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground">
                                    <Pencil />
                                </button>
                                <!-- onClick={() => onDelete(t.id)} -->
                                <button
                                    class="p-1 rounded hover:bg-red-500/10 text-muted-foreground hover:text-red-text">
                                    <Trash />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
        <!-- ); -->
        <!-- // })} -->
    </div>

    <!-- {/* Desktop: months side by side in a scrollable horizontal grid */} -->
    <div class="hidden md:block">
        <div class="grid grid-cols-3 gap-4">
            {#each [1, 2, 3] as test}
                <!-- style={{ gridTemplateColumns: `repeat(${grouped.length}, minmax(280px, 1fr))` }} -->
                <!-- {grouped.map(([key, list]) => {
            const total = monthTotal(list);
            return ( -->
                <div class="flex flex-col min-w-0">
                    <!-- {/* Month header */} -->
                    <div class="flex items-center justify-between mb-2 px-1">
                        <h2
                            class="text-xs font-semibold text-muted-foreground uppercase tracking-widest truncate">
                            Enero
                        </h2>
                        <!-- ${total >= 0 ? "text-[var(--green-text)]" : "text-[var(--red-text)]"} -->
                        <span class={`text-xs font-semibold mono shrink-0 ml-2 `}>
                            <!-- {total >= 0 ? "+" : ""}{fmt(total)} -->
                            $0
                        </span>
                    </div>
                    <!-- {/* Summary chips */} -->
                    <div class="flex gap-2 mb-2 px-1">
                        <span
                            class="text-[10px] text-green-text bg-green-accent/10 px-2 py-0.5 rounded-full mono">
                            <!-- +{fmt(list.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0))} -->
                            $0
                        </span>
                        <span
                            class="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full mono">
                            <!-- −{fmt(list.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0))} -->
                            $0
                        </span>
                    </div>
                    <!-- {/* Transactions */} -->
                    <div
                        class="rounded-xl border border-border bg-card divide-y divide-border flex-1">
                        <!-- {list.map((t) => (
                    <TxnRow key={t.id} t={t} fmt={fmt} onView={openView} onEdit={openEdit} onDelete={(id) => setDeleteConfirm(id)} compact />
                  ))} -->
                        {#each [1, 2, 3] as test}
                            <!-- onClick={() => onView(t)} -->
                            <div
                                class="flex items-center gap-3 px-3 py-2.5 hover:bg-secondary transition-colors group cursor-pointer">
                                <!-- ${compact ? "w-7 h-7 text-md" : "w-9 h-9 text-base"}  -->
                                <div
                                    class={`rounded-lg bg-secondary flex items-center justify-center shrink-0`}>
                                    <Cherry />
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-md font-medium truncate leading-tight">
                                        <!-- {t.description} -->
                                        Comida
                                    </p>
                                    <p class="text-[10px] text-muted-foreground truncate">
                                        {new Date().toLocaleDateString("es", {
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>
                                <div class="flex items-center gap-1 shrink-0">
                                    <!-- ${t.type === "income" ? "text-[var(--green-text)]" : ""} -->
                                    <p class={`text-md font-semibold mono `}>
                                        <!-- {t.type === "income" ? "+" : "−"}{fmt(t.amount)} -->
                                        0$
                                    </p>
                                    <!-- onClick={(e) => e.stopPropagation()} -->
                                    <div
                                        class="flex opacity-0 group-hover:opacity-100 transition-opacity">
                                        <!-- onClick={() => onEdit(t)} -->
                                        <button
                                            class="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground scale-75">
                                            <Pencil />
                                        </button>
                                        <!-- onClick={() => onDelete(t.id)} -->
                                        <button
                                            class="p-1 rounded hover:bg-red-500/10 text-muted-foreground hover:text-red-texts scale-75">
                                            <Trash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
                <!-- );
          })} -->
            {/each}
        </div>
    </div>

    <!-- {/* Delete confirm */} -->
    <!-- {deleteConfirm && (
        <Modal onClose={() => setDeleteConfirm(null)}>
          <div class="p-6 text-center">
            <div class="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
              <TrashIcon />
            </div>
            <h3 class="font-semibold mb-1">Delete transaction?</h3>
            <p class="text-md text-[var(--muted-foreground)] mb-6">This action cannot be undone.</p>
            <div class="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} class="flex-1 py-2 rounded-lg border border-[var(--border)] text-md hover:bg-[var(--secondary)]">Cancel</button>
              <button onClick={() => handleDelete(deleteConfirm)} class="flex-1 py-2 rounded-lg bg-red-500 text-white text-md font-medium hover:opacity-90">Delete</button>
            </div>
          </div>
        </Modal>
      )} -->

    <!-- {/* Transaction modal */} -->
    <!-- {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {modalMode === "view" && selectedTxn ? (
            <ViewTransaction
              t={selectedTxn}
              onEdit={() => setModalMode("edit")}
              onDelete={() => { setShowModal(false); setDeleteConfirm(selectedTxn.id); }}
              onClose={() => setShowModal(false)}
            />
          ) : (
            <TransactionForm
              initial={modalMode === "edit" ? selectedTxn ?? undefined : undefined}
              onSave={handleSave}
              onClose={() => setShowModal(false)}
            />
          )}
        </Modal>
      )} -->
    <!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->

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
                            <button class="text-muted-foreground hover:text-foreground p-1">
                                <X />
                            </button>
                        </div>
                        <!-- onSubmit={submit} -->
                        <form class="space-y-4">
                            <div class="flex gap-2 p-1 rounded-lg bg-secondary">
                                <!-- {(["expense", "income"] as const).map((type) => ( -->
                                <!-- onClick={() => setForm((f) => ({ ...f, type }))} -->
                                <!-- ${form.type === type ? (type === "income" ? "bg-[var(--green-accent)] text-white" : "bg-[var(--orange-accent)] text-white") : "text-[var(--muted-foreground)]"} -->
                                <button
                                    type="button"
                                    class="flex-1 py-1.5 text-md font-bold capitalize transition-all border-b-4 border-b-accent text-foreground">
                                    Gasto
                                </button>
                                <!-- ))} -->
                            </div>

                            <div>
                                <label
                                    class="block text-xs font-medium text-muted-foreground mb-1.5"
                                    >Descripción</label>
                                <!-- value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} -->
                                <input
                                    required
                                    class="w-full px-3 py-2 rounded-lg border border-border bg-secondary text-md text-foreground focus:outline-none focus:border-orange-accent focus:ring-1 focus:ring-orange-accent/30"
                                    placeholder="e.g. Netflix subscription" />
                            </div>
                            <div>
                                <label
                                    class="block text-xs font-medium text-muted-foreground mb-1.5"
                                    >Monto</label>
                                <!-- value={form.amount || ""} onChange={(e) => setForm((f) => ({ ...f, amount: parseFloat(e.target.value) || 0 }))} -->
                                <input
                                    required
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    class="w-full px-3 py-2 rounded-lg border border-border bg-secondary text-md text-foreground focus:outline-none focus:border-orange-accent focus:ring-1 focus:ring-orange-accent/30 mono"
                                    placeholder="0.00" />
                            </div>
                            <div>
                                <label
                                    class="block text-xs font-medium text-muted-foreground mb-1.5"
                                    >Fecha</label>
                                <!-- value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} -->
                                <input
                                    required
                                    type="date"
                                    class="w-full px-3 py-2 rounded-lg border border-border bg-secondary text-foreground text-md focus:outline-none focus:border-orange-accent focus:ring-1 focus:ring-orange-accent/30" />
                            </div>
                            <div>
                                <label
                                    class="block text-xs font-medium text-muted-foreground mb-1.5"
                                    >Cuenta</label>
                                <!-- value={form.accountId} onChange={(e) => setForm((f) => ({ ...f, accountId: e.target.value }))} -->
                                <select
                                    class="w-full px-3 py-2 rounded-lg border border-border text-foreground bg-secondary text-md focus:outline-none focus:border-orange-accent focus:ring-1 focus:ring-orange-accent/30">
                                    <!-- {accounts.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)} -->
                                </select>
                            </div>

                            <button
                                type="submit"
                                class="w-full py-2.5 rounded-lg bg-orange-accent text-white text-md font-semibold hover:opacity-90 mt-2 shadow-md shadow-orange-accent/20">
                                <!-- {initial ? "Save Changes" : "Add Transaction"} -->
                                Añadir transacción
                            </button>
                        </form>
                    </div>
                </el-dialog-panel>
            </div>
        </dialog>
    </el-dialog>
</div>
