<template>
  <div class="slider">
    <transition :name="transitionName">
      <div class="slide" :key="currentSlotName">
        <slot :name="currentSlotName" />
      </div>
    </transition>
    <transition :name="`doodles-${transitionName}`">
      <div class="doodles-container" :key="currentSlotName">
        <div class="doodles-slider">
          <div class="doodles-slide">
            <span class="doodle doodle-l" :style="getLeftDoodleStyle()" />
            <span class="doodle doodle-r" :style="getRightDoodleStyle()" />
          </div>
        </div>
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
  private readonly availableDoodlesCount = 19; // assuming that the images are named numerically (1.png, 2.png, etc...).
  private previousSlotIndex = 0;
  private currentSlotIndex = 0;
  private mappedDoodles: { [name: string]: string[] } = {};

  @Prop({ required: true })
  private readonly sliderRef!: (ref: SliderController) => void;

  mounted(): void {
    typeof this.sliderRef === "function" &&
      this.sliderRef({
        next: this.next.bind(this),
        previous: this.previous.bind(this)
      });
    this.mapDoodlesToSlots();
  }

  private get slotNames(): string[] {
    return Object.keys(this.$slots);
  }

  private get currentSlotName(): string {
    const hasNext = this.currentSlotIndex < this.slotNames.length;
    return hasNext ? this.slotNames[this.currentSlotIndex] : "";
  }

  private get currentSlotDoodles(): string[] {
    return this.mappedDoodles[this.currentSlotName] || [];
  }

  private get transitionName(): string {
    return this.currentSlotIndex > this.previousSlotIndex
      ? "slide-right-left"
      : "slide-left-right";
  }

  private mapDoodlesToSlots(): void {
    this.mappedDoodles = this.slotNames.reduce(
      (obj, name) =>
        Object.assign(obj, {
          [name]: [this.getRandomDoodle(), this.getRandomDoodle()]
        }),
      {}
    );
  }

  private getRanIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private getRandomDoodle(): string {
    return `/images/${this.getRanIntFromInterval(
      1,
      this.availableDoodlesCount
    )}.png`;
  }

  private getLeftDoodleStyle() {
    return {
      top: `${this.getRanIntFromInterval(5, 30)}%`,
      left: `${this.getRanIntFromInterval(5, 30)}%`,
      backgroundImage: `url(${this.currentSlotDoodles[0]})`
    };
  }

  private getRightDoodleStyle() {
    return {
      top: `${this.getRanIntFromInterval(50, 70)}%`,
      left: `${this.getRanIntFromInterval(40, 70)}%`,
      backgroundImage: `url(${this.currentSlotDoodles[1]})`
    };
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

<style>
@keyframes float-l {
  0% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(-1rem, 1rem, 0);
  }
  50% {
    transform: translate3d(0, -1rem, 0);
  }
  75% {
    transform: translate3d(1rem, 1rem, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes float-r {
  0% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(1rem, -1rem, 0);
  }
  50% {
    transform: translate3d(-1rem, 1rem, 0);
  }
  75% {
    transform: translate3d(1rem, -1rem, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
.doodle-l {
  animation: 20s float-l infinite;
}
.doodle-r {
  animation: 20s float-r infinite;
}
</style>

<style scoped>
.slide-right-left-enter-to,
.slide-right-left-leave-to,
.slide-left-right-enter-to,
.slide-left-right-leave-to {
  transition: all 2s ease-in-out 0.8s;
}

.doodles-slide-right-left-enter-to,
.doodles-slide-right-left-leave-to,
.doodles-slide-left-right-enter-to,
.doodles-slide-left-right-leave-to {
  transition: all 1.9s ease-in-out 0.6s;
}

.slide-right-left-enter-active,
.doodles-slide-right-left-enter-active {
  transform: translatex(100%);
  opacity: 0;
}
.slide-right-left-enter-to,
.doodles-slide-right-left-enter-to {
  transform: translatex(0);
  opacity: 1;
}
.slide-right-left-leave-active,
.doodles-slide-right-left-leave-active {
  transform: translatex(0);
  opacity: 1;
}
.slide-right-left-leave-to,
.doodles-slide-right-left-leave-to {
  transform: translatex(-100%);
  opacity: 0;
}

.slide-left-right-enter-active,
.doodles-slide-left-right-enter-active {
  transform: translatex(-100%);
  opacity: 0;
}
.slide-left-right-enter-to,
.doodles-slide-left-right-enter-to {
  transform: translatex(0);
  opacity: 1;
}
.slide-left-right-leave-active,
.doodles-slide-left-right-leave-active {
  transform: translatex(0);
  opacity: 1;
}
.slide-left-right-leave-to,
.doodles-slide-left-right-leave-to {
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
  z-index: 1;
}

.doodles-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.doodles-container .doodles-slider {
  position: relative;
  width: 100%;
  height: 100%;
}

.doodles-container .doodles-slider .doodles-slide {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}

.doodle {
  position: absolute;
  display: inline-block;
  width: 35vh;
  height: 35vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
