# Basic iOS 7 CSS
Basic, simple, semantic, and small (5.1 KB minified and gzipped).

Integrate it with your project easily with [Bower](https://bower.io/): `bower install iOS-7-CSS`

Live example: [cydia.hbang.ws](https://cydia.hbang.ws/depiction/ws.hbang.typestatus2/)

## Screenshots
![Screenshot 1](https://i.imgur.com/XOKfDs3.png) &nbsp; ![Screenshot 2](https://i.imgur.com/5qAYSyl.png)

## Example Usage
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Hello World</title>

	<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=0">

	<link rel="stylesheet" href="ios7.min.css">
	<script src="ios7.min.js"></script>
</head>
<body>
	<header class="ios-header">
		<h1>Page header.</h1>
	</header>

	<main class="ios-table ios-main">
		<h2 role="header">Section header.</h2>
		
		<ul>
			<li>
				<p>Text element.</p>
			</li>

			<li>
				<a href="https://hashbang.productions/" target="_blank" role="button">Link.</a>
			</li>

			<li>
				<button type="submit">Button.</button>
			</li>

			<li>
				<p>It’s ok to have more than one element at a time.</p>
				<p>Like so…</p>
				<a href="https://www.google.com/" target="_blank" role="button">But you should probably only use that with multiple paragraphs.</a>
			</li>
		</ul>

		<p role="footer">Section footer.</p>
	</main>
</body>
</html>
```

Note that this has changed since version 2.x. You must explicitly use `class="ios-header"` and `class="ios-table"` to have parts of the page gain iOS styles. `class="ios-main"` must also be used to ensure correct styling for tablets and desktop browsers.

Buttons must be specified with `role="button"`; footers must be specified with `role="footer"`. Headers *should* use `role="header"`, but the styling is still applied to `<h2>`.

## Installation
### The easy way:
Just [download this repo](https://github.com/hbang/iOS-7-CSS/archive/master.zip) and copy `ios7.min.css` and `ios7.min.js` to your website.

### The hard way:
1. Clone the repo.  
   ```bash
   git clone https://github.com/hbang/iOS-7-CSS.git
   cd iOS-7-CSS
   ```
2. Install node and npm if you don’t already have them installed. For example, on macOS:  
   ```bash
   brew install node
   ```
3. Install the dependencies.  
   ```bash
   npm install
   ```
4. Whenever you want to compile the CSS and JS, run Gulp.  
   ```bash
   npx gulp
   ```


## License
Licensed under the Apache License, version 2.0. Refer to [LICENSE.md](LICENSE.md).
