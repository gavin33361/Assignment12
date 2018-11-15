$(document).ready(function(){
	$.ajax({
		//an ajax object - aka a collection of properties and values
		//everything after the ? is a query parameter
		url: "https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=imperial&appid=b28ce6574c1720ac5b0ffd3e350e2c4b",
		//different types of AJAX requests
		type: "GET",
		//could be JSON or XML(most likely JSON)
		dataType: "JSON",
		//break up query parameters
		data: {
			q: "Russia",
			units: "imperial",
			appid: "b28ce6574c1720ac5b0ffd3e350e2c4b",
		},
		success: function(data){
			//print all the JSON to the console
			console.log(data);
			console.log(data.list[0].main.temp);
			console.log(data.list[0].weather[0].main);
			var i = 1;
			var k = 1;
			var j = 1;
			$("#moscow").on("click", "", function(){
				k=1;
				j=1;
				if (i%2==1)
					{$("p").remove();
				$("body").append("<p>The temp in Moscow is: " + data.list[0].main.temp + "&#8457</p>");
				$("body").append("<p>The weather in Moscow is: " + data.list[0].weather[0].main + "</p>");
				$("body").css("background-image", "url('image/moscow.jpg')");
				i++;}
				//else 
					//{//$("p").hide();
				//i++}
			})
			$("#kiev").on("click", "", function(){
				i=1;
				j=1;
				if (k%2==1)
					{$("p").remove();
				$("body").append("<p>The temp in Kiev is: " + data.list[1].main.temp + "&#8457</p>");
				$("body").append("<p>The weather in Kiev is: " + data.list[1].weather[0].main) + "</p>";
				$("body").css("background-image", "url('image/kiev.jpg')");
				 k++;}
				//else 
					//{//$("p").hide();
				//k++}
			})
			$("#london").on("click", "", function(){
				i=1;
				k=1;
				if (j%2==1)
					{$("p").remove();
				$("body").append("<p>The temp London is: " + data.list[2].main.temp + "&#8457</p>");
				$("body").append("<p>The weather in London is: " + data.list[2].weather[0].main + "</p>");
				$("body").css("background-image", "url('image/london.jpg')");
					 j++;}
				//else 
				//	{//$("p").hide();
				//j++}
			})
		},
		error: function(data, texStatus, errorThrown){
			console.log("whomp, whomp");
			console.log(errorThrown);
		}
	})
})