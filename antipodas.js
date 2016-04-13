$(document).ready(function() {

    if (Modernizr.geolocation){
        navigator.geolocation.getCurrentPosition(show_Map);
    }else{
        $("#not").html("El navegador no soporta la geoloclización.");
    }


    function show_Map(position){
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        var mapSpace = document.getElementById("map");
        var map = new google.maps.Map(mapSpace, {
            center: {lat: latitude, lng: longitude},
            zoom: 5
        });
        Antipodas();
    }

    function Antipodas(){
        latitude = latitude * -1;
        longitude = 180 - longitude;
        var antipodaSpace = document.getElementById("antipoda");
        var antipoda = new google.maps.Map(antipodaSpace, {
            center: {lat: latitude, lng: longitude},
            zoom: 5
        });
    }
});