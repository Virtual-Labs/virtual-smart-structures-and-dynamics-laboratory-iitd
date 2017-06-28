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
      
      
      

      

      

      Symbol.bindElementAction(compId, symbolName, "${replay}", "click", function(sym, e) {
         // insert code for mouse click here
         // Replay from the beginning, regardless of current playing state 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }
      });
      //Edge binding end


      Symbol.bindElementAction(compId, symbolName, "${Text9}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("sle_exp_bond.xlsx", "_self");
         sym.$("Star").show();
         sym.$("StarCopy").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "click", function(sym, e) {
         window.open("sle_exp_perf.xlsx", "_self");
         sym.$("Star").show();
         sym.$("StarCopy").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy}", "click", function(sym, e) {
         window.open("sle_exp_bond.xlsx", "_self");
         sym.$("Star").show();
         sym.$("StarCopy").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text9Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("sle_exp_perf.xlsx", "_self");
         sym.$("Star").show();
         sym.$("StarCopy").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${proceed}", "click", function(sym, e) {
         sym.play(44000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${proceed2}", "click", function(sym, e) {
         sym.play(53000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text6}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("description.PDF", "_blank");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1839095");