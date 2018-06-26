const git = require("simple-git/promise");
const fs = require("fs-extra");
const replace = require("replace-in-files");

function cloneUnderscores() {
	const remote = "https://github.com/Automattic/_s";
	const path = "./_s";
	
	if (fs.existsSync(path)) {
		console.log('Cannot clone the folder already exists');
		return;
	}

	git().silent(true)
		.clone(remote)
		.then(() => 
			replaceStrings()
		)
		.catch((err) => console.error('Cannot clone: ', err));

	
}

function replaceStrings(strings, repalcement) {
	
}


module.exports = cloneUnderscores();
