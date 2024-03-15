document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-button');
    const divs = document.querySelectorAll('.profile-div');
  
    buttons.forEach((button) => {
      button.addEventListener('click', function() {
        const target = button.getAttribute('data-target');
        hideAllDivs();
        showDiv(document.getElementById(target));
      });
    });
  
    function hideAllDivs() {
      divs.forEach((div) => {
        div.style.display = 'none';
      });
    }
  
    function showDiv(div) {
      div.style.display = 'block';
    }
  });