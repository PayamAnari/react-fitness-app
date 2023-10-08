import emailjs from 'emailjs-com';

const sendEmail = (form) => {
  return emailjs.sendForm(
    'service_qjdu0j8',
    'template_4fi7b4q',
    form,
    'Cb36BTmfvOXcFjNhp',
  );
};

export default sendEmail;
