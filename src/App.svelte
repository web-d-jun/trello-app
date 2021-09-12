<script>
  import Header from '@/layout/TheHeader.svelte';
  import Boards from '@/pages/boards.svelte';
  import Board from '@/pages/board.svelte';
  import { Router, Route } from 'svelte-routing';
  import { globalHistory } from 'svelte-routing/src/history';
  import { onDestroy, onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import { changeHeaderBackground } from '@/store.js';

  changeHeaderBackground.update((n) => false);

  let unsub = '';

  if (window.location.pathname === '/') {
    navigate('/boards', { replace: true });
  }
  onMount(() => {
    unsub = globalHistory.listen(({ location, action }) => {
      if (location.pathname.indexOf('/b/') > -1) {
        changeHeaderBackground.update((n) => true);
      }
    });
  });
  onDestroy(() => {
    unsub();
  });

  export let url = '';
</script>

<Header />

<Router url="{url}">
  <Route path="/boards"><Boards /></Route>
  <Route path="b/:id" let:params><Board id="{params.id}" /></Route>
</Router>

<style lang="scss">
  /* :root {
    margin: 0;
    padding: 0;
  } */
  :global(html, body) {
    font-size: 62.5%;
  }
  :global(body) {
    padding: 0;
  }
  :global(*) {
    box-sizing: border-box;
  }
</style>
