let screenOut = document.getElementById('screen-ouput');
function display(num){
    screenOut.value += num;
}
function del(){
    screenOut.value = screenOut.value.slice(0, -1);
}
function calculate(){
    try{
        screenOut.value = eval(screenOut.value)
    } catch{
        alert("Invalid!");
        clearold()
    };
}
function clearold(){
    screenOut.value = "";
}