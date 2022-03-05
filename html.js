

const Document = require('html-document'),
	 document = new Document();


module.exports.createDiv =  function (name) {
  let div = document.createElement("div");

  div.className = name;

  return div;
}

module.exports.createSpan = function (name) {
  let spam = document.createElement("spam");

  spam.className = name;

  return spam;
}

module.exports.slide = function (to, num, inner, caption) {
  let main = createDiv("mySlides fade"),
    numb = createDiv("numbertext"),
    cap = createDiv("text");

  numb.innerText = num; //.setAttrabute("value",num)

  inner.style.width = "100%";

  main.append(numb, inner, cap);

  to.append(main);
}

module.exports.slideTo = function (to, num) {
  let a = dots({ onclick: `currentSlide(${num})` });

  to.append(a);
}

module.exports.dots = function(atters)  {
  let iff = createSpan("dot");
  Object.keys(atters).forEach(function (x) {
    iff.setAttribute(x, atters[x]);
  });

  return iff;
};

module.exports.iframe = function(atters) {
  let iff = document.createElement("iframe");

  Object.keys(atters).forEach(function (x) {
    iff.setAttribute(x, atters[x]);
  });

  return iff;
};

module.exports.button = function(atters) {
  let button = document.createElement("button");

  Object.keys(atters).forEach(function (x) {
    button.setAttribute(x, atters[x]);
  });

  return button;
};



