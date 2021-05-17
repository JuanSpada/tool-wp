let phoneInput = document.querySelector('#phone');
const messageInput = document.querySelector('#message');
const sendBtn = document.querySelector('#sendBtn');
const editPhoneValue = () => {
    let editedValue = phoneInput.value;
    editedValue = phoneInput.value.trim();
    editedValue = editedValue.split(' ').join('')
    editedValue = editedValue.split('+').join('')
    phoneInput = editedValue;
}
const sendMessage = () => {
    editPhoneValue();
    let url = "https://api.whatsapp.com/send?text=" + messageInput.value + "&phone=" + "+" + phoneInput;
    window.open(url);
}
sendBtn.addEventListener("click", sendMessage);