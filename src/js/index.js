import {toggleBtn, content} from './dom-loader'

let btnIsClicked = false;

function toggleBtnHandler() {
  btnIsClicked = !btnIsClicked;
  if(btnIsClicked){
    toggleBtn.textContent = "Hide Content";
    content.style.display = 'block';
  } else{
    toggleBtn.textContent = "Show Content";
    content.style.display = 'none';
  }
}

toggleBtn.addEventListener('click', toggleBtnHandler);