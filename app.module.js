'use strict';

//***************Custom imports *************************
// Note: import Should be in reverse order of its dependencies i.e Child to Parnet 
//(It should as per the module of angularjs)
// *****************************Services********************************************
import userServiceModule from './src/services/user_auth.js';

import mainModule from './src/profileApp/main.module.js';
import routeConfig from './app.route.js';
import signUp from './src/profileApp/signup.component/signup.component.js';
import signIn from './src/profileApp/signin.component/signin.component.js';
import mainApp from './src/profileApp/profile_main.js';


//Define the starting module of application.
angular.module('profileApp', [
    'ngRoute',
    'mainModule',
    'userServiceModule'
]).config(routeConfig);
	