(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[93],{112:function(e,t,l){"use strict";var a=l(0),r=l.n(a),s=l(34),o=l(131),n=l(132),i=l(127),y=l(128);l(7);t.a=function(e){return r.a.createElement(o.a,null,r.a.createElement(n.a,null,r.a.createElement("div",{className:"page-title-box"},r.a.createElement("div",{className:"page-title-right"},r.a.createElement(i.a,null,r.a.createElement(y.a,null,r.a.createElement(s.b,{to:"/"},"Hyper")),e.breadCrumbItems.map((function(e,t){return e.active?r.a.createElement(y.a,{active:!0,key:t},e.label):r.a.createElement(y.a,{key:t},r.a.createElement(s.b,{to:e.path},e.label))})))),r.a.createElement("h4",{className:"page-title"},e.title))))}},1198:function(e,t,l){"use strict";l.r(t);var a=l(0),r=l.n(a),s=l(140),o=l(141),n=l(131),i=l(132),y=l(652),m=l(112),c=function(e){return r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement("h4",{className:"header-title mb-3"},"Basic Google Map"),r.a.createElement("div",{className:"gmaps"},r.a.createElement(y.Map,{google:e.google,zoom:7,initialCenter:{lat:37.63331412505147,lng:126.97672113547358},style:{width:"100%",height:"100%",position:"relative"}}))))},g=function(e){return r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement("h4",{className:"header-title mb-3"},"Google Map with Marker"),r.a.createElement("div",{className:"gmaps"},r.a.createElement(y.Map,{google:e.google,zoom:18,initialCenter:{lat:21.569874,lng:71.5893798},style:{width:"100%",height:"100%",position:"relative"}},r.a.createElement(y.Marker,{title:"This is sweet home.",name:"Home sweet home!",position:{lat:21.569874,lng:71.5893798}})))))},f=function(e){var t={map:{}};return r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement("h4",{className:"header-title mb-3"},"Street View Panoramas Google Map"),r.a.createElement("div",{className:"gmaps"},r.a.createElement(y.Map,{google:e.google,ref:function(e){return t=e},zoom:14,initialCenter:{lat:40.7295174,lng:-73.9986496},style:{width:"100%",height:"100%",position:"relative"},streetViewControl:!0,onReady:function(){!function(e){if(t){var l=t.map.getStreetView();l.setPov({heading:34,pitch:10}),l.setPosition(e),l.setVisible(!0)}}({lat:40.7295174,lng:-73.9986496})}}))))},p=function(e){return r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement("h4",{className:"header-title mb-3"},"Ultra Light with Labels"),r.a.createElement("div",{className:"gmaps"},r.a.createElement(y.Map,{google:e.google,zoom:14,initialCenter:{lat:40.7295174,lng:-73.9986496},style:{width:"100%",height:"100%",position:"relative"},styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}]}))))},u=function(e){return r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement("h4",{className:"header-title mb-3"},"Dark"),r.a.createElement("div",{className:"gmaps"},r.a.createElement(y.Map,{google:e.google,zoom:14,initialCenter:{lat:40.7295174,lng:-73.9986496},style:{width:"100%",height:"100%",position:"relative"},styles:[{featureType:"all",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#e5c163"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#c4c4c4"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#e5c163"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21},{visibility:"on"}]},{featureType:"poi.business",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#e5c163"},{lightness:"0"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#e5c163"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575757"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.stroke",stylers:[{color:"#2c2c2c"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#999999"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]}))))};t.default=Object(y.GoogleApiWrapper)({apiKey:"AIzaSyDsucrEdmswqYrw0f6ej3bf4M4suDeRgNA"})((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{breadCrumbItems:[{label:"Maps",path:"/features/googlemaps"},{label:"Google Maps",path:"/features/googlemaps",active:!0}],title:"Google Maps"}),r.a.createElement(n.a,null,r.a.createElement(i.a,{lg:6},r.a.createElement(c,{google:e.google})),r.a.createElement(i.a,{lg:6},r.a.createElement(g,{google:e.google}))),r.a.createElement(n.a,null,r.a.createElement(i.a,{lg:6},r.a.createElement(f,{google:e.google})),r.a.createElement(i.a,{lg:6},r.a.createElement(p,{google:e.google}))),r.a.createElement(n.a,null,r.a.createElement(i.a,{lg:6},r.a.createElement(u,{google:e.google}))))}))}}]);
//# sourceMappingURL=93.3065c30b.chunk.js.map