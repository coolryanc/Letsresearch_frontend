<template lang="pug">
  #app( @scroll="handleScroll" )
    Landing
    Search
    a(id="toS" href="#search" v-smooth-scroll="{ duration: 1000 }" )
    a(id="toL" href="#landing" v-smooth-scroll="{ duration: 1000 }" )
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
      if (e.deltaY > 0) {
        this.clickToSearch();
      }
    },
    clickToSearch: function() {
        // console.log('scrolling up');
        document.getElementById("toS").click();
        setTimeout(function(){
          document.getElementById("search").style.position = "fixed";
          document.getElementById("search").style.top = "0";
        }, 1000);
    },
    clickToLanding: function() {
        // console.log('scrolling up');
        document.getElementById("search").style.position = "relative";
        window.scrollTo(0,document.getElementById("landing").offsetHeight);
        // document.getElementById("search").style.top = "";
        document.getElementById("toL").click();
    }

  },
  mounted () {
    document.getElementById("landing").addEventListener('wheel', this.handleScroll);
    document.getElementById("backL").addEventListener('click', this.clickToLanding);
  },
  destroyed () {
    document.getElementById("landing").removeEventListener('wheel', this.handleScroll);
    document.getElementById("backL").removeEventListener('click', this.clickToLanding);
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
