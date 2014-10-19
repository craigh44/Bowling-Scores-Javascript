describe('Frames', function(){

	beforeEach(function() {
		frame = new Frame	
		game = new Game
	});



describe('Frames', function() {

		it('Should have 2 turns', function(){
			expect(frame.turnsRemaining).toEqual(2)
		});

		it('Should have 1 turn after first turn is taken', function () {
			frame.play(frame, 7)
			expect(frame.turnsRemaining).toEqual(1)
		});

		it('Should know the score', function(){
			frame.play(frame, 4, 2)
			expect(frame.score).toEqual(6)
		});

		it('Should have 0 turns remaining if there is a strike', function (){
			frame.play(frame, 10)
			expect(frame.turnsRemaining).toEqual(0)
		});


	});

});

describe('Game', function(){

	// it("Should have 10 frames", function(){
	// 	expect(game.frames.length).toEqual(10)
	// });

	// it('should know the total score of all frames', function(){
	// 	frame1 = new Frame
	//  	frame2 = new Frame
	//   frame3 = new Frame
	//  	frame1.play(frame, 5, 4)
	//  	frame2.play(frame, 3, 5)
	//  	frame3.play(frame, 1, 2)
	//  	expect(game.score).toEqual(20)
	// });

});