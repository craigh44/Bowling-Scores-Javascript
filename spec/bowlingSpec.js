describe('Frames', function(){

	beforeEach(function() {
		frame = new Frame	
	});



describe('Frames', function() {

		it('Should have 2 turns', function(){
			expect(frame.turnsRemaining.length).toEqual(2)
		});

		it('Should have 1 turn after first turn is taken', function () {
			frame.play(frame, 7)
			expect(frame.turnsRemaining.length).toEqual(1)
		});

		it('Should know the score', function(){
			frame.play(frame, 4, 2)
			expect(frame.score).toEqual(6)
		});

		it('Should have 0 turns remaining if there is a strike', function (){
			frame.play(frame, 10)
			expect(frame.turnsRemaining.length).toEqual(0)
		});

	});

});

