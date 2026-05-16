(function(){
    'use strict';
    console.log('reading JS');




    // Making all reels continouous- no jumping- used "09-ImageScroll-left" files as example, and did that for every slider
    window.addEventListener('load', function () {

    // Key slider // 

    const sliderContentA = document.querySelector('.a');

    const sliderWidthA = sliderContentA.offsetWidth;

    const clonedA = sliderContentA.cloneNode(true);
    clonedA.className = "a2 reel";

    document.querySelector('.slider-a').appendChild(clonedA);

    let root = document.querySelector(':root');

    const endLeftPosA = `-${sliderWidthA}px`;
    root.style.setProperty('--sliderwidth-a', endLeftPosA);

    document.querySelector('.slider-a').classList.add("animate-a");



    // Plant slider // 

    const sliderContentB = document.querySelector('.b');

    const sliderWidthB = sliderContentB.offsetWidth;

    const clonedB = sliderContentB.cloneNode(true);
    clonedB.className = "b2 reel";

    document.querySelector('.slider-b').appendChild(clonedB);

    const endLeftPosB = `-${sliderWidthB}px`;
    root.style.setProperty('--sliderwidth-b', endLeftPosB);

    document.querySelector('.slider-b').classList.add("animate-b");



    // Music slider // 

    const sliderContentC = document.querySelector('.c');

    const sliderWidthC = sliderContentC.offsetWidth;

    const clonedC = sliderContentC.cloneNode(true);
    clonedC.className = "c2 reel";

    document.querySelector('.slider-c').appendChild(clonedC);

    const endLeftPosC = `-${sliderWidthC}px`;
    root.style.setProperty('--sliderwidth-c', endLeftPosC);

    document.querySelector('.slider-c').classList.add("animate-c");



    // Shell slider // 

    const sliderContentD = document.querySelector('.d');

    const sliderWidthD = sliderContentD.offsetWidth;

    const clonedD = sliderContentD.cloneNode(true);
    clonedD.className = "d2 reel";

    document.querySelector('.slider-d').appendChild(clonedD);

    const endLeftPosD = `-${sliderWidthD}px`;
    root.style.setProperty('--sliderwidth-d', endLeftPosD);

    document.querySelector('.slider-d').classList.add("animate-d");



    // pictures slider // 

    const sliderContentE = document.querySelector('.e');

    const sliderWidthE = sliderContentE.offsetWidth;

    const clonedE = sliderContentE.cloneNode(true);
    clonedE.className = "e2 reel";

    document.querySelector('.slider-e').appendChild(clonedE);

    const endLeftPosE = `-${sliderWidthE}px`;
    root.style.setProperty('--sliderwidth-e', endLeftPosE);

    document.querySelector('.slider-e').classList.add("animate-e");



    // cat slider // 

    const sliderContentF = document.querySelector('.f');

    const sliderWidthF = sliderContentF.offsetWidth;

    const clonedF = sliderContentF.cloneNode(true);
    clonedF.className = "f2 reel";

    document.querySelector('.slider-f').appendChild(clonedF);

    const endLeftPosF = `-${sliderWidthF}px`;
    root.style.setProperty('--sliderwidth-f', endLeftPosF);

    document.querySelector('.slider-f').classList.add("animate-f");

});
    
})();