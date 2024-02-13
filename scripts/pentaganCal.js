function pentagonCalculation(){
    const penPeri = calculateByid('pen-peri');
    const penApo = calculateByid('pen-apo');
    const area = 0.5 * penPeri * penApo ;
    const setPenArea = setArea('pen-area', area);
}