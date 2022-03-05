function draw2d(sides) {
	var canvas = document.getElementById("_2dcanvas");
	canvas.style.display = "block";

	document.getElementById("_3dcanvas").style = "none";
	var cxt = canvas.getContext("2d");

	function draw(Xcenter, Ycenter, size, numberOfSides) {
		cxt.beginPath();
		cxt.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

		(step = (2 * Math.PI) / numberOfSides), //Precalculate step value
			(shift = (Math.PI / 180.0) * -18); //Quick fix ;)

		cxt.beginPath();

		for (var i = 0; i <= numberOfSides; i++) {
			var curStep = i * step + shift;
			cxt.lineTo(
				Xcenter + size * Math.cos(curStep),
				Ycenter + size * Math.sin(curStep)
			);
		}

		cxt.strokeStyle = "#000000";
		cxt.lineWidth = 1;
		cxt.stroke();
	}

	function ellipse() {
		cxt.beginPath();
		cxt.ellipse(150, 150, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
		cxt.stroke();
	}

	if (sides === "e") {
		ellipse();
	} else {
		draw(150, 150, 100, sides);
	}
}

function draw3d(a, s) {
	document.getElementById("_2dcanvas").style.display = "none";
	document.getElementById("_3dcanvas").style.display = "block";

	var size = 500;
	function perimid(can, sides) {
		var winW = size; //window.innerWidth;
		var winH = size; //window.innerHeight;
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(50, winW / winH, 0.01, 10);
		var renderer = new THREE.WebGLRenderer({ canvas: can });
		renderer.setSize(winW, winH);
		document.body.appendChild(renderer.domElement);

		////////////////////////////////////////
		var radius = 4;
		var height = 4;
		var geometry = new THREE.CylinderGeometry(0, radius, height, sides, 1);
		var material = new THREE.MeshNormalMaterial();
		var pyramid = new THREE.Mesh(geometry, material);
		scene.add(pyramid);

		camera.position.z = 10;
		var render = function () {
			requestAnimationFrame(render);
			pyramid.rotation.x += 0.0;
			pyramid.rotation.y += 0.01;
			renderer.setClearColor("rgb(0,159,214)");
			renderer.render(scene, camera);
		};

		render();
	}
	function sphere(can) {
		var winW = size; //window.innerWidth;
		var winH = size; //window.innerHeight;
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(50, winW / winH, 0.01, 10);
		var renderer = new THREE.WebGLRenderer({ canvas: can });
		renderer.setSize(winW, winH);
		document.body.appendChild(renderer.domElement);
		////////////////////////////////////////

		var geometry = new THREE.SphereGeometry(3, 32, 32); //(0, radius, height, sides,45)//0, radius, height, sides, 1)
		var material = new THREE.MeshNormalMaterial();
		var pyramid = new THREE.Mesh(geometry, material);
		scene.add(pyramid);

		camera.position.z = 10;

		var render = function () {
			requestAnimationFrame(render);
			pyramid.rotation.x += 0.0;
			pyramid.rotation.y += 0.01;
			renderer.setClearColor("rgb(0,159,214)");
			renderer.render(scene, camera);
		};

		render();
	}
	function gon(can, sides) {
		var winW = size; //window.innerWidth;
		var winH = size; //window.innerHeight;
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(50, winW / winH, 0.01, 10);
		var renderer = new THREE.WebGLRenderer({ canvas: can });
		renderer.setSize(winW, winH);
		document.body.appendChild(renderer.domElement);
		////////////////////////////////////////

		var geometry = new THREE.CylinderGeometry(3, 3, 3, sides); //(0, radius, height, sides,45)//0, radius, height, sides, 1)
		var material = new THREE.MeshNormalMaterial();
		var pyramid = new THREE.Mesh(geometry, material);
		scene.add(pyramid);

		camera.position.z = 10;

		var render = function () {
			requestAnimationFrame(render);
			pyramid.rotation.x += 0.0;
			pyramid.rotation.y += 0.01;
			renderer.setClearColor("rgb(0,159,214)");
			renderer.render(scene, camera);
		};

		render();
	}
	function torus(can) {
		var winW = size; //window.innerWidth;
		var winH = size; //window.innerHeight;
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(50, winW / winH, 0.01, 10);
		var renderer = new THREE.WebGLRenderer({ canvas: can });
		renderer.setSize(winW, winH);
		document.body.appendChild(renderer.domElement);
		////////////////////////////////////////

		var geometry = new THREE.TorusGeometry(3, 0.5, 8, 100); //(0, radius, height, sides,45)//0, radius, height, sides, 1)
		var material = new THREE.MeshNormalMaterial();
		var pyramid = new THREE.Mesh(geometry, material);
		scene.add(pyramid);

		camera.position.z = 10;

		var render = function () {
			requestAnimationFrame(render);
			pyramid.rotation.x += 0.0;
			pyramid.rotation.y += 0.01;
			renderer.setClearColor("rgb(0,159,214)");
			renderer.render(scene, camera);
		};

		render();
	}
	function hedron(can, side) {
		var winW = size; //window.innerWidth;
		var winH = size; //window.innerHeight;
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(50, winW / winH, 0.01, 10);
		var renderer = new THREE.WebGLRenderer({ canvas: can });
		renderer.setSize(winW, winH);
		document.body.appendChild(renderer.domElement);
		////////////////////////////////////////
		var geometry;

		if (side == 4) {
			geometry = new THREE.OctahedronGeometry(2);
		}
		if (side == 8) {
			geometry = new THREE.OctahedronGeometry(2);
		}
		if (side == 3) {
			geometry = new THREE.TetrahedronGeometry(2);
		}
		if (side == 10) {
			geometry = new THREE.DodecahedronGeometry(2);
		}

		var material = new THREE.MeshNormalMaterial();
		var pyramid = new THREE.Mesh(geometry, material);
		scene.add(pyramid);

		camera.position.z = 10;

		var render = function () {
			requestAnimationFrame(render);
			pyramid.rotation.x += 0.0;
			pyramid.rotation.y += 0.01;
			renderer.setClearColor("rgb(0,159,214)");
			renderer.render(scene, camera);
		};

		render();
	}
	if (s == 3) {
		perimid(_3dcanvas, a);
	}
	if (s == 360) {
		sphere(_3dcanvas);
	}
	if (s == 7) {
		gon(_3dcanvas, a);
	}
	if (s == 180) {
		torus(_3dcanvas);
	}
	if (s == 8) {
		hedron(_3dcanvas, a);
	}
	if (s == 2) {
		hedron(_3dcanvas, a);
	}
}

function drawshape(a) {
	const draw = {
		circle: "draw2d(360)",
		ellipse: 'draw2d("e")',
		normal: "draw2d(3)",
		right: "draw2d(3)",
		isosceles: "draw2d(3)",
		equilateral: "draw2d(3)",
		square: "draw2d(4)",
		rectangle: "draw2d(4)",
		kite: "draw2d(4)",
		rhombus: "draw2d(4)",
		trapezoid: "draw2d(4)",
		parallelogram: "draw2d(4)",
		pentagon: "draw2d(5)",
		hexagon: "draw2d(6)",
		heptagon: "draw2d(7)",
		octagon: "draw2d(8)",
		nonagon: "draw2d(9)",
		decagon: "draw2d(10)",
		sphere: "draw3d(0,360)",
		torus: "draw3d(0,180)",
		cylinder: "draw3d(360,7)",
		"triangular pyramid": "draw3d(3,7)",
		"square pyramid": "draw3d(4,3)",
		"pentagonal pyramid": "draw3d(5,3)",
		"hexagonal pyramid": "draw3d(6,3)",
		"heptagonal pyramid": "draw3d(7,3)",
		"octagonal pyramid": "draw3d(8,3)",
		"nonagonal pyramid": "draw3d(9,3)",
		"decagonal pyramid": "draw3d(10,3)",
		"triangular prism": "draw3d(3,7)",
		"rectangular prism": "draw3d(4,7)",
		"pentagonal prism": "draw3d(5,7)",
		"hexagonal prism": "draw3d(6,7)",
		"heptagonal prism": "draw3d(7,7)",
		"octagonal prism": "draw3d(8,7)",
		"nonagonal prism": "draw3d(9,7)",
		"decagonal prism": "draw3d(10,7)",
		cone: "draw3d(360,3)",
		tetrahedron: "draw3d(3,7)",
		cuboid: "draw3d(4,7)",
		octahedron: "draw3d(8,8)",
		dodecahedron: "draw3d(10,8)"
	};

	eval(
		Object.values(draw)[
			Object.keys(draw).indexOf(Object.keys(draw).filter((x) => a == x)[0])
		]
	);
	return Object.values(draw)[
		Object.keys(draw).indexOf(Object.keys(draw).filter((x) => a == x)[0])
	];
}

document.getElementById("_2dcanvas").style.display = "none";
document.getElementById("_3dcanvas").style.display = "none";

document.addEventListener(
  "keydown",
  function () {
    if (event.keyCode == 123) {
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      return false;
    }
  },
  false
);

if (document.addEventListener) {
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );
} else {
  document.attachEvent("oncontextmenu", function () {
    window.event.returnValue = false;
  });
}

function removeOptions(selectElement) {
  var i,
    L = selectElement.options.length - 1;
  for (i = L; i >= 0; i--) {
    selectElement.remove(i);
  }
}

String.prototype.first_cap = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
function unit(a) {
  leist = [];
  for (i in get_JSON(google_calc.conversions)) {
    try {
      leist.push(
        JSON.stringify(google_calc.conversions)
          .replaceAll("},", "ø")
          .split("ø")
          [i].split(":")[0]
          .replace(/['"',"{"]/g, "")
      );
    } catch (a) {}
  }
  leist = leist
    .map((x) =>
      eval(`google_calc.conversions.${x}.units`).indexOf(a) > -1 ? x : false
    )
    .filter((x) => x)[0];

  return leist;
}
function convert(unita, a, unitb, c) {
  try {
    let u = unit(unita);
    let top = eval(`google_calc.conversions.${u}.units[0]`);
    let info = eval(`google_calc.conversions.${u}.units`);
    let con = `google_calc.conversions.${
      u.first_cap() + "." + top + "." + unitb
    }`;

    if (unita === unitb) {
      return 1;
    }
    let d =
      info.indexOf(unita) > info.indexOf(unitb) ? [true, false] : [false, true];
    if (c) {
      return eval(
        a +
          "" +
          (eval(con).includes("*")
            ? eval(con).replace("*", "/")
            : eval(con).includes("+")
            ? eval(con).replace("+", "-")
            : eval(con).replace("/", "*"))
      );
    } else {
      if (unita === top) {
        return eval(a + "" + eval(con));
      } else {
        return eval(
          eval(convert(top, a, unita, d[0])) +
            "*" +
            eval(convert(top, a, unitb, d[1]))
        ); //(a+""+
      }
    }
  } catch (e) {
    return "please select two options";
  }
}

var pi = Math.PI;

Math.cot = function (x) {
  return 1 / Math.tan(x);
};

const google_calc = {
  shapes: {
    _2d: {
      non_angle: {
        circle: {
          area: function (r) {
            return pi * Math.pow(r, 2);
          },
          radius: function (A) {
            return Math.sqrt(A / pi);
          },
          diameter: function (r) {
            return 2 * r;
          },
          circumference: function (r) {
            return 2 * pi * r;
          }
        },
        ellipse: {
          area: function (a, b) {
            return pi * a * b;
          },
          axisA: function (A, b) {
            return A / (pi * b);
          },
          axisB: function (A, a) {
            return A / (pi * a);
          },
          circumference: function (a, b) {
            return (
              pi *
              (a + b) *
              ((3 * Math.pow(a - b, 2)) /
                (Math.pow(a + b, 2) *
                  (Math.sqrt(
                    -3 * (Math.pow(a - b, 2) / Math.pow(a + b, 2)) + 4
                  ) +
                    10)) +
                1)
            );
          }
        }
      },
      triangles: {
        normal: {
          area: function (h, b) {
            return (h * b) / 2;
          },
          base: function (A, h) {
            return 2 * (A / h);
          },
          height: function (A, b) {
            return 2 * (A / b);
          },
          sideA: function (A, b, y) {
            return {
              deg: 2 * ((A / b) * Math.sin(y)),
              rad: 2 * ((A / b) * Math.sin(y * (pi / 180)))
            };
          },
          sideC: function (a, b, P) {
            return a - b - P;
          },
          gamma: function (a, b, A) {
            return {
              deg: (Math.asin((2 * A) / (a * b)) * 180) / pi,
              rad: Math.asin((2 * A) / (a * b))
            };
          },
          perimeter: function (a, b, c) {
            return a + b + c;
          }
        },
        right: {
          hypotenuse: function (a, b) {
            return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
          },
          legA: function (c, b) {
            return Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
          },
          legB: function (c, a) {
            return Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
          },
          perimeter: function (a, b) {
            return a + b + Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
          },
          area: function (a, b) {
            return (a * b) / 2;
          }
        },
        isosceles: {
          area: function (b, h) {
            return (b * h) / 2;
          },
          base: function (A, h) {
            return 2 * (A / h);
          },
          height: function (A, b) {
            return 2 * (A / b);
          },
          side: function (b, p) {
            return P / 2 - b / 2;
          },
          perimeter: function (a, b) {
            return 2 * a + b;
          }
        },
        equilateral: {
          area: function (a) {
            return (Math.sqrt(3) / 4) * Math.pow(a, 2);
          },
          side: function (A) {
            return (2 / 3) * Math.pow(3, 3 / 4) * Math.sqrt(A);
          },
          perimeter: function (a) {
            return 3 * a;
          }
        }
      },
      quadrilaterals: {
        square: {
          area: function (a) {
            return Math.pow(a, 2);
          },
          side: function (A) {
            return Math.sqrt(A);
          },
          diagonal: function (a) {
            return Math.sqrt(2) * a;
          },
          perimeter: function (a) {
            return 4 * a;
          }
        },
        rectangle: {
          area: function (w, l) {
            return w * l;
          },
          length: function (w, A) {
            return A / w;
          },
          width: function (A, l) {
            return A / l;
          },
          diagonal: function (w, l) {
            return Math.sqrt(Math.pow(w, 2) + Math.pow(l, 2));
          },
          perimeter: function (l, w) {
            return 2 * (l + w);
          }
        },
        kite: {
          area: function (d1, d2) {
            return (d1 * d2) / 2;
          },
          diagonal1: function (d2, A) {
            return 2 * (A / d2);
          },
          diagonal2: function (d1, p) {
            return 2 * (A / d1);
          },
          sideA: function (b, P) {
            return P / 2 - b;
          },
          sideB: function (a, P) {
            return P / 2 - a;
          },
          perimeter: function (s1, s2) {
            return 2 * (s1 + s2);
          }
        },
        rhombus: {
          area: function (d1, d2) {
            return (d1 * d2) / 2;
          },
          diagonal1: function (d2, A) {
            return 2 * (A / d2);
          },
          diagonal2: function (d1, A) {
            return 2 * (A / d1);
          },
          perimeter: function (a) {
            return 4 * a;
          }
        },
        trapezoid: {
          area: function (a, b, h) {
            return ((a + b) / 2) * h;
          },
          baseA: function (b, h, A) {
            return 2(A / h) - b;
          },
          baseB: function (a, h, A) {
            return 2(A / h) - a;
          },
          height: function (a, b, A) {
            return 2 * (A / a + b);
          },
          sideC: function (P, a, b, d) {
            return P - a - b - d;
          },
          sideD: function (P, a, b, c) {
            return P - a - b - c;
          },
          perimeter: function (a, b, c, d) {
            return a + b + c + d;
          }
        },
        parallelogram: {
          area: function (b, h) {
            return b * h;
          },
          base: function (A, h) {
            return A / h;
          },
          height: function (A, b) {
            return b / A;
          },
          side: function (P, b) {
            return P / 2 - b;
          },
          perimeter: function (a, b) {
            return 2 * (a + b);
          }
        }
      },
      gons: {
        pentagon: {
          area: function (a) {
            return (
              (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(a, 2)
            );
          },
          side: function (A) {
            return (
              ((2 * 5) ** (3 / 4) * Math.sqrt(A)) /
              (5 * Math.sqrt(20 + 5) ** (1 / 4))
            );
          },
          diagonal: function (a) {
            return ((1 + Math.sqrt(a)) / 2) * a;
          },
          perimeter: function (a) {
            return 5 * a;
          }
        },
        hexagon: {
          area: function (a) {
            return ((3 * Math.sqrt(3)) / 2) * Math.pow(a, 2);
          },
          side: function (A) {
            return Math.pow(3, 1 / 4) * Math.sqrt(2 * (A / 9));
          },
          perimeter: function (a) {
            return 6 * a;
          }
        },
        heptagon: {
          area: function (a) {
            return (7 / 4) * Math.pow(a, 2) * Math.cot(pi / 7);
          },
          side: function (A) {
            return Math.sqrt(4 * A * (Math.tan(pi / 7) / 7));
          },
          perimeter: function (a) {
            return 7 * a;
          }
        },
        octagon: {
          area: function (a) {
            return 2 * (1 + Math.sqrt(2)) * Math.pow(a, 2);
          },
          side: function (A) {
            return Math.sqrt(Math.sqrt(2) * (A / 2) - A / 2);
          },
          perimeter: function (a) {
            return 8 * a;
          }
        },
        nonagon: {
          area: function (a) {
            return (9 / 4) * Math.pow(a, 2) * Math.cot(pi / 9);
          },
          side: function (A) {
            return Math.sqrt(4 * A * (Math.tan(pi / 9) / 9));
          },
          perimeter: function (a) {
            return 9 * a;
          }
        },
        decagon: {
          area: function (a) {
            return (5 / 2) * Math.pow(a, 2) * Math.sqrt(5 + 2 * Math.sqrt(5));
          },
          side: function (A) {
            return Math.sqrt(2 * (A / 5)) / (Math.sqrt(20) + 5) ** (1 / 4);
          },
          perimeter: function (a) {
            return 10 * a;
          }
        }
      }
    },
    _3d: {
      non_l: {
        sphere: {
          volume: function (r) {
            return (4 / 3) * pi * Math.pow(r, 3);
          },
          radius: function (V) {
            return (3 * (V / (4 * pi))) ** (1 / 3);
          },
          diameter: function (r) {
            return 2 * r;
          },
          surface_area: function (r) {
            return 4 * pi * Math.pow(r, 2);
          }
        },
        torus: {
          volume: function (R, r) {
            return pi * Math.pow(r, 2) * (2 * pi * R);
          },
          major_radius: function (r, V) {
            return (1 / 2) * V * (1 / (pi * r)) ** 2;
          },
          minor_radius: function (R, V) {
            return Math.sqrt(V / (2 * R)) / pi;
          },
          area: function (R, r) {
            return 2 * pi * R * (2 * pi * r);
          }
        },
        cylinder: {
          volume: function (r, h) {
            return pi * Math.pow(r, 2) * h;
          },
          radius: function (h, V) {
            return Math.sqrt(V / (pi * h));
          },
          height: function (V, r) {
            return V / (pi * Math.pow(r, 2));
          },
          diameter: function (V, h) {
            return 2 * Math.sqrt(V / (pi * h));
          },
          surface_area: function (r, h) {
            return 2 * pi * r * h + 2 * pi * Math.pow(r, 2);
          },
          lateral_surface: function (r, h) {
            return 2 * pi * r * h;
          },
          base_area: function (r) {
            return pi * Math.pow(r, 2);
          }
        }
      },
      prism: {
        triangular_prism: {
          volume: function (a, b, c, h) {
            return (
              (1 / 4) *
              h *
              Math.sqrt(
                -1 * Math.pow(a, 4) +
                  2 * (a * b) ** 2 +
                  2 * (a * c) ** 2 -
                  Math.pow(b, 4) +
                  2 * (b * c) ** 2 -
                  Math.pow(c, 4)
              )
            );
          },
          base_sideA: function (b, c, h, V) {
            return {
              a: Math.sqrt(
                Math.pow(b, 2) +
                  Math.pow(c, 2) +
                  2 * Math.sqrt(Math.pow(b * c, 2) - 4 * (V / h) ** 2)
              ),
              or: Math.sqrt(
                Math.pow(b, 2) +
                  Math.pow(c, 2) -
                  2 * Math.sqrt(Math.pow(b * c, 2) - 4 * (V / h) ** 2)
              )
            };
          },
          base_sideB: function (a, c, h, V) {
            return {
              b: Math.sqrt(
                Math.pow(a, 2) +
                  Math.pow(c, 2) +
                  2 * Math.sqrt(Math.pow(a * c, 2) - 4 * (V / h) ** 2)
              ),
              or: Math.sqrt(
                Math.pow(a, 2) +
                  Math.pow(c, 2) -
                  2 * Math.sqrt(Math.pow(a * c, 2) - 4 * (V / h) ** 2)
              )
            };
          },
          base_sidec: function (a, b, h, V) {
            return {
              c: Math.sqrt(
                Math.pow(a, 2) +
                  Math.pow(b, 2) +
                  2 * Math.sqrt(Math.pow(a * b, 2) - 4 * (V / h) ** 2)
              ),
              or: Math.sqrt(
                Math.pow(a, 2) +
                  Math.pow(b, 2) -
                  2 * Math.sqrt(Math.pow(a * b, 2) - 4 * (V / h) ** 2)
              )
            };
          },
          height: function (a, b, c, V) {
            return (
              4 *
              (V /
                Math.sqrt(
                  -1 * Math.pow(a, 4) +
                    2 * (a * b) ** 2 +
                    2 * (a * c) ** 2 -
                    Math.pow(b, 4) +
                    2 * (b * c) ** 2 -
                    Math.pow(c, 4)
                ))
            );
          },
          surface_area: function (a, b, c, h) {
            return (
              a * h +
              b * h +
              c * h +
              (1 / 2) *
                Math.sqrt(
                  -1 * Math.pow(a, 4) +
                    2 * (a * b) ** 2 +
                    2 * (a * c) ** 2 -
                    Math.pow(b, 4) +
                    2 * (b * c) ** 2 -
                    Math.pow(c, 4)
                )
            );
          },
          lateral_surface_area: function (a, b, c, h) {
            return a * b * c * h;
          },
          base_area: function (a, b, c) {
            return (
              (1 / 4) *
              Math.sqrt(
                -1 * Math.pow(a, 4) +
                  2 * (a * b) ** 2 +
                  2 * (a * c) ** 2 -
                  Math.pow(b, 4) +
                  2 * (b * c) ** 2 -
                  Math.pow(c, 4)
              )
            );
          }
        },
        rectangular_prism: {
          volume: function (w, l, h) {
            return w * h * l;
          },
          length: function (V, h, w) {
            return V / (h * w);
          },
          width: function (V, h, l) {
            return V / (h * l);
          },
          space_diagonal: function (l, w, h) {
            return Math.sqrt(Math.pow(l, 2) + Math.pow(w, 2) + Math.pow(h, 2));
          },
          surface_area: function (l, w, h) {
            return 2 * (w * l + h * l + h * w);
          }
        },
        pentagonal_prism: {
          volume: function (a, h) {
            return (
              (1 / 4) *
              Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) *
              Math.pow(a, 2) *
              h
            );
          },
          base_edge: function (h, V) {
            return (
              ((2 * 5) ** (3 / 4) * Math.sqrt(V / h)) /
              (5 * Math.sqrt(20 + 5) ** (1 / 4))
            );
          },
          height: function (a, V) {
            return (
              (V * Math.sqrt(16 / 5 - Math.sqrt(1024 / 125))) / Math.pow(a, 2)
            );
          },
          surface_area: function (a, h) {
            return (
              5 * a * h +
              (1 / 2) *
                Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) *
                Math.pow(a, 2) *
                h
            );
          },
          lateral_surface_area: function (a, H) {
            return 5 * a * h;
          },
          base_area: function (a) {
            return (
              (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(a, 2)
            );
          },
          volume: function (a, h) {
            return (
              (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(a, 2)
            );
          }
        },
        hexagonal_prism: {
          volume: function (a, h) {
            return ((3 * Math.sqrt(3)) / 2) * Math.pow(a, 2) * h;
          },
          base_edge: function (h, V) {
            return Math.pow(3, 1 / 4) * Math.sqrt(2 * (V / (9 * h)));
          },
          height: function (a, V) {
            return 2 * Math.sqrt(3) * (V / (9 * Math.pow(a, 2)));
          },
          surface_area: function (a, h) {
            return 6 * a * h + 3 * Math.sqrt(3 * Math.pow(a, 2));
          },
          lateral_surface_area: function (a, h) {
            return 6 * a * h;
          },
          base_area: function (a) {
            return 3 * Math.sqrt(3) * (Math.pow(a, 2) / 2);
          }
        },
        heptagonal_prism: {
          volume: function (a, h) {
            return (7 / 4) * Math.pow(a, 2) * Math.cot(pi / 7) * h;
          },
          base_edge: function (h, V) {
            return Math.sqrt(4 * V * ((Math.tan(pi / 7) / 7) * h));
          },
          height: function (a, V) {
            return 4 * V * ((Math.tan(pi / 7) / 7) * Math.pow(a, 2));
          },
          base_edge: function (a) {
            return (7 / 4) * Math.pow(a, 2) * Math.cot(pi / 7);
          },
          surface_area: function (a, h) {
            return 7 * a * h + (7 / 2) * Math.pow(a, 2) * Math.cot(pi / 7);
          },
          lateral_surface_area: function (a, h) {
            return 7 * a * h;
          }
        },
        octagonal_prism: {
          volume: function (a, h) {
            return 2 * (1 + Math.sqrt(2)) * (Math.pow(a, 2) * h);
          },
          base_edge: function (h, V) {
            return Math.sqrt(V / (2 * h * (1 + Math.sqrt(2))));
          },
          height: function (a, V) {
            return V / (2 * h * (1 + Math.sqrt(2)));
          },
          surface_area: function (a, h) {
            return 8 * a * h + 4 * (1 + Math.sqrt(2)) * Math.pow(a, 2);
          },
          base_area: function (a) {
            return 2 * (1 + Math.sqrt(2)) * Math.pow(a, 2);
          },
          lateral_surface_area: function (a, h) {
            return 8 * a * h;
          }
        },
        nonagonal_prism: {
          volume: function (a, h) {
            return (9 / 4) * Math.pow(a, 2) * Math.cot(pi / 9) * h;
          },
          base_edge: function (h, A) {
            return A / (9 * h);
          },
          height: function (a, V) {
            return 4 * V * ((Math.tan(pi / 9) / 9) * Math.pow(a, 2));
          },
          base_area: function (a) {
            return (9 / 4) * Math.pow(a, 2) * Math.cot(pi / 9);
          },
          surface_area: function (a, h) {
            return 9 * a * h + (9 / 2) * Math.pow(a, 2) * Math.cot(pi / 9);
          },
          lateral_surface_area: function (a, h) {
            return 9 * a * h;
          }
        },
        decagonal_prism: {
          volume: function (a, h) {
            return (
              (5 / 2) * Math.pow(a, 2) * (Math.sqrt(5 + 2 * Math.sqrt(5)) * h)
            );
          },
          base_edge: function (h, V) {
            return (
              Math.sqrt(2 * (V / (5 * h))) / Math.pow(Math.sqrt(20) + 5, 1 / 4)
            );
          },
          height: function (a, V) {
            return (
              2 * (V / (5 * Math.pow(a, 2) * Math.sqrt(Math.sqrt(20) + 5)))
            );
          },
          surface_area: function (a, h) {
            return (
              10 * a * h + 5 * Math.pow(a, 2) * Math.sqrt(5 + 2 * Math.sqrt(5))
            );
          },
          base_area: function (a) {
            return (5 / 2) * Math.pow(a, 2) * Math.sqrt(5 + 2 * Math.sqrt(5));
          },
          lateral_surface_area: function (a, h) {
            return 10 * a * h;
          }
        }
      },
      cone: {
        square_pyramid: {
          volume: function (a, h) {
            return Math.pow(a, 3) * (h / 3);
          },
          base_edge: function (h, V) {
            return Math.sqrt(3 * (V / h));
          },
          height: function (V, a) {
            return 3 * (V / Math.pow(a, 2));
          },
          base_area: function (a, h) {
            return (
              Math.pow(a, 2) +
              2 * a * Math.sqrt(Math.pow(a, 2) / 4 + Math.pow(h, 2))
            );
          },
          face_area: function (a, h) {
            return (a / 2) * Math.sqrt(Math.pow(a, 2) / 4 + Math.pow(h, 2));
          },
          lateral_surface_area: function (a, h) {
            return a * Math.sqrt(Math.pow(a, 2) + 4 * Math.pow(h, 2));
          }
        },
        pentagonal_pyramid: {
          volume: function (a, h) {
            return (5 / 12) * 1.37638192047 * h * Math.pow(a, 2);
          },
          base_edge: function (h, V) {
            return (
              24 *
              (V / (5 * h * (Math.sqrt(2) + Math.sqrt(10)))) *
              Math.pow(5 - Math.sqrt(5), 1 / 4)
            );
          },
          height: function (a, V) {
            return (
              (24 * V * Math.sqrt(5 - Math.sqrt(5))) /
              (5 * Math.pow(a, 2) * (Math.sqrt(2) + Math.sqrt(10)))
            );
          },
          surface_area: function (a, h) {
            return (
              (5 / 4) * 1.37638192047 * Math.sqrt(a, 2) +
              5 *
                (a / 2) *
                Math.sqrt(Math.pow(h, 2) + ((a * 1.37638192047) / 2) ** 2)
            );
          },
          base_area: function (a) {
            return (5 / 4) * 1.37638192047 * Math.sqrt(a, 2);
          },
          face_area: function (a, h) {
            return (a / 2) * Math.sqrt(h ** 2 + ((a * 1.37638192047) / 2) ** 2);
          },
          lateral_surface_area: function (a, h) {
            return (
              5 * a * (Math.sqrt(h ** 2 + (a * (1.37638192047 / 2)) ** 2) / 2)
            );
          }
        },
        hexagonal_pyramid: {
          volume: function (a, h) {
            return (Math.sqrt(3) / 2) * Math.pow(a, 2) * h;
          },
          base_edge: function (h, V) {
            return Math.pow(3, 3 / 4) * Math.sqrt(2 * ((V / 9) * h));
          },
          height: function (a, V) {
            return 2 * Math.sqrt(3) * (V / (3 * Math.pow(a, 2)));
          },
          surface_area: function (a, h) {
            return (
              ((3 * Math.sqrt(3)) / 2) * Math.pow(a, 2) +
              3 * a * Math.sqrt(h ** 2 + (3 * Math.pow(a, 2)) / 4)
            );
          },
          base_area: function (a) {
            return ((3 * Math.sqrt(3)) / 2) * Math.pow(a, 2);
          },
          face_area: function (a, h) {
            return (
              (a / 2) * Math.sqrt(Math.pow(h, 2) + (3 * Math.pow(a, 2)) / 4)
            );
          },
          lateral_surface_area: function (a, h) {
            return 3 * a * Math.sqrt(Math.pow(h, 2) + (3 * Math.pow(a, 2)) / 4);
          }
        },
        cone: {
          volume: function (r, h) {
            return pi * Math.pow(r, 2) * (h / 3);
          },
          radius: function (h, V) {
            return Math.sqrt(3 * (V / (pi * h)));
          },
          height: function (r, V) {
            return 3 * (v / (pi * Math.pow(r, 2)));
          },
          slant_height: function (r, h) {
            return Math.sqrt(r ** 2 + h ** 2);
          },
          base_area: function (r) {
            return pi * Math.pow(r, 2);
          },
          surface_area: function (r, h) {
            return pi * r * (r + Math.sqrt(r ** 2 + h ** 2));
          },
          lateral_surface: function (r, h) {
            return pi * r * Math.sqrt(r ** 2 + h ** 2);
          }
        }
      },
      dice: {
        tetrahedron: {
          volume: function (a) {
            return Math.pow(a, 3) / (6 * Math.sqrt(2));
          },
          edge: function (V) {
            return Math.sqrt(2) * Math.pow(3 * V, 1 / 3);
          },
          height: function (a) {
            return Math.sqrt(2 / 3) * a;
          },
          surface_area: function (a) {
            return Math.sqrt(3) * Math.pow(a, 2);
          },
          face_area: function (a) {
            return (Math.sqrt(3) / 4) * Math.pow(a, 2);
          }
        },
        cuboid: {
          volume: function (a) {
            return Math.pow(a, 3);
          },
          edge: function (V) {
            return Math.pow(V, 1 / 3);
          },
          space_diagonal: function (a) {
            return Math.sqrt(3) * a;
          },
          surface_area: function (a) {
            return 6 * Math.pow(a, 2);
          }
        },
        octahedron: {
          volume: function (a) {
            return (Math.sqrt(2) / 3) * Math.pow(a, 2);
          },
          edge: function (V) {
            return Math(2, 5 / 6) * Math.pow(3 * (V / 8), 1 / 3);
          },
          surface_area: function (a) {
            return 2 * Math, sqrt(3) * Math.pow(a, 2);
          }
        },
        dodecahedron: {
          volume: function (a) {
            return ((15 + 7 * Math.sqrt(5)) / 4) * Math.pow(a, 3);
          },
          edge: function (A) {
            return (
              Math.pow(5, 3 / 4) *
              (Math.sqrt(A / 75) / (Math.sqrt(20) + 5) ** (1 / 4))
            );
          },
          surface_area: function (a) {
            return 3 * Math.sqrt(25 + 10 * Math.sqrt(5)) * Math.pow(a, 2);
          }
        }
      }
    }
  },
  conversions: {
    Area: {
      units: [
        "square_kilometer",
        "square_meter",
        "square_mile",
        "square_yard",
        "square_foot",
        "square_inch",
        "hectar",
        "acre"
      ],
      square_kilometer: {
        square_kilometer: "*1",
        square_meter: "*1e+6",
        square_mile: "/2.59",
        square_yard: "*1.196e+6",
        square_foot: "*1.076e+7",
        square_inch: "*1.55e+9",
        hectar: "*100",
        acre: "*247"
      }
    },
    Data_transver_rate: {
      units: [
        "bit_per_second",
        "kilobit_per_second",
        "kilobyte_per_second",
        "kibibit_per_pecond",
        "megabit_per_second",
        "megabyte_per_second",
        "mebibit_per_second",
        "gigabit_per_second",
        "gigabyte_per_second",
        "gibibit_per_second",
        "terabit_per_second",
        "terabyte_per_second",
        "Tebibit_per_second"
      ],
      bit_per_second: {
        bit_per_second: "*1",
        kilobit_per_second: "/1000",
        kilobyte_per_second: "/8000",
        kibibit_per_pecond: "/1024",
        megabit_per_second: "*/1e+6",
        megabyte_per_second: "/8e+6",
        mebibit_per_second: "/1.049e+6",
        gigabit_per_second: "/1e+9",
        gigabyte_per_second: "/8e+9",
        gibibit_per_second: "/1.074e+9",
        terabit_per_second: "/1e+12",
        terabyte_per_second: "/8e+12",
        Tebibit_per_second: "/1.1e+12"
      }
    },
    Data_transver: {
      units: [
        "bit",
        "kilobit",
        "kibibit",
        "megabit",
        "mebibit",
        "gigabit",
        "gibibit",
        "terabit",
        "tebibit",
        "petabit",
        "byte",
        "kilobyte",
        "kibibyte",
        "megabyte",
        "mebibyte",
        "gigabyte",
        "gibibyte",
        "terabyte",
        "tebibyte",
        "petabyte",
        "pebibyte"
      ],
      bit: {
        bit: "*1",
        kilobit: "/1000",
        kibibit: "/1024",
        megabit: "/1e+6",
        mebibit: "/1.049e+6",
        gigabit: "1e+9",
        gibibit: "/1.074e+9",
        terabit: "/1e+12",
        tebibit: "/1.1e+12",
        petabit: "/1e+15",
        byte: "/8",
        kilobyte: "/8000",
        kibibyte: "/8192",
        megabyte: "/8e+6",
        mebibyte: "/8.389e+6",
        gigabyte: "/8e+9",
        gibibyte: "/8.59e+9",
        terabyte: "/8e+12",
        tebibyte: "/8.796e+12",
        petabyte: "/8e+15",
        pebibyte: "/9.007e+15"
      }
    },
    Energy: {
      units: [
        "joule",
        "kilojoule",
        "gram_calorie",
        "kilocalorie",
        "watt_hour",
        "kilowatt_hour",
        "electronvolt",
        "british_thermal_unit",
        "us_therm",
        "foot_pound"
      ],
      joule: {
        joule: "*1",
        kilojoule: "/1000",
        gram_calorie: "/4.184",
        kilocalorie: "/4184",
        watt_hour: "/3600",
        kilowatt_hour: "/3.6e+6",
        electronvolt: "*6.242e+18",
        british_thermal_unit: "/1055",
        us_therm: "/1.055e+8",
        foot_pound: "1.055e+8"
      }
    },
    Frequency: {
      units: ["hertz", "kilohertz", "megahertz", "gigahertz"],
      hertz: {
        hertz: "*1",
        kilohertz: "/1000",
        megahertz: "/1e+6",
        gigahertz: "/1e+9"
      }
    },
    Fule_economy: {
      units: [
        "miles_per_gallon",
        "miles_per_gallon_Imperial",
        "kilometer_per_liter"
      ],
      miles_per_gallon: {
        miles_per_gallon: "*1",
        miles_per_gallon_Imperial: "/1.201",
        kilometer_per_liter: "/2.352"
      }
    },
    Length: {
      units: [
        "kilometer",
        "meter",
        "centimeter",
        "millimeter",
        "micrometer",
        "nanometer",
        "mile",
        "yard",
        "foot",
        "inch",
        "nautical_mile"
      ],
      kilometer: {
        kilometer: "*1",
        meter: "*1000",
        centimeter: "*100000",
        millimeter: "*1e+6",
        micrometer: "*1e+9",
        nanometer: "*1e+12",
        mile: "/1.609",
        yard: "*1094",
        foot: "*3281",
        inch: "*39370",
        nautical_mile: "/1.852"
      }
    },
    Plane_angle: {
      units: [
        "degree",
        "gradian",
        "milliradian",
        "Minute_of_arc",
        "radian",
        "Second_of_arc"
      ],
      degree: {
        degree: "*1",
        gradian: "/1.11111111111",
        milliradian: "*(1000*Math.PI)/180",
        Minute_of_arc: "*60",
        radian: "*(Math.PI/180)",
        Second_of_arc: "*3600"
      }
    },
    Pressure: {
      units: [
        "bar",
        "pascal",
        "pound_force_per_square_inch",
        "standard_atmosphere",
        "torr"
      ],
      bar: {
        bar: "*1",
        pascal: "*100000",
        pound_force_per_square_inch: "*14.504",
        standard_atmosphere: "/1.013",
        torr: "*750"
      }
    },
    Speed: {
      units: [
        "miles_per_hour",
        "foot_per_second",
        "meter_per_second",
        "kilometer_per_hour",
        "knot"
      ],
      Miles_per_hour: {
        miles_per_hour: "*1",
        foot_per_second: "*1.467",
        meter_per_second: "/2.237",
        kilometer_per_hour: "*1.609",
        knot: "/1.151"
      }
    },
    Temperature: {
      units: ["celsius", "fahrenheit", "kelvin"],
      celsius: { celsius: "*1", fahrenheit: "× (9/5)", kelvin: "+273.15" }
    },
    Time: {
      units: [
        "nanosecond",
        "microsecond",
        "millisecond",
        "second",
        "minute",
        "hour",
        "day",
        "week",
        "month",
        "calendar_year",
        "decade",
        "century"
      ],
      nanosecond: {
        nanosecond: "*1",
        microsecond: "/1000",
        millisecond: "/1e+6",
        second: "/1e+9",
        minute: "/6e+10",
        hour: "/3.6e+12",
        day: "8.64e+13",
        week: "6.048e+14",
        month: "/2.628e+15",
        calendar_year: "/3.154e+16",
        decade: "/3.154e+17",
        century: "/3.154e+18"
      }
    },
    Volume: {
      units: [
        "us_liquid_gallon",
        "us_liquid_quart",
        "us_liquid_pint",
        "us_legal_cup",
        "us_fluid_ounce",
        "us_tablespoon",
        "us_teaspoon",
        "cubic_meter",
        "liter",
        "milliliter",
        "imperial_gallon",
        "imperial_quart",
        "imperial_pint",
        "imperial_cup",
        "imperial_fluid_ounce",
        "imperial_tablespoon",
        "imperial_teaspoon",
        "cubic_foot",
        "cubic_inch"
      ],
      US_liquid_gallon: {
        US_liquid_gallon: "*1",
        US_liquid_quart: "*4",
        US_liquid_pint: "*8",
        US_legal_cup: "*15.773",
        US_fluid_ounce: "*128",
        US_tablespoon: "*256",
        US_teaspoon: "*768",
        Cubic_meter: "/264",
        Liter: "*3.785",
        Milliliter: "*3785",
        Imperial_gallon: "/1.201",
        Imperial_quart: "*3.331",
        Imperial_pint: "*6.661",
        Imperial_cup: "*13.323",
        Imperial_fluid_ounce: "*133",
        Imperial_tablespoon: "*213",
        Imperial_teaspoon: "*639",
        Cubic_foot: "/7.481",
        Cubic_inch: "*231"
      }
    }
  }
};

function dropdown(a, c) {
  var opt = document.createElement("option");
  opt.innerHTML = "";
  document.getElementById(c).append(opt);

  for (i in a) {
    var opt = document.createElement("option");
    opt.value = a[i];
    opt.id = a[i];
    opt.innerHTML = a[i].replaceAll("_", " ");
    document.getElementById(c).append(opt);
  }
}

function line_breck(c) {
  document.getElementById(c || "int").append(document.createElement("br"));
}

function text(text, where) {
  let c = document.createTextNode(text);
  document
    .getElementById(where || "int")
    .append(document.createElement("a").appendChild(c));
}

function input(c, d) {
  let intp = document.createElement("input");
  intp.id = d;
  document.getElementById(c).append(intp);
}

function get_JSON(j) {
  // console.log(j)
  var names = [];
  for (const [key] of Object.entries(j)) {
    names.push(key);
  }
  return names;
}

function fin(f) {
  isobj = typeof f == "object";
  var vars = eval(f)
    .toString()
    .split("  ")
    .filter((x) => x.includes("function") || x.includes("return"))[0]
    .toString()
    .replace("function", "")
    .replace("return", "")
    .replaceAll(/[{}]/g, "")
    .toString()
    .replace("(", "")
    .replace(")", "")
    .split(",");
  var formula = eval(f)
    .toString()
    .split("  ")
    .filter((x) => x.includes("function") || x.includes("return"))[1]
    .toString()
    .replace("function", "")
    .replace("return", "")
    .replaceAll(/[{}]/g, "")
    .replaceAll("Math.sqrt", "√")
    .replaceAll("*", "•")
    .replaceAll(isobj ? ("", "") : (",", "^"))
    .replaceAll("Math.pow", "")
    .replaceAll("pi", "πs")
    .replaceAll("••", "^");

  if (isobj) {
    formula = formula
      .spit(",")
      .map((x) => playf(x))
      .toString();
  }
  vars = vars.length == 1 ? vars.toString() : vars;

  return [vars, formula];
}

var last;

function load() {
  document.getElementById("q").style.display = "none";
  document.getElementById("w").style.display = "none";
}

load();

function converta() {
  removeOptions(document.getElementById("shape"));
  document.getElementById("shapeb").disabled = true;
  document.getElementById("shapea").disabled = false;
  document.getElementById("q").style.display = "none";
  document.getElementById("w").style.display = "block";
  try {
    removeOptions(document.getElementById("conversions"));
  } catch (e) {}
  dropdown(get_JSON(google_calc.conversions), "conversions");
  var last;
  document.getElementById("conversions").onchange = function () {
    try {
      removeOptions(document.getElementById("u/a"));
    } catch (e) {}
    dropdown(get_JSON(eval(`google_calc.conversions.${this.value}`)), "u/a");
    last = `google_calc.conversions.${this.value}`;
  };
  document.getElementById("u/a").onchange = function () {
    removeOptions(document.getElementById("a"));
    removeOptions(document.getElementById("b"));

    if (this.value !== "units") {
      document.getElementById("list").style.visibility = "hidden";
      document.getElementById("on").style.visibility = "visible";

      dropdown(get_JSON(eval(`${last}.${this.value}`)), "a");
      dropdown(get_JSON(eval(`${last}.${this.value}`)), "b");

      document.getElementById("inta").value = "1";
      document.getElementById("intb").value = "1";
    } else {
      document.getElementById("on").style.visibility = "hidden";
      document.getElementById("list").style.visibility = "visible";
      document.getElementById("list").innerHTML = "";
      document.getElementById("list").innerHTML = eval(last + ".units")
        .join(" ")
        .replaceAll("_", " ");
    }
  };

  document.getElementById("inta").onchange = function () {
    document.getElementById("intb").value = convert(
      document.getElementById("a").value,
      document.getElementById("inta").value,
      document.getElementById("b").value,
      false
    );
  };
  document.getElementById("intb").onchange = function () {
    document.getElementById("inta").value = convert(
      document.getElementById("b").value,
      document.getElementById("intb").value,
      document.getElementById("a").value,
      false
    );
  };

  document.getElementById("a").onchange = function () {
    //removeOptions(document.getElementById("a"))
    document.getElementById("intb").value = convert(
      document.getElementById("a").value,
      document.getElementById("inta").value,
      document.getElementById("b").value,
      false
    );
  };
  document.getElementById("b").onchange = function () {
    // removeOptions(document.getElementById("b"))
    document.getElementById("intb").value = convert(
      document.getElementById("a").value,
      document.getElementById("inta").value,
      document.getElementById("b").value,
      false
    );
  };
}

function shapea() {
  removeOptions(document.getElementById("dimention"));
  document.getElementById("shapea").disabled = true;
  document.getElementById("shapeb").disabled = false;
  document.getElementById("w").style.display = "none";
  document.getElementById("q").style.display = "block";
  document.getElementById("ans").innerHTML = "";
  dropdown(get_JSON(google_calc.shapes), "dimention");

  document.getElementById("dimention").onchange = function () {
    document.getElementById("ans").innerHTML = "";
    document.getElementById("f").innerHTML = "";
    try {
      removeOptions(document.getElementById("shapes"));
    } catch (e) {}
    try {
      removeOptions(document.getElementById("shape"));
    } catch (e) {}
    try {
      removeOptions(document.getElementById("formula"));
    } catch (e) {}

    dropdown(get_JSON(eval(`google_calc.shapes.${this.value}`)), "shapes");
    last = `google_calc.shapes.${this.value}`;
  };
  document.getElementById("shapes").onchange = function () {
    last = last.split(".");
    last.length = 3;
    last = last.join(".");
    document.getElementById("ans").innerHTML = "";
    document.getElementById("f").innerHTML = "";
    try {
      removeOptions(document.getElementById("shape"));
    } catch (e) {}
    dropdown(get_JSON(eval(`${last}.${this.value}`)), "shape");
    last = `${last}.${this.value}`;
  };
 document.getElementById("shape").onchange = function () {
		if (document.getElementById("dimention").value == "_2d") {
			var context = document.getElementById("_2dcanvas").getContext("2d");
			context.clearRect(
				0,
				0,
				document.getElementById("_2dcanvas").width,
				document.getElementById("_2dcanvas").height
			);
		}
		document.getElementById("_2dcanvas");
		document.getElementById("_3dcanvas").style.display = "none";
		document.getElementById("ans").innerHTML = "";
		last = last.split(".");
		last.length = 4;
		last = last.join(".");
		document.getElementById("f").innerHTML = "";
		try {
			removeOptions(document.getElementById("formula"));
		} catch (e) {}
		dropdown(get_JSON(eval(`${last}.${this.value}`)), "formula");

		last = `${last}.${this.value}`;
		drawshape(this.value.replaceAll("_", " "));
	};
  document.getElementById("formula").onchange = function () {
    document.getElementById("ans").innerHTML = "";
    document.getElementById("f").innerHTML = "";
    last = last.split(".")
    last.length  = 5
    last = last.toString().replace(/[","]/g,'.')
    
    lis = fin(`${last}.${this.value}`);
    if (typeof lis[0] == "string") {
      text(lis[0], "f");
      input("f", lis[0]);
    } else {
     
      
      for (i in lis[0]) {
        text(lis[0][i] + ": ", "f");
        input("f", lis[0][i]);
      }
    }
    document.getElementById("f").innerHTML += "<br>" + lis[1];
    last = `${last}.${this.value}`;
    
  };
  document.getElementById("f").onchange = function () {
    last = last.split(".");
    last.length = 6;
    last = last.join(".");

    var children = document.getElementById("f").children;
    var idArr = [];
    for (var i = 0; i < children.length; i++) {
      idArr.push(children[i].id);
    }
    idArr.length = idArr.length - 1;
    idArr = idArr.map((x) => Number(document.getElementById(x).value));
    document.getElementById("ans").innerHTML = eval(
      last +
        `(${idArr
          .map((x) => (x.length < 1 ? 0 : x))
          .toString()
          .replace(/["[","]"]/g, "")})`
    );
  };
}

shapea();
