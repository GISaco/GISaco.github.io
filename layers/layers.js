var wms_layers = [];

var lyr_carte1600_georef_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "carte-1600_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/carte1600_georef_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [215957.369688, 6256916.696639, 252909.237950, 6278299.602993]
                            })
                        });

lyr_carte1600_georef_0.setVisible(true);
var layersList = [lyr_carte1600_georef_0];
