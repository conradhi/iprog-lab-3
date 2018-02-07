var AllDishesView = function (container, model) {

	var all = container.find("#all");
	var allDishes = model.getAllDishes("dessert");


	var allDishesHtml = "<div class='row'>";



	for (var i = 0; i < allDishes.length; i++) { 

		allDishesHtml += "<div class='col-sm-4 col-12'>" + 
							"<div class='col-12 text-center'>" + 
								"<a>" + 
									"<img  id='foodImageBtn" + i + "' src='images/"+ allDishes[i].image + "'>" +
								"</a>" + 
							"</div>" +

							"<div class='col-12' style='text-align: center;'>" +
								
									"<h3>" + allDishes[i].name + "<h3>" +
								
								//"<a class='btn btn-primary' href='foodInfo.html' role='button'>" + allDishes[key].name + "</a>" + 
							"</div>" +
						"</div>";

    }

	allDishesHtml += "</div>";






	all.html(allDishesHtml);
}