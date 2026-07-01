import api from "./axios";

export const getNotifications = () => {
    return api.get("notifications/");
};

export const markRead = (id) => {
    return api.post(`notifications/${id}/mark_read/`);
};

export const markAllRead = () => {
    return api.post("notifications/mark_all_read/");
};

export const deleteNotification = (id) => {
    return api.delete(`notifications/${id}/`);
};