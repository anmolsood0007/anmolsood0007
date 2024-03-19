window.addEventListener('load', function() {
    // When the page fully loads, hide the loading animation
    var loadingContainer = document.querySelector('.loading-container');
    loadingContainer.style.display = 'none';
  });
  
  //prevent right click
  document.oncontextmenu = () => {
    alert("Don't try to right click")    
    return false
  }