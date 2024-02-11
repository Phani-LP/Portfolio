function messageSent() {
    var name = document.getElementsByName('Name')[0].value;
    var email = document.getElementsByName('Email')[0].value;
    var message = document.getElementsByName('Message')[0].value;

    if (name === "" || email === "" || message === "") {
        alert('No field should be empty');
    } else {
        alert('Message Sent Successfully.');
    }
}