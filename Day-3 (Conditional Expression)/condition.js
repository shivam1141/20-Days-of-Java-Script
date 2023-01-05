
function check_condition(){
    let num1 = document.Condition.num1.value;
    let num2 = document.Condition.num2.value;

    if (num1>num2){
        console.log(num1 +" is greater than "+ num2)
        alert("if condition working")
    }
    else if(num1==num2){
    document.write(num1 +" is equal to "+ num2)
    }
    else{
        document.write(num1 +" is smaller than "+ num2)
        alert("else consition working")
    }
}
