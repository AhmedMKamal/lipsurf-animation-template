<template>
  <div>
    <h1>ACTIVATING</h1>
    <p>
      LipSurf is activated (listening) when you see the red dot in the extension
      icon and is deactivated when there's no red dot and the extension icon is
      grey.
    </p>
    <button @click="nextSlide">Next</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ActivatingSlide extends Vue {
  @Prop({ required: true })
  private readonly nextSlide!: () => void;
}
</script>
