/* Basic iOS 7 CSS // Apache 2 license // hbang.ws */

(function(doc) {
	if (navigator.userAgent.indexOf("Cydia") != -1) {
		doc.title = doc.title.split(" \u00b7 ")[0];
		doc.documentElement.classList.add("cydia");
	} else {
		doc.documentElement.classList.remove("cydia", "depiction");
	}
})(document);
