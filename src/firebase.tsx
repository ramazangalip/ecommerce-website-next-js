import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth'; // 'auth' modülünü içe aktarın

// Firebase yapılandırma bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyBF9s0aoYVshMOiqsP9TGDt8gndgt5YKxE",
  authDomain: "nextjsecommerce-aa034.firebaseapp.com",
  projectId: "nextjsecommerce-aa034",
  storageBucket: "nextjsecommerce-aa034.appspot.com",
  messagingSenderId: "363194788630",
  appId: "1:363194788630:web:4036866b4f015c19c0be37",
  measurementId: "G-25Z31SNLZH",
  WebclientID : "363194788630-licviq37bjmtebv8ejvn1c7dv501lb8q.apps.googleusercontent.com",
  Webclientsecret : "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"
}

// Firebase uygulamasını başlatma
export const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export const auth = getAuth(app); // 'auth' modülünü kullanarak auth nesnesini al
