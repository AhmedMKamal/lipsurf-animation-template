<template>
  <lip-surf-slider :sliderRef="setSliderControllerRef">
    <!--
      Here we're registering our slides to the slider component
      it's important that we use template element with a unique
      v-slot:<name> for each slide...
    -->

    <template v-slot:activating>
      <activating-slide :nextSlide="nextSlide" />
    </template>

    <template v-slot:scrolling>
      <scrolling-slide :nextSlide="nextSlide" :previousSlide="previousSlide" />
    </template>

    <template v-slot:clicking>
      <clicking-slide :nextSlide="nextSlide" :previousSlide="previousSlide" />
    </template>

    <template v-slot:getting-help>
      <getting-help-slide :previousSlide="previousSlide" />
    </template>
  </lip-surf-slider>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ActivatingSlide from "@/views/ActivatingSlide.vue";
import ScrollingSlide from "@/views/ScrollingSlide.vue";
import ClickingSlide from "@/views/ClickingSlide.vue";
import GettingHelpSlide from "@/views/GettingHelpSlide.vue";

// This's our component.
import LipSurfSlider, { SliderController } from "@/components/Slider.vue";

@Component({
  components: {
    LipSurfSlider,
    ActivatingSlide,
    ScrollingSlide,
    ClickingSlide,
    GettingHelpSlide
  }
})
export default class App extends Vue {
  private slider?: SliderController;

  private setSliderControllerRef(ref: SliderController): void {
    this.slider = ref;
  }

  private nextSlide(): void {
    this.slider && this.slider.next();
  }

  private previousSlide(): void {
    this.slider && this.slider.previous();
  }
}
</script>
