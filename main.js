// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeElements = document.querySelectorAll('.like');

for (const likeElement of likeElements) {
  likeElement.addEventListener('click', likePost);
}

function likePost(evt) {
  mimicServerCall()
  .then(() => {
    let likeBtn = evt.target;
    if(!likeBtn.classList.contains('like')) {
      likeBtn = evt.target.parentNode;
    }
    likeBtn.classList.toggle('activated-heart');
  })
  .catch((err) => {
    displayError(err);
  })
}

function displayError(err) {
  const errModal = document.querySelector('#modal');
  const errMessage = document.querySelector('#modal-message');

  errMessage.innerText = err;
  errModal.classList.remove('hidden');
  // hide error message
  setTimeout(function(){
    errModal.classList.add('hidden');
  }, 3000);
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
