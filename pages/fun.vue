<template>
  <div class="component-fun">
    hello
    <div class="title">
      title
    </div>
  </div>
</template>

<script>
/* message */

export default {
  name: 'Fun',

  data () {
    return {
      a: { b: 123 },
      c: { d: 666, e: 'fff' },
    }
  },
}
</script>
<style scoped>

div { color: #aaf; }
</style>
<style lang="scss" scoped>
div {
  color: #faa;

  .title {
    background: #dff;
  }
  div { color: #aaf; }
}
</style>
