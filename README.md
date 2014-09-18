ngClip - Copy to clipboard using AngularJS
=======

An AngularJS simple directive that uses ZeroClipboard and updates the user's clipboard.


## Usage
1. Get ng-clip and ZeroClipboard via **[Bower](http://bower.io/)** by running the below in your console:
  ```
  bower install zeroclipboard ng-clip
  ```

2. Add ng-clip.js and ZeroClipboard.js to your main file (index.html)

3. Update the .swf path location using ngClipProvider
  ```javascript
    .config(['ngClipProvider', function(ngClipProvider) {
      ngClipProvider.setPath("bower_components/zeroclipboard/dist/ZeroClipboard.swf");
    }]);
  ```

4. Set `ngClipboard` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['ngClipboard'])
  ```

5. Add clip-copy directive to the wanted element, example:
  ```html
  <a href="" clip-copy="getTextToCopy()" clip-click="doSomething()">Copy</a>
  ```

6. You can optionally override zeroclipboard config parameters using ngClipProvider
  ```javascript
      ngClipProvider.setConfig({
        zIndex: 50
      });
  ```

7. You can also optionally provide a fallback function that gets called if flash is unavailable:
  ```html
  <a href="" clip-click-fallback="fallback(copy)" clip-copy="getTextToCopy()" clip-click="doSomething()">Copy</a>
  ```

  If the fallback function is defined to accept an argument named `copy`, that argument will be populated with the text to copy.

## Example
You can check out this live example here: http://jsfiddle.net/asafdav/8YQcz/6/


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/asafdav/ng-clip/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

