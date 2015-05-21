var app = angular.module('Library', []);

app.controller('MainController', function ($scope) {

    $scope.books = [
        {
            title: 'Neuromancer',
            author: 'William Gibson',
            description: 'A really good book about AI.'
        },
        {
            title: 'Do Androids Dream of Electric Sheep?',
            author: 'Philip K. Dick',
            description: 'Another really good book about AI.'
        },
        {
            title: 'Ender\'s Game',
            author: 'Orson Scott Card',
            description: 'A really good book about children playing "games".'
        }
    ];

    $scope.setCurrentBook = function (book) {
        $scope.currentBook = book;
    };

    $scope.currentBook = null;

});

app.controller('BookController', function ($scope) {

    $scope.alertHowMuchILoveBook = function (book) {
        alert('Gosh I really love ' + book.title);
    };

});

app.controller('NavigationController', function ($scope) {

    $scope.pageTitle = 'Library!';



});