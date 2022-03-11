 import throttle from 'lodash.throttle';

const refsForm = document.querySelector('.feedback-form');


const formData = {};
refsForm.addEventListener('submit', onFormSumbit);


refsForm.addEventListener('input', throttle((event) => {
       
    formData[event.target.name] = event.target.value;
    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500)
);

updateData()


function onFormSumbit(evt) {
    evt.preventDefault();
console.log(formData)
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function updateData(event) {
    const saveData = localStorage.getItem('feedback-form-state');
    const stringData = JSON.parse(saveData)


    if (stringData) {
        refsForm.email.value = stringData.email;
        refsForm.message.value = stringData.message;
    }
        
}

