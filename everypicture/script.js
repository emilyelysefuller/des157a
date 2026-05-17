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

    // Image Mapping for each object, I named every svg object, object1, 2, etc. and then used this to find which one was witch // 

    document.querySelector('#photos').addEventListener('pointerenter', function(){
        console.log('over photos');
    });

    document.querySelector('#keys').addEventListener('pointerenter', function(){
        console.log('over keys');
    });

    document.querySelector('#plant').addEventListener('pointerenter', function(){
        console.log('over plants');
    });

    document.querySelector('#shells').addEventListener('pointerenter', function(){
        console.log('over shells');
    });

    document.querySelector('#cat').addEventListener('pointerenter', function(){
        console.log('over cat');
    });

    document.querySelector('#music').addEventListener('pointerenter', function(){
        console.log('over concert bands');
    });

    // adding and removing outlines on hover // 
    const photos = document.querySelector('#photos');
    const keys = document.querySelector('#keys');
    const plant = document.querySelector('#plant');
    const shells = document.querySelector('#shells');
    const music = document.querySelector('#music');
    const cat = document.querySelector('#cat');

    photos.addEventListener('pointerenter', function(){
        photos.classList.add('show-object');
    });

    photos.addEventListener('pointerleave', function(){
        photos.classList.remove('show-object');
    });

    keys.addEventListener('pointerenter', function(){
        keys.classList.add('show-object');
    });

    keys.addEventListener('pointerleave', function(){
        keys.classList.remove('show-object');
    });

    plant.addEventListener('pointerenter', function(){
        plant.classList.add('show-object');
    });

    plant.addEventListener('pointerleave', function(){
        plant.classList.remove('show-object');
    });

    shells.addEventListener('pointerenter', function(){
        shells.classList.add('show-object');
    });

    shells.addEventListener('pointerleave', function(){
        shells.classList.remove('show-object');
    });

    music.addEventListener('pointerenter', function(){
        music.classList.add('show-object');
    });

    music.addEventListener('pointerleave', function(){
        music.classList.remove('show-object');
    });

    cat.addEventListener('pointerenter', function(){
        cat.classList.add('show-object');
    });

    cat.addEventListener('pointerleave', function(){
        cat.classList.remove('show-object');
    });

    //adding story/reel change on hover of specific oject// 
    
    const storyPanels = document.querySelectorAll('.story-panel');

    function showPanel(panelId) {
        storyPanels.forEach(function(panel) {
            panel.className = 'story-panel hidden';
        });

        document.querySelector(panelId).className = 'story-panel visible';
    }

    photos.addEventListener('pointerenter', function(){
        showPanel('#polaroids-panel');
    });

    keys.addEventListener('pointerenter', function(){
        showPanel('#keys-panel');
    });

    plant.addEventListener('pointerenter', function(){
        showPanel('#plants-panel');
    });

    shells.addEventListener('pointerenter', function(){
        showPanel('#shells-panel');
    });

    music.addEventListener('pointerenter', function(){
        showPanel('#concerts-panel');
    });

    cat.addEventListener('pointerenter', function(){
        showPanel('#cats-panel');
    });

})();