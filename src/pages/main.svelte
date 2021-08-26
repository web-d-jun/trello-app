<script>
  import image_1 from "@/assets/images/image-1.jpg";
  import Icon from "svelte-fa";
  import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<div class="boards-page-board-section">
  <div class="boards-page-board-section-title boards-page-board-section-title--star"><span class="icon"><Icon icon={faStar} /></span> Starred boards</div>
  <div class="boards-page-board-section-list">
    <div class="boards-page-board-section-item" style="background-image: url({image_1});">
      <div class="item-tile-fade" />
      <div class="item-detail">
        <div class="detail-name">Project</div>
        <div class="detail-option">
          <div class="star-icon">
            <Icon icon={faStar} />
          </div>
        </div>
      </div>
    </div>
    <div class="boards-page-board-section-item">
      <div class="item-detail" />
    </div>
  </div>
</div>
<div class="boards-page-board-section">
  <div class="boards-page-board-section-title"><Icon icon={faClock} /> Recently viewed</div>
  <div class="boards-page-board-section-list">
    {#each items as item}
      <div class="boards-page-board-section-item" style="background-image: url({image_1});">
        <div class="item-tile-fade" />
        <div class="item-detail">
          <div class="detail-name">Project</div>
          <div class="detail-option">
            <div class="star-icon">
              <Icon icon={faStar} />
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
<div class="boards-page-board-section">
  <div class="boards-page-board-section-title">YOUR WORKSPACES</div>
  <div class="boards-page-board-section-list">
    <div class="boards-page-board-section-item" style="background-image: url({image_1});">
      <div class="item-tile-fade" />
      <div class="item-detail">
        <div class="detail-name">Project</div>
        <div class="detail-option">
          <div class="star-icon">
            <Icon icon={faStar} />
          </div>
        </div>
      </div>
    </div>
    <div class="boards-page-board-section-item">
      <div class="item-detail" />
    </div>
  </div>
</div>
<div class="boards-page-board-section">
  <div class="boards-page-board-section-title">GUEST WORKSPACES</div>
  <div class="boards-page-board-section-list">
    <div class="boards-page-board-section-item" style="background-image: url({image_1});">
      <div class="item-tile-fade" />
      <div class="item-detail">
        <div class="detail-name">Project</div>
        <div class="detail-option">
          <div class="star-icon">
            <Icon icon={faStar} />
          </div>
        </div>
      </div>
    </div>
    <div class="boards-page-board-section-item">
      <div class="item-detail" />
    </div>
  </div>
</div>

<style lang="scss">
  .boards-page-board-section {
    width: 100%;
    padding: 0 0 20px;
    .boards-page-board-section-title {
      font-size: 1.6rem;
      font-weight: 700;
      &--star {
        & .icon {
          color: rgb(230, 226, 0);
        }
      }
    }
    .boards-page-board-section-list {
      display: flex;
      flex-wrap: wrap;
    }
    .boards-page-board-section-item {
      width: 23.5%;
      margin: 0 2% 2% 0;
      padding: 8px;
      position: relative;
      background-position: 50%;
      background-size: cover;
      &:hover {
        cursor: pointer;
      }
      .item-tile-fade {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #00000026;
        &:hover {
          background-color: rgba(0, 0, 0, 0.322);
          & ~ .item-detail {
            & .detail-option {
              .star-icon {
                width: 25px;
              }
            }
          }
        }
      }
      .item-detail {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80px;
        .detail-name {
          font-size: 1.6rem;
          color: #fff;
          font-weight: 700;
        }
        .detail-option {
          width: 100%;
          height: 18px;
          .star-icon {
            position: absolute;
            right: 0;
            line-height: 1%;
            color: #fff;
            font-size: 1.2rem;
            width: 0;
            transition: width 0.2s ease-in-out;
            overflow: hidden;
            &:hover {
              width: 25px;
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
</style>
