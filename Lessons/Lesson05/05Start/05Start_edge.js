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
   build: "0.11.0.958",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'fisherman2',
            type:'image',
            rect:['0','0','600','400','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"burma1.jpg"],
            transform:[]
         },
         {
            id:'women',
            type:'image',
            rect:['200','0undefined','600','400','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"burma5.jpg"],
            transform:[]
         },
         {
            id:'monk',
            type:'image',
            rect:['200','0undefined','600','400','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"burma4.jpg"],
            transform:[]
         },
         {
            id:'houses',
            type:'image',
            rect:['200','0undefined','600','400','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"burma3.jpg"],
            transform:[]
         },
         {
            id:'statues',
            type:'image',
            rect:['200','0undefined','600','400','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"burma2.jpg"],
            transform:[]
         },
         {
            id:'fisherman',
            type:'image',
            rect:['200','0undefined','600','400','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"burma1.jpg"],
            transform:[]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_monk}": [
            ["style", "opacity", '1'],
            ["style", "left", '200px'],
            ["style", "clip", [0,600,400,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_women}": [
            ["style", "opacity", '1'],
            ["style", "left", '200px'],
            ["style", "clip", [0,600,400,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_fisherman}": [
            ["style", "opacity", '1'],
            ["style", "left", '200px'],
            ["style", "clip", [0,600,400,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_statues}": [
            ["style", "opacity", '1'],
            ["style", "left", '200px'],
            ["style", "clip", [0,600,400,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_fisherman2}": [
            ["style", "top", '0px'],
            ["style", "left", '200px']
         ],
         "${_Stage}": [
            ["style", "height", '400px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '800px']
         ],
         "${_houses}": [
            ["style", "opacity", '1'],
            ["style", "left", '200px'],
            ["style", "clip", [0,600,400,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid31", tween: [ "style", "${_monk}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 500, easing: "easeInQuad" },
            { id: "eid30", tween: [ "style", "${_houses}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500, easing: "easeInQuad" },
            { id: "eid32", tween: [ "style", "${_women}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 500, easing: "easeInQuad" },
            { id: "eid33", tween: [ "style", "${_statues}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500, easing: "easeInQuad" },
            { id: "eid27", tween: [ "style", "${_fisherman}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500, easing: "easeInQuad" }         ]
      }
   }
},
"moreinfo": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.958",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0','0','600','25','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle2',
      opacity: 0.64705882352941,
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'text',
      rect: ['17','48','566','59','auto','auto'],
      id: 'Text2',
      text: 'Curabitur egestas nulla a enim tincidunt pretium. Sed eu porta justo. Vivamus a nibh elit, eu aliquam tellus. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse mi augue, volutpat ut accumsan non, sollicitudin vel libero. Sed pretium quam in enim iaculis et vestibulum erat rhoncus.\n',
      align: 'auto',
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "height", '25px'],
            ["style", "opacity", '0.64705882352941']
         ],
         "${_Text2}": [
            ["style", "top", '39px'],
            ["style", "clip", [0,566,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "font-size", '13px']
         ],
         "${symbolSelector}": [
            ["style", "height", '25px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid38", tween: [ "style", "${_Text2}", "clip", [0,566,59,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,566,0,0]}], position: 200, duration: 800, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "style", "${_Rectangle2}", "height", '124px', { fromValue: '25px'}], position: 0, duration: 1000, easing: "easeOutQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-606721692");
