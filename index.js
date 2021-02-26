var a = 'hello';
document.getElementById("demo").innerHTML = a;
time();
function time()
{
  var a = new Date();
  var b = a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
  document.getElementById('time').innerHTML = b;
  setTimeout(time,1000);
}
