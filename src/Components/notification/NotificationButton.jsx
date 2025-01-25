import React, { useState } from "react";

const NotificationButton = () => {
  const [inAppNotification, setInAppNotification] = useState(null);

  const handleNotification = () => {
    if (!("Notification" in window)) {
      // In-app notification as a fallback
      setInAppNotification("This browser does not support notifications.");
      clearNotification();
      return;
    }

    if (Notification.permission === "granted") {
      // Push browser notification
      new Notification("Hello!", {
        body: "You just clicked the button!",
        icon: "https://via.placeholder.com/128",
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Permission Granted", {
            body: "You will now receive notifications!",
            icon: "https://via.placeholder.com/128",
          });
        } else {
          // Fallback for denied permission
          setInAppNotification("You denied the notification permission.");
          clearNotification();
        }
      });
    } else {
      // Fallback for denied permission
      setInAppNotification("You denied the notification permission.");
      clearNotification();
    }
  };

  // Clear in-app notification after 3 seconds
  const clearNotification = () => {
    setTimeout(() => setInAppNotification(null), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={handleNotification}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Push Notification
      </button>

      {/* In-App Notification Fallback */}
      {inAppNotification && (
        <div className="mt-4 p-3 bg-red-500 text-white rounded-lg shadow-lg">
          {inAppNotification}
        </div>
      )}
    </div>
  );
};

export default NotificationButton;
