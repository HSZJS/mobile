  var app = angular.module('rzSliderDemo', ['rzModule', 'ui.bootstrap']);
  
  app.controller('MainCtrl', function ($scope, $rootScope, $timeout, $modal) {
    //Minimal slider config
    $scope.minSlider = {
        value: 10
    };
  
  $scope.slider_ticks_values = {
        value: 5,
        options: {
            ceil: 10,
            floor: 0,
            showTicksValues: true
        }
    };