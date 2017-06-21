<template lang="pug">
  .resultCube(@click="showMore()" v-bind:class="{ showMore: isClick }")
    .cubeContain
      .profName {{schoolData.prof}} {{schoolData.score}}
      i(v-bind:href="schoolData.page" target="blank").fa.fa-globe
      a(v-bind:href="schoolData.page" target="blank") {{schoolData.page}}
      .schoolTile {{schoolData.school}} {{schoolData.rank}}
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
    schoolData: Object,
  },
  methods: {
    showMore() {
      if (this.isClick){
        this.isClick = false;
        this.$emit('fly', ['39','180', 1.8] );
      }
      else{
        this.isClick = true;
        this.$emit('fly', [this.schoolData.latlong[0], this.schoolData.latlong[1], 12]);
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
  // padding: 8px 0 0 17px
  box-sizing: border-box
  font-size: 1.5em
  transition: .3s
  cursor: pointer
  overflow: hidden
  animation: rise .8s 1
  &:hover
    background-color: rgba($cube-color, 0.35)

@keyframes rise
  0%
    margin-top: 8px
    opacity: 0
  100%
    margin-top: 0px
    opacity: 1

.cubeContain
  // padding: 10px 10px 10px 20px
  padding-right: 17px

.showMore
  height: 400px


</style>
