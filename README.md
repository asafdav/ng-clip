ngClip - Copy to clipboard using AngularJS
=======

An AngularJS simple directive that uses ZeroClipboard and updates the user's clipboard. 


## Usage
1. Add ng-clip.js to your main file (index.html)

2. Include ZerClipboard.js in your project, and update the .swf path location using ngClipProvider
```javascript
  .config(['ngClipProvider', function(ngClipProvider) {
    ngClipProvider.setPath("bower_components/zeroclipboard/ZeroClipboard.swf");
  }]);
```

	There are several ways you can use to include ZeroClipboard, please use one of the following options:
	- Bower:
	
	Use [bower](http://bower.io) to obtain the latest version ZeroClipboard from the official repository.

	```
	bower install zeroclipboard
	```

	Then you may need to update the .swf file to point to your local copy using 
	
	```javascript
	ngClipProvider.setPath("relative-path/to/ZeroClipboard.swf");
	```
	
	if you are missing bower, use npm(Node Packaged Modules) to obtain it with the following command:
	
	```
	npm install -g bower
	```
	
	- CDNJS:

	Alternatively, if you wish to use this library from CDN, it is available on cdnjs:
	
	```html
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.2.3/ZeroClipboard.min.js"></script>
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

