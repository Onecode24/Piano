function plays(keyd) {
    //const audio=document.querySelector(`audio[id="${keyd}"]`);
    var audio=new Audio(`audio/key-${keyd}.mp3`);
    audio.play();
}
