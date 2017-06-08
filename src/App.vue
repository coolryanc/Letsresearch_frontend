<template lang="pug">
  #app
    Landing
    Search
    //- router-view
</template>

<script>

import Landing from '@/components/Landing.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'app',
  components: {
    Landing,
    Search
  }
}
</script>

<style lang="sass">

@import "sass/variables"
@import "sass/common"

*
  position: relative

html, body
  width: 100%
  height: 100%
  margin: 0
  padding: 0

#app
  width: 100%
  height: 100%

</style>
