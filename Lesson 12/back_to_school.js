/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary;

// your code goes here
switch(education) {
    
    case "no high school diploma" : salary = "25,636";
                                    console.log("In 2015, a person with " + education + " earned an average of $"+ salary +"/year.");
                                    break;
    case "a high school diploma" : salary = "35,256";
                                    console.log("In 2015, a person with " + education + " earned an average of $"+ salary +"/year.");
                                    break;
    case "an Associate's degree" : salary = "41,496";
                                    console.log("In 2015, a person with " + education + " earned an average of $"+ salary +"/year.");
                                    break;
    case "a Bachelor's degree" : salary = "59,124";
                                    console.log("In 2015, a person with " + education + " earned an average of $"+ salary +"/year.");
                                    break;    
    case "a Master's degree" : salary = "69,732";
                                    console.log("In 2015, a person with " + education + " earned an average of $"+ salary +"/year.");
                                    break;
    case "a Professional degree" : salary = "89,960";
                                    console.log("In 2015, a person with " + education + " earned an average of $"+ salary +"/year.");
                                    break;
    case "a Doctoral degree" : salary = "84,396";
                                    console.log("In 2015, a person with " + education + " earned an average of $"+ salary +"/year.");
                                    break;
}
