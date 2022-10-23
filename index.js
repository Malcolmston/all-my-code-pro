var http = require("http"),
	fs = require("fs"),
	path = require("path"),
	express = require("express"),
	bodyParser = require("body-parser"),
	slides = require("./html.js"),
	style = require("./style.js"),
	app = express(),
	mime = require('mime-types'),
	Document = require("html-document"),
	enableDestroy = require('server-destroy'),
	Database = require("@replit/database"),
	db = new Database(),
	document = new Document();

var dsed = ''
let dir = __dirname;
//Synchronously:
const folders = fs.readdirSync(dir).filter(x => !(x.includes(".")) && (x != "node_modules"))

var amount = [];
let code = [];
let html = [];
let s = logFiles("codepen")


app.use(bodyParser.urlencoded({ extended: false }));

slides.createDiv("slideshow-container");


Object.prototype.in = function() {
	for (var i = 0; i < arguments.length; i++)
		if (arguments[i] == this) return true;
	return false;
}

function isCode(file) {
	try {
		return mime.contentType(file).split("/")[1].toString().split(";")[0].in("javascript", 'typescript', 'appscript')
	} catch (e) {

	}
}

function isStyle(file) {
	try {
		return mime.contentType(file).split("/")[1].toString().split(";")[0].in("css", 'scss', 'style')
	} catch (e) {

	}
}

async function makeFileMass(filePath) {
	//var filePath = "planet"//"planet/index.html";
	var html = []

	//resetFile("file.html")

	fs.readdirSync(filePath).forEach(function(file) {
		if (file.includes(".")) {
			if (isCode(file)) {
				getUrl(filePath + "/" + file).then(function(x) {
					let r = `type="${mime.lookup(file)}"`
					let a = `<script ${r}> ${x}</script> \n`
					html.push(a)
				})

			}
			if (isStyle(file)) {
				getUrl(filePath + "/" + file).then(function(x) {
					let r = `type="${mime.lookup(file)}"`
					let a = `<style ${r}> ${x}</style> \n`
					html.push(a)
					// addFile("file.html",a )
				})
			}
			if (file.includes(".html")) {
				getUrl(filePath + "/" + file).then(function(x) {
					html.push(x)
					// addFile("file.html",x )
				})
			}


		}
	});


	return html


}

async function makeDataMass(filePath) {
	var html = []

	fs.readdirSync(filePath).forEach(function(file) {
		if (file.includes(".")) {
			if (isCode(file)) {
				html.push(getFileData(filePath + "/" + file, "script"))
			}
			if (isStyle(file)) {
				html.push(getFileData(filePath + "/" + file, "style"))
			}
			if (file.includes(".html")) {
				html.push(getFileData(filePath + "/" + file, "html"))
			}


		}
	});

	var a;
	var b;
	var c;

	return Promise.all(html).then((values) => {
		a = values.filter(x => x.file == "script")
		b = values.filter(x => x.file == "style")
		c = values.filter(x => x.file == "html")


		return {
			html: {
				"fileSize is": c.map(x => Number(x["fileSize is"].split(" ")[0])).reduce((partialSum, a) => partialSum + a, 0) + " bytes",
				"dateChanges is": null,
				"creationDate is": null,
				"canRWE is": true,
				"extension is": null,
				"fileName is": null,
				"fileNameOnly is": null,
				"fileDir is": null
			},
			css: {
				"fileSize is": b.map(x => Number(x["fileSize is"].split(" ")[0])).reduce((partialSum, a) => partialSum + a, 0) + " bytes",
				"dateChanges is": null,
				"creationDate is": null,
				"canRWE is": true,
				"extension is": null,
				"fileName is": null,
				"fileNameOnly is": null,
				"fileDir is": null
			},
			js: {
				"fileSize is": a.map(x => Number(x["fileSize is"].split(" ")[0])).reduce((partialSum, a) => partialSum + a, 0) + " bytes",
				"dateChanges is": null,
				"creationDate is": null,
				"canRWE is": true,
				"extension is": null,
				"fileName is": null,
				"fileNameOnly is": null,
				"fileDir is": null
			}
		};
	})





}

async function getFileData(filePath, force = false) {
	let stats = fs.statSync(filePath);
	//file size
	let fileSize = stats.size;

	//file modification date
	let dateChanges = stats.mtime;

	//file creation date
	let creationDate = stats.birthtime;

	//can read, write, and execute
	let canRWE = (stats.mode && fs.constants.S_IRWXU) === fs.constants.S_IRWXU;

	//file extension
	let extension = path.extname(filePath);

	//file name
	let fileName = path.basename(filePath);

	//file name without extension
	let fileNameOnly = path.basename(filePath, extension);

	//file directory
	let fileDir = path.dirname(filePath);
	if (force) {
		return {
			"file": force,
			"fileSize is": fileSize + " bytes",
			"dateChanges is": dateChanges,
			"creationDate is": creationDate,
			"canRWE is": canRWE,
			"extension is": extension,
			"fileName is": fileName,
			"fileNameOnly is": fileNameOnly,
			"fileDir is": fileDir
		};
	} else {
		return {
			"fileSize is": fileSize + " bytes",
			"dateChanges is": dateChanges,
			"creationDate is": creationDate,
			"canRWE is": canRWE,
			"extension is": extension,
			"fileName is": fileName,
			"fileNameOnly is": fileNameOnly,
			"fileDir is": fileDir
		};
	}

}

async function getUrl(filePath) {
	try {
		let data = fs.readFileSync(filePath, "utf8");
		return data.toString();
	} catch (e) {
		return "Error:", e.stack;
	}
}

function logFiles(dir) {
	return fs.readdirSync(dir);
}

async function Getfile(caller, file) {
	var files;
	try {
		files = logFiles(`${caller}/${file}`);
	} catch (e) {
		file = file.replace('/dist', '')
		files = logFiles(`${caller}/${file.replace('/dist', '')}`);
	}


	if (files.length == 3) {
		let a = await getUrl(`${caller}/${file}/index.html`);
		let b = await getUrl(`${caller}/${file}/style.css`);
		let c = await getUrl(`${caller}/${file}/script.js`);

		let d = await getFileData(`${caller}/${file}/index.html`);
		let e = await getFileData(`${caller}/${file}/style.css`);
		let f = await getFileData(`${caller}/${file}/script.js`);

		let pro = {
			html: d,
			css: e,
			js: f
		};

		return {
			html: `<style>${b}</style>${a}<script>${c}</script>`,
			data: pro
		};
	} else {
		var c = await makeFileMass(`${caller}/${file}`)

		let pro = await makeDataMass(`${caller}/${file}`)

		return {
			html: c.join("\n"),
			data: pro
		};

		// return ( c.join("\n"))

	}


}

async function dataFind(x, thing) {
	var data;

	if (thing == "codepen") {
		data = await Getfile("codepen", x + "/dist");
	} else {
		data = await Getfile(thing, x);
	}

	return data;
}

async function getFileTolog(dir) {
	var cart = logFiles(dir);

	return cart.map(async function(a) {
		let x = await dataFind(a, dir);

		return {
			name: a,
			code: x.html,
			data: x.data
		};
	});
}

async function getGetFileTolog(dir) {
	let a = getFileTolog("codepen").then(function(a) {
		let t = a.map(async function(s) {
			let c = await s;

			return c;
		});

		let data = t.map(async function(s) {
			let data = await s;
			return data;
		});

		return data;
	});

	return a;
}

async function getHTMLAsPage(dir) {
	let html = [];
	let a = await getFileTolog(dir);
	
	return a.map(async function(e) {
		var b = await e;
		//var c = await data.getFileData('html.js')

		//alert(b)
		
		html.push(
			slides.iframe({
				id: "code",
				srcdoc: b["code"],
				name: b["name"],
				fileData: JSON.stringify(b["data"]),
			}).outerHTML
		);

	
		return html;
	});
}



function addtoFile(file, text) {

	//Asynchronously:
	fs.writeFile(file,
		text, (err) => {
			if (err)
				alert("Error:", err);
			else
				alert('Text written to file!');
		});
}

async function datas(file, to, html = false, data, c, d) {	
	if (html) {
		addtoFile(to, file)
	} else {
		db.set("last", file).then(() => { });

		//alert( file )
		
		getHTMLAsPage(file).then(function(a) {
			a[0].then(function(aa) {
				addtoFile('index.html', `
  <div class="header">
    <h1>My Website</h1>
    <p>A website created by me.</p>
  </div>

  <div class="navbar">

${folders.map(function(x) {
					return `
<form action="/api/data" method="POST" id="${x.toString()}" class="page">
<input  readonly  type="text" id="data" value="${x.toString()}" name="data" style="width:${x.toString().length * 10}px" class="head"></input>
</form> 
`
}).join("")
}

<form action="/api/page" method="POST" id="setting" class="page"><input  readonly  type="text" id="data" value="setting" name="data" style="width:${("setting").toString().length * 10}px" class="head"></input>

  </div>

${style.html(aa, '1', data, c, d)}

<script>
var elements = document.getElementsByClassName("head");
var formss = document.getElementsByClassName("page");

  for (var i = 0, len = formss.length; i < len; i++) {
    formss [i].addEventListener("click", function(e ) {

		document.getElementById( this.id ).submit();

setTimeout(function(params) {
	location.reload()
}, 1000);

});
  }
</script>
`)


			});
		});
	}

}


function removeFile(filePath) {
	fs.unlink(filePath, (err) => {
		if (err) alert("Error:", err);
		else alert("Deleted!");
	});
}


function file(file) {
	getUrl(`${file}`).then(function(a) {
		app.get("/", function(req, res) {
			res.write(`${a}`);
		});
		app.listen(8080);
	});
}


datas("codepen", false, false, 'all')


app.get("/", function(request, response) {
	response.sendFile(`${__dirname}/index.html`)

});


var PORT = 3000

var server = http.createServer(app)
server.listen(PORT);

app.post("/api/data", async function(request, response) {
	const postBody = request; //.body.data;
	let b = await db.get("settings")
	let a = await db.get("land")


	//alert( a )
	datas(postBody.body.data, false, false, 'all')//a, b[0], b[1])

	server.close();

	app.get("/", function(request, response) {
		response.sendFile(`${__dirname}/index.html`)

	});

	server = http.createServer(app)
	enableDestroy(server);

	server.listen(PORT);

});

app.post("/api/done", (request, response) => {
	const postBody = request; //.body.data;
	let a = (postBody.body.data).split(",")

	let b = [a[0].replace(" rows ", ' ').replace(" columns ", ' ').split(" ")[0], a[0].replace(" rows ", ' ').replace(" columns ", ' ').split(" ")[1]]

	db.get("last").then(async function(e) {
		db.set("settings", b)


		db.set("land", ((typeof b != "string") ? b[0] : a).trim())

		//db.set("land", a )
		b = await db.get("settings")

		if (a[1].includes("_3D")) {
			datas(e, false, false, b[0])
		} else {
			datas(e, false, false, a[1], b[0], b[1])
		}
		server.close();

		app.get("/", function(request, response) {
			response.sendFile(`${__dirname}/index.html`)

		});

		server = http.createServer(app)
		enableDestroy(server);

		server.listen(PORT);
	});



});

app.post("/api/page", (request, response) => {

	const postBody = request; //.body.data;

	fs.readFile('page.html',
		'utf8', function(err, text) {
			if (err)
				alert("Error:", err);
			else
				datas(text, 'index.html', true)
		});


	server.close();

	app.get("/", function(request, response) {
		response.sendFile(`${__dirname}/page.html`)

	});

	server = http.createServer(app)
	enableDestroy(server);

	server.listen(PORT);


});


