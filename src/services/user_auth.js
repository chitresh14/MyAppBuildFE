const baseUrl = "http://localhost:4000/";

function userService($http) {
    this.registerUser = function(userData, cb) {
        $http.post(baseUrl + 'registerUser', userData)
            .then(function(response) {
                console.log(response);
                if (response && response.data) {
                    cb(response);
                } else {
                    cb(null);
                    console.log("Handle Response Error.");
                }
            }, function(error) {
                if (error) {
                    cb(error);
                } else {
                    cb(null);
                    console.log("Handle Rejection.");
                }
            });
    }

    this.signInUser = function(loginData, cb) {
        $http.post(baseUrl + 'signIn', loginData)
            .then(function(response) {
                console.log(response);
                if (response && response.data) {
                    cb(response);
                } else {
                    cb(null);
                    console.log("Handle Response Error.");
                }
            }, function(error) {
                if (error) {
                    cb(error);
                } else {
                    cb(null);
                    console.log("Handle Rejection.");
                }
            });
    }
}

export default angular.module('userServiceModule', [])
    .service('userService', ['$http', userService]);