//for connecting to html
var myLink;
var cv;

//for creating patterns
var whichPattern;
var R = 0;
var G = 0;
var B = 0;
var resolution = 0;

var textLength; //length
var para1; //E
var para2; //I
var para3; //A
var para4; //T
var just_start;


var inputTxt = "";


var countE = 0;
var countT = 0;
var countA = 0;
var countI = 0;

var whichPattern = 0;

//for the original data
var Opara1 = 0;
var Opara2 = 0;
var Opara3 = 0;
var Opara4 = 0;


function setup() {
	cv = createCanvas(windowWidth, windowHeight, WEBGL);
	cv.parent("cvs_div");
	background(0);

	//for the link
	myLink = createA('homepage.html', 'this is a link');
	myLink.style('display', 'none');
}

function draw() {
	switch (whichPattern) {
		//pattern1
		case 0:
			//setup, looping
			background(230, 138, 155);
			resolution = 40;
			//setup, one time
			//if just enter the case
			if (just_start) {
				R = 50;
				G = 91;
				B = 132;

				para1 = int(map(Opara1, 0, 50, 100, 150));
				para2 = int(map(Opara2, 0, 50, -100, -40));
				para3 = int(map(Opara3, 0, 50, 50, 100));
				//for para4
				if (Opara4 < 10) {
					para4 = -1;
				} else {
					para4 = 1;
				}
				just_start = false;
			}


			//draw
			for (var a = 0; a < para1; a += resolution) { //para1: 100-150 
				for (var x = para2; x < 200; x += resolution) { //para2: -40,-100
					rotateY(frameCount * 0.003);
					rotateX(frameCount * 0.003);
					// rotateZ(radians(a));
					var y = sin((x + frameCount) * 0.02) * para3; //para3: 50-100
					pointLight(R, G, B, noise(y) * x, noise(y) * y, 0); //(r,g,b,x,y,z)

					drawSphere(x, y, 0, 10);

					drawSphere(-x, -2 * y, 0, 10); //para4: -1 or 1

				}
			}

			break;

			//pattern2
		case 1:
			//setup, looping
			R = 31 + abs(sin(frameCount * 0.01)) * 40;
			G = 13 + abs(sin(frameCount * 0.01)) * 40;
			B = 107 + abs(sin(frameCount * 0.01)) * 50;
			background(R, G, B);
			pointLight(R + 100, G + 200, B + 90, width / 2, height / 2, 0); //(r,g,b,x,y,z)
			resolution = 15;
			//setup, one time
			//if just enter the case
			if (just_start) {

				//para1
				if (Opara1 < 13) {
					para1 = -1;
				} else {
					para1 = 1;
				}
				para2 = int(map(Opara2, 0, 50, -6, 2));

				just_start = false;
			}

			//draw
			for (var x = -200; x < 200; x += resolution) {

				if (para1 == -1) {
					rotateY(frameCount * 0.002);
				} else {
					rotateZ(frameCount * 0.002);
				} //rotate Z or rotate Y  //para1

				var y = sin((x + frameCount) * 0.001) * 20;
				drawSphere(para2 * x, y, 0, 10); //para2
				drawSphere(2 * x, -y, 0, 10);
			}


			break;
			//pattern3
		case 2:
			//setup, looping
			R = 60 + 60 * sin(frameCount * 0.01 + 7);
			G = -15 + 5 * sin(frameCount * 0.01 + 3);
			B = 50 + 130 * sin(frameCount * 0.01);
			background(R + 20, G + 20, B + 20);

			//setup, one time
			//if just enter the case
			if (just_start) {

				//para1
				para1 = int(map(Opara1, 0, 50, 15, 25));
				para2 = int(map(Opara2, 0, 50, 2, 20));
				para3 = int(map(Opara3, 0, 50, 30, 300));
				para4 = int(map(Opara4, 0, 50, -300, 0));

				just_start = false;
			}


			//draw
			resolution = para1; //para1
			for (var a = 0; a < 180; a += resolution) {
				push();
				rotateY(radians(a));
				for (var angle = 0; angle < 360; angle += resolution) {
					var val = sin(radians(angle * para2 + a * 2)) * 10 + para3; //(2,20),(2,20),(30,300) para2, para2,para3
					var rad = 200 + val; //(200,300)) 
					var x = cos(radians(angle)) * rad * cos(noise(frameCount * 0.01));
					var y = sin(radians(angle)) * rad * sin(noise(frameCount * 0.01));

					if (para3 < 150) {
						rotateX(frameCount * 0.002);
					} else {
						rotateY(frameCount * 0.002);
					}

					rotateZ(frameCount * 0.001 - 300); //para rotateX, rotateY, rotateZ   //(-300,0)//para4
					//rotateX(frameCount * 0.002); //para rotateX, rotateY, rotateZ

					drawPlane(x, y, 0, 15);

				}
				pop();
			}


			break;

			//pattern4
		case 3:
			//setup, looping
			background(0, 0, 255);
			R = 0 + abs(sin(frameCount * 0.01)) * 200;
			G = 87 + abs(sin(frameCount * 0.01)) * 113;
			B = 231 - abs(sin(frameCount * 0.01)) * 30;
			background(R, G, B);
			rotateY(frameCount * 0.003);
			pointLight(R + 255, G + 80, B - 230, width / 2, height / 2, 0); //(r,g,b,x,y,z)

			//setup, one time
			//if just enter the case
			if (just_start) {

				//para1
				para1 = int(map(Opara1, 0, 50, -20, -5));
				para2 = int(map(Opara2, 0, 50, -80, -30));
				para3 = int(map(Opara3, 0, 50, 5, 7));
				para4 = int(map(Opara4, 0, 50, 5, 8));

				console.log("para1" + para1);
				console.log("para2" + para2);
				console.log("para3" + para3);
				console.log("para4" + para4);

				just_start = false;
			}

			//draw
			for (var j = 0; j < para4; j++) { //para4: j(15-25)
				push();
				rotateY(radians(j * j));

				for (var i = 0; i < 20; i++) {
					translate(cos(frameCount * 0.001 + i) * 100 + para1, sin(frameCount * 0.001 + i) * 100 + para2, i * 0.1); //para1 (-5,-20), para2(-30,-80)
					rotateZ(frameCount * 0.002);
					push();

					drawSphere(8, 6, 4, para3); //para3 , size(5,8)
					pop();
				}
				pop();
			}

			break;

	}
}


// function mousePressed() {
// 	whichPattern = floor(random(4)); //0,1,2,3
// 	//reset
// 	// para1 = 17; //E
// 	// para2 = 10; //I
// 	// para3 = 10; //A
// 	// para4 = 14; //T
// 	just_start = true;
// }



//draw 3d object

//draw a 3d object
function drawSphere(x, y, z, size) {
	push();
	translate(x, y, z);
	sphere(size);
	pop();
}

function drawPlane(x, y, z, size) {

	push();
	translate(x, y, z);
	pointLight(R, G, B, x, y, 0); //(r,g,b,x,y,z)
	plane(size); //para
	pop();
}

//for the input text processing
function analyze() {
	// console.log("clicked");
	just_start = true;
	inputTxt = document.getElementById("TextArea").value.trim();
	for (var i = 0; i < inputTxt.length; i++) {
		var letter = inputTxt[i].toUpperCase();
		//check different letters
		if (letter == "E") {
			Opara1 += 1;
		} else if (letter == "T") {
			Opara2 += 1;
		} else if (letter == "A") {
			Opara3 += 1;
		} else if (letter == "I") {
			Opara4 += 1;
		}
	}


	//to hide and show
	document.getElementById("walkThrough").style.display = "none";
	document.getElementById("textinput").style.display = "none";
	document.getElementById("cvs_div").style.display = "block";

	whichPattern = inputTxt.length;
	console.log(whichPattern);

	if (whichPattern < 30) {
		whichPattern = 0;
	} else if (whichPattern < 80) {
		whichPattern = 1;
	} else if (whichPattern < 140) {
		whichPattern = 2;
	} else {
		whichPattern = 3;
	}



	console.log("after:" + whichPattern);


}