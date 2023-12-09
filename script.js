document.getElementById('submit').addEventListener('click', function() {
    var selector = document.getElementById('selector').value;
    var elements = document.querySelectorAll(selector);
    elements.forEach(function(element) {
        element.style.backgroundColor = 'red'; // Highlight the element
    });
  });
  