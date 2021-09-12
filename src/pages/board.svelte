<script>
  import { onMount } from 'svelte';
  import { tick } from 'svelte';
  import { changeHeaderBackground } from '@/store.js';

  export let id;
  document.title = `${id} | Trello`;

  onMount(() => {
    changeHeaderBackground.update((n) => true);
  });

  let lists = [
    {
      id: 0,
      name: 'todo',
      cardList: [
        {
          id: 0,
          name: 'Trello 만들기',
        },
        {
          id: 1,
          name: 'Trello 디자인 확인',
        },
        {
          id: 2,
          name: 'Trello 테스트',
        },
      ],
    },
    {
      id: 1,
      name: 'ing',
      cardList: [
        {
          id: 0,
          name: 'Trello 기획',
        },
      ],
    },
    {
      id: 2,
      name: 'done',
      cardList: [
        {
          id: 0,
          name: 'Trello 만들기 완성',
        },
      ],
    },
    {
      id: 3,
      name: 'TEST',
      cardList: [
        {
          id: 0,
          name: 'Trello 만들기 완성',
        },
        {
          id: 1,
          name: 'Trello 만들기 완성',
        },
        {
          id: 2,
          name: 'Trello 만들기 완성',
        },
        {
          id: 3,
          name: 'Trello 만들기 완성',
        },
        {
          id: 4,
          name: 'Trello 만들기 완성',
        },
        {
          id: 5,
          name: 'Trello 만들기 완성',
        },
        {
          id: 6,
          name: 'Trello 만들기 완성',
        },
        {
          id: 7,
          name: 'Trello 만들기 완성',
        },
        {
          id: 8,
          name: 'Trello 만들기 완성',
        },
        {
          id: 9,
          name: 'Trello 만들기 완성',
        },
        {
          id: 10,
          name: 'Trello 만들기 완성',
        },
        {
          id: 11,
          name: 'Trello 만들기 완성',
        },
        {
          id: 12,
          name: 'Trello 만들기 완성',
        },
        {
          id: 13,
          name: 'Trello 만들기 완성',
        },
        {
          id: 14,
          name: 'Trello 만들기 완성',
        },
        {
          id: 15,
          name: 'Trello 만들기 완성',
        },
      ],
    },
  ];

  let inputMode = false;
  let listNameValue = '';
  let cardNameValue = '';

  const targetHeader = {
    inputMode: false,
    index: 0,
  };
  const targetComposer = {
    inputMode: false,
    index: 0,
  };

  const changeInput = async (event, value, mode, index) => {
    if (mode === 'addList') {
      inputMode = value;
      await tick();
      const inputElem = document.querySelector('.list-name-input');
      inputElem !== null && inputElem.focus();
    } else if (mode === 'addCard') {
      targetComposer.inputMode = value;
      targetComposer.index = index;
      await tick();
      const inputElem = document.querySelector('.card-name-input');
      inputElem !== null && inputElem.focus();
    }
  };

  const createCard = (event, mode, index) => {
    const modeVal = mode ?? 'list';
    event.preventDefault();
    if (event.type === 'keyup' && event.code !== 'Enter') {
      return;
    }

    if (modeVal === 'list') {
      const targetElm = document.querySelector('#listNameInput');

      lists = lists.concat({
        id: lists.length,
        name: listNameValue,
        cardList: [],
      });
      listNameValue = '';
      targetElm.focus();
    } else {
      if (!cardNameValue) {
        return;
      }
      lists[index].cardList = lists[index].cardList.concat({
        id: lists[index].cardList.length,
        name: cardNameValue,
      });
      cardNameValue = '';
    }
  };

  const focusOut = (target, index) => {
    if (target === 'listHeaderName') {
      targetHeader.inputMode = false;
      targetHeader.index = index;
    }
  };
  const focusIn = (e, target, index) => {
    if (target === 'listHeaderName') {
      targetHeader.inputMode = true;
      targetHeader.index = index;
      e.target.select();
    }
  };
  const updateName = (e) => {
    if (!e.shiftKey && e.keyCode === 13) {
      console.log(e.shiftKey, e.keyCode);
      e.preventDefault();
      // console.log(e.blur())
      e.target.blur();
      targetHeader.inputMode = false;
      targetHeader.index = index;
    }
  };
  const handleClick = (e) => {
    console.log(`this window ${e}`);
  };
  const showCardInfo = (e) => {
    console.log('show card info');
  };
  const editCardInfo = () => {
    console.log('editCardInfo');
  };
</script>

<svelte:window on:click="{handleClick}" />

<div class="board-main">
  <div class="board-header">header</div>
  <div class="board-body">
    {#each lists as list, index (list.id)}
      <div class="list-wrap">
        <div class="list-content">
          <div class="list-header">
            <textarea
              class="list-header-name"
              class:input-mode="{targetHeader.inputMode && index === targetHeader.index}"
              name=""
              id=""
              cols="30"
              rows="10"
              on:keydown="{($event) => updateName($event)}"
              on:focus="{($event) => focusIn($event, 'listHeaderName', index)}"
              on:blur="{() => focusOut('listHeaderName', index)}">{list.name}</textarea>
            <button type="button" class="more-button"><span class="material-icons-outlined"> more_horiz </span></button>
          </div>
          <div class="list-cards">
            {#each list.cardList as card, cardidx (card.id)}
              <div class="list-card" on:click|preventDefault="{showCardInfo}">
                {card.name}
                <div class="edit-button" on:click|stopPropagation="{editCardInfo}">
                  <span class="material-icons-outlined"> edit </span>
                </div>
              </div>
            {/each}
          </div>
          <div class="card-composer-container">
            {#if targetComposer.inputMode && targetComposer.index === index}
              <div class="add-card-container">
                <div class="add-coard__contents">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    class="card-name-input"
                    placeholder="Enter a title for this card..."
                    on:keyup|preventDefault="{($event) => createCard($event, 'card', index)}"
                    bind:value="{cardNameValue}"></textarea>
                </div>
                <div class="flex align-center add-button__wrap" class:visible-mode="{targetComposer.inputMode && targetComposer.index === index}">
                  <button type="button" class="add-button" on:click|preventDefault="{($event) => createCard($event, 'card', index)}">Add card</button>
                  <span class="material-icons-outlined" on:click|preventDefault="{($event) => changeInput($event, false, 'addCard', index)}"> close </span>
                </div>
              </div>
            {:else}
              <div class="add-card-button" on:click|preventDefault="{($event) => changeInput($event, true, 'addCard', index)}">
                <span class="material-icons-outlined"> add </span> <span>Add a card</span>
              </div>
            {/if}
          </div>
        </div>
      </div>
    {/each}
    <div class="add-list" class:add-mode="{inputMode}">
      <div class="add__contents">
        {#if !inputMode}
          <span class="inner__text" on:click|preventDefault="{($event) => changeInput($event, true, 'addList')}"
            ><span class="material-icons-outlined"> add </span> Add another list</span>
        {:else}
          <input type="text" id="listNameInput" class="list-name-input" placeholder="Enter list title..." on:keyup|preventDefault="{createCard}" bind:value="{listNameValue}" />
        {/if}
        <div class="flex align-center add-button__wrap" class:visible-mode="{inputMode}">
          <button type="button" class="add-button" on:click|preventDefault="{createCard}">Add list</button>
          <span class="material-icons-outlined" on:click|preventDefault="{($event) => changeInput($event, false, 'addList')}"> close </span>
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
    background-image: url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1280x1920/9d2eead0ddc23a92d7e2e24576363205/photo-1602623056709-8a613a29940c.jpg');
    background-position: 50%;
    background-size: cover;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;

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
        margin: 0 4px;

        .list-content {
          background-color: #ebecf0;
          display: flex;
          flex-direction: column;
          border-radius: 4px;
          cursor: pointer;
          max-height: 100%;
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
              font-weight: 600;
              &.input-mode {
                box-shadow: inset 0 0 0 2px #144ff7;
                background-color: #fafbfc;
                cursor: text;
              }
            }
          }
          .list-cards {
            padding: 0 6px;
            overflow-y: auto;
            overflow-x: hidden;
            .list-card {
              position: relative;
              background-color: #fff;
              border-radius: 3px;
              box-shadow: 0 1px 0 #091e4240;
              cursor: pointer;
              display: block;
              margin-bottom: 8px;
              max-width: 300px;
              min-height: 20px;
              padding: 9px 8px 7px;
              font-size: 15px;
              & .edit-button {
                position: absolute;
                width: 25px;
                height: 25px;
                right: 0;
                top: 0;
                padding: 6px;
                margin: 4px;
                border-radius: 4px;
                &:hover {
                  background-color: rgba(#000000, 0.1);
                }

                .material-icons-outlined {
                  font-size: 14px;
                }
              }
              &:hover {
                background-color: #f4f5f7;
              }
            }
          }
          .card-composer-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            .card-name-input {
              border: 0;
              outline: 0;
              resize: none;
            }
            .add-card-button {
              font-size: 15px;
              color: #647384;
              flex: 1;
              display: flex;
              align-items: center;
              padding: 4px 8px;
              margin: 2px 8px 8px 8px;
              &:hover {
                background: rgba(#000000, 0.1);
              }
              &:active {
                background: rgba(#000000, 0.2);
              }
            }
            .add-card-container {
              padding: 6px;
              .add-coard__contents {
                display: inline-block;
                width: 100%;
                .card-name-input {
                  width: 100%;
                  height: 38px;
                  font-size: 14px;
                  padding: 9px;
                  margin: 0;
                  box-shadow: 0 1px 0 #091e4240;
                  border: 0;
                  overflow: hidden;
                }
              }
            }
          }
        }
      }
      .add-list {
        display: inline-block;
        vertical-align: top;
        background-color: rgba(#ebecf0, 0.5);
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
          background-color: rgba(#ebecf0, 0.7);
        }
        &:not(.add-mode) {
          &:hover {
            background-color: rgba(#ebecf0, 0.7);
          }
        }

        .add__contents {
          .inner__text {
            color: #172b4d;
            padding: 6px 8px;
            display: flex;
            font-size: 14px;
            align-items: center;
            .material-icons-outlined {
              line-height: 0;
              color: #42526e;
            }
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
        }
      }
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
        cursor: pointer;
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
