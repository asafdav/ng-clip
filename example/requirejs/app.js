"use strict";

define([
    'angular',
    'ng-clip'
  ], function(angular) {
    var myapp = angular.module('myapp', ["ngClipboard"]);

    myapp.config(['ngClipProvider', function (ngClipProvider) {
      ngClipProvider.setPath("../../bower_components/zeroclipboard/dist/ZeroClipboard.swf");
    }]);

    myapp.controller('myctrl', function ($scope) {
      $scope.fallback = function (copy) {
        window.prompt('Press cmd+c to copy the text below.', copy);
      };

      $scope.showMessage = function () {
        console.log("clip-click works!");
      };
    });
  }
);
