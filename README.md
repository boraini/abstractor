# Abstractor.js
Basic web sub-window engine to navigate through the site without leaving the loader page.

Example in test.html:
    //Load contents of test.txt in sub-window.
    addEventListener("load", begin);
	  function begin() {
			var abs = new Abstractor();
			abs.location.href = "test.txt";
		};
