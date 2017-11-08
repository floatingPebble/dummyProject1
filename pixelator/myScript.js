var tiles = document.getElementsByClassName("tile");
var letter = ["tile a", "tile b", "tile c", "tile d", "tile e", "tile f", "tile g", "tile h", "tile i"];

for (var i = 0; i < tiles.length; i++){
	tiles[i].addEventListener("click", colorChange);
}


function colorChange(){
	var x = letter.indexOf(this.className);
	if(x < letter.length && x !== 8){
	x++;
    }
    else{
    	x = 0;
    }
	this.className = letter[x];
}