/*
*	некоторые инструменты для страниц 
*	Gybernaty Community
*
*
*/

$(document).ready(function(){
	
	var gc = 0; // "глобальный" счетчик
	var test_out = 1 ; // 'N' 0 1

	function cl(x){	// console.log ( gc + x ) - вывод дополнительной отладочной информации со сквозной нумерацией
		if ( test_out != 'N' || test_out != 0 ){
				if( typeof( x ) == 'string' ) {
					gc += 1 ;
					console.log('(-> ' + gc + ' <-) ' + x );
				} else { 
					console.log( x );
				}
		}
	}; 
		
	function reSize(){
		let winWidth = window.innerWidth;
	//	cl('resize: ' + winWidth);
		if( winWidth < 917 ){ // переходим к "мобильной версии"
			$('body').removeClass('norm')
			$('body').addClass('mini')
		} else {
			$('body').removeClass('mini')
			$('body').addClass('norm')
			
		}	
		
	}


	$(window).resize( function(){
		reSize();
	});
	

	$("#menu_top a").on('click', function( e ){ 
		let q = $(this).attr('href') ;
		cl( ' 101 #menu_top - click a ' );
		$( '#menu_top .curr' ).removeClass('curr');
		$( e.target ).parents().addClass('curr');
	});

	$("#logo").click ( function(){ 
		console.log( ' Its Logo '); 
	});

	
	reSize();
	let a = $(location).attr("href");
	a = a.split('#');
	a = a[1];
	if( a != undefined ) {
		a = '#menu_'+a;
		cl( a );
		$( '#menu_top .curr' ).removeClass('curr');
		$( a ).addClass('curr');		
	}
/* */ 

});