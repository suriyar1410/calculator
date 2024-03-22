let result=document.getElementById("output");
function dispaly(num){
    output.value += num;
}
function calculate(){
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert("Invalid Number");
    }
}
function clr(){
    output.value="";
}
function del(){
    output.value=output.value.slice(0,-1);
}