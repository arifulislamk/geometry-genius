function ractanglecalculte(){
    // get base 
    const baseInput = document.getElementById('base-input');
    const baseText = baseInput.value ;
    const base = parseFloat(baseText)
    console.log(base)
    // get height 
    const heightInput = document.getElementById('height-input');
    const heightText = heightInput.value ;
    const height = parseFloat(heightText);
    console.log(height);
    // calculate part 
    const areaInput = document.getElementById('area-text');
    const area = 0.5 * base * height ;
    areaInput.innerText = area ;
    console.log(area)
}