
function ex7()
{
  var pointure = document.getElementById("shoeSize").value;
      var naissance = document.getElementById("yearOfBirth").value;
      var res = ((((pointure*2)+5)*50)-naissance)+1766;
      alert(pointure);
      alert(naissance);
  alert(res);
}

// en une seule ligne
// alert((((((document.getElementById("shoeSize").value)*2)+5)*50)-(document.getElementById("yearOfBirth").value))+1766);
