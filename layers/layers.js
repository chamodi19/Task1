ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9707").setExtent([79.898399, 6.850463, 79.906305, 6.856149]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Buildindg_confidence_065_070_1_1 = new ol.format.GeoJSON();
var features_Buildindg_confidence_065_070_1_1 = format_Buildindg_confidence_065_070_1_1.readFeatures(json_Buildindg_confidence_065_070_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9707'});
var jsonSource_Buildindg_confidence_065_070_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildindg_confidence_065_070_1_1.addFeatures(features_Buildindg_confidence_065_070_1_1);
var lyr_Buildindg_confidence_065_070_1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildindg_confidence_065_070_1_1, 
                style: style_Buildindg_confidence_065_070_1_1,
                popuplayertitle: "Buildindg_confidence_065_070_(1)",
                interactive: true,
                    title: '<img src="styles/legend/Buildindg_confidence_065_070_1_1.png" /> Buildindg_confidence_065_070_(1)'
                });
var format_Buildindg_confidence_070_075_2 = new ol.format.GeoJSON();
var features_Buildindg_confidence_070_075_2 = format_Buildindg_confidence_070_075_2.readFeatures(json_Buildindg_confidence_070_075_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9707'});
var jsonSource_Buildindg_confidence_070_075_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildindg_confidence_070_075_2.addFeatures(features_Buildindg_confidence_070_075_2);
var lyr_Buildindg_confidence_070_075_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildindg_confidence_070_075_2, 
                style: style_Buildindg_confidence_070_075_2,
                popuplayertitle: "Buildindg_confidence_070_075",
                interactive: true,
                    title: '<img src="styles/legend/Buildindg_confidence_070_075_2.png" /> Buildindg_confidence_070_075'
                });
var format_Buildindg_confidence_gte_075_3 = new ol.format.GeoJSON();
var features_Buildindg_confidence_gte_075_3 = format_Buildindg_confidence_gte_075_3.readFeatures(json_Buildindg_confidence_gte_075_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9707'});
var jsonSource_Buildindg_confidence_gte_075_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildindg_confidence_gte_075_3.addFeatures(features_Buildindg_confidence_gte_075_3);
var lyr_Buildindg_confidence_gte_075_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildindg_confidence_gte_075_3, 
                style: style_Buildindg_confidence_gte_075_3,
                popuplayertitle: "Buildindg_confidence_gte_075",
                interactive: true,
                    title: '<img src="styles/legend/Buildindg_confidence_gte_075_3.png" /> Buildindg_confidence_gte_075'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_Buildindg_confidence_065_070_1_1.setVisible(true);lyr_Buildindg_confidence_070_075_2.setVisible(true);lyr_Buildindg_confidence_gte_075_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Buildindg_confidence_065_070_1_1,lyr_Buildindg_confidence_070_075_2,lyr_Buildindg_confidence_gte_075_3];
lyr_Buildindg_confidence_065_070_1_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Buildindg_confidence_070_075_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Buildindg_confidence_gte_075_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Buildindg_confidence_065_070_1_1.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Buildindg_confidence_070_075_2.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Buildindg_confidence_gte_075_3.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Buildindg_confidence_065_070_1_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Buildindg_confidence_070_075_2.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Buildindg_confidence_gte_075_3.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Buildindg_confidence_gte_075_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});