import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const emailInput = document.getElementsByName("email")[0];
 emailInput.addEventListener("input", function() {
const maxLength = emailInput.offsetWidth / 8;
 const value = emailInput.value;

if (value.length > maxLength) {
 emailInput.value = value.substring(0, maxLength) + "...";
   }
 });

// const submitButton = document.querySelector('.btn');
// const modalBackdrop = document.querySelector('.modal-backdrop');
// const emailField = document.querySelector('input[name="email"]');
// const commentsField = document.querySelector('input[name="comments"]');
// const labelField = document.querySelectorAll('.lwt-wrapper');
// submitButton.addEventListener('click', handleFormSubmission);


const btnSend = document.getElementById("btnSend");
        btnSend.addEventListener('click', submitForm);

        function submitForm(event) 
        {
            event.preventDefault();
            const email = document.querySelector('input[name="email"]');
            const comment = document.querySelector('input[name="comment"]');

            if(!email.checkValidity())
            {
                iziToast.error({
                  title: 'Error',
                  message: 'Invalid data, try again!',
                  maxWidth: 300,
                  progressBar: true,
                  position: 'bottomRight',
                  color: '#1c1d20',
                  backgroundColor: '#ed3b44',
                });
                return;
            }

            const data = {
                email: email.value,
                comment: comment.value
            };

            fetch('https://portfolio-js.b.goit.study/api/requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (response.ok) {
                    const modalWindow = document.getElementsByClassName("backdrop")[0];
                    modalWindow.classList.add("is-open");
                } else {
                        iziToast.error({
                        title: 'Error',
                        message: 'Something is wrong, try again!',
                        maxWidth: 300,
                        progressBar: true,
                        position: 'bottomRight',
                        color: '#1c1d20',
                        backgroundColor: '#ed3b44',
                    });
                }
            }).catch(error => {
                console.error("Error:", error);
            });
        }


// async function handleFormSubmission(event) {
//   event.preventDefault();
//   const formData = {
//     email: emailField.value,
//     comment: commentsField.value,
//   };

//   if (emailField.checkValidity()) {
//     axios
//       .post('https://portfolio-js.b.goit.study/api/requests', formData)
//       .then(response => {
//         modalBackdrop.classList.remove('visually-hidden');
//         emailField.value = '';
//         commentsField.value = '';
//         labelField.forEach(item => {
//           item.classList.add('succes');
//         });
//       })
//       .catch(error => {
//         labelField.forEach(item => {
//           item.classList.add('invalid');
//         })
//         iziToast.error({
//           title: 'Error',
//           message: `Something is wrong, try again!`,
//           maxWidth: 300,
//           progressBar: true,
//           position: 'bottomRight',
//           color: '#1c1d20',
//           backgroundColor: '#ed3b44',
//         });
//       });
//   } else {
//     iziToast.error({
//       title: 'Error',
//       message: `Invalid data, try again!`,
//       maxWidth: 300,
//       progressBar: true,
//       position: 'bottomRight',
//       color: '#1c1d20',
//       backgroundColor: '#ed3b44',
//     });
//   }
// }

const modalCloseButton = document.querySelector('.modal-close-btn');
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
