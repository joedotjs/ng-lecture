var app = angular.module('JoesApp', []);

app.controller('MainController', function ($scope) {

    $scope.shouldHide = false;

    $scope.person = {
        name: 'Joe',
        age: 27,
        location: 'Right up here obviously'
    };

    $scope.puppies = [
        { name: 'Max', breed: 'Havanese', cute: true },
        { name: 'Nugget', breed: 'Havanese', cute: true },
        { name: 'Doge', breed: 'Shiba Inu', cute: true },
        { name: 'Patty', breed: 'Cairn Terrier', cute: false }
    ];

    $scope.showPerson = function () {
        $scope.shouldHide = false;
    };

    $scope.hidePerson = function () {
        $scope.shouldHide = true;
    };

    setTimeout(function () {
        $scope.puppies.unshift({
            name: 'Cocoa',
            breed: 'Shitzu',
            cute: true
        });
        $scope.$digest();
    }, 3000);

});