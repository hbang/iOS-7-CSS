/* Basic iOS 7 CSS // Apache 2 license // hbang.ws */

(function(document) {
	"use strict";

	var classList = document.documentElement.classList;

	if (navigator.userAgent.indexOf("Cydia") != -1) {
		document.title = doc.title.split(" \u00b7 ")[0];
		classList.add("cydia");
	} else {
		classList.remove("cydia", "depiction");
	}
})(document);
