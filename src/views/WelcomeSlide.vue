<template>
  <SlideContainer>
    <div>Welcome</div>
    <button @click="next">Get Started</button>
  </SlideContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SlideContainer from '@/components/SlideContainer.vue'

@Component({
  name: 'WelcomeSlide',
  components: {
    SlideContainer
  }
})
export default class WelcomeSlide extends Vue {
  private next (): void {
    this.$router.push('/get-started')
  }
}
</script>
