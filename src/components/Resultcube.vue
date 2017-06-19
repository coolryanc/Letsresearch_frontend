<template lang="pug">
  .resultCube(@click="showMore()" v-bind:class="{ showMore: isClick }")
    .profName Ryan.C
    i.fa.fa-globe {{schoolData.url}}
    .schoolTile {{schoolData.title}}
    .latlong {{schoolData.latlong}}
</template>

<script>

export default {
  name: 'resultcube',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isClick: false
    }
  },
  props: {
    schoolData: Object
  },
  methods: {
    showMore() {
      if (this.isClick){
        this.isClick = false;
      }
      else{
        this.isClick = true;
      }
    }
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
  background-color: rgba($cube-color, 0.25)
  // border-bottom: solid 10px #222
  box-shadow: 0 2px 2px 2px rgba(black, 0.2)
  margin-bottom: 3px
  color: white
  padding: 8px 0 0 17px
  box-sizing: border-box
  font-size: 1.5em
  transition: .3s
  cursor: pointer
  &:hover
    background-color: rgba($cube-color, 0.35)

.showMore
  height: 400px


</style>
