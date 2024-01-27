(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"walkaroundtest_atlas_1", frames: [[0,0,550,550],[854,0,250,250],[1106,0,250,250],[1358,0,250,250],[1610,0,250,250],[854,252,250,250],[552,0,300,300],[1106,252,250,250],[1358,252,250,250]]}
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



(lib.Bitmap12 = function() {
	this.initialize(ss["walkaroundtest_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body = function() {
	this.initialize(ss["walkaroundtest_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.face = function() {
	this.initialize(ss["walkaroundtest_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.head = function() {
	this.initialize(ss["walkaroundtest_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.headleft = function() {
	this.initialize(ss["walkaroundtest_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.legs = function() {
	this.initialize(ss["walkaroundtest_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.play = function() {
	this.initialize(ss["walkaroundtest_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.walk1 = function() {
	this.initialize(ss["walkaroundtest_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.walk2 = function() {
	this.initialize(ss["walkaroundtest_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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


(lib.head_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.head();
	this.instance.setTransform(0,0,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.face_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.face();
	this.instance.setTransform(0,0,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.body_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.body();
	this.instance.setTransform(0,0,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Scene_1_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bg
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-7,-164,0.9997,0.9997);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(54).to({scaleX:0.9996,scaleY:0.9996,y:-148},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.legsnonmoving = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.legs();
	this.instance.setTransform(0,0,0.6042,0.6043);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legsnonmoving, new cjs.Rectangle(0,0,151.1,151.1), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276,-201,552,402);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.playerhead = new lib.head_1("synched",0);
	this.playerhead.name = "playerhead";
	this.playerhead.setTransform(0,0,1,1,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.playerhead).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-77.5,-77.5,155,155), null);


(lib.Scene_1_legslayer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// legslayer
	this.playerlegs = new lib.legsnonmoving();
	this.playerlegs.name = "playerlegs";
	this.playerlegs.setTransform(125.5,275,1,1,0,0,0,75.5,75.5);

	this.instance = new lib.walk2();
	this.instance.setTransform(43,203,0.62,0.62);
	this.instance._off = true;

	this.instance_1 = new lib.walk1();
	this.instance_1.setTransform(33,210,0.62,0.62);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.playerlegs,p:{x:125.5}}]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},12).to({state:[{t:this.playerlegs,p:{x:128.5}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.playerlegs,p:{x:125.5}}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({x:46,y:202},0).wait(1).to({y:200},0).wait(1).to({y:203},0).to({_off:true},1).wait(17).to({_off:false,scaleX:0.6202,skewY:180,x:194.05,y:205},0).wait(1).to({x:193.05,y:203},0).wait(1).to({y:202},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(1).to({x:31,y:214},0).wait(1).to({x:29,y:216},0).wait(1).to({x:31,y:219},0).to({_off:true},12).wait(5).to({_off:false,skewY:180,x:204,y:211},0).wait(1).to({y:215},0).wait(1).to({x:206,y:217},0).wait(1).to({x:205,y:216},0).wait(1).to({x:204,y:214},0).to({_off:true},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_headlayer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// headlayer
	this.playerhead = new lib.Symbol1();
	this.playerhead.name = "playerhead";
	this.playerhead.setTransform(131.3,147.6,0.9998,0.9998,0,0,0,0.6,0.6);
	this.playerhead._off = true;

	this.instance = new lib.headleft();
	this.instance.setTransform(37,72,0.62,0.62);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.playerhead).wait(1).to({_off:false},0).wait(2).to({x:131.8},0).wait(1).to({x:133.3,y:146.1},0).wait(1).to({x:132.3,y:145.1},0).wait(1).to({y:146.1},0).wait(1).to({x:130.3,y:148.6},0).wait(1).to({x:129.3,y:149.6},0).wait(1).to({x:128.3,y:150.6},0).wait(1).to({x:128.8,y:151.6},0).to({_off:true},12).wait(1).to({_off:false,x:129.8,y:147.6},0).to({_off:true},1).wait(31).to({_off:false,x:131.3},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1).to({x:34,y:70},0).wait(1).to({y:67},0).wait(1).to({y:75},0).wait(1).to({x:35,y:79},0).wait(1).to({x:38,y:82},0).wait(1).to({x:36,y:80},0).wait(1).to({x:32,y:76},0).to({_off:true},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_facelayer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// facelayer
	this.playerface = new lib.face_1();
	this.playerface.name = "playerface";
	this.playerface.setTransform(159.95,158.8,1,1,0,0,0,77.5,77.5);
	this.playerface._off = true;

	this.timeline.addTween(cjs.Tween.get(this.playerface).wait(1).to({_off:false},0).wait(2).to({x:161.95},0).wait(1).to({x:163.95,y:158.3},0).wait(1).to({x:165.45,y:157.8},0).wait(1).to({x:165.95,y:156.8},0).wait(1).to({x:163.95,y:161.3},0).wait(1).to({x:162.95,y:162.3},0).wait(1).to({x:161.95,y:163.3},0).wait(1).to({y:163.8},0).to({_off:true},12).wait(1).to({_off:false,x:156.45,y:158.8},0).wait(1).to({skewY:180,x:90.35,y:159.3},0).wait(1).to({x:79.35,y:161.8},0).wait(1).to({y:161.3},0).wait(1).to({y:164.3},0).wait(1).to({x:81.85,y:167.3},0).wait(1).to({x:82.85,y:168.3},0).wait(1).to({y:168.8},0).wait(1).to({x:80.85,y:166.8},0).wait(24).to({skewY:0,x:159.95,y:158.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bodylayer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bodylayer
	this.playerbody = new lib.body_1();
	this.playerbody.name = "playerbody";
	this.playerbody.setTransform(135.5,220,1,1,0,0,0,77.5,77.5);
	this.playerbody._off = true;

	this.timeline.addTween(cjs.Tween.get(this.playerbody).wait(1).to({_off:false},0).wait(2).to({x:136,y:219.5},0).wait(1).to({x:137},0).wait(1).to({x:136,y:220.5},0).wait(1).to({y:221.5},0).wait(1).to({y:223.5},0).wait(1).to({x:135.5,y:224.5},0).wait(1).to({x:134.5,y:225.5},0).wait(1).to({x:135.5,y:226.5},0).to({_off:true},12).wait(1).to({_off:false,x:137,y:220},0).wait(1).to({skewY:180,x:99},0).wait(1).to({x:98.5,y:219},0).wait(1).to({y:218},0).wait(1).to({y:221.5},0).wait(1).to({x:99.5,y:226},0).wait(1).to({x:100.5,y:227},0).wait(1).to({x:98.5},0).wait(1).to({x:96,y:225.5},0).wait(24).to({skewY:0,x:135.5,y:220},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Actions = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Actions
	this.button_2 = new lib.Symbol2();
	this.button_2.name = "button_2";
	this.button_2.setTransform(300,200,1,1,0,0,0,150,150);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_2).to({_off:true},1).wait(55).to({_off:false,x:273.6,y:200.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.walkaroundtest = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11,22,23,24,25,26,27,28,29,30,31,55,56];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.button_2 = this.Actions.button_2;
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
			this.gotoAndPlay(56);
	}
	this.frame_1 = function() {
		this.button_2 = undefined;this.playerface = this.facelayer.playerface;
		this.playerhead = this.headlayer.playerhead;
		this.playerbody = this.bodylayer.playerbody;
		this.playerlegs = this.legslayer.playerlegs;
	}
	this.frame_2 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_3 = function() {
		this.playerlegs = undefined;this.playerbody = undefined;this.playerhead = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerhead = this.headlayer.playerhead;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_4 = function() {
		this.playerbody = undefined;this.playerhead = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerhead = this.headlayer.playerhead;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_5 = function() {
		this.playerbody = undefined;this.playerhead = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerhead = this.headlayer.playerhead;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_6 = function() {
		this.playerbody = undefined;this.playerhead = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerhead = this.headlayer.playerhead;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_7 = function() {
		this.playerbody = undefined;this.playerhead = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerhead = this.headlayer.playerhead;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_8 = function() {
		this.playerbody = undefined;this.playerhead = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerhead = this.headlayer.playerhead;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_9 = function() {
		this.playerbody = undefined;this.playerhead = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerhead = this.headlayer.playerhead;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_10 = function() {
		this.playerbody = undefined;this.playerhead = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerhead = this.headlayer.playerhead;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_11 = function() {
		this.gotoAndPlay(3);
	}
	this.frame_22 = function() {
		this.playerbody = undefined;this.playerhead = undefined;this.playerface = undefined;
	}
	this.frame_23 = function() {
		this.playerface = this.facelayer.playerface;
		this.playerhead = this.headlayer.playerhead;
		this.playerbody = this.bodylayer.playerbody;
		this.playerlegs = this.legslayer.playerlegs;
	}
	this.frame_24 = function() {
		this.playerlegs = undefined;this.playerbody = undefined;this.playerhead = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_25 = function() {
		this.playerbody = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_26 = function() {
		this.playerbody = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_27 = function() {
		this.playerbody = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_28 = function() {
		this.playerbody = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_29 = function() {
		this.playerbody = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_30 = function() {
		this.playerbody = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerbody = this.bodylayer.playerbody;
	}
	this.frame_31 = function() {
		this.playerbody = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerbody = this.bodylayer.playerbody;
		this.gotoAndPlay(25);
	}
	this.frame_55 = function() {
		this.playerbody = undefined;this.playerface = undefined;this.playerface = this.facelayer.playerface;
		this.playerhead = this.headlayer.playerhead;
		this.playerbody = this.bodylayer.playerbody;
		this.playerlegs = this.legslayer.playerlegs;
		_this = this;
		phead = _this.playerhead;
		pface = _this.playerface;
		pbody = _this.playerbody;
		plegs = _this.playerlegs;
		camera = AdobeAn.VirtualCamera.getCamera(exportRoot);
		var walkrighting = 0;
		var walklefting = 0;
		
		var keyState = [];    
		
		var keyState = {};    
		window.addEventListener('keydown',function(e){
		    keyState[e.keyCode || e.which] = true;
		},true);    
		window.addEventListener('keyup',function(e){
		    keyState[e.keyCode || e.which] = false;
		},true);
		
		function gameLoop() {
		    if (keyState[37] || keyState[65]){
			camera.moveBy (4, 0, 0);	
				
				
						if (walklefting == 0){
						walkrighting = 0
							walklefting = 1
					_this.gotoAndPlay(23);
			}
			
		    }    
		    else if (keyState[39] || keyState[68]){
			camera.moveBy (-4, 0, 0);
				
				if (walkrighting == 0){
					walklefting = 0
					walkrighting = 1
					_this.gotoAndPlay(3);
				}
			}
		
				else{
				walkrighting = 0;
				walklefting = 0;
				_this.gotoAndPlay(1);
			}
			
			setTimeout(gameLoop, 12);
		
		}    
		
		gameLoop();
		
		_this.gotoAndPlay(1);
	}
	this.frame_56 = function() {
		this.button_2 = this.Actions.button_2;
		this.___loopingOver___ = true;
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(55);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(11).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(24).call(this.frame_55).wait(1).call(this.frame_56).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(275,200,0.9747,0.9747);
	this.___camera___instance.depth = 0;
	this.___camera___instance._off = true;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({_off:false},0).to({_off:true},55).wait(1));

	// Actions_obj_
	this.Actions = new lib.Scene_1_Actions();
	this.Actions.name = "Actions";
	this.Actions.setTransform(300,200,1,1,0,0,0,300,200);
	this.Actions.depth = 0;
	this.Actions.isAttachedToCamera = 0
	this.Actions.isAttachedToMask = 0
	this.Actions.layerDepth = 0
	this.Actions.layerIndex = 0
	this.Actions.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Actions).wait(1).to({regX:299.4,scaleX:1.0259,scaleY:1.0259,x:300.05,y:200.05},0).wait(55).to({regX:300,scaleX:1,scaleY:1,x:300,y:200},0).wait(1));

	// facelayer_obj_
	this.facelayer = new lib.Scene_1_facelayer();
	this.facelayer.name = "facelayer";
	this.facelayer.depth = 0;
	this.facelayer.isAttachedToCamera = 1
	this.facelayer.isAttachedToMask = 0
	this.facelayer.layerDepth = 0
	this.facelayer.layerIndex = 1
	this.facelayer.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.facelayer).wait(55).to({_off:true},1).wait(1));

	// headlayer_obj_
	this.headlayer = new lib.Scene_1_headlayer();
	this.headlayer.name = "headlayer";
	this.headlayer.depth = 0;
	this.headlayer.isAttachedToCamera = 1
	this.headlayer.isAttachedToMask = 0
	this.headlayer.layerDepth = 0
	this.headlayer.layerIndex = 2
	this.headlayer.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.headlayer).wait(55).to({_off:true},1).wait(1));

	// bodylayer_obj_
	this.bodylayer = new lib.Scene_1_bodylayer();
	this.bodylayer.name = "bodylayer";
	this.bodylayer.depth = 0;
	this.bodylayer.isAttachedToCamera = 1
	this.bodylayer.isAttachedToMask = 0
	this.bodylayer.layerDepth = 0
	this.bodylayer.layerIndex = 3
	this.bodylayer.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bodylayer).wait(55).to({_off:true},1).wait(1));

	// legslayer_obj_
	this.legslayer = new lib.Scene_1_legslayer();
	this.legslayer.name = "legslayer";
	this.legslayer.depth = 0;
	this.legslayer.isAttachedToCamera = 1
	this.legslayer.isAttachedToMask = 0
	this.legslayer.layerDepth = 0
	this.legslayer.layerIndex = 4
	this.legslayer.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.legslayer).wait(55).to({_off:true},1).wait(1));

	// bg_obj_
	this.bg = new lib.Scene_1_bg();
	this.bg.name = "bg";
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 5
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1).to({regX:6.9,regY:5,scaleX:1.0259,scaleY:1.0259},0).wait(54).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(268,36,276,365.8);
// library properties:
lib.properties = {
	id: '7DB4BFB9882A0C428F28BAADFF352F29',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/walkaroundtest_atlas_1.png", id:"walkaroundtest_atlas_1"}
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
an.compositions['7DB4BFB9882A0C428F28BAADFF352F29'] = {
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

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
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

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
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