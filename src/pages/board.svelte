<script>

</script>
<div class="container">
    <div class="left__contents">
        left
    </div>
    <div class="right__contents">
        right
    </div>
</div>
<style lang="scss">
    .container {
        display: flex;
        justify-content: center;
        .left__contents {
            margin: 40px 0 0 0;
            padding: 0 16px;;
            width: 240px;
            border: 1px solid red;
        }
        .right__contents {
            max-width: 825px;
            min-width: 288px;;
            width: 100%;;
            border: 1px solid blue;
            margin: 40px 16px 0;
        }
    }
</style>