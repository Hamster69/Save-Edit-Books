(function() {
    'use strict';
    
    angular
        .module('app')
        .config(appRun);
        
    appRun.$inject = ['$urlRouterProvider', '$stateProvider'];

	function appRun($urlRouterProvider, $stateProvider) {
	    
	    $urlRouterProvider.otherwise('/bookList');
	    
		$stateProvider
		.state('book-list', {
			url: '/bookList',
			templateUrl: 'Views/book-list.template.html',
			title: 'Book List',
			controller: "BookListController",
			controllerAs: 'vm'
		});
	}
})();