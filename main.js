const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 2900);
})



var paths = document.querySelectorAll("svg .cls-1"),
  i = 0;

paths.forEach(function (item, index) {
  i++;

  var pathLength = item.getTotalLength(),
    speed = 2000;

  item.setAttribute("stroke-dasharray", pathLength);
  item.setAttribute("stroke-dashoffset", pathLength);

  item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='0s' dur='1.5' to='0's fill='freeze' calcMode='spline' keySplines='0.42 0 0.58 1' />" +
    "<animate attributeName='stroke' begin='a" + i + ".end' dur='0.5s' to='#30e57e' fill='freeze' />" +
    "<animate attributeName='fill' begin='a" + i + ".end' dur='0.5s' to='#30e57e' fill='freeze' />";

  
  console.log(index, pathLength, item.innerHTML)
});

