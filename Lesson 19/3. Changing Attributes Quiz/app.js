  /*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList, first_item, link;

// your code goes here!
navList = $('.nav-list');

first_item = navList.children().first();

link = first_item.find('a');
link.attr('href', '#1');

 
