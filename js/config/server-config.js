(function(angular, undefined) {
	'use strict';

	var _baseUrl = "http://localhost:3000/api/";

	angular.module('resume').constant('api', {
		skills: resourceOf('skills'),
        jobs: resourceOf('jobs')
    });

	function resourceOf(resourceName) {
		return _baseUrl + resourceName;
	}

})(angular);
