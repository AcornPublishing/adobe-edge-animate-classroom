/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['\'Rock Salt\', Georgia, sans-serif']='<link href=\'http://fonts.googleapis.com/css?family=Rock+Salt\' rel=\'stylesheet\' type=\'text/css\'>';

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
                id: 'fallbackground2',
                type: 'image',
                rect: ['0px', '0px','640px','420px','auto', 'auto'],
                opacity: 0.6,
                fill: ["rgba(0,0,0,0)",'graphics/fallbackground.jpg','0px','0px']
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['113px', '10px','450px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'graphics/logo.svg','0px','0px']
            },
            {
                id: 'pastriesgroup',
                type: 'group',
                rect: ['113px', '354','128','57','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle3',
                    type: 'rect',
                    rect: ['34px', '4px','60px','50px','auto', 'auto'],
                    borderRadius: ["60px 60px", "60px 60px", "60px 60px", "60px 60px"],
                    fill: ["rgba(220,210,79,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'Text',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    text: "Pastries",
                    font: ['Rock Salt, Georgia, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
                }]
            },
            {
                id: 'espressogroup',
                type: 'group',
                rect: ['308px', '354','137','57','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect',
                    type: 'rect',
                    rect: ['39px', '4px','60px','50px','auto', 'auto'],
                    borderRadius: ["60px 60px", "60px 60px", "60px 60px", "60px 60px"],
                    fill: ["rgba(220,210,79,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'TextCopy',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    text: "Espresso",
                    font: ['Rock Salt, Georgia, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
                }]
            },
            {
                id: 'teagroup',
                type: 'group',
                rect: ['503px', '354','60','57','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect2',
                    type: 'rect',
                    rect: ['0px', '4px','60px','50px','auto', 'auto'],
                    borderRadius: ["60px 60px", "60px 60px", "60px 60px", "60px 60px"],
                    fill: ["rgba(220,210,79,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'TextCopy2',
                    type: 'text',
                    rect: ['7px', '0px','auto','auto','auto', 'auto'],
                    text: "Tea",
                    font: ['Rock Salt, Georgia, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
                }]
            },
            {
                id: 'tagline1group',
                type: 'group',
                rect: ['134px', '220px','204','122','auto', 'auto'],
                transform: [[],['-11']],
                c: [
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['11px', '0px','180px','120px','auto', 'auto'],
                    borderRadius: ["0px 0px", "50px", "0px 0px", "50px"],
                    fill: ["rgba(120,100,69,0.80)"],
                    stroke: [1,"rgba(0,0,0,1)","solid"],
                    boxShadow: ["", 10, 10, 5, 0, "rgba(0,0,0,0.70)"],
                    transform: [[],[],['10']]
                },
                {
                    id: 'Text5',
                    type: 'text',
                    rect: ['36px', '18px','131px','86px','auto', 'auto'],
                    text: "Fall has arrived!",
                    align: "left",
                    font: ['Rock Salt, Georgia, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'tagline2group',
                type: 'group',
                rect: ['354px', '220px','204','122','auto', 'auto'],
                transform: [[],['7']],
                c: [
                {
                    id: 'Rectangle2',
                    type: 'rect',
                    rect: ['11px', '0px','180px','120px','auto', 'auto'],
                    borderRadius: ["0px 0px", "50px", "0px 0px", "50px"],
                    fill: ["rgba(167,113,89,0.80)"],
                    stroke: [1,"rgb(0, 0, 0)","solid"],
                    boxShadow: ["", 10, 10, 5, 0, "rgba(0,0,0,0.70)"],
                    transform: [[],[],['10']]
                },
                {
                    id: 'Text5Copy',
                    type: 'text',
                    rect: ['33px', '18px','137px','86px','auto', 'auto'],
                    text: "Enjoy our new maple lattes!",
                    align: "left",
                    font: ['Rock Salt, Georgia, sans-serif', 21, "rgba(0,0,0,1)", "normal", "none", "normal"]
                }]
            },
            {
                id: 'leaf',
                type: 'image',
                rect: ['43px', '-12px','168px','159px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'graphics/leaf.png','0px','0px'],
                transform: [[],['22']]
            },
            {
                id: 'credit',
                type: 'text',
                rect: ['530px', '99px','204px','16px','auto', 'auto'],
                text: "Logo by LogoOpenStock.com",
                align: "right",
                font: ['Arial, Helvetica, sans-serif', 10, "rgba(217,189,144,1.00)", "normal", "none", ""],
                transform: [[],['-90']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["style", "left", '39px'],
                ["style", "top", '4px']
            ],
            "${_Text5}": [
                ["style", "top", '18px'],
                ["style", "font-family", 'Rock Salt, Georgia, sans-serif'],
                ["style", "left", '36px'],
                ["style", "line-height", '35px']
            ],
            "${_credit}": [
                ["transform", "rotateZ", '-90deg'],
                ["color", "color", 'rgba(217,189,144,1.00)'],
                ["style", "left", '530px'],
                ["style", "font-size", '10px'],
                ["style", "top", '99px'],
                ["style", "text-align", 'right'],
                ["style", "height", '16px'],
                ["style", "width", '204px'],
                ["transform", "scaleX", '1']
            ],
            "${_fallbackground2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.6'],
                ["style", "left", '0px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Rock Salt, Georgia, sans-serif'],
                ["style", "left", '7px']
            ],
            "${_espressogroup}": [
                ["style", "left", '308px']
            ],
            "${_Rectangle}": [
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '5px'],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.70)'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '180px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '11px'],
                ["transform", "skewX", '10deg'],
                ["style", "height", '120px'],
                ["subproperty", "boxShadow.offsetV", '10px'],
                ["subproperty", "boxShadow.offsetH", '10px'],
                ["style", "border-width", '1px']
            ],
            "${_logo}": [
                ["style", "height", '200px'],
                ["style", "top", '10px'],
                ["style", "left", '113px'],
                ["style", "width", '450px']
            ],
            "${_RoundRect2}": [
                ["style", "left", '0px'],
                ["style", "top", '4px']
            ],
            "${_Text5Copy}": [
                ["style", "top", '18px'],
                ["style", "font-size", '21px'],
                ["style", "line-height", '30px'],
                ["style", "font-family", 'Rock Salt, Georgia, sans-serif'],
                ["style", "left", '33px'],
                ["style", "width", '137px']
            ],
            "${_teagroup}": [
                ["style", "left", '503px']
            ],
            "${_tagline2group}": [
                ["style", "top", '220px'],
                ["style", "left", '354px'],
                ["transform", "rotateZ", '7deg']
            ],
            "${_pastriesgroup}": [
                ["style", "left", '113px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '4px'],
                ["style", "border-top-left-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "border-top-right-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '34px'],
                ["style", "width", '60px']
            ],
            "${_Text}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Rock Salt, Georgia, sans-serif'],
                ["style", "left", '0px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(167,113,89,0.80)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '5px'],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.70)'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '180px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '1px'],
                ["transform", "skewX", '10deg'],
                ["style", "height", '120px'],
                ["subproperty", "boxShadow.offsetV", '10px'],
                ["subproperty", "boxShadow.offsetH", '10px'],
                ["style", "left", '11px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(125,77,21,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '420px'],
                ["style", "width", '640px']
            ],
            "${_tagline1group}": [
                ["style", "top", '220px'],
                ["style", "left", '134px'],
                ["transform", "rotateZ", '-11deg']
            ],
            "${_TextCopy}": [
                ["style", "top", '0px'],
                ["style", "font-family", 'Rock Salt, Georgia, sans-serif'],
                ["style", "left", '0px']
            ],
            "${_leaf}": [
                ["style", "top", '-12px'],
                ["style", "-webkit-transform-origin", [40,5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40,5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40,5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40,5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40,5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '43px'],
                ["transform", "rotateZ", '22deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "transform", "${_leaf}", "rotateZ", '2deg', { fromValue: '22deg'}], position: 0, duration: 1000 },
                { id: "eid4", tween: [ "transform", "${_leaf}", "rotateZ", '15deg', { fromValue: '2deg'}], position: 1000, duration: 1000 },
                { id: "eid5", tween: [ "transform", "${_leaf}", "rotateZ", '9deg', { fromValue: '15deg'}], position: 2000, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-112875756");
