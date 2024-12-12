import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="contact-info">
        <h3>Contact</h3>
        <div className="city-office">
          <h4>City Office:</h4>
          <p>Maulana Azad College of Engineering & Technology, Marium Manzil, Anisabad, Patna, Bihar - 800002</p>
          <p>Phone: +91-612-2254569, +91-9431049755</p>
          <p>Fax: +91-612-2250348</p>
          <p>Email: <a href="mailto:contact@macet.ac.in">contact@macet.ac.in</a></p>
        </div>
        <div className="campus">
          <h4>Campus:</h4>
          <p>Maulana Azad College of Engg. & Technology, Gorhna, Neoraganj, Neora, Patna – 801113, Bihar</p>
          <p>Phone: +91-9835405784, +91-7004874889</p>
          <p>Email: <a href="mailto:contact@macet.ac.in">contact@macet.ac.in</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
