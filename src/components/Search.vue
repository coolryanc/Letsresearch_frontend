<template lang="pug">
  #search
    #side
      #content
        #backL
          .backtext Back to home
        .introduce-text0 Over <b>9870</b> professors in <b>Top 100</b> colleges
        .introduce-text1 The <b>largest database</b> of Research Domain
        .awesomplete
         input(placeholder="Search Domain" v-model="searchString" name="searchString" type="text" @keyup.enter="submit()" @keyup.down="choose('down')" @keyup.up="choose('up')")
         .button
        .keyContain
          .keyList(v-for="(word,index) in filteredKeywords" v-if="index < 5 && searchString") {{word}}
        .result-text(v-if="resultString") Result about <b>"{{resultString}}"</b>
      #resultContain
        .innerContain
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
      resultString: '',
      schoolInfo: '',
      keywords: 'null',
      keywordsIndex: -1
    }
  },
  mounted () {
    this.$http.get('http://localhost:3001/api/keywords').then(function (response) {
                    this.keywords = response.body;
                }, function (response) {
                    console.log('error');
                });
  },
  components: {
    Worldmap,
    Resultcube
  },
  watch: {
    searchString: function(val, oldVal) {
      this.keywordsIndex = -1;
    }
  },
  methods: {
    submit () {
      var input = document.getElementsByClassName("keyList");
      if (this.keywordsIndex != -1) {
          this.searchString = input[this.keywordsIndex].innerHTML;
      }
      this.resultString = this.searchString;
      this.$http.get('http://localhost:3001/submit-data?searchString=' + this.searchString).then(function (response) {
                    this.searchString = "";
                    this.$http.get('http://localhost:3001/api/test').then(function (response) {
                                    this.schoolInfo = response.body;
                                }, function (response) {
                                    console.log('error');
                                });
                });
    },
    choose (event) {
      let chooseArray = document.getElementsByClassName("keyList");
      if (chooseArray) {
        if(this.keywordsIndex >= -1)
          event === 'down' ? this.keywordsIndex += 1 : this.keywordsIndex -= 1;
        if(this.keywordsIndex <= -1)
          this.keywordsIndex = 0;
        if(this.keywordsIndex >= chooseArray.length)
          this.keywordsIndex = 0;
        for (var i = 0; i < chooseArray.length; i++){
          if (i == this.keywordsIndex){
              chooseArray[i].classList.add('choosekey');
          }
          else{
              chooseArray[i].classList.remove('choosekey');
          }
        }
      }
    }
  },
  computed: {
    filteredKeywords () {
      let keywords_array = this.keywords,
          searchString = this.searchString;

      if(!searchString){
          return keywords_array;
      }
      searchString = searchString.trim().toLowerCase();
      keywords_array = keywords_array.filter(function(item){
          if(item.toLowerCase().indexOf(searchString) !== -1){
              return item;
          }
      })
      // Return an array with the filtered data.
      return keywords_array;
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

#content
  display: block
  padding: 0
  padding-top: 20px
  box-sizing: border-box
  width: 100%
  height: 240px
  box-sizing: border-box
  font-family: 'Nunito', sans-serif
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  justify-content: flex-start

#resultContain
  width: 100%
  height: calc( 100% - 240px )
  overflow: hidden
  .innerContain
    height: 100%
    width: 100%
    overflow: auto

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

.introduce-text0
  font-size: 1.4em
  color: #FFF
  margin-bottom: 5px
  b
    color: #FF7058
.introduce-text1
  font-size: 1.1em
  color: #FFF
  margin-bottom: 5px
  b
    color: #FF7058

.awesomplete
  width: 100%
  input
    margin: 5px auto 0 auto
    width: 80%
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
  right: 10%
  width: 30px
  height: 30px
  background-image: url('../assets/search.svg')
  background-repeat: no-repeat

.keyContain
  z-index: 999
  background-color: white
  margin-top: 1px
  width: 80%
  .keyList
    width: 100%
    padding: 16px 3px
    box-sizing: border-box
    background-color: white
    border-bottom: solid 2px rgba(black, 0.2)
    transition: 0.2s
    cursor: pointer
    &:hover
      background-color: rgba($secondary-color,0.8)
      color: #FFF

  .choosekey
    background-color: rgba($secondary-color,0.8)
    color: #FFF

.result-text
  +center
  top: 90%
  color: white
  // font-size: 1.1em
  white-space: nowrap
  b
    font-size: 1.1em
    color: #FF7058

</style>
