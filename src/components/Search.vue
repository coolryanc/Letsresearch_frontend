<template lang="pug">
  #search
    .content
      .search-holder
        form
        .awesomplete
         input(placeholder="Search Domain" v-model="searchString")
         .button
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

@import "../sass/variables"
@import "../sass/common"

#search
  +setSize
  background-color: $secondary-color

.content
  width: 100%
  height: 50%
  padding: 2em 5em
  box-sizing: border-box
  max-width: 64em
  margin: auto
  
.search-holder
  +center
  width: 100%
  height: 50%
  position: relative

.awesomplete
  width: 100%
  height: 100%


.awesomplete input
  +center
  border-radius: 10px
  display: block
  padding: 0.8em 3em 0.8em 0.8em
  font-size: 1.4em
  border: none
  &:focus
    outline: none

.button
  +center
  left: 65%
  width: 30px
  height: 30px
  background-image: url('../assets/search.svg')
  background-repeat: no-repeat
  font-size: 2em
</style>
