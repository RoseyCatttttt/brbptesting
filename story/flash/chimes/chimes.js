(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"chimes_atlas_1", frames: [[0,1002,1179,720],[1181,0,800,800],[1181,802,500,1000],[0,0,1000,1000]]},
		{name:"chimes_atlas_2", frames: [[1556,857,300,300],[1969,674,66,78],[1885,591,82,82],[0,1404,257,296],[1885,502,143,87],[1506,0,500,500],[259,1556,284,160],[545,1556,241,166],[1779,1461,269,194],[1506,1461,271,193],[1556,502,327,353],[502,1304,305,250],[1004,0,500,700],[1004,702,550,500],[502,802,500,500],[0,902,500,500],[502,0,500,800],[0,0,500,900],[1556,1159,300,300],[1969,591,77,81],[1004,1204,500,500]]}
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



(lib.animationcred = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animator = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.back = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(ss["chimes_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bloodboundsun = function() {
	this.initialize(ss["chimes_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cloud = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cloud2 = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.face1 = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.face2 = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hair1 = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hair2 = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairback = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.head = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.houses = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.lookoutbg = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.lookoutsrlt1 = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.lookoutsrlt2 = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.oblesk = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.obleskfromdownhere = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.play = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.sun = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.sun2 = function() {
	this.initialize(ss["chimes_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.thebirthplace = function() {
	this.initialize(ss["chimes_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.zoomout = function() {
	this.initialize(ss["chimes_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.restart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,82);


(lib.play_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.play();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.credits2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.animator();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,78);


(lib.credits = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.animator();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,78);


// stage content:
(lib.chimes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,13,14,263,415,487,488,499];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		_this.button_1.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		
		_this.gotoAndPlay(14);
		
		});
	}
	this.frame_13 = function() {
		var _this = this;
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(0);
	}
	this.frame_14 = function() {
		playSound("opening");
	}
	this.frame_263 = function() {
		
	}
	this.frame_415 = function() {
		
		var _this = this;
		/*
		Double click on the specified symbol instance executes a function.
		*/
		
		_this.credits.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(488);
		});
		
		_this.restart.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		createjs.Sound.stop();
		_this.gotoAndPlay(13);
		});
	}
	this.frame_487 = function() {
		var _this = this;
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(415);
	}
	this.frame_488 = function() {
		var _this = this;
		
		_this.creditser.on('click', function(){
		_this.gotoAndPlay(415);
		});
		
		_this.restarter.on('click', function(){
		createjs.Sound.stop();
		_this.gotoAndPlay(13);
		});
	}
	this.frame_499 = function() {
		var _this = this;
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(492);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1).call(this.frame_14).wait(249).call(this.frame_263).wait(152).call(this.frame_415).wait(72).call(this.frame_487).wait(1).call(this.frame_488).wait(11).call(this.frame_499).wait(1));

	// face
	this.instance = new lib.face1();
	this.instance.setTransform(213,177);

	this.instance_1 = new lib.face2();
	this.instance_1.setTransform(197,183);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},20).to({state:[]},8).wait(450));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(1).to({x:193,y:185},0).wait(1).to({x:192,y:186},0).wait(1).to({x:191},0).to({_off:true},20).wait(458));

	// hair
	this.instance_2 = new lib.hair1();
	this.instance_2.setTransform(218,67);

	this.instance_3 = new lib.hair2();
	this.instance_3.setTransform(210,103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{x:218,y:67}}]},14).to({state:[{t:this.instance_2,p:{x:221,y:65}}]},2).to({state:[{t:this.instance_2,p:{x:217,y:73}}]},2).to({state:[{t:this.instance_3,p:{x:210,y:103}}]},1).to({state:[{t:this.instance_3,p:{x:209,y:106}}]},2).to({state:[]},21).to({state:[]},8).wait(450));

	// head
	this.instance_4 = new lib.head();
	this.instance_4.setTransform(202,112);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).wait(2).to({x:204,y:108},0).wait(2).to({x:201,y:111},0).wait(1).to({x:200,y:112},0).wait(1).to({x:199},0).to({_off:true},22).wait(458));

	// body
	this.instance_5 = new lib.body();
	this.instance_5.setTransform(258,234);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).wait(2).to({x:254,y:233},0).wait(2).to({x:249,y:239},0).wait(1).to({x:247},0).wait(1).to({x:245},0).wait(1).to({x:244},0).to({_off:true},21).wait(458));

	// also_hair
	this.instance_6 = new lib.hairback();
	this.instance_6.setTransform(229,196);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).wait(2).to({x:225,y:195},0).wait(2).to({x:220,y:198},0).wait(1).to({x:217,y:199},0).wait(1).to({x:213},0).wait(2).to({x:212},0).to({_off:true},20).wait(458));

	// bg3
	this.instance_7 = new lib.cloud();
	this.instance_7.setTransform(59,40);
	this.instance_7._off = true;

	this.instance_8 = new lib.animationcred();
	this.instance_8.setTransform(163,171,0.5167,0.5167);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(52).to({_off:false},0).wait(1).to({x:61,y:42},0).wait(1).to({x:63,y:44},0).wait(1).to({x:65,y:46},0).wait(1).to({x:67,y:48},0).wait(1).to({x:69,y:50},0).wait(1).to({x:71,y:52},0).wait(1).to({x:73,y:54},0).wait(1).to({x:75,y:56},0).wait(1).to({x:77,y:59},0).wait(1).to({x:80,y:61},0).wait(1).to({x:83,y:62},0).to({_off:true},1).wait(436));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(488).to({_off:false},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:127,y:125},0).wait(1).to({scaleX:0.9733,scaleY:0.9733,x:114,y:112},0).wait(1).to({scaleX:1,scaleY:1,x:111,y:107},0).wait(9));

	// bg2
	this.instance_9 = new lib.sun();
	this.instance_9.setTransform(36,24);
	this.instance_9._off = true;

	this.instance_10 = new lib.cloud2();
	this.instance_10.setTransform(44,-35);
	this.instance_10._off = true;

	this.instance_11 = new lib.lookoutsrlt1();
	this.instance_11.setTransform(43,0);
	this.instance_11._off = true;

	this.instance_12 = new lib.lookoutsrlt2();
	this.instance_12.setTransform(28,15);
	this.instance_12._off = true;

	this.instance_13 = new lib.zoomout();
	this.instance_13.setTransform(-1013,-581,1.826,1.826);
	this.instance_13._off = true;

	this.instance_14 = new lib.bloodboundsun();
	this.instance_14.setTransform(-117,-300);
	this.instance_14._off = true;

	this.credits = new lib.credits2();
	this.credits.name = "credits";
	this.credits.setTransform(467,39,1,1,0,0,0,33,39);
	new cjs.ButtonHelper(this.credits, 0, 1, 1);

	this.restart = new lib.restart();
	this.restart.name = "restart";
	this.restart.setTransform(41,459,1,1,0,0,0,41,41);
	new cjs.ButtonHelper(this.restart, 0, 1, 1);

	this.creditser = new lib.credits();
	this.creditser.name = "creditser";
	this.creditser.setTransform(467,39,1,1,0,0,0,33,39);
	new cjs.ButtonHelper(this.creditser, 0, 1, 1);

	this.restarter = new lib.restart();
	this.restarter.name = "restarter";
	this.restarter.setTransform(41,459,1,1,0,0,0,41,41);
	new cjs.ButtonHelper(this.restarter, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},52).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_10}]},9).to({state:[]},14).to({state:[{t:this.instance_11}]},110).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},11).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},6).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},6).to({state:[{t:this.instance_14}]},77).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},50).to({state:[{t:this.restart},{t:this.credits}]},19).to({state:[{t:this.restarter},{t:this.creditser}]},73).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(52).to({_off:false},0).wait(2).to({x:34,y:22},0).wait(2).to({x:32,y:20},0).wait(2).to({x:30,y:18},0).wait(2).to({x:28,y:16},0).wait(2).to({x:26,y:14},0).to({_off:true},2).wait(436));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(64).to({_off:false},0).wait(1).to({x:47,y:-28},0).wait(1).to({x:57,y:-15},0).wait(1).to({x:60,y:-11},0).wait(1).to({x:62,y:-7},0).wait(1).to({x:63,y:-5},0).wait(1).to({x:65,y:-3},0).wait(1).to({x:66,y:-2},0).wait(1).to({x:67,y:-1},0).wait(1).to({x:68,y:0},0).wait(1).to({y:1},0).wait(1).to({x:69},0).wait(10).to({x:70,y:2},0).wait(9).to({x:72,y:3},0).to({_off:true},14).wait(392));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(218).to({_off:false},0).wait(2).to({x:42},0).wait(2).to({x:41},0).wait(2).to({x:39},0).to({_off:true},11).wait(265));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(235).to({_off:false},0).wait(1).to({x:25,y:18},0).wait(1).to({x:9,y:33},0).wait(1).to({x:2,y:40},0).wait(1).to({x:3,y:37},0).to({_off:true},5).wait(256));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(244).to({_off:false},0).wait(1).to({scaleX:1.622,scaleY:1.622,x:-863,y:-502},0).wait(1).to({scaleX:1.4029,scaleY:1.4029,x:-700,y:-414},0).wait(1).to({scaleX:1.389,scaleY:1.389,x:-692,y:-412},0).wait(1).to({x:-690,y:-411},0).wait(6).to({scaleX:0.8699,scaleY:0.8699,x:-294,y:-136},0).wait(1).to({scaleX:0.579,scaleY:0.579,x:-68,y:0},0).wait(1).to({scaleX:0.527,scaleY:0.527,x:-27},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-1,y:1},0).to({_off:true},6).wait(237));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(340).to({_off:false},0).wait(2).to({x:-220,y:-219},0).wait(1).to({x:-222,y:-217},0).wait(1).to({x:-223,y:-216},0).wait(1).to({x:-224,y:-215},0).wait(1).to({x:-225,y:-214},0).to({_off:true},50).wait(104));

	// bg
	this.instance_15 = new lib.bg();
	this.instance_15.setTransform(-420,-33);

	this.instance_16 = new lib.cloud();
	this.instance_16.setTransform(59,-116);

	this.instance_17 = new lib.sun();
	this.instance_17.setTransform(36,-132);

	this.instance_18 = new lib.oblesk();
	this.instance_18.setTransform(0,-296);

	this.instance_19 = new lib.sun2();
	this.instance_19.setTransform(-26,-4);
	this.instance_19._off = true;

	this.instance_20 = new lib.houses();
	this.instance_20._off = true;

	this.instance_21 = new lib.obleskfromdownhere();
	this.instance_21.setTransform(0,-391);
	this.instance_21._off = true;

	this.instance_22 = new lib.thebirthplace();
	this.instance_22._off = true;

	this.instance_23 = new lib.lookoutbg();
	this.instance_23.setTransform(2,1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},14).to({state:[{t:this.instance_18,p:{y:-296}},{t:this.instance_17,p:{y:-132}},{t:this.instance_16,p:{y:-116}}]},28).to({state:[{t:this.instance_18,p:{y:-283}},{t:this.instance_17,p:{y:-119}},{t:this.instance_16,p:{y:-103}}]},1).to({state:[{t:this.instance_18,p:{y:-265}},{t:this.instance_17,p:{y:-101}},{t:this.instance_16,p:{y:-85}}]},1).to({state:[{t:this.instance_18,p:{y:-232}},{t:this.instance_17,p:{y:-68}},{t:this.instance_16,p:{y:-52}}]},1).to({state:[{t:this.instance_18,p:{y:-185}},{t:this.instance_17,p:{y:-21}},{t:this.instance_16,p:{y:-5}}]},1).to({state:[{t:this.instance_18,p:{y:-164}},{t:this.instance_17,p:{y:0}},{t:this.instance_16,p:{y:16}}]},1).to({state:[{t:this.instance_18,p:{y:-156}},{t:this.instance_17,p:{y:8}},{t:this.instance_16,p:{y:24}}]},1).to({state:[{t:this.instance_18,p:{y:-150}},{t:this.instance_17,p:{y:14}},{t:this.instance_16,p:{y:30}}]},1).to({state:[{t:this.instance_18,p:{y:-144}},{t:this.instance_17,p:{y:20}},{t:this.instance_16,p:{y:36}}]},1).to({state:[{t:this.instance_18,p:{y:-142}},{t:this.instance_17,p:{y:22}},{t:this.instance_16,p:{y:38}}]},1).to({state:[{t:this.instance_18,p:{y:-140}}]},1).to({state:[{t:this.instance_19}]},12).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_19}]},11).to({state:[{t:this.instance_19}]},9).to({state:[{t:this.instance_20}]},14).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},21).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},4).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},20).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},13).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_23}]},2).to({state:[]},20).wait(256));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(64).to({_off:false},0).wait(1).to({x:-28,y:-6},0).wait(1).to({x:-31,y:-9},0).wait(2).to({x:-33,y:-11},0).wait(2).to({x:-35,y:-13},0).wait(2).to({x:-37,y:-15},0).wait(2).to({x:-39,y:-17},0).wait(11).to({x:-40,y:-18},0).wait(9).to({x:-41,y:-19},0).to({_off:true},14).wait(392));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(108).to({_off:false},0).wait(1).to({y:-14},0).wait(1).to({y:-33},0).wait(1).to({y:-78},0).wait(1).to({y:-152},0).wait(1).to({y:-159},0).wait(1).to({y:-166},0).wait(1).to({y:-173},0).wait(1).to({y:-179},0).wait(1).to({y:-185},0).wait(1).to({y:-190},0).wait(1).to({y:-192},0).wait(1).to({y:-194},0).wait(1).to({y:-195},0).wait(1).to({y:-196},0).wait(1).to({y:-197},0).to({_off:true},21).wait(356));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(144).to({_off:false},0).wait(1).to({y:-366},0).wait(1).to({y:-358},0).wait(1).to({y:-355},0).wait(1).to({y:-354},0).wait(1).to({y:-353},0).wait(4).to({y:-254},0).wait(1).to({y:-180},0).wait(1).to({y:-95},0).wait(1).to({y:-85},0).wait(1).to({y:-78},0).wait(1).to({y:-72},0).wait(1).to({y:-69},0).wait(1).to({y:-66},0).wait(1).to({y:-64},0).wait(1).to({y:-62},0).wait(1).to({y:-61},0).to({_off:true},20).wait(317));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(183).to({_off:false},0).wait(1).to({y:-11},0).wait(1).to({y:-37},0).wait(1).to({y:-124},0).wait(1).to({y:-211},0).wait(1).to({y:-306},0).wait(1).to({y:-435},0).wait(1).to({y:-449},0).wait(1).to({y:-456},0).wait(1).to({y:-458},0).wait(1).to({y:-461},0).wait(1).to({y:-463},0).wait(1).to({y:-464},0).wait(1).to({y:-466},0).wait(1).to({y:-468},0).wait(1).to({y:-470},0).wait(1).to({y:-472},0).wait(1).to({y:-473},0).wait(1).to({y:-474},0).wait(1).to({y:-475},0).wait(1).to({y:-476},0).wait(1).to({y:-477},0).wait(1).to({y:-478},0).to({_off:true},13).wait(282));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(218).to({_off:false},0).wait(2).to({x:3},0).wait(2).to({x:4},0).wait(2).to({x:6},0).to({_off:true},20).wait(256));

	// song
	this.button_1 = new lib.play_1();
	this.button_1.name = "button_1";
	this.button_1.setTransform(306,272,1,1,0,0,0,150,150);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AieDMQghgHgMgQQgNgQAAgcQAAgXAKguIAJgtQAFgWAFgPQAGgUASgfQA1heBBgmQAUgMAPgCQAJgCARAAIAxAAQAcABAUAEQA4ALAbAlQAYAhgDAwQgEAmgVAqQgZA1gnAsQgKAMgLAJQgLAKgYAPIg5AkQgXAQgNAGQgdAMglAAQghAAgmgKgAiwCDQABAOAKAJQAOAPAgADQBcAIBihXQBShIAThKQAMgtgRgcQgPgbglgLQgbgIgsgBQgXAAgNABQgTADgOAIQgPAJgUAbQg/BZglBjQBTAbBqg2QASgKAKABQAIAAAGAFQAHAFgBAHQAAAKgOAJQgzAig8AMQg+AMg7gNQgJAJACAOg");
	this.shape.setTransform(-76.5039,272.4954);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_1}]}).to({state:[{t:this.shape}]},14).to({state:[]},50).to({state:[]},424).wait(12));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-763,-331,1576,1576);
// library properties:
lib.properties = {
	id: '5DFA07D8CB28E549950766683F905AE0',
	width: 500,
	height: 500,
	fps: 25,
	color: "#0C0C0C",
	opacity: 1.00,
	manifest: [
		{src:"images/chimes_atlas_1.png", id:"chimes_atlas_1"},
		{src:"images/chimes_atlas_2.png", id:"chimes_atlas_2"},
		{src:"sounds/opening.mp3", id:"opening"}
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
an.compositions['5DFA07D8CB28E549950766683F905AE0'] = {
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