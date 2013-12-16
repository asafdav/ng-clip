'use strict';

angular.module('ngClipboard', []).
  value('ZeroClipboardConfig', {
    path: '//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.1.7/ZeroClipboard.swf'
  }).
  directive('clipCopy', ['$window', 'ZeroClipboardConfig', function ($window, ZeroClipboardConfig) {
    return {
      scope: {
        clipCopy: '&',
        clipClick: '&'
      },
      restrict: 'A',
      link: function (scope, element, attrs) {
        // Create the clip object
        var clip = new ZeroClipboard( element, {
          moviePath: ZeroClipboardConfig.path,
          trustedDomains: ['*'],
          allowScriptAccess: "always"          
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
