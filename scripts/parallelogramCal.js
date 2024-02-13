function calculatePrallelogram (){
    const baseValue = calculateByid('pera-base') ;
    const heightValue = calculateByid('pera-height');
    const area = baseValue * heightValue ;
    const areaFunction = setArea('area-para', area)
}
function calculateByid(inputId){
    const idInput = document.getElementById(inputId);
    const TextInput = idInput.value ;
    const text = parseFloat(TextInput) ;
    return text ;
}
function setArea(idarea, area){
const getId = document.getElementById(idarea);
getId.innerText = area ;
}