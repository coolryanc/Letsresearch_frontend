<template lang="pug">
  #worldmap
</template>

<script>

// import * as d3 from "d3"
// import * as topojson from "topojson"

export default {
  name: 'worldmap',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      map: "",
    }
  },
  mounted () {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoieXVhbm5uIiwiYSI6ImNqM3R2dDZuYzAxbjQycG82NjExaWtiaG0ifQ.HY_IKgp-eD6ER5J7rJFKBQ';
    this.map = new mapboxgl.Map({
      container: 'worldmap',
      style: 'mapbox://styles/yuannn/cj3twn3b800232rnhsgboa8ix',
      center: [180, 39], // starting position
      zoom: 1.8 // starting zoom
    });
  }, // End mounted
  computed: {
    markUniversity () {

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

@import "../sass/variables"
@import "../sass/common"

#worldmap
  width: 70%
  height: 100%
  // background-color: white
  box-shadow: 0 10px 10px 2px rgba(black, 0.5)
  overflow: hidden


</style>
