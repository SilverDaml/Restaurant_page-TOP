// about-us.js with the form component and original content
import './style.css';

const aboutUs = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Original content
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    h1.textContent = "Contact us";
    p.textContent = 'Contact us to get the latest updates and discounts!';
    content.appendChild(h1);
    content.appendChild(p);

    // Create form element
    const form = document.createElement('form');
    form.classList.add('contact-form');

    // Create input fields
    const firstNameInput = createInput('text', 'First Name', 'first-name');
    const lastNameInput = createInput('text', 'Last Name', 'last-name');
    const emailInput = createInput('email', 'Email', 'email');
    const phoneInput = createInput('tel', 'Phone Number', 'phone');
    
    // Create checkbox for notifications
    const notificationsCheckbox = document.createElement('input');
    notificationsCheckbox.type = 'checkbox';
    notificationsCheckbox.id = 'notifications';
    notificationsCheckbox.name = 'notifications';
    const notificationsLabel = document.createElement('label');
    notificationsLabel.textContent = 'Receive notifications from the restaurant';
    notificationsLabel.htmlFor = 'notifications';
    
    // Create submit button
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';

    // Append input fields, checkbox, and submit button to form
    form.appendChild(firstNameInput);
    form.appendChild(lastNameInput);
    form.appendChild(emailInput);
    form.appendChild(phoneInput);
    form.appendChild(notificationsCheckbox);
    form.appendChild(notificationsLabel);
    form.appendChild(document.createElement('br')); // Add line break
    form.appendChild(submitButton);

    // Append form to container div
    content.appendChild(form);

    return content;
}

// Helper function to create input fields
function createInput(type, placeholder, id) {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.id = id;
    input.name = id;
    return input;
}

export default aboutUs;
