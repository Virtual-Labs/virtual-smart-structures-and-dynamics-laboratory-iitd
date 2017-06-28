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
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text18}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp11_files/baseline_chloride_exp11_2.xlsx", "_blank");

      });
      //Edge binding end
      Symbol.bindElementAction(compId, symbolName, "${Text18Copy6}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp11_files/comp_baseline_corrodded_exp11_2.xlsx", "_blank");

      });
      //Edge binding end
      Symbol.bindElementAction(compId, symbolName, "${Text18Copy3}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp11_files/k_m_values_exp11_2.xlsx", "_blank");

      });
      //Edge binding end
      Symbol.bindElementAction(compId, symbolName, "${Text18Copy}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp11_files/after_45_days_exp11_2.xlsx", "_blank");

      });
      //Edge binding end
      Symbol.bindElementAction(compId, symbolName, "${Text18Copy4}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp11_files/corr_rate.docx", "_blank");

      });
      //Edge binding end
      Symbol.bindElementAction(compId, symbolName, "${Text18Copy2}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp11_files/after_120_days_exp11_2.xlsx", "_blank");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34500, function(sym, e) {
         // insert code here
         sym.play(42000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26585, function(sym, e) {
         sym.play(28000);

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Text16Copy3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(44000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${arrowread2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(44000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text18Copy5}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect5Copy5}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(0);

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41000, function(sym, e) {
         sym.play(42000);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1501209");