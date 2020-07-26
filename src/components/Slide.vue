<template>
  <div>
    <slot />
    <transition name="slide-right-left">
      <div class="bg bg-0" />
      <div class="bg bg-1" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Slide extends Vue {
  @Prop({ required: true })
  private readonly name!: string
}
</script>

<style lang="scss">
.slide-right-left-enter-to,
.slide-right-left-leave-to,
.slide-left-right-enter-to,
.slide-left-right-leave-to {
  transition: all 300ms cubic-bezier(0.67, 0.59, 0.76, 0.42);
}
.slide-right-left-enter-active {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-left-leave-active {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-left-right-enter-active {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-left-right-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-right-leave-active {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
