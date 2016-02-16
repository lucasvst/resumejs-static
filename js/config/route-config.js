(function(angular, undefined) {
	'use strict';

	angular.module('resume').config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
		$routeProvider

        .when('/skills', {
            templateUrl: 'view/skill/list.html',
            controller: 'SkillController',
            controllerAs: 'vm'
        })

        .when('/skills/create', {
            templateUrl: 'view/skill/form.html',
            controller: 'SkillController',
            controllerAs: 'vm'
        })

        .when('/skills/update/:id', {
            templateUrl: 'view/skill/form.html',
            controller: 'SkillController',
            controllerAs: 'vm'
        })

        .when('/skills/:id', {
            templateUrl: 'view/skill/details.html',
            controller: 'SkillController',
            controllerAs: 'vm'
        })

        .when('/jobs', {
            templateUrl: 'view/job/list.html',
            controller: 'JobController',
            controllerAs: 'vm'
        })

        .when('/jobs/create', {
            templateUrl: 'view/job/form.html',
            controller: 'JobController',
            controllerAs: 'vm'
        })

        .when('/jobs/update/:id', {
            templateUrl: 'view/job/form.html',
            controller: 'JobController',
            controllerAs: 'vm'
        })

        .when('/jobs/:id', {
            templateUrl: 'view/job/details.html',
            controller: 'JobController',
            controllerAs: 'vm'
        })

        .otherwise({ redirectTo: '/skills' })
    }

})(angular);
