<template>
  <Slide :name="slideName">
    <h1>CLICKING</h1>
    <p>There are two ways to click links or buttons, and focus text boxes:</p>
    <ol>
      <li>
        Say
        <em>click [text in link or button]</em>
      </li>
      <li>
        OR... tag all the elements on the page with tag, then say the two
        characters you see in the tag. (This is useful eg. for clicking
        non-textual elements).
      </li>
    </ol>
    <button>The Big Button</button>
    <p>
      Times clicked:
      <span>0</span>
    </p>
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
export default class ClickingSlide extends Vue {
  @Prop({ required: true })
  private readonly slideName!: string

  @Prop({ required: true })
  private readonly onNext!: () => void

  @Prop({ required: true })
  private readonly onPrevious!: () => void
}
</script>
