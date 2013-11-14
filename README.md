ngClip - Copy to clipboard using AngularJS
=======

An AngularJS simple directive that uses ZeroClipboard and updates the user's clipboard. 


## Usage
1. Add ng-clip.js to your main file (index.html)
2. Add //cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.1.7/ZeroClipboard.min.js to your main file (index.html)

3. Set `ngClipboard` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['ngClipboard'])
  ```

4. Add clip-copy directive to the wanted element, example:
  ```html
  <a href="" clip-copy="getTextToCopy()" clip-click="doSomething()">Copy</a>
  ```


## Example
You can check out this live example here: 
