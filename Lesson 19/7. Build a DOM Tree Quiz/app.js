/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!

$("<div id=family2><h1>Family 2</h1></div>").insertAfter("#family1");
$("#family2").append("<div id = bruce><h2>Bruce</h2></div>");
$("#bruce").append("<div id = madison><h2>Madison</h2></div>");
$("#bruce").append("<div id = hunter><h2>Hunter</h2></div>");