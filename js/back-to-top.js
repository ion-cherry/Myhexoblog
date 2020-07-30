
	
	
	const oTop = document.querySelector('.go-top')
	onscroll = function() {
	
		if (document.documentElement.scrollTop > 10) {
			oTop.style.top = -300 + 'px';
		} else {
			oTop.style.top = -900 + 'px'
		}
	}
	
	//是什么问题呢，点击一次sytle改变，界面没反应，第二次才回去
	function tutu() {
			
			var timer = setInterval( function() {
				var  scrollNum = document.documentElement.scrollTop
				var  speed = Math.floor(-scrollNum / 6)
				document.documentElement.scrollTop = scrollNum + speed
				if (scrollNum <= 0) {
					clearInterval(timer)
				}
	
			}, 30)
	
		}
	
	oTop.addEventListener('click', tutu, false)
	
	
