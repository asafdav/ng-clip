'use strict';

angular.module('ngClipboard', []).
  provider('ngClip', function() {
    var self = this;
    this.path = '//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.2.3/ZeroClipboard.swf';
    return {
      setPath: function(newPath) {
       self.path = newPath
      },
      $get: function() {
        return {
          path: self.path
        };
      }
    }
  }).
  run(['$document', 'ngClip', function($document, ngClip) {
    ZeroClipboard.config({
      moviePath: ngClip.path,
      trustedDomains: ["*"],
      allowScriptAccess: "always",
      forceHandCursor: true
    });
  }]).
  directive('clipCopy', ['$window', 'ngClip', function ($window, ngClip) {
    return {
      scope: {
        clipCopy: '&',
        clipClick: '&'
      },
      restrict: 'A',
      link: function (scope, element, attrs) {
        // Create the clip object
        var clip = new ZeroClipboard(element);
        clip.on( 'load', function(client) {
          var onMousedown = function (client) {
            client.setText(scope.$eval(scope.clipCopy));
            if (angular.isDefined(attrs.clipClick)) {
              scope.$apply(scope.clipClick);
            }
          };
          client.on('mousedown', onMousedown);

          scope.$on('$destroy', function() {
            client.off('mousedown', onMousedown);
            client.unglue(element);
          });
        });
      }
    }
  }]);
