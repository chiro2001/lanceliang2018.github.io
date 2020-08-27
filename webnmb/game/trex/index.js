function onDocumentLoad(){new Runner(".interstitial-wrapper")}!function(){"use strict";function a(b,c){return a.instance_?a.instance_:(a.instance_=this,this.outerContainerEl=document.querySelector(b),this.containerEl=null,this.snackbarEl=null,this.detailsButton=this.outerContainerEl.querySelector("#details-button"),this.config=c||a.config,this.dimensions=a.defaultDimensions,this.canvas=null,this.canvasCtx=null,this.tRex=null,this.distanceMeter=null,this.distanceRan=0,this.highestScore=0,this.time=0,this.runningTime=0,this.msPerFrame=1e3/t,this.currentSpeed=this.config.SPEED,this.obstacles=[],this.activated=!1,this.playing=!1,this.crashed=!1,this.paused=!1,this.inverted=!1,this.invertTimer=0,this.resizeTimerId_=null,this.playCount=0,this.audioBuffer=null,this.soundFx={},this.audioContext=null,this.images={},this.imagesLoaded=0,void(this.isDisabled()?this.setupDisabledRunner():this.loadImages()))}function b(a,b){return Math.floor(Math.random()*(b-a+1))+a}function c(a){w&&window.navigator.vibrate&&window.navigator.vibrate(a)}function d(b,c,d,e){var f=document.createElement("canvas");return f.className=e?a.classes.CANVAS+" "+e:a.classes.CANVAS,f.width=c,f.height=d,b.appendChild(f),f}function e(){return v?performance.now():(new Date).getTime()}function f(a,b,c,d){this.canvas=a,this.canvasCtx=a.getContext("2d"),this.canvasDimensions=d,this.textImgPos=b,this.restartImgPos=c,this.draw()}function g(b,c,d){var e=(a.defaultDimensions.WIDTH+b.xPos,new k(c.xPos+1,c.yPos+1,c.config.WIDTH-2,c.config.HEIGHT-2)),f=new k(b.xPos+1,b.yPos+1,b.typeConfig.width*b.size-2,b.typeConfig.height-2);if(d&&i(d,e,f),j(e,f))for(var g=b.collisionBoxes,l=c.ducking?m.collisionBoxes.DUCKING:m.collisionBoxes.RUNNING,n=0;n<l.length;n++)for(var o=0;o<g.length;o++){var p=h(l[n],e),q=h(g[o],f),r=j(p,q);if(d&&i(d,p,q),r)return[p,q]}return!1}function h(a,b){return new k(a.x+b.x,a.y+b.y,a.width,a.height)}function i(a,b,c){a.save(),a.strokeStyle="#f00",a.strokeRect(b.x,b.y,b.width,b.height),a.strokeStyle="#0f0",a.strokeRect(c.x,c.y,c.width,c.height),a.restore()}function j(a,b){{var c=!1,d=(a.x,a.y,b.x);b.y}return a.x<d+b.width&&a.x+a.width>d&&a.y<b.y+b.height&&a.height+a.y>b.y&&(c=!0),c}function k(a,b,c,d){this.x=a,this.y=b,this.width=c,this.height=d}function l(a,c,d,e,f,g,h){this.canvasCtx=a,this.spritePos=d,this.typeConfig=c,this.gapCoefficient=f,this.size=b(1,l.MAX_OBSTACLE_LENGTH),this.dimensions=e,this.remove=!1,this.xPos=e.WIDTH+(h||0),this.yPos=0,this.width=0,this.collisionBoxes=[],this.gap=0,this.speedOffset=0,this.currentFrame=0,this.timer=0,this.init(g)}function m(a,b){this.canvas=a,this.canvasCtx=a.getContext("2d"),this.spritePos=b,this.xPos=0,this.yPos=0,this.groundYPos=0,this.currentFrame=0,this.currentAnimFrames=[],this.blinkDelay=0,this.blinkCount=0,this.animStartTime=0,this.timer=0,this.msPerFrame=1e3/t,this.config=m.config,this.status=m.status.WAITING,this.jumping=!1,this.ducking=!1,this.jumpVelocity=0,this.reachedMinHeight=!1,this.speedDrop=!1,this.jumpCount=0,this.jumpspotX=0,this.init()}function n(b,c,d){this.canvas=b,this.canvasCtx=b.getContext("2d"),this.image=a.imageSprite,this.spritePos=c,this.x=0,this.y=5,this.currentDistance=0,this.maxScore=0,this.highScore=0,this.container=null,this.digits=[],this.acheivement=!1,this.defaultString="",this.flashTimer=0,this.flashIterations=0,this.invertTrigger=!1,this.config=n.config,this.maxScoreUnits=this.config.MAX_DISTANCE_UNITS,this.init(d)}function o(a,c,d){this.canvas=a,this.canvasCtx=this.canvas.getContext("2d"),this.spritePos=c,this.containerWidth=d,this.xPos=d,this.yPos=0,this.remove=!1,this.cloudGap=b(o.config.MIN_CLOUD_GAP,o.config.MAX_CLOUD_GAP),this.init()}function p(a,b,c){this.spritePos=b,this.canvas=a,this.canvasCtx=a.getContext("2d"),this.xPos=c-50,this.yPos=30,this.currentPhase=0,this.opacity=0,this.containerWidth=c,this.stars=[],this.drawStars=!1,this.placeStars()}function q(a,b){this.spritePos=b,this.canvas=a,this.canvasCtx=a.getContext("2d"),this.sourceDimensions={},this.dimensions=q.dimensions,this.sourceXPos=[this.spritePos.x,this.spritePos.x+this.dimensions.WIDTH],this.xPos=[],this.yPos=0,this.bumpThreshold=.5,this.setSourceDimensions(),this.draw()}function r(a,b,c,d){this.canvas=a,this.canvasCtx=this.canvas.getContext("2d"),this.config=r.config,this.dimensions=c,this.gapCoefficient=d,this.obstacles=[],this.obstacleHistory=[],this.horizonOffsets=[0,0],this.cloudFrequency=this.config.CLOUD_FREQUENCY,this.spritePos=b,this.nightMode=null,this.clouds=[],this.cloudSpeed=this.config.BG_CLOUD_SPEED,this.horizonLine=null,this.init()}window.Runner=a;{var s=600,t=60,u=window.devicePixelRatio>1,v=(/iPad|iPhone|iPod/.test(window.navigator.platform),"performance"in window&&window.performance.now),w="ontouchstart"in window;"ontouchstart"in window}a.config={ACCELERATION:.001,BG_CLOUD_SPEED:.2,BOTTOM_PAD:10,CLEAR_TIME:3e3,CLOUD_FREQUENCY:.5,GAMEOVER_CLEAR_TIME:750,GAP_COEFFICIENT:.6,GRAVITY:.6,INITIAL_JUMP_VELOCITY:12,INVERT_FADE_DURATION:12e3,INVERT_DISTANCE:700,MAX_BLINK_COUNT:3,MAX_CLOUDS:6,MAX_OBSTACLE_LENGTH:3,MAX_OBSTACLE_DUPLICATION:2,MAX_SPEED:13,MIN_JUMP_HEIGHT:35,MOBILE_SPEED_COEFFICIENT:1.2,RESOURCE_TEMPLATE_ID:"audio-resources",SPEED:6,SPEED_DROP_COEFFICIENT:3},a.defaultDimensions={WIDTH:s,HEIGHT:150},a.classes={CANVAS:"runner-canvas",CONTAINER:"runner-container",CRASHED:"crashed",ICON:"icon-offline",INVERTED:"inverted",SNACKBAR:"snackbar",SNACKBAR_SHOW:"snackbar-show",TOUCH_CONTROLLER:"controller"},a.spriteDefinition={LDPI:{CACTUS_LARGE:{x:332,y:2},CACTUS_SMALL:{x:228,y:2},CLOUD:{x:86,y:2},HORIZON:{x:2,y:54},MOON:{x:484,y:2},PTERODACTYL:{x:134,y:2},RESTART:{x:2,y:2},TEXT_SPRITE:{x:655,y:2},TREX:{x:848,y:2},STAR:{x:645,y:2}},HDPI:{CACTUS_LARGE:{x:652,y:2},CACTUS_SMALL:{x:446,y:2},CLOUD:{x:166,y:2},HORIZON:{x:2,y:104},MOON:{x:954,y:2},PTERODACTYL:{x:260,y:2},RESTART:{x:2,y:2},TEXT_SPRITE:{x:1294,y:2},TREX:{x:1678,y:2},STAR:{x:1276,y:2}}},a.sounds={BUTTON_PRESS:"offline-sound-press",HIT:"offline-sound-hit",SCORE:"offline-sound-reached"},a.keycodes={JUMP:{38:1,32:1},DUCK:{40:1},RESTART:{13:1}},a.events={ANIM_END:"webkitAnimationEnd",CLICK:"click",KEYDOWN:"keydown",KEYUP:"keyup",MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",RESIZE:"resize",TOUCHEND:"touchend",TOUCHSTART:"touchstart",VISIBILITY:"visibilitychange",BLUR:"blur",FOCUS:"focus",LOAD:"load"},a.prototype={isDisabled:function(){return!1},setupDisabledRunner:function(){this.containerEl=document.createElement("div"),this.containerEl.className=a.classes.SNACKBAR,this.containerEl.textContent=loadTimeData.getValue("disabledEasterEgg"),this.outerContainerEl.appendChild(this.containerEl),document.addEventListener(a.events.KEYDOWN,function(b){a.keycodes.JUMP[b.keyCode]&&(this.containerEl.classList.add(a.classes.SNACKBAR_SHOW),document.querySelector(".icon").classList.add("icon-disabled"))}.bind(this))},updateConfigSetting:function(a,b){if(a in this.config&&void 0!=b)switch(this.config[a]=b,a){case"GRAVITY":case"MIN_JUMP_HEIGHT":case"SPEED_DROP_COEFFICIENT":this.tRex.config[a]=b;break;case"INITIAL_JUMP_VELOCITY":this.tRex.setJumpVelocity(b);break;case"SPEED":this.setSpeed(b)}},loadImages:function(){u?(a.imageSprite=document.getElementById("offline-resources-2x"),this.spriteDef=a.spriteDefinition.HDPI):(a.imageSprite=document.getElementById("offline-resources-1x"),this.spriteDef=a.spriteDefinition.LDPI),a.imageSprite.complete?this.init():a.imageSprite.addEventListener(a.events.LOAD,this.init.bind(this))},loadSounds:function(){},setSpeed:function(a){var b=a||this.currentSpeed;if(this.dimensions.WIDTH<s){var c=b*this.dimensions.WIDTH/s*this.config.MOBILE_SPEED_COEFFICIENT;this.currentSpeed=c>b?b:c}else a&&(this.currentSpeed=a)},init:function(){document.querySelector("."+a.classes.ICON).style.visibility="hidden",this.adjustDimensions(),this.setSpeed(),this.containerEl=document.createElement("div"),this.containerEl.className=a.classes.CONTAINER,this.canvas=d(this.containerEl,this.dimensions.WIDTH,this.dimensions.HEIGHT,a.classes.PLAYER),this.canvasCtx=this.canvas.getContext("2d"),this.canvasCtx.fillStyle="#f7f7f7",this.canvasCtx.fill(),a.updateCanvasScaling(this.canvas),this.horizon=new r(this.canvas,this.spriteDef,this.dimensions,this.config.GAP_COEFFICIENT),this.distanceMeter=new n(this.canvas,this.spriteDef.TEXT_SPRITE,this.dimensions.WIDTH),this.tRex=new m(this.canvas,this.spriteDef.TREX),this.outerContainerEl.appendChild(this.containerEl),w&&this.createTouchController(),this.startListening(),this.update(),window.addEventListener(a.events.RESIZE,this.debounceResize.bind(this))},createTouchController:function(){this.touchController=document.createElement("div"),this.touchController.className=a.classes.TOUCH_CONTROLLER,this.outerContainerEl.appendChild(this.touchController)},debounceResize:function(){this.resizeTimerId_||(this.resizeTimerId_=setInterval(this.adjustDimensions.bind(this),250))},adjustDimensions:function(){clearInterval(this.resizeTimerId_),this.resizeTimerId_=null;var b=window.getComputedStyle(this.outerContainerEl),c=Number(b.paddingLeft.substr(0,b.paddingLeft.length-2));this.dimensions.WIDTH=this.outerContainerEl.offsetWidth-2*c,this.canvas&&(this.canvas.width=this.dimensions.WIDTH,this.canvas.height=this.dimensions.HEIGHT,a.updateCanvasScaling(this.canvas),this.distanceMeter.calcXPos(this.dimensions.WIDTH),this.clearCanvas(),this.horizon.update(0,0,!0),this.tRex.update(0),this.playing||this.crashed||this.paused?(this.containerEl.style.width=this.dimensions.WIDTH+"px",this.containerEl.style.height=this.dimensions.HEIGHT+"px",this.distanceMeter.update(0,Math.ceil(this.distanceRan)),this.stop()):this.tRex.draw(0,0),this.crashed&&this.gameOverPanel&&(this.gameOverPanel.updateDimensions(this.dimensions.WIDTH),this.gameOverPanel.draw()))},playIntro:function(){if(this.activated||this.crashed)this.crashed&&this.restart();else{this.playingIntro=!0,this.tRex.playingIntro=!0;var a="intro { from { width:"+m.config.WIDTH+"px }to { width: "+this.dimensions.WIDTH+"px }}",b="@-webkit-keyframes "+a+" @keyframes "+a,c=document.createElement("style");c.textContent=b,document.body.appendChild(c);var d=document.createElement("fakeelement"),e={animation:"animationend",webkitAnimation:"webkitAnimationEnd",mozAnimation:"mozAnimationEnd",MSAnimation:"MSAnimationEnd"},f="animationEnd";for(var g in e)if(void 0!==d.style[g]){f=e[g];break}this.containerEl.addEventListener(f,this.startGame.bind(this)),this.containerEl.style.webkitAnimation="intro .4s ease-out 1 both",this.containerEl.style.animation="intro .4s ease-out 1 both",this.containerEl.style.width=this.dimensions.WIDTH+"px",this.playing=!0,this.activated=!0}},startGame:function(){this.runningTime=0,this.playingIntro=!1,this.tRex.playingIntro=!1,this.containerEl.style.webkitAnimation="",this.playCount++,document.addEventListener(a.events.VISIBILITY,this.onVisibilityChange.bind(this)),window.addEventListener(a.events.BLUR,this.onVisibilityChange.bind(this)),window.addEventListener(a.events.FOCUS,this.onVisibilityChange.bind(this))},clearCanvas:function(){this.canvasCtx.clearRect(0,0,this.dimensions.WIDTH,this.dimensions.HEIGHT)},update:function(){this.updatePending=!1;var b=e(),c=b-(this.time||b);if(this.time=b,this.playing){this.clearCanvas(),this.tRex.jumping&&this.tRex.updateJump(c),this.runningTime+=c;var d=this.runningTime>this.config.CLEAR_TIME;1!=this.tRex.jumpCount||this.playingIntro||this.playIntro(),this.playingIntro?this.horizon.update(0,this.currentSpeed,d):(c=this.activated?c:0,this.horizon.update(c,this.currentSpeed,d,this.inverted));var f=d&&g(this.horizon.obstacles[0],this.tRex);f?this.gameOver():(this.distanceRan+=this.currentSpeed*c/this.msPerFrame,this.currentSpeed<this.config.MAX_SPEED&&(this.currentSpeed+=this.config.ACCELERATION));var h=this.distanceMeter.update(c,Math.ceil(this.distanceRan));if(h&&this.playSound(this.soundFx.SCORE),this.invertTimer>this.config.INVERT_FADE_DURATION)this.invertTimer=0,this.invertTrigger=!1,this.invert();else if(this.invertTimer)this.invertTimer+=c;else{var i=this.distanceMeter.getActualDistance(Math.ceil(this.distanceRan));i>0&&(this.invertTrigger=!(i%this.config.INVERT_DISTANCE),this.invertTrigger&&0===this.invertTimer&&(this.invertTimer+=c,this.invert()))}}(this.playing||!this.activated&&this.tRex.blinkCount<a.config.MAX_BLINK_COUNT)&&(this.tRex.update(c),this.scheduleNextUpdate())},handleEvent:function(b){return function(a,c){switch(a){case c.KEYDOWN:case c.TOUCHSTART:case c.MOUSEDOWN:this.onKeyDown(b);break;case c.KEYUP:case c.TOUCHEND:case c.MOUSEUP:this.onKeyUp(b)}}.bind(this)(b.type,a.events)},startListening:function(){document.addEventListener(a.events.KEYDOWN,this),document.addEventListener(a.events.KEYUP,this),w?(this.touchController.addEventListener(a.events.TOUCHSTART,this),this.touchController.addEventListener(a.events.TOUCHEND,this),this.containerEl.addEventListener(a.events.TOUCHSTART,this)):(document.addEventListener(a.events.MOUSEDOWN,this),document.addEventListener(a.events.MOUSEUP,this))},stopListening:function(){document.removeEventListener(a.events.KEYDOWN,this),document.removeEventListener(a.events.KEYUP,this),w?(this.touchController.removeEventListener(a.events.TOUCHSTART,this),this.touchController.removeEventListener(a.events.TOUCHEND,this),this.containerEl.removeEventListener(a.events.TOUCHSTART,this)):(document.removeEventListener(a.events.MOUSEDOWN,this),document.removeEventListener(a.events.MOUSEUP,this))},onKeyDown:function(b){w&&this.playing&&b.preventDefault(),b.target!=this.detailsButton&&(this.crashed||!a.keycodes.JUMP[b.keyCode]&&b.type!=a.events.TOUCHSTART||(this.playing||(this.loadSounds(),this.playing=!0,this.update(),window.errorPageController&&errorPageController.trackEasterEgg()),this.tRex.jumping||this.tRex.ducking||(this.playSound(this.soundFx.BUTTON_PRESS),this.tRex.startJump(this.currentSpeed))),this.crashed&&b.type==a.events.TOUCHSTART&&b.currentTarget==this.containerEl&&this.restart()),this.playing&&!this.crashed&&a.keycodes.DUCK[b.keyCode]&&(b.preventDefault(),this.tRex.jumping?this.tRex.setSpeedDrop():this.tRex.jumping||this.tRex.ducking||this.tRex.setDuck(!0))},onKeyUp:function(b){var c=String(b.keyCode),d=a.keycodes.JUMP[c]||b.type==a.events.TOUCHEND||b.type==a.events.MOUSEDOWN;if(this.isRunning()&&d)this.tRex.endJump();else if(a.keycodes.DUCK[c])this.tRex.speedDrop=!1,this.tRex.setDuck(!1);else if(this.crashed){var f=e()-this.time;(a.keycodes.RESTART[c]||this.isLeftClickOnCanvas(b)||f>=this.config.GAMEOVER_CLEAR_TIME&&a.keycodes.JUMP[c])&&this.restart()}else this.paused&&d&&(this.tRex.reset(),this.play())},isLeftClickOnCanvas:function(b){return null!=b.button&&b.button<2&&b.type==a.events.MOUSEUP&&b.target==this.canvas},scheduleNextUpdate:function(){this.updatePending||(this.updatePending=!0,window.requestAnimationFrame?this.raqId=requestAnimationFrame(this.update.bind(this)):this.raqId=setTimeout(this.update.bind(this),0))},isRunning:function(){return!!this.raqId},gameOver:function(){this.playSound(this.soundFx.HIT),c(200),this.stop(),this.crashed=!0,this.distanceMeter.acheivement=!1,this.tRex.update(100,m.status.CRASHED),this.gameOverPanel?this.gameOverPanel.draw():this.gameOverPanel=new f(this.canvas,this.spriteDef.TEXT_SPRITE,this.spriteDef.RESTART,this.dimensions),this.distanceRan>this.highestScore&&(this.highestScore=Math.ceil(this.distanceRan),this.distanceMeter.setHighScore(this.highestScore)),this.time=e()},stop:function(){this.playing=!1,this.paused=!0,window.requestAnimationFrame?cancelAnimationFrame(this.raqId):clearTimeout(this.raqId),this.raqId=0},play:function(){this.crashed||(this.playing=!0,this.paused=!1,this.tRex.update(0,m.status.RUNNING),this.time=e(),this.update())},restart:function(){this.raqId||(this.playCount++,this.runningTime=0,this.playing=!0,this.crashed=!1,this.distanceRan=0,this.setSpeed(this.config.SPEED),this.time=e(),this.containerEl.classList.remove(a.classes.CRASHED),this.clearCanvas(),this.distanceMeter.reset(this.highestScore),this.horizon.reset(),this.tRex.reset(),this.playSound(this.soundFx.BUTTON_PRESS),this.invert(!0),this.update())},onVisibilityChange:function(a){document.hidden||document.webkitHidden||"blur"==a.type||"visible"!=document.visibilityState?this.stop():this.crashed||(this.tRex.reset(),this.play())},playSound:function(a){if(a){var b=this.audioContext.createBufferSource();b.buffer=a,b.connect(this.audioContext.destination),b.start(0)}},invert:function(b){b?(document.body.classList.toggle(a.classes.INVERTED,!1),this.invertTimer=0,this.inverted=!1):this.inverted=document.body.classList.toggle(a.classes.INVERTED,this.invertTrigger)}},a.updateCanvasScaling=function(a,b,c){var d=a.getContext("2d"),e=Math.floor(window.devicePixelRatio)||1,f=Math.floor(d.webkitBackingStorePixelRatio)||1,g=e/f;if(e!==f){var h=b||a.width,i=c||a.height;return a.width=h*g,a.height=i*g,a.style.width=h+"px",a.style.height=i+"px",d.scale(g,g),!0}return 1==e&&(a.style.width=a.width+"px",a.style.height=a.height+"px"),!1},f.dimensions={TEXT_X:0,TEXT_Y:13,TEXT_WIDTH:191,TEXT_HEIGHT:11,RESTART_WIDTH:36,RESTART_HEIGHT:32},f.prototype={updateDimensions:function(a,b){this.canvasDimensions.WIDTH=a,b&&(this.canvasDimensions.HEIGHT=b)},draw:function(){var b=f.dimensions,c=this.canvasDimensions.WIDTH/2,d=b.TEXT_X,e=b.TEXT_Y,g=b.TEXT_WIDTH,h=b.TEXT_HEIGHT,i=Math.round(c-b.TEXT_WIDTH/2),j=Math.round((this.canvasDimensions.HEIGHT-25)/3),k=b.TEXT_WIDTH,l=b.TEXT_HEIGHT,m=b.RESTART_WIDTH,n=b.RESTART_HEIGHT,o=c-b.RESTART_WIDTH/2,p=this.canvasDimensions.HEIGHT/2;u&&(e*=2,d*=2,g*=2,h*=2,m*=2,n*=2),d+=this.textImgPos.x,e+=this.textImgPos.y,this.canvasCtx.drawImage(a.imageSprite,d,e,g,h,i,j,k,l),this.canvasCtx.drawImage(a.imageSprite,this.restartImgPos.x,this.restartImgPos.y,m,n,o,p,b.RESTART_WIDTH,b.RESTART_HEIGHT)}},l.MAX_GAP_COEFFICIENT=1.5,l.MAX_OBSTACLE_LENGTH=3,l.prototype={init:function(a){if(this.cloneCollisionBoxes(),this.size>1&&this.typeConfig.multipleSpeed>a&&(this.size=1),this.width=this.typeConfig.width*this.size,Array.isArray(this.typeConfig.yPos)){var c=w?this.typeConfig.yPosMobile:this.typeConfig.yPos;this.yPos=c[b(0,c.length-1)]}else this.yPos=this.typeConfig.yPos;this.draw(),this.size>1&&(this.collisionBoxes[1].width=this.width-this.collisionBoxes[0].width-this.collisionBoxes[2].width,this.collisionBoxes[2].x=this.width-this.collisionBoxes[2].width),this.typeConfig.speedOffset&&(this.speedOffset=Math.random()>.5?this.typeConfig.speedOffset:-this.typeConfig.speedOffset),this.gap=this.getGap(this.gapCoefficient,a)},draw:function(){var b=this.typeConfig.width,c=this.typeConfig.height;u&&(b=2*b,c=2*c);var d=b*this.size*.5*(this.size-1)+this.spritePos.x;this.currentFrame>0&&(d+=b*this.currentFrame),this.canvasCtx.drawImage(a.imageSprite,d,this.spritePos.y,b*this.size,c,this.xPos,this.yPos,this.typeConfig.width*this.size,this.typeConfig.height)},update:function(a,b){this.remove||(this.typeConfig.speedOffset&&(b+=this.speedOffset),this.xPos-=Math.floor(b*t/1e3*a),this.typeConfig.numFrames&&(this.timer+=a,this.timer>=this.typeConfig.frameRate&&(this.currentFrame=this.currentFrame==this.typeConfig.numFrames-1?0:this.currentFrame+1,this.timer=0)),this.draw(),this.isVisible()||(this.remove=!0))},getGap:function(a,c){var d=Math.round(this.width*c+this.typeConfig.minGap*a),e=Math.round(d*l.MAX_GAP_COEFFICIENT);return b(d,e)},isVisible:function(){return this.xPos+this.width>0},cloneCollisionBoxes:function(){for(var a=this.typeConfig.collisionBoxes,b=a.length-1;b>=0;b--)this.collisionBoxes[b]=new k(a[b].x,a[b].y,a[b].width,a[b].height)}},l.types=[{type:"CACTUS_SMALL",width:17,height:35,yPos:105,multipleSpeed:4,minGap:120,minSpeed:0,collisionBoxes:[new k(0,7,5,27),new k(4,0,6,34),new k(10,4,7,14)]},{type:"CACTUS_LARGE",width:25,height:50,yPos:90,multipleSpeed:7,minGap:120,minSpeed:0,collisionBoxes:[new k(0,12,7,38),new k(8,0,7,49),new k(13,10,10,38)]},{type:"PTERODACTYL",width:46,height:40,yPos:[100,75,50],yPosMobile:[100,50],multipleSpeed:999,minSpeed:8.5,minGap:150,collisionBoxes:[new k(15,15,16,5),new k(18,21,24,6),new k(2,14,4,3),new k(6,10,4,7),new k(10,8,6,9)],numFrames:2,frameRate:1e3/6,speedOffset:.8}],m.config={DROP_VELOCITY:-5,GRAVITY:.6,HEIGHT:47,HEIGHT_DUCK:25,INIITAL_JUMP_VELOCITY:-10,INTRO_DURATION:1500,MAX_JUMP_HEIGHT:30,MIN_JUMP_HEIGHT:30,SPEED_DROP_COEFFICIENT:3,SPRITE_WIDTH:262,START_X_POS:50,WIDTH:44,WIDTH_DUCK:44},m.collisionBoxes={DUCKING:[new k(2,15,44,25)],RUNNING:[new k(2,7,34,22),new k(6,29,28,4),new k(10,33,16,8),new k(10,41,14,2)]},m.status={CRASHED:"CRASHED",DUCKING:"DUCKING",JUMPING:"JUMPING",RUNNING:"RUNNING",WAITING:"WAITING"},m.BLINK_TIMING=7e3,m.animFrames={WAITING:{frames:[44,0],msPerFrame:1e3/3},RUNNING:{frames:[88,132,176,220,264,308],msPerFrame:1e3/12},CRASHED:{frames:[352],msPerFrame:1e3/60},JUMPING:{frames:[0],msPerFrame:1e3/60},DUCKING:{frames:[440,484],msPerFrame:1e3/6}},m.prototype={init:function(){this.groundYPos=a.defaultDimensions.HEIGHT-this.config.HEIGHT-a.config.BOTTOM_PAD,this.yPos=this.groundYPos,this.minJumpHeight=this.groundYPos-this.config.MIN_JUMP_HEIGHT,this.draw(0,0),this.update(0,m.status.WAITING)},setJumpVelocity:function(a){this.config.INIITAL_JUMP_VELOCITY=-a,this.config.DROP_VELOCITY=-a/2},update:function(a,b){this.timer+=a,b&&(this.status=b,this.currentFrame=0,this.msPerFrame=m.animFrames[b].msPerFrame,this.currentAnimFrames=m.animFrames[b].frames,b==m.status.WAITING&&(this.animStartTime=e(),this.setBlinkDelay())),this.playingIntro&&this.xPos<this.config.START_X_POS&&(this.xPos+=Math.round(this.config.START_X_POS/this.config.INTRO_DURATION*a)),this.status==m.status.WAITING?this.blink(e()):this.draw(this.currentAnimFrames[this.currentFrame],0),this.timer>=this.msPerFrame&&(this.currentFrame=this.currentFrame==this.currentAnimFrames.length-1?0:this.currentFrame+1,this.timer=0),this.speedDrop&&this.yPos==this.groundYPos&&(this.speedDrop=!1,this.setDuck(!0))},draw:function(b,c){var d=b,e=c,f=this.ducking&&this.status!=m.status.CRASHED?this.config.WIDTH_DUCK:this.config.WIDTH,g=this.config.HEIGHT;u&&(d*=2,e*=2,f*=2,g*=2),d+=this.spritePos.x,e+=this.spritePos.y,this.ducking&&this.status!=m.status.CRASHED?this.canvasCtx.drawImage(a.imageSprite,d,e,f,g,this.xPos,this.yPos,this.config.WIDTH_DUCK,this.config.HEIGHT):(this.ducking&&this.status==m.status.CRASHED&&this.xPos++,this.canvasCtx.drawImage(a.imageSprite,d,e,f,g,this.xPos,this.yPos,this.config.WIDTH,this.config.HEIGHT))},setBlinkDelay:function(){this.blinkDelay=Math.ceil(Math.random()*m.BLINK_TIMING)},blink:function(a){var b=a-this.animStartTime;b>=this.blinkDelay&&(this.draw(this.currentAnimFrames[this.currentFrame],0),1==this.currentFrame&&(this.setBlinkDelay(),this.animStartTime=a,this.blinkCount++))},startJump:function(a){this.jumping||(this.update(0,m.status.JUMPING),this.jumpVelocity=this.config.INIITAL_JUMP_VELOCITY-a/10,this.jumping=!0,this.reachedMinHeight=!1,this.speedDrop=!1)},endJump:function(){this.reachedMinHeight&&this.jumpVelocity<this.config.DROP_VELOCITY&&(this.jumpVelocity=this.config.DROP_VELOCITY)},updateJump:function(a,b){var c=m.animFrames[this.status].msPerFrame,d=a/c;this.speedDrop?this.yPos+=Math.round(this.jumpVelocity*this.config.SPEED_DROP_COEFFICIENT*d):this.yPos+=Math.round(this.jumpVelocity*d),this.jumpVelocity+=this.config.GRAVITY*d,(this.yPos<this.minJumpHeight||this.speedDrop)&&(this.reachedMinHeight=!0),(this.yPos<this.config.MAX_JUMP_HEIGHT||this.speedDrop)&&this.endJump(),this.yPos>this.groundYPos&&(this.reset(),this.jumpCount++),this.update(a)},setSpeedDrop:function(){this.speedDrop=!0,this.jumpVelocity=1},setDuck:function(a){a&&this.status!=m.status.DUCKING?(this.update(0,m.status.DUCKING),this.ducking=!0):this.status==m.status.DUCKING&&(this.update(0,m.status.RUNNING),this.ducking=!1)},reset:function(){this.yPos=this.groundYPos,this.jumpVelocity=0,this.jumping=!1,this.ducking=!1,this.update(0,m.status.RUNNING),this.midair=!1,this.speedDrop=!1,this.jumpCount=0}},n.dimensions={WIDTH:10,HEIGHT:13,DEST_WIDTH:11},n.yPos=[0,13,27,40,53,67,80,93,107,120],n.config={MAX_DISTANCE_UNITS:5,ACHIEVEMENT_DISTANCE:100,COEFFICIENT:.025,FLASH_DURATION:250,FLASH_ITERATIONS:3},n.prototype={init:function(a){var b="";this.calcXPos(a),this.maxScore=this.maxScoreUnits;for(var c=0;c<this.maxScoreUnits;c++)this.draw(c,0),this.defaultString+="0",b+="9";this.maxScore=parseInt(b)},calcXPos:function(a){this.x=a-n.dimensions.DEST_WIDTH*(this.maxScoreUnits+1)},draw:function(a,b,c){var d=n.dimensions.WIDTH,e=n.dimensions.HEIGHT,f=n.dimensions.WIDTH*b,g=0,h=a*n.dimensions.DEST_WIDTH,i=this.y,j=n.dimensions.WIDTH,k=n.dimensions.HEIGHT;if(u&&(d*=2,e*=2,f*=2),f+=this.spritePos.x,g+=this.spritePos.y,this.canvasCtx.save(),c){var l=this.x-2*this.maxScoreUnits*n.dimensions.WIDTH;this.canvasCtx.translate(l,this.y)}else this.canvasCtx.translate(this.x,this.y);this.canvasCtx.drawImage(this.image,f,g,d,e,h,i,j,k),this.canvasCtx.restore()},getActualDistance:function(a){return a?Math.round(a*this.config.COEFFICIENT):0},update:function(a,b){var c=!0,d=!1;if(this.acheivement)this.flashIterations<=this.config.FLASH_ITERATIONS?(this.flashTimer+=a,this.flashTimer<this.config.FLASH_DURATION?c=!1:this.flashTimer>2*this.config.FLASH_DURATION&&(this.flashTimer=0,this.flashIterations++)):(this.acheivement=!1,this.flashIterations=0,this.flashTimer=0);else if(b=this.getActualDistance(b),b>this.maxScore&&this.maxScoreUnits==this.config.MAX_DISTANCE_UNITS?(this.maxScoreUnits++,this.maxScore=parseInt(this.maxScore+"9")):this.distance=0,b>0){b%this.config.ACHIEVEMENT_DISTANCE==0&&(this.acheivement=!0,this.flashTimer=0,d=!0);var e=(this.defaultString+b).substr(-this.maxScoreUnits);this.digits=e.split("")}else this.digits=this.defaultString.split("");if(c)for(var f=this.digits.length-1;f>=0;f--)this.draw(f,parseInt(this.digits[f]));return this.drawHighScore(),d},drawHighScore:function(){this.canvasCtx.save(),this.canvasCtx.globalAlpha=.8;for(var a=this.highScore.length-1;a>=0;a--)this.draw(a,parseInt(this.highScore[a],10),!0);this.canvasCtx.restore()},setHighScore:function(a){a=this.getActualDistance(a);var b=(this.defaultString+a).substr(-this.maxScoreUnits);this.highScore=["10","11",""].concat(b.split(""))},reset:function(){this.update(0),this.acheivement=!1}},o.config={HEIGHT:14,MAX_CLOUD_GAP:400,MAX_SKY_LEVEL:30,MIN_CLOUD_GAP:100,MIN_SKY_LEVEL:71,WIDTH:46},o.prototype={init:function(){this.yPos=b(o.config.MAX_SKY_LEVEL,o.config.MIN_SKY_LEVEL),this.draw()},draw:function(){this.canvasCtx.save();var b=o.config.WIDTH,c=o.config.HEIGHT;u&&(b=2*b,c=2*c),this.canvasCtx.drawImage(a.imageSprite,this.spritePos.x,this.spritePos.y,b,c,this.xPos,this.yPos,o.config.WIDTH,o.config.HEIGHT),this.canvasCtx.restore()},update:function(a){this.remove||(this.xPos-=Math.ceil(a),this.draw(),this.isVisible()||(this.remove=!0))},isVisible:function(){return this.xPos+o.config.WIDTH>0}},p.config={FADE_SPEED:.035,HEIGHT:40,MOON_SPEED:.25,NUM_STARS:2,STAR_SIZE:9,STAR_SPEED:.3,STAR_MAX_Y:70,WIDTH:20},p.phases=[140,120,100,60,40,20,0],p.invertTimer=0,p.inverted=!1,p.invertTrigger=!1,p.INVERT_FADE_DURATION=5e3,p.prototype={update:function(a,b){if(a&&0==this.opacity&&(this.currentPhase++,this.currentPhase>=p.phases.length&&(this.currentPhase=0)),a&&(this.opacity<1||0==this.opacity)?this.opacity+=p.config.FADE_SPEED:this.opacity>0&&(this.opacity-=p.config.FADE_SPEED),this.opacity>0){if(this.xPos=this.updateXPos(this.xPos,p.config.MOON_SPEED),this.drawStars)for(var c=0;c<p.config.NUM_STARS;c++)this.stars[c].x=this.updateXPos(this.stars[c].x,p.config.STAR_SPEED);this.draw()}else this.opacity=0,this.placeStars();this.drawStars=!0},updateXPos:function(a,b){return a<-p.config.WIDTH?a=this.containerWidth:a-=b,a},draw:function(){var b=3==this.currentPhase?2*p.config.WIDTH:p.config.WIDTH,c=p.config.HEIGHT,d=this.spritePos.x+p.phases[this.currentPhase],e=b,f=p.config.STAR_SIZE,g=a.spriteDefinition.LDPI.STAR.x;if(u&&(b*=2,c*=2,d=this.spritePos.x+2*p.phases[this.currentPhase],f*=2,g=a.spriteDefinition.HDPI.STAR.x),this.canvasCtx.save(),this.canvasCtx.globalAlpha=this.opacity,this.drawStars)for(var h=0;h<p.config.NUM_STARS;h++)this.canvasCtx.drawImage(a.imageSprite,g,this.stars[h].sourceY,f,f,Math.round(this.stars[h].x),this.stars[h].y,p.config.STAR_SIZE,p.config.STAR_SIZE);this.canvasCtx.drawImage(a.imageSprite,d,this.spritePos.y,b,c,Math.round(this.xPos),this.yPos,e,p.config.HEIGHT),this.canvasCtx.globalAlpha=1,this.canvasCtx.restore()},placeStars:function(){for(var c=Math.round(this.containerWidth/p.config.NUM_STARS),d=0;d<p.config.NUM_STARS;d++)this.stars[d]={},this.stars[d].x=b(c*d,c*(d+1)),this.stars[d].y=b(0,p.config.STAR_MAX_Y),u?this.stars[d].sourceY=a.spriteDefinition.HDPI.STAR.y+2*p.config.STAR_SIZE*d:this.stars[d].sourceY=a.spriteDefinition.LDPI.STAR.y+p.config.STAR_SIZE*d},reset:function(){this.currentPhase=0,this.opacity=0,this.update(!1)}},q.dimensions={WIDTH:600,HEIGHT:12,YPOS:127},q.prototype={setSourceDimensions:function(){for(var a in q.dimensions)u?"YPOS"!=a&&(this.sourceDimensions[a]=2*q.dimensions[a]):this.sourceDimensions[a]=q.dimensions[a],this.dimensions[a]=q.dimensions[a];this.xPos=[0,q.dimensions.WIDTH],this.yPos=q.dimensions.YPOS},getRandomType:function(){return Math.random()>this.bumpThreshold?this.dimensions.WIDTH:0},draw:function(){this.canvasCtx.drawImage(a.imageSprite,this.sourceXPos[0],this.spritePos.y,this.sourceDimensions.WIDTH,this.sourceDimensions.HEIGHT,this.xPos[0],this.yPos,this.dimensions.WIDTH,this.dimensions.HEIGHT),this.canvasCtx.drawImage(a.imageSprite,this.sourceXPos[1],this.spritePos.y,this.sourceDimensions.WIDTH,this.sourceDimensions.HEIGHT,this.xPos[1],this.yPos,this.dimensions.WIDTH,this.dimensions.HEIGHT)},updateXPos:function(a,b){var c=a,d=0==a?1:0;this.xPos[c]-=b,this.xPos[d]=this.xPos[c]+this.dimensions.WIDTH,this.xPos[c]<=-this.dimensions.WIDTH&&(this.xPos[c]+=2*this.dimensions.WIDTH,this.xPos[d]=this.xPos[c]-this.dimensions.WIDTH,this.sourceXPos[c]=this.getRandomType()+this.spritePos.x)},update:function(a,b){var c=Math.floor(b*(t/1e3)*a);this.xPos[0]<=0?this.updateXPos(0,c):this.updateXPos(1,c),this.draw()},reset:function(){this.xPos[0]=0,this.xPos[1]=q.dimensions.WIDTH}},r.config={BG_CLOUD_SPEED:.2,BUMPY_THRESHOLD:.3,CLOUD_FREQUENCY:.5,HORIZON_HEIGHT:16,MAX_CLOUDS:6},r.prototype={init:function(){this.addCloud(),this.horizonLine=new q(this.canvas,this.spritePos.HORIZON),this.nightMode=new p(this.canvas,this.spritePos.MOON,this.dimensions.WIDTH)},update:function(a,b,c,d){this.runningTime+=a,this.horizonLine.update(a,b),this.nightMode.update(d),this.updateClouds(a,b),c&&this.updateObstacles(a,b)},updateClouds:function(a,b){var c=this.cloudSpeed/1e3*a*b,d=this.clouds.length;if(d){for(var e=d-1;e>=0;e--)this.clouds[e].update(c);var f=this.clouds[d-1];d<this.config.MAX_CLOUDS&&this.dimensions.WIDTH-f.xPos>f.cloudGap&&this.cloudFrequency>Math.random()&&this.addCloud(),this.clouds=this.clouds.filter(function(a){return!a.remove})}else this.addCloud()},updateObstacles:function(a,b){for(var c=this.obstacles.slice(0),d=0;d<this.obstacles.length;d++){var e=this.obstacles[d];e.update(a,b),e.remove&&c.shift()}if(this.obstacles=c,this.obstacles.length>0){var f=this.obstacles[this.obstacles.length-1];f&&!f.followingObstacleCreated&&f.isVisible()&&f.xPos+f.width+f.gap<this.dimensions.WIDTH&&(this.addNewObstacle(b),f.followingObstacleCreated=!0)}else this.addNewObstacle(b)},removeFirstObstacle:function(){this.obstacles.shift()},addNewObstacle:function(c){var d=b(0,l.types.length-1),e=l.types[d];if(this.duplicateObstacleCheck(e.type)||c<e.minSpeed)this.addNewObstacle(c);else{var f=this.spritePos[e.type];this.obstacles.push(new l(this.canvasCtx,e,f,this.dimensions,this.gapCoefficient,c,e.width)),this.obstacleHistory.unshift(e.type),this.obstacleHistory.length>1&&this.obstacleHistory.splice(a.config.MAX_OBSTACLE_DUPLICATION)}},duplicateObstacleCheck:function(b){for(var c=0,d=0;d<this.obstacleHistory.length;d++)c=this.obstacleHistory[d]==b?c+1:0;return c>=a.config.MAX_OBSTACLE_DUPLICATION},reset:function(){this.obstacles=[],this.horizonLine.reset(),this.nightMode.reset()},resize:function(a,b){this.canvas.width=a,this.canvas.height=b},addCloud:function(){this.clouds.push(new o(this.canvas,this.spritePos.CLOUD,this.dimensions.WIDTH));

}}}(),document.addEventListener("DOMContentLoaded",onDocumentLoad);