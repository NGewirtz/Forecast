import React from 'react';

const Footer = () => {
  return (
    <footer>
      <h3><a href="http://www.neilgewirtz.com/" target="_blank">Neil Gewirtz</a></h3>
      <section>
        <a href="https://www.linkedin.com/in/neilgewirtz/" target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/NGewirtz" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://s3.us-east-2.amazonaws.com/cheers-the-app/ResumeNeilGewirtz.pdf" target="_blank">
          <i className="fas fa-clipboard"></i>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
