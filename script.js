
$( document ).ready(function() {

	//clicking the buttons below the Concept Art Slides
	$('.button1').unbind().click(function(){			//unbind is set to only activate the click event once
		
		$(".template_slides_button").prop('disabled',true);		//trying to disable the slide buttons for the duration of the animation

		//animating all other slides in order to satisfy all conditions as to which slide is being dragged away
		//also animating the background of the buttons 
	  	$( ".slide2, .slide3, .slide4, .btn_background2, .btn_background3, .btn_background4" ).animate({	 
	    	left: "-2000",
	  	}, {
	    	duration: 1000,
	    	
	    	complete: function() {
	      	$( '.slide1' ).css('z-index','1000');			//when all other slides are "gone" (busing pushed to the left by 2000px) increase z-index to become top layer
	      	$( '.slide2' ).css('z-index','100');			//all other layers given the same values
	      	$( '.slide3' ).css('z-index','100');
	      	$( '.slide4' ).css('z-index','100');
	      	$( '.btn_background1' ).css('z-index','1000');	//the same color of the background of the new slide is given to the background of the buttons
	      	$( '.btn_background2' ).css('z-index','100');	//all other layers given the same values
	      	$( '.btn_background3' ).css('z-index','100');
	      	$( '.btn_background4' ).css('z-index','100');

	      	$( ".slide2, .slide3, .slide4, .btn_background2, .btn_background3, .btn_background4" ).animate({		//aniamtes "dragged out" slides back into position with new z-index values
	    		left: "0",
	  			}, {
			    	duration: 10,							//1ms as these slides are hidden within the top layer
			    	specialEasing: {
			      	width: "linear",					
			    	},
			    	complete: function() {					//re-enabled buttons
						$(".template_slides_button").prop('disabled',false);
			    	}
	    	});
	    	}
	  });
   	});

	$('.button2').unbind().click(function(){
		
		$(".template_slides_button").prop('disabled',true);

	  	$( ".slide1, .slide3, .slide4, .btn_background1, .btn_background3, .btn_background4" ).animate({
	    	left: "-2000",
	  	}, {
	    	duration: 1000,
	    	
	    	complete: function() {
	      	$( '.slide2' ).css('z-index','1000');
	      	$( '.slide1' ).css('z-index','100');
	      	$( '.slide3' ).css('z-index','100');
	      	$( '.slide4' ).css('z-index','100');
	      	$( '.btn_background2' ).css('z-index','1000');
	      	$( '.btn_background1' ).css('z-index','100');
	      	$( '.btn_background3' ).css('z-index','100');
	      	$( '.btn_background4' ).css('z-index','100');

	      	$( ".slide1, .slide3, .slide4, .btn_background1, .btn_background3, .btn_background4" ).animate({
	    		left: "0",
	  			}, {
			    	duration: 10,
			    	specialEasing: {
			      	width: "linear",
			    	},
			    	complete: function() {
						$(".template_slides_button").prop('disabled',false);
			    	}
	    	});
	    	}
	  });
   	});

	$('.button3').unbind().click(function(){
		
		$(".template_slides_button").prop('disabled',true);

	  	$( ".slide1, .slide2, .slide4, .btn_background1, .btn_background2, .btn_background4" ).animate({
	    	left: "-2000",
	  	}, {
	    	duration: 1000,
	    	
	    	complete: function() {
	      	$( '.slide3' ).css('z-index','1000');
	      	$( '.slide1' ).css('z-index','100');
	      	$( '.slide2' ).css('z-index','100');
	      	$( '.slide4' ).css('z-index','100');
	      	$( '.btn_background3' ).css('z-index','1000');
	      	$( '.btn_background1' ).css('z-index','100');
	      	$( '.btn_background2' ).css('z-index','100');
	      	$( '.btn_background4' ).css('z-index','100');

	      	$( ".slide1, .slide2, .slide4, .btn_background1, .btn_background2, .btn_background4" ).animate({
	    		left: "0",
	  			}, {
			    	duration: 10,
			    	specialEasing: {
			      	width: "linear",
			    	},
			    	complete: function() {
						$(".template_slides_button").prop('disabled',false);
			    	}
	    	});
	    	}
	  });
   	});

	$('.button4').unbind().click(function(){
		
		$(".template_slides_button").prop('disabled',true);

	  	$( ".slide1, .slide2, .slide3, .btn_background1, .btn_background2, .btn_background3" ).animate({
	    	left: "-2000",
	  	}, {
	    	duration: 1000,
	    	
	    	complete: function() {
	      	$( '.slide4' ).css('z-index','1000');
	      	$( '.slide1' ).css('z-index','100');
	      	$( '.slide2' ).css('z-index','100');
	      	$( '.slide3' ).css('z-index','100');
	      	$( '.btn_background4' ).css('z-index','1000');
	      	$( '.btn_background1' ).css('z-index','100');
	      	$( '.btn_background2' ).css('z-index','100');
	      	$( '.btn_background3' ).css('z-index','100');

	      	$( ".slide1, .slide2, .slide3, .btn_background1, .btn_background2, .btn_background3" ).animate({
	    		left: "0",
	  			}, {
			    	duration: 10,
			    	specialEasing: {
			      	width: "linear",
			    	},
			    	complete: function() {
						$(".template_slides_button").prop('disabled',false);
			    	}
	    	});
	    	}
	  });
   	});






});



