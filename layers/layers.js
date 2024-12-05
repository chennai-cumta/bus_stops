var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Avadi_Corporation_1 = new ol.format.GeoJSON();
var features_Avadi_Corporation_1 = format_Avadi_Corporation_1.readFeatures(json_Avadi_Corporation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Avadi_Corporation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Avadi_Corporation_1.addFeatures(features_Avadi_Corporation_1);
var lyr_Avadi_Corporation_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Avadi_Corporation_1, 
                style: style_Avadi_Corporation_1,
                popuplayertitle: "Avadi_Corporation",
                interactive: false,
                title: '<img src="styles/legend/Avadi_Corporation_1.png" /> Avadi_Corporation'
            });
var format_Tambaram_Corporation_2 = new ol.format.GeoJSON();
var features_Tambaram_Corporation_2 = format_Tambaram_Corporation_2.readFeatures(json_Tambaram_Corporation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambaram_Corporation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambaram_Corporation_2.addFeatures(features_Tambaram_Corporation_2);
var lyr_Tambaram_Corporation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tambaram_Corporation_2, 
                style: style_Tambaram_Corporation_2,
                popuplayertitle: "Tambaram_Corporation",
                interactive: false,
                title: '<img src="styles/legend/Tambaram_Corporation_2.png" /> Tambaram_Corporation'
            });
var format_GCCBoundary_3 = new ol.format.GeoJSON();
var features_GCCBoundary_3 = format_GCCBoundary_3.readFeatures(json_GCCBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GCCBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCCBoundary_3.addFeatures(features_GCCBoundary_3);
var lyr_GCCBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCCBoundary_3, 
                style: style_GCCBoundary_3,
                popuplayertitle: "GCC Boundary",
                interactive: false,
                title: '<img src="styles/legend/GCCBoundary_3.png" /> GCC Boundary'
            });
var format_MTCroutes_4 = new ol.format.GeoJSON();
var features_MTCroutes_4 = format_MTCroutes_4.readFeatures(json_MTCroutes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MTCroutes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTCroutes_4.addFeatures(features_MTCroutes_4);
var lyr_MTCroutes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTCroutes_4, 
                style: style_MTCroutes_4,
                popuplayertitle: "MTC routes",
                interactive: true,
                title: '<img src="styles/legend/MTCroutes_4.png" /> MTC routes'
            });
var format_MTCbusstops_5 = new ol.format.GeoJSON();
var features_MTCbusstops_5 = format_MTCbusstops_5.readFeatures(json_MTCbusstops_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MTCbusstops_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTCbusstops_5.addFeatures(features_MTCbusstops_5);
var lyr_MTCbusstops_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTCbusstops_5, 
                style: style_MTCbusstops_5,
                popuplayertitle: "MTC bus stops",
                interactive: true,
                title: '<img src="styles/legend/MTCbusstops_5.png" /> MTC bus stops'
            });
var format_GCCBusstops_6 = new ol.format.GeoJSON();
var features_GCCBusstops_6 = format_GCCBusstops_6.readFeatures(json_GCCBusstops_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GCCBusstops_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCCBusstops_6.addFeatures(features_GCCBusstops_6);
var lyr_GCCBusstops_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCCBusstops_6, 
                style: style_GCCBusstops_6,
                popuplayertitle: "GCC Bus stops",
                interactive: true,
                title: '<img src="styles/legend/GCCBusstops_6.png" /> GCC Bus stops'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Avadi_Corporation_1.setVisible(true);lyr_Tambaram_Corporation_2.setVisible(true);lyr_GCCBoundary_3.setVisible(true);lyr_MTCroutes_4.setVisible(true);lyr_MTCbusstops_5.setVisible(true);lyr_GCCBusstops_6.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Avadi_Corporation_1,lyr_Tambaram_Corporation_2,lyr_GCCBoundary_3,lyr_MTCroutes_4,lyr_MTCbusstops_5,lyr_GCCBusstops_6];
lyr_Avadi_Corporation_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'MP_I': 'MP_I', 'GisKey2013': 'GisKey2013', 'dist_code': 'dist_code', 'dist_name': 'dist_name', 'taluk_code': 'taluk_code', 'taluk_name': 'taluk_name', 'lb_code': 'lb_code', 'lb_name': 'lb_name', 'lb_type': 'lb_type', 'vill_code': 'vill_code', 'vill_name': 'vill_name', 'landuse_co': 'landuse_co', 'landuse_de': 'landuse_de', 'VCODE_': 'VCODE_', 'LocalBodyT': 'LocalBodyT', 'LocalBodyN': 'LocalBodyN', 'VillageNam': 'VillageNam', 'Taluk_': 'Taluk_', 'District_': 'District_', 'BlockNo_': 'BlockNo_', 'SurveyNo_': 'SurveyNo_', 'SubDn_No_': 'SubDn_No_', 'SubDn_A_': 'SubDn_A_', 'SMP_DDP_': 'SMP_DDP_', 'DDP_Name_': 'DDP_Name_', 'CRZ_': 'CRZ_', 'ARA_': 'ARA_', 'RCA_': 'RCA_', 'CBA_': 'CBA_', 'EWS_': 'EWS_', 'IT_Corrido': 'IT_Corrido', 'MRTS_Influ': 'MRTS_Influ', 'Airport_': 'Airport_', 'StreetAlig': 'StreetAlig', 'LayoutAppr': 'LayoutAppr', 'Reclassifi': 'Reclassifi', 'GreenBelt_': 'GreenBelt_', 'ZONE_No': 'ZONE_No', 'DIVISION_N': 'DIVISION_N', 'Block_A': 'Block_A', 'ASI': 'ASI', 'IAF': 'IAF', 'Key_Adanga': 'Key_Adanga', 'Ownership': 'Ownership', 'Adangal_Re': 'Adangal_Re', 'Plot_No': 'Plot_No', 'Block_No': 'Block_No', 'Survey_No': 'Survey_No', 'AirportExp': 'AirportExp', 'AirforceSt': 'AirforceSt', 'LB2013': 'LB2013', 'ProposedLa': 'ProposedLa', 'MSB': 'MSB', 'GH': 'GH', 'Remarks': 'Remarks', 'Note': 'Note', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Tambaram_Corporation_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'MP_I': 'MP_I', 'GisKey2013': 'GisKey2013', 'dist_code': 'dist_code', 'dist_name': 'dist_name', 'taluk_code': 'taluk_code', 'taluk_name': 'taluk_name', 'lb_code': 'lb_code', 'lb_name': 'lb_name', 'lb_type': 'lb_type', 'vill_code': 'vill_code', 'vill_name': 'vill_name', 'landuse_co': 'landuse_co', 'VCODE_': 'VCODE_', 'LocalBodyT': 'LocalBodyT', 'LocalBodyN': 'LocalBodyN', 'VillageNam': 'VillageNam', 'Taluk_': 'Taluk_', 'District_': 'District_', 'BlockNo_': 'BlockNo_', 'SurveyNo_': 'SurveyNo_', 'SubDn_No_': 'SubDn_No_', 'SubDn_A_': 'SubDn_A_', 'SMP_DDP_': 'SMP_DDP_', 'DDP_Name_': 'DDP_Name_', 'CRZ_': 'CRZ_', 'ARA_': 'ARA_', 'RCA_': 'RCA_', 'CBA_': 'CBA_', 'EWS_': 'EWS_', 'IT_Corrido': 'IT_Corrido', 'MRTS_Influ': 'MRTS_Influ', 'Airport_': 'Airport_', 'StreetAlig': 'StreetAlig', 'LayoutAppr': 'LayoutAppr', 'Reclassifi': 'Reclassifi', 'GreenBelt_': 'GreenBelt_', 'ZONE_No': 'ZONE_No', 'DIVISION_N': 'DIVISION_N', 'Block_A': 'Block_A', 'ASI': 'ASI', 'IAF': 'IAF', 'Key_Adanga': 'Key_Adanga', 'Ownership': 'Ownership', 'Adangal_Re': 'Adangal_Re', 'Plot_No': 'Plot_No', 'Block_No': 'Block_No', 'Survey_No': 'Survey_No', 'AirportExp': 'AirportExp', 'AirforceSt': 'AirforceSt', 'LB2013': 'LB2013', 'ProposedLa': 'ProposedLa', 'MSB': 'MSB', 'GH': 'GH', 'Remarks': 'Remarks', 'Note': 'Note', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_GCCBoundary_3.set('fieldAliases', {'gid': 'gid', '__gid': '__gid', 'dist_name': 'dist_name', 'drd_dcode': 'drd_dcode', 'drddcode': 'drddcode', 'dist_mmm': 'dist_mmm', 'cen_dcode2': 'cen_dcode2', 'cen_dcod_1': 'cen_dcod_1', 'cen_dcode': 'cen_dcode', 'dcode': 'dcode', 'district': 'district', 'district_t': 'district_t', 'ed_distric': 'ed_distric', 'FID_1': 'FID_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MTCroutes_4.set('fieldAliases', {'fid': 'fid', 'src': 'src', 'dst': 'dst', 'duration': 'duration', 'distance': 'distance', 'routeNo': 'routeNo', 'layer': 'layer', });
lyr_MTCbusstops_5.set('fieldAliases', {'Stop Id': 'Stop Id', 'Stop Name': 'Stop Name', 'Stop lat': 'Stop lat', 'Stop lon': 'Stop lon', 'route name': 'route name', 'route id': 'route id', });
lyr_GCCBusstops_6.set('fieldAliases', {'Stop Id': 'Stop Id', 'Stop Name': 'Stop Name', 'Stop lat': 'Stop lat', 'Stop lon': 'Stop lon', 'route name': 'route name', 'route id': 'route id', });
lyr_Avadi_Corporation_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'MP_I': 'TextEdit', 'GisKey2013': 'TextEdit', 'dist_code': 'TextEdit', 'dist_name': 'TextEdit', 'taluk_code': 'TextEdit', 'taluk_name': 'TextEdit', 'lb_code': 'TextEdit', 'lb_name': 'TextEdit', 'lb_type': 'TextEdit', 'vill_code': 'TextEdit', 'vill_name': 'TextEdit', 'landuse_co': 'TextEdit', 'landuse_de': 'TextEdit', 'VCODE_': 'TextEdit', 'LocalBodyT': 'TextEdit', 'LocalBodyN': 'TextEdit', 'VillageNam': 'TextEdit', 'Taluk_': 'TextEdit', 'District_': 'TextEdit', 'BlockNo_': 'TextEdit', 'SurveyNo_': 'TextEdit', 'SubDn_No_': 'TextEdit', 'SubDn_A_': 'TextEdit', 'SMP_DDP_': 'TextEdit', 'DDP_Name_': 'TextEdit', 'CRZ_': 'TextEdit', 'ARA_': 'TextEdit', 'RCA_': 'TextEdit', 'CBA_': 'TextEdit', 'EWS_': 'TextEdit', 'IT_Corrido': 'TextEdit', 'MRTS_Influ': 'TextEdit', 'Airport_': 'TextEdit', 'StreetAlig': 'TextEdit', 'LayoutAppr': 'TextEdit', 'Reclassifi': 'TextEdit', 'GreenBelt_': 'TextEdit', 'ZONE_No': 'TextEdit', 'DIVISION_N': 'TextEdit', 'Block_A': 'TextEdit', 'ASI': 'TextEdit', 'IAF': 'TextEdit', 'Key_Adanga': 'TextEdit', 'Ownership': 'TextEdit', 'Adangal_Re': 'TextEdit', 'Plot_No': 'TextEdit', 'Block_No': 'TextEdit', 'Survey_No': 'TextEdit', 'AirportExp': 'TextEdit', 'AirforceSt': 'TextEdit', 'LB2013': 'TextEdit', 'ProposedLa': 'TextEdit', 'MSB': 'TextEdit', 'GH': 'TextEdit', 'Remarks': 'TextEdit', 'Note': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Tambaram_Corporation_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'MP_I': 'TextEdit', 'GisKey2013': 'TextEdit', 'dist_code': 'TextEdit', 'dist_name': 'TextEdit', 'taluk_code': 'TextEdit', 'taluk_name': 'TextEdit', 'lb_code': 'TextEdit', 'lb_name': 'TextEdit', 'lb_type': 'TextEdit', 'vill_code': 'TextEdit', 'vill_name': 'TextEdit', 'landuse_co': 'TextEdit', 'VCODE_': 'TextEdit', 'LocalBodyT': 'TextEdit', 'LocalBodyN': 'TextEdit', 'VillageNam': 'TextEdit', 'Taluk_': 'TextEdit', 'District_': 'TextEdit', 'BlockNo_': 'TextEdit', 'SurveyNo_': 'TextEdit', 'SubDn_No_': 'TextEdit', 'SubDn_A_': 'TextEdit', 'SMP_DDP_': 'TextEdit', 'DDP_Name_': 'TextEdit', 'CRZ_': 'TextEdit', 'ARA_': 'TextEdit', 'RCA_': 'TextEdit', 'CBA_': 'TextEdit', 'EWS_': 'TextEdit', 'IT_Corrido': 'TextEdit', 'MRTS_Influ': 'TextEdit', 'Airport_': 'TextEdit', 'StreetAlig': 'TextEdit', 'LayoutAppr': 'TextEdit', 'Reclassifi': 'TextEdit', 'GreenBelt_': 'TextEdit', 'ZONE_No': 'TextEdit', 'DIVISION_N': 'TextEdit', 'Block_A': 'TextEdit', 'ASI': 'TextEdit', 'IAF': 'TextEdit', 'Key_Adanga': 'TextEdit', 'Ownership': 'TextEdit', 'Adangal_Re': 'TextEdit', 'Plot_No': 'TextEdit', 'Block_No': 'TextEdit', 'Survey_No': 'TextEdit', 'AirportExp': 'TextEdit', 'AirforceSt': 'TextEdit', 'LB2013': 'TextEdit', 'ProposedLa': 'TextEdit', 'MSB': 'TextEdit', 'GH': 'TextEdit', 'Remarks': 'TextEdit', 'Note': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GCCBoundary_3.set('fieldImages', {'gid': 'TextEdit', '__gid': 'TextEdit', 'dist_name': 'TextEdit', 'drd_dcode': 'TextEdit', 'drddcode': 'TextEdit', 'dist_mmm': 'TextEdit', 'cen_dcode2': 'TextEdit', 'cen_dcod_1': 'TextEdit', 'cen_dcode': 'TextEdit', 'dcode': 'TextEdit', 'district': 'TextEdit', 'district_t': 'TextEdit', 'ed_distric': 'TextEdit', 'FID_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MTCroutes_4.set('fieldImages', {'fid': 'TextEdit', 'src': 'TextEdit', 'dst': 'TextEdit', 'duration': 'TextEdit', 'distance': 'TextEdit', 'routeNo': 'TextEdit', 'layer': 'TextEdit', });
lyr_MTCbusstops_5.set('fieldImages', {'Stop Id': 'TextEdit', 'Stop Name': 'TextEdit', 'Stop lat': 'TextEdit', 'Stop lon': 'TextEdit', 'route name': 'TextEdit', 'route id': 'TextEdit', });
lyr_GCCBusstops_6.set('fieldImages', {'Stop Id': 'TextEdit', 'Stop Name': 'TextEdit', 'Stop lat': 'TextEdit', 'Stop lon': 'TextEdit', 'route name': 'TextEdit', 'route id': 'TextEdit', });
lyr_Avadi_Corporation_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'MP_I': 'no label', 'GisKey2013': 'no label', 'dist_code': 'no label', 'dist_name': 'no label', 'taluk_code': 'no label', 'taluk_name': 'no label', 'lb_code': 'no label', 'lb_name': 'no label', 'lb_type': 'no label', 'vill_code': 'no label', 'vill_name': 'no label', 'landuse_co': 'no label', 'landuse_de': 'no label', 'VCODE_': 'no label', 'LocalBodyT': 'no label', 'LocalBodyN': 'no label', 'VillageNam': 'no label', 'Taluk_': 'no label', 'District_': 'no label', 'BlockNo_': 'no label', 'SurveyNo_': 'no label', 'SubDn_No_': 'no label', 'SubDn_A_': 'no label', 'SMP_DDP_': 'no label', 'DDP_Name_': 'no label', 'CRZ_': 'no label', 'ARA_': 'no label', 'RCA_': 'no label', 'CBA_': 'no label', 'EWS_': 'no label', 'IT_Corrido': 'no label', 'MRTS_Influ': 'no label', 'Airport_': 'no label', 'StreetAlig': 'no label', 'LayoutAppr': 'no label', 'Reclassifi': 'no label', 'GreenBelt_': 'no label', 'ZONE_No': 'no label', 'DIVISION_N': 'no label', 'Block_A': 'no label', 'ASI': 'no label', 'IAF': 'no label', 'Key_Adanga': 'no label', 'Ownership': 'no label', 'Adangal_Re': 'no label', 'Plot_No': 'no label', 'Block_No': 'no label', 'Survey_No': 'no label', 'AirportExp': 'no label', 'AirforceSt': 'no label', 'LB2013': 'no label', 'ProposedLa': 'no label', 'MSB': 'no label', 'GH': 'no label', 'Remarks': 'no label', 'Note': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Tambaram_Corporation_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'MP_I': 'no label', 'GisKey2013': 'no label', 'dist_code': 'no label', 'dist_name': 'no label', 'taluk_code': 'no label', 'taluk_name': 'no label', 'lb_code': 'no label', 'lb_name': 'no label', 'lb_type': 'no label', 'vill_code': 'no label', 'vill_name': 'no label', 'landuse_co': 'no label', 'VCODE_': 'no label', 'LocalBodyT': 'no label', 'LocalBodyN': 'no label', 'VillageNam': 'no label', 'Taluk_': 'no label', 'District_': 'no label', 'BlockNo_': 'no label', 'SurveyNo_': 'no label', 'SubDn_No_': 'no label', 'SubDn_A_': 'no label', 'SMP_DDP_': 'no label', 'DDP_Name_': 'no label', 'CRZ_': 'no label', 'ARA_': 'no label', 'RCA_': 'no label', 'CBA_': 'no label', 'EWS_': 'no label', 'IT_Corrido': 'no label', 'MRTS_Influ': 'no label', 'Airport_': 'no label', 'StreetAlig': 'no label', 'LayoutAppr': 'no label', 'Reclassifi': 'no label', 'GreenBelt_': 'no label', 'ZONE_No': 'no label', 'DIVISION_N': 'no label', 'Block_A': 'no label', 'ASI': 'no label', 'IAF': 'no label', 'Key_Adanga': 'no label', 'Ownership': 'no label', 'Adangal_Re': 'no label', 'Plot_No': 'no label', 'Block_No': 'no label', 'Survey_No': 'no label', 'AirportExp': 'no label', 'AirforceSt': 'no label', 'LB2013': 'no label', 'ProposedLa': 'no label', 'MSB': 'no label', 'GH': 'no label', 'Remarks': 'no label', 'Note': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_GCCBoundary_3.set('fieldLabels', {'gid': 'no label', '__gid': 'no label', 'dist_name': 'no label', 'drd_dcode': 'no label', 'drddcode': 'no label', 'dist_mmm': 'no label', 'cen_dcode2': 'no label', 'cen_dcod_1': 'no label', 'cen_dcode': 'no label', 'dcode': 'no label', 'district': 'no label', 'district_t': 'no label', 'ed_distric': 'no label', 'FID_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MTCroutes_4.set('fieldLabels', {'fid': 'hidden field', 'src': 'inline label - always visible', 'dst': 'inline label - always visible', 'duration': 'hidden field', 'distance': 'hidden field', 'routeNo': 'inline label - always visible', 'layer': 'hidden field', });
lyr_MTCbusstops_5.set('fieldLabels', {'Stop Id': 'hidden field', 'Stop Name': 'inline label - always visible', 'Stop lat': 'inline label - always visible', 'Stop lon': 'inline label - always visible', 'route name': 'hidden field', 'route id': 'hidden field', });
lyr_GCCBusstops_6.set('fieldLabels', {'Stop Id': 'hidden field', 'Stop Name': 'inline label - always visible', 'Stop lat': 'inline label - always visible', 'Stop lon': 'inline label - always visible', 'route name': 'hidden field', 'route id': 'hidden field', });
lyr_GCCBusstops_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});