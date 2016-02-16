(function(angular, undefined) {
	'use strict';

	angular.module('resume').controller('JobController', controller);

	controller.$inject = ['$routeParams', 'JobService', '$location'];

	function controller($routeParams, jobService, $location) {

        var vm = this;

        vm.job = {};
        vm.jobs = [];

        vm.initList = function() {

            vm.pageTitle = 'Jobs'

            jobService.getJobs().success(function(data){
                vm.jobs = data;
            });
        }

        vm.initDetails = function() {

            jobService.getJob($routeParams.id).success(function(data){

                vm.job = data;
                vm.pageTitle = data.name
            });

        }

        vm.initPersist = function() {

            if ($routeParams.id) {

                jobService.getJob($routeParams.id).success(function(data){

                    vm.job = data;
                    vm.pageTitle = data.name
                })

            } else {

                vm.job = {};
                vm.pageTitle = 'New Skill'
            }

        }

        vm.save = function(job) {
            jobService.save(vm.job).success(function(data){
                $location.url('jobs')
            });
        }

        vm.remove = function(job) {
            jobService.remove(job).success(function(data){
                vm.initList();
            });
        }

    }

})(angular);
