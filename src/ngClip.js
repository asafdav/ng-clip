/*jslint node: true */
/*global ZeroClipboard */
'use strict';

angular.module('ngClipboard', []).
  provider('ngClip', function() {
    var self = this;
    this.path = '//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.1.1/ZeroClipboard.swf';
    return {
      setPath: function(newPath) {
       self.path = newPath;
      },
      $get: function() {
        return {
          path: self.path
        };
      }
    };
  }).
  run(['ngClip', function(ngClip) {
    ZeroClipboard.config({
      swfPath: ngClip.path,
      trustedDomains: ["*"],
      allowScriptAccess: "always",
      forceHandCursor: true
    });
  }]).
  directive('clipCopy', ['ngClip', function (ngClip) {
    return {
      scope: {
        clipCopy: '&',
        clipClick: '&'
      },
      restrict: 'A',
      link: function (scope, element, attrs) {
        // Create the client object
        var client = new ZeroClipboard(element);
        if (attrs.clipCopy === "") {
          scope.clipCopy = function(scope) {
            return element[0].previousElementSibling.innerText;
          };
        }
        client.on( 'ready', function(readyEvent) {

          client.on('copy', function (event) {
            var clipboard = event.clipboardData;
            clipboard.setData('text/plain', scope.$eval(scope.clipCopy));
          });

          client.on( 'aftercopy', function(event) {
            if (angular.isDefined(attrs.clipClick)) {
              scope.$apply(scope.clipClick);
            }
          });

          scope.$on('$destroy', function() {
            client.destroy();
          });
        });
      }
    };
  }]);
