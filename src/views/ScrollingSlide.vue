<template>
  <Slide :name="slideName">
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
    <button @click="onPrevious">Previous</button>
    <button @click="onNext">Next</button>
  </Slide>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Slide from '@/components/Slide.vue'

@Component({
  components: { Slide }
})
export default class ScrollingSlide extends Vue {
  @Prop({ required: true })
  private readonly slideName!: string

  @Prop({ required: true })
  private readonly onNext!: () => void

  @Prop({ required: true })
  private readonly onPrevious!: () => void
}
</script>
