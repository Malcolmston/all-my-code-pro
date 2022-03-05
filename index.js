var http = require("http"),
	fs = require("fs"),
	path = require("path"),
	express = require("express"),
	bodyParser = require("body-parser"),
	slides = require("./html.js"),
	style = require("./style.js"),
	app = express(),
	Document = require("html-document"),
	getHrefContent = require('href-content'),
	enableDestroy = require('server-destroy'),
	document = new Document();


app.use(bodyParser.urlencoded({ extended: false }));



slides.createDiv("slideshow-container");

let dir = __dirname;


//Synchronously:
const folders = fs.readdirSync(dir).filter(x => !(x.includes(".")) && (x != "node_modules") )


var amount = [];
let code = [];
let html = [];

async function getFileData(filePath) {
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

async function getUrl(filePath) {
	try {
		let data = fs.readFileSync(filePath, "utf8");
		return data.toString();
	} catch (e) {
		return "Error:", e.stack;
	}
}

async function logFiles(dir) {
	return fs.readdirSync(dir);
}

async function Getfile(caller, file) {
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
	var cart = await logFiles(dir);

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

		html.push(
			slides.iframe({
				id: "code",
				srcdoc: b["code"],
				name: b["name"],
				fileData: JSON.stringify(b["data"]),
			}).outerHTML
		);
		/*
		slides.button({
			id: "butt",
			
		})
			*/
		return html;
	});
}


async function log(file) {
	console.log('test')
}

function addtoFile( file, text){

//Asynchronously:
fs.writeFile(file, 
    text, (err) => {
    if (err) 
        console.log("Error:", err);
    else
            console.log('Text written to file!');
});
}

async function datas(file) {	
	getHTMLAsPage(file).then(function(a) {
		a[0].then(function(aa) {

						addtoFile('index.html',`
  <div class="header">
    <h1>My Website</h1>
    <p>A website created by me.</p>
  </div>

  <div class="navbar">

${
folders.map(function(x){
return `
<form action="/api/data" method="POST" id="${x.toString()}" class="page">
<input readonly  type="text" id="data" value="${x.toString()}" name="data" style="width:${x.toString().length*10}px" class="head"></input>
</form> 

`
	
}).join("")
}


  </div>



${style.html(aa, '1')}


<script>
var elements = document.getElementsByClassName("head");
var formss = document.getElementsByClassName("page");

// class = page

  for (var i = 0, len = formss.length; i < len; i++) {
    formss [i].addEventListener("click", function(e ) {


		document.getElementById( this.id ).submit();
});
  }
</script>

`)
					

		});
	});
	
}

function removeFile(filePath) {
	fs.unlink(filePath, (err) => {
		if (err) console.log("Error:", err);
		else console.log("Deleted!");
	});
}

function hellowWeb(file) {
	getUrl(`hellowWeb/${file}/index.html`).then(function(a) {
		getUrl(`hellowWeb/${file}/style.css`).then(function(b) {
			getUrl(`hellowWeb/${file}/script.js`).then(function(c) {
				app.get("/", function(req, res) {
					res.write(
						`<style>${b}</style>
${a}
<script>${c}</script>
`
					);
				});
				app.listen(8081);
			});
		});
	});
}

function repel(file) {
	getUrl(`repel/${file}/index.html`).then(function(a) {
		getUrl(`repel/${file}/style.css`).then(function(b) {
			getUrl(`repel/${file}/script.js`).then(function(c) {
				app.get("/", function(req, res) {
					res.write(
						`<style>${b}</style>
${a}
<script>${c}</script>
`
					);
				});
				app.listen(8080);
			});
		});
	});
}

function codepen(file) {
	getUrl(`codepen/${file}/dist/index.html`).then(function(a) {
		getUrl(`codepen/${file}/dist/style.css`).then(function(b) {
			getUrl(`codepen/${file}/dist/script.js`).then(function(c) {
				app.get("/", function(req, res) {
					res.write(
						`<style>${b}</style>
${a}
<script>${c}</script>
`
					);
				});
				app.listen(8080);
			});
		});
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

	
datas("codepen")

	app.get("/", (request, response) =>
  response.sendFile(`${__dirname}/index.html`)
);
const PORT = 3000

//app.listen(3000, () => console.info("Application running on port 3000"));
var server = http.createServer(app)

server.listen(PORT);
 
// enhance with a 'destroy' function
enableDestroy(server);

app.post("/api/data", (request, response) => {
  const postBody = request; //.body.data;
 datas( postBody.body.data )

		app.get("/", (request, response) =>
  response.sendFile(`${__dirname}/index.html`)
);

	server.destroy();

	server.listen(PORT);

	
});
