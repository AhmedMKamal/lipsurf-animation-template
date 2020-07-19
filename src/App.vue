<template>
  <div id="app">
    <main id="main">
      <transition name="slide-left-right">
        <router-view />
      </transition>
    </main>
  </div>
</template>

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

.slide-left-right-enter-to,
.slide-left-right-leave-to {
  transition: all 1s cubic-bezier(0.67, 0.59, 0.76, 0.42) 0.3s;
}
.slide-left-right-enter-active {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-right-leave-active {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-right-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-right-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
