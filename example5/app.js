var myApp = angular.module('myApp',[]);

myApp.controller('CharacterController', CharacterController);

function CharacterController($scope) {

    $scope.characters=[{screenName:'Rachel Green',realName:'Jennifer Anniston'},
        {screenName:'Ross Geller',realName:'David Schwimmer'},
        {screenName:'Monica Geller',realName:'Courteney Cox'},
        {screenName:'Chandler Bing',realName:'Matthew Perry'},
        {screenName:'Phoebe Buffay',realName:'Lisa Kudrow'},
        {screenName:'Joey Tribbiani',realName:'Matt LeBlanc'}
    ];

    //default sort
    $scope.sortBy='screenName';

}