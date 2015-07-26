var app = angular.module('CoynoApp', ['ngMaterial', 'pascalprecht.translate']);

app
    .controller('AppCtrl', ['$scope', function($scope){
     
    }])
    .controller('LanguageCtrl', function ($scope, $translate) {
        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };
    });