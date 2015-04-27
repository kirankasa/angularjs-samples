myApp.controller('StudentController', StudentController);

function StudentController($scope) {

    var students=[{firstName:'kiran',lastName:'kasa'},
        {firstName:'arun',lastName:'kumar'}
    ];

    $scope.students=students;

    $scope.addStudent= function(student){
        students.push(student);
        $scope.student={};
    }

    $scope.removeStudent= function(student){
        var index = students.indexOf(student);
        students.splice(index, 1);
    }
}