var getDaysInMonth = function (month, year) {
  return new Date(year, month, 0).getDate();
};

var getStart = function (month, year) {
  return new Date(year, month).toLocaleString('en-us', { weekday: 'long' });

}

function activale(to, o){
  var u = document.createElement("li")
  var s = document.createElement("span")
s.innerText = o 
s.className = "active"
u.appendChild(s)

 to.appendChild(u)
}

function createElementFrom(to, o) {
  var u = document.createElement("li")
  u.innerText = o 

  to.appendChild(u)
}


var range = function (start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

Array.prototype.chunk = function (perChunk) {
  var result = this.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  return result
}

var d = new Date()


let m = d.getMonth()
let y = d.getFullYear()

const createCalender = function (y, m, show = false , day=(new Date().getDate() ) ) {
  $(".days").html("")

  var a = getDaysInMonth(m, y)
  var b = getStart(m, y)


  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  let i = days.indexOf(b)

  let p = []
  for (let a = i; a < 7; a++) {
    p.unshift((a + 1))
  }

  p.unshift(i)

  let t = Array.from({ length: (a) - p.length }, (v, k) => k + 1)//.map(x => x % 7);

  t = t.chunk(7)
  t.unshift(p)

  for (let e in t) {
    if (t[e].length != 7 && t[e].length != 0) {
      t[e].length = 7
      t[e] = t[e].toString().split(",").sort((a, b) => a - b).map(x => Number(x) || " ")
    }
  }

  t[t.length - 1] = t[t.length - 1].filter(x => x != " ")
  t[t.length - 1].length = 7
  t[t.length - 1] = t[t.length - 1].toString().split(",")

  let r = Array.from({ length: (a) - p.length }, (v, k) => k + 1)

  t = t.map((s, d) => s.map((a, b) => a == " " ? " " : a))//b == " " ? " ":a ) )



  for (let a in t) {
    t[a] = Array.from({ length: t[a].toString().split(",").filter(x => x != " ").length }, (v, k) => k + 1)

    t[a].length = 7
    t[a] = t[a].toString().split(",")

    if (a == 0) {
      t[a] = t[a].sort((a, b) => a - b)
    }


    t[a] = t[a].map(x => x)


  }
  t = [].concat.apply([], t);

  var ii = 1
  for (let a in t) {
    if (t[a] == "") {

    } else {
      t[a] = ii
      ii++
    }
  }
  //t = t.chunk(7)
  t.length = a + t.filter(x => x == "").length

  t = t.toString().split(",").chunk(7)


  for (let e in t) {
    if (t[e].length != 7 && t[e].length != 0) {
      t[e].length = 7
      t[e] = t[e].toString().split(",").sort((a, b) => a - b).map(x => Number(x) || " ")
    }
  }

  t[t.length - 1] = t[t.length - 1].filter(x => x != " ")
  t[t.length - 1].length = 7
  t[t.length - 1] = t[t.length - 1].toString().split(",")



  for (let all in t) {
    t[all].map(x => x == day && show ? activale(document.getElementById("days"), x) :createElementFrom(document.getElementById("days"), x))
  }

  $(".month").html(`<ul>
    <li id="prev" class="prev"  onclick="prev()">&#10094;</li>
    <li id="next" class="next"  onclick="next()">&#10095;</li>
    <li>
        ${month[m]}<br>
        <span style="font-size:18px">${y}</span>
      </li>
    </ul>`
  )
}


createCalender(y, m,true)

function prev() {
  if (m == 0) {
    m = 11
    y -= 1
  } else {
    m -= 1
  }



  createCalender(y, m , m == d.getMonth() && y == d.getFullYear())
}

function next() {
  if (m == 11) {
    m = 0
    y += 1
  } else {
    m += 1
  }



  createCalender(y, m , m == d.getMonth() && y == d.getFullYear())
}



