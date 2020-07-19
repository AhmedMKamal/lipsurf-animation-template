<template>
  <div class="abs-container">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SlideContainer extends Vue {}
</script>

<style scoped lang="css">
.abs-container {
  padding: 0 5vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
</style>
