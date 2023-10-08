import emailjs from 'emailjs-com';

const sendEmail = (form) => {
  const emailjsUserId = process.env.REACT_APP_EMAILJS;

  return emailjs.sendForm(
    'service_qjdu0j8',
    'template_4fi7b4q',
    form,
    emailjsUserId,
  );
};

export default sendEmail;
