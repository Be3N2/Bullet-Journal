
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

var eventKey = {
	"1": {"id": 1, "data": {"name": "Angry, frustrated", "color": "#bd0c0c"}},
	"2": {"id": 2, "data": {"name": "Average, normal, uneventful", "color": "#ca4a26"}},
	"3": {"id": 3, "data": {"name": "Productive", "color": "#fff23a"}},
  "4": {"id": 2, "data": {"name": "Sick, tired, lazy", "color": "#00ac18"}},
  "5": {"id": 2, "data": {"name": "Sad, lonely", "color": "#22c5fe"}},
  "6": {"id": 2, "data": {"name": "Disappointed", "color": "#3022fe"}},
  "7": {"id": 2, "data": {"name": "Happy", "color": "#ff3af2"}},
};

var canvas;
var calendar;

var eventsObj;

var headerObj;

var rectSize = 25;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  let calpositionX = window.innerWidth / 2 - window.innerWidth / 5;
  let calpositionY = window.innerHeight / 5;

  calendar = new calendarObj(12 * 25,12 * 25 * 3,data,calpositionX,calpositionY);

  //let eventsposX = (window.innerWidth / 2) + ((window.innerWidth/ 5) - (12 * 25));
  let eventsposX = window.innerWidth / 2;
  let eventsposY = calpositionY;

  eventsObj = new events(window.innerWidth / 3, 12 * 25 * 3, eventKey, eventsposX, eventsposY, rectSize);
  
  headerObj = new header(window.innerWidth, window.innerHeight / 8, 0,0);
  background(255);
  
  calendar.createDays();

  calendar.render();
  eventsObj.createCategories();
  eventsObj.render();
  headerObj.render();

}

function draw() {
 
}

function mouseClicked() {
	//console.log(mouseX + "  |  " + mouseY);
	calendar.mouseAction(mouseX, mouseY);
}
window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;

  calendar.resize(window.innerWidth / 2 - window.innerWidth / 5, window.innerHeight / 5);
  calendar.render();

  eventsObj.resize(window.innerWidth/2, window.innerHeight / 5);
  eventsObj.render();

  headerObj.resize(window.innerWidth, window.innerHeight);
  headerObj.render();
};