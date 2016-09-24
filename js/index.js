$(document).ready(function(){
		var quoteSource=[
		{
			quote: "Would you sell your arm for one million dollars?",
			name: "Life"
		},
		{
			quote: "I want to hsare the lessons I have learned without passing judgment.",
			name: "Life"
		},
		{
			quote:"It is in our ability to ask why that we are able to create or destroy.",
			name:"Life"
		},
		{
			quote:"I have seen everything that is done under the sun, and behold, all is vanity and a striving after wind.",
			name:"Old Testament Prophet"
		},
		{
	    	quote:"Art exist to express the insanity of it all, those who partake are not immune",
	    	name:"Life"
	    },
	    {
	    	quote:"Suffering in and of itself is meaningless; we give our suffering meaning by the way in which we respond to them.",
	    	name:"Viktor E. Frankl"
	    },
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	name:"Dalai Lama"
	    }
	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready

