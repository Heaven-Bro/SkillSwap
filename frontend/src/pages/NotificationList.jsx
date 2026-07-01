import { useEffect, useState } from "react";
import {
    getNotifications,
    markRead,
    markAllRead,
} from "../api/notificationApi";

function NotificationList() {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        loadNotifications();
    }, []);

    async function loadNotifications() {

        const response = await getNotifications();

        setNotifications(response.data);

    }

    async function handleRead(id) {

        await markRead(id);

        loadNotifications();

    }

    async function handleAllRead() {

        await markAllRead();

        loadNotifications();

    }

    return (

        <div className="max-w-5xl mx-auto mt-10">

            <div className="flex justify-between mb-6">

                <h1 className="text-3xl font-bold">

                    Notifications

                </h1>

                <button
                    onClick={handleAllRead}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Mark All Read
                </button>

            </div>

            {notifications.map((notification) => (

                <div
                    key={notification.id}
                    className={`border rounded-lg p-5 mb-4 ${
                        notification.is_read
                            ? "bg-white"
                            : "bg-blue-50"
                    }`}
                >

                    <h2 className="font-bold">

                        {notification.title}

                    </h2>

                    <p className="mt-2">

                        {notification.message}

                    </p>

                    <button
                        onClick={() => handleRead(notification.id)}
                        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Mark Read
                    </button>

                </div>

            ))}

        </div>

    );

}

export default NotificationList;