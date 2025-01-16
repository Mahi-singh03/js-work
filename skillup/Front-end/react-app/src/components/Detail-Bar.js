import React, { useEffect, useState } from 'react';
import '../css/DetailBar.css';

const DetailBar = () => {
  const [userName, setUserName] = useState('Guest');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserName(user?.username || 'Guest');
  }, []);

  return (
    <div className="detail-bar">
      <p className="greeting">Hello, {userName}</p>
      <div className="whatsapp">
        <a
          href={`https://wa.me/9781278770`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat with us on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default DetailBar;
