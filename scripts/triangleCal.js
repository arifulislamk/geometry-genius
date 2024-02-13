function triangleCalculte(){
    // get base 
    const baseInput = document.getElementById('base-input');
    const baseText = baseInput.value ;
    const base = parseFloat(baseText)
    // get height 
    const heightInput = document.getElementById('height-input');
    const heightText = heightInput.value ;
    const height = parseFloat(heightText);
    // calculate part 
    const areaInput = document.getElementById('area-text');
    const area = 0.5 * base * height ;
    if(area < 0 || area === ' ' || area === isNaN){
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
    p.innerText = 'Triangle Area is :   ' + area + 'cm**2' ;
    }

    const divInput = document.getElementById('div');
    divInput.appendChild(p)
}

