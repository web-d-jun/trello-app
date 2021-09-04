<script>
  import image_1 from "@/assets/images/image-1.jpg";
  // import Icon from "svelte-fa";
  // import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";
  import { navigate } from "svelte-routing";
  import { changeHeaderBackground } from "@/store.js";

  const items = [
    { id: 1, name: "project", favorite: true },
    { id: 2, name: "스터디", favorite: false },
    { id: 3, name: "개발", favorite: false },
    { id: 4, name: "-", favorite: false },
  ];

  changeHeaderBackground.update((n) => false);

  const goProject = (id) => {
    changeHeaderBackground.update((n) => true);
    navigate(`b/${id}`, { replace: true });
  };
</script>

<div class="boards-page-board-section">
  <div class="boards-page-board-section-title boards-page-board-section-title--star"><span class="icon"><span class="material-icons-outlined">grade</span></span> Starred boards</div>
  <div class="boards-page-board-section-list">
    <div class="boards-page-board-section-item" style="background-image: url({image_1});">
      <div class="item-detail" on:click={goProject}>
        <div class="detail-name">Project</div>
        <div class="detail-option">
          <div class="star-icon__contents">
            <span class="material-icons-outlined">grade</span>
          </div>
        </div>
      </div>
      <div class="item-tile-fade" on:click={goProject} />
    </div>
    <div class="boards-page-board-section-item">
      <div class="item-detail" />
    </div>
  </div>
</div>
<div class="boards-page-board-section">
  <div class="boards-page-board-section-title"><span class="material-icons-outlined"> schedule </span> Recently viewed</div>
  <div class="boards-page-board-section-list">
    {#each items as item, i}
      <div class="boards-page-board-section-item" style="background-image: url({image_1});">
        <div class="item-detail" on:click={() => goProject(item.name)}>
          <div class="detail-name">{item.name}</div>
          <div class="detail-option">
            <div class="star-icon__contents">
              <span class="material-icons-outlined">grade</span>
            </div>
          </div>
        </div>
        <div class="item-tile-fade" on:click={goProject} />
      </div>
    {/each}
  </div>
</div>
<div class="boards-page-board-section">
  <div class="boards-page-board-section-title">YOUR WORKSPACES</div>
  <div class="boards-page-board-section-list">
    <div class="boards-page-board-section-item" style="background-image: url({image_1});">
      <div class="item-detail" on:click={goProject}>
        <div class="detail-name">Project</div>
        <div class="detail-option">
          <div class="star-icon__contents">
            <span class="material-icons-outlined">grade</span>
          </div>
        </div>
      </div>
      <div class="item-tile-fade" on:click={goProject} />
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
      <div class="item-detail">
        <div class="detail-name">Project</div>
        <div class="detail-option">
          <div class="star-icon__contents">
            <span class="material-icons-outlined">grade</span>
          </div>
        </div>
      </div>
      <div class="item-tile-fade" />
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
          & ~ .item-detail {
            & .detail-option {
              .star-icon__contents {
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
        position: relative;
        z-index: 1;

        &:hover {
          & ~ .item-tile-fade {
            background-color: rgba(0, 0, 0, 0.322);
          }
          & .detail-option {
            .star-icon__contents {
              width: 25px;
            }
          }
        }
        .detail-name {
          font-size: 1.6rem;
          color: #fff;
          font-weight: 700;
        }
        .detail-option {
          width: 100%;
          height: 18px;
          .star-icon__contents {
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
            .material-icons-outlined {
              font-size: 16px;
              &.starred {
                color: yellow;
              }
            }
          }
        }
      }
    }
  }
</style>
