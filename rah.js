 var cool = 1;
function rahFunction(){
  cool++;
 document.getElementById("rah").textContent = cool;
  if (cool == 50) {
    document.getElementById("rah1").textContent = cool;
   cool += 2;
  }
}
