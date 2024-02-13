function ellipseCalculation(){
    const eliAaxis = calculateByid('eli-aaxis');
    const eliBaxis = calculateByid('eli-baxis');
    const area = 3.1416 * eliAaxis * eliBaxis ;
    const setAreaEli = setArea('eli-area', area,"Ellipse");
}