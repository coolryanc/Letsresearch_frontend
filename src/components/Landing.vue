<template lang="pug">
  #landing(href="#search" v-smooth-scroll="{ duration: 1000 }")
    .halfbgc
    .titleContain
      .titleImg
      .title Research Map
      .subtitle Find the lab that most suitable for you in worldwide!
    .mouse
      .bar
      span
      .scroll SCROLL
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

#landing
  +setSize
  background-color: $primary-color



.halfbgc
  width: 100%
  height: 50%
  background-color: $bgc-color
  background-image: url('../assets/worldLow.svg')
  background-repeat: no-repeat
  background-position: center bottom
  background-size: cover
  background-attachment: fixed
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5)

.titleContain
  +center
  height: 180px
  border-radius: 40px
  padding: 0 50px
  display: flex
  align-items: center
  justify-content: center
  // background-color: rgba($secondary-color,0.5)
  // box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5)

.titleImg
  width: 150px
  height: 150px
  background-repeat: no-repeat
  background-image: url('../assets/worldwide.svg')
  transform: translateY(-10%)

.title
  font-family: 'Nunito', sans-serif
  color: $text-color
  line-height: 180px
  font-size: 5em
  font-weight: 900
  text-shadow: 3px 3px 0 darken(#FF7058,4%)
  margin-left: 15px
  white-space: nowrap

.subtitle
  position: absolute
  bottom: -30%
  color: white
  white-space: nowrap
  font-size: 1em
  letter-spacing: 3px
  font-weight: 900

.mouse
  cursor: pointer
  height: 46px
  position: absolute
  left: 50%
  transform: translateX(-50%)
  bottom: 50px
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

.bar
  display: block
  position: absolute
  width: 2px
  height: 100%
  background-color: black

.mouse span
  display: block
  width: 11px
  height: 11px
  border-radius: 50%
  background: #ffffff
  animation-duration: 1s
  animation-fill-mode: both
  animation-iteration-count: infinite
  animation-name: scroll

.scroll
  position: absolute
  bottom: -15px
  color: #FF7058
  font-size: 0.5em
  font-weight: 900
  line-height: 0
  margin-top: 2px

@keyframes scroll
  0%
    opacity: 1
    transform: translateY(-8px)
  50%
    transform: translateY(8px)
  100%
    // opacity: 0
    transform: translateY(-8px)

</style>
