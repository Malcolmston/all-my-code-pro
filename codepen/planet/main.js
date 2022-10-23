var load = document.getElementById("main")


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                load.contentWindow.document.body.innerHTML =(allText);
            }
        }
    }
    rawFile.send(null);
}

//load.innerHTML = "howto.html"//"how_to/howto.mp4"
 //readTextFile("howto.html")


String.prototype.firstcap = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.firstlow = function () {
  return this.charAt(0).toLowerCase() + this.slice(1);
};

function getData(planet, obj, length) {
  var iframe = document.getElementById("main");
  // iframe.src = "https://giphy.com/embed/feN0YJbVs0fwA"

  iframe.src = "loader/index.template.html";

  var url =
    planet.toLowerCase() == obj.toLowerCase()
      ? `https://en.wikipedia.org/wiki/${obj.firstcap()}`
      : `https://en.wikipedia.org/wiki/${obj.firstcap()}_(moon)`;

  /*(planet.toLowerCase() == obj.toLowerCase()
      ? `https://solarsystem.nasa.gov/planets/${planet}/in-depth/`
      : planet == "earth"
      ? `https://solarsystem.nasa.gov/moons/${
          obj.toLowerCase() === "moon" ? planet + "s" : planet
        }-moon${length - 1 > 1 ? "s" : ""}/in-depth/`
      : `https://solarsystem.nasa.gov/moons/${
          obj.toLowerCase() === "moon" ? planet + "s" : planet
        }-moon${((length - 1 )> 1) ? "s" : ""}/${obj.toLowerCase()}/in-depth/`)
*/

  setTimeout(function () {
    iframe.addEventListener("load", function () {
      this.contentWindow.document.notesform.ID_client.value = Client;
    });
    iframe.src = encodeURI(url);
  }, 500);
  srcame.src = url;
}

function imageToUri(url, callback) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  base_image = new Image();
  base_image.src = url;
  base_image.onload = function () {
    canvas.width = base_image.width;
    canvas.height = base_image.height;

    ctx.drawImage(base_image, 0, 0);

    callback(canvas.toDataURL("image/png"));

    canvas.remove();
  };
}

var gui = new dat.GUI();

const doccontent = document.getElementById("main-container");

function imageToUri(url, callback) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  base_image = new Image();
  base_image.src = url;
  base_image.onload = function () {
    canvas.width = base_image.width;
    canvas.height = base_image.height;

    ctx.drawImage(base_image, 0, 0);

    callback(canvas.toDataURL("image/png"));

    canvas.remove();
  };
}

var viz = new Spacekit.Simulation(doccontent, {
  jdPerSecond: 0.1,
  particleTextureUrl: "{{assets}}/sprites/fuzzyparticle.png",
  unitsPerAu: 100.0,
  camera: {
    initialPosition: [
      0.0014980565625981512,
      -0.030445338891231168,
      0.03616394298897485
    ]
  }
});

// Create a light source somewhere off in the distance.
const SUN_POS = [5, 5, 1];
viz.createLight(SUN_POS);
viz.createObject(
  "sun",
  Object.assign(Spacekit.SpaceObjectPresets.SUN, {
    position: SUN_POS
  })
);

// Create a light source somewhere off in the distance.
viz.createLight([1, 1, 1]);

// Create a starry background using Yale Bright Star Catalog Data.
viz.createStars();

function Arrtoopt(arr, Node) {
  var b = document.getElementById(Node);
  let a = document.createElement("option");

  //for(i in arr){
  a.innerText = arr;
  a.value = arr;
  b.append(a);
  //}
}

function planer(planet) {
  var size = [
    71492 / 149598000,
    63968 / 149598000,
    21060.1 / 149598000,
    5582 / 149598000, //m
    71492 / 149598000,
    58232.503 / 149598000,
    149598 / 149598000,
    26025 / 149598000,
    23025 / 149598000
  ];
  var name = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto"
  ];

  imageToUri(`images/${planet}.jpeg`, function (uri) {
    const jupiter = viz.createSphere(planet, {
      textureUrl: uri,
      radius: size[name.indexOf(planet)], // radius in AU, so jupiter is shown to scale
      levelsOfDetail: [
        { radii: 0, segments: 64 },
        { radii: 30, segments: 16 },
        { radii: 60, segments: 8 }
      ],
      atmosphere: {
        enable: true
      }
    });
    viz.zoomToFit(jupiter);
  });

  gui.destroy();
  gui = new dat.GUI();

  // Set up gui and user interactions
  const guiState = {
    Speed: 0.1,
    Highlight: "All",
    moons: planet,
    "Hide other orbits": false,
    "Hide labels": false,
    "Set Date": function () {
      const input = prompt("Enter a date in YYYY-MM-DD format", "2000-01-01");
      if (input) {
        viz.setDate(new Date(input));
      }
    }
  };
  // #orbit type

  var Speed = document.getElementById("r");

  gui.add(guiState, "Speed", 0, 20).onChange((val) => {
    viz.setJdPerSecond(val);
  });

  var tagFilters = {};

  // Add its moons
  const moonObjs = [];
  let jupiterSatellites = [];
  var moons = [];
  var arr = [];

  arr.push(planet);

  viz.loadNaturalSatellites().then((loader) => {
    jupiterSatellites = loader.getSatellitesForPlanet(planet);
    try {
      jupiterSatellites.forEach((moon) => {
        const obj = viz.createObject(moon.name, {
          labelText: moon.name,
          ephem: moon.ephem,
          particleSize: 50
        });
        arr.push(moon.name);
        moonObjs.push(obj);
        moons.push([...moon.tags]);
      });
      moons = [...new Set(moons.flat())];
      gui.add(guiState, "moons", arr).onChange((val) => {
        getData(planet, val, arr.length);
      });

      for (i in moons) {
        tagFilters["All"] = "ALL";
        tagFilters["None"] = "NONE";
        if (moons[i].toLowerCase() == "galilean") {
          tagFilters["Galilean"] = "GALILEAN";
        } else {
          tagFilters[`${moons[i].toLowerCase().firstlow()} orbits`] = moons[
            i
          ].toUpperCase();
        }
      }
    } catch (e) {
      moons = [];
    }

    function resetDisplay() {
      const showLabels = !guiState["Hide labels"];
      moonObjs.forEach((moonObj) => {
        moonObj.getOrbit().setVisibility(true);
        moonObj.getOrbit().setHexColor(0x444444);
        moonObj.setLabelVisibility(showLabels);
      });
    }

    function updateFilterDisplay(tag) {
      if (tag === "ALL") {
        resetDisplay();
        return;
      }

      const matching = new Set(
        jupiterSatellites
          .filter((moon) => moon.tags.has(tag))
          .map((moon) => moon.name)
      );

      const showLabels = !guiState["Hide labels"];
      moonObjs.forEach((moonObj) => {
        if (matching.has(moonObj.getId())) {
          moonObj.getOrbit().setVisibility(true);
          moonObj.getOrbit().setHexColor(0xffff00);
          moonObj.setLabelVisibility(showLabels);
        } else if (guiState["Hide other orbits"]) {
          moonObj.getOrbit().setVisibility(false);
          moonObj.setLabelVisibility(showLabels);
        } else {
          moonObj.getOrbit().setHexColor(0x444444);
          moonObj.getOrbit().setVisibility(true);
          moonObj.setLabelVisibility(showLabels);
        }
      });

      window.THREE = Spacekit.THREE;
    }
    /*
 gui
      .add(guiState, "planets",["mercury","venus","earth","earth","Mars","jupiter","saturn","uranus","pluto"])
      .onChange((catString) => {
      
      });
    
    */
    gui
      .add(guiState, "Highlight", Object.keys(tagFilters))
      .onChange((catString) => {
        const tag = tagFilters[catString];
        updateFilterDisplay(tag);
      });
    gui.add(guiState, "Hide other orbits").onChange(() => {
      updateFilterDisplay(tagFilters[guiState.Show]);
    });
    gui.add(guiState, "Hide labels").onChange(() => {
      updateFilterDisplay(tagFilters[guiState.Show]);
    });
    gui.add(guiState, "Set Date");
  });
}

const p = document.getElementById("planets");

const guis = [];
p.onchange = function () {
  // document.body()
  //readTextFile("index.html")

  //  window.alert(this.value)
  planer(this.value);
  doccontent.innerHTML = "";
  //document.body.innerHTML = "";

  {
    viz = new Spacekit.Simulation(doccontent, {
      jdPerSecond: 0.1,
      particleTextureUrl: "{{assets}}/sprites/fuzzyparticle.png",
      unitsPerAu: 100.0,
      camera: {
        initialPosition: [
          0.0014980565625981512,
          -0.030445338891231168,
          0.03616394298897485
        ]
      }
    });
    // Create a light source somewhere off in the distance.
    const SUN_POS = [5, 5, 1];
    viz.createLight(SUN_POS);
    viz.createObject(
      "sun",
      Object.assign(Spacekit.SpaceObjectPresets.SUN, {
        position: SUN_POS
      })
    );

    // Create a light source somewhere off in the distance.
    viz.createLight([1, 1, 1]);

    // Create a starry background using Yale Bright Star Catalog Data.
    viz.createStars();
  }
};
