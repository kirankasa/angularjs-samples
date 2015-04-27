myApp.controller('EmployeeController', EmployeeController);

function EmployeeController($scope) {

    var employees=[{firstName:'kiran',lastName:'kasa'},
        {firstName:'arun',lastName:'kumar'}
    ];

    $scope.employees=employees;

    $scope.addEmployee= function(employee){
        employees.push(employee);
        $scope.employee={};
    }

    $scope.removeEmployee= function(employee){
        var index = employees.indexOf(employee);
        employees.splice(index, 1);
    }
}