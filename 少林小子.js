(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"少林小子_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"少林小子_atlas_2", frames: [[0,0,1920,1080]]},
		{name:"少林小子_atlas_3", frames: [[0,0,1024,1024]]},
		{name:"少林小子_atlas_4", frames: [[0,0,1024,1024]]},
		{name:"少林小子_atlas_5", frames: [[0,0,1024,1024]]},
		{name:"少林小子_atlas_6", frames: [[1026,0,758,554],[1026,556,758,554],[0,1026,758,554],[760,1112,758,554],[0,0,1024,1024],[0,1668,412,307],[414,1668,412,307],[1242,1668,389,279],[828,1668,412,307]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.按下 = function() {
	this.initialize(ss["少林小子_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.按键 = function() {
	this.initialize(ss["少林小子_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.按键png复制 = function() {
	this.initialize(ss["少林小子_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.initialize(ss["少林小子_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["少林小子_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["少林小子_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["少林小子_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.弹起 = function() {
	this.initialize(ss["少林小子_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.主角哭png复制 = function() {
	this.initialize(img.主角哭png复制);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1608,2480);


(lib.佛珠 = function() {
	this.initialize(ss["少林小子_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.卷轴 = function() {
	this.initialize(ss["少林小子_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.背景 = function() {
	this.initialize(ss["少林小子_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.背景地板 = function() {
	this.initialize(ss["少林小子_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.角色removebgpreviewpng复制2 = function() {
	this.initialize(img.角色removebgpreviewpng复制2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1608,2480);


(lib.金刚杵1 = function() {
	this.initialize(ss["少林小子_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.香炉 = function() {
	this.initialize(ss["少林小子_atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.重新开始 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.按下();
	this.instance.setTransform(-115,-200,0.4395,0.4883);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AwLIGIAAwLMAgXAAAIAAQLg");
	this.shape.setTransform(103.625,126.3);

	this.instance_1 = new lib.弹起();
	this.instance_1.setTransform(-115,-200,0.4395,0.4883);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-200,450,500);


(lib.tu2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.元件37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib._4();
	this.instance.setTransform(-379,-277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-379,-277,758,554);


(lib.元件36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib._3();
	this.instance.setTransform(-379,-277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-379,-277,758,554);


(lib.元件35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib._2();
	this.instance.setTransform(-379,-277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-379,-277,758,554);


(lib.元件34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib._1();
	this.instance.setTransform(-379,-277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-379,-277,758,554);


(lib.元件28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.金刚杵1();
	this.instance.setTransform(-194.5,-139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.5,-139.5,389,279);


(lib.元件27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.角色removebgpreviewpng复制2();
	this.instance.setTransform(-92.85,-143.15,0.1155,0.1155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.8,-143.1,185.6,286.29999999999995);


(lib.元件24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.佛珠();
	this.instance.setTransform(-100,-74.55,0.4854,0.4855);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-74.5,200,149);


(lib.元件22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.卷轴();
	this.instance.setTransform(-100,-74.55,0.4854,0.4855);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-74.5,200,149);


(lib.元件21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.香炉();
	this.instance.setTransform(-100,-74.5,0.4854,0.4854);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-74.5,200,149);


(lib.元件16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.元件14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AO2AAQAAGJkWEYQh+B+iVBFQi1BUjYAAQjXAAi1hUQiVhFh+h+QkWkYAAmJQAAmJEWkXQBPhPBXg4QDfiQEaAAQEbAADfCQQBXA4BPBPQEWEXAAGJgAL0AOQAAE4jcDaQjbDck3AAQk2AAjcjcQjbjaAAk4QAAk1DbjcQDcjbE2AAQDFAACgBXQAtAZApAfQAtAiAqAqQDcDcAAE1g");
	this.shape.setTransform(95,95.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AoSISQjbjbAAk3QAAk2DbjcQDcjbE2AAQDEAACgBYQAuAZApAfQAtAiAqApQDcDcAAE2QAAE3jcDbQjbDck3AAQk2AAjcjcg");
	this.shape_1.setTransform(95.6,96.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC3300").s().p("AmMNjQiVhEh+h/QkWkWAAmKQAAmJEWkXQBPhOBYg5QDeiPEagBQEaABDfCPQBYA5BPBOQEWEXAAGJQAAGKkWEWQh+B/iVBEQi1BUjYAAQjXAAi1hUgAoMoDQjbDcAAE1QAAE3DbDbQDcDdE2AAQE3AADbjdQDcjbAAk3QAAk1jcjcQgqgpgtgjQgpgegugZQighYjEAAQk2AAjcDbg");
	this.shape_2.setTransform(95,95.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,200,200.3);


(lib.人物 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {xunhuan:0,jieshu:20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_19 = function() {
		this.gotoAndPlay("xunhuan")
	}
	this.frame_20 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1).call(this.frame_20).wait(1));

	// 身子
	this.instance = new lib.元件27("synched",0);
	this.instance.setTransform(-14.25,304.15,1,1,0,0,0,-0.1,124);

	this.instance_1 = new lib.主角哭png复制();
	this.instance_1.setTransform(-108,38,0.1151,0.1151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({rotation:-5.9742,x:-14.2,y:304.1},0).wait(5).to({regY:124.1,rotation:0.2701,y:304.2},0).wait(5).to({regY:124.2,rotation:7.9967,x:-14.25,y:304.3},0).wait(5).to({rotation:-0.7423,x:-14.15},0).to({_off:true},1).wait(1));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AnSBfQjBgnAAg4QAAg3DBgoQDCgnEQAAQESAADBAnQDBAoAAA3QAAA4jBAnQjBAokSAAQkQAAjCgog");
	this.shape.setTransform(-24,308.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.2,26.6,249.2,309.4);


(lib.元件13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 按键
	this.instance = new lib.元件16();
	this.instance.setTransform(26.75,36.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.按键();
	this.instance_1.setTransform(62,42,0.2051,0.2051);

	this.instance_2 = new lib.元件14("synched",0);
	this.instance_2.setTransform(165,150.2,1,1,0,0,0,95,95.2);

	this.instance_3 = new lib.按键png复制();
	this.instance_3.setTransform(103,79,0.1367,0.1367);

	this.instance_4 = new lib.元件14("synched",0);
	this.instance_4.setTransform(166.65,148.7,1,1,0,0,0,95,95.2);

	this.instance_5 = new lib.元件16();
	this.instance_5.setTransform(26.75,36.7);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,153,0,0.098)").s().p("EhaVBaWMAAAi0rMC0rAAAMAAAC0rg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regY:0,scaleX:1,scaleY:1,x:26.75,y:36.7}}]}).to({state:[{t:this.instance,p:{regY:0,scaleX:1,scaleY:1,x:26.75,y:36.7}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:165,y:150.2}},{t:this.instance_1,p:{x:62}}]},1).to({state:[{t:this.instance,p:{regY:0.1,scaleX:0.6248,scaleY:0.6248,x:79.25,y:78.75}},{t:this.instance_2,p:{scaleX:0.6248,scaleY:0.6248,x:166.65,y:148.7}},{t:this.instance_3}]},1).to({state:[{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance,p:{regY:0,scaleX:1,scaleY:1,x:27.25,y:36.85}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:165.5,y:150.35}},{t:this.instance_1,p:{x:64}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-578.2,-578.2,1156.4,1156.4);


// stage content:
(lib.少林小子 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {人物:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var 人物移动速度 = 20;
		var 按下 = false;
		var 键代码 = 0;
		var 武器速度 = 25;
		var 运行 = true;
		var 得分 = 0;
		
		var audio = new Audio('bgm.mp3'); // 添加背景音乐
		var keyAudio = new Audio('key.mp3'); // 添加按键音效
		var failAudio = new Audio('fail.mp3'); // 失败音效
		var winAudio = new Audio('win.mp3'); // 胜利音效
		
		// 播放背景音乐
		function playSound() {
		    audio.play();
		}
		
		// 播放按键音效
		function playKeySound() {
		    keyAudio.play();
		}
		
		// 播放失败音效
		function playFailSound() {
		    failAudio.play();
		}
		
		// 播放胜利音效
		function playWinSound() {
		    winAudio.play();
		}
		
		
		// 知识卡片元件
		var tu1 = this.tu1;
		var tu2 = this.tu2;
		var tu3 = this.tu3;
		var tu4 = this.tu4;
		
		// 初始时隐藏知识卡片
		tu1.y = -490;
		tu2.y = -490;
		tu3.y = -490;
		tu4.y = -490;
		
		this.得分文本.text = "得分：" + 得分;
		
		function 武器函数(wq, rw, 随机速度) {
		    if (wq.x >= rw.x - 80 && wq.x <= rw.x + 80 && wq.y >= rw.y && wq.y <= rw.y + 400) {
		        rw.gotoAndStop("jieshu")
				wq.y = -200;
		        wq.x = Math.random() * 1920;
		        运行 = false;
				playFailSound(); // 播放失败音效
		        if (得分 >= 30) {
		            显示知识卡片();
		        }
		    } else {
		        if (wq.y >= 1080) {
		            得分 = 得分 + 1;
		            wq.y = -200;
		            wq.x = Math.random() * 1920;
		        } else {
		            wq.y += 随机速度;
		        }
		    }
		}
		
		function 显示知识卡片() {
		    var 随机卡片 = Math.floor(Math.random() * 4) + 1;
		    reset卡片位置();
		    switch (随机卡片) {
		        case 1:
		            tu1.y = 490;
		            break;
		        case 2:
		            tu2.y = 490;
		            break;
		        case 3:
		            tu3.y = 490;
		            break;
		        case 4:
		            tu4.y = 490;
		            break;
		        default:
		            break;
		    }
		    this.得分文本.color = "#FF0000";
			 playWinSound(); // 播放胜利音效
		}
		
		function reset卡片位置() {
		    tu1.y = -490;
		    tu2.y = -490;
		    tu3.y = -490;
		    tu4.y = -490;
		}
		
		function 控制函数(MC) {
		    if (MC.x <= 0) {
		        按下 = true;
		        MC.x = 0;
		    }
		    if (MC.x >= 1920) {
		        按下 = false;
		        MC.x = 1920;
		    }
		    if (按下 == true) {
		        MC.x += 人物移动速度;
		    } else {
		        MC.x -= 人物移动速度;
		    }
		}
		
		this.人物.addEventListener("tick", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6() {
			playSound(); // 在游戏开始时播放背景音乐
			
		    this.得分文本.text = "得分：" + 得分;
		    if (运行 == false) {
		        this.重新开始.y = 490;
		    } else {
		        控制函数(this.人物);
		        武器函数(this.武器1, this.人物, Math.random() * (40 - 20) + 20);
		        武器函数(this.武器2, this.人物, Math.random() * (40 - 20) + 20);
		        武器函数(this.武器3, this.人物, Math.random() * (40 - 20) + 20);
		        武器函数(this.武器4, this.人物, Math.random() * (40 - 20) + 20);
		        this.重新开始.y = -490;
		    }
		}
		
		this.左按钮.addEventListener("click", () => {
		    按下 = false;
		    playKeySound(); // 播放按键音效
		});
		
		this.右按钮.addEventListener("click", () => {
		    按下 = true;
		    playKeySound(); // 播放按键音效
		});
		
		
		document.addEventListener("keydown", (e) => {
		    e = e || window.event;
		    var 键代码 = e.keyCode || e.which || e.charCode;
		    if (键代码 == 65) {
		        按下 = false;
		    }
		    if (键代码 == 68) {
		        按下 = true;
		    }
		    控制函数(this.人物);
		    playKeySound(); // 播放按键音效
		});
		
		
		this.重新开始.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7() {
		    运行 = true;
			this.人物.gotoAndPlay("xunhuan")
		    this.武器1.y = -200;
		    this.武器2.y = -200;
			this.武器3.y = -200;
		    this.武器4.y = -200;
		    this.武器1.x = Math.random() * 1920;
		    this.武器2.x = Math.random() * 1920;
			this.武器3.x = Math.random() * 1920;
		    this.武器4.x = Math.random() * 1920;
		    得分 = 0;
		    reset卡片位置();
		    this.得分文本.text = "得分：" + 得分;
		    this.得分文本.color = "#000000";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 知识卡片
	this.tu4 = new lib.元件37("synched",0);
	this.tu4.name = "tu4";
	this.tu4.setTransform(830,535,1.715,1.715);

	this.tu3 = new lib.元件36("synched",0);
	this.tu3.name = "tu3";
	this.tu3.setTransform(830,535,1.715,1.715);

	this.tu2 = new lib.元件35("synched",0);
	this.tu2.name = "tu2";
	this.tu2.setTransform(830,535,1.7151,1.715);

	this.tu1 = new lib.元件34("synched",0);
	this.tu1.name = "tu1";
	this.tu1.setTransform(830,533.95,1.715,1.7148,0,0,0,0,-0.6);

	this.tu2_1 = new lib.tu2("synched",0);
	this.tu2_1.name = "tu2_1";
	this.tu2_1.setTransform(957,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tu2_1},{t:this.tu1},{t:this.tu2},{t:this.tu3},{t:this.tu4}]}).wait(1));

	// 得分
	this.得分文本 = new cjs.Text("", "48px 'Times New Roman'");
	this.得分文本.name = "得分文本";
	this.得分文本.lineHeight = 55;
	this.得分文本.lineWidth = 396;
	this.得分文本.alpha = 0.93333333;
	this.得分文本.parent = this;
	this.得分文本.setTransform(41.2,38.85);

	this.timeline.addTween(cjs.Tween.get(this.得分文本).wait(1));

	// 重新开始
	this.重新开始 = new lib.重新开始();
	this.重新开始.name = "重新开始";
	this.重新开始.setTransform(939.6,485.3,1.2062,1,0,0,0,103.7,51.8);
	new cjs.ButtonHelper(this.重新开始, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.重新开始).wait(1));

	// 按钮事件
	this.左按钮 = new lib.元件13();
	this.左按钮.name = "左按钮";
	this.左按钮.setTransform(371.95,550.55,1,1,0,0,180);
	new cjs.ButtonHelper(this.左按钮, 0, 1, 2, false, new lib.元件13(), 3);

	this.右按钮 = new lib.元件13();
	this.右按钮.name = "右按钮";
	this.右按钮.setTransform(1528.35,546.5);
	new cjs.ButtonHelper(this.右按钮, 0, 1, 2, false, new lib.元件13(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.右按钮},{t:this.左按钮}]}).wait(1));

	// 地板
	this.instance = new lib.背景地板();
	this.instance.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 道具
	this.武器3 = new lib.元件28("synched",0);
	this.武器3.name = "武器3";
	this.武器3.setTransform(1720.85,-93.15,0.3599,0.3597,0,0,0,0.3,-0.1);

	this.武器4 = new lib.元件24("synched",0);
	this.武器4.name = "武器4";
	this.武器4.setTransform(139.2,-94.45,0.65,0.6498,0,0,0,0.1,-0.1);

	this.武器2 = new lib.元件22("synched",0);
	this.武器2.name = "武器2";
	this.武器2.setTransform(1247.15,-94.5,0.65,0.6498,0,0,0,0.1,-0.1);

	this.武器1 = new lib.元件21("synched",0);
	this.武器1.name = "武器1";
	this.武器1.setTransform(725.65,-94.5,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.武器1},{t:this.武器2},{t:this.武器4},{t:this.武器3}]}).wait(1));

	// 人物
	this.人物 = new lib.人物();
	this.人物.name = "人物";
	this.人物.setTransform(950.75,656.4,1,1,0,0,0,-21.8,60.7);

	this.timeline.addTween(cjs.Tween.get(this.人物).wait(1));

	// 背景
	this.instance_1 = new lib.背景();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(753.8,396.8,1352.8,732);
// library properties:
lib.properties = {
	id: 'D96A30650C53034B8513F1A764C26C27',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/主角哭png复制.png?1713362173893", id:"主角哭png复制"},
		{src:"images/角色removebgpreviewpng复制2.png?1713362173893", id:"角色removebgpreviewpng复制2"},
		{src:"images/少林小子_atlas_1.png?1713362173860", id:"少林小子_atlas_1"},
		{src:"images/少林小子_atlas_2.png?1713362173860", id:"少林小子_atlas_2"},
		{src:"images/少林小子_atlas_3.png?1713362173860", id:"少林小子_atlas_3"},
		{src:"images/少林小子_atlas_4.png?1713362173860", id:"少林小子_atlas_4"},
		{src:"images/少林小子_atlas_5.png?1713362173860", id:"少林小子_atlas_5"},
		{src:"images/少林小子_atlas_6.png?1713362173861", id:"少林小子_atlas_6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D96A30650C53034B8513F1A764C26C27'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;