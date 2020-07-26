<template>
  <div class="abs-container">
    <div class="flex-container">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SlideContainer extends Vue {}
</script>

<style scoped lang="scss">
.abs-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.flex-container {
  display: flex;
  justify-content: center;
}

.content {
  width: 100%;

  @media (min-width: 540px) {
    width: 400px;
  }

  @media (min-width: 800px) {
    width: 600px;
  }

  @media (min-width: 1024px) {
    width: 800px;
  }
}
</style>
