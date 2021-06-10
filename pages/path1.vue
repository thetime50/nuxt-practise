<template>
  <div class="component-path1">
    <div>this is page1</div>
    <nuxt-child top="page1" />
  </div>
</template>

<script>
/* message */

export default {
  name: 'Path1',
  data () {
    return {
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.component-path1 {
  //
}
</style>
