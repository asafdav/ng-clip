"use strict";

require.config({
    paths: {
        angular: '../../bower_components/angular/angular.min',
        'ng-clip': '../../dest/ng-clip.min',
        'zeroclipboard': '../../bower_components/zeroclipboard/dist/ZeroClipboard.min'
    },
    shim: {
        angular: { exports: 'angular' },
        'ng-clip': {
            deps: ['angular']
        }
    },
    priority: [
        'angular'
    ]
});

require(
    [
        'angular',
        'app'
    ], function(angular, app) {
        var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function() {
            angular.bootstrap(document, ['myapp']);
        });
    }
);
