figlet.defaults({fontPath: 'https://unpkg.com/figlet@1.4.0/fonts/'});
 

    
let poss =[
  "1Row","3-D","3D Diagonal","3D-ASCII","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ANSI Regular","ANSI Shadow","ASCII New Roman","Acrobatic","Alligator","Alligator2","Alpha","Alphabet","Arrows","Avatar","B1FF","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big Chief","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big","Bigfig","Binary","Block","Blocks","Bloody","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Bulbhead","Caligraphy","Caligraphy2","Calvin S","Cards","Catwalk","Chiseled","Chunky","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Crawford","Crawford2","Crazy","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DOS Rebel","DWhistled","Dancing Font","Decimal","Def Leppard","Delta Corps Priest 1","Diamond","Diet Cola","Digital","Doh","Doom","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Wall","Efti Water","Electronic","Elite","Epic","Fender","Filter","Fire Font-k","Fire Font-s","Flipped","Flower Power","Four Tops","Fraktur","Fun Face","Fun Faces","Fuzzy","Georgi16","Georgia11","Ghost","Ghoulish","Glenyn","Goofy","Gothic","Graceful","Gradient","Graffiti","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Impossible","Invita","Isometric1","Isometric2","Isometric3","Isometric4","Italic","Ivrit","JS Block Letters","JS Bracket Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","Konto Slant","Konto","LCD","Larry 3D 2","Larry 3D","Lean","Letters","Lil Devil","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin1","Merlin2","Mike","Mini","Mirror","Mnemonic","Modular","Morse","Morse2","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Improved","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Ogre","Old Banner","Pagga","Patorjk's Cheese","Patorjk-HeX","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Rectangles","Red Phoenix","Relief","Relief2","Reverse","Roman","Rot13","Rotated","Rounded","Rowan Cap","Rozzo","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shadow","Shimrod","Short","Slant Relief","Slant","Slide","Small Caps","Small Isometric1","Small Keyboard","Small Poison","Small Script","Small Shadow","Small Slant","Small Tengwar","Small","Soft","Speed","Spliff","Stacey","Stampate","Stampatello","Standard","Star Strips","Star Wars","Stellar","Stforek","Stick Letters","Stop","Straight","Stronger Than All","Sub-Zero","Swamp Land","Swan","Sweet","THIS","Tanja","Tengwar","Term","Test1","The Edge","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tombstone","Train","Trek","Tsalagi","Tubular","Twisted","Two Point","USA Flag","Univers","Varsity","Wavy","Weird","Wet Letter","Whimsy","Wow"]

let width=['full','fitted','controlled smushing','universal smushing','default']

let w = 0
let h = 0
let t = $( "#inputText" ).val()
let f = ($( "#fontList" ).val().toString().split('.')[0])
let ww = $('#taagWhiteSpaceOverride').text()||' '


$( "#taagCharWidth" ).change(function() {
  w = ( width.indexOf(this.value) );
  update()
});

$( "#taagCharHeight" ).change(function() {
  h = ( width.indexOf(this.value) );
  update()
});

$( "#taagWhiteSpaceOverride" ).change(function() {
  ww = this.value||' '
  update()
});


$( "#inputText" ).keyup(function() {
  t = (this.value );
  update()

});

$( "#fontList" ).change(function() {
  f = (this.value.toString().split('.')[0] );
  update()
});

$( "#copie" ).click(function() {
  copie()
});


var choise = ['1Row']


function copie() {
  var copyText = $("#figlet")//document.getElementById("myInput");
  copyText.select();
 // copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text");
}


figlet.preloadFonts([choise], update);
 
function update(){

  
  figlet.preloadFonts([f], update);

  $("#figlet").text(figlet.textSync(t,{
    font: f,
   horizontalLayout: width[w],
    verticalLayout: width[h],
    width: 80,
    whitespaceBreak: true,
}))

$('#figlet').text($('#figlet').text().replaceAll(' ',ww))
}