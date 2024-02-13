function calculatePrallelogram() {
    const baseValue = calculateByid('pera-base');
    const heightValue = calculateByid('pera-height');
    const area = baseValue * heightValue;
    const areaFunction = setArea('area-para', area,'Parallelogram')
}
function calculateByid(inputId) {
    const idInput = document.getElementById(inputId);
    const TextInput = idInput.value;
    const text = parseFloat(TextInput);
    return text;
}
function setArea(idarea, area ,name) {
    const getId = document.getElementById(idarea);
    getId.innerText = area;

    const p = document.createElement('p');
    p.innerHTML = coutdown +'. ' + name + ' Area is :  ' + area + ' cm<sup>2</sup> '
    const divInput = document.getElementById('div');
    divInput.appendChild(p)
    coutdown++;
}