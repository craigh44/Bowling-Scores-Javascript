
 function Game () {
 	this.frames = [ frame1 = new Frame,
 	 							  frame2 = new Frame,
 	 							  frame3 = new Frame,
 	  						  frame4 = new Frame,
 								  frame5 = new Frame,
 								  frame6 = new Frame,
 								  frame7 = new Frame,
 								  frame8 = new Frame,
 								  frame9 = new Frame,
 								  frame10 = new Frame];
 	 
 }

 function Frame () {
 	this.turnsRemaining = 2;
 	this.score = 0;
 };

 Frame.prototype.play = function(frame, hit1, hit2) {
 		if(hit1 !== 10) {
			this.score = hit1 + hit2;
			this.turnsRemaining = 0}
 		else 
 			this.turnsRemaining = 0;
 			
 };




