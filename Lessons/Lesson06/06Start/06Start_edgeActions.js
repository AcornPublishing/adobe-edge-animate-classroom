/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_main1}", "mouseover", function(sym, e) {
         sym.getSymbol("main1").stop(1000);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_main1}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("main1").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_main2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getSymbol("main2").stop(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_main2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("main2").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_main3}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getSymbol("main3").stop(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_main3}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("main3").stop(0);

      });
      //Edge binding end

      

      

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'main1'
   (function(symbolName) {   
   
   })("main1");
   //Edge symbol end:'main1'

   //=========================================================
   
   //Edge symbol: 'main1_1'
   (function(symbolName) {   
   
   })("main2");
   //Edge symbol end:'main2'

   //=========================================================
   
   //Edge symbol: 'main2_1'
   (function(symbolName) {   
   
   })("main3");
   //Edge symbol end:'main3'

   //=========================================================
   
   //Edge symbol: 'main3_1'
   (function(symbolName) {   
   
   })("main4");
   //Edge symbol end:'main4'

   //=========================================================
   
   //Edge symbol: 'textscroll'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18250, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("textscroll");
   //Edge symbol end:'textscroll'

})(jQuery, AdobeEdge, "EDGE-48282587");

