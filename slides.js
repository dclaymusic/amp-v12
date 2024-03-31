
function goBack()
{
    if(page == '16') { clearTimeout(playMvt2); clearTimeout(playMvt3); clearTimeout(playMvt4); }
    nextPage = backPage;
    toPage();
}

function toPage() { 

    if(page == '16' && symphonyFinished) { location.replace(location.href); }
    stopSnd(); 
    playSnd('click');
    clearInterval(playing);
    loadbar.style.width = `0%`;
    cueTime = 0;
    hasBeenClicked = false;

    aClicked = false;
    bClicked = false;
    page = nextPage;
    let header2 = document.getElementById('header02');
    header2.innerHTML = page;

    let title = document.getElementById('title');
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let a = document.getElementById('A');
    let b = document.getElementById('B');
    let dog = document.getElementById('dog');
    let image = document.getElementById('image');
    let imagediv = document.getElementById('imagecontainer');
    let next = document.getElementById('next');
    let back = document.getElementById('back');
    let buttondiv = document.getElementById('buttondiv');
    let choice1 = document.getElementById('choice1'); 
    let choice2 = document.getElementById('choice2');
    let choice3 = document.getElementById('choice3');
    let choice4 = document.getElementById('choice4');
    let progressbar = document.getElementById('progressbar');
    choice1.style.border = '4px solid transparent'; 
    choice2.style.border = '4px solid transparent'; 
    choice3.style.border = '4px solid transparent'; 
    choice4.style.border = '4px solid transparent';
    image.style.border = '4px solid transparent';

    imgClicked = false;
    cueTime = 0;

    //cursor handling
    if((page == '0' && !appStarted) || 
    page == '3a' || 
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
    page == '16')
    {
        image.style.cursor = 'pointer'; 
    }
    else
    {
        image.style.cursor = 'default';
    }


    if(page != '0' && page != '1') { back.style.display = 'block'; }
    else { back.style.display = 'none'; }
    // if(page > 0) { 
    //     // a.style.display = 'block';
    //     // b.style.display = 'block';
    //     // a.style.backgroundColor = 'rgb(0,0,0,0)';
    //     // b.style.backgroundColor = 'rgb(0,0,0,0)';
    // }

    if(page == '1') // slide 1
    {
        image.style.border = '4px solid transparent';
        p2.style.fontFamily = 'Nista Regular';
        nextPage = '2a';
        dog.style.display = 'none';
        p2.innerHTML = '';
        progressbar.style.display = 'none';
        next.innerHTML = 'Next';
        next.style.visibility = 'visible';
        title.innerHTML = '';
        image.src = 'img/01.jpg';
        p1.innerHTML = 'Welcome to Acoustic Music Project, where you are the composer. A composer is someone who writes music. They choose and arrange different sounds to inspire us and make us feel more deeply. In this experience, you’ll compose music to accompany a short story. Throughout this activity, you’ll be prompted to make choices that will impact how the music sounds and what will happen to the characters in the story. Your final creation will be a symphony. Do you know what a symphony is? Click Next to find out!';

    }


    if(page == '2a') // slide 2a
    {
        image.style.border = '4px solid transparent';
        nextPage = '2b';
        backPage = '1';
        title.innerHTML = '';
        next.innerHTML = 'Next';
        next.style.visibility = 'visible';
        title.innerHTML = 'Defining Symphony';
        image.src = 'img/02.jpg'
        p1.innerHTML = 'The symphony was invented in the 1700s. That’s a long time ago! Symphony has two different meanings. It can mean a group of musicians playing together, like your St. Louis Symphony Orchestra. Or it can mean a piece of music for orchestra, usually written in four parts called movements.';
    }

    if(page == '2b') // slide 2b
    {
        image.style.border = '4px solid transparent';
        nextPage = '2c';
        backPage = '2a';
        next.style.visibility = 'visible';
        next.innerHTML = 'Next';
        title.innerHTML = 'Defining Symphony';
        image.src = 'img/03.jpg';
        buttondiv.style.display = 'none';
        p1.innerHTML = 'A symphony – the piece of music – is the original playlist! Each movement in a symphony tells a different part of a story or expresses a different emotion, much like a chapter in a book, a scene in a movie, or a track from a playlist. But unlike a book or a movie, a symphony typically has no words. Instead, the listeners create their own stories by decoding musical clues carefully placed by the composer. That’s you!';
        p2.innerHTML = '';
    }

    if(page == '2c') // slide 2c
    {
        image.style.border = '4px solid transparent';
        nextPage = '3a';
        backPage = '2b';
        // a.style.display = 'block';
        // b.style.display = 'block';
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Defining Symphony';
        image.src = 'img/03.jpg';
        progressbar.style.display = 'none';
        p1.innerHTML = 'Answer the following question to begin composing your symphony. How many movements are usually in a symphony?';
        buttondiv.style.display = 'flex';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        choice4.style.display = 'block';
        choice1.innerHTML = '1';
        choice2.innerHTML = '4';
        choice3.innerHTML = '25';
        choice4.innerHTML = '100';
        p2.innerHTML = '';
        // a.innerHTML = 'Theme A';
        // b.innerHTML = 'Theme B';
        // a.style.border = '4px solid transparent';
        // b.style.border = '4px solid transparent';
    }

    if(page == '3a') // slide 3a - mystery melody #1
    {
        image.style.border = '4px solid transparent';
        nextPage = '3b';
        backPage = '2c';
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Uncovering Melody';
        image.src = 'img/04.jpg';
        progressbar.style.display = 'block';
        p1.innerHTML = 'Like every great story starts with a great character, every great symphony starts with a great melody. A melody is a pattern of pitches and rhythms that create the most memorable part of a piece of music. It’s the catchy part you can’t stop humming in your head. \n\n Let’s see if you can name these famous melodies. Click on the image on the left to listen, and then select your answer below. ';
        buttondiv.style.display = 'flex';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        choice1.innerHTML = '"Darth Vader’s Theme" from Star Wars';
        choice2.innerHTML = '"Let it Go" from Frozen';
        choice3.innerHTML = '"Symphony No. 5" by Ludwig Van Beethoven';
        choice4.style.display = 'none';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }


    if(page == '3b') // slide 3b - mystery melody #2
    {
        image.style.border = '4px solid transparent';
        nextPage = '3c';
        backPage = '3a';
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Uncovering Melody';
        image.src = 'img/05.jpg';
        progressbar.style.display = 'block';
        p1.innerHTML = 'Now see if you can name this next melody. Click on the image on the left to listen, and then select your answer below.';
        buttondiv.style.display = 'flex';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        choice1.innerHTML = '"Darth Vader’s Theme" from Star Wars';
        choice2.innerHTML = '"Shake It Off" by Taylor Swift';
        choice3.innerHTML = '"Symphony No. 5" by Ludwig Van Beethoven';
        choice4.style.display = 'none';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '3c') // slide 3c - mystery melody #3
    {
        image.style.border = '4px solid transparent';
        nextPage = '4';
        backPage = '3b';
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Uncovering Melody';
        image.src = 'img/06.jpg';
        progressbar.style.display = 'block';
        p1.innerHTML = 'This is the last melody. Can you guess its name? Click on the image on the left to listen, and then select your answer below.';
        buttondiv.style.display = 'flex';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        choice1.innerHTML = '"We Don’t Talk About Bruno" from Encanto';
        choice2.innerHTML = '"Shake It Off" by Taylor Swift';
        choice3.innerHTML = '"Symphony No. 5" by Ludwig Van Beethoven';
        choice1.style.display = 'block';
        choice2.style.display = 'block';
        choice3.style.display = 'block';
        choice4.style.display = 'none';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '3d') // slide 3d - REMOVED IN V1.2
    {
        image.style.border = '4px solid transparent';
        nextPage = '4';
        backPage = '3c';
        // next.style.visibility = 'hidden';
        next.innerHTML = 'Next';
        next.style.visibility = 'visible';
        title.innerHTML = 'Uncovering Melody';
        image.src = 'img/06.jpg'
        progressbar.style.display = 'block';
        p1.innerHTML = 'To hear Beethoven’s melody again, click on the image on the left. Then click Next when you’re ready to continue."';
        buttondiv.style.display = 'none';
        choice1.innerHTML = '';
        choice2.innerHTML = '';
        choice3.innerHTML = '';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '4') // slide 4
    {
        image.style.border = '4px solid transparent';
        nextPage = '5';
        backPage = '3c';
        imagediv.style.display = 'block';
        document.getElementById('container').style.flexBasis = '50%';
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Uncovering Melody';
        image.src = 'img/07.jpg'
        p1.innerHTML = 'For your symphony, you will start with six notes. This six-note melody is the building block of your symphony. Just like Beethoven, how you choose to expand and vary this melody is one of the clues you’ll leave for your listeners. Click on the image on the left to hear the melody, and then click Next to continue.';
        buttondiv.style.display = 'none';
        p2.innerHTML = '';
    }

    if(page == '5') // slide 5
    {
        image.style.border = '4px solid transparent';
        nextPage = '6a';
        backPage = '4';
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Finding Inspiration';
        imagediv.style.display = 'none';
        document.getElementById('container').style.flexBasis = '100%';
        p1.innerHTML = 'Now that you have a melody, you’re almost ready to start composing your symphony. But first, you need inspiration. Composers find inspiration in many different places. They could be inspired by things that happened in their lives or by a painting or a story. Your symphony will tell the story of Jayden, a young boy, represented by your six-note melody. But first, answer this: <br><br> How do composers find inspiration for their music?';
        buttondiv.style.display = 'flex';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        choice1.style.display = 'block';
        choice2.style.display = 'block';
        choice3.style.display = 'block';
        choice4.style.display = 'block';
        choice1.innerHTML = 'Life experiences';
        choice2.innerHTML = 'Paintings';
        choice3.innerHTML = 'Stories';
        choice4.innerHTML = 'All of the above';
        p2.innerHTML = '';
    }

    if(page == '6a') // slide 6a
    {
        image.style.border = '4px solid transparent';
        nextPage = '6b';
        backPage = '5';
        choicesPlayed = [false,false];
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Movement 1';
        imagediv.style.display = 'block';
        progressbar.style.display = 'block';
        dog.style.display = 'none';
        image.src = 'img/headphones.jpg'
        document.getElementById('container').style.flexBasis = '50%';
        p1.innerHTML = 'First, let’s learn more about Jayden. Click on the headphones to start Chapter 1 of our short story.';
        buttondiv.style.display = 'none';
        choice1.innerHTML = '';
        choice2.innerHTML = '';
        choice3.innerHTML = '';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '6b') // slide 6b
    {
        image.style.border = '4px solid transparent';
        nextPage = '7';
        backPage = '6a';
        choicesPlayed = [false,false];
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Movement 1 - Melody';
        imagediv.style.display = 'block';
        progressbar.style.display = 'block';
        image.src = 'img/08.jpg';
        dog.style.display = 'block';
        p1.innerHTML = 'Now that you’ve met Jayden, choose a melody to represent him. Click on the buttons below to hear each melody, then click Next when you’ve selected the melody you prefer.';
        buttondiv.style.display = 'flex';
        document.getElementById('container').style.flexBasis = '50%';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        choice1.innerHTML = 'Melody A';
        choice2.innerHTML = 'Melody B';
        choice3.style.display = 'none';
        choice4.style.display = 'none';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '7') // slide 7 (A and B)
    {
        image.style.border = '4px solid transparent';
        nextPage = '8a';
        backPage = '6b';
        choicesPlayed = [false,false];
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Movement 1 - Melody';
        imagediv.style.display = 'none';
        progressbar.style.display = 'none';
        dog.style.display = 'none';
        document.getElementById('container').style.flexBasis = '100%';
        if(melodyChoice == 1) { p1.innerHTML = 'You picked Melody A. Did you hear how the melody quickly passes from one instrument to another? If you missed it, use the Back button to go back and listen again. <br><br> This light and quick melody sounds a little shy, just like Jayden. Jayden prefers to hang out with his close friends since being in big groups makes him feel anxious. He’s excited about being in the band because, with an instrument in his mouth, he won’t have to talk much. <br><br> What can you add to a melody to make it more interesting?'; }
        if(melodyChoice == 2) { p1.innerHTML = 'You picked Melody B. Did you hear how all the instruments play the melody together? If you missed it, use the Back button to go back and listen again. <br><br> This slower, fuller-sounding melody sounds bold and outgoing, just like Jayden. Jayden is very excited about band next year since it seems like the only class where the teacher isn’t always telling the students to be quiet. <br><br> What can you add to a melody to make it more interesting?'; }
        buttondiv.style.display = 'flex';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        choice3.style.display = 'block';
        choice4.style.display = 'none';
        choice1.innerHTML = 'Abracadabra';
        choice2.innerHTML = 'Accompaniment';
        choice3.innerHTML = 'Abu Dhabi';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '8a') // slide 8a -- audio part
    {
        image.style.border = '4px solid transparent';
        nextPage = '8b';
        backPage = '7';
        choicesPlayed = [false,false];
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Movement 1 - Continued';
        imagediv.style.display = 'block';
        progressbar.style.display = 'block';
        image.src = 'img/headphones.jpg'
        document.getElementById('container').style.flexBasis = '50%';
        p1.innerHTML = 'Let’s continue with the story to learn more about Jayden. Click on the headphones to listen.';
        buttondiv.style.display = 'none';
        dog.style.display = 'none';
        choice1.innerHTML = '';
        choice2.innerHTML = '';
        choice3.innerHTML = '';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '8b') // slide 8b -- selection
    {
        image.style.border = '4px solid transparent';
        nextPage = '9';
        backPage = '8a';
        choicesPlayed = [false,false];
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Movement 1 - Accompaniment';
        imagediv.style.display = 'block';
        progressbar.style.display = 'block';
        image.src = 'img/10.jpg';
        dog.style.display = 'block';
        p1.innerHTML = ' Now that you know a little bit more about Jayden and his big secret, it’s time to leave another clue in your symphony. Click on the buttons below to hear each accompaniment, then click Next when you’ve selected the accompaniment you prefer.';
        buttondiv.style.display = 'flex';
        document.getElementById('container').style.flexBasis = '50%';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        choice1.innerHTML = 'Accompaniment A';
        choice2.innerHTML = 'Accompaniment B';
        choice1.style.display = 'block';
        choice2.style.display = 'block';
        choice3.style.display = 'none';
        choice4.style.display = 'none';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '9') // slide 9 movement 1
    {
        image.style.border = '4px solid transparent';
        nextPage = '10a';
        backPage = '8b';
        choicesPlayed = [false,false];
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next';
        title.innerHTML = 'Your Movement 1';
        imagediv.style.display = 'block';
        progressbar.style.display = 'block';
        image.src = 'img/11.jpg';
        dog.style.display = 'none';
        dog.src = 'img/dog.png'
        buttondiv.style.display = 'flex';
        document.getElementById('container').style.flexBasis = '50%';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        if(melodyChoice == 1 && accompChoice == 1) { //a legato
            p1.innerHTML = 'Click the button to listen to your entire first movement. Listen for the melody and the accompaniment you chose and see how they fit together to illustrate Jayden.';
            // p2.innerHTML = 'Movement 1: Melody A with Legato Accompaniment';
        }
        else if(melodyChoice == 1 && accompChoice == 2) { //a staccato
            p1.innerHTML = 'Click on the image on the left to listen to your entire first movement. Listen for the melody and the accompaniment you chose and see how they fit together to illustrate Jayden.';
            // p2.innerHTML = 'Movement 1: Melody A with Staccato Accompaniment';
        }
        else if(melodyChoice == 2 && accompChoice == 1) {  //b legato
            p1.innerHTML = 'Click on the image on the left to listen to your entire first movement. Listen for the melody and the accompaniment you chose and see how they fit together to illustrate Jayden.';
            // p2.innerHTML = 'Movement 1: Melody B with Legato Accompaniment';
        }
        else if(melodyChoice == 2 && accompChoice == 2) { //b staccato
            p1.innerHTML = 'Click on the image on the left to listen to your entire first movement. Listen for the melody and the accompaniment you chose and see how they fit together to illustrate Jayden.';
            // p2.innerHTML = 'Movement 1: Melody B with Staccato Accompaniment';
        }
        choice1.style.display = 'none';
        choice1.innerHTML = '';
        choice2.innerHTML = '';
        choice2.style.display = 'none';
        choice3.style.display = 'none';
        choice4.style.display = 'none';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '10a') // slide 10 -- movement 2
    {
        image.style.border = '4px solid transparent';
        nextPage = '10b'
        backPage = '9';
        choicesPlayed = [false,false];
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Movement 2';
        imagediv.style.display = 'block';
        progressbar.style.display = 'block';
        image.src = 'img/headphones.jpg'
        document.getElementById('container').style.flexBasis = '50%';
        p1.innerHTML = 'Let’s find out what happens in Chapter 2 of the story. Click on the headphones to continue listening.';
        buttondiv.style.display = 'none';
        dog.style.display = 'none';
        dog.src = 'img/dog.png'
        // dog.style.display = 'block';
        // dog.src = 'img/talentshow.jpg'
        choice1.innerHTML = '';
        choice1.style.display = 'none';
        choice2.innerHTML = '';
        choice3.innerHTML = '';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '10b') // slide 10b
    {
        image.style.border = '4px solid transparent';
        nextPage = '11';
        backPage = '10a';
        choicesPlayed = [false,false];
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Movement 2';
        imagediv.style.display = 'none';
        document.getElementById('container').style.flexBasis = '100%';
        p1.innerHTML = 'How do you think Jayden is feeling about the talent show?';
        buttondiv.style.display = 'flex';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        dog.style.display = 'none';
        dog.src = 'img/dog.png'
        choice1.style.display = 'block';
        choice2.style.display = 'block';
        choice3.style.display = 'block';
        choice4.style.display = 'none';
        choice1.innerHTML = 'Scared';
        choice2.innerHTML = 'Excited';
        choice3.innerHTML = 'Angry';
        choice4.innerHTML = ''
        p2.innerHTML = '';
    }

    if(page == '11') // slide 11 -- melody selection
    {
        image.style.border = '4px solid transparent';
        nextPage = '12';
        backPage = '10b';
        choicesPlayed = [false,false];
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Movement 2 - Melody';
        imagediv.style.display = 'block';
        progressbar.style.display = 'block';
        image.src = 'img/12.jpg';
        dog.style.display = 'block';
        p1.innerHTML = 'It’s time to choose a melody that expresses Jayden’s feelings about the talent show. Click on the buttons below to hear each melody, then click Next when you’ve selected the melody you prefer.';
        buttondiv.style.display = 'flex';
        document.getElementById('container').style.flexBasis = '50%';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        choice1.innerHTML = 'Rising Melody A';
        choice2.innerHTML = 'Falling Melody B';
        choice1.style.display = 'block';
        choice2.style.display = 'block';
        choice3.style.display = 'none';
        choice4.style.display = 'none';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '12') // slide 12 movement 2
    {
        image.style.border = '4px solid transparent';
        nextPage = '13a';
        backPage = '11';
        choicesPlayed = [false,false];
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Your Movement 2';
        imagediv.style.display = 'block';
        progressbar.style.display = 'block';
        image.src = 'img/13.jpg';
        dog.style.display = 'none';
        buttondiv.style.display = 'flex';
        document.getElementById('container').style.flexBasis = '50%';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        if(melodyShape == 1) { //rising
            p1.innerHTML = 'You picked the rising melody. Did you hear the pitches gradually getting higher and higher? If you missed it, use the Back button to go back and listen again. <br><br> This melody sounds hopeful. Jayden is beginning to realize that he might feel relieved when he finally shares his secret. Maybe he better start practicing for the talent show. Click on the image on the left to hear movement 2 with your chosen melody.';
            // choice1.innerHTML = 'Movement 2: Rising Melody with Accompaniment';
        }
        else if(melodyShape == 2) { //falling
            p1.innerHTML = 'You picked the falling melody. Did you hear how each pitch sounds lower than the last? If you missed it, use the Back button to go back and listen again. <br><br> Jayden doesn’t want to perform at the talent show and he’s very worried about what his friends will think about the contra-fortevarius. He just wants to hide. Or at least hide his contra-fortevarius. Click on the image on the left to hear movement 2 with your chosen melody.';
            // choice1.innerHTML = 'Movement 2: Falling Melody with Accompaniment';
        }
        choice1.innerHTML = '';
        choice2.innerHTML = '';
        choice3.innerHTML = '';
        choice4.innerHTML = '';
        choice1.style.display = 'none';
        choice2.style.display = 'none';
        choice3.style.display = 'none';
        choice4.style.display = 'none';
        p2.innerHTML = '';
    }

    if(page == '13a') // slide 13 -- audio part
    {
        image.style.border = '4px solid transparent';
        nextPage = '13b';
        backPage = '12';
        choicesPlayed = [false,false];
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Movement 3';
        imagediv.style.display = 'block';
        progressbar.style.display = 'block';
        image.src = 'img/headphones.jpg'
        document.getElementById('container').style.flexBasis = '50%';
        p1.innerHTML = 'You’re on to Movement 3. As a composer, the instrument that plays the notes you write is just as important as the notes themselves. That’s because the sound of an instrument affects how the music makes the listener feel. In Chapter 3 of our story, we meet Jayden’s music teacher, Ms. Sousaphone. Your job is to choose an instrument to represent her. Here we go! Click on the image to the left to continue listening.';
        buttondiv.style.display = 'none';
        dog.style.display = 'none';
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice1.innerHTML = '';
        choice2.innerHTML = '';
        choice3.innerHTML = '';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '13b') // slide 13 -- instrument selection
    {
        image.style.border = '4px solid transparent';
        nextPage = '14';
        backPage = '13a';
        choicesPlayed = [false,false];
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Movement 3 - Instrumentation';
        imagediv.style.display = 'block';
        progressbar.style.display = 'block';
        image.src = 'img/14.jpg';
        dog.style.display = 'block';
        p1.innerHTML = 'Now you’ve met Ms. Sousaphone. Click on the buttons below to hear each instrument, then click Next when you’ve selected the instrument you think sounds most like her.';
        buttondiv.style.display = 'flex';
        document.getElementById('container').style.flexBasis = '50%';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        choice1.innerHTML = 'Trombone';
        choice2.innerHTML = 'Viola';
        choice1.style.display = 'block'
        choice2.style.display = 'block';
        choice3.style.display = 'none';
        choice4.style.display = 'none';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '14') // slide 14 movement 3
    {
        image.style.border = '4px solid transparent';
        nextPage = '15';
        backPage = '13b';
        choicesPlayed = [false,false];
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Your Movement 3';
        imagediv.style.display = 'block';
        progressbar.style.display = 'block';
        image.src = 'img/16.jpg';
        dog.style.display = 'none';
        buttondiv.style.display = 'flex';
        document.getElementById('container').style.flexBasis = '50%';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.justifyContent = 'space-around';
        if(instrument == 1) { //trombone
            p1.innerHTML = 'Your Ms. Sousaphone is a little bit silly, like the trombone. She has wild, curly red hair and likes to wear costumes that match what she’s teaching. One day she looks like Mozart; the next day she’s Elvis. She’s everyone’s favorite teacher because she’s fun and creative, and her music class is never boring. <br><br> Click on the image on the left to hear Movement 3 with the trombone playing Ms. Sousaphone’s melody.';
            // choice1.innerHTML = 'Movement 3: Featuring the Trombone as Ms. Sousaphone';
        }
        else if(instrument == 2) { //viola
            p1.innerHTML = 'Your Ms. Sousaphone is everyone’s favorite teacher because she’s kind, gentle, and patient with her students. She has neat brown hair and wears comfortable jeans and a cozy sweater almost every day. <br><br> Click on the image on the left to hear Movement 3 with the viola playing Ms. Sousaphone’s melody.”';
            // choice1.innerHTML = 'Movement 3: Featuring the Viola as Ms. Sousaphone';
        }
        choice1.innerHTML = '';
        choice2.innerHTML = '';
        choice3.innerHTML = '';
        choice4.innerHTML = '';
        choice1.style.display = 'none';
        choice2.style.display = 'none';
        choice3.style.display = 'none';
        choice4.style.display = 'none';
        p2.innerHTML = '';
    }

    if(page == '15') // slide 15 -- audio part
    {
        image.style.border = '4px solid transparent';
        movement4Slide = false;
        nextPage = '16';
        backPage = '14';
        choicesPlayed = [false,false];
        p2.style.fontFamily = 'Nista Regular';
        next.style.visibility = 'hidden';
        next.innerHTML = 'Next'
        title.innerHTML = 'Movement 4';
        imagediv.style.display = 'block';
        progressbar.style.display = 'block';
        image.src = 'img/headphones.jpg'
        document.getElementById('container').style.flexBasis = '50%';
        p1.innerHTML = 'Will the class learn of Jayden’s embarrassing secret? Is the secret really that embarrassing? In a symphony, the fourth and final movement wraps everything up, so let’s catch up with Jayden and his classmates to see how music class is going in Chapter 4 of the story. Click on the image on the left to listen.';
        buttondiv.style.display = 'none';
        dog.style.display = 'none';
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice1.innerHTML = '';
        choice2.innerHTML = '';
        choice3.innerHTML = '';
        choice4.innerHTML = '';
        p2.innerHTML = '';
    }

    if(page == '16') // slide 16 -- full symphony
    {
        image.style.border = '4px solid transparent';
        movement4Slide = false;
        nextPage = '1';
        backPage = '15';
        choicesPlayed = [false,false];
        p2.style.fontFamily = 'Nista Extra Bold';
        next.style.visibility = 'hidden';
        next.innerHTML = 'Start Again'
        title.innerHTML = 'Your Symphony';
        imagediv.style.display = 'block';
        progressbar.style.display = 'block';
        image.src = 'img/19.jpg'
        document.getElementById('container').style.flexBasis = '50%';
        p1.innerHTML = 'Way to go! You’re a great composer! Let’s listen to all four movements of your symphony and see if you can imagine the story while you listen to the music. <br><br> Click on the image on the left to hear your symphony.';
        buttondiv.style.display = 'none';
        dog.style.display = 'block';
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice1.innerHTML = '';
        choice2.innerHTML = '';
        choice3.innerHTML = '';
        choice4.innerHTML = '';
        p2.innerHTML = '';

    }
    

}
