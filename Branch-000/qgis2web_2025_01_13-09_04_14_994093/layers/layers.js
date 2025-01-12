ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2107").setExtent([437762.781444, 826670.901465, 437859.677526, 826734.305367]);
var wms_layers = [];


    var projection_AerialImageryBasemap_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_AerialImageryBasemap_0 = projection_AerialImageryBasemap_0.getExtent();
    var size_AerialImageryBasemap_0 = ol.extent.getWidth(projectionExtent_AerialImageryBasemap_0) / 256;
    var resolutions_AerialImageryBasemap_0 = new Array(14);
    var matrixIds_AerialImageryBasemap_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_AerialImageryBasemap_0[z] = size_AerialImageryBasemap_0 / Math.pow(2, z);
        matrixIds_AerialImageryBasemap_0[z] = z;
    }
    var lyr_AerialImageryBasemap_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://basemaps.linz.govt.nz/v1/tiles/aerial/NZTM2000Quad/WMTSCapabilities.xml?api=c01jhe1qdjjbtfbndd23edw4567",
                                attributions: ' ',
                                "layer": "aerial",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/webp',
              projection: projection_AerialImageryBasemap_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_AerialImageryBasemap_0),
                resolutions: resolutions_AerialImageryBasemap_0,
                matrixIds: matrixIds_AerialImageryBasemap_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Aerial Imagery Basemap',
                            opacity: 1.0,
                            
                            
                          });
var format_GeoDatabaseLiveR0_1 = new ol.format.GeoJSON();
var features_GeoDatabaseLiveR0_1 = format_GeoDatabaseLiveR0_1.readFeatures(json_GeoDatabaseLiveR0_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2107'});
var jsonSource_GeoDatabaseLiveR0_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoDatabaseLiveR0_1.addFeatures(features_GeoDatabaseLiveR0_1);
cluster_GeoDatabaseLiveR0_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_GeoDatabaseLiveR0_1
});
var lyr_GeoDatabaseLiveR0_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GeoDatabaseLiveR0_1, 
                style: style_GeoDatabaseLiveR0_1,
                popuplayertitle: 'Geo Database Live R0',
                interactive: true,
                title: 'Geo Database Live R0'
            });

lyr_AerialImageryBasemap_0.setVisible(true);lyr_GeoDatabaseLiveR0_1.setVisible(true);
var layersList = [lyr_AerialImageryBasemap_0,lyr_GeoDatabaseLiveR0_1];
lyr_GeoDatabaseLiveR0_1.set('fieldAliases', {'ID': 'ID', 'Easting (X)': 'Easting (X)', 'Northing (Y)': 'Northing (Y)', 'Height (Z)': 'Height (Z)', 'Client.Job.Test': 'Client.Job.Test', });
lyr_GeoDatabaseLiveR0_1.set('fieldImages', {'ID': 'Range', 'Easting (X)': 'TextEdit', 'Northing (Y)': 'TextEdit', 'Height (Z)': 'CheckBox', 'Client.Job.Test': 'TextEdit', });
lyr_GeoDatabaseLiveR0_1.set('fieldLabels', {'ID': 'no label', 'Easting (X)': 'no label', 'Northing (Y)': 'no label', 'Height (Z)': 'no label', 'Client.Job.Test': 'inline label - always visible', });
lyr_GeoDatabaseLiveR0_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});