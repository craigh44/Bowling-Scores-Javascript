
 function Frame () {
 	this.turnsRemaining = [1, 2];
 	this.score = 0;
 };

 Frame.prototype.play = function(frame, hit1, hit2) {
 		if(hit1 === 10)
 			this.turnsRemaining.pop(frame);
 			else
			this.score = hit1 + hit2;
			this.turnsRemaining.pop(frame);
 };

