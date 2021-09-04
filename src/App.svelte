<script>
  import Header from "@/layout/TheHeader.svelte";
  import Boards from "@/pages/boards.svelte";
  import Board from "@/pages/board.svelte";
  import { Router, Route } from "svelte-routing";

  export let url = "";
</script>

<Header />

<Router {url}>
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
