
var data = {
	"1": {"name": "J", "days": 31},
	"2": {"name": "F", "days": 28},
	"3": {"name": "M", "days": 31},
	"4": {"name": "A", "days": 30},
	"5": {"name": "M", "days": 31},
	"6": {"name": "J", "days": 30},
	"7": {"name": "J", "days": 31},
	"8": {"name": "A", "days": 31},
	"9": {"name": "S", "days": 30},
	"10": {"name": "O", "days": 31},
	"11": {"name": "N", "days": 30},
	"12": {"name": "D", "days": 31}
};

var canvas;
var calendar;

function setup() {
  canvas = createCanvas(12 * 25, 12 * 25 * 3);
  canvas.parent("#canvas");

  calendar = new calendarObj(WIDTH,HEIGHT,data);

  background(180);
  
  calendar.createDays();

  calendar.render();

}

function draw() {
 
}

function mouseClicked() {

	calendar.mouseAction(mouseX, mouseY);

}
