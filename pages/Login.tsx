import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from 'next/router'; // Next.js'in router'ını ekleyin
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Firebase Auth modülünden gerekli fonksiyonları içe aktarın
import { app, auth } from '../../ecommerce-website/src/firebase' // Dosya yolu, firebaseConfig dosyasının konumuna göre değişir
import { FaGoogle } from "react-icons/fa";


const Login = () => {
  const router = useRouter(); // Router'ı kullanmak için useRouter hook'unu kullanın

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Giriş yapıldı');
    // Giriş yapıldıktan sonra ana sayfaya yönlendirme yapabilirsiniz
    router.push('/'); // Anasayfaya yönlendirme
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider); // Google ile giriş yapma işlemini gerçekleştirin
      router.push('/');
    } catch (error) {
      console.error('Google ile giriş yaparken bir hata oluştu:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Giriş Yap</h3>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Adresi</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Şifre</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">Giriş Yap</button>
              </form>
              <button onClick={googleSignIn} className="btn btn-primary w-100"><FaGoogle />Google ile Giriş Yap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
