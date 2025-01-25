import React from "react";

const NotificationButton = () => {
  // Function to handle button click
  const handleNotification = () => {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support notifications.");
      return;
    }

    // Request permission if not already granted
    if (Notification.permission === "granted") {
      new Notification("Hello!", {
        body: "You just clicked the button!",
        icon: "https://via.placeholder.com/128", // Replace with your own icon URL
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Permission Granted", {
            body: "You will now receive notifications!",
            icon: "https://via.placeholder.com/128",
          });
        } else {
          alert("You denied the notification permission.");
        }
      });
    }
  };

  return (
    <button
      onClick={handleNotification}
      className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
    >
      Push Notification
    </button>
  );
};

export default NotificationButton;
