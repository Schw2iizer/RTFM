var app = angular.module("rtfmApp", ["ngRoute", "firebase"]);

app.config(function($routeProvider){
	$routeProvider
		.when("/login", {
			templateUrl: "templates/loginView.html",
			controller: "loginCtrl"
		})
		.when("/threads", {
			templateUrl: "templates/threadsView.html",
			controller: "threadsCtrl"
		})
		.when("/threads/:threadId", {
			templateUrl: "templates/singleThreadView.html",
			controller: "singleThreadCtrl"
		})
		.otherwise({
			redirectTo: "/login"
		})
});

