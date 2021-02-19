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
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);
         // insert code here

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_button1_gray}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button1_color").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button3_gray}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button3_color").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button4_gray}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button4_color").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button5_gray}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button5_color").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button2_gray}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button2_color").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button1_color}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button1_color").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button2_color}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button2_color").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button3_color}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button3_color").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button4_color}", "mouseout", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button4_color").hide();
         // insert code to be run when the mouse is moved off the object

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button5_color}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button5_color").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button1_color}", "click", function(sym, e) {
         // insert code for mouse click here
         // play the timeline from the given position (ms or label)
         sym.stop("fishermen");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button2_color}", "click", function(sym, e) {
         // insert code for mouse click here
         // stop the timeline at the given position (ms or label)
         sym.stop("statues");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button3_color}", "click", function(sym, e) {
         // insert code for mouse click here
         // stop the timeline at the given position (ms or label)
         sym.stop("houses");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button4_color}", "click", function(sym, e) {
         // insert code for mouse click here
         // stop the timeline at the given position (ms or label)
         sym.stop("monk");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button5_color}", "click", function(sym, e) {
         // insert code for mouse click here
         // stop the timeline at the given position (ms or label)
         sym.stop("women");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_triangle}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var mySymbolObject = sym.getSymbol("moreinfo");
         mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_triangle}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var mySymbolObject = sym.getSymbol("moreinfo");
         // stop the timeline at the given position (ms or label)
         mySymbolObject.stop(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'moreinfo'
   (function(symbolName) {   
   
   })("moreinfo");
   //Edge symbol end:'moreinfo'

})(jQuery, AdobeEdge, "EDGE-606721692");