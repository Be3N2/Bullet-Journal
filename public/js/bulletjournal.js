
var yearStructure = [
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
	{"id": 7, "name": "Happy", "color": "#ff3af2"}
];

var saveObj = {
	"days": [],
	"events": []
}

var dataObj;
var loaded = false;

var canvas;

var calendarObj;

var eventsObj;

var headerObj;

var rectSize = 25;

function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);


	//CALENDAR
	let calpositionX = window.innerWidth / 2 - window.innerWidth / 5;
	let calpositionY = window.innerHeight / 5;

	calendarObj = new calendar(12 * rectSize,12 * rectSize * 3,yearStructure,calpositionX,calpositionY);
	calendarObj.createDays();

	//EVENTS
	//let eventsposX = (window.innerWidth / 2) + ((window.innerWidth/ 5) - (12 * 25));
	let eventsposX = window.innerWidth / 2;
	let eventsposY = calpositionY;

	eventsObj = new events(window.innerWidth / 3, 12 * rectSize * 2, eventsposX, eventsposY, rectSize, addEvent);

	//HEADER
	headerObj = new header(window.innerWidth, window.innerHeight / 8, 0,0);
	

	//INITIAL RENDER

	background(255);

	//RENDER MAIN PAGE
	calendarObj.render();
	eventsObj.render();
	headerObj.render();

}

function draw() {

	//wait for data load
	if (!loaded && dataObj) {
		calendarObj.loadData(dataObj);
		eventsObj.loadData(dataObj.events);
		eventsObj.addEventButton(addEvent);
		loaded = true;
	}
}

function mouseClicked() {
	//console.log(mouseX + "  |  " + mouseY);
	
	//MAIN PAGE MOUSE UPDATE
	calendarObj.mouseAction(mouseX, mouseY);
	eventsObj.mouseAction(mouseX, mouseY);

}

window.onresize = function() {
	var w = window.innerWidth;
	var h = window.innerHeight;  
	canvas.size(w,h);
	width = w;
	height = h;

	//MAIN PAGE DATA UPDATE
	calendarObj.resize(window.innerWidth / 2 - window.innerWidth / 5, window.innerHeight / 5);
	calendarObj.render();

	eventsObj.resize(window.innerWidth/2, window.innerHeight / 5);
	eventsObj.render();

	headerObj.resize(window.innerWidth, window.innerHeight);
	headerObj.render();
};

function addEvent() {
	let eventData = eventsObj.getSelectedData();

	if (eventData) {
		calendarObj.addEvent(eventData.id, eventData.color, "");	
	} 
	
	saveData();
}

function saveData() {
	saveObj.events = eventKey;
	saveObj.days = calendarObj.getDayData();
	postData(saveObj);
}