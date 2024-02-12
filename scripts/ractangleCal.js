function calculateRactangle(){
    // get height 
    const heightInput = document.getElementById('rac-hight')
    const heightText = heightInput.value ;
    const height = parseFloat(heightText);
    // get width 
    const widthInput = document.getElementById('rac-width')
    const widthText = widthInput.value ;
    const width = parseFloat(widthText)
    // calculatio area  
    const areaInput = document.getElementById('area-rac');
    const area = height * width ;
    areaInput.innerText = area ;
}