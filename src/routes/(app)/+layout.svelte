<script lang="ts">
    import LayoutDashboard from "@lucide/svelte/icons/layout-dashboard";
    import ArrowLeftRight from "@lucide/svelte/icons/arrow-left-right";
    import WalletMinimal from "@lucide/svelte/icons/wallet-minimal";
    import Sun from "@lucide/svelte/icons/sun";
    import { switchTheme } from "$lib/utils/theme.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <title>Stash</title>
</svelte:head>
<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
<!--
  This example requires updating your template:

  ```
  <html class="h-full">
  <body class="h-full">
  ```
-->

<div class="min-h-full">
    <nav
        class="border-b border-neutral-800/30 bg-neutral-50 dark:border-neutral-500/20 dark:bg-neutral-950"
    >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 justify-between">
                <div class="flex shrink-0 items-center scale-75">
                    <!-- LOGO -->
                    <svg
                        class="mx-auto h-12 w-auto"
                        fill="none"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g class="fill-primary-500">
                            <path
                                d="m.599609 19.2002h9.59998v9.59999h-9.59998z"
                            />
                            <path
                                d="m31.4004 28.7998h9.6v9.59999h-9.6z"
                                transform="matrix(-1 0 -0 -1 62.8008 57.5996)"
                            />
                            <path
                                d="m10.1992 19.2001 11.6-9.6v9.6l-11.6 9.6z"
                                opacity=".2"
                            />
                            <path
                                d="m21.7988 28.7999-11.6 9.6v-9.6l11.6-9.6z"
                                opacity=".5"
                            />
                            <path
                                d="m.599609 19.2 21.199991-19.2v9.59999l-11.6 9.60001z"
                                opacity=".6"
                            />
                            <path
                                d="m31.4004 28.8-21.2 19.2v-9.6l11.6-9.6z"
                                opacity=".7"
                            />
                        </g>
                    </svg>
                </div>
                <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    <!-- Current: "border-primary-600 dark:border-primary-500 text-gray-900 dark:text-white", Default: "border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-white/20 hover:text-gray-700 dark:hover:text-gray-200" -->
                    <a
                        href="/"
                        aria-current="page"
                        class="inline-flex gap-2 items-center border-b-2 border-primary-600 py-auto justify-center font-bold dark:border-primary-500 dark:text-primary-500"
                        ><LayoutDashboard />Dashboard</a
                    >

                    <a
                        href="#"
                        class="inline-flex gap-2 items-center border-b-2 border-transparent px-1 pt-1 font-bold text-neutral-900 hover:border-neutral-300 hover:text-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-50/20 dark:hover:text-neutral-200"
                        ><ArrowLeftRight />Transacciones</a
                    >
                    <a
                        href="#"
                        class="inline-flex gap-2 items-center border-b-2 border-transparent px-1 pt-1 font-bold text-neutral-900 hover:border-neutral-300 hover:text-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-50/20 dark:hover:text-neutral-200"
                        ><WalletMinimal />Cuentas</a
                    >
                </div>
                <div class="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                        type="button"
                        class="relative rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-primary-600 dark:text-gray-400 dark:hover:text-white dark:focus:outline-primary-500"
                        onclick={() => switchTheme()}
                    >
                        <span class="absolute -inset-1.5"></span>
                        <span class="sr-only">Dark mode toggle</span>
                        <Sun />
                    </button>

                    <!-- Profile dropdown -->
                    <el-dropdown class="relative ml-3">
                        <button
                            class="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-500"
                        >
                            <span class="absolute -inset-1.5"></span>
                            <span class="sr-only">Open user menu</span>
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                                class="size-8 rounded-full outline -outline-offset-1 outline-black/5 dark:outline-white/10"
                            />
                        </button>

                        <el-menu
                            anchor="bottom end"
                            popover
                            class="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
                        >
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden dark:text-gray-300 dark:focus:bg-white/5"
                                >Settings</a
                            >
                            <a
                                href="/login"
                                class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden dark:text-gray-300 dark:focus:bg-white/5"
                                >Sign out</a
                            >
                        </el-menu>
                    </el-dropdown>
                </div>
                <div class="-mr-2 flex items-center sm:hidden">
                    <!-- Mobile menu button -->
                    <button
                        type="button"
                        command="--toggle"
                        commandfor="mobile-menu"
                        class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-primary-600 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white dark:focus:outline-primary-500"
                    >
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            data-slot="icon"
                            aria-hidden="true"
                            class="size-6 in-aria-expanded:hidden"
                        >
                            <path
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            data-slot="icon"
                            aria-hidden="true"
                            class="size-6 not-in-aria-expanded:hidden"
                        >
                            <path
                                d="M6 18 18 6M6 6l12 12"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <el-disclosure id="mobile-menu" hidden class="block sm:hidden">
            <div class="space-y-1 pt-2 pb-3">
                <!-- Current: "border-primary-600 dark:border-primary-500 bg-primary-50 dark:bg-primary-600/10 text-primary-700 dark:text-primary-300", Default: "border-transparent text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-800 dark:hover:text-gray-200" -->
                <a
                    href="#"
                    aria-current="page"
                    class="block border-l-4 border-primary-600 bg-primary-50 py-2 pr-4 pl-3 text-base font-bold text-primary-700 dark:border-primary-500 dark:bg-primary-600/10 dark:text-primary-300"
                    >Dashboard</a
                >
                <a
                    href="#"
                    class="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-bold text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:bg-white/5 dark:hover:text-gray-200"
                    >Transacciones</a
                >
                <a
                    href="#"
                    class="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-bold text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:bg-white/5 dark:hover:text-gray-200"
                    >Cuentas</a
                >
            </div>
            <div
                class="border-t border-gray-200 pt-4 pb-3 dark:border-gray-700"
            >
                <div class="flex items-center px-4">
                    <div class="shrink-0">
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                            class="size-10 rounded-full outline -outline-offset-1 outline-black/5 dark:outline-white/10"
                        />
                    </div>
                    <div class="ml-3">
                        <div
                            class="text-base font-medium text-gray-800 dark:text-white"
                        >
                            Tom Cook
                        </div>
                        <div
                            class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                            tom@example.com
                        </div>
                    </div>
                    <button
                        type="button"
                        class="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-primary-600 dark:text-gray-400 dark:hover:text-white dark:focus:outline-primary-500"
                    >
                        <span class="absolute -inset-1.5"></span>
                        <span class="sr-only">Dark mode toggle</span>
                        <Sun />
                    </button>
                </div>
                <div class="mt-3 space-y-1">
                    <a
                        href="#"
                        class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200"
                        >Settings</a
                    >
                    <a
                        href="#"
                        class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200"
                        >Sign out</a
                    >
                </div>
            </div>
        </el-disclosure>
    </nav>

    <div class="py-10">
        <header>
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1
                    class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    Dashboard <i data-lucide="layout-dashboard"></i>
                </h1>
            </div>
        </header>
        <main>
            <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {@render children()}
            </div>
        </main>
    </div>
</div>
