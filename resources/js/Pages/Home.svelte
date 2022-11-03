<script>
    import { inertia } from '@inertiajs/inertia-svelte'
    export let title = "John Doe";
    // let route = window.route('home');
</script>

<h1 class="text-3xl font-bold underline">
    helldwo {title}, from svelte
    <a use:inertia href="{window.route('home')}">rere</a>
</h1>
