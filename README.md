ngClip - Copy to clipboard using AngularJS
=======

An AngularJS simple directive that uses ZeroClipboard and updates the user's clipboard. 


## Usage
1. Add ng-clip.js to your main file (index.html)

2. Use [bower](http://bower.io) to obtain the latest version ZeroClipboard from the official repository.
if you are missing bower, use npm(Node package manger) to obtain it with:
```npm install -g bower```
```bower install zeroclipboard```

2a. If you use [yeoman](http://yeoman.io/), the js file will be automatically included within your project dependencies, and you will just have to replace the constant on line 4 of the ngClip.js file: 
```javascript
 value('ZeroClipboardPath', '/relative-path/to/ZeroClipBoard.swf').
```
with the correct location of the swf file of the plugin in your file system, relatively to your project's root.
It is thus recommended to use [yeoman](http://yeoman.io/).

2b. If you don't use yeoman, you'll have to follow the instructions in 2a. and additionally, add the javascript zeroclipboard file to the button of your index\main application page.
Somewhere after angular.js and before the ngClip.js file should be fine(not critical):
```html
<script type="text/javascript" src="/relative-path/to/ZeroClipBoard.js"></script>
```
3. Set `ngClipboard` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['ngClipboard'])
  ```

4. Add clip-copy directive to the wanted element, example:
  ```html
  <a href="" clip-copy="getTextToCopy()" clip-click="doSomething()">Copy</a>
  ```


## Example
You can check out this live example here: http://jsfiddle.net/asafdav/8YQcz/6/
