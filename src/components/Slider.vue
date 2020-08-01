<template>
  <div class="slider">
    <transition :name="transitionName">
      <div class="slide" :key="currentSlotName">
        <slot :name="currentSlotName" />
      </div>
    </transition>
    <transition :name="transitionName">
      <div class="slide" :key="currentSlotName">
        i
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

export interface SliderController {
  previous(): void;
  next(): void;
}

@Component
export default class SlideContainer extends Vue {
  private previousSlotIndex = 0;
  private currentSlotIndex = 0;

  @Prop({ required: true })
  private readonly sliderRef!: (ref: SliderController) => void;

  mounted(): void {
    typeof this.sliderRef === "function" &&
      this.sliderRef({
        next: this.next.bind(this),
        previous: this.previous.bind(this),
      });
  }

  private get slotNames(): string[] {
    return Object.keys(this.$slots);
  }

  private get currentSlotName(): string {
    const hasNext = this.currentSlotIndex < this.slotNames.length;
    return hasNext ? this.slotNames[this.currentSlotIndex] : "";
  }

  private get transitionName(): string {
    return this.currentSlotIndex > this.previousSlotIndex
      ? "slide-right-left"
      : "slide-left-right";
  }

  private next(): void {
    if (this.currentSlotIndex < this.slotNames.length - 1) {
      this.previousSlotIndex = this.currentSlotIndex;
      this.currentSlotIndex++;
    }
  }

  private previous(): void {
    if (this.currentSlotIndex) {
      this.previousSlotIndex = this.currentSlotIndex;
      this.currentSlotIndex--;
    }
  }
}
</script>

<style scoped>
.slide-right-left-enter-to,
.slide-right-left-leave-to,
.slide-left-right-enter-to,
.slide-left-right-leave-to {
  transition: all 1s cubic-bezier(0.67, 0.59, 0.76, 0.42) 0.3s;
}

.slide-right-left-enter-active {
  transform: translatex(100%);
  opacity: 0;
}
.slide-right-left-enter-to {
  transform: translatex(0);
  opacity: 1;
}
.slide-right-left-leave-active {
  transform: translatex(0);
  opacity: 1;
}
.slide-right-left-leave-to {
  transform: translatex(-100%);
  opacity: 0;
}

.slide-left-right-enter-active {
  transform: translatex(-100%);
  opacity: 0;
}
.slide-left-right-enter-to {
  transform: translatex(0);
  opacity: 1;
}
.slide-left-right-leave-active {
  transform: translatex(0);
  opacity: 1;
}
.slide-left-right-leave-to {
  transform: translatex(100%);
  opacity: 0;
}

.slider {
  position: relative;
  height: 100%;
  width: 100%;
}

.slider .slide {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
