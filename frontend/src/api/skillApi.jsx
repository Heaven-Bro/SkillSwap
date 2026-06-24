import api from "./axios";

export const getSkills = (params = {}) => {
    return api.get("skills/", {params});
};

export const getSkill = (id) => {
    return api.get(`skills/${id}`);
};

export const createSkill = (data) => {
    return api.post("skills/", data);
};

export const updateSkill = (id, data) => {
    return api.put(`skills/${id}/`, data);
};

export const deleteSkill = (id) => {
    return api.delete(`skills/$(id)/`);
};