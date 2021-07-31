function getInputValue(){
    var inputVal=document.getElementById("name").nodeValue;
    alert(inputVal);
    var bleep=new Audio();
    bleep.src="sound.wav";
}
