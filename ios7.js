/*! Basic iOS 7 CSS // Apache License 2.0 // hbang.ws */

(function(document) {
	"use strict";

	// MARK: - Cydia detection

	var docElement = document.documentElement,
		classList = docElement.classList;

	if (navigator.userAgent.indexOf("Cydia") != -1) {
		if (document.title.indexOf(" \u00b7 ") != -1) {
			document.title = document.title.split(" \u00b7 ")[0];
		}

		classList.add("cydia");
	} else {
		classList.remove("cydia", "depiction");
	}

	// MARK: - Subpixel rendering detection
	// via http://dieulot.net/css-retina-hairline

	if ("devicePixelRatio" in window && devicePixelRatio >= 2) {
		var testElement = document.createElement("div");
		testElement.style.border = ".5px solid transparent";
		docElement.appendChild(testElement);

		if (testElement.offsetHeight > 0) {
			classList.add("has-subpixel");
		}

		if (devicePixelRatio >= 3) {
			classList.add("has-subpixel-3x");
		}

		docElement.removeChild(testElement);
	}
})(document);
