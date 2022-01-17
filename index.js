
// declare the addingEventListener func, grab the input, add click event with anon callback



function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('click', function() {
    alert('I was clicked!');
  });

}

