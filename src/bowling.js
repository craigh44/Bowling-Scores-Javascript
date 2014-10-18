
 function Frame () {
 	this.turnsRemaining = 2;
 	this.score = 0;
 };

 Frame.prototype.play = function(frame, hit1, hit2) {
 		if(hit1 !== 10) {
			this.score = hit1 + hit2;
			this.turnsRemaining = 1}
 		else 
 			this.turnsRemaining = 0
 };




