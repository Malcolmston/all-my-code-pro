var avatarStyle = "",
  topType = "",
  accessoriesType = "",
  hairColor = "",
  facialHairType = "",
  clotheType = "",
  eyeType = "",
  eyebrowType = "",
  mouthType = "",
  skinColor = "";

let e = document.getElementsByClassName("row form-group");

document.getElementById("topType").onchange = function () {
  topType = this.value;
};
document.getElementById("accessoriesType").onchange = function () {
  accessoriesType = this.value;
};
document.getElementById("hairColor").onchange = function () {
  hairColor = this.value;
};
document.getElementById("facialHairType").onchange = function () {
  facialHairType = this.value;
};
document.getElementById("clotheType").onchange = function () {
  clotheType = this.value;
};
document.getElementById("eyeType").onchange = function () {
  eyeType = this.value;
};
document.getElementById("eyebrowType").onchange = function () {
  eyebrowType = this.value;
};
document.getElementById("mouthType").onchange = function () {
  mouthType = this.value;
};
document.getElementById("skinColor").onchange = function () {
  skinColor = this.value;
};

setInterval(function(){
   document.getElementById("image").src = avatar(
  "Transparent",
  topType,
  accessoriesType,
  hairColor,
  facialHairType,
  clotheType,
  eyeType,
  eyebrowType,
  mouthType,
  skinColor
)
}, 1);
//https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Sad&skinColor=DarkBrown


function avatar(
  avatarStyle,
  topType,
  accessoriesType,
  hairColor,
  facialHairType,
  clotheType,
  eyeType,
  eyebrowType,
  mouthType,
  skinColor
) {
  return `https://avataaars.io/?avatarStyle=${avatarStyle}&topType=${topType}&accessoriesType=${accessoriesType}&hairColor=${hairColor}&facialHairType=${facialHairType}&clotheType=${clotheType}&eyeType=${eyeType}&eyebrowType=${eyebrowType}&mouthType=${mouthType}&skinColor=${skinColor}`;
}