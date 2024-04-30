import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const submitButton = document.querySelector('.footer-form-button');
const modalBackdrop = document.querySelector('.modal-backdrop');
const emailField = document.querySelector('input[name="email"]');
const commentsField = document.querySelector('input[name="comments"]');
const labelField = document.querySelectorAll('.input-wrapper');
submitButton.addEventListener('click', handleFormSubmission);

async function handleFormSubmission(event) {
  event.preventDefault();
  const formData = {
    email: emailField.value,
    comment: commentsField.value,
  };

  if (emailField.checkValidity()) {
    axios
      .post('https://portfolio-js.b.goit.study/api/requests', formData)
      .then(response => {
        modalBackdrop.classList.remove('visually-hidden');
        emailField.value = '';
        commentsField.value = '';
        labelField.forEach(item => {
          item.classList.remove('invalid');
          item.classList.add('succes');
        });
      })
      .catch(error => {
        labelField.forEach(item => {
          item.classList.remove('succes');
          item.classList.add('invalid');
        })
        iziToast.error({
          title: 'Error',
          message: `Something is wrong, try again!`,
          maxWidth: 300,
          progressBar: true,
          position: 'bottomRight',
          color: '#1c1d20',
          backgroundColor: '#ed3b44',
        });
      });
  } else {
    labelField.forEach(item => {
      item.classList.remove('succes');
      item.classList.add('invalid');
    });
    iziToast.error({
      title: 'Error',
      message: `Invalid data, try again!`,
      maxWidth: 300,
      progressBar: true,
      position: 'bottomRight',
      color: '#1c1d20',
      backgroundColor: '#ed3b44',
    });
  }
}

const modalCloseButton = document.querySelector('.modal-close-button');
modalCloseButton.addEventListener('click', () =>
  modalBackdrop.classList.add('visually-hidden')
);
modalBackdrop.addEventListener('click', () => {
  if (event.target === modalBackdrop) {
    modalBackdrop.classList.add('visually-hidden');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modalBackdrop.classList.add('visually-hidden');
  }
});
