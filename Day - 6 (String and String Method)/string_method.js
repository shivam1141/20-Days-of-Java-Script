let myString = "Hello\n"

// converting lower case string to upper case
 document.write(myString.toUpperCase());
 // converting upper case string to lower case

 document.write(myString.toLowerCase());

 document.write("<br>")

 //slicing string
 let myName1 = "Shivam";
 document.write(myName1.slice(2.4));
 document.write("<br>")

 //replacing string
 let text = "How are you?"
 let newText = text.replace("How","Where");
 document.write(newText);

 document.write("<br>")

 //concating text
 let firstName = "Shivam";
 let lastName = "Kumar"; 
 let newName = firstName.concat(lastName);
 document.write(newName);
 
 document.write("<br>")

//  trimming text (removing whitelines)
let t_text = "           text        "
let new_t_text = t_text.trim();
document.write(new_t_text);
 