importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

// Ton Firebase config
firebase.initializeApp({
  apiKey: "AIzaSyBHteR6wsIlNsedb26RErTIEPMihRmAx6E",
  authDomain: "brightstarnotifications-7c0d9.firebaseapp.com",
  projectId: "brightstarnotifications-7c0d9",
  storageBucket: "brightstarnotifications-7c0d9.firebasestorage.app",
  messagingSenderId: "56945202606",
  appId: "1:56945202606:web:f423d9ef85be90f0ec643f"
});

const messaging = firebase.messaging();

// Quand on reçoit une notification
messaging.onBackgroundMessage(function(payload) {
  console.log('[Service Worker] Message reçu : ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/icon-192x192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

