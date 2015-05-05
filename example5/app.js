var myApp = angular.module('myApp',[]);

myApp.controller('CharacterController', CharacterController);

//here $scope object gets injected by angular
function CharacterController($scope) {

    //adding an array to access in view
    $scope.characters=[{screenName:'Rachel Green',realName:'Jennifer Anniston'},
        {screenName:'Ross Geller',realName:'David Schwimmer'},
        {screenName:'Monica Geller',realName:'Courteney Cox'},
        {screenName:'Chandler Bing',realName:'Matthew Perry'},
        {screenName:'Phoebe Buffay',realName:'Lisa Kudrow'},
        {screenName:'Joey Tribbiani',realName:'Matt LeBlanc'}
    ];

    //adding a property to access in view
    $scope.sortBy='screenName';

}