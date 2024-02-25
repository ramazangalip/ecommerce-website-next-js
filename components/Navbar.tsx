import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';
import { onAuthStateChanged } from 'firebase/auth';
import { app, auth } from '../../ecommerce-website/src/firebase'; // Dosya yolu, firebaseConfig dosyasının konumuna göre değişir

const Navbar = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./logo1.png" alt="" width={60} height={60} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Anasayfa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Hakkımızda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  İletişim
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#product">
                  Ürünler
                </a>
              </li>
            </ul>
          </div>
          <div className="user-icon w-10 h-10">
            {user ? (
              <div>
                <span>Merhaba, {user.displayName}</span> {/* Kullanıcının ismini ve soyismini göster */}
              </div>
            ) : (
              <Link href="/Login"> {/* Login sayfasına yönlendirme */}
                <a>
                  <FaRegCircleUser style={{ fontSize: "24px" }} />
                </a>
              </Link>
            )}
          </div>
          <div className='shopping-cart-icon w-10 h-10'>
            <Link href="/Cart">
            
           <FaShoppingCart style={{ fontSize: "24px" }}/>
           </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
