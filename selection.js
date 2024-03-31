function select(selection)
{

    playSnd('click');

    let title = document.getElementById('title');
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let a = document.getElementById('A');
    let b = document.getElementById('B');
    let dog = document.getElementById('dog');
    let image = document.getElementById('image');
    let imagediv = document.getElementById('imagecontainer');
    let loadbar = document.getElementById('loadbar');
    let next = document.getElementById('next');
    let back = document.getElementById('back');
    let buttondiv = document.getElementById('buttondiv');
    let choice1 = document.getElementById('choice1'); 
    let choice2 = document.getElementById('choice2');
    let choice3 = document.getElementById('choice3');
    let choice4 = document.getElementById('choice4');

    choice1.style.border = '4px solid transparent'; 
    choice2.style.border = '4px solid transparent'; 
    choice3.style.border = '4px solid transparent'; 
    choice4.style.border = '4px solid transparent'; 

    if(selection == 1) { choice1.style.border = '4px black solid'; }
    if(selection == 2) { choice2.style.border = '4px black solid'; }
    if(selection == 3) { choice3.style.border = '4px black solid'; }
    if(selection == 4) { choice4.style.border = '4px black solid'; }

    if(page == '2c') //movements in a symphony multiple choice
    {
        next.style.visibility = 'visible';

        if(selection == 2) { 
            playSnd('yes');
            p2.innerHTML = 'Great job! Click Next to continue.'; 
            p2.style.color = '#006A0A'
        }
        else { 
            p2.innerHTML = 'Not quite. A symphony has four movements. Remember, a movement is a part of a symphony, much like a chapter in a book. Click Next to continue. '; 
            p2.style.color = '#96283A'
        }
    }

    if(page == '3a') //mystery melody 1
    {
        if(selection == 2) { 
            playSnd('yes');
            next.style.visibility = 'visible';
            p2.innerHTML = 'Fantastic! You nailed it! Click Next to continue.'; 
            p2.style.color = '#006A0A';
        }
        else { 
            next.style.visibility = 'hidden';
            p2.innerHTML = 'Every incorrect answer is a step closer to the right one. Try again!'; 
            p2.style.color = '#96283A';
        }
    }

    if(page == '3b') //mystery melody 2
    {
        if(selection == 1) {
            playSnd('yes'); 
            next.style.visibility = 'visible';
            p2.innerHTML = 'You’re on a roll! Let’s see if you can keep it up. Click Next to continue.'; 
            p2.style.color = '#006A0A';
        }
        else { 
            next.style.visibility = 'hidden';
            p2.innerHTML = 'Nice try! Take another shot, you’re getting closer.'; 
            p2.style.color = '#96283A';
        }
    }

    if(page == '3c') //mystery melody 3
    {
        if(selection == 3) { 
            playSnd('yes');
            next.style.visibility = 'visible';
            p2.innerHTML = 'Correct! You’re on fire! Click Next to learn more. '; 
            p2.style.color = '#006A0A';
        }
        else { 
            next.style.visibility = 'hidden';
            p2.innerHTML = 'No worries, not everyone gets it right away. What’s your next guess?'; 
            p2.style.color = '#96283A';
        }
    }

    if(page == '5') //finding inspiration
    {
        if(selection == 4) { 
            playSnd('yes');
            next.style.visibility = 'visible';
            p2.innerHTML = 'Impressive! Click Next to begin composing Movement 1.'; 
            p2.style.color = '#006A0A';
        }
        else { 
            next.style.visibility = 'hidden';
            p2.innerHTML = 'Right! But not completely. Try again.'; 
            p2.style.color = '#96283A';
        }
    }

    if(page == '6b') //selecting A or B melody
    {
        if(selection == 1) { 
            choicesPlayed[0] = true;
            checkNext();
            melodyChoice = 1;
            image.style.border = '4px solid transparent'; 
            loadbar.style.width = `0%`;
            clearInterval(playing);
            stopSnd();
            cueTime = 0;
            image.style.border = '4px solid #E03C57'; 
            startSnd(page, selection);
            p2.innerHTML = 'You’ve selected Melody A.'; 
            p2.style.color = '#006A0A';
        }
        if(selection == 2) { 
            choicesPlayed[1] = true;
            checkNext();
            melodyChoice = 2;
            image.style.border = '4px solid transparent'; 
            loadbar.style.width = `0%`;
            clearInterval(playing);
            stopSnd();
            cueTime = 0;
            image.style.border = '4px solid #E03C57'; 
            startSnd(page, selection);
            p2.innerHTML = 'You’ve selected Melody B.'; 
            p2.style.color = '#006A0A';
        }
    }

    if(page == '7') //melody A/B
    {
        p1.innerHTML = 'What can you add to a melody to make it more interesting?';
        image.src = 'img/09.jpg';
        if(selection == 2) { 
            playSnd('yes');
            p2.innerHTML = 'Well played! Your knowledge is shining through. An accompaniment is the part of the music that supports the melody and makes it more interesting and exciting. Click Next to learn more about Jayden and to pick an accompaniment for his melody.'; 
            p2.style.color = '#006A0A';
            imagediv.style.display = 'block';
            document.getElementById('container').style.flexBasis = '50%';
            next.style.visibility = 'visible';
        }
        else if(selection == 1) { 
            p2.innerHTML = 'Oops, not quite. Try again.'; 
            document.getElementById('container').style.flexBasis = '100%';
            p2.style.color = '#96283A';
            imagediv.style.display = 'none';
            next.style.visibility = 'hidden';
        }
        else if(selection == 3) { 
            p2.innerHTML = 'You’re so close. Try again.'; 
            document.getElementById('container').style.flexBasis = '100%';
            p2.style.color = '#96283A';
            imagediv.style.display = 'none';
            next.style.visibility = 'hidden';
        }
    }

    if(page == '8b') //selecting A or B accompaniment
    {
        if(selection == 1) { 
            choicesPlayed[0] = true;
            checkNext();
            accompChoice = 1;
            image.style.border = '4px solid transparent'; 
            loadbar.style.width = `0%`;
            clearInterval(playing);
            stopSnd();
            cueTime = 0;
            image.style.border = '4px solid #E03C57'; 
            startSnd(page, selection);
            p2.innerHTML = 'You’ve selected Accompaniment A.'; 
            p2.style.color = '#006A0A';
        }
        if(selection == 2) { 
            choicesPlayed[1] = true;
            checkNext();
            accompChoice = 2;
            image.style.border = '4px solid transparent'; 
            loadbar.style.width = `0%`;
            clearInterval(playing);
            stopSnd();
            cueTime = 0;
            image.style.border = '4px solid #E03C57'; 
            startSnd(page, selection);
            p2.innerHTML = 'You’ve selected Accompaniment B.'; 
            p2.style.color = '#006A0A';
        }
    }

    if(page == '9') //playing Movement 1 -- moved to button for v1.1
    {
        // if(selection == 1) { 
        //     image.style.border = '4px solid transparent'; 
        //     loadbar.style.width = `0%`;
        //     clearInterval(playing);
        //     stopSnd();
        //     cueTime = 0;
        //     image.style.border = '4px solid #E03C57'; 
        //     startSnd(page, selection);
        // }
    }

    if(page == '10b') //mvt2 survey
    {
        next.style.visibility = 'visible';
        playSnd('yes');
        p2.innerHTML = 'Great choice! Click Next to start composing movement 2.'; 
        p2.style.color = '#006A0A';
    }

    if(page == '11') //selecting rising or falling melody
    {
        if(selection == 1) { 
            melodyShape = 1;
            image.style.border = '4px solid transparent'; 
            loadbar.style.width = `0%`;
            clearInterval(playing);
            stopSnd();
            cueTime = 0;
            image.style.border = '4px solid #E03C57'; 
            startSnd(page, selection);
            p2.innerHTML = 'You’ve selected Rising Melody A.'; 
            p2.style.color = '#006A0A';
        }
        if(selection == 2) { 
            melodyShape = 2;
            image.style.border = '4px solid transparent'; 
            loadbar.style.width = `0%`;
            clearInterval(playing);
            stopSnd();
            cueTime = 0;
            image.style.border = '4px solid #E03C57'; 
            startSnd(page, selection);
            p2.innerHTML = 'You’ve selected Falling Melody B.'; 
            p2.style.color = '#006A0A';
        }
    }

    if(page == '12') //playing Movement 2
    {
        if(selection == 1) { 
            image.style.border = '4px solid transparent'; 
            loadbar.style.width = `0%`;
            clearInterval(playing);
            stopSnd();
            cueTime = 0;
            image.style.border = '4px solid #E03C57'; 
            startSnd(page, selection);
        }
    }

    if(page == '13b') //selecting instrument for Movement 3
    {
        if(selection == 1) { 
            instrument = 1;
            image.style.border = '4px solid transparent'; 
            loadbar.style.width = `0%`;
            clearInterval(playing);
            stopSnd();
            cueTime = 0;
            image.src = 'img/15.jpg'
            image.style.border = '4px solid #E03C57'; 
            startSnd(page, selection);
            p2.innerHTML = 'You chose the trombone! The trombone sounds low, and it can be very loud. Thanks to its slide, it can make sounds that are beautiful and sounds that are silly.'; 
            p2.style.color = '#006A0A';
        }
        if(selection == 2) { 
            instrument = 2;
            image.style.border = '4px solid transparent'; 
            loadbar.style.width = `0%`;
            clearInterval(playing);
            stopSnd();
            cueTime = 0;
            image.src = 'img/17.jpg'
            image.style.border = '4px solid #E03C57'; 
            startSnd(page, selection);
            p2.innerHTML = 'You chose the viola! The viola has a warm, soothing sound. Compared to the trombone, the sound of the viola is calm and quiet.'; 
            p2.style.color = '#006A0A';
        }
    }

    if(page == '14') //playing Movement 3
    {
        if(selection == 1) { 
            image.style.border = '4px solid transparent'; 
            loadbar.style.width = `0%`;
            clearInterval(playing);
            stopSnd();
            cueTime = 0;
            image.style.border = '4px solid #E03C57'; 
            startSnd(page, selection);
        }
    }

}


function highlightImage()
{
    let image = document.getElementById('image');
    let next = document.getElementById('next');
    let hasBeenClicked = false;
    let p2 = document.getElementById('p2');

    if(page == 0 && !appStarted) {
        image.style.cursor = 'default';
        appStarted = true;
        document.getElementById('p1').innerHTML = 'Sounds are loading...';
        initSnd();
        loading = setInterval(function() {
            checkBuffers();
        }, 10);
    }

    if(page == '3a' || 
        page == '3b' || 
        page == '3c' || 
        page == '3d' || 
        page == '4' ||
        page == '6a' ||
        page == '8a' ||
        page == '9' ||
        page == '10a' ||
        page == '12' ||
        page == '13a' ||
        page == '14' ||
        (page == '15' && !movement4Slide) ||
        page == '16'
    )
    {
        
        image.style.border = '4px solid transparent';

        playSnd('click');
        imgClicked = !imgClicked;
        if(imgClicked) { 
            image.style.border = '4px solid #E03C57'; 
            startSnd(page);
            if(page == '9')
            {
                p2.innerHTML = '';
                if(melodyChoice == 1 && accompChoice == 1) { //a legato
                    p2.innerHTML = 'You’re listening to Movement 1: Melody A with Legato Accompaniment.';
                    p2.style.color = '#006A0A';

                }
                else if(melodyChoice == 1 && accompChoice == 2) { //a staccato
                    p2.innerHTML = 'You’re listening to Movement 1: Melody A with Staccato Accompaniment.';
                    p2.style.color = '#006A0A';

                }
                else if(melodyChoice == 2 && accompChoice == 1) { //b legato
                    p2.innerHTML = 'You’re listening to Movement 1: Melody B with Legato Accompaniment.';
                    p2.style.color = '#006A0A';

                }
                else if(melodyChoice == 2 && accompChoice == 2) { //b staccato
                    p2.innerHTML = 'You’re listening to Movement 1: Melody B with Staccato Accompaniment.';
                    p2.style.color = '#006A0A';

                }
            }
            if(page == '12')
            {
                p2.innerHTML = '';
                if(melodyShape == 1) {
                    p2.innerHTML = 'You’re listening to Movement 2: Rising Melody A with Accompaniment.';
                    p2.style.color = '#006A0A';
                }
                if(melodyShape == 2) {
                    p2.innerHTML = 'You’re listening to Movement 2: Falling Melody B with Accompaniment.';
                    p2.style.color = '#006A0A';
                }
            }
            if(page == '14')
            {
                p2.innerHTML = '';
                if(instrument == 1) {
                    p2.innerHTML = 'You’re listening to Movement 3: Featuring the Trombone as Ms. Sousaphone.';
                    p2.style.color = '#006A0A';
                }
                if(instrument == 2) {
                    p2.innerHTML = 'You’re listening to Movement 3: Featuring the Viola as Ms. Sousaphone.';
                    p2.style.color = '#006A0A';
                }
            }
        }
        else { 
            if(page == '16') { p2.innerHTML = ''; }
            image.style.border = '4px solid transparent'; 
            loadbar.style.width = `0%`;
            clearInterval(playing);
            stopSnd();
            cueTime = 0;
            if(page == '9')
            {
                p2.innerHTML = '';
            }
            if(page == '12')
            {
                p2.innerHTML = '';
            }
            if(page == '14')
            {
                p2.innerHTML = '';
            }
        }
        hasBeenClicked = true;
        if(page == '4' && hasBeenClicked) { next.style.visibility = 'visible'; hasBeenClicked = false; }
    }    
}


function checkNext()
{
    if(choicesPlayed[0] && choicesPlayed[1])
    {
        next.style.visibility = 'visible';
        next.innerHTML = 'Next';
    }
}