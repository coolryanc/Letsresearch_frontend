<template lang="pug">
  .resultCube
    .schoolTile {{schoolData.title}}
    .latlong {{schoolData.latlong}}
</template>

<script>

// import * as d3 from "d3"
// import * as topojson from "topojson"

export default {
  name: 'resultcube',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  props: {
    schoolData: Object
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

@import "../sass/variables"
@import "../sass/common"

.resultCube
  width: 100%
  height: 200px
  background-color: rgba(#999, 0.5)
  border-bottom: solid 10px #222
  color: white
  font-size: 1.5em


</style>
