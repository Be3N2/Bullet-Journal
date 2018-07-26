
(function () {

	//use jquery or whatever to interact with front end

	var dataDisplay = document.querySelector('.datadisplay');
	var apiUrl = appUrl + '/api:id/yearData';

	function updateData (data) {
		var dataObject = JSON.parse(data);
		dataDisplay.innerHTML = dataDisplay;
	}

	ajaxFunctions.ready(ajaxRequest('GET', apiUrl, updateData));

	/*
	Example code for add and delete data
	with POST and GET requests
	reference: http://www.clementinejs.com/tutorials/tutorial-passport.html#PassportClient-SideIntegration
	addButton.addEventListener('click', function () {

		ajaxRequest('POST', apiUrl, function () {
			ajaxRequest('GET', apiUrl, updateClickCount);
		});

	}, false);

	deleteButton.addEventListener('click', function () {

		ajaxRequest('DELETE', apiUrl, function () {
			ajaxRequest('GET', apiUrl, updateClickCount);
		});

	}, false);
	*/



})();