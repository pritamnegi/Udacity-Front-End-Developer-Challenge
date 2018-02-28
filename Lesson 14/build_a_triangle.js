/*
 * Programming Quiz: Build A Triangle (5-3)
 */
// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* "
    }
   return line + "\n";
}
  
  function buildTriangle(width){
    var triangle=""; 
    for (var i=1; i<=width; i++){
      triangle += (makeLine(i));
    }
    return triangle;
  }
  
  buildTriangle(10); 