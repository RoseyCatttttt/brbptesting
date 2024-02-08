(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"042_atlas_1", frames: [[0,0,300,300],[0,554,180,150],[302,0,300,250],[604,0,300,250],[302,252,300,250],[604,252,300,250],[0,302,300,250],[302,504,300,250],[604,504,300,250]]}
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



(lib.dreamscape = function() {
	this.initialize(img.dreamscape);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,1694);


(lib.playpngcopy = function() {
	this.initialize(ss["042_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.preloader_10 = function() {
	this.initialize(ss["042_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.startground = function() {
	this.initialize(ss["042_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.startslrt = function() {
	this.initialize(ss["042_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.startslrt2 = function() {
	this.initialize(ss["042_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.startslrt3 = function() {
	this.initialize(ss["042_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.startslrt4 = function() {
	this.initialize(ss["042_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.startslrt5 = function() {
	this.initialize(ss["042_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.yay1 = function() {
	this.initialize(ss["042_atlas_1"]);
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
	this.instance = new lib.playpngcopy();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-150,-150,300,300), null);


// stage content:
(lib._042 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [6,24,30];
	// timeline functions:
	this.frame_6 = function() {
		var _this = this;
		
		_this.start.on('click', function(){
		_this.gotoAndPlay(30);
		});
	}
	this.frame_24 = function() {
		this.gotoAndPlay(6);
	}
	this.frame_30 = function() {
		playSound("trackoftime");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(18).call(this.frame_24).wait(6).call(this.frame_30).wait(80));

	// Layer_3
	this.start = new lib.Symbol1();
	this.start.name = "start";
	this.start.setTransform(326,197);

	this.instance = new lib.startground();
	this.instance.setTransform(0,-31,1.8333,1.8334);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.start}]},6).to({state:[]},19).to({state:[{t:this.instance}]},5).wait(80));

	// Layer_2
	this.instance_1 = new lib.playpngcopy();
	this.instance_1.setTransform(176,6);
	this.instance_1._off = true;

	this.instance_2 = new lib.startslrt();
	this.instance_2.setTransform(-154,27,1.8333,1.8334);
	this.instance_2._off = true;

	this.instance_3 = new lib.startslrt2();
	this.instance_3.setTransform(-32,-50,1.8334,1.8335);

	this.instance_4 = new lib.startground();
	this.instance_4.setTransform(0,-31,1.8333,1.8334);

	this.instance_5 = new lib.dreamscape();
	this.instance_5.setTransform(-1056,-555);

	this.instance_6 = new lib.startslrt3();
	this.instance_6.setTransform(-44,-59,1.8333,1.8334);
	this.instance_6._off = true;

	this.instance_7 = new lib.startslrt4();
	this.instance_7.setTransform(6,-69,1.8333,1.8334);

	this.instance_8 = new lib.startslrt5();
	this.instance_8.setTransform(31,-58,1.8333,1.8334);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3,p:{x:-32,y:-50}}]},1).to({state:[{t:this.instance_3,p:{x:-26,y:-44}}]},1).to({state:[{t:this.instance_3,p:{x:-29,y:-47}}]},1).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7,p:{x:6,y:-69}}]},3).to({state:[{t:this.instance_7,p:{x:12,y:-62}}]},1).to({state:[{t:this.instance_7,p:{x:7,y:-67}}]},1).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},2).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({y:37},0).wait(1).to({y:44},0).wait(1).to({y:46},0).to({_off:true},1).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).wait(1).to({x:-98,y:-11},0).wait(1).to({x:-90,y:-21},0).wait(1).to({x:-86,y:-28},0).wait(1).to({x:-84},0).wait(2).to({x:-83,y:-29},0).wait(2).to({x:-75,y:-20},0).to({_off:true},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).wait(1).to({x:-11,y:-99},0).wait(1).to({x:-6,y:-106},0).wait(1).to({x:-4,y:-110},0).wait(2).to({x:-1,y:-114},0).wait(2).to({x:1,y:-118},0).wait(2).to({x:12,y:-134},0).to({_off:true},3).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},0).wait(1).to({x:92,y:-91},0).wait(1).to({x:119,y:-136},0).wait(1).to({x:122,y:-140},0).wait(1).to({x:124,y:-145},0).wait(1).to({x:125,y:-147},0).wait(2).to({x:126,y:-149},0).wait(2).to({x:127,y:-151},0).wait(3).to({x:141,y:-128},0).wait(1).to({x:153,y:-116},0).wait(3).to({x:228,y:-195},0).wait(1).to({x:327,y:-266},0).wait(2).to({x:178,y:-151},0).wait(1).to({x:140,y:-128},0).wait(1).to({x:115,y:-105},0).wait(1).to({x:79,y:-80},0).wait(1).to({x:55,y:-57},0).wait(1).to({x:54,y:-56},0).wait(2).to({x:53},0).wait(1).to({y:-55},0).wait(1).to({x:55,y:-51},0).to({_off:true},2).wait(16));

	// bg
	this.instance_9 = new lib.startground();
	this.instance_9.setTransform(0,-31,1.8333,1.8334);

	this.instance_10 = new lib.dreamscape();
	this.instance_10.setTransform(-1056,-555);

	this.instance_11 = new lib.yay1();
	this.instance_11.setTransform(143,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10,p:{x:-1056,y:-555,scaleX:1,scaleY:1}},{t:this.instance_9,p:{x:0,y:-31}}]},30).to({state:[{t:this.instance_10,p:{x:-1056,y:-555,scaleX:1,scaleY:1}},{t:this.instance_9,p:{x:0,y:-31}}]},50).to({state:[{t:this.instance_10,p:{x:-1056,y:-555,scaleX:1,scaleY:1}},{t:this.instance_9,p:{x:-54,y:14}}]},1).to({state:[{t:this.instance_10,p:{x:-1081,y:-511,scaleX:1,scaleY:1}},{t:this.instance_9,p:{x:-79,y:58}}]},1).to({state:[{t:this.instance_10,p:{x:-1172,y:-461,scaleX:1,scaleY:1}},{t:this.instance_9,p:{x:-170,y:108}}]},1).to({state:[{t:this.instance_10,p:{x:-1327,y:-347,scaleX:1,scaleY:1}},{t:this.instance_9,p:{x:-325,y:222}}]},1).to({state:[{t:this.instance_10,p:{x:-1455,y:-199,scaleX:1,scaleY:1}},{t:this.instance_9,p:{x:-453,y:371}}]},1).to({state:[{t:this.instance_10,p:{x:-1607,y:-29,scaleX:1,scaleY:1}},{t:this.instance_9,p:{x:-605,y:541}}]},1).to({state:[{t:this.instance_10,p:{x:-1702,y:-19,scaleX:1,scaleY:1}},{t:this.instance_9,p:{x:-700,y:551}}]},1).to({state:[{t:this.instance_10,p:{x:-2767,y:-45,scaleX:1.3336,scaleY:1.3336}},{t:this.instance_9,p:{x:-700,y:551}},{t:this.instance_11}]},7).wait(16));

	// Layer_1
	this.instance_12 = new lib.preloader_10();
	this.instance_12.setTransform(18,124);

	this.instance_13 = new lib.dreamscape();
	this.instance_13.setTransform(-1056,-1142);

	this.instance_14 = new lib.startground();
	this.instance_14.setTransform(0,-72,1.8333,1.8334);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13,p:{y:-1142}},{t:this.instance_12,p:{y:124}}]}).to({state:[{t:this.instance_13,p:{y:-1001}},{t:this.instance_12,p:{y:265}}]},1).to({state:[{t:this.instance_13,p:{y:-596}},{t:this.instance_12,p:{y:670}},{t:this.instance_14,p:{y:-72}}]},1).to({state:[{t:this.instance_13,p:{y:-565}},{t:this.instance_12,p:{y:701}},{t:this.instance_14,p:{y:-41}}]},1).to({state:[{t:this.instance_13,p:{y:-558}},{t:this.instance_12,p:{y:708}},{t:this.instance_14,p:{y:-34}}]},1).to({state:[{t:this.instance_13,p:{y:-556}},{t:this.instance_12,p:{y:710}},{t:this.instance_14,p:{y:-32}}]},1).to({state:[{t:this.instance_13,p:{y:-555}},{t:this.instance_12,p:{y:711}},{t:this.instance_14,p:{y:-31}}]},1).to({state:[]},19).wait(85));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-2492,-942,4436,3156.1);
// library properties:
lib.properties = {
	id: 'B63A6E17AA593E47967FBCAE4165353B',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dreamscape.png", id:"dreamscape"},
		{src:"images/042_atlas_1.png", id:"042_atlas_1"},
		{src:"sounds/trackoftime.mp3", id:"trackoftime"}
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
an.compositions['B63A6E17AA593E47967FBCAE4165353B'] = {
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