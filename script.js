$(window).ready(function(){
	for(var i=0;i<40;i++) {
		$('#ornCol1').append('<div class="ornament" id="ornLeft'+ i +'" />')
		$('#ornCol2').append('<div class="ornament" id="ornRight'+ i + '" />')
	}
	$(window).scroll(function() {
		$('.ornament:nth-child(even)').fadeTo('slow	',0.5);
		$('.ornament:nth-child(even)').fadeTo('slow',1);
		$('.ornament:nth-child(odd)').fadeTo(400,0.5);
		$('.ornament:nth-child(odd)').fadeTo(400,1);		
	})
	$.fn.scrollStopped = function(callback) {           
        $(this).scroll(function(){
            var self = this, $this = $(self);
            if ($this.data('scrollTimeout')) {
              clearTimeout($this.data('scrollTimeout'));
            }
            $this.data('scrollTimeout', setTimeout(callback,250,self));
        });
    };

$(window).scrollStopped(function(){
		$('.ornament:nth-child(even)').fadeTo('slow',1);
		$('.ornament:nth-child(odd)').fadeTo(400,1);		
    	
});

})
	
		
