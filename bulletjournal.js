
var data = [
	{"name": "J", "days": 31},
	{"name": "F", "days": 28},
	{"name": "M", "days": 31},
	{"name": "A", "days": 30},
	{"name": "M", "days": 31},
	{"name": "J", "days": 30},
	{"name": "J", "days": 31},
	{"name": "A", "days": 31},
	{"name": "S", "days": 30},
	{"name": "O", "days": 31},
	{"name": "N", "days": 30},
	{"name": "D", "days": 31}
];

var eventKey = [
	{"id": 1, "name": "Angry, frustrated", "color": "#B21700"},
	{"id": 2, "name": "Average, normal, uneventful", "color": "#ca4a26"},
	{"id": 3, "name": "Productive", "color": "#fff23a"},
	{"id": 4, "name": "Sick, tired, lazy", "color": "#00ac18"},
	{"id": 5, "name": "Sad, lonely", "color": "#22c5fe"},
	{"id": 6, "name": "Disappointed", "color": "#3022fe"},
	{"id": 7, "name": "Happy", "color": "#ff3af2"},
];

var saveObj = {
	"days": {},
	"events": {}
}

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

  eventsObj = new events(window.innerWidth / 3, 12 * 25 * 3, eventKey, eventsposX, eventsposY, rectSize, addEvent);

  headerObj = new header(window.innerWidth, window.innerHeight / 8, 0,0);
  background(255);
  
  calendar.createDays();

  calendar.render();
  eventsObj.createCategories();
  eventsObj.addEventButton(addEvent);

  eventsObj.render();
  headerObj.render();

}

function draw() {

}

function mouseClicked() {
	//console.log(mouseX + "  |  " + mouseY);
	
	calendar.mouseAction(mouseX, mouseY);
	eventsObj.mouseAction(mouseX, mouseY);

}

function doubleClicked() {
	let id = eventsObj.getSelectedId();
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

function addEvent() {
	let selectedNum = calendar.selectedIndex;
	let eventData = eventsObj.getSelectedData();

	if (eventData) {
		let col = eventData.color;
		calendar.addEvent(eventData.color);	
	} 
	
}