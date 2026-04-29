(function(){
    'use strict';
    console.log('reading JS');

    // start here: 
    const madlib = document.querySelector('#final-note');
    const myForm = document.querySelector('#form'); 
    const story = document.querySelector('#story');
    const plantImage = document.querySelector('#little-guy img');

    myForm.addEventListener('submit', function(event){
        event.preventDefault(); 

        const name = document.querySelector('#name').value;
        const adj1 = document.querySelector('#plant-adjective').value;
        const liquid = document.querySelector('#liquid').value;
        const adverb = document.querySelector('#adverb').value;
        const ingVerb = document.querySelector('#ing-verb').value;
        const number = document.querySelector('#number').value;
        const adj2 = document.querySelector('#window-adjective').value;
        const verb = document.querySelector('#verb').value;
        const object = document.querySelector('#object').value;
        const noun = document.querySelector('#noun').value;
        const gift = document.querySelector('#plant-gift').value;
        const fName = document.querySelector('#friend-name').value;

        // checking if there is anything left blank 
        let myText; //defined for below 

        if(name == ''){ 
            myText = 'Please write a name';
            document.querySelector('#name').focus();
        } else if(adj1 == ''){
            myText = 'please write an adjective';
            document.querySelector('#plant-adjective').focus();
        } else if(liquid == ''){
            myText = 'please write a liquid';
            document.querySelector('#liquid').focus();
        } else if(adverb == ''){
            myText = 'please write an adverb';
            document.querySelector('#adverb').focus();
        } else if(ingVerb == ''){
            myText = 'please write an verb ending in -ing';
            document.querySelector('#ing-verb').focus();
        } else if( number == ''){
            myText = 'please write a number';
            document.querySelector('#number').focus();
        } else if(adj2 == ''){
            myText = 'please write an adjective';
            document.querySelector('#window-adjective').focus();
        } else if(verb == ''){
            myText = 'please write a verb';
            document.querySelector('#verb').focus();
        } else if(object == ''){
            myText = 'please write an object';
            document.querySelector('#object').focus();
        } else if(noun == ''){
            myText = 'please write a noun';
            document.querySelector('#noun').focus();
        } else if(gift == ''){
            myText = 'please select an object';
            document.querySelector('#plant-gift').focus();
        } else if(fName == ''){
            myText = 'please write another name';
            document.querySelector('#friend-name').focus();
        }
        else {
                myText = `Hey <strong>${name}</strong>!! 
                <p> Thank you so much for agreeing to plant-sit my <strong>${adj1}</strong> plant while I’m away. It requires some very specific care. Every morning, please water it with <strong>${liquid}</strong>, but only <strong>${adverb}.</strong> If you water it too much, it will start <strong>${ingVerb}</strong> uncontrollably. Make sure it gets at least <strong>${number}</strong> hours of sunlight, preferably from a <strong>${adj2}</strong> window. If it doesn’t, it may try to <strong>${verb}</strong> the nearest <strong>${object}</strong>. Also, if it starts making noises like a <strong>${noun}</strong>, DO NOT PANIC. Just give it a <strong>${gift}</strong>, and slowly back away.</p> <p>Thanks again!</p>
                 <p><strong>-${fName}</strong></p>`; 

                if (gift == 'suitcase') {
                    plantImage.src = 'images/suitcase-guy.png';
                } else if (gift == 'Popsicle') {
                    plantImage.src = 'images/popsicle-guy.png';
                } else if (gift == 'box') {
                    plantImage.src = 'images/box-guy.png' ;
                }

                story.className = "shown"

            } //this will submit what we want assuming its all filled out 
        
        
        madlib.innerHTML = myText; 

    });



})();