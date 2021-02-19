/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'rolloftape'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("rolloftape");
   //Edge symbol end:'rolloftape'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'review2'
   (function(symbolName) {   
   
   })("review2");
   //Edge symbol end:'review2'

   //=========================================================
   
   //Edge symbol: 'review3'
   (function(symbolName) {   
   
   })("review3");
   //Edge symbol end:'review3'

   //=========================================================
   
   //Edge symbol: 'review1'
   (function(symbolName) {   
   
   })("review1");
   //Edge symbol end:'review1'

})(jQuery, AdobeEdge, "EDGE-38724590");