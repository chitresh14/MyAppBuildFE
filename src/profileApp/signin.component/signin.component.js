'use strict';

// Register `signUpComponent` component, along with its associated controller and template
export default angular.
module('mainModule').
component('signInComponent', {
    templateUrl: '/src/profileApp/signin.component/signin.component.html',
    controller: ['userService',
        function signInController(userService) {
            var signInVm = this;
            signInVm.isSignInVisibile = true;
            signInVm.password = null;
            signInVm.email = null;
            signInVm.isValidated = true;
            signInVm.isRegisterError = false;

            signInVm.visibleSignInModal = function(isSignInView) {
                signInVm.isSignInVisibile = isSignInView;
            }

            signInVm.loginUser = function() {
                var loginData = {
                    "email": signInVm.email,
                    "password": signInVm.password
                }

                signInVm.loginDataValidation();

                userService.signInUser(loginData, function(response) {
                    if (response && response.data && response.data.code == 201 && response.data.msg) {
                        signInVm.isRegisterError = false;
                    } else if (response && response.data && response.data.code == 409) {
                        signInVm.isRegisterError = false;
                    } else {
                        signInVm.isRegisterError = true;
                        console.log("Something went wrong. PLease try again later.")
                    }
                });
            }

            signInVm.loginDataValidation = function() {
                if (signInVm.email && validateEmail(signInVm.email) && signInVm.password) {
                    signInVm.isValidated = true;
                } else {
                    signInVm.isValidated = false;
                }
            }

            function validateEmail(mail) {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signInVm.email)) {
                    return (true)
                }
                return (false);
            }
        }
    ]
});