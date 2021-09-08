<script>
  export let id;

  let cardLists = [];

  let inputMode = false;
  const changeInput = async (event, value) => {
    inputMode = value;
  };
  const createCard = (event) => {
    event.preventDefault();
    if (event.code === "Enter") {
      cardLists = cardLists.concat({
        id: cardLists.length,
        name: event.target.value,
      });
      event.target.value = "";
      console.log(cardLists, "cardLists");
    }
  };

  let headerInputMode = false;
  const focusOut = (target) => {
    if (target === "listHeaderName") {
      headerInputMode = false;
    }
  };
  const focusIn = (e, target) => {
    if (target === "listHeaderName") {
      headerInputMode = true;
      e.target.select();
    }
  };
  const updateName = (e) => {
    if (!e.shiftKey && e.keyCode === 13) {
      console.log(e.shiftKey, e.keyCode);
      e.preventDefault();
      // console.log(e.blur())
      e.target.blur();
      headerInputMode = false;
    }
  };
</script>

<div class="board-main">
  <div class="board-header">header</div>
  <div class="board-body">
    {#each cardLists as cardList (cardList.id)}
      <div class="list-wrap">
        <div class="list-content">
          <div class="list-header">
            <textarea
              class="list-header-name"
              class:input-mode={headerInputMode}
              name=""
              id=""
              cols="30"
              rows="10"
              on:keydown={($event) => updateName($event)}
              on:focus={($event) => focusIn($event, "listHeaderName")}
              on:blur={() => focusOut("listHeaderName")}>{cardList.name}</textarea
            >
            <button type="button" class="more-button"><span class="material-icons-outlined"> more_horiz </span></button>
          </div>
          <!-- <div class="list-card">list card</div> -->
          <div class="card-composer-container" />
        </div>
      </div>
    {/each}
    <div class="add-list" class:add-mode={inputMode}>
      <div class="add__contents">
        {#if !inputMode}
          <span class="inner__text" on:click|preventDefault={($event) => changeInput($event, true)}>+ Add another list</span>
        {:else}
          <input type="text" class="list-name-input" placeholder="Enter list title..." on:keyup|preventDefault={createCard} />
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
      white-space: nowrap;
      overflow-x: auto;
      & .list-wrap {
        display: inline-block;
        width: 272px;
        height: 100%;
        vertical-align: top;
        border-radius: 4px;

        .list-content {
          background-color: #ebecf0;
          display: flex;
          flex-direction: column;
          border-radius: 4px;
          cursor: pointer;
          .list-header {
            width: 100%;
            min-height: 20px;
            flex: 0 0 auto;
            padding: 10px 8px;
            position: relative;
            padding-right: 44px;
            .more-button {
              position: absolute;
              top: 50%;
              right: 8px;
              transform: translateY(-50%);
              margin: 0;
              width: 30px;
              height: 30px;
              background-color: #ebecf0;
              border: 0;
              outline: 0;
              .material-icons-outlined {
                font-size: 1.6rem;
              }
              &:hover {
                background-color: rgba(#000000, 0.2);
                cursor: pointer;
              }
            }
            .list-header-name {
              resize: none;
              width: 100%;
              height: 28px;
              border: 0;
              margin: -4px 0;
              padding: 4px 8px;
              min-height: 20px;
              font-size: 1.6rem;
              background-color: transparent;
              cursor: pointer;
              display: block;
              &.input-mode {
                box-shadow: inset 0 0 0 2px #144ff7;
                background-color: #fafbfc;
                cursor: text;
              }
            }
          }
        }
      }
      .add-list {
        display: inline-block;
        vertical-align: top;
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
        &:not(.add-mode) {
          &:hover {
            background: rgba(#000000, 0.2);
          }
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
            margin: 0;
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
