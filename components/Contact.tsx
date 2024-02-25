import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <div id='contact'>
      <h1 className='text-center'>
        BİZİMLE İLETİŞİM KURUN
      </h1>
      <br />
      <br />
      <div style={{ display: 'flex', alignItems: 'flex-start' }} className='contact-info'>
        <div style={{ flex: '1' }}>
          <p className='text-left'>
            Görüş ve dilekleriniz için buradan bizimle iletişim kurabilirsiniz.
            <br />
            <br />
            <div className='text-left' style={{ display: 'flex', alignItems: 'center' }}>
              <MdOutlineEmail />
              <span style={{ marginLeft: '0.5rem' }}>Email: ramazansaidgalip@gmail.com</span>
            </div>
            <div className='text-left' style={{ display: 'flex', alignItems: 'center' }}>
              <MdOutlinePhone />
              <span style={{ marginLeft: '0.5rem' }}>Telefon No:0212 853 8191</span>
            </div>
            <div className='text-left' style={{ display: 'flex', alignItems: 'center' }}>
              <FaMapMarkerAlt />
              <span style={{ marginLeft: '0.5rem' }}>Adres:Erzurum/Merkez</span>
            </div>
          </p>
        </div>
        <div className="form-container">
          <h2 className='text-center'>İletişim Formu</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">İsim:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesajınız:</label>
              <textarea id="message" name="message" rows={4}/>
            </div>
            <button type="submit" className='btn btn-primary'>Gönder</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
