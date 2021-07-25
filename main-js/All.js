function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("filter");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("my-candidates");
    
    li = document.getElementsByClassName("candidates-titel");
  // console.log (li)
    for (i = 0; i < li.length; i++) {
      
      p = li[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ul[i].style.display = "";
        } else {

           ul[i].style.display = "none";
        }
    }
  }