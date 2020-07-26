<template>
  <main>
    <transition :name="routerAnimation">
      <Slider :key="currentSlideName">
        <component
          v-bind:is="currentSlideName"
          :slideName="currentSlideName"
          :onNext="onNextSlide"
          :onPrevious="onPreviousSlide"
        />
      </Slider>
    </transition>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { SlideName } from '@/constants/SlideName'
import { SlideDirection } from '@/constants/SlideDirection'
import Slider from '@/components/Slider.vue'
import ActivatingSlide from '@/views/ActivatingSlide.vue'
import ScrollingSlide from '@/views/ScrollingSlide.vue'
import ClickingSlide from '@/views/ClickingSlide.vue'
import GettingHelpSlide from '@/views/GettingHelpSlide.vue'

@Component({
  components: {
    Slider,
    [SlideName.ActivatingSlide]: ActivatingSlide,
    [SlideName.ScrollingSlide]: ScrollingSlide,
    [SlideName.ClickingSlide]: ClickingSlide,
    [SlideName.GettingHelpSlide]: GettingHelpSlide
  }
})
export default class App extends Vue {
  private currentSlideName = SlideName.ActivatingSlide
  private slideDirection = SlideDirection.Forward

  private static get slideNames (): string[] {
    return Object.values(SlideName)
  }

  private get routerAnimation (): string {
    return this.slideDirection === SlideDirection.Forward
      ? 'slide-right-left'
      : 'slide-left-right'
  }

  private get currentSlideIndex (): number {
    return App.slideNames.indexOf(this.currentSlideName)
  }

  private onNextSlide (): void {
    if (this.currentSlideIndex < App.slideNames.length) {
      this.slideDirection = SlideDirection.Forward
      this.currentSlideName = App.slideNames[this.currentSlideIndex + 1]
    }
  }

  private onPreviousSlide (): void {
    if (this.currentSlideIndex) {
      this.slideDirection = SlideDirection.Backward
      this.currentSlideName = App.slideNames[this.currentSlideIndex - 1]
    }
  }
}
</script>

<style lang="scss">
.slide-right-left-enter-to,
.slide-right-left-leave-to,
.slide-left-right-enter-to,
.slide-left-right-leave-to {
  transition: all 1s cubic-bezier(0.67, 0.59, 0.76, 0.42) 0.3s;
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
