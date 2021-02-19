/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.171",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'photo1',
            type:'image',
            rect:['0px','0px','960px','360px','0px','auto'],
            fill:["rgba(0,0,0,0)",im+"photo1.jpg",'0px','0px','960px','360px']
         },
         {
            id:'photo2',
            type:'image',
            rect:['740','0px','960px','360px','0px','auto'],
            fill:["rgba(0,0,0,0)",im+"photo2.jpg",'0px','0px','960px','360px']
         },
         {
            id:'photo3',
            type:'image',
            rect:['828','0px','960px','360px','0px','auto'],
            fill:["rgba(0,0,0,0)",im+"photo3.jpg",'0px','0px','960px','360px']
         },
         {
            id:'photo4',
            type:'image',
            rect:['753','0px','960px','360px','0px','auto'],
            fill:["rgba(0,0,0,0)",im+"photo4.jpg",'0px','0px','960px','360px']
         },
         {
            id:'photo1Copy',
            type:'image',
            rect:['470','0px','960px','360px','0px','auto'],
            fill:["rgba(0,0,0,0)",im+"photo1.jpg",'0px','0px','960px','360px']
         },
         {
            id:'Group',
            type:'group',
            rect:['806px','10px','144px','32','auto','auto'],
            c:[
            {
               id:'Rectangle',
               type:'rect',
               rect:['0px','0px','144px','32px','auto','auto'],
               opacity:0.69827586206897,
               fill:["rgba(0,0,0,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'button1',
               type:'ellipse',
               rect:['14px','6px','20px','20px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button2',
               type:'ellipse',
               rect:['45px','6px','20px','20px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button3',
               type:'ellipse',
               rect:['77px','6px','20px','20px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button4',
               type:'ellipse',
               rect:['108px','6px','20px','20px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button1Copy',
               display:'none',
               type:'ellipse',
               rect:['14px','6px','20px','20px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(127,182,100,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button2Copy',
               type:'ellipse',
               rect:['45px','6px','20px','20px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(127,182,100,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button3Copy',
               type:'ellipse',
               rect:['77px','6px','20px','20px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(127,182,100,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button4Copy',
               type:'ellipse',
               rect:['108px','6px','20px','20px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(127,182,100,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_button3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '77px'],
            ["style", "top", '6px']
         ],
         "${_button1}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '14px'],
            ["style", "top", '6px']
         ],
         "${_button1Copy}": [
            ["color", "background-color", 'rgba(127,182,100,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '14px'],
            ["style", "top", '6px']
         ],
         "${_button4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '108px'],
            ["style", "top", '6px']
         ],
         "${_photo1}": [
            ["style", "top", '0px'],
            ["style", "bottom", 'auto'],
            ["style", "background-size", [960,360], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "right", 'auto'],
            ["style", "left", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_button2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '45px'],
            ["style", "top", '6px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0.69827586206897'],
            ["style", "left", '0px'],
            ["style", "width", '144px']
         ],
         "${_button4Copy}": [
            ["color", "background-color", 'rgba(127,182,100,1.00)'],
            ["style", "display", 'block'],
            ["style", "left", '108px'],
            ["style", "top", '6px']
         ],
         "${_Group}": [
            ["style", "top", '10.01px'],
            ["style", "right", 'auto'],
            ["style", "left", '806px']
         ],
         "${_photo1Copy}": [
            ["style", "top", '0px'],
            ["style", "bottom", 'auto'],
            ["style", "background-size", [960,360], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "right", 'auto'],
            ["style", "left", '960px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_photo2}": [
            ["style", "top", '0px'],
            ["style", "bottom", 'auto'],
            ["style", "background-size", [960,360], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "right", 'auto'],
            ["style", "left", '960px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_photo4}": [
            ["style", "top", '0px'],
            ["style", "bottom", 'auto'],
            ["style", "background-size", [960,360], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "right", 'auto'],
            ["style", "left", '960px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '360px'],
            ["style", "max-width", 'none'],
            ["style", "width", '960px']
         ],
         "${_button3Copy}": [
            ["color", "background-color", 'rgba(127,182,100,1.00)'],
            ["style", "display", 'block'],
            ["style", "left", '77px'],
            ["style", "top", '6px']
         ],
         "${_button2Copy}": [
            ["color", "background-color", 'rgba(127,182,100,1.00)'],
            ["style", "display", 'block'],
            ["style", "left", '45px'],
            ["style", "top", '6px']
         ],
         "${_photo3}": [
            ["style", "top", '0px'],
            ["style", "bottom", 'auto'],
            ["style", "background-size", [960,360], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "right", 'auto'],
            ["style", "left", '960px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         labels: {
            "photo1": 0,
            "photo2": 2500,
            "photo3": 5076,
            "photo4": 7500
         },
         timeline: [
            { id: "eid69", tween: [ "style", "${_button4Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid109", tween: [ "style", "${_photo1Copy}", "left", '960px', { fromValue: '960px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid78", tween: [ "style", "${_photo1Copy}", "left", '0px', { fromValue: '960px'}], position: 9500, duration: 500, easing: "easeOutQuad" },
            { id: "eid70", tween: [ "style", "${_button3Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid80", tween: [ "style", "${_photo3}", "left", '0px', { fromValue: '960px'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid104", tween: [ "style", "${_photo4}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid103", tween: [ "style", "${_photo1Copy}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid81", tween: [ "style", "${_photo2}", "left", '0px', { fromValue: '960px'}], position: 2000, duration: 500, easing: "easeOutQuad" },
            { id: "eid79", tween: [ "style", "${_photo4}", "left", '0px', { fromValue: '960px'}], position: 7000, duration: 500, easing: "easeOutQuad" },
            { id: "eid71", tween: [ "style", "${_button2Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid107", tween: [ "style", "${_photo1}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid72", tween: [ "style", "${_button1Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid105", tween: [ "style", "${_photo3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "style", "${_photo2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid82", tween: [ "style", "${_photo1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-94802810");
