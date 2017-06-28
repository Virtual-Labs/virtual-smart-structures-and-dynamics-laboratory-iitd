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
      
      
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(5000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(5000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text8}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(7250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(7250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // insert code here
         sym.play(35000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
         // insert code here
         sym.play(27000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text10Copy3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect3Copy2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text10}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp11_files/pristine_exp11_1.xlsx", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text10Copy}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp11_files/Corroded_exp11_1.xlsx", "_blank");
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${RoundRect3}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp11_files/pristine_exp11_1.xlsx", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect3Copy}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp11_files/corroded_exp11_1.xlsx", "_blank");
         

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${proceed2}", "click", function(sym, e) {
         sym.play(26750);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1501209");