
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10000,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1_gray}","mouseover",function(sym,e){sym.$("button1_color").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button3_gray}","mouseover",function(sym,e){sym.$("button3_color").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button4_gray}","mouseover",function(sym,e){sym.$("button4_color").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button5_gray}","mouseover",function(sym,e){sym.$("button5_color").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button2_gray}","mouseover",function(sym,e){sym.$("button2_color").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1_color}","mouseout",function(sym,e){sym.$("button1_color").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button2_color}","mouseout",function(sym,e){sym.$("button2_color").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button3_color}","mouseout",function(sym,e){sym.$("button3_color").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button4_color}","mouseout",function(sym,e){sym.$("button4_color").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button5_color}","mouseout",function(sym,e){sym.$("button5_color").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1_color}","click",function(sym,e){sym.stop("fishermen");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button2_color}","click",function(sym,e){sym.stop("statues");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button3_color}","click",function(sym,e){sym.stop("houses");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button4_color}","click",function(sym,e){sym.stop("monk");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button5_color}","click",function(sym,e){sym.stop("women");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_triangle}","mouseover",function(sym,e){var mySymbolObject=sym.getSymbol("moreinfo");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_triangle}","mouseout",function(sym,e){var mySymbolObject=sym.getSymbol("moreinfo");mySymbolObject.stop(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//Edge symbol: 'moreinfo'
(function(symbolName){})("moreinfo");
//Edge symbol end:'moreinfo'
})(jQuery,AdobeEdge,"EDGE-606721692");