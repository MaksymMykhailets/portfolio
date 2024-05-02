import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const modalBackdrop = document.querySelector('.modal-backdrop');
const emailField = document.querySelector('input[name="email"]');
const commentsField = document.querySelector('input[name="comments"]');
const emailLabel = document.querySelector('.input-wrapper.email');
const commentsLabel = document.querySelector('.input-wrapper.comment');

submitButton.addEventListener('click', handleFormSubmission);
emailField.addEventListener('input', handleInputValidation);
commentsField.addEventListener('input', handleInputValidation);

function handleFormSubmission(event) {
  event.preventDefault();

  if (commentsField.value.trim() === '') {
    highlightField(commentsLabel, 'invalid');
    showErrorMessage('Please leave a comment');
    return;
  }

  if (!emailField.checkValidity()) {
    highlightField(emailLabel, 'invalid');
    showErrorMessage('Invalid email, please try again!');
    return;
  }

  sendFormData({
    email: emailField.value,
    comment: commentsField.value,
  });
}

function sendFormData(formData) {
  axios
    .post('https://portfolio-js.b.goit.study/api/requests', formData)
    .then(handleSuccess)
    .catch(handleFailure);
}

function handleSuccess() {
  modalBackdrop.classList.remove('visually-hidden');
  clearFormFields();
  highlightField(emailLabel, 'success');
  highlightField(commentsLabel, 'success');
}

function handleFailure() {
  showErrorMessage('Something went wrong, please try again!');
  highlightField(emailLabel, 'invalid');
}

function clearFormFields() {
  emailField.value = '';
  commentsField.value = '';
}

function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    maxWidth: 300,
    progressBar: true,
    position: 'bottomRight',
    color: '#1c1d20',
    backgroundColor: '#ed3b44',
  });
}

function highlightField(field, status) {
  field.classList.remove('success', 'invalid');
  field.classList.add(status);
}

function handleInputValidation() {
  if (this === emailField && emailField.checkValidity()) {
    highlightField(emailLabel, 'success');
  } else if (this === commentsField && commentsField.value.trim() !== '') {
    highlightField(commentsLabel, 'success');
  } else {
    highlightField(this === emailField ? emailLabel : commentsLabel, 'invalid');
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
