<script>
  import image_1 from "@/assets/images/image-1.jpg";
</script>

<div class="boards-page-board-section">
  <div class="boards-page-board-section-title">Recently viewed</div>
  <div class="boards-page-board-section-list">
    <div class="boards-page-board-section-item" style="background-image: url({image_1});">
      <!-- <img src={image_1} alt="" /> -->
      <div class="item-tile-fade" />
      <div class="item-detail">
        <div class="detail-name">Project</div>
        <div class="detail-option" />
      </div>
    </div>
    <div class="boards-page-board-section-item">
      <div class="item-detail" />
    </div>
  </div>
</div>
<div class="boards-page-board-section">
  <div class="boards-page-board-section-title">YOUR WORKSPACES</div>
  <div class="boards-page-board-section-list">
    <div class="boards-page-board-section-item" />
  </div>
</div>
<div class="boards-page-board-section">
  <div class="boards-page-board-section-title">GUEST WORKSPACES</div>
  <div class="boards-page-board-section-list">
    <div class="boards-page-board-section-item" />
  </div>
</div>

<!-- "\e966" -->
<style lang="scss">
  .boards-page-board-section {
    width: 100%;
    padding: 0 0 20px;
    .boards-page-board-section-list {
      display: flex;
      flex-wrap: wrap;
    }
    .boards-page-board-section-item {
      width: 23.5%;
      border: 1px solid red;
      margin: 0 2% 2% 0;
      padding: 20px;
      position: relative;
      background-position: 50%;
      background-size: cover;
      .item-tile-fade {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #00000026;
      }
      .item-detail {
        // display: flex;
        // flex-direction: column;
        height: 80px;
      }
    }
  }
</style>
