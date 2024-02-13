function rohmbusCalculation(){
    const rohmD1 = calculateByid('rom-d1') ;
    const rohmD2 = calculateByid('rom-d2') ;
    const area = 0.5 * rohmD1 * rohmD2 ;
    const setrohmarea = setArea('rohm-area', area,'Rohmbus')
}