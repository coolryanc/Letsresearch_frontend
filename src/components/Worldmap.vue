<template lang="pug">
  #worldmap
</template>

<script>

// import * as d3 from "d3"
// import * as topojson from "topojson"

export default {
  name: 'worldmap',
  props: {
    markGeoJson: Object
  },
  data () {
    return {
      map: "",
      popup: ""
    }
  },
  mounted () {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoieXVhbm5uIiwiYSI6ImNqM3R2dDZuYzAxbjQycG82NjExaWtiaG0ifQ.HY_IKgp-eD6ER5J7rJFKBQ';
    this.popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    this.map = new mapboxgl.Map({
      container: 'worldmap',
      style: 'mapbox://styles/yuannn/cj3twn3b800232rnhsgboa8ix',
      center: [180, 39], // starting position
      zoom: 1.8, // starting zoom
      pitchWithRotate: false,
      dragRotate : false
    });
    this.map.on('load', () => {
        let MAPAPI = 'http://localhost:3001/api/map';
        this.map.addSource('points', { type: 'geojson', data: MAPAPI});
        this.map.addLayer({
          "id": "points",
          "type": "symbol",
          "source": "points",
          "layout": {
             "icon-image": "{icon}-15",
             "text-field": "{title}",
             "text-size": 14,
             "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
             "text-offset": [0, 0.6],
             "text-anchor": "top",
          },
          "paint": {
             "text-color": "#FF7058"
          }
        });
        const mapObj = this.map;
        window.setInterval(function(){
          mapObj.getSource('points').setData(MAPAPI);
        }, 500);
    });

    this.map.on('click', 'points', function (e) {
        this.flyTo({center: e.features[0].geometry.coordinates});
    });

    const popupObj = this.popup;
    // Change the cursor to a pointer when the it enters a feature in the 'points' layer.
    this.map.on('mouseenter', 'points', function (e) {
        this.getCanvas().style.cursor = 'pointer';
        popupObj.setLngLat(e.features[0].geometry.coordinates)
            .setHTML(e.features[0].properties.title)
            .addTo(this);
    });

    // Change it back to a pointer when it leaves.
    this.map.on('mouseleave', 'points', function () {
        this.getCanvas().style.cursor = '';
        popupObj.remove();
    });
  }, // End mounted
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

@import "../sass/variables"
@import "../sass/common"

#worldmap
  width: 70%
  height: 100%
  // background-color: white
  box-shadow: 0 10px 10px 2px rgba(black, 0.5)
  overflow: hidden


</style>
