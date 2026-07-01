import api from "./axios";

export const getConversations = () => {
    return api.get("chat/conversations/");
};

export const getMessages = () => {
    return api.get("chat/messages/");
};

export const createConversation = (data) => {
    return api.post("chat/conversations/", data);
};

export const sendMessage = (data) => {
    return api.post("chat/messages/", data);
};