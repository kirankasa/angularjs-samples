//this module is dependent on ngRoute module,
// so we should load it first
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/employee', {
        templateUrl: 'employee.html',
        controller: EmployeeController
    });


    $routeProvider.when('/student', {
        templateUrl: 'student.html',
        controller: StudentController
    });

    $routeProvider.otherwise({redirectTo: '/employee'});
}]);