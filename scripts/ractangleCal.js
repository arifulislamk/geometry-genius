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
    // areaInput.innerText = area ;
    
    if(area < 0 || area === ' '){
        areaInput.innerText = 'not posssible' ;
    }
    else{
    areaInput.innerText = area ;
    }

    const p = document.createElement('p');
    if(area < 0){
        p.innerText ='not possible this minus value' ;
    }
    else{
    p.innerHTML = coutdown + '. ' + 'Ractangle Area is :   ' + area + ' cm<sup>2</sup>' ;
    }

    const divInput = document.getElementById('div');
    divInput.appendChild(p)
    coutdown++ ;
}