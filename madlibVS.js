'use strict';

function makeML(){
    let character = window.document.myForm.txtCharacter.value;
    let icecream = document.myForm.txtIcecream.value;
    let sound = document.myForm.txtSound.value;
    let part = document.myForm.txtPart.value;
    let animal = document.myForm.txtAnimal.value;
    let vehicle = document.myForm.txtVehicle.value;
    let story = "";


// bug fix- changed story to individual lines instead of single paragraph 
story = "On a breezy summer night, ";
story += character; 
story += " was taking a stroll down "; 
story += icecream;  
story += " Lane. Suddenly, "; 
story += character;  
story += " heard a chilling ";  
story += sound;  
story += " sound. "; 
story += character; 
story += " looked around and saw that the ";
story += sound; 
story += " sound";
story += " was coming from an old, dilapitated ";
story += vehicle;
story += " careening down the desserted highway. "; 
story += character + "'s ";
story += " confusion turned to fear as ";
story += character;
story += " realized that the "; 
story += vehicle; 
story += " was being driven by the malevolent, evil "; 
story += " Super-"; 
story += animal;
story += "! Once an ordinary "; 
story += animal;
story += ", it had befallen to a bizarre transformation after being "; 
story += " bathed in a vat a nuclear waste. Super-";  
story += animal;
story += " tried to taunt ";
story += character;  
story += " to no avail. ";  
story += character; 
story += " wasn't the least bit concerned. You can't bother me, Super-";
story +=  animal; 
story += "! I know how to turn the other ";  
story += part; 
story += "!";
story += "THE END"

document.myForm.txtStory.value = story;
}
