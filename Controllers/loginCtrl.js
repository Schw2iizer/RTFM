var app = angular.module("rtfmApp");

app.controller("loginCtrl", function($scope, environmentService, $location){

	$scope.login = (function(username){
		environmentService.saveUsername(username);	
		console.log(environmentService.getUsername());
		$location.path("/threads");
	})
})