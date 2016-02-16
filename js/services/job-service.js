(function(angular, undefined) {
	'use strict';

	angular.module('resume').factory('JobService', environmentService);

	environmentService.$inject = ['$http', 'api'];

	function environmentService($http, api) {
		return {
			getJob: getJob,
            getJobs: getJobs,
            save: save,
            remove: remove
        };

        function getJob(id) {
            return $http.get(api.jobs + '/' + id);
        }

        function getJobs() {
         return $http.get(api.jobs);
     }

     function save(job) {
        if(job._id) {
            return $http.put(api.jobs + '/' + job._id, job);
        } else {
            return $http.post(api.jobs, job);
        }
    }

    function remove(job) {
        return $http.delete(api.jobs + '/' + job._id);
    }

}

})(angular);
