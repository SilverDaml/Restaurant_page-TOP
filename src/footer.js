import './style.css';

// footer.js
const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');

    const email = document.createElement('p');
    email.textContent = "Email: contact@restaurant.com";

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = "Phone: +1 (123) 456-7890";

    const socialMedia = document.createElement('p');
    socialMedia.textContent = "Follow us on social media:";

    const socialIcons = document.createElement('div');
    socialIcons.classList.add('social-icons');

    // Add social media icons here (fake example)
    const facebookIcon = document.createElement('span');
    facebookIcon.classList.add('fab', 'fa-facebook-square');

    const twitterIcon = document.createElement('span');
    twitterIcon.classList.add('fab', 'fa-twitter-square');

    const instagramIcon = document.createElement('span');
    instagramIcon.classList.add('fab', 'fa-instagram-square');

    socialIcons.appendChild(facebookIcon);
    socialIcons.appendChild(twitterIcon);
    socialIcons.appendChild(instagramIcon);

    contactDetails.appendChild(email);
    contactDetails.appendChild(phoneNumber);
    contactDetails.appendChild(socialMedia);
    contactDetails.appendChild(socialIcons);

    footer.appendChild(contactDetails);

    return footer;
}

export default createFooter;
