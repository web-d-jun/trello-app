<script>
  export let id;
  console.log(id, "tetstsetstsetestsetset");
</script>

<div class="board-main">
  <div class="board-header">header</div>
  <div class="board-body">
    <div class="add-button-container">
      <span class="inner__text">+ Add another list</span>
    </div>
    <div class="flex align-center add-button__wrap">
      <button type="button" class="add-button">Add list</button>
      <span class="material-icons-outlined"> close </span>
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
      .add-button-container {
        background-color: #00000014;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
        min-height: 32px;
        height: auto;
        width: 272px;
        &:active {
          background: rgba(#000000, 0.2);
        }

        .inner__text {
          color: #172b4d;
          padding: 6px 8px;
          display: block;
          font-size: 14px;
        }
      }
      .add-button__wrap {
        margin: 4px 0 0;
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
  .flex {
    display: flex;
  }
  .align-center {
    align-items: center;
  }
</style>
