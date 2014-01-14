# Basic iOS 7 CSS
Basic, simple, semantic, and less than 1kb. <sup>minified and gzipped</sup> Mostly intended for use by Cydia repositories’ depiction pages.

Live example: [cydia.hbang.ws depictions](http://cydia.hbang.ws/depiction/ws.hbang.typestatus)

Licensed under [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html). UI design is copyright of Apple Inc.

## Screenshots
![Screenshot 1](http://i.imgur.com/XOKfDs3.png) &nbsp; ![Screenshot 2](http://i.imgur.com/5qAYSyl.png)

## Usage
```html
<header>
	<h1>Page header.</h1>
</header>

<h2>Section header.</h2>
<ul>
	<li>
		<p>Text element.</p>
	</li>

	<li>
		<a href="http://hbang.ws" target="_blank">Link.</a>
	</li>

	<li>
		<button type="submit">Button.</button>
	</li>

	<li>
		<p>It’s ok to have more than one element at a time.</p>
		<p>Like so…</p>
		<a href="https://www.google.com" target="_blank">But you should probably only use that with multiple paragraphs.</a>
	</li>
</ul>
<p>Section footer.</p>
```

Note: `<p>`, `<a>` or `<button>` must be a direct child of `<li>`. Therefore, using a `<button>` assumes it has a `click` event handler set with JavaScript, or that the `<ul>` is wrapped in a `<form>`.
