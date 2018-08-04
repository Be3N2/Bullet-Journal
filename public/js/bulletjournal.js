
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
	{"id": 1, "name": "Angry, frustrated", "color": "#B21700", "count": 0},
	{"id": 2, "name": "Average, normal, uneventful", "color": "#ca4a26", "count": 0},
	{"id": 3, "name": "Productive", "color": "#fff23a", "count": 0},
	{"id": 4, "name": "Sick, tired, lazy", "color": "#00ac18", "count": 0},
	{"id": 5, "name": "Sad, lonely", "color": "#22c5fe", "count": 0},
	{"id": 6, "name": "Disappointed", "color": "#3022fe", "count": 0},
	{"id": 7, "name": "Happy", "color": "#ff3af2", "count": 0}
];

var saveObj = {
	"days": [],
	"events": []
}

var loaded = false;

var canvas;

var headerObj;

//CALENDAR
var calendarObj;
var eventsObj;

//GRAPHS
var bargraphObj;
//piechart

var calendarTabBtn, graphsTabBtn;
var page = "GRAPHS";

var rectSize = 25;

function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);

	headerObj = new header(window.innerWidth, window.innerHeight / 8, 0,0);
	
	//CALENDAR
	let calpositionX = window.innerWidth / 2 - window.innerWidth / 5;
	let calpositionY = window.innerHeight / 5;

	calendarObj = new calendar(12 * rectSize,12 * rectSize * 3,yearStructure,calpositionX,calpositionY);
	calendarObj.createDays();

	//EVENTS
	let eventsposX = window.innerWidth / 2;
	let eventsposY = calpositionY;

	eventsObj = new events(window.innerWidth / 3, 12 * rectSize * 2, eventsposX, eventsposY, rectSize, addEvent);

	//GRAPHS
	let bargraphposX = (window.innerWidth - (window.innerWidth * .6)) / 2;
	let bargraphposY = window.innerHeight / 5;
	bargraphObj = new bargraph(window.innerWidth * .6, window.innerHeight /2, bargraphposX, bargraphposY);

	//INITIAL RENDER

	background(255);

	//RENDER MAIN PAGE
	renderObjs();
	
	//render this last so always on top!
	headerObj.render();		
	tabs();
}

function draw() {

	
	
}

//Called from dataController ever time there is a data response
function loadObjects(dataObj) {
	//wait for initial data load (when loaded is still false)
	if (!loaded && dataObj) {
		eventsObj.addEventButton(addEvent);
		if (page == "GRAPHS") eventsObj.hideButton();
		loaded = true;
	}

	//load/update all the objects with the new data
	eventsObj.loadData(dataObj.events);
	calendarObj.loadData(dataObj);
	bargraphObj.loadData(dataObj.events);

	renderObjs();
}

function renderObjs() {
	//clear canvas
	background(255);

	if (page == "CALENDAR") {
		calendarObj.render();
		eventsObj.render();
	} else if (page == "GRAPHS") {
		bargraphObj.render();
	}
	headerObj.render();	
}

function mouseClicked() {
	
	//MAIN PAGE MOUSE UPDATE
	if (page == "CALENDAR") {
		calendarObj.mouseAction(mouseX, mouseY);
		eventsObj.mouseAction(mouseX, mouseY);
	} else if (page == "GRAPHS") {

	}

}

window.onresize = function() {
	var w = window.innerWidth;
	var h = window.innerHeight;  
	canvas.size(w,h);

	//RESIZE
	calendarObj.resize(window.innerWidth / 2 - window.innerWidth / 5, window.innerHeight / 5);
	eventsObj.resize(window.innerWidth/2, window.innerHeight / 5);
	bargraphObj.resize((window.innerWidth - bargraphObj.WIDTH) / 2, window.innerHeight / 5);
	headerObj.resize(window.innerWidth, window.innerHeight);

	//RENDER
	renderObjs();
		
	let y = calendarObj.offsetY + calendarObj.HEIGHT;
	calendarTabBtn.position(window.innerWidth / 2 - 75 - 118, y);
	graphsTabBtn.position(window.innerWidth / 2 + 75 - 118, y);

};

function addEvent() {
	let eventData = eventsObj.getSelectedData();

	if (eventData) {
		calendarObj.addEvent(eventData.id, eventData.color, "");	
	} 
	
	saveData();
}

function saveData() {
	saveObj.events = eventsObj.getEventData();
	saveObj.days = calendarObj.getDayData();
	postData(saveObj);
}

function tabs() {
	let y = calendarObj.offsetY + calendarObj.HEIGHT;

	calendarTabBtn = createButton("Calander");
	calendarTabBtn.class("tabs active");
	calendarTabBtn.position(window.innerWidth / 2 - 75 - 118, y);

	graphsTabBtn = createButton("Graphs");
	graphsTabBtn.class("tabs");
	graphsTabBtn.position(window.innerWidth / 2 + 75 -118, y);

	calendarTabBtn.mousePressed(function() {
		
		//button styling
		calendarTabBtn.removeClass("active");
		graphsTabBtn.removeClass("active");

		calendarTabBtn.addClass("active");

		if (page != "CALENDAR") {
			page = "CALENDAR";
			renderObjs();	
		}
	});

	graphsTabBtn.mousePressed(function() {

		//button styling
		calendarTabBtn.removeClass("active");
		graphsTabBtn.removeClass("active");

		graphsTabBtn.addClass("active");
	
		if (page != "GRAPHS") {
			page = "GRAPHS";
			renderObjs();	
			eventsObj.hideButton();
		}
	});
}	
