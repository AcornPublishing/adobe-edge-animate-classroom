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
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'background',
            type:'image',
            rect:['1','1','1024px','683px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"background.jpg"],
            transform:[]
         },
         {
            id:'textscroll',
            type:'rect',
            rect:['364','460','auto','auto','auto','auto']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['502px','0px','505px','689px','auto','auto'],
            fill:["rgba(255,255,255,0.30)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'body',
            type:'text',
            rect:['19px','266px','222px','166px','auto','auto'],
            text:"Lorem ipsum. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Duis aliquam vestibulum quam.<br>",
            align:"auto",
            font:['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif',16,"rgba(255,255,255,1.00)","500","none","italic"],
            transform:[]
         },
         {
            id:'title',
            type:'image',
            rect:['0','0','414','256','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"title.png"]
         },
         {
            id:'main1',
            type:'rect',
            rect:['335','460','0','0','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'main2',
            type:'rect',
            rect:['615','501','0','0','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'main3',
            type:'rect',
            rect:['839','527','0','0','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'blackbar',
            type:'rect',
            rect:['502','400','505px','32px','auto','auto'],
            fill:["rgba(0,0,0,0.80)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         },
         {
            id:'navinstructions',
            type:'text',
            rect:['785','7','301px','14px','auto','auto'],
            text:"Navigate with the &lt; or &gt; arrow keys",
            align:"right",
            font:['Georgia, Times New Roman, Times, serif',12,"rgba(169,169,169,1.00)","normal","none","normal"],
            transform:[]
         }],
         symbolInstances: [
         {
            id:'main1',
            symbolName:'main1'
         },
         {
            id:'main3',
            symbolName:'main3'
         },
         {
            id:'textscroll',
            symbolName:'textscroll'
         },
         {
            id:'main2',
            symbolName:'main2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_navinstructions}": [
            ["style", "top", '408px'],
            ["style", "font-size", '12px'],
            ["style", "text-align", 'right'],
            ["style", "height", '14.166666984558px'],
            ["color", "color", 'rgba(169,169,169,1.00)'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "left", '755px'],
            ["style", "width", '245px']
         ],
         "${_background}": [
            ["style", "top", '1px'],
            ["style", "opacity", '0.49'],
            ["style", "left", '1px']
         ],
         "${_main1}": [
            ["style", "top", '460px'],
            ["style", "left", '502px'],
            ["style", "cursor", 'pointer']
         ],
         "${_blackbar}": [
            ["color", "background-color", 'rgba(0,0,0,0.80)'],
            ["style", "height", '31.925192693024px'],
            ["style", "top", '400px'],
            ["style", "left", '502px'],
            ["style", "width", '505px']
         ],
         "${_textscroll}": [
            ["style", "top", '440px']
         ],
         "${_main3}": [
            ["style", "top", '459px'],
            ["style", "left", '843px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '690px'],
            ["style", "width", '1024px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.30)'],
            ["style", "height", '688.6136875636px'],
            ["style", "width", '505px']
         ],
         "${_body}": [
            ["style", "line-height", '26px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '19px'],
            ["style", "width", '222px'],
            ["style", "top", '266.01px'],
            ["style", "height", '166px'],
            ["style", "font-size", '16px'],
            ["style", "font-style", 'italic']
         ],
         "${_main2}": [
            ["style", "top", '459px'],
            ["style", "left", '672px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid44", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_main1}', [] ], ""], position: 0 },
            { id: "eid57", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_main3}', [] ], ""], position: 0 },
            { id: "eid59", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_main2}', [] ], ""], position: 0 }         ]
      }
   }
},
"main1": {
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
      rect: ['0px','0px','165','230','auto','auto'],
      transform: {},
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.3984)']
   },
   {
      rect: ['0','0','165','56px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(143,1,1,1)']
   },
   {
      transform: {},
      rect: ['1','12','152px','42px','auto','auto'],
      type: 'text',
      id: 'Text8',
      text: 'Main Stage',
      align: 'center',
      font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif',30,'rgba(255,255,255,1)','normal','none','italic']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text9',
      text: 'Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Duis aliquam vestibulum quam, vel tempus lorem tristique at. ',
      align: 'left',
      rect: ['12','73','141','132','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "height", '56px'],
            ["color", "background-color", 'rgba(123,7,7,1.00)'],
            ["style", "top", '-1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '165px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Text8}": [
            ["style", "top", '12px'],
            ["style", "text-align", 'center'],
            ["style", "height", '42px'],
            ["style", "font-size", '30px'],
            ["style", "left", '1px'],
            ["style", "width", '152px']
         ],
         "${_Text9}": [
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "font-size", '12px']
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
            { id: "eid64", tween: [ "style", "${_Rectangle2}", "top", '-1px', { fromValue: '-1px'}], position: 1000, duration: 0 },
            { id: "eid43", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(143,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(123,7,7,1.00)'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(143,1,1,1.00)'}], position: 1000, duration: 0 }         ]
      }
   }
},
"main2": {
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
      rect: ['0px','0px','165','230','auto','auto'],
      transform: {},
      id: 'RectangleCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.3984)']
   },
   {
      rect: ['0','0','165','56px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(143,1,1,1)']
   },
   {
      transform: {},
      rect: ['12','13','141','43','auto','auto'],
      type: 'text',
      id: 'Text8',
      text: 'Food',
      align: 'center',
      font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif',30,'rgba(255,255,255,1)','normal','none','italic']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text10',
      text: 'Nam id justo eu enim eleifend fermentum in et magna. Morbi molestie convallis eros sit amet facilisis. Fusce ut erat a nunc dapibus consequat. ',
      align: 'left',
      rect: ['12','68px','141','131','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(123,7,7,1.00)'],
            ["style", "height", '56px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '165px']
         ],
         "${_Text8}": [
            ["style", "top", '13px'],
            ["style", "text-align", 'center'],
            ["style", "left", '12px'],
            ["style", "font-size", '30px']
         ],
         "${_Text10}": [
            ["style", "top", '68px']
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
            { id: "eid43", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(143,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(123,7,7,1.00)'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(143,1,1,1.00)'}], position: 1000, duration: 0 }         ]
      }
   }
},
"main3": {
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
      rect: ['0px','0px','165','230','auto','auto'],
      transform: {},
      id: 'RectangleCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.3984)']
   },
   {
      rect: ['0','0','165','56px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(143,1,1,1)']
   },
   {
      transform: {},
      rect: ['12','13','141','43','auto','auto'],
      type: 'text',
      id: 'Text8',
      text: 'Activities',
      align: 'center',
      font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif',30,'rgba(255,255,255,1)','normal','none','italic']
   },
   {
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text11',
      text: 'Vestibulum et enim leo. Suspendisse vitae erat ante. Praesent nulla dui, semper vitae facilisis eget, auctor in nulla. <br><br>Fusce quis risus in quam interdum porta. Vestibulum laoreet tempor ultrices.',
      align: 'left',
      rect: ['12','70','141','141','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(123,7,7,1.00)'],
            ["style", "height", '56px']
         ],
         "${_Text8}": [
            ["style", "top", '13px'],
            ["style", "text-align", 'center'],
            ["style", "left", '12px'],
            ["style", "font-size", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '165px']
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
            { id: "eid43", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(143,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(123,7,7,1.00)'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(143,1,1,1.00)'}], position: 1000, duration: 0 }         ]
      }
   }
},
"main4": {
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
      rect: ['0px','0px','165','230','auto','auto'],
      transform: {},
      id: 'RectangleCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.3984)']
   },
   {
      rect: ['0','0','165','56px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(143,1,1,1)']
   },
   {
      transform: {},
      rect: ['12','13','141','43','auto','auto'],
      type: 'text',
      id: 'Text8',
      text: 'Store',
      align: 'center',
      font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif',30,'rgba(255,255,255,1)','normal','none','italic']
   },
   {
      transform: {},
      rect: ['12','69','141','137','auto','auto'],
      type: 'text',
      id: 'Text12',
      text: ' Duis a odio lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae mauris imperdiet augue convallis lobortis',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(123,7,7,1.00)'],
            ["style", "height", '56px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '165px']
         ],
         "${_Text9}": [
            ["style", "text-align", '']
         ],
         "${_Text8}": [
            ["style", "top", '13px'],
            ["style", "text-align", 'center'],
            ["style", "left", '12px'],
            ["style", "font-size", '30px']
         ],
         "${_Text12}": [
            ["style", "top", '69px']
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
            { id: "eid43", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(143,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(123,7,7,1.00)'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(143,1,1,1.00)'}], position: 1000, duration: 0 }         ]
      }
   }
},
"textscroll": {
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
      type: 'text',
      rect: ['0px','0px','128px','230px','auto','auto'],
      id: 'Text3',
      text: 'Festival Dates<br>August 22-24<br><br>Prospect Park<br>Brooklyn, New York<br><br>Ticket Prices<br>$40 3-Day Pass<br>$25 1-Day Pass<br>$15 Afternoon Only<br><br>No Cameras<br>No Glass Bottles<br>No Umbrellas<br>No Outside Food<br><br>Parking Limited<br>Free Bicycle Parking',
      align: 'left',
      font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif',14,'rgba(255,255,255,1)','normal','none','italic']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "height", '230px'],
            ["style", "clip", [-230,128,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "top", '230px']
         ],
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '128px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18250,
         autoPlay: true,
         timeline: [
            { id: "eid327", tween: [ "style", "${_Text3}", "top", '-290px', { fromValue: '230px'}], position: 0, duration: 18250 },
            { id: "eid328", tween: [ "style", "${_Text3}", "clip", [289,128,519,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-230,128,0,0]}], position: 0, duration: 18250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-48282587");
