/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (/* your conditional goes here */
    room==="dining room" && suspect === "Mr. Parkes") {
    solved = true;
    weapon = "knife";
    
} 
else if (/* your conditional goes here */
        room==="gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
}
else if (/* your conditional goes here */
        room==="billiards room" && suspect === "Mrs. Sparr") {
    solved = true;
    weapon = "pool stick";
}
else if(room==="ballroom" && suspect === "Mr. Kalehoff") {
    solved = true;
    weapon = "poison";
}
else {
    solved = false;
}

if (solved) {
	console.log(/* your message goes here*/
	            suspect + " did it in the " + room + " with the " + weapon+"!");
}
