
//document.getElementById("myCanvas").hide();

var els = 1;
var count = 0;
var datasaver = [];
const console = {
  log: function (x) {
    let a = document.getElementById("console"),
      b = document.createElement("div"),
      p = document.createElement("div"),
      lods = document.createElement("button"),
      remove = document.createElement("button"),
      print = document.createElement("button");

    lods.innerText = "load this painting";
    remove.innerText = "delet this file";
    print.innerText = "print this file";

    p.innerText = x;

    print.id = p.innerText;

    lods.id = p.innerText;
    b.id = els;
    els++;

    lods.setAttribute("onclick", "load(this.id)");
    remove.setAttribute("onclick", "remove(els)");
    print.setAttribute("onclick", "print(this.id)");

    b.append(lods, remove, print, p);
    a.append(b);
  },
  clear: function () {
    document.getElementById("console").innerHTML = "";
  }
};

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = slider.value == 0 ? "all" : slider.value;

slider.oninput = function () {
  output.innerHTML = this.value == 0 ? "all" : this.value;
};

var colorid = {
  name: function (name) {
    var names = [
      "black",
      "silver",
      "gray",
      "white",
      "maroon",
      "red",
      "purple",
      "fuchsia",
      "green",
      "lime",
      "olive",
      "yellow",
      "navy",
      "blue",
      "teal",
      "aqua",
      "aliceblue",
      "antiquewhite",
      "aqua",
      "aquamarine",
      "azure",
      "beige",
      "bisque",
      "black",
      "blanchedalmond",
      "blue",
      "blueviolet",
      "brown",
      "burlywood",
      "cadetblue",
      "chartreuse",
      "chocolate",
      "coral",
      "cornflowerblue",
      "cornsilk",
      "crimson",
      "cyan",
      "darkblue",
      "darkcyan",
      "darkgoldenrod",
      "darkgray",
      "darkgreen",
      "darkgrey",
      "darkkhaki",
      "darkmagenta",
      "darkolivegreen",
      "darkorange",
      "darkorchid",
      "darkred",
      "darksalmon",
      "darkseagreen",
      "darkslateblue",
      "darkslategray",
      "darkslategrey",
      "darkturquoise",
      "darkviolet",
      "deeppink",
      "deepskyblue",
      "dimgray",
      "dimgrey",
      "dodgerblue",
      "firebrick",
      "floralwhite",
      "forestgreen",
      "fuchsia",
      "gainsboro",
      "ghostwhite",
      "gold",
      "goldenrod",
      "gray",
      "green",
      "greenyellow",
      "grey",
      "honeydew",
      "hotpink",
      "indianred",
      "indigo",
      "ivory",
      "khaki",
      "lavender",
      "lavenderblush",
      "lawngreen",
      "lemonchiffon",
      "lightblue",
      "lightcoral",
      "lightcyan",
      "lightgoldenrodyellow",
      "lightgray",
      "lightgreen",
      "lightgrey",
      "lightpink",
      "lightsalmon",
      "lightseagreen",
      "lightskyblue",
      "lightslategray",
      "lightslategrey",
      "lightsteelblue",
      "lightyellow",
      "lime",
      "limegreen",
      "linen",
      "magenta",
      "maroon",
      "mediumaquamarine",
      "mediumblue",
      "mediumorchid",
      "mediumpurple",
      "mediumseagreen",
      "mediumslateblue",
      "mediumspringgreen",
      "mediumturquoise",
      "mediumvioletred",
      "midnightblue",
      "mintcream",
      "mistyrose",
      "moccasin",
      "navajowhite",
      "navy",
      "oldlace",
      "olive",
      "olivedrab",
      "orange",
      "orangered",
      "orchid",
      "palegoldenrod",
      "palegreen",
      "paleturquoise",
      "palevioletred",
      "papayawhip",
      "peachpuff",
      "peru",
      "pink",
      "plum",
      "powderblue",
      "purple",
      "red",
      "rosybrown",
      "royalblue",
      "saddlebrown",
      "salmon",
      "sandybrown",
      "seagreen",
      "seashell",
      "sienna",
      "silver",
      "skyblue",
      "slateblue",
      "slategray",
      "slategrey",
      "snow",
      "springgreen",
      "steelblue",
      "tan",
      "teal",
      "thistle",
      "tomato",
      "turquoise",
      "violet",
      "wheat",
      "white",
      "whitesmoke",
      "yellow",
      "yellowgreen"
    ];
    if (name) {
      return name;
    } else {
      return names[Math.floor(Math.random() * names.length + 0)];
    }
  },
  rgb: function (r, g, b) {
    return `rgb(${r || Math.floor(Math.random() * 255 + 0)},${
      g || Math.floor(Math.random() * 255 + 0)
    },${b || Math.floor(Math.random() * 255 + 0)})`;
  },
  rgba: function (r, g, b, a) {
    return `rgba(${r || Math.floor(Math.random() * 255 + 0)},${
      g || Math.floor(Math.random() * 255 + 0)
    },${b || Math.floor(Math.random() * 255 + 0)},${
      a || Math.random() * 1 + 0
    })`;
  },
  hsl: function (r, g, b) {
    return `rgb(${r || Math.floor(Math.random() * 100 + 0)},${
      g || Math.floor(Math.random() * 100 + 0)
    },${b || Math.floor(Math.random() * 100 + 0)})`;
  },
  hsla: function (r, g, b, a) {
    return `rgba(${r || Math.floor(Math.random() * 100 + 0)},${
      g || Math.floor(Math.random() * 100 + 0)
    },${b || Math.floor(Math.random() * 100 + 0)},${
      a || Math.random() * 1 + 0
    })`;
  }
};

const canvasWrapper = document.getElementById("wrapper");
// initial dimensions
canvasWrapper.style.width = "400px";
canvasWrapper.style.height = "400px";

let width;
let height;

setInterval(() => {
  const newWidth = canvasWrapper.clientWidth;
  const newHeight = canvasWrapper.clientHeight;
  if (newWidth !== width || newHeight !== height) {
    width = newWidth;
    height = newHeight;
    c.style.width = newWidth + "px";
    c.style.height = newHeight + "px";
  }
}, 100);

switch (Math.floor(Math.random() * 4)) {
  case 0:
    id = "name";
    break;
  case 1:
    id = "rgb";
    break;
  case 2:
    id = "rgba";
    break;
  case 3:
    id = "hsl";
    break;
  case 4:
    id = "hsla";
    break;
  default:
    id = null;
}

c.width = 400;
c.height = 400;

const move = function () {
  let x = Math.random() * c.width;
  let y = Math.random() * c.height;
  ctx.moveTo(x, y);
  return [x, y];
};

Array.prototype.last = function () {
  return this[this.length - 1];
};
//drawing start

function loadart(parts) {
  for (var i = 0; i < parts; i++) {
    drawline(ctx);
    drawcurve(ctx);
    drawcurve2(ctx);
    drawdot(ctx);
    drawshape(ctx);
  }
}

function black() {
  let g = Math.random() * 255,
    b = Math.random() * 100;

  return colorid.rgba(g, g, g, b);
}

loadart(10);

function drawsettings(ctx) {
  intchecked = [
    document.getElementById("black/white").checked,
    document.getElementById("on").checked,
    document.getElementById("na").checked,
    document.getElementById("off").checked,

    document.getElementById("on1").checked,
    document.getElementById("na1").checked,
    document.getElementById("off1").checked,
    document.getElementById("none1").checked,

    document.getElementById("demo").innerHTML
  ];

  id = ["name", "rgb", "rgba", "hsl", "hsla"];

  var color = intchecked[0]
    ? black()
    : eval(`colorid.${id[Math.floor(Math.random() * 4)]}()`);

  eval(`drawcolor(color)`);

  if (intchecked[3]) {
    ctx.setLineDash([Math.random() * 12 + 4, Math.random() * 12 + 4]);
  }
  if (intchecked[2]) {
    if (Math.random() * 11 >= 5) {
      ctx.setLineDash([Math.random() * 10 + 2, Math.random() * 10 + 2]);
    }
  }
  if (intchecked[1]) {
    ctx.setLineDash([0, 0]);
  }

  let cap = Math.random() * 34;

  if (intchecked[4]) {
    ctx.lineCap = "round";
  }
  if (intchecked[5]) {
    ctx.lineCap = "butt";
  }
  if (intchecked[6]) {
    ctx.lineCap = "square";
  }
  if (intchecked[7]) {
    if (cap <= 11) {
      ctx.lineCap = "round";
    } else if (cap <= 22) {
      ctx.lineCap = "butt";
    } else {
      ctx.lineCap = "square";
    }
  }

  ctx.lineWidth =
    intchecked[8] == "all" ? Math.random() * 7 + 1 : intchecked[8];

  cap = Math.random() * 45;
  if (cap <= 11) {
    ctx.lineJoin = "round";
  } else if (cap <= 22) {
    ctx.lineJoin = "bevel";
  } else if (cap <= 33) {
    ctx.lineJoin = "miter";
  } else {
  }
}

function drawline(ctx) {
  if (document.getElementById("only line").checked) return;
  let d = drawsettings(ctx);
  ctx.beginPath();
  let p = move();
  let x = Math.random() * c.width,
    y = Math.random() * c.height;
  ctx.lineTo(x, y);
  ctx.stroke();
}

function drawcurve(ctx) {
  if (document.getElementById("only bezier curve").checked) return;

  let d = drawsettings(ctx);
  ctx.beginPath();
  let p = move();
  let a = [
    Math.random() * c.width,
    Math.random() * c.height,
    Math.random() * c.width,
    Math.random() * c.height,
    Math.random() * c.width,
    Math.random() * c.height
  ];
  ctx.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
  ctx.stroke();
}

function drawcurve2(ctx) {
  intchecked = [
    document.getElementById("only dot").checked,
    document.getElementById("only shape").checked
  ];

  if (document.getElementById("only quadratic curve").checked) return;

  let d = drawsettings(ctx);
  ctx.beginPath();
  let p = move();

  let a = [
    Math.random() * c.width,
    Math.random() * c.height,
    Math.random() * c.width,
    Math.random() * c.height
  ];
  ctx.quadraticCurveTo(a[0], a[1], a[2], a[3]);
  ctx.stroke();
}

function drawdot(ctx) {
  if (document.getElementById("only dot").checked) return;

  let d = drawsettings(ctx);
  ctx.beginPath();
  let a = [
    Math.random() * c.width,
    Math.random() * c.height,
    Math.random() * 6 + 4,
    0,
    Math.PI * 2,
    true
  ];
  ctx.arc(a[0], a[1], a[2], a[3], a[4], a[5]);
  ctx.closePath();
  ctx.fill();
}

function drawshape(ctx) {
  if (document.getElementById("only shape").checked) return;

  let d = drawsettings(ctx);
  var Xcenter,
    Ycenter,
    size = Math.random() * 20 + 10,
    numberOfSides = Math.floor(Math.random() * 60 + 3);
  if (c.width !== c.height) {
    Xcenter = (Math.random() * c.width) / 2;
    Ycenter = (Math.random() * c.height) / 2;
  } else {
    Xcenter = (Math.random() * c.width) / 2;
    Ycenter = Xcenter;
  }

  ctx.beginPath();
  let place = [Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0)];
  ctx.moveTo(place[0], place[1]);

  (step = (2 * Math.PI) / numberOfSides), //Precalculate step value
    (shift = (Math.PI / 180.0) * -18); //Quick fix ;)

  ctx.beginPath();

  for (var i = 0; i <= numberOfSides; i++) {
    var curStep = i * step + shift;
    ctx.lineTo(
      Xcenter + size * Math.cos(curStep),
      Ycenter + size * Math.sin(curStep)
    );
  }

  let fill = Math.random() * 11 >= 5;
  if (fill) {
    ctx.fill();
  }
  ctx.stroke();
}

function drawcolor(a) {
  ctx.fillStyle = a; //"red";
  ctx.strokeStyle = a;
  //ctx.fill();
}
//drawing end
function name() {
  function getRandomString(length) {
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }
  return " " + getRandomString(13);
}

function url(c) {
  return c.toDataURL("image/png", 1.0);
}

document.querySelector("name").textContent = name();
//alert(eval( `colorid.${id}()`))
data(document.querySelector("date"));

function data(to) {
  const formatYmd = (date) => date.toISOString().slice(0, 10);

  to.textContent = formatYmd(new Date());
}

function remove(number) {
  if (confirm("are you shure you want to remove this art")) {
    document.getElementById(`${number - 1}`).innerHTML = "";
    els = els - 1;
  }
}

document.getElementById("save").onclick = function () {
  console.log(url(c));
};

document.getElementById("newp").onclick = function () {
  ctx.clearRect(0, 0, c.width, c.height);

  loadart(10);

  document.querySelector("name").textContent = name();
  //alert(eval( `colorid.${id}()`))
  data(document.querySelector("date"));
  count++;
};

function load(url) {
  ctx.clearRect(0, 0, c.width, c.height);

  base_image = new Image();
  base_image.src = url;

  base_image.onload = function () {
    ctx.drawImage(base_image, 0, 0, c.width, c.height);
  };
}

function print(id) {
  var myWindow = window.open();
  myWindow.document.write(
    `<image width=${canvasWrapper.style.width} height=${canvasWrapper.style.height} src=${id}></image>`
  );
}

//print()

document.getElementById("offa").onclick = function () {
  var x = document.getElementById("myDIVa");
  if (x.style.opacity === "0") {
    x.style.opacity = "1.0";
  } else {
    x.style.opacity = "0";
  }
};

document.getElementById("offb").onclick = function () {
  var x = document.getElementById("myDIVb");
  if (x.style.opacity === "0") {
    x.style.opacity = "1.0";
  } else {
    x.style.opacity = "0";
  }
};


function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function load3D() {
  var u = url(c);
  window.console.log(u);

  document.getElementById("myCanvas").hide();
  document.getElementById("3Ddata").show();
  load3durl(u);
}
