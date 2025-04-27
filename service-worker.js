// service-worker.js

self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};

    const title = data.title || "Nouvelle Notification !";
    const options = {
        body: data.body || "Tu as une nouvelle notification.",
        icon: data.icon || "https://via.placeholder.com/192", // Mets ici une URL vers une icône si tu veux
        badge: data.badge || "https://via.placeholder.com/48"
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/') // Quand on clique sur la notification, ouvre ton site
    );
});
