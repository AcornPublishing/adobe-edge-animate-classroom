
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10000,function(sym,e){sym.$("button4Copy").hide();sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button4}","click",function(sym,e){sym.stop("photo4");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button3}","click",function(sym,e){sym.stop("photo3");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button2}","click",function(sym,e){sym.stop("photo2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1}","click",function(sym,e){sym.stop("photo1");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("button1Copy").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.$("button1Copy").hide();sym.$("button2Copy").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5076,function(sym,e){sym.$("button2Copy").hide();sym.$("button3Copy").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7500,function(sym,e){sym.$("button3Copy").hide();sym.$("button4Copy").show();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Down-level'
(function(symbolName){})("Down-level");
//Edge symbol end:'Down-level'
})(jQuery,AdobeEdge,"EDGE-94802810");