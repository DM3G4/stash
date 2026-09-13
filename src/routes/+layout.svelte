<script lang="ts">
    import "./theme.css";
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            document.documentElement.classList.add(
                localStorage.getItem("theme"),
            );
        });
    </script>
</svelte:head>
{@render children()}
