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
      
      
      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Text2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("http://ssdl.iitd.ac.in/vssdl/exp9instruct.html", "_self");
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${replay3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle8}", "click", function(sym, e) {
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/Undamaged span 1.xlsx", "_blank");

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Text4}", "click", function(sym, e) {
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/undamaged_data.xlsx", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text3Copy6}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Replay}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(0);
         
         sym.$("Rectangle2").show();
         sym.$("Rectangle2Copy5").show();
         sym.$("Rectangle2Copy14").show();
         sym.$("Rectangle2Copy6").show();
         sym.$("Rectangle2Copy2").show();
         sym.$("Rectangle2Copy3").show();
         sym.$("Rectangle2Copy").show();
         sym.$("Rectangle2Copy16").show();
         sym.$("Rectangle2Copy17").show();
         sym.$("Rectangle2Copy8").show();
         sym.$("Rectangle2Copy4").show();
         sym.$("Rectangle2Copy11").show();
         sym.$("shmcircuit2").show();
         sym.$("Text3Copy3").show();
         sym.$("ArrowCopy3").show();
         sym.$("ArrowCopy2").show();
         sym.$("Text3Copy2").show();
         sym.$("Rectangle3").show();
         sym.$("RoundRect2").show();
         sym.$("Text3Copy10").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28406, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         // insert code here
         sym.play(57000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42000, function(sym, e) {
         // insert code here
         sym.play(57000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49000, function(sym, e) {
         // insert code here
         sym.play(57000);

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Text12}", "click", function(sym, e) {
         
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/Damaged span 1.xlsx", "_blank");
         sym.play(30000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 56000, function(sym, e) {
         // insert code here
         sym.play(57000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle14}", "click", function(sym, e) {
         
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/Damaged span 1.xlsx", "_blank");
         sym.play(30000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text12Copy}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/Damaged span 2.xlsx", "_blank");
         sym.play(37000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle14Copy}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/Damaged span 2.xlsx", "_blank");
         sym.play(37000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text12Copy2}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/Damaged span 3.xlsx", "_blank");
         sym.play(44000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle14Copy2}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/Damaged span 3.xlsx", "_blank");
         sym.play(44000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text12Copy3}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/Damaged span 4.xlsx", "_blank");
         sym.play(51000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle14Copy3}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/Damaged span 4.xlsx", "_blank");
         sym.play(51000);

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21500, function(sym, e) {
         // insert code here
         sym.play(28406);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text13}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(29000);

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${bridge2}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Text14Copy}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/damaged_span1.xlsx", "_blank");
         sym.play(30000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect5}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/damaged_span1.xlsx", "_blank");
         sym.play(30000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text14Copy3}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/damaged_span3.xlsx", "_blank");
         sym.play(44000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect5Copy2}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/damaged_span3.xlsx", "_blank");
         sym.play(44000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect5Copy}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/damaged_span2.xlsx", "_blank");
         sym.play(37000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text14Copy2}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/damaged_span2.xlsx", "_blank");
         sym.play(37000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text14Copy4}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/damaged_span4.xlsx", "_blank");
         sym.play(51000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect5Copy3}", "click", function(sym, e) {
         window.open("http://ssdl.iitd.ac.in/vssdl/exp5s_files/Train Vehicle Class A/readings/damaged_span4.xlsx", "_blank");
         sym.play(51000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1375703");