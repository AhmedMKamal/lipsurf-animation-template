<template>
  <div class="abs-container">
    <div class="rel-container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
        finibus magna, vulputate varius sapien. Nullam lacinia, diam a laoreet
        aliquam, nisi augue feugiat felis, nec ultrices risus sapien vel tellus.
        Nullam et vulputate risus, eu venenatis enim. Aliquam ipsum quam, mattis
        in turpis ut, placerat accumsan nisi. Fusce pharetra, massa a semper
        venenatis, erat orci mattis neque, ac suscipit nisl nulla vitae magna.
        Aliquam erat volutpat. Mauris in mi congue, consectetur justo in,
        efficitur felis. Praesent consequat iaculis libero et porttitor.
        Suspendisse posuere, tellus ac malesuada pulvinar, felis arcu elementum
        lacus, id tincidunt felis nibh ultricies sem. Pellentesque suscipit ante
        ac lectus fermentum, faucibus ultricies urna convallis.
      </p>
      <p>
        Vestibulum feugiat venenatis venenatis. Mauris id enim vel nisi
        malesuada gravida eget in velit. Vivamus magna sem, interdum porta lacus
        at, sagittis hendrerit tortor. Aenean eget rutrum ipsum, sit amet
        vestibulum urna. Integer nisi enim, congue in elit eget, scelerisque
        tincidunt risus. Donec non felis mauris. Cras sit amet massa pretium,
        vehicula leo facilisis, finibus tortor. Donec at mauris tincidunt eros
        imperdiet molestie. Ut vel congue risus. Quisque euismod orci erat.
      </p>
      <p>
        Fusce ultricies orci quis malesuada dictum. Donec ac suscipit enim.
        Integer nec ante a nisl ultricies fringilla quis a quam. Integer dictum
        orci metus. Ut porta, ligula eget sagittis ullamcorper, felis mauris
        convallis quam, vel vehicula enim nibh non arcu. In commodo dui eget
        urna hendrerit fermentum. Aenean sit amet ante laoreet, finibus dolor
        id, feugiat orci. Sed quis odio tincidunt erat porta eleifend nec at
        sapien. Aliquam aliquet turpis vitae leo laoreet gravida. Phasellus
        pulvinar eget sapien sit amet sagittis. Duis ultricies orci et sagittis
        tempor. Maecenas ut nunc malesuada, luctus massa a, tempor lectus.
      </p>
      <p>
        Suspendisse placerat lacus tellus. Suspendisse ut interdum tellus, vel
        ornare nibh. Donec erat nibh, dapibus sit amet efficitur sed, dapibus in
        ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam
        consectetur tincidunt lectus id vulputate. Nulla vel interdum mauris.
        Etiam a rhoncus odio. Phasellus et faucibus arcu. Maecenas ipsum lacus,
        fermentum ac interdum semper, sollicitudin eget ligula. Curabitur
        dapibus neque vitae est gravida imperdiet. Morbi interdum lectus eu nunc
        tempus eleifend.
      </p>
      <p>
        Etiam in nibh hendrerit, scelerisque est a, efficitur lacus. Vivamus
        gravida, justo et pharetra pretium, ligula dui aliquam leo, nec volutpat
        ipsum lacus eu mauris. Fusce dignissim laoreet magna, in placerat leo
        imperdiet vitae. Maecenas commodo mauris congue, efficitur tortor eget,
        maximus elit. Vivamus enim tortor, facilisis dictum ultrices quis,
        blandit vitae metus. Mauris a varius ex, eget aliquet mi. Nullam sed
        hendrerit turpis. Quisque feugiat eu nibh nec feugiat. Suspendisse
        pulvinar lacus ut est vehicula, vel laoreet nibh euismod. Fusce eu
        maximus urna. In hac habitasse platea dictumst. Morbi at elit hendrerit,
        tempor justo non, viverra ipsum. Donec rutrum pharetra lacus, facilisis
        molestie eros imperdiet ut. Pellentesque at fermentum dolor, eu varius
        tellus.
      </p>
      <p class="text-center">
        <router-link to="/get-started">Next</router-link>
      </p>
      <div class="doodle doodle-0" />
      <div class="doodle doodle-1" />
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeSlide"
};
</script>

<style scoped>
.abs-container {
  padding: 0 5vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  text-align: justify;
}
.rel-container {
  position: relative;
}
.text-center {
  text-align: center;
}
.doodle {
  position: absolute;
  width: 20rem;
  height: 20rem;
  z-index: -1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.doodle-0 {
  left: 1%;
  top: 1%;
  background-image: url("../assets/doodles/1.png");
}
.doodle-1 {
  right: 15%;
  bottom: 1%;
  background-image: url("../assets/doodles/2.png");
}
</style>
