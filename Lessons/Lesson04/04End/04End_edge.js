/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'background',
                type: 'image',
                rect: ['0', '0','1000px','650px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"background.jpg",'0px','0px']
            },
            {
                id: 'title',
                type: 'image',
                rect: ['0px', '20px','1000px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"title.jpg",'0px','0px'],
                boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.60)"]
            },
            {
                id: 'ribbon',
                type: 'rect',
                rect: ['-274px', '605px','200px','90px','auto', 'auto'],
                fill: ["rgba(255,246,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['-23']]
            },
            {
                id: 'rolloftape',
                type: 'rect',
                rect: ['-174px', '413px','auto','auto','auto', 'auto'],
                transform: [[],['-23'],[],['1','0.8']]
            },
            {
                id: 'ribbon2',
                type: 'rect',
                rect: ['842px', '496px','200px','90px','auto', 'auto'],
                fill: ["rgba(255,246,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['6']]
            },
            {
                id: 'rolloftape2',
                type: 'rect',
                rect: ['775px', '318px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['-1','0.8']]
            },
            {
                id: 'detective',
                type: 'image',
                rect: ['661px', '647px','334px','592px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"detective.png",'0px','0px']
            },
            {
                id: 'forensics',
                type: 'image',
                rect: ['28px', '647px','392px','432px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"forensics.png",'0px','0px']
            },
            {
                id: 'rookie',
                type: 'image',
                rect: ['386px', '647px','384px','584px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rookie.png",'0px','0px']
            },
            {
                id: 'review1',
                type: 'rect',
                rect: ['312px', '359px','auto','auto','auto', 'auto']
            },
            {
                id: 'review2',
                type: 'rect',
                rect: ['474px', '462px','auto','auto','auto', 'auto']
            },
            {
                id: 'review3',
                type: 'rect',
                rect: ['739px', '381px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'rolloftape',
                symbolName: 'rolloftape',
                autoPlay: {

                }
            },
            {
                id: 'rolloftape2',
                symbolName: 'rolloftape',
                autoPlay: {

                }
            },
            {
                id: 'review2',
                symbolName: 'review2',
                autoPlay: {

                }
            },
            {
                id: 'review1',
                symbolName: 'review1',
                autoPlay: {

                }
            },
            {
                id: 'review3',
                symbolName: 'review3',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_review3}": [
                ["style", "left", '1016px'],
                ["style", "top", '382px']
            ],
            "${_review2}": [
                ["style", "left", '1016px'],
                ["style", "top", '462px']
            ],
            "${_rookie}": [
                ["style", "left", '386px'],
                ["style", "top", '647px']
            ],
            "${_review1}": [
                ["style", "left", '1010px'],
                ["style", "top", '359px']
            ],
            "${_rolloftape2}": [
                ["transform", "scaleX", '-1'],
                ["transform", "scaleY", '0.8'],
                ["style", "left", '775px'],
                ["style", "top", '318px']
            ],
            "${_rolloftape}": [
                ["style", "-webkit-transform-origin", [0.03,80.86], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0.03,80.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0.03,80.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0.03,80.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0.03,80.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.8'],
                ["transform", "rotateZ", '-23deg'],
                ["style", "left", '-174px'],
                ["style", "top", '413px']
            ],
            "${_ribbon}": [
                ["style", "top", '605px'],
                ["transform", "rotateZ", '-23deg'],
                ["style", "height", '90px'],
                ["style", "left", '-274px'],
                ["style", "width", '200px']
            ],
            "${_forensics}": [
                ["style", "left", '28px'],
                ["style", "top", '647px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '650px'],
                ["style", "width", '1000px']
            ],
            "${_ribbon2}": [
                ["style", "top", '496px'],
                ["transform", "rotateZ", '6deg'],
                ["style", "height", '90px'],
                ["style", "left", '842px'],
                ["style", "width", '200px']
            ],
            "${_detective}": [
                ["style", "left", '661px'],
                ["style", "top", '647px']
            ],
            "${_title}": [
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.60)'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "top", '20px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "clip", [0,0,83,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6500,
            autoPlay: true,
            timeline: [
                { id: "eid43", tween: [ "style", "${_ribbon2}", "top", '447px', { fromValue: '496px'}], position: 2000, duration: 1000, easing: "easeInQuad" },
                { id: "eid62", tween: [ "transform", "${_title}", "scaleX", '1.1', { fromValue: '1'}], position: 5000, duration: 500 },
                { id: "eid60", tween: [ "subproperty", "${_title}", "boxShadow.blur", '14px', { fromValue: '3px'}], position: 5000, duration: 500 },
                { id: "eid67", tween: [ "style", "${_review3}", "left", '739px', { fromValue: '1016px'}], position: 5500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid53", tween: [ "style", "${_detective}", "top", '59px', { fromValue: '647px'}], position: 3000, duration: 1000, easing: "easeOutCubic" },
                { id: "eid73", tween: [ "style", "${_review1}", "left", '312px', { fromValue: '1010px'}], position: 5500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid14", tween: [ "style", "${_ribbon}", "top", '342px', { fromValue: '605px'}], position: 0, duration: 2000 },
                { id: "eid63", tween: [ "transform", "${_title}", "scaleY", '1.1', { fromValue: '1'}], position: 5000, duration: 500 },
                { id: "eid57", tween: [ "style", "${_title}", "clip", [0,1000,83,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,83,0]}], position: 4000, duration: 1000 },
                { id: "eid58", tween: [ "style", "${_title}", "clip", [0,1000,150.307861328125,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1000,83,0]}], position: 5000, duration: 500 },
                { id: "eid71", tween: [ "style", "${_review2}", "left", '474px', { fromValue: '1016px'}], position: 5500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid51", tween: [ "style", "${_forensics}", "top", '220px', { fromValue: '647px'}], position: 3000, duration: 1000, easing: "easeOutCubic" },
                { id: "eid45", tween: [ "style", "${_ribbon2}", "width", '1141px', { fromValue: '200px'}], position: 2000, duration: 1000, easing: "easeInQuad" },
                { id: "eid18", tween: [ "style", "${_rolloftape}", "top", '-110px', { fromValue: '413px'}], position: 0, duration: 2000 },
                { id: "eid52", tween: [ "style", "${_rookie}", "top", '66px', { fromValue: '647px'}], position: 3000, duration: 1000, easing: "easeOutCubic" },
                { id: "eid16", tween: [ "style", "${_ribbon}", "width", '1550px', { fromValue: '200px'}], position: 0, duration: 2000 },
                { id: "eid46", tween: [ "style", "${_rolloftape2}", "left", '-196px', { fromValue: '775px'}], position: 2000, duration: 1000, easing: "easeInQuad" },
                { id: "eid44", tween: [ "style", "${_ribbon2}", "left", '-96px', { fromValue: '842px'}], position: 2000, duration: 1000, easing: "easeInQuad" },
                { id: "eid17", tween: [ "style", "${_rolloftape}", "left", '1061px', { fromValue: '-174px'}], position: 0, duration: 2000 },
                { id: "eid15", tween: [ "style", "${_ribbon}", "left", '-328px', { fromValue: '-274px'}], position: 0, duration: 2000 },
                { id: "eid59", tween: [ "subproperty", "${_title}", "boxShadow.offsetV", '25px', { fromValue: '3px'}], position: 5000, duration: 500 },
                { id: "eid47", tween: [ "style", "${_rolloftape2}", "top", '212px', { fromValue: '318px'}], position: 2000, duration: 1000, easing: "easeInQuad" },
                { id: "eid48", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_rolloftape2}', [] ], ""], position: 0 },
                { id: "eid49", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rolloftape2}', [] ], ""], position: 2000 }            ]
        }
    }
},
"rolloftape": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'backroll',
                    type: 'image',
                    rect: ['0px', '0px', '196px', '196px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/backroll.png', '0px', '0px']
                },
                {
                    id: 'frontroll',
                    type: 'image',
                    rect: ['0px', '98px', '196px', '196px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/frontroll_revised.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_backroll}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_frontroll}": [
                ["style", "top", '98px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '294px'],
                ["style", "width", '196px']
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
                { id: "eid1", tween: [ "transform", "${_frontroll}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000 }            ]
        }
    }
},
"review2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '400', '171px', 'auto', 'auto'],
                    transform: [],
                    id: 'paper',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/paper2.png']
                },
                {
                    rect: ['26px', '46px', '349px', '96', 'auto', 'auto'],
                    transform: [],
                    id: 'Text',
                    text: '\"Police Line: DNC is the best new cop drama since Hill Street Blues...\" - LA Sentinel',
                    font: ['Courier, Courier New, monospace', 18, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_paper}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '171px']
            ],
            "${_Text}": [
                ["style", "top", '46px'],
                ["style", "font-size", '18px'],
                ["style", "font-family", 'Courier, Courier New, monospace'],
                ["style", "left", '26px'],
                ["style", "width", '349px']
            ],
            "${symbolSelector}": [
                ["style", "height", '171px'],
                ["style", "width", '400px']
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
            ]
        }
    }
},
"review1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '400', '171px', 'auto', 'auto'],
                    transform: [],
                    id: 'paperCopy',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/paper2.png']
                },
                {
                    rect: ['25px', '38px', '349px', '96', 'auto', 'auto'],
                    transform: [],
                    id: 'TextCopy',
                    text: '\"The characters are richly-drawn and the stories gripping.\" - Hollywood Post',
                    font: ['Courier, Courier New, monospace', 18, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_paperCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '171px']
            ],
            "${_TextCopy}": [
                ["style", "top", '38px'],
                ["style", "width", '349px'],
                ["style", "font-family", 'Courier, \'Courier New\', monospace'],
                ["style", "left", '25px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '171px'],
                ["style", "width", '400px']
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
            ]
        }
    }
},
"review3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', 'px', '256px', '120px', 'auto', 'auto'],
                    transform: [],
                    id: 'paperCopy2',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/paper2.png']
                },
                {
                    rect: ['12px', '37px', '231px', '69px', 'auto', 'auto'],
                    transform: [],
                    id: 'TextCopy2',
                    text: '\"This season\'s best...!\" - TV Daily',
                    font: ['Courier, Courier New, monospace', 18, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_paperCopy2}": [
                ["style", "top", '3px'],
                ["style", "height", '120px'],
                ["style", "left", '0px'],
                ["style", "width", '256px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '37px'],
                ["style", "width", '231px'],
                ["style", "height", '69px'],
                ["style", "font-family", 'Courier, \'Courier New\', monospace'],
                ["style", "left", '12px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '125px'],
                ["style", "width", '256px']
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
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-38724590");
