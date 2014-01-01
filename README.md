ngClip - Copy to clipboard using AngularJS
=======

An AngularJS simple directive that uses ZeroClipboard and updates the user's clipboard. 


## Usage
1. Add ng-clip.js to your main file (index.html)

2. Use [bower](http://bower.io) to obtain the latest version ZeroClipboard from the official repository.
if you are missing bower, use npm(Node Packaged Modules) to obtain it with the following command:
```
npm install -g bower
```
------
```
bower install zeroclipboard
```
	2a. If you use [yeoman](http://yeoman.io/), the js file will be automatically included within your project dependencies.

	You may want to update the ngClip.js file, and replace the cdnjs resource with you own local copy: 
	
	```javascript
	 value('ZeroClipboardPath', '//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.2.3/ZeroClipboard.swf').
	
	```
	Just change this path the correct location of the swf file of the plugin in your file system, relatively to your project's root(this step is optional):
	
	```javascript
	 value('ZeroClipboardPath', 'relative-path/to/ZeroClipboard.swf').
	```

	It is thus recommended to use [yeoman](http://yeoman.io/), since it will save you a great deal of time, and will improve your code structure.

	2b. If you don't use yeoman, you'll have to follow the instructions in 2a. and additionally, add the javascript ZeroClipboard file to the buttom of your index\main application page,
	somewhere after angular.js and before the ngClip.js file should be fine(not critical):
	```html
	<script type="text/javascript" src="relative-path/to/ZeroClipBoard.js"></script>
	```
	Alternatively, if you wish to use this library from CDN, it is available on cdnjs:
	```html
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.2.3/ZeroClipboard.swf"></script>
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


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/asafdav/ng-clip/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

