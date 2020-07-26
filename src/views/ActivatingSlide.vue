<template>
  <Slide :name="slideName">
    <h1>ACTIVATING</h1>
    <p>
      LipSurf is activated (listening) when you see the red dot in the extension
      icon and is deactivated when there's no red dot and the extension icon is
      grey.
    </p>
    <button @click="onNext">Next</button>
  </Slide>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Slide from '@/components/Slide.vue'

@Component({
  components: { Slide }
})
export default class ActivatingSlide extends Vue {
  @Prop({ required: true })
  private readonly slideName!: string

  @Prop({ required: true })
  private readonly onNext!: () => void
}
</script>
