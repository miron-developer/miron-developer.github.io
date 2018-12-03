$(function(){
  
  $(".title_box").click(function () {
	 
	  $(this).toggleClass('open');
	  
	  $(this).next('.list_link').toggleClass('open');
	   
  });
	

	$("#slider_price").slider({
		max: 1000,
		min: 0,
		range: true,
		values: [190,728],
		slide: function( event, ui ) {
			$("input[name='minPrice']").val( '$' + ui.values[0] );
			$("input[name='maxPrice']").val( '$' + ui.values[1] );
		}
	});
	  
	$("input[name='minPrice']").val( '$' +
		$("#slider_price").slider('values',0));
	  
	$("input[name='maxPrice']").val( '$' +
		$("#slider_price").slider('values',1));
		
	
	$('#card,.title_cart').click(function(){
		$('#cart_box').toggleClass('open');
	});
	
	$('#sign').click(function(){
		$('#black_fill').toggleClass('open');
		$('#modal').toggleClass('open');
	});
	
	$('#close_mod, #black_fill').click(function(){
		$('#black_fill').toggleClass('open');
		$('#modal').toggleClass('open');
	});
	
	$('#search-button').click(function( ) {
		$('#search_panel').toggleClass('open');
	});
	
	$('#load_more').click(function(Event) {
		Event.preventDefault();
		$('.list_product').append('<a href="#" class="product box main_flex__nowrap flex__align-items_center flex__jcontent_center"><div class="tag">new</div><div class="img_product"><img src="images/01.jpg" alt=""> </div><h2>Our Legacy Splash Jaquard Knit</h2><p>Black Grey Plant</p><p class="price">$290</p></a><a href="#" class="product box main_flex__nowrap flex__align-items_center flex__jcontent_center"><div class="tag">new</div><div class="img_product"><img src="images/01.jpg" alt=""> </div><h2>Our Legacy Splash Jaquard Knit</h2><p>Black Grey Plant</p><p class="price">$290</p></a><a href="#" class="product box main_flex__nowrap flex__align-items_center flex__jcontent_center"><div class="tag">new</div><div class="img_product"><img src="images/01.jpg" alt=""> </div><h2>Our Legacy Splash Jaquard Knit</h2><p>Black Grey Plant</p><p class="price">$290</p></a>')
	});
	
});