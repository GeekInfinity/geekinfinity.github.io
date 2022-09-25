  ///––––––––––––––––––––––––///
 /*/ CLICK ANYWHERE TO PLAY /*/
///––––––––––––––––––––––––///

(function play() {
	'use strict';
	document.addEventListener('click', function() {
		requestAnimationFrame(function() {
			document.querySelector('.window')
			.style.animationPlayState = 'running';
		});
	});
})();
