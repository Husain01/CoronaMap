
function updateMap()
{
    fetch("https://disease.sh/v3/covid-19/jhucsse")
    .then(response => response.json())
    .then(rsp => {
      console.log(rsp)
      rsp.forEach(element => {
          latitude = element.coordinates.latitude;
          longitude = element.coordinates.longitude;

          cases= element.stats.confirmed;
          if (cases<1000){
              color="#250902";
          } else if(cases<20000){
            color="#38040e";
        } else if(cases<40000){
            color="#640d14";
        } else if (cases<70000){
            color="#800e13";
        } else if (cases<100000){
            color="#c81d25";
        } else if (cases>100000){
            color="#FF0000";
        } ;
          //Mark on the map
           new mapboxgl.Marker({
            draggable: false,
            color:color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);
    });
})
}
updateMap();