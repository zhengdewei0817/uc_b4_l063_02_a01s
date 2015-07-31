
$(function(){
//	console.log($("svg"))
	var elem0 = $("#elem0").zdw_init([{'fr1': [.666, -.385, .385, .666, 261.11, 42.734]},{'fr30': [.463, .614, -.614, .463, 345.239, 261.86]}],30);
	var elem1 = $("#elem1").zdw_init([{'fr1': [.544, -.541, .541, .544, 201.59, 144.319]},{'fr30': [.685, .273, -.285, .714, 229.043, 238.906]}],30);
	var elem2 = $("#elem2").zdw_init([{'fr1': [.594, -.423, .445, .626, 77.358, 128.477]},{'fr30': [.741, -.526, .448, .624, 76.742, 128.208]}],30);
	var elem3 = $("#elem3").zdw_init([{'fr1': [.694, -.389, .365, .651, 104.773, 91.873]},{'fr30': [.631, -.41, .437, .804, 110.771, 105.177]}],30);
	var elem4 = $("#elem4").zdw_init([{'fr1': [.769, 0, 0, .769, 205.319, 152.932]},{'fr30': [.281, .714, -.736, .266, 217.854, 241.367]}],30);
	var elem5 = $("#elem5").zdw_init([{'fr1': [.769, 0, 0, .769, 102.004, 130.861]},{'fr30': [.769, 0, -.002, .769, 101.773, 130.861]}],30);
	var elem6 = $("#elem6").zdw_init([{'fr1': [.653, -.404, .397, .657, 43.368, 98.486]},{'fr30': [.653, -.404, .335, .668, 39.215, 99.217]}],30);
	var elem7 = $("#elem7").zdw_init([{'fr1': [.62, -.362, .388, .663, 77.319, 128.862]},{'fr30': [.834, -.488, .376, .643, 74.051, 127.478]}],30);
	var elem8 = $("#elem8").zdw_init([{'fr1': [.724, -.257, .257, .724, 97.698, 58.614]},{'fr30': [.724, -.257, .329, .981, 100.812, 69.841]}],30);
	var elem9 = $("#elem9").zdw_init([{'fr1': [.744, -.429, .375, .683, 117.692, 106.292]},{'fr30': [.55, -.318, .465, .824, 125.036, 123.248]}],30);
	var elem10 = $("#elem10").zdw_init([{'fr1': [.731, 0, 0, .731, 120.845, 198.456]},{'fr30': [.771, .028, -.078, .617, 113.424, 195.534]}],30);
	var elem11 = $("#elem11").zdw_init([{'fr1': [.769, .02, -.02, .769, 208.703, 144.511]},{'fr30': [.261, .721, -.757, .24, 226.428, 241.405]}],30);
	//console.log(asa.aaaaa);
	
//	asa.gotoAndStop(10);
	upFrame();
	


	elem9[0].onclick = function(){
		elem0.fromAndtoPlay(15,30);
		elem1.fromAndtoPlay(15,30)
		elem2.fromAndtoPlay(15,30)
		elem3.fromAndtoPlay(15,30)
		elem4.fromAndtoPlay(15,30)
		elem5.fromAndtoPlay(15,30)
		elem6.fromAndtoPlay(15,30)
		elem7.fromAndtoPlay(15,30)
		elem8.fromAndtoPlay(15,30)
		elem9.fromAndtoPlay(15,30)
		elem10.fromAndtoPlay(15,30)
		elem11.fromAndtoPlay(15,30)
	}
	
	
	
	elem7[0].onclick = function(){
		elem0.fromAndtoPlay(15,1);
		elem1.fromAndtoPlay(15,1)
		elem2.fromAndtoPlay(15,1)
		elem3.fromAndtoPlay(15,1)
		elem4.fromAndtoPlay(15,1)
		elem5.fromAndtoPlay(15,1)
		elem6.fromAndtoPlay(15,1)
		elem7.fromAndtoPlay(15,1)
		elem8.fromAndtoPlay(15,1)
		elem9.fromAndtoPlay(15,1)
		elem10.fromAndtoPlay(15,1)
		elem11.fromAndtoPlay(15,1)
	}
	
	
	
	function upFrame(){
		
		elem0.updataAnimation()
		elem1.updataAnimation()
		elem2.updataAnimation()
		elem3.updataAnimation()
		elem4.updataAnimation()
		elem5.updataAnimation()
		elem6.updataAnimation()
		elem7.updataAnimation()
		elem8.updataAnimation()
		elem9.updataAnimation()
		elem10.updataAnimation()
		elem11.updataAnimation()

		console.log(elem0.curFrame)


		 tweenID = setTimeout(function () {
                requestID = requestAnimationFrame(upFrame);
         }, 1000 / 25);
	}
	
	
	
})