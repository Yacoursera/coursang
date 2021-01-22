(function () {
'use strict'

angular.module('LunchCheck', [])
	   .controller('CheckController', CheckController);

CheckController.$inject = ['$scope'];
function CheckController($scope) {

		$scope.lunchmessage = "";
		$scope.items = "";

$scope.LunchCal = function() {
	   	var items = $scope.items = "";
	   	var lunchmessage = $scope.lunchmessage;
	   	
	   	if (items == 0)
	   		message = "Enter data";
	   	else if (items.split(",").length < 4)
	   		message = "Don't worry, enjoy yourself!";
	   	else
	   		message = "Too much!";
	   	$scope.lunchmessage = message;
	   };
}();