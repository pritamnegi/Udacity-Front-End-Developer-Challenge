/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

// your code goes here!
articleItems = $('.article-item');
var ul = articleItems.children('ul');
ul.remove();