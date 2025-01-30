console.log("main.js!!");

window.onload = ()=>{
	console.log("onload!!");

	// JavaScriptここから
	// new bootstrap.Carousel('#carouselExample').cycle();

		// new bootstrap.Carousel('#carouselExample',{
		// 	interval:7000
		// }).cycle();

		var CarouselObj = new bootstrap.Carousel('#carousel');
		//
		document.querySelector('.start-slide').onclick = function(){
			CarouselObj.cycle();
		}

		document.querySelector('.pause-slide').onclick = function(){
			CarouselObj.cycle();
		}

		document.querySelector('.prev-slide').onclick = function(){
			CarouselObj.cycle();
		}

		document.querySelector('.next-slide').onclick = function(){
			CarouselObj.cycle();
		}

		document.querySelector('.slide-first').onclick = function(){
			CarouselObj.to(0);
		}

		document.querySelector('.slide-second').onclick = function(){
			CarouselObj.to(1);
		}
		
		document.querySelector('.slide-third').onclick = function(){
			CarouselObj.to(2);
		}

}