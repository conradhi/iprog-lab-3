var NavViewController = function(view, model) {
	view.plusGuest.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 	});

	view.minusGuest.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	});	
}
