<template lang="pug">
  #worldmap
</template>

<script>

// import * as d3 from "d3"
// import * as topojson from "topojson"

export default {
  name: 'worldmap',
  props: {
    flyLatLong: Array,
    markGeoJson: ''
  },
  data () {
    return {
      map: "",
      popup: "",
    }
  },
  mounted () {
    const vm = this;
    const MAPAPI = 'http://localhost:3001/api/map';
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
        this.map.addSource('points', { type: 'geojson', data: MAPAPI});
        this.map.addLayer({
          "id": "points",
          "type": "symbol",
          "source": "points",
          "layout": {
             "icon-image": "{icon}-15",
             "text-field": "{title}",
             "text-size": 14,
             "text-font": ["Open Sans Semibold"],
             "text-offset": [0, 0.6],
             "text-anchor": "top",
          },
          "paint": {
             "text-halo-color": "#444444",
             "text-halo-width": 20,
             "text-color": "#FF7058",
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
            .setHTML('<h3>'+e.features[0].properties.title+'</h3>')
            .addTo(this);
    });

    // Change it back to a pointer when it leaves.
    this.map.on('mouseleave', 'points', function () {
        this.getCanvas().style.cursor = '';
        popupObj.remove();
    });
  }, // End mounted
  methods: {
     flyToStore (coordinates, scale) {
         this.map.flyTo({
          center: coordinates,
          zoom: scale,
          speed: 2
        });
        if(coordinates[0]=="180" && coordinates[1]=="39"){
          var popUps = document.getElementsByClassName('mapboxgl-popup');
          if (popUps[0]) popUps[0].remove();
        }
        else{
          this.createPopUp(coordinates);
        }
      },
      createPopUp(coordinates) {
        this.$http.get('http://localhost:3001/api/random-quote').then(function (response) {
                        let _greet = response.body;
                        var popUps = document.getElementsByClassName('mapboxgl-popup');
                        // Check if there is already a popup on the map and if so, remove it
                        if (popUps[0]) popUps[0].remove();
                        var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
                        this.popup = new mapboxgl.Popup({ closeOnClick: false })
                          .setLngLat(coordinates)
                          .setHTML('<h2>'+_greet+'</h2>')
                          .addTo(this.map);
                    }, function (response) {
                        console.log('error');
                    });
      }
  }, // End methods
  watch: {
    flyLatLong: function () {
      this.flyToStore([this.flyLatLong[1],this.flyLatLong[0]], this.flyLatLong[2]);
    }
  }
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

.mapboxgl-popup-close-button
  display: none

</style>
