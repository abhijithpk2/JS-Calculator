
function buttonClick(val){
    document.getElementById('current-screen').value+=val
}
function buttonClear(){
    document.getElementById('current-screen').value=""
    document.getElementById('previous-screen').value=""
    
}
function buttonDel(){
    let displayValue=document.getElementById('current-screen').value
    console.log(displayValue.length);
    del=displayValue.substring(0, displayValue.length - 1);
    document.getElementById('current-screen').value=del
   
}
function buttonEquals(){
    operation=document.getElementById('current-screen').value;
    result=eval(operation)
    document.getElementById('previous-screen').value=operation
    document.getElementById('current-screen').value=result

}