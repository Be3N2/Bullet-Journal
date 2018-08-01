
var apiUrl = appUrl + '/api:id/yearData';


//use jquery or whatever to interact with front end
//var dataDisplay = document.querySelector('.datadisplay');

function updateData (data) {
	if (dataObj) console.log(dataObj);
	if (data) 
		dataObj = JSON.parse(data);
	//console.log(dataObj);
}

ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateData));

/*
Example code for add and delete data
with POST and GET requests
reference: http://www.clementinejs.com/tutorials/tutorial-passport.html#PassportClient-SideIntegration
*/

/*
deleteButton.addEventListener('click', function () {

	ajaxFunctions.ajaxRequest('DELETE', apiUrl, function () {
		ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
	});

}, false);
*/


function postData(data) {
	
	ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
		ajaxFunctions.ajaxRequest('GET', apiUrl, updateData);
	}, data);

}