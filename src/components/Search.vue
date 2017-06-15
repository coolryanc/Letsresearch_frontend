<template lang="pug">
  #search(href="#landing" v-smooth-scroll="{ duration: 1000 }")
    Worldmap
    .content
      .introduce-text0 Over <b>10000</b> professors in <b>Top 100</b> colleges
      .introduce-text1 The <b>largest database</b> of Research Domain
      .awesomplete
       input(placeholder="Search Domain" v-model="searchString" name="searchString" type="text" @keyup.enter="submit()")
       .button
</template>

<script>

import Worldmap from '@/components/Worldmap.vue'

export default {
  name: 'search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      searchString: '',
    }
  },
  components: {
    Worldmap
  },
  methods: {
    submit () {
      console.log(this.searchString);
      this.$http.get('http://localhost:3001/submit-data?searchString=' + this.searchString).then(function (response) {
                    console.log(response);
                });
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
  background-color: $primary-color


#worldmap
  position: absolute
  right: 0

.content
  position: absolute
  top: 30px
  width: 30%
  box-sizing: border-box
  font-family: 'Nunito', sans-serif
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
.introduce-text0
  font-size: 1.6em
  color: #FFF
  b
    color: #FF7058
.introduce-text1
  color: #FFF
  font-size: 1em
  b
    color: #FF7058

.awesomplete
  width: 80%
  margin: 15px auto 0 auto
  input
    width: 90%
    min-width: 200px
    border-radius: 10px
    padding: 0.8em
    font-size: 1.4em
    border: none
    &:focus
      outline: none
      color: #444

.button
  position: absolute
  top: 50%
  transform: translateY(-50%)
  right: 3%
  width: 30px
  height: 30px
  background-image: url('../assets/search.svg')
  background-repeat: no-repeat

</style>
