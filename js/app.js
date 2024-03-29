var mainApp = angular.module('fingerCityApp', [ 'ionic' ]);

mainApp.controller('PromptionCtrl',['$scope','$http', function($scope, $http){
	$scope.items= [{
		"name":"one"
	},{
		"name":"two"
	}];
	
	$scope.onRemove = function(index){
		$scope.items.splice(index,1);
	};
}]);

mainApp.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('tabs', {
		url : "/tab",
		abstract : true,
		templateUrl : "templates/tabs.html"
	}).state('tabs.promption', {
		url : "/promption",
		views : {
			'promption-tab' : {
				templateUrl : "templates/promption.html"
				
			}
		}
	}).state('tabs.facts', {
		url : "/facts",
		views : {
			'home-tab' : {
				templateUrl : "templates/facts.html"
			}
		}
	}).state('tabs.facts2', {
		url : "/facts2",
		views : {
			'home-tab' : {
				templateUrl : "templates/facts2.html"
			}
		}
	}).state('tabs.about', {
		url : "/about",
		views : {
			'about-tab' : {
				templateUrl : "templates/about.html"
			}
		}
	}).state('tabs.navstack', {
		url : "/navstack",
		views : {
			'about-tab' : {
				templateUrl : "templates/nav-stack.html"
			}
		}
	}).state('tabs.contact', {
		url : "/contact",
		views : {
			'contact-tab' : {
				templateUrl : "templates/contact.html"
			}
		}
	});

	$urlRouterProvider.otherwise("/tab/promption");

});
