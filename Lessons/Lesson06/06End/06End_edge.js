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
                rect: ['1', '1','1024px','683px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"background.jpg"]
            },
            {
                id: 'textscroll',
                type: 'rect',
                rect: ['364', '460','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['502px', '0px','505px','689px','auto', 'auto'],
                fill: ["rgba(255,255,255,0.30)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'body',
                type: 'text',
                rect: ['19px', '266px','222px','166px','auto', 'auto'],
                text: "Lorem ipsum. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Duis aliquam vestibulum quam.<br>",
                align: "auto",
                font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', 16, "rgba(255,255,255,1.00)", "500", "none", "italic"]
            },
            {
                id: 'title',
                type: 'image',
                rect: ['0', '0','414','256','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"title.png"]
            },
            {
                id: 'main1',
                type: 'rect',
                rect: ['335', '460','0','0','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'main2',
                type: 'rect',
                rect: ['615', '501','0','0','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'main3',
                type: 'rect',
                rect: ['839', '527','0','0','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'blackbar',
                type: 'rect',
                rect: ['502', '400','505px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0.80)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'navinstructions',
                type: 'text',
                rect: ['785', '7','301px','14px','auto', 'auto'],
                text: "Navigate with the &lt; or &gt; arrow keys",
                align: "right",
                font: ['Georgia, Times New Roman, Times, serif', 12, "rgba(169,169,169,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'map',
                type: 'rect',
                rect: ['19px', '440px','335px','230px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'button',
                type: 'image',
                rect: ['364px', '343px','123px','73px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"featuredartist.png",'0px','0px']
            },
            {
                id: 'caption',
                type: 'text',
                rect: ['519px', '408px','88px','14px','auto', 'auto'],
                text: "Slide 1",
                font: ['Georgia, Times New Roman, Times, serif', 12, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'slideshow1',
                type: 'image',
                rect: ['501', '0px','505px','400px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"slideshow1.jpg",'0px','0px']
            },
            {
                id: 'slideshow2',
                display: 'none',
                type: 'image',
                rect: ['501', '0','505px','400px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"slideshow2.jpg",'0px','0px']
            },
            {
                id: 'slideshow3',
                display: 'none',
                type: 'image',
                rect: ['501', '0','505px','400px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"slideshow3.jpg",'0px','0px']
            },
            {
                id: 'slideshow4',
                display: 'none',
                type: 'image',
                rect: ['501', '0','505px','400px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"slideshow4.jpg",'0px','0px']
            },
            {
                id: 'slideshow5',
                display: 'none',
                type: 'image',
                rect: ['501px', '0','505px','400px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"slideshow5.jpg",'0px','0px']
            },
            {
                id: 'cover',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0px','1024px','690px','auto', 'auto'],
                fill: ["rgba(0,0,0,0.80)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'video',
                display: 'none',
                type: 'rect',
                rect: ['232px', '174px','560px','315px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [
            {
                id: 'main1',
                symbolName: 'main1',
                autoPlay: {

                }
            },
            {
                id: 'main3',
                symbolName: 'main3',
                autoPlay: {

                }
            },
            {
                id: 'textscroll',
                symbolName: 'textscroll',
                autoPlay: {

                }
            },
            {
                id: 'main2',
                symbolName: 'main2',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_cover}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_slideshow3}": [
                ["style", "display", 'none']
            ],
            "${_slideshow4}": [
                ["style", "display", 'none']
            ],
            "${_main2}": [
                ["style", "top", '459px'],
                ["style", "left", '672px'],
                ["style", "cursor", 'pointer']
            ],
            "${_slideshow5}": [
                ["style", "left", '501px'],
                ["style", "display", 'none']
            ],
            "${_video}": [
                ["style", "top", '174px'],
                ["style", "height", '315px'],
                ["style", "display", 'none'],
                ["style", "left", '232px'],
                ["style", "width", '560px']
            ],
            "${_main1}": [
                ["style", "top", '460px'],
                ["style", "left", '502px'],
                ["style", "cursor", 'pointer']
            ],
            "${_blackbar}": [
                ["color", "background-color", 'rgba(0,0,0,0.80)'],
                ["style", "height", '32px'],
                ["style", "top", '400px'],
                ["style", "left", '502px'],
                ["style", "width", '505px']
            ],
            "${_main3}": [
                ["style", "top", '459px'],
                ["style", "left", '843px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle}": [
                ["style", "height", '689px'],
                ["color", "background-color", 'rgba(255,255,255,0.30)'],
                ["style", "width", '505px']
            ],
            "${_body}": [
                ["style", "line-height", '26px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '19px'],
                ["style", "width", '222px'],
                ["style", "top", '266px'],
                ["style", "height", '166px'],
                ["style", "font-style", 'italic'],
                ["style", "font-size", '16px']
            ],
            "${_slideshow2}": [
                ["style", "display", 'none']
            ],
            "${_navinstructions}": [
                ["style", "top", '408px'],
                ["style", "width", '245px'],
                ["style", "text-align", 'right'],
                ["color", "color", 'rgba(169,169,169,1.00)'],
                ["style", "height", '14px'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '755px'],
                ["style", "font-size", '12px']
            ],
            "${_background}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0.49'],
                ["style", "left", '1px']
            ],
            "${_map}": [
                ["style", "height", '230px'],
                ["style", "top", '440px'],
                ["style", "left", '19px'],
                ["style", "width", '335px']
            ],
            "${_caption}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '519px'],
                ["style", "font-size", '12px']
            ],
            "${_button}": [
                ["style", "left", '364px'],
                ["style", "top", '343px']
            ],
            "${_textscroll}": [
                ["style", "top", '440px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '1024px'],
                ["style", "height", '690px'],
                ["style", "overflow", 'hidden']
            ],
            "${_slideshow1}": [
                ["style", "top", '0px']
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
                { id: "eid336", tween: [ "style", "${_slideshow5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid337", tween: [ "style", "${_slideshow4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid338", tween: [ "style", "${_slideshow3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid339", tween: [ "style", "${_slideshow2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid335", tween: [ "style", "${_cover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid334", tween: [ "style", "${_video}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid44", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_main1}', [] ], ""], position: 0 },
                { id: "eid57", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_main3}', [] ], ""], position: 0 },
                { id: "eid59", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_main2}', [] ], ""], position: 0 }            ]
        }
    }
},
"main1": {
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
                    transform: [],
                    rect: ['0px', '0px', '165', '230', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.3984)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0', '0', '165', '56px', 'auto', 'auto'],
                    fill: ['rgba(143,1,1,1)']
                },
                {
                    transform: [],
                    type: 'text',
                    align: 'center',
                    id: 'Text8',
                    text: 'Main Stage',
                    rect: ['1', '12', '152px', '42px', 'auto', 'auto'],
                    font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', 30, 'rgba(255,255,255,1)', 'normal', 'none', 'italic']
                },
                {
                    rect: ['12', '73', '141', '132', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(0,0,0,1.00)', 'normal', 'none', 'normal'],
                    id: 'Text9',
                    text: 'Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Duis aliquam vestibulum quam, vel tempus lorem tristique at. ',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '-1px'],
                ["style", "height", '56px'],
                ["color", "background-color", 'rgba(123,7,7,1.00)']
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
                ["style", "width", '152px'],
                ["style", "left", '1px'],
                ["style", "font-size", '30px']
            ],
            "${_Text9}": [
                ["style", "text-align", 'left'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
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
                { id: "eid43", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(143,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(123,7,7,1.00)'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(143,1,1,1.00)'}], position: 1000, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Rectangle2}", "top", '-1px', { fromValue: '-1px'}], position: 1000, duration: 0 }            ]
        }
    }
},
"main2": {
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
                    transform: [],
                    rect: ['0px', '0px', '165', '230', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.3984)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0', '0', '165', '56px', 'auto', 'auto'],
                    fill: ['rgba(143,1,1,1)']
                },
                {
                    transform: [],
                    type: 'text',
                    align: 'center',
                    id: 'Text8',
                    text: 'Food',
                    rect: ['12', '13', '141', '43', 'auto', 'auto'],
                    font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', 30, 'rgba(255,255,255,1)', 'normal', 'none', 'italic']
                },
                {
                    rect: ['12', '68px', '141', '131', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                    id: 'Text10',
                    text: 'Nam id justo eu enim eleifend fermentum in et magna. Morbi molestie convallis eros sit amet facilisis. Fusce ut erat a nunc dapibus consequat. ',
                    align: 'left',
                    type: 'text'
                }
            ],
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
                ["style", "left", '12px'],
                ["style", "text-align", 'center'],
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
                { id: "eid42", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(143,1,1,1.00)'}], position: 1000, duration: 0 }            ]
        }
    }
},
"main3": {
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
                    transform: [],
                    rect: ['0px', '0px', '165', '230', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.3984)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0', '0', '165', '56px', 'auto', 'auto'],
                    fill: ['rgba(143,1,1,1)']
                },
                {
                    transform: [],
                    type: 'text',
                    align: 'center',
                    id: 'Text8',
                    text: 'Activities',
                    rect: ['12', '13', '141', '43', 'auto', 'auto'],
                    font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', 30, 'rgba(255,255,255,1)', 'normal', 'none', 'italic']
                },
                {
                    rect: ['12', '70', '141', '141', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal'],
                    id: 'Text11',
                    text: 'Vestibulum et enim leo. Suspendisse vitae erat ante. Praesent nulla dui, semper vitae facilisis eget, auctor in nulla. <br><br>Fusce quis risus in quam interdum porta. Vestibulum laoreet tempor ultrices.',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text8}": [
                ["style", "top", '13px'],
                ["style", "left", '12px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '30px']
            ],
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
                { id: "eid42", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(143,1,1,1.00)'}], position: 1000, duration: 0 }            ]
        }
    }
},
"main4": {
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
                    transform: [],
                    rect: ['0px', '0px', '165', '230', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.3984)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0', '0', '165', '56px', 'auto', 'auto'],
                    fill: ['rgba(143,1,1,1)']
                },
                {
                    transform: [],
                    type: 'text',
                    align: 'center',
                    id: 'Text8',
                    text: 'Store',
                    rect: ['12', '13', '141', '43', 'auto', 'auto'],
                    font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', 30, 'rgba(255,255,255,1)', 'normal', 'none', 'italic']
                },
                {
                    transform: [],
                    type: 'text',
                    align: 'left',
                    id: 'Text12',
                    text: ' Duis a odio lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae mauris imperdiet augue convallis lobortis',
                    rect: ['12', '69', '141', '137', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(0,0,0,1)', 'normal', 'none', 'normal']
                }
            ],
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
                ["style", "left", '12px'],
                ["style", "text-align", 'center'],
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
                { id: "eid42", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(143,1,1,1.00)'}], position: 1000, duration: 0 }            ]
        }
    }
},
"textscroll": {
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
                    font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', 14, 'rgba(255,255,255,1)', 'normal', 'none', 'italic'],
                    type: 'text',
                    id: 'Text3',
                    text: 'Festival Dates<br>August 22-24<br><br>Prospect Park<br>Brooklyn, New York<br><br>Ticket Prices<br>$40 3-Day Pass<br>$25 1-Day Pass<br>$15 Afternoon Only<br><br>No Cameras<br>No Glass Bottles<br>No Umbrellas<br>No Outside Food<br><br>Parking Limited<br>Free Bicycle Parking',
                    align: 'left',
                    rect: ['0px', '0px', '128px', '230px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "height", '230px'],
                ["style", "top", '230px'],
                ["style", "clip", [-230,128,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
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
                { id: "eid328", tween: [ "style", "${_Text3}", "clip", [289,128,519,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-230,128,0,0]}], position: 0, duration: 18250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-48282587");
