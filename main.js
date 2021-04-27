import Chat from 'twitch-chat-emotes';

let channels = ['moonmoon'];
const query_vars = {};
const query_parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
	query_vars[key] = value;
});
if (query_vars.channels) {
	channels = query_vars.channels.split(',');
}

const ChatInstance = new Chat({
	channels,
	duplicateEmoteLimit: 1,
	duplicateEmoteLimit_pleb: 0,
	maximumEmoteLimit: 3,
	maximumEmoteLimit_pleb: 1,
})

const emoteSize = 56;
const emoteSpeed = 1;
const emoteRange = 4;
const emoteSpeedMod = 1;
const emoteVariance = 75;
const emoteFadeStart = 6;
const emoteFadeEnd = 1;

const emoteTextures = {};
const pendingEmoteArray = [];

ChatInstance.on("emotes", (e) => {

	/*
	if(pendingEmoteArray.length > 0)
	{
		return
	}
	*/
	for (let index = 0; index < e.emotes.length; index++) 
	{
		const output = {
			position: getSpawnPosition(),
			velocity: emoteSpeed + 0.01, //+ Math.random() * emoteVariance, //was gonna do variable speeds but it fucked up my calculations in calculateSpeeds and holy fuck its too late at night to fix that
			xVariance: emoteVariance - Math.random() * emoteVariance * 2,
			yVariance: emoteVariance - Math.random() * emoteVariance * 2,
			emotes: [],
			checkpoint: 0,
		};

		output.velocityX = output.velocity
		output.velocityY = output.velocity
		
		output.emotes.push(e.emotes[index]);
		//output.emotes.push(e.emotes[0]);
		//output.emotes = output.emotes.reverse();

		output.height = emoteSize;
		output.width = emoteSize * output.emotes.length;

		pendingEmoteArray.push(output);
	}
})

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

const easeInOutSine = (currentIteration, startValue, changeInValue, totalIterations) => {
	return changeInValue / 2 * (1 - Math.cos(Math.PI * currentIteration / totalIterations)) + startValue;
}

const getSpawnPosition = () => {
	
	let pathNumber = Math.floor(Math.random() * paths.length);
	
	let x = paths[pathNumber][0][0]
	let y = paths[pathNumber][0][1]

	return { x, y, pathNumber };
}

function easeOutCubic(x) {
	return 1 - Math.pow(1 - x, 3);
}

function easeInCubic(x) {
	return x * x * x;
}

let fullWidth = window.innerWidth;
let fullHeight = window.innerHeight;

let halfx = window.innerWidth / 2;
let halfy = window.innerHeight / 2;

const scale = 10;
let iters = 400;

let direction = 0;
let directFlip = false;

let bgIndex = 0;
let bgCount = 0;

let saluteWidth = 418 / 1 * 1.3;
let saluteHeight = 596 / 1 * 1.3;
let salutePosX = 0;
let salutePosY = 440;

const lennySaluteSrc = require('./images/sheriff_lenny_big.png');
const lennySalute = new Image(saluteWidth, saluteHeight);
lennySalute.src = lennySaluteSrc;

let podiumWidth = 1920 / 1 * 0.65;
let podiumHeight = 1080 / 1 * 0.65;
let podiumPosX = 0;
let podiumPosY = 0;

const podiumSrc = require('./images/podium.png');
const podium = new Image(podiumWidth, podiumHeight);
podium.src = podiumSrc;

const backgroundCitySrc0 = require('./images/Screenshot 2021-04-10 19-32-42_00000.png');
const backgroundCity0 = new Image(window.innerWidth, window.innerHeight);
backgroundCity0.src = backgroundCitySrc0;

const backgroundCitySrc1 = require('./images/Screenshot 2021-04-10 19-32-42_00001.png');
const backgroundCity1 = new Image(window.innerWidth, window.innerHeight);
backgroundCity1.src = backgroundCitySrc1;

const backgroundCitySrc2 = require('./images/Screenshot 2021-04-10 19-32-42_00002.png');
const backgroundCity2 = new Image(window.innerWidth, window.innerHeight);
backgroundCity2.src = backgroundCitySrc2;

const backgroundCitySrc3 = require('./images/Screenshot 2021-04-10 19-32-42_00003.png');
const backgroundCity3 = new Image(window.innerWidth, window.innerHeight);
backgroundCity3.src = backgroundCitySrc3;

const backgroundCitySrc4 = require('./images/Screenshot 2021-04-10 19-32-42_00004.png');
const backgroundCity4 = new Image(window.innerWidth, window.innerHeight);
backgroundCity4.src = backgroundCitySrc4;

const backgroundCitySrc5 = require('./images/Screenshot 2021-04-10 19-32-42_00005.png');
const backgroundCity5 = new Image(window.innerWidth, window.innerHeight);
backgroundCity5.src = backgroundCitySrc5;

const backgroundCitySrc6 = require('./images/Screenshot 2021-04-10 19-32-42_00006.png');
const backgroundCity6 = new Image(window.innerWidth, window.innerHeight);
backgroundCity6.src = backgroundCitySrc6;

const backgroundCitySrc7 = require('./images/Screenshot 2021-04-10 19-32-42_00007.png');
const backgroundCity7 = new Image(window.innerWidth, window.innerHeight);
backgroundCity7.src = backgroundCitySrc7;

const backgroundCityOverlaySrc = require('./images/overlay.png');
const backgroundCityOverlay = new Image(window.innerWidth, window.innerHeight);
backgroundCityOverlay.src = backgroundCityOverlaySrc;

const backgroundTreesySrc = require('./images/trees.png');
const backgroundTrees = new Image(window.innerWidth, window.innerHeight);
backgroundTrees.src = backgroundTreesySrc;

const backgroundVingSrc = require('./images/ving.png');
const backgroundVing = new Image(window.innerWidth, window.innerHeight);
backgroundVing.src = backgroundVingSrc;

const pooliceSrc = require('./images/poolicesingle.png');
const poolice = new Image(112, 112);
poolice.src = pooliceSrc;

const backgrounds = [
	backgroundCity0,
	backgroundCity1,
	backgroundCity2,
	backgroundCity3,
	backgroundCity4,
	backgroundCity5,
	backgroundCity6,
	backgroundCity7
]

const line1 = [
	[-50, 1000],
	[210, 980],
	[275, 460],
	[492, 466],
	[600, 484],
	[744, 456],
	[916, 454],
	[930, 240],
	[946, 60]
]

const line2 = [
	[1604, -78],
	[1640, 400],
	[1548, 402],
	[1458, 428],
	[1372, 466],
	[1282, 478],
	[1218, 466],
	[1162, 448],
	[1098, 448],
	[1036, 446],
	[1002, 442],
	[982, 368],
	[970, 280],
	[948, 60]
]

const line3 = [
	[694, 1232],
	[898, 1038],
	[892, 588],
	[898, 470],
	[938, 358],
	[948, 60]
]

const line4 = [
	[2064, 1144],
	[1496, 1056],
	[1372, 922],
	[1338, 814],
	[1322, 744],
	[1332, 652],
	[1346, 586],
	[1268, 500],
	[1134, 444],
	[998, 446],
	[962, 324],
	[946, 60]
]

const line5 = [
	[268, -22],
	[270, 442],
	[446, 450],
	[534, 472],
	[628, 478],
	[718, 458],
	[818, 456],
	[916, 450],
	[944, 316],
	[946, 60]
]

const line6 = [
	[1218, 1186],
	[1160, 962],
	[1114, 904],
	[1030, 878],
	[1024, 738],
	[1024, 616],
	[1024, 510],
	[992, 428],
	[962, 290],
	[946, 60]
]

const line7 = [
	[-88, 1064],
	[392, 940],
	[516, 880],
	[740, 628],
	[778, 466],
	[836, 454],
	[916, 448],
	[942, 312],
	[944, 60]
]

const line8 = [
	[1286, 1154],
	[1254, 928],
	[1216, 854],
	[1160, 766],
	[1134, 660],
	[1124, 536],
	[1104, 458],
	[1018, 448],
	[986, 380],
	[942, 60]
]

const paths = [
	line1,
	line2,
	line3,
	line4,
	line5,
	line6,
	line7,
	line8,
]

function approachNumber(num, goal, speed)
{
	
	if(num > goal - emoteRange && num < goal + emoteRange)
	{
		return false
	}
	else if(num < goal)
	{
		num+=speed;
	}
	else if(num > goal)
	{
		num-=speed;
	}
	return num
}

function calculateSpeeds(currentX, currentY, goalX, goalY, maxSpeed)
{	
	let disToX = Math.abs(goalX - currentX)
	let disToY = Math.abs(goalY - currentY)
	
	let xSpeed = maxSpeed
	let ySpeed = maxSpeed
	
	if(disToX > disToY)
	{
		ySpeed = disToY/disToX/maxSpeed
	}
	else if(disToY > disToX)
	{
		xSpeed = disToX/disToY/maxSpeed
	}
	
	return {xSpeed, ySpeed}
}

window.addEventListener('DOMContentLoaded', () => {
	function resize() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		fullWidth = window.innerWidth;
		fullHeight = window.innerHeight;
	}
	function init() {
		window.addEventListener('resize', resize)
		document.body.appendChild(canvas);
	}

	let lastFrame = Date.now();
	function draw() {
		requestAnimationFrame(draw);

		const delta = (Date.now() - lastFrame) / 1000;
		lastFrame = Date.now();
		
		if (directFlip) direction++;
		else direction--;
		if (Math.abs(direction) >= iters) directFlip = !directFlip;
		
		bgCount++;
		
		if(bgCount > 5)
		{
			bgCount = 0;
			bgIndex += 1;
			if(bgIndex == backgrounds.length)
			{
				bgIndex = 0;
			}
		}
		
		ctx.drawImage(backgrounds[bgIndex], 0, 0, fullWidth, fullHeight);
		
		
		for (let index = pendingEmoteArray.length - 1; index >= 0; index--) {
			const element = pendingEmoteArray[index];
			
			let newX = approachNumber(element.position.x, paths[element.position.pathNumber][element.checkpoint][0] + (element.xVariance/(element.checkpoint+1)), element.velocityX)
			let newY = approachNumber(element.position.y, paths[element.position.pathNumber][element.checkpoint][1] + (element.yVariance/(element.checkpoint+1)), element.velocityY)
			
			if(!newX && !newY)
			{
				element.checkpoint++;				
				
				if(element.checkpoint < paths[element.position.pathNumber].length)
				{
					let speeds = calculateSpeeds(element.position.x, element.position.y, paths[element.position.pathNumber][element.checkpoint][0] + (element.xVariance/(element.checkpoint+1)), paths[element.position.pathNumber][element.checkpoint][1] + (element.yVariance/(element.checkpoint+1)), element.velocity/emoteSpeedMod)
					element.velocityX = speeds.xSpeed
					element.velocityY = speeds.ySpeed
				}
			}
			
			if(newX)
			{
				element.position.x = newX;
			}
			if(newY)
			{
				element.position.y = newY;
			}

			const offset = 0;
			for (let i = 0; i < element.emotes.length; i++) {
				const emote = element.emotes[i];
				const width = (emoteSize);
				const height = width * (emote.material.canvas.height / emote.material.canvas.width);
				let x = element.position.x - (emoteSize / 2);
				
				ctx.drawImage(emote.material.canvas,
					x,
					(element.position.y) - height / 2,
					width,
					height
				);
				offset += width;
			}
			
			if(element.checkpoint >= paths[element.position.pathNumber].length)
			{
				pendingEmoteArray.splice(index, 1);
			}
		}
		
		ctx.drawImage(poolice, 790, 250, emoteSize, emoteSize);
		ctx.drawImage(poolice, 1060, 240, emoteSize, emoteSize);
		
		ctx.drawImage(backgroundCityOverlay, 0, 0, fullWidth, fullHeight);
		ctx.drawImage(backgroundTrees, 0, 0, fullWidth, fullHeight);
		ctx.drawImage(backgroundVing, 0, 0, fullWidth, fullHeight);
		
		salutePosX = easeInOutSine(direction, 0, 180, iters) + 1200;
		
		ctx.drawImage(lennySalute, salutePosX, salutePosY, saluteWidth, saluteHeight);
		ctx.drawImage(podium, salutePosX - 550, salutePosY + 200, podiumWidth, podiumHeight);
	}

	resize();

	init();
	draw();
})