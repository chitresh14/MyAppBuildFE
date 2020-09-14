'use strict';

// Register mainApp component, along with its associated controller and template.

angular.
module('mainModule').
component('mainAppComponent', {
    templateUrl: '/src/profileApp/profile_main.html',
    controller: [
        function mainAppComponentController() {
            var mainAppVm = this;
            mainAppVm.screenHeight = window.screen.height;
        }
    ]
});