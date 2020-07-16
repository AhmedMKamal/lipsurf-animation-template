<template>
  <div id="app">
    <transition name="slide-right-left">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
  position: relative;
}
.slide-right-left-enter-to,
.slide-right-left-leave-to {
  transition: all 1s cubic-bezier(0.67, 0.59, 0.76, 0.42) 0.3s;
}
.slide-right-left-enter-active {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-left-leave-active {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
