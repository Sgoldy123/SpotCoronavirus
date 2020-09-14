

function update()
{
     fetch('data.json')
     .then(response => response.json())
     .then( rsp => {
       //  console.log(rsp.data)
         rsp.data.forEach(element => {
            
            latitude=element.latitude;
            longitude=element.longitude;
            cases=element.infected;
            var Colr;
            if(cases==0)
            {
                Colr="green"
            }
            else if(cases>=255)
            {
               Colr="red";
            }
            else if(cases>150 && cases<255){
                Colr="orange";
            }
            else{
                Colr="yellow"
            }
  
            // mark on the map
             new mapboxgl.Marker({
                draggable: false,
                color:Colr
                })
                .setLngLat([longitude, latitude])
                .addTo(map);  

         });
     })
}

let time=2000
setInterval(update,time);
