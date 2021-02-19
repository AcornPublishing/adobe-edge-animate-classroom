
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_main1}","mouseover",function(sym,e){sym.getSymbol("main1").stop(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_main1}","mouseout",function(sym,e){sym.getSymbol("main1").stop(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_main2}","mouseover",function(sym,e){sym.getSymbol("main2").stop(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_main2}","mouseout",function(sym,e){sym.getSymbol("main2").stop(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_main3}","mouseover",function(sym,e){sym.getSymbol("main3").stop(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_main3}","mouseout",function(sym,e){sym.getSymbol("main3").stop(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$('<iframe width="335" height="230" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=prospect+park,+brooklyn,+ny&amp;aq=&amp;sll=40.697488,-73.979681&amp;sspn=0.842307,1.61087&amp;ie=UTF8&amp;hq=prospect+park,+brooklyn,+ny&amp;t=m&amp;ll=40.661889,-73.970861&amp;spn=0.014975,0.028667&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe><br /><small><a href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=prospect+park,+brooklyn,+ny&amp;aq=&amp;sll=40.697488,-73.979681&amp;sspn=0.842307,1.61087&amp;ie=UTF8&amp;hq=prospect+park,+brooklyn,+ny&amp;t=m&amp;ll=40.661889,-73.970861&amp;spn=0.014975,0.028667&amp;z=14&amp;iwloc=A" style="color:#0000FF;text-align:left">View Larger Map</a></small>').appendTo(sym.$("map"));sym.$("body").html("WELCOME. This summer, join thousands of other revelers at Brooklyn's own Prospect Park to celebrate the annual independent folk music festival. Made possible by <a style='color:red' href='http://www.adobe.com' target='_blank'>Adobe Systems, Inc.</a>");sym.setVariable("slidecount",1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button}","click",function(sym,e){sym.$('<iframe width="560" height="315" src="http://www.youtube.com/embed/kHjKPaCz5O0" frameborder="0" allowfullscreen></iframe>').appendTo(sym.$("video"));sym.$("video").show();sym.$("cover").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_cover}","click",function(sym,e){sym.$("video").children().remove();sym.$("video").hide();sym.$("cover").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_title}","click",function(sym,e){window.open(window.location.href,"_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","keydown",function(sym,e){var counter=sym.getVariable("slidecount");if(e.which==39){counter=counter+1;if(counter>5){counter=1;}}
if(e.which==37){counter=counter-1;if(counter<1){counter=5;}}
sym.setVariable("slidecount",counter);sym.$("caption").html("Slide "+counter);for(i=1;i<6;i++){sym.$("slideshow"+i).hide();}
sym.$("slideshow"+counter).show();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'main1'
(function(symbolName){})("main1");
//Edge symbol end:'main1'

//=========================================================

//Edge symbol: 'main1_1'
(function(symbolName){})("main2");
//Edge symbol end:'main2'

//=========================================================

//Edge symbol: 'main2_1'
(function(symbolName){})("main3");
//Edge symbol end:'main3'

//=========================================================

//Edge symbol: 'main3_1'
(function(symbolName){})("main4");
//Edge symbol end:'main4'

//=========================================================

//Edge symbol: 'textscroll'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",18250,function(sym,e){sym.play(0);});
//Edge binding end
})("textscroll");
//Edge symbol end:'textscroll'
})(jQuery,AdobeEdge,"EDGE-48282587");