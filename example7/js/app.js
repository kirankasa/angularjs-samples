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