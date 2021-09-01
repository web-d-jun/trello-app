<script>
  import Icon from "svelte-fa";
  import { faColumns, faListAlt, faHome } from "@fortawesome/free-solid-svg-icons";
  import Main from "@/pages/main.svelte";
  let component = Main;
  const menuItems = [
    { id: 1, name: "Board", icon: faColumns, isActive: true },
    { id: 2, name: "templates", icon: faListAlt, isActive: false },
    { id: 3, name: "Home", icon: faHome, isActive: false },
  ];

  const selectMenu = (menuItem) => {
    menuItems.forEach((x) => {
      x.isActive = false;
    });
    if (!menuItem.isActive) {
      menuItem.isActive = true;
    }
    menuItems = menuItems;
  };
</script>

<svelte:head>
  <title>Board | Svelte</title>
</svelte:head>

<div class="container">
  <div class="left__contents">
    <ul class="menu">
      {#each menuItems as menuItem}
        <li class="menu__button">
          <button type="button" class="button" class:isActive={menuItem.isActive} on:click={() => selectMenu(menuItem)}><Icon icon={menuItem.icon} /> {menuItem.name}</button>
        </li>
      {/each}
    </ul>
  </div>
  <div class="right__contents">
    <svelte:component this={component} />
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    height: calc(100% - 38px);
    overflow-y: auto;
    .left__contents {
      margin: 40px 0 0 0;
      padding: 0 16px;
      width: 240px;
      & .menu {
        list-style: none;
        margin: 0;
        padding: 0;
        & .menu__button {
          margin-bottom: 4px;
          .button {
            width: 100%;
            height: 32px;
            border-radius: 4px;
            border: 0;
            outline: 0;
            background-color: transparent;
            margin: 0;
            text-align: left;
            transition: all 0.4s ease-in-out;
            font-size: 1.4rem;
            &:hover {
              background-color: rgba(9, 30, 66, 0.08);
              cursor: pointer;
            }
            &:active {
              background-color: rgba(9, 30, 66, 0.1);
            }
            &.isActive {
              background-color: #e4f0f6;
              color: #0079bf;
            }
          }
        }
      }
    }
    .right__contents {
      max-width: 825px;
      min-width: 288px;
      width: 100%;
      margin: 40px 16px 0;
    }
  }
</style>
