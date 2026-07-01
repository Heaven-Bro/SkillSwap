import api from "./axios";

export const getConversations = () => {
    return api.get("chat/conversations/");
};

export const getMessages = (conversationId) => {

    return api.get(

        `chat/messages/?conversation=${conversationId}`

    );

};

export const createConversation = (data) => {
    return api.post("chat/conversations/", data);
};

export const sendMessage = (data) => {
    return api.post("chat/messages/", data);
};

export const getUserStatus = () => {
    return api.get("chat/status/");
};
