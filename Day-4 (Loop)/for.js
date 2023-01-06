document.write("<h2>For Loops</h2>")
document.write("For printing the number 1 to 10"+"<br>")
for (let i =1; i<11 ; i++){
    document.write(i +"<br>");
}

// printing the sum of first n natural number
let n = prompt("Enter the number");
document.write("For printing the sum of first "+n+" natural number"+"<br>")
n=Number.parseInt(n)
let sum = 0;
for( let i = 1; i<=n ; i++){
sum = sum + i;
}

document.write(sum)
