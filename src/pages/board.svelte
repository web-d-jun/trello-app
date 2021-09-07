<script>
  export let id;
  console.log(id, "tetstsetstsetestsetset");

  let inputMode = false;
  const changeInput = async (event, value) => {
    inputMode = value;
  };
</script>

<div class="board-main">
  <div class="board-header">header</div>
  <div class="board-body">
    <div class="add-container" class:add-mode={inputMode}>
      <div class="add__contents">
        {#if !inputMode}
          <span class="inner__text" on:click|preventDefault={($event) => changeInput($event, true)}>+ Add another list</span>
        {:else}
          <input type="text" class="list-name-input" placeholder="Enter list title..." />
        {/if}
        <div class="flex align-center add-button__wrap" class:visible-mode={inputMode}>
          <button type="button" class="add-button">Add list</button>
          <span class="material-icons-outlined" on:click|preventDefault={($event) => changeInput($event, false)}> close </span>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .board-main {
    display: flex;
    flex-direction: column;
    height: calc(100% - 38px);
    background-image: url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1280x1920/9d2eead0ddc23a92d7e2e24576363205/photo-1602623056709-8a613a29940c.jpg");
    background-position: 50%;
    background-size: cover;

    .board-header {
      padding: 8px 4px 4px 8px;
      position: relative;
      border: 1px solid red;
      background: #ffffff3d;
    }
    .board-body {
      border: 1px solid blue;
      height: 100%;
      .add-container {
        background-color: #00000014;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
        min-height: 32px;
        height: auto;
        width: 272px;
        transition: all 0.3s ease-in-out;

        &.add-mode {
          background-color: #ebecf0;
        }
        &:active {
          background: rgba(#000000, 0.2);
        }

        .add__contents {
          .inner__text {
            color: #172b4d;
            padding: 6px 8px;
            display: block;
            font-size: 14px;
          }
          .list-name-input {
            background-color: #fff;
            width: 100%;
            height: 36px;
            padding-left: 10px;
            position: relative;
            font-size: 16px;
            box-shadow: inset 0 0 0 2px #144ff7;
          }
          .add-button__wrap {
            margin: 4px 0 0;
            height: 0;
            overflow: hidden;
            transition: all 0.1s ease-in-out;
            &.visible-mode {
              height: 32px;
              overflow: visible;
              transition: all 0.1s ease-in-out;
            }
            & .add-button {
              background-color: #026aa7;
              color: #fff;
              height: 32px;
              font-size: 14px;
              border-radius: 4px;
              margin: 0;
              padding: 4px 12px;
            }
          }
        }
      }
    }
  }
  .flex {
    display: flex;
  }
  .align-center {
    align-items: center;
  }
</style>
