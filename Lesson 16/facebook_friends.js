/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here


var facebookProfile = {
  name: "Pritam Negi",
  friends: 500,
  messages: ["In Mumbai", "In Nerul!", "In New York!"],
  postMessage(message) {
    facebookProfile.messages.push(message); 
  }, 
  deleteMessage(index) {
    facebookProfile.messages.splice(index,1);  
  }, 
  addFriend() {
    facebookProfile.friends += 1; 
  },
  removeFriend() {
   facebookProfile.friends = facebookProfile.friends -1; 
  }, 
}; 

facebookProfile.removeFriend();
facebookProfile.friends;
