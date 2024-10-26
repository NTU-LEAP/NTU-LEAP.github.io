var scripts = document.getElementsByTagName('script');
var myScript = scripts[scripts.length - 1];

var queryString = myScript.src.replace(/^[^\?]+\??/, '');

var params = parseQuery(queryString);

function parseQuery(query) {
    var Params = {};
    if (!query) return Params; // return empty object
    var Pairs = query.split(/[;&]/);
    for (var i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split('=');
        if (!KeyVal || KeyVal.length != 2) continue;
        var key = unescape(KeyVal[0]);
        var val = unescape(KeyVal[1]);
        val = val.replace(/\+/g, ' ');
        Params[key] = val;
    }
    return Params;
}

document.write('\
<header>\
  <div class="container header">\
    <div class="ftheader text"><a href='+params["prefix"]+'#home><img style="width:180px" src="images/logo.png" /></a></div>\
    <div class="ftsubheader text talk"><a href='+params["prefix"]+'#photo>Photo Gallery</a></div>\
    <div class="ftsubheader text teaching"><a href='+params["prefix"]+'#teaching>Teaching</a></div>\
    <div class="ftsubheader text group"><a href='+params["prefix"]+'#people>People</a></div>\
    <div class="ftsubheader text publication"><a href='+params["prefix"]+'#publications>Publications</a></div>\
    <div class="ftsubheader text research"><a href='+params["prefix"]+'#research>Research</a></div>\
    <div class="ftsubheader text"><a href='+params["prefix"]+'#home>Home</a></div>\
  </div>\
</header>\
');

