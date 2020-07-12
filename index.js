const input = document.querySelector('input');

function filterList() {
  let inputValue = input.value.toUpperCase();
  let listNames = document.querySelectorAll('li');

  for (let index = 0; index < listNames.length; index++) {
    const currentList = listNames[index];
    
    //indexOf returns the position of an object
    if (currentList.innerText.toUpperCase().indexOf(inputValue)) { 
      listNames[index].style.display = 'none';
    } else if (inputValue == ''){
      listNames[index].style.display = 'none';
    } else {
      listNames[index].style.display = 'block';
    }
  }
}

input.addEventListener('keyup', filterList);
