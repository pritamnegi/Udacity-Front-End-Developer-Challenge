/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh =  function(max) {
    var st="";
    for(var i=0;i<max;i++)
    {
        st = st + "ha";
    }
    st = st+"!";
    return st;
    
}
console.log(laugh(10));
