import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const submitButton = document.querySelector('.footer-form-button');
const modalBackdrop = document.querySelector('.modal-backdrop');
const emailField = document.querySelector('input[name="email"]');
const commentsField = document.querySelector('input[name="comments"]');
const emailLabel = document.querySelector('.input-wrapper.email');
const commentsLabel = document.querySelector('.input-wrapper.comment');
const emailMessage = document.querySelector('.input-message.email-message');
const commentMessage = document.querySelector('.input-message.comment-message');
const modalCloseButton = document.querySelector('.modal-close-button');

submitButton.addEventListener('click', handleFormSubmission);
modalCloseButton.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', event => {
  if (event.target === modalBackdrop) closeModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});
document.querySelectorAll('input').forEach(field => {
  field.addEventListener('input', handleInputValidation);
});

function handleFormSubmission(event) {
  event.preventDefault();
  const isValid = validateFields();

  if (isValid) {
    sendFormData({
      email: emailField.value,
      comment: commentsField.value,
    });
  }
}

function validateFields() {
  let isValid = true;

  if (commentsField.value.trim() === '') {
    updateFieldValidation(
      commentsLabel,
      commentMessage,
      'invalid',
      'Please leave a comment'
    );
    isValid = false;
  } else {
    updateFieldValidation(commentsLabel, commentMessage, 'success', '');
  }

  if (!emailField.checkValidity()) {
    updateFieldValidation(
      emailLabel,
      emailMessage,
      'invalid',
      'Invalid email, try again!'
    );
    isValid = false;
  } else {
    updateFieldValidation(emailLabel, emailMessage, 'success', '');
  }

  return isValid;
}

function sendFormData(formData) {
  axios
    .post('https://portfolio-js.b.goit.study/api/requests', formData)
    .then(handleSuccess)
    .catch(handleFailure);
}

function handleSuccess() {
  modalBackdrop.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden';
  clearFormFields();
  resetFieldValidation(emailLabel, emailMessage);
  resetFieldValidation(commentsLabel, commentMessage);
}

function handleFailure() {
  showErrorMessage('Something went wrong, please try again!');
  updateFieldValidation(
    emailLabel,
    emailMessage,
    'invalid',
    'Something went wrong, try again!'
  );
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

function updateFieldValidation(label, messageElement, status, message) {
  label.classList.remove('success', 'invalid');
  if (status) label.classList.add(status);
  messageElement.textContent = message;
}

function resetFieldValidation(label, messageElement) {
  label.classList.remove('success', 'invalid');
  messageElement.textContent = '';
}

function handleInputValidation() {
  const field = this === emailField ? emailField : commentsField;
  const label = this === emailField ? emailLabel : commentsLabel;
  const message = this === emailField ? emailMessage : commentMessage;

  if (field.checkValidity()) {
    updateFieldValidation(label, message, 'success', '');
  } else {
    updateFieldValidation(
      label,
      message,
      'invalid',
      'Invalid input, try again!'
    );
  }
}

function closeModal() {
  modalBackdrop.classList.add('visually-hidden');
  document.body.style.overflow = '';
}
