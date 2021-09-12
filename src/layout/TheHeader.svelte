<script>
  import Icon from 'svelte-fa';
  import { faHome, faColumns, faPlus, faBell, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
  import { navigate } from 'svelte-routing';
  import { changeHeaderBackground } from '@/store.js';

  const goPage = (page) => {
    navigate(page, { replace: true });
  };
</script>

<header id="header" class:custom-header-background="{$changeHeaderBackground}">
  <div class="header-band"><Icon icon="{faColumns}" /> Trello</div>
  <div class="button-group">
    <button type="button" class="button" on:click="{() => goPage('/home')}"> <Icon icon="{faHome}" /> </button>
    <button type="button" class="button" on:click="{() => goPage('/boards')}"><span class="icon"><Icon icon="{faColumns}" /></span><span>Boards </span></button>
    <button type="button" class="button">Jump to....</button>
  </div>
  <div class="button-group">
    <button type="button" class="button"> <span class="icon"><span class="material-icons-outlined"> add </span> </span></button>
    <button type="button" class="button"><span class="material-icons-outlined"> error_outline </span></button>
    <button type="button" class="button"><span class="icon"><span class="material-icons-outlined"> notifications </span></span></button>
  </div>
</header>

<style lang="scss">
  #header {
    position: relative;
    width: 100%;
    height: 38px;
    background-color: #026aa7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.custom-header-background {
      background-color: rgb(6 3 3 / 81%);
    }
    & .header-band {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 22px;
    }
    .button-group {
      .button {
        width: auto;
        border-radius: 4px;
        font-size: 14px;
        margin: 0;
        background-color: rgba(255, 255, 255, 0.3);
        color: #fff;
        font-weight: bold;
        border: 0;
        outline: 0;
        &:hover,
        &:focus {
          background-color: rgba(255, 255, 255, 0.2);
          cursor: pointer;
        }
        &:active {
          background-color: rgba(255, 255, 255, 0.1);
        }
        & .icon {
          display: inline-block;
          width: 20px;
        }
      }
    }
  }
</style>
