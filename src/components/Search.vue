<template lang="pug">
  #search(href="#landing" v-smooth-scroll="{ duration: 1000 }")
    Worldmap
</template>

<script>

import Worldmap from '@/components/Worldmap.vue'

export default {
  name: 'search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Worldmap
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

@import "../sass/variables"
@import "../sass/common"

#search
  +setSize
  background-color: $primary-color

#worldmap
  position: absolute
  right: 0
  // bottom: 3%

</style>
