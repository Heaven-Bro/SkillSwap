import api from "./axios";

export const getProfile = () =>
    api.get("profile/me/");

export const updateProfile = (data) =>
    api.put("profile/me/", data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });