'use strict';

angular.module('ngClipboard', []).
  value('ZeroClipboardPath', '/relative/path/to/ZeroClipBoard.swf').
  directive('clipCopy', ['$window', 'ZeroClipboardPath', function ($window, ZeroClipboardPath) {
    return {
      scope: {
        clipCopy: '&',
        clipClick: '&'
      },
      restrict: 'A',
      link: function (scope, element, attrs) {
        // Create the clip object
        var clip = new ZeroClipboard( element, {
          moviePath: ZeroClipboardPath
        });

        clip.on( 'mousedown', function(client) {
          client.setText(scope.$eval(scope.clipCopy));
          if (angular.isDefined(attrs.clipClick)) {
            scope.$apply(scope.clipClick);
          }
        });
      }
    }
  }]);
