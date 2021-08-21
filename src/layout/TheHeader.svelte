<script>
  import Icon from "svelte-fa";
  import { faHome, faColumns, faPlus, faBell, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
</script>

<header id="header">
  <div class="header-band"><Icon icon={faColumns} /> Trello</div>
  <div class="button-group">
    <button type="button" class="button"> <Icon icon={faHome} /> </button>
    <button type="button" class="button"><span class="icon"><Icon icon={faColumns} /></span><span>Boards </span></button>
    <button type="button" class="button">Jump to....</button>
  </div>
  <div class="button-group">
    <button type="button" class="button"> <span class="icon"><Icon icon={faPlus} /></span> </button>
    <button type="button" class="button"><span class="icon"><Icon icon={faExclamationCircle} /></span></button>
    <button type="button" class="button"><span class="icon"><Icon icon={faBell} /></span></button>
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
        &:hover {
          background-color: rgba(#026aa7, 0.5);
          cursor: pointer;
        }
        & .icon {
          display: inline-block;
          width: 20px;
        }
      }
    }
  }
</style>
