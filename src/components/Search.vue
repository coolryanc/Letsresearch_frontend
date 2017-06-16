<template lang="pug">
  #search(href="#landing" v-smooth-scroll="{ duration: 1000 }")
    #side
      #content
        #backL
          .backtext Back to home
        .introduce-text0 Over <b>10000</b> professors in <b>Top 100</b> colleges
        .introduce-text1 The <b>largest database</b> of Research Domain
        .awesomplete
         input(placeholder="Search Domain" v-model="searchString" name="searchString" type="text" @keyup.enter="submit()")
         .button
      #resultContain
        Resultcube(v-for="schoolItem in schoolInfo" v-bind:data="schoolItem" v-bind:key="schoolItem.text" :schoolData="schoolItem")
    Worldmap
</template>

<script>

import Worldmap from '@/components/Worldmap.vue'
import Resultcube from '@/components/Resultcube.vue'

export default {
  name: 'search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      searchString: '',
      schoolInfo: ''
    }
  },
  mounted () {
    this.$http.get('http://localhost:3001/api/test').then(function (response) {
                    this.schoolInfo = response.body;
                }, function (response) {
                    console.log('error');
                });
  },
  components: {
    Worldmap,
    Resultcube
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
  display: flex
  flex-direction: row


#worldmap
  position: absolute
  right: 0

#side
  display: flex
  flex-direction: column
  align-items: center
  width: 30%

#resultContain
  width: 100%
  height: 70%
  // overflow: scroll
  overflow-y: scroll
  pointer-events: unset

#backL
  width: 0
  height: 0
  border-style: solid
  border-width: 0 15px 15px 15px
  border-color: transparent transparent #ffffff transparent
  margin-bottom: 5px
  cursor: pointer
  &:hover
    .backtext
      opacity: 1
      right: -125px
  .backtext
    opacity: 0
    color: #999
    white-space: nowrap
    position: absolute
    right: -120px
    bottom: -20px
    transition: .5s

#content
  z-index: 999
  display: block
  padding: 0
  width: 100%
  height: 35%
  box-sizing: border-box
  font-family: 'Nunito', sans-serif
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  justify-content: center
.introduce-text0
  font-size: 1.4em
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
  margin: 5px auto 0 auto
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
