import api from "./axios";

export const getReviews = () => {
    return api.get("reviews/");
};

export const getReview = (id) => {
    return api.get(`reviews/${id}/`);
};

export const createReview = (data) => {
    return api.post("reviews/", data);
};

export const updateReview = (id, data) => {
    return api.put(`reviews/${id}/`, data);
};

export const deleteReview = (id) => {
    return api.delete(`reviews/${id}/`);
};