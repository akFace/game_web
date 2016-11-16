$(function(){

	//答题
	var QandA = {
		init:function(){
			var _this = this;
			this.index = 0;
			this.arr = [
				{questionid:1,question:'请问您的性别',answer:{a:'男',b:'女',c:'不男不女'}},
				{questionid:2,question:'请问您的年龄',answer:{a:'18',b:'20',c:'保密'}},
				{questionid:3,question:'请问您的爱好',answer:{a:'羽毛球',b:'篮球',c:'打游戏'}},
				{questionid:4,question:'请问您的性别',answer:{a:'男',b:'女',c:'不男不女'}},
				{questionid:5,question:'请问您喜欢这款游戏吗？',answer:{a:'喜欢',b:'不喜欢',c:'还不算喜欢'}}
				];
			this.questions = $('.questions').find('mark');
			this.title = $('.title');

		$('.btn').on('click','.nxetQ',function(){
			if ($('input:radio[name="qution"]').is(":checked")) {
				_this.nxetQ();
			}else {
				alert('请先选择答案再继续作答下一题！');
			}
			
		});

		},

		nxetQ:function(){

			this.index++;
			if (this.index>=this.arr.length) {
				alert('您已经答完所有题目！谢谢您的参与！');
				return ;
			}
			this.title.html(this.arr[this.index].question);
			this.questions.eq(0).html(this.arr[this.index].answer.a);
			this.questions.eq(1).html(this.arr[this.index].answer.b);
			this.questions.eq(2).html(this.arr[this.index].answer.c);
			
		},
	};
	QandA.init();


	//回到顶部
	$('.gototop').on('click',function(){
		$('html,body').animate({
			scrollTop:0
		});
	});

	/*
	//转盘抽奖
	var draw = {
		init:function(){
			var _this = this;
			this.wheel = $('.wheel');
			this.hand = $('.hand');

			this.hand.on('click',function(){
				_this.startRoll();
				_this.stopRoll();
			});


		},

		startRoll:function(){
			this.wheel.addClass('roll');
			this.hand.find('img').attr('src','img/stop.png');
		},

		stopRoll:function(){
			var self = this;
			setTimeout(function(){
				self.wheel.removeClass('roll');
				self.hand.find('img').attr('src','img/hand.png');
			},2000);
		},
	};

	draw.init();

	*/
	//幸运转盘
	var rotateTimeOut = function (){
		$('.wheel').rotate({
			angle:0,
			animateTo:2160,
			duration:8000,
			callback:function (){
				alert('网络超时，请检查您的网络设置！');
			}
		});
	};
	var bRotate = false;

	var rotateFn = function (awards, angles, txt){
		bRotate = !bRotate;
		$('.wheel').stopRotate();
		$('.wheel').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:8000,
			callback:function (){
				$('.hand').find('img').attr('src','img/hand.png');//停止后显示另一张图
				alert(txt);
				bRotate = !bRotate;
			}
		})
	};

	$('.hand').click(function (){
		$('.hand').find('img').attr('src','img/stop.png');
		if(bRotate)return;
		var item = rnd(0,9);

		switch (item) {
			case 0:
				//var angle = [26, 88, 137, 185, 235, 287, 337];
				//var angle = [26, 62, 98, 144, 170, 206, 242,278,314,350];
				rotateFn(0, 345, '恭喜您获得：纪念衫');
				break;
			case 1:
				//var angle = [88, 137, 185, 235, 287];
				rotateFn(1, 20, '恭喜您获得：移动电源');
				break;
			case 2:
				//var angle = [137, 185, 235, 287];
				rotateFn(2, 58, '恭喜您获得：手机壳');
				break;
			case 3:
				//var angle = [137, 185, 235, 287];
				rotateFn(3, 98, '恭喜您获得：游戏礼包');
				break;
			case 4:
				//var angle = [185, 235, 287];
				rotateFn(4, 158, '恭喜您获得：37公仔');
				break;
			case 5:
				//var angle = [185, 235, 287];
				rotateFn(5, 170, '恭喜您获得：37公仔');
				break;
			case 6:
				//var angle = [235, 287];
				rotateFn(6, 200, '恭喜您获得：卡片U盘');
				break;
			case 7:
				//var angle = [287];
				rotateFn(7, 236, '谢谢参与！');
				break;
			case 8:
				//var angle = [287];
				rotateFn(8, 273, '恭喜您获得：笔记本');
				break;
			case 9:
				//var angle = [287];
				rotateFn(9, 310, '恭喜您获得：鼠标垫');
				break;
		}

		console.log(item);
	});

	function rnd(n, m){
		return Math.floor(Math.random()*(m-n+1)+n);
	}
});