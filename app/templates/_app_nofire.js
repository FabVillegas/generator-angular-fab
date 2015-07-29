angular.module('<%= app_name %>', [
  'ui.router'
]).
config( [ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise('example');

  $stateProvider.
	state('example', {
		url: '/example',
		templateUrl: 'states/example/exampleView.html',
		controller: 'exampleController'
	});

} ] );
