var headlines_url = "https://newsapi.org/v2/top-headlines?"; // this url will get all articles from a source, but you must pass a source id after the question mark

var sources = [];
var articles = [];

//API Key for accessing News API. Generate your own at https://newsapi.org/account
var api_key = "5e3f3da7542a46f6966b7da83264144a";

$(function() { 

// here tried to shorten it to if statements, but it would not read them

    // get list of sources from API

//     $("button").click(function(){
//     	if($("#german")){
//     		var sources_url = "https://newsapi.org/v2/sources?language=de";
//     	}else if($("#us")){
//     		var sources_url = "https://newsapi.org/v2/sources?language=en";
//     	}else if($("#spanish")){
//     		var sources_url = "https://newsapi.org/v2/sources?language=es";
//     	}

//     	console.log("Button clicked.");

//     	$.getJSON(sources_url+"&apiKey=" + api_key, function(data) { 
//         sources = data.sources;
//         console.log(sources);

//     	$.each(sources, function( i, obj ) {
//         $("#sources").append("<li>"+obj.name+"</li>");          
    	
//     	});
//     	});
//     });
// });
		//search on user input
		$("#search").click(function(){
			// console.log("Button press.")
			var articles_url = "https://newsapi.org/v2/everything?";
			var query = $("#input");
			//query is what the user input, this variable is supposed to store the user input
			// console.log(query);

			//modifying url so that i can change the json based on user query.
			$.getJSON(articles_url+"q="+query+"&apiKey="+ api_key, function(data) {
			articles = data.articles;

			//appends to the div called query
			$.each(articles, function( i, obj ) {
	        $("#query").append("<li><a href='"+obj.url+"'>"+obj.title+"</a></li>");

	        }); 
	        });
		}); 

	    $("#german").click(function(){
	    	$("#sources").html("");
	    	var sources_url = "https://newsapi.org/v2/sources?language=de";

	    	$.getJSON(sources_url+"&apiKey=" + api_key, function(data) { 
	        sources = data.sources;

	        // var sel_sources = $("#sources li").val();
	        // var articles_query = articles_url +"sources="+ sel_sources+"&apiKey=" + api_key;

	        // $.getJSON(articles_query, function(data) { 

	        // articles = data.articles;
	        
	    	$.each(sources, function( i, obj ) {
	        $("#sources").append("<li><a href='"+obj.url+"'>"+obj.name+"</a></li>");

	        }); 
	        }); 

	    });

	    $("#gb").click(function(){
	    	$("#sources").html("");
	    	var sources_url = "https://newsapi.org/v2/sources?language=en&country=gb";

	    	$.getJSON(sources_url+"&apiKey=" + api_key, function(data) { 
	        sources = data.sources;

	    	$.each(sources, function( i, obj ) {
	        $("#sources").append("<li><a href='"+obj.url+"'>"+obj.name+"</a></li>");   
	        });
	        });  
	    });

	    $("#us").click(function(){
	    	$("#sources").html("");
	    	var sources_url = "https://newsapi.org/v2/sources?language=en&country=us";

	    	$.getJSON(sources_url+"&apiKey=" + api_key, function(data) { 
	        sources = data.sources;

	    	$.each(sources, function( i, obj ) {
	        $("#sources").append("<li><a href='"+obj.url+"'>"+obj.name+"</a></li>");   
	        });
	        });  
	    });

	    $("#spanish").click(function(){
	    	$("#sources").html("");
	    	var sources_url = "https://newsapi.org/v2/sources?language=es";

	    	$.getJSON(sources_url+"&apiKey=" + api_key, function(data) { 
	        sources = data.sources;

	    	$.each(sources, function( i, obj ) {
	        $("#sources").append("<li><a href='"+obj.url+"'>"+obj.name+"</a></li>");
	        });
	        });
	    });
	});

   