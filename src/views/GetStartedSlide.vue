<template>
  <SlideContainer>
    <div>Get Started</div>
    <button @click="goBack">Previous</button>
  </SlideContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SlideContainer from '@/components/SlideContainer.vue'

@Component({
  name: 'GetStartedSlide',
  components: {
    SlideContainer
  }
})
export default class GetStartedSlide extends Vue {
  private goBack (): void {
    if (window.history.length > 1) {
      this.$router.go(-1)
    } else {
      this.$router.push('/')
    }
  }
}
</script>
