var h1 = document.getElementsByTagName('h1');
h1[0].addEventListener('click', function () {
  h1[0].innerHTML = 'はじめてのDOM操作';
  var p = document.createElement('p');
  p.innerHTML = 'Javascriptって面白い！';
  h1[0].after(p);
});