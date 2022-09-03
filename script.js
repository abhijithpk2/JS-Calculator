
function buttonClick(val){
    document.getElementById('current-screen').value+=val
}
function buttonClear(){
    document.getElementById('current-screen').value=""
    document.getElementById('previous-screen').value=""
    
}
function buttonEquals(){
    operation=document.getElementById('current-screen').value;
    result=eval(operation)
    document.getElementById('previous-screen').value=operation
    document.getElementById('current-screen').value=result

}