/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['\'IM Fell French Canon SC\', \'Times\', \'serif\'']='<link href=\'http://fonts.googleapis.com/css?family=IM+Fell+French+Canon+SC\' rel=\'stylesheet\' type=\'text/css\'>';

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
                id: 'greekruins',
                type: 'image',
                rect: ['0', '0','297px','400px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"greekruins.jpg",'0px','0px']
            },
            {
                id: 'title1',
                type: 'text',
                rect: ['20px', '20px','116px','149px','auto', 'auto'],
                text: "Discover an Ancient World",
                align: "left",
                font: ['IM Fell French Canon SC, Times, serif', 24, "rgba(255,255,255,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'achilles',
                display: 'none',
                type: 'image',
                rect: ['-190px', '-423px','606px','886px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"achilles.png",'0px','0px']
            },
            {
                id: 'museumlogo1',
                display: 'none',
                type: 'image',
                rect: ['5px', '265px','230px','130px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"museumlogo2.png",'0px','0px']
            },
            {
                id: 'museumcorner',
                display: 'none',
                type: 'image',
                rect: ['107px', '0px','133px','130px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"museumcorner.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_title1}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'IM Fell French Canon SC, Times, serif'],
                ["style", "left", '-130px'],
                ["style", "top", '20px']
            ],
            "${_achilles}": [
                ["style", "-webkit-transform-origin", [50,93], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '-190px'],
                ["style", "top", '-423px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '240px']
            ],
            "${_museumlogo1}": [
                ["style", "top", '265px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "display", 'none']
            ],
            "${_museumcorner}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '107px'],
                ["style", "display", 'none']
            ],
            "${_greekruins}": [
                ["style", "left", '0px'],
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid114", tween: [ "style", "${_museumlogo1}", "opacity", '1', { fromValue: '0'}], position: 4421, duration: 632 },
                { id: "eid133", tween: [ "style", "${_museumcorner}", "opacity", '1', { fromValue: '0'}], position: 5368, duration: 632 },
                { id: "eid3", tween: [ "style", "${_title1}", "left", '20px', { fromValue: '-130px'}], position: 184, duration: 737, easing: "easeOutQuint" },
                { id: "eid88", tween: [ "transform", "${_achilles}", "scaleX", '0.51', { fromValue: '1'}], position: 1263, duration: 3158, easing: "easeOutQuint" },
                { id: "eid69", tween: [ "style", "${_achilles}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_achilles}", "display", 'block', { fromValue: 'none'}], position: 1263, duration: 0 },
                { id: "eid83", tween: [ "style", "${_achilles}", "-webkit-transform-origin", [50,93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,93]}], position: 1263, duration: 0 },
                { id: "eid202", tween: [ "style", "${_achilles}", "-moz-transform-origin", [50,93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,93]}], position: 1263, duration: 0 },
                { id: "eid203", tween: [ "style", "${_achilles}", "-ms-transform-origin", [50,93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,93]}], position: 1263, duration: 0 },
                { id: "eid204", tween: [ "style", "${_achilles}", "msTransformOrigin", [50,93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,93]}], position: 1263, duration: 0 },
                { id: "eid205", tween: [ "style", "${_achilles}", "-o-transform-origin", [50,93], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,93]}], position: 1263, duration: 0 },
                { id: "eid109", tween: [ "style", "${_museumlogo1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid110", tween: [ "style", "${_museumlogo1}", "display", 'block', { fromValue: 'none'}], position: 4421, duration: 0 },
                { id: "eid100", tween: [ "style", "${_greekruins}", "opacity", '0.6015625', { fromValue: '1'}], position: 2211, duration: 2211 },
                { id: "eid89", tween: [ "transform", "${_achilles}", "scaleY", '0.51', { fromValue: '1'}], position: 1263, duration: 3158, easing: "easeOutQuint" },
                { id: "eid132", tween: [ "style", "${_museumcorner}", "display", 'block', { fromValue: 'none'}], position: 5368, duration: 0 },
                { id: "eid1", tween: [ "style", "${_greekruins}", "left", '-57px', { fromValue: '0px'}], position: 0, duration: 4421 }            ]
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
})(jQuery, AdobeEdge, "EDGE-17282424");
