<template lang="pug">
  .resultCube(@click="showMore()" v-bind:class="{ showMore: isClick }")
    .cubeContain
      .marks
        .rank QS Ranking {{schoolData.rank+1}}
        .region(v-if="schoolData.region") {{schoolData.region}}
      .profile
        i.fa.fa-user
        .profName {{schoolData.prof}}
      a(v-bind:href="schoolData.page" target="blank")
        i.fa.fa-globe
        span {{schoolData.page}}
      .school
        i.fa.fa-building
        .schoolTitle {{schoolData.school}}
      .detail(v-if="isClick")
        span Total
        span
        .light {{schoolData.paper}}
        span works,
        span there are
        span
        .light {{schoolData.queryPaper}}
        span works about {{res}}
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
    res: String
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
  background-color: rgba($cube-color, 0.6)
  box-shadow: 0 2px 2px 2px rgba(black, 0.4)
  margin-bottom: 2px
  color: #444
  box-sizing: border-box
  font-size: 1.5em
  transition: .3s
  cursor: pointer
  overflow: hidden
  animation: rise .8s 1
  font-family: 'Nunito', sans-serif
  &:hover
    background-color: rgba($cube-color, 0.9)

.profile
  display: flex
  align-items: center
  margin-bottom: 5px
  font-size: 1.3em
  .profName
    margin-left: 10px
    &::after
      content: 'prof.'
      margin-left: 7px
      font-size: 0.6em

span, i, .schoolTitle
  font-size: 0.9em
  vertical-align: center
  margin-left: 10px

a
  text-decoration: none
  transition: .3s
  color: darken(#658C8A, 15)
  padding: 0
  &:hover
    color: #658C8A

.school
  display: flex
  align-items: center
  margin-top: 5px

.marks
  display: flex
  margin-left: 10px
  height: 25px
  line-height: 25px
  margin-bottom: 5px
  .rank, .region
    border-radius: 20px
    margin-right: 10px
    background-color: #D9B752
    font-size: 0.6em
    padding: 0 5px
    box-sizing: border-box
    color: #444
    white-space: nowrap
    &::before
      content: ""
      display: inline-block
      width: 10px
      height: 10px
      margin-right: 5px
      border-radius: 99em
      background-color: #F7F4E8
  .region
    background-color: #529FD9

.detail
  padding: 40px 0px
  .light, span
    display: inline-block
  .light
    border-radius: 20px
    background-color: #BA3D3D
    padding: 0 15px
    color: white

@keyframes rise
  0%
    margin-top: 8px
    opacity: 0
  100%
    margin-top: 0px
    opacity: 1

.showMore
  background-color: rgba($cube-color, 0.9)


.cubeContain
  // display: flex
  // flex-direction: column
  // justify-content: center
  padding: 16px
  box-sizing: border-box
  flex-direction: column
  justify-content: center
  height: 100%

</style>
