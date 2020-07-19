<template>
  <SlideContainer>
    <div>Welcome</div>
    <button @click="next">Next</button>
  </SlideContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SlideContainer from '@/components/SlideContainer.vue'
import { RouterDirection } from '@/store'

@Component({
  name: 'WelcomeSlide',
  components: {
    SlideContainer
  }
})
export default class WelcomeSlide extends Vue {
  private next (): void {
    this.$store.commit('setRouterDirection', RouterDirection.Forward)
    this.$router.push('/get-started')
  }
}
</script>
