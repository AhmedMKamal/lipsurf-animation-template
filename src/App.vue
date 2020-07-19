<template>
  <div id="app">
    <main id="main">
      <transition :name="routerAnimation">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { RouterDirection } from '@/store'

@Component({ name: 'App' })
export default class App extends Vue {
  private get routerAnimation (): string {
    return this.$store.state.routerDirection === RouterDirection.Forward
      ? 'slide-right-left'
      : 'slide-left-right'
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main {
  position: relative;
}

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
