<template lang="pug">
  #search(href="#landing" v-smooth-scroll="{ duration: 1000 }")
    Worldmap
    .content
      .introduce-text0 Over <b>10000</b> professors in <b>250</b> collages
      .introduce-text1 The <b>largest database</b> of Research Domain
      .search-holder
        form
        .awesomplete
         input(placeholder="Search Domain" v-model="searchString" type="text")
         .button
      .ff {{searchString}}
</template>

<script>

import Worldmap from '@/components/Worldmap.vue'

export default {
  name: 'search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      searchString: ''
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

.content
  width: 100%
  height: 50%
  padding: 2em 5em
  box-sizing: border-box
  max-width: 64em
  margin: auto
  font-family: 'Nunito', sans-serif
  display: flex
  // justify-content: center
  flex-direction: column
  align-items: center
  text-align: center
.introduce-text0
  // +center
  // top: 30%
  font-size: 1.6em
  color: #FFF
  b
     color: #FF7058
.introduce-text1
  // +center
  // top: 38%
  color: #FFF
  font-size: 1em
  b
    color: #FF7058


.search-holder
  width: 100%
  height: 80px

.awesomplete
  width: 100%
  height: 100%


.awesomplete input
  +center
  width: 50%
  border-radius: 10px
  display: block
  padding: 0.8em 3em 0.8em 0.8em
  font-size: 1.4em
  border: none
  &:focus
    outline: none

.button
  +center
  left: 75%
  width: 30px
  height: 30px
  background-image: url('../assets/search.svg')
  background-repeat: no-repeat
  font-size: 2em
>>>>>>> cdf6904d470d0c4e2c2fb677dc15bc3ee8d3b165
</style>
