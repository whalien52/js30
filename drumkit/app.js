let SOUNDS = {
    A: {
        datakey: 65,
        sound: 'clap',
        letter: 'A'
    },
    S: {
        datakey: 83,
        sound: 'hihat',
        letter: 'S'
    },
    D: {
        datakey: 68,
        sound: 'kick',
        letter: 'D'
    },
    F: {
        datakey: 70,
        sound: 'openhat',
        letter: 'F'
    },
    G: {
        datakey: 71,
        sound: 'boom',
        letter: 'G'
    },
    H: {
        datakey: 72,
        sound: 'ride',
        letter: 'H'
    },
    J: {
        datakey: 74,
        sound: 'snare',
        letter: 'J'
    },
    K: {
        datakey: 75,
        sound: 'tom',
        letter: 'K'
    },
    L: {
        datakey: 76,
        sound: 'tink',
        letter: 'L'
    }
}

let play = document.querySelector('#play');
play.addEventListener("click", function(evt) {
    evt.preventDefault();
    play.remove();
    loadDrumButtons();
    window.onkeydown = function(evt) {
        this.playSound(evt);
    }
})

function loadDrumButtons() {
    for (let sound in SOUNDS) {
        let button = createDrumButton(sound);
        button.addEventListener("keypress", playSound);
        button.addEventListener("click", playSound);
    }
}

function createDrumButton(sound) {
    let drumcontainer = document.getElementById("drum-keys")
    let button = document.createElement("div");
    button.classList.add("key");
    button.setAttribute('id', 'data-key-'+SOUNDS[sound]['datakey'])
    button.setAttribute('data-key', SOUNDS[sound]['datakey']);
    let kbd = document.createElement("kbd");
    kbd.innerText = sound;
    button.append(kbd);
    let span = document.createElement("span");
    span.classList.add('sound');
    span.innerText = SOUNDS[sound]['sound'];
    button.append(span);
    drumcontainer.append(button);
    return button;
}

function playSound(evt) {
    let datakey = 0;
    if (evt['type'] === 'click') {
        datakey = evt['path'][1];
        datakey = datakey.dataset.key;
    } else {
        datakey = evt['keyCode'];
    }
    let sounds = document.querySelector('#sound-'+ datakey);
    if (sounds) {
        sounds.play();
    }
}

