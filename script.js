const display = document.getElementById("display");

function calculatorKeys(input)
{
    display.value += input;
}

function clearDisplay ()
{
    display.value = "";
}

function calculate ()
{
    try {
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }

}

const video = document.getElementById('background-video');
const button = document.getElementById('play-video');
const icon = button.querySelector('i');

button.addEventListener('click', () => {
    if (video.paused || video.muted) {
        video.muted = false;
        video.volume = 1.0;
        video.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        video.muted = true;
        video.volume = 0.0;
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
});

video.addEventListener('canplay', () => {
    video.muted = false;
    video.volume = 1.0;
});

