<template lang="pug">
  #app( @scroll="handleScroll" )
    Landing
    Search
    a(id="toS" href="#search" v-smooth-scroll="{ duration: 1000 }" )
    a(id="toL" href="#landing" v-smooth-scroll="{ duration: 1000 }")
    //- router-view
</template>

<script>

import Landing from '@/components/Landing.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'app',
  data () {
    return {
      scrollPosition: 0,
      isResearch: false,
      isScroll: false
    }
  },
  methods: {
    handleScroll: function(e) {
      if (e.deltaY < 0) {
        this.clickToLanding();
      }
      else if (e.deltaY > 0) {
        this.clickToSearch();
      }
    },
    clickToSearch: function() {
      if (this.isResearch === false){
        // console.log('scrolling up');
        document.getElementById("toS").click();
        this.isResearch = true;
      }
    },
    clickToLanding: function() {
      if (this.isResearch === true){
        // console.log('scrolling down');
        document.getElementById("toL").click();
        this.isResearch = false;
      }
    },
    mouseOver: function(e) {
      let idName = e.target.id;
      if (idName !== "search"){
        // Enter map, disable app scroll
        document.getElementById("app").removeEventListener('wheel', this.handleScroll);
      }
      else{
        document.getElementById("app").addEventListener('wheel', this.handleScroll);
      }
    }
  },
  mounted () {
    document.getElementById("app").addEventListener('wheel', this.handleScroll);
    document.getElementById("search").addEventListener('mouseover', this.mouseOver);
  },
  destroyed () {
    document.getElementById("app").removeEventListener('wheel', this.handleScroll);
    document.getElementById("search").removeEventListener('mouseover', this.mouseOver);
  },
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
