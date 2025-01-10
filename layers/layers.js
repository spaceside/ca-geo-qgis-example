ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2107").setExtent([437759.302798, 826665.549429, 437853.123438, 826728.953332]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GeoDatabaseLiveR0_2 = new ol.format.GeoJSON();
var features_GeoDatabaseLiveR0_2 = format_GeoDatabaseLiveR0_2.readFeatures(json_GeoDatabaseLiveR0_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2107'});
var jsonSource_GeoDatabaseLiveR0_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoDatabaseLiveR0_2.addFeatures(features_GeoDatabaseLiveR0_2);
cluster_GeoDatabaseLiveR0_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_GeoDatabaseLiveR0_2
});
var lyr_GeoDatabaseLiveR0_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GeoDatabaseLiveR0_2, 
                style: style_GeoDatabaseLiveR0_2,
                popuplayertitle: 'Geo Database Live R0',
                interactive: true,
                title: 'Geo Database Live R0'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GeoDatabaseLiveR0_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_GoogleSatellite_1,lyr_GeoDatabaseLiveR0_2];
lyr_GeoDatabaseLiveR0_2.set('fieldAliases', {'ID': 'ID', 'Easting (X)': 'Easting (X)', 'Northing (Y)': 'Northing (Y)', 'Height (Z)': 'Height (Z)', 'Client.Job.Test': 'Client.Job.Test', });
lyr_GeoDatabaseLiveR0_2.set('fieldImages', {'ID': 'Range', 'Easting (X)': 'TextEdit', 'Northing (Y)': 'TextEdit', 'Height (Z)': 'CheckBox', 'Client.Job.Test': 'TextEdit', });
lyr_GeoDatabaseLiveR0_2.set('fieldLabels', {'ID': 'no label', 'Easting (X)': 'no label', 'Northing (Y)': 'no label', 'Height (Z)': 'no label', 'Client.Job.Test': 'inline label - always visible', });
lyr_GeoDatabaseLiveR0_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});