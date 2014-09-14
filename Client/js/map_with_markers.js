(function(){
    function requestDataAndMark(){
        var url = server+"/find_spots";
        $.getJSON(url, markSpots);
    }

    function removeOldMarks(){
        //$("#legend").find("ul").empty();
        markerGroup.clearLayers();
    }

    function createMarkerIcon(status) {
        console.log("status: ",status);
        var color = "red";
        if (status) {
            if (status == "in_progress") { color = "yellow"; }
            else if (status == "open") { color = "green"; }
        }
        var myIcon = L.icon({
            iconUrl: '/images/map_pin_'+color+'_.png'
        });
        return myIcon;
    }

    function markSpots(spots){
        removeOldMarks();
        spots.forEach(function(spot){

            var myIcon = createMarkerIcon(spot.status);

            var marker = L.marker([spot.latitude, spot.longitude], {
                icon: myIcon
            });
            /*
            // circle
            var marker = L.circleMarker([spot.latitude, spot.longitude], {
                color: "red",
                radius: 8,
                fillOpacity: 0.5
            });
            */
            markerGroup.addLayer(marker);
        });
        markerGroup.addTo(map);
    }

    /*
    function markFoundSpots(findingsByCountries){
        removeOldMarks();

        // evenly distribute countries on the color circle
        var hueFraction = 360 / findingsByCountries.length;

        for(var i = 0; i < findingsByCountries.length; i++){
            var colorString = "hsv(" + hueFraction * i + ", 50%, 50%)";
            var color = tinycolor(colorString).toHexString();
            seperator = ', ';
            legendItem = findingsByCountries[i].origin;
            if (i < findingsByCountries.length - 1)
                legendItem += seperator;
            addLegendItem(color, legendItem);
            paintForCountry(color, findingsByCountries[i]);
        }

        markerGroup.addTo(map);
    }

    function addLegendItem(color, origin){
        $("#legend").find("ul").append('<li style= "color: ' + color + '">' + origin + '</li>')
    }

    function paintForCountry(color, findings){
        findings.locations.forEach(function(location){
            var marker = L.circleMarker([location.latitude, location.longitude], {
                color: color,
                radius: 8,
                fillOpacity: 0.5
            });
            markerGroup.addLayer(marker);
        });
    }
    */

    function createAndMarkMap(){
        if (!map || !map instanceof L.Map){
            map = createMap('map');
        }
        requestDataAndMark();
    }

    var map;
    var markerGroup = L.layerGroup();
    $(document).on('pageshow', '#page-map', createAndMarkMap);
}());




