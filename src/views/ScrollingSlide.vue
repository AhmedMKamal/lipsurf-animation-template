<template>
  <div>
    <h1>SCROLLING</h1>
    <p>Here are the scroll commands:</p>
    <ul>
      <li>Scroll Down</li>
      <li>Scroll Up</li>
      <li>Bottom</li>
      <li>Top</li>
      <li>Scroll Left</li>
      <li>Scroll Right</li>
      <li>Auto Scroll</li>
    </ul>
    <button @click="previousSlide">Previous</button>
    <button @click="nextSlide">Next</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Scrollingdiv extends Vue {
  @Prop({ required: true })
  private readonly nextSlide!: () => void;

  @Prop({ required: true })
  private readonly previousSlide!: () => void;
}
</script>
