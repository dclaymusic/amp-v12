var snd, sndPick, isLoaded = false;
var isPlaying = false;
var audioCtx;
const sounds = ['01-melodyAlegato','01-melodyAstaccato','01-melodyBlegato','01-melodyBstaccato',
                'beethoven5','accompA','letitgo','melodyA','melodyB','accompB','vader','melody',
                'narration1A', 'narration1B', 'narration1C', 'narration2A', 'risingMelody', 'fallingMelody',
                '02-rising', '02-falling', 'narration3A', 'horn', 'viola', '03-horn', '03-viola',
                'narration4A','narration4B','narration4C','narration4D','04','click','yes'];
numberOfSounds = sounds.length;
let buffers = [];
var activeSounds = [];

for(let i = 0; i < sounds.length; i++)
{
    buffers[i] = null;
}

function initSnd()
{
        // document.getElementById('startdiv').remove();
        var AudioContext = window.AudioContext || window.webkitAudioContext;   
        audioCtx = new AudioContext();

        for(let i = 0; i < sounds.length; i++)
        {
            loadSnd(i);
        }
}

function checkBuffers()
{
    let buffCount = 0;
    for(let i = 0; i < sounds.length; i++)
    {
        if(buffers[i] != null) { buffCount++; }
    }
    if(buffCount == numberOfSounds) {  
        soundsLoaded = true; 
        if(page == 0 && soundsLoaded) { 
            document.getElementById('p1').innerHTML = 'Click "Start" to begin.'
            document.getElementById('next').style.display = 'inline';
        }
        clearInterval(loading); 
    }
}


///////////////////////////////////////////////////////////

function loadSnd(index) {
    const request = new XMLHttpRequest();
    request.open("GET", `./snd/${sounds[index]}.mp3`);
    request.responseType = "arraybuffer";
    request.onload = function() {
    let undecodedAudio = request.response;
    audioCtx.decodeAudioData(undecodedAudio, (data) => buffers[index] = data);
    };
    request.send();
};

function playSnd(name) {
    let index;
    for(let s = 0; s < sounds.length; s++)
    {
        if(sounds[s] == name)
        {
            index = s;
            break;
        }
    }
    loadSnd(index); //ADDED TO V2
    const source = audioCtx.createBufferSource();
    activeSounds.push(source);
    source.buffer = buffers[index];
    source.connect(audioCtx.destination);
    source.start(audioCtx.currentTime); // play the source immediately
    source.onended = function() {  }
};

///////////////////////////////////////////////////////////

function adjustLoadbar()
{
    let loadbar = document.getElementById('loadbar');
    let progressbar = document.getElementById('progressbar');
    let image = document.getElementById('image');
    let next = document.getElementById('next');
    let dog = document.getElementById('dog');
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');

    if(cueTime > currentAudioDuration)
    {
        //activating next button
        if(page == '6a' || page == '6b' || page == '8a' || page == '8b' || page == '9'
           || page == '10a' || page == '11' || page ==  '12' || page == '13a' || page == '13b' 
           || page == '14' || page == '15' || page == '16')
        {
            next.style.visibility = 'visible';
        }
        if(page == '14')
        {
            dog.style.visibility = 'block';
            p2.innerHTML = '';
            p1.innerHTML = 'Did you hear Jayden’s melody along with Ms. Sousaphones? If not, listen again. In this movement, Jayden and Ms. Sousaphone are having a musical conversation!'
        }
        if(page == '15')
        {
            progressbar.style.display = 'none';
            image.src = 'img/18.jpg'
            movement4Slide = true;
            p2.innerHTML = 'Click Next to hear your complete symphony, including Movement 4.';
            p2.style.color = '#006A0A';

        }
        clearInterval(playing);
        loadbar.style.width = `0%`;
        cueTime = 0;
        image.style.border = '4px solid transparent'; 
        imgClicked = false;
    }
    else
    {
        //MUST match speed in startSnd function
        loadbar.style.width = `${(cueTime/currentAudioDuration)*100}%`;
        cueTime += 0.1;
    }

}

function startSnd(page, selection)
{
    // currentAudioDuration = 1;
    //audio durations
    if(page == '3a') { currentAudioDuration = 16; } //let it go
    if(page == '3b') { currentAudioDuration = 10; } //vader
    if(page == '3c') { currentAudioDuration = 6; } //beethoven5
    if(page == '3d') { currentAudioDuration = 6; } //beethoven5
    if(page == '4') { currentAudioDuration = 5; } //melody
    if(page == '6a') { currentAudioDuration = 26; } //narration1a
    if(page == '6b') {
        if(selection == 1) { currentAudioDuration = 7; }
        if(selection == 2) { currentAudioDuration = 9; }
    }
    if(page == '8a') { currentAudioDuration = 79; } //2 files, same duration
    if(page == '8b') { currentAudioDuration = 11; } //2 files, same duration
    if(page == '9') {
        if(melodyChoice == 1 && accompChoice == 1) { currentAudioDuration = 26; }
        if(melodyChoice == 1 && accompChoice == 2) { currentAudioDuration = 26; }
        if(melodyChoice == 2 && accompChoice == 1) { currentAudioDuration = 28; }
        if(melodyChoice == 2 && accompChoice == 2) { currentAudioDuration = 29; }
    }
    if(page == '10a') { currentAudioDuration = 53; } //53
    if(page == '11') { currentAudioDuration = 13; } //rising or falling melody
    if(page == '12') {  //Movement 2
        if(melodyShape == 1) { currentAudioDuration = 30; }
        if(melodyShape == 2) { currentAudioDuration = 33; }
    } //
    if(page == '13a') { currentAudioDuration = 47; } // narration 3A -- 47 sec
    if(page == '13b') { currentAudioDuration = 12.5; } //horn or viola
    if(page == '14') { currentAudioDuration = 61; } //Movement 3
    if(page == '15') { //audio pre-Movement 4
        // currentAudioDuration = 1;
        if(melodyShape == 1 && instrument == 1) { currentAudioDuration = 100; }
        if(melodyShape == 1 && instrument == 2) { currentAudioDuration = 95; }
        if(melodyShape == 2 && instrument == 1) { currentAudioDuration = 79; }
        if(melodyShape == 2 && instrument == 2) { currentAudioDuration = 53; }
    }
    if(page == '16')
    {
        // currentAudioDuration = 1;
        if(melodyChoice == 1 && accompChoice == 1 && melodyShape == 1 && instrument == 1) { currentAudioDuration = 234+8; }
        if(melodyChoice == 1 && accompChoice == 1 && melodyShape == 1 && instrument == 2) { currentAudioDuration = 234+8; }
        if(melodyChoice == 1 && accompChoice == 1 && melodyShape == 2 && instrument == 1) { currentAudioDuration = 237+8; }
        if(melodyChoice == 1 && accompChoice == 1 && melodyShape == 2 && instrument == 2) { currentAudioDuration = 237+8; }

        if(melodyChoice == 1 && accompChoice == 2 && melodyShape == 1 && instrument == 1) { currentAudioDuration = 234+8; }
        if(melodyChoice == 1 && accompChoice == 2 && melodyShape == 1 && instrument == 2) { currentAudioDuration = 234+8; }
        if(melodyChoice == 1 && accompChoice == 2 && melodyShape == 2 && instrument == 1) { currentAudioDuration = 237+8; }
        if(melodyChoice == 1 && accompChoice == 2 && melodyShape == 2 && instrument == 2) { currentAudioDuration = 237+8; }

        if(melodyChoice == 2 && accompChoice == 1 && melodyShape == 1 && instrument == 1) { currentAudioDuration = 236+8; }
        if(melodyChoice == 2 && accompChoice == 1 && melodyShape == 1 && instrument == 2) { currentAudioDuration = 236+8; }
        if(melodyChoice == 2 && accompChoice == 1 && melodyShape == 2 && instrument == 1) { currentAudioDuration = 239+8; }
        if(melodyChoice == 2 && accompChoice == 1 && melodyShape == 2 && instrument == 2) { currentAudioDuration = 239+8; }

        if(melodyChoice == 2 && accompChoice == 2 && melodyShape == 1 && instrument == 1) { currentAudioDuration = 237+8; }
        if(melodyChoice == 2 && accompChoice == 2 && melodyShape == 1 && instrument == 2) { currentAudioDuration = 237+8; }
        if(melodyChoice == 2 && accompChoice == 2 && melodyShape == 2 && instrument == 1) { currentAudioDuration = 240+8; }
        if(melodyChoice == 2 && accompChoice == 2 && melodyShape == 2 && instrument == 2) { currentAudioDuration = 240+8; }
    }



    //call sound, start loadbar timer
    let speed = 100;
    if(page == '3a') { playSnd('letitgo'); playing = setInterval(function() { adjustLoadbar(); }, speed); }
    if(page == '3b') { playSnd('vader'); playing = setInterval(function() { adjustLoadbar(); }, speed); }
    if(page == '3c') { playSnd('beethoven5'); playing = setInterval(function() { adjustLoadbar(); }, speed); }
    if(page == '3d') { playSnd('beethoven5'); playing = setInterval(function() { adjustLoadbar(); }, speed); }
    if(page == '4') { playSnd('melody'); playing = setInterval(function() { adjustLoadbar(); }, speed); }
    if(page == '6a') { playSnd('narration1A'); playing = setInterval(function() { adjustLoadbar(); }, speed); }
    if(page == '6b') {
        if(selection == 1) { playSnd('melodyA'); }
        if(selection == 2) { playSnd('melodyB'); }
        playing = setInterval(function() { adjustLoadbar(); }, speed); 
    }
    if(page == '8a') {
        if(melodyChoice == 1) { playSnd('narration1B'); }
        if(melodyChoice == 2) { playSnd('narration1C'); }
        playing = setInterval(function() { adjustLoadbar(); }, speed); 
    }
    if(page == '8b') {
        if(selection == 1) { playSnd('accompA'); }
        if(selection == 2) { playSnd('accompB'); }
        playing = setInterval(function() { adjustLoadbar(); }, speed); 
    }
    if(page == '9') {
        if(melodyChoice == 1 && accompChoice == 1) { playSnd('01-melodyAlegato'); }
        if(melodyChoice == 1 && accompChoice == 2) { playSnd('01-melodyAstaccato'); }
        if(melodyChoice == 2 && accompChoice == 1) { playSnd('01-melodyBlegato'); }
        if(melodyChoice == 2 && accompChoice == 2) { playSnd('01-melodyBstaccato'); }
        playing = setInterval(function() { adjustLoadbar(); }, speed); 
    }
    if(page == '10a') { 
        playSnd('narration2A'); 
        playing = setInterval(function() { adjustLoadbar(); }, speed); 
    }
    if(page == '11') {
        if(selection == 1) { playSnd('risingMelody'); }
        if(selection == 2) { playSnd('fallingMelody'); }
        playing = setInterval(function() { adjustLoadbar(); }, speed); 
    }
    if(page == '12') {
        if(melodyShape == 1) { playSnd('02-rising'); }
        if(melodyShape == 2) { playSnd('02-falling'); }
        playing = setInterval(function() { adjustLoadbar(); }, speed); 
    }
    if(page == '13a') {
        playSnd('narration3A');
        playing = setInterval(function() { adjustLoadbar(); }, speed); 
    }
    if(page == '13b') {
        if(instrument == 1) { playSnd('horn'); }
        if(instrument == 2) { playSnd('viola'); }
        playing = setInterval(function() { adjustLoadbar(); }, speed); 
    }
    if(page == '14') {
        if(instrument == 1) { playSnd('03-horn'); }
        if(instrument == 2) { playSnd('03-viola'); }
        playing = setInterval(function() { adjustLoadbar(); }, speed); 
    }
    if(page == '15' && !movement4Slide) {
        if(melodyShape == 1 && instrument == 1) { playSnd('narration4A'); }
        if(melodyShape == 1 && instrument == 2) { playSnd('narration4B'); }
        if(melodyShape == 2 && instrument == 1) { playSnd('narration4C'); }
        if(melodyShape == 2 && instrument == 2) { playSnd('narration4D'); }
        playing = setInterval(function() { adjustLoadbar(); }, speed); 
    }

    if(page == '16') {
        stopSnd();
        let m1,m2,m3;
        let m4 = '04';
        let p2 = document.getElementById('p2');
        let dur1, dur2;
        let dur3 = 61+2;
        let dur4 = 117+2;
        p2.style.color = '#006A0A';
        if(melodyChoice == 1 && accompChoice == 1) { dur1 = 26+2; m1 = '01-melodyAlegato'; }
        if(melodyChoice == 1 && accompChoice == 2) { dur1 = 26+2; m1 = '01-melodyAstaccato'; }
        if(melodyChoice == 2 && accompChoice == 1) { dur1 = 28+2; m1 = '01-melodyBlegato'; }
        if(melodyChoice == 2 && accompChoice == 2) { dur1 = 29+2; m1 = '01-melodyBstaccato'; }
        if(melodyShape == 1) { dur2 = 30+2; m2 = '02-rising'; }
        if(melodyShape == 2) { dur2 = 33+2; m2 = '02-falling'; }
        if(instrument == 1) { m3 = '03-horn'; }
        if(instrument == 2) { m3 = '03-viola'; }

        p2.innerHTML = 'Now Playing: Movement 1';
        playSnd(m1);
        playMvt2 = setTimeout(() => { 

            p2.innerHTML = 'Now Playing: Movement 2';
            playSnd(m2);
            playMvt3 = setTimeout(() => {  

                p2.innerHTML = 'Now Playing: Movement 3';
                playSnd(m3);
                playMvt4 = setTimeout(() => {  

                    p2.innerHTML = 'Now Playing: Movement 4';
                    playSnd(m4);
                    setTimeout(() => {  
                        p2.innerHTML = 'Your symphony is finished! Bravo!';
                        symphonyFinished = true;
                    }, dur4*1000);
                }, dur3*1000);
            }, dur2*1000);
        }, dur1*1000);
        //1/1 = 26
        //1/2 = 26
        //2/1 = 28
        //2/2 = 29
        //rising = 30
        //falling = 33
        //mvt3 = 61
        //mvt4 = 117
        playing = setInterval(function() { adjustLoadbar(); }, speed); 

    }
}

function stopSnd() 
{
    for(let i = 0; i < activeSounds.length; i++)
    {
        activeSounds[i].stop(audioCtx.currentTime); 
    }
}

// Underscore 1 “Gracefully” – Audio File 37: Story Clip 1A, Audio File 45: Story Clip 4D
// Underscore 2 “Secretively” – Audio File 38: Story Clip 1B, Audio File 39: Story Clip 1C,
// Underscore 3 “Nervously” – Audio File 40, Story Clip 2A, Audio File 41, Story Clip 3A
// Underscore 4 “Bouncy” – Audio File 44: Story Clip 4C
// Underscore 5 “Determination” – Audio File 42: Story Clip 4A, Audio File 43: Story Clip 4B