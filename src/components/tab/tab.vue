<template>
<div class="tab">
<router-link class="tab-item" tag="div" to="/recommend">
<div class="tab-link">推荐</div>
</router-link>
<router-link class="tab-item" tag="div" to="/singer">
<div class="tab-link">歌手</div>
</router-link>
<router-link class="tab-item" tag="div" to="/rank">
<div class="tab-link">排行</div>
</router-link>
<router-link class="tab-item" tag="div" to="/search">
<div class="tab-link">搜索</div>
</router-link>
</div>
</template>


<script type="text/ecmascript-6">
export default {
  name: '',
  components: {
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      cursor:pointer
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>