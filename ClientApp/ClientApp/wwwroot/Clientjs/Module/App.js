var app = angular.module("app", ['ngRoute']);



app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: '/Index',
        controller: 'LoadAllEmployeeController'
    }).when('/EditEmployee/:id', {
        templateUrl: '/EditEmployee',
        controller: 'EditEmployeeController'
    }).when('/AddEmployee', {
        templateUrl: '/AddEmployee',
        controller: 'AddEmployeeController'
    }).otherwise({
        redirectTo: "/"
    })
})
