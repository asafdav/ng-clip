'use strict';

angular.module('ngClipboard', []).
  value('ZeroClipboardConfig', {
    path: '//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.2.3/ZeroClipboard.swf'
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

        var onMousedown = function (client) {
          client.setText(scope.$eval(scope.clipCopy));
          if (angular.isDefined(attrs.clipClick)) {
            scope.$apply(scope.clipClick);
          }
        };
        clip.on('mousedown', onMousedown);

        scope.$on('$destroy', function() {
          clip.off('mousedown', onMousedown);
          clip.unglue(element);
        });
      }
    }
  }]);
