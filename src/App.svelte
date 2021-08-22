<script>
  import Header from "@/layout/TheHeader.svelte";
  import Board from "@/pages/board.svelte";
  import Main from "@/pages/main.svelte";
  import { Router, Route } from "svelte-routing";

  export let url = "";
</script>

<Header />

<Router {url}>
  <div>
    <Route path="board"><Board /></Route>
    <Route path="Main" component={Main} />
  </div>
</Router>

<style lang="scss">
  /* :root {
    margin: 0;
    padding: 0;
  } */
  :global(body) {
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
</style>
