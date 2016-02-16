(function(angular, undefined) {
	'use strict';

	angular.module('resume').controller('SkillController', controller);

	controller.$inject = ['$routeParams', 'SkillService', '$location', ];

	function controller($routeParams, skillService, $location) {

        var vm = this;

        vm.skills = [],
        vm.skill = {};

        vm.initList = function() {

            vm.pageTitle = 'Skills'

            skillService.getSkills().success(function(data){
                vm.skills = data;
            });
        }

        vm.initDetails = function() {

            skillService.getSkill($routeParams.id).success(function(data){

                vm.skill = data;
                vm.pageTitle = data.name
            });

        }

        vm.initPersist = function() {

            if ($routeParams.id) {

                skillService.getSkill($routeParams.id).success(function(data){

                    vm.skill = data;
                    vm.pageTitle = data.name
                })

            } else {

                vm.skill = {};
                vm.pageTitle = 'New Skill'
            }

        }

        vm.save = function(skill) {

            skillService.save(vm.skill).success(function(data){
                $location.url('skills')
            });
        }

        vm.remove = function(skill) {

            skillService.remove(skill).success(function(data){
                vm.initList();
            });
        }

    }

})(angular);
