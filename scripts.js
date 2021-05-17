let phoneInput = document.querySelector('#phone');
const messageInput = document.querySelector('#message');
const sendBtn = document.querySelector('#sendBtn');
const editPhoneValue = () => {
    let editedValue = phoneInput.value;
    editedValue = phoneInput.value.trim();
    editedValue = editedValue.split(' ').join('')
    editedValue = editedValue.split('+').join('')
    phoneInput.value = editedValue;
}
const sendMessage = () => {
    editPhoneValue();
    if(phoneInput.value.length > 8 && phoneInput.value.length < 18){
        let url = "https://api.whatsapp.com/send?text=" + messageInput.value + "&phone=" + "+" + phoneInput;
        // window.open(url);
        validatorMessage.style.display = "none";
    }else{
        validatorMessage.style.display = "block";
    }
}
sendBtn.addEventListener("click", sendMessage);