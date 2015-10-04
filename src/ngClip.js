/*jslint node: true */
/*global ZeroClipboard */

(function (window, angular) {
  'use strict';


  /**
   * Loads clipboard.js Asynchronously
   * @type {*[]}
   * @private
   */
  var _loadCLipboardjs = [
    '$window', '$document', 'ngClipConfig', '$isReady',
    function ($window, $document, ngClipConfig, $isReady) {
      (function (d) {
        var js, r = false, id = 'clipboard-js', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = ngClipConfig.path;
        js.onload = js.onreadystatechange = function () {
          if (!r && (!this.readyState || this.readyState == 'complete')) {
            r = true;
            $isReady.resolve();
          }
        };
        ref.parentNode.insertBefore(js, ref);
      }($document[0]));
    }];

  angular.module('ngClipboard', []).
    provider('ngClip', ['$injector', function ($injector) {
      var self = this;
      this.path = '//cdn.rawgit.com/zenorocha/clipboard.js/master/dist/clipboard.min.js';
      this.loadCjs = false;
      this.triggerClass = 'ng-clip-trigger';

      /**
       * Returns the text to copy
       * @param trigger
       */
      function getCopyText(trigger) {
        console.log('trigger', trigger);
        var el = angular.element(trigger);
        var $scope = el.isolateScope();
        return $scope.$eval($scope.clipCopy);
      }

      return {
        setTriggetClass: function (triggerClass) {
          self.triggerClass = triggerClass;
        },
        setPath: function (newPath) {
          self.path = newPath;
        },
        setLoadCjs: function (loadCjs) {
          self.loadCjs = loadCjs;
        },
        $get: ['$q', function ($q) {
          var $isReady = $q.defer();
          self.clipboard = null;

          // Loads clipboard.js if needed
          if (!!self.loadCjs) {
            $injector.invoke(_loadCLipboardjs, null, {
              'ngClip': self,
              $isReady: $isReady
            });
          } else {
            $isReady.resolve();
          }

          // Initializes Clipboard.js
          $isReady.promise.then(function () {
            self.clipboard = new Clipboard('.' + self.triggerClass, {
              text: function (trigger) {
                return getCopyText(trigger);
              }
            });
          });


          return {
            triggerClass: self.triggerClass,
            path: self.path,
            loadCjs: self.loadCjs,
            clipboard: self.clipboard
          };
        }]
      };
    }]).
    directive('clipCopy', ['ngClip', function (ngClip) {
      return {
        scope: {
          clipCopy: '&',
          clipClick: '&',
          clipClickFallback: '&'
        },
        restrict: 'A',
        link: function (scope, element, attrs) {
          element.addClass(ngClip.triggerClass);
        }
      };
    }]);
})(window, window.angular);

