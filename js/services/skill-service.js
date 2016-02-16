(function(angular, undefined) {
	'use strict';

	angular.module('resume').factory('SkillService', environmentService);

	environmentService.$inject = ['$http', 'api'];

	function environmentService($http, api) {
		return {
			getSkill: getSkill,
            getSkills: getSkills,
            save: save,
            remove: remove
        };

        function getSkill(id) {
            return $http.get(api.skills + '/' + id);
        }

        function getSkills() {
         return $http.get(api.skills);
     }

     function save(skill) {
         if(skill._id) {
            return $http.put(api.skills + '/' + skill._id, skill);
        } else {
            return $http.post(api.skills, skill);
        }
    }

    function remove(skill) {
        return $http.delete(api.skills + '/' + skill._id);
    }

}

})(angular);
