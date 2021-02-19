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
                id: 'logo',
                type: 'text',
                rect: ['0px', '109px','200px','auto','auto', 'auto'],
                text: "Adobe Edge Animate",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 36, "rgba(255,255,255,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'cover',
                type: 'rect',
                rect: ['0px', '0px','200px','300px','auto', 'auto'],
                fill: ["rgba(187,4,4,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '400px'],
                ["style", "height", '300px'],
                ["style", "overflow", 'hidden']
            ],
            "${_logo}": [
                ["style", "top", '109px'],
                ["style", "width", '200px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '36px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_logo}", "left", '200px', { fromValue: '0px'}], position: 500, duration: 250 },
                { id: "eid4", tween: [ "style", "${_logo}", "left", '400px', { fromValue: '200px'}], position: 1500, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-93432369");
