import { useEffect, useState } from "react";

import {
    getConversations,
    getMessages,
} from "../api/chatApi";

import useChat from "../hooks/useChat";

import ConversationList from "../components/chat/ConversationList";
import MessageList from "../components/chat/MessageList";
import MessageInput from "../components/chat/MessageInput";

function ChatPage() {

    const [conversations, setConversations] = useState([]);

    const [selectedConversation, setSelectedConversation] = useState(null);

    const [history, setHistory] = useState([]);

    const currentUser = localStorage.getItem("username");

    const {messages, send, typing, typingUser, } = useChat(selectedConversation?.id);

    useEffect(() => {

        loadConversations();

    }, []);

    useEffect(() => {

        if (selectedConversation) {

            loadMessages();

        }

    }, [selectedConversation]);

    async function loadConversations() {

        const response = await getConversations();

        setConversations(response.data);

    }

    async function loadMessages() {

        const response = await getMessages(

            selectedConversation.id

        );

        setHistory(response.data);

    }

    function handleSend(message) {

        send(message);

    }

    return (

        <div className="h-screen flex">

            <ConversationList

                conversations={conversations}

                onSelect={setSelectedConversation}

            />

            <div className="flex flex-col flex-1">

                {

                    selectedConversation ? (

                        <>

                            <MessageList

                                messages={[

                                    ...history,

                                    ...messages,

                                ]}

                                currentUser={currentUser}
                                read={read}

                            />

                            {typingUser && typingUser !== currentUser && (

                                <div className="px-5 py-2 text-sm text-gray-500 italic">

                                    {typingUser} is typing...

                                </div>

                            )}

                            <MessageInput

                                onSend={handleSend}

                                onTyping={typing}

                            />

                        </>

                    ) : (

                        <div className="flex items-center justify-center flex-1">

                            <h2 className="text-2xl text-gray-400">

                                Select Conversation

                            </h2>

                        </div>

                    )

                }

            </div>

        </div>

    );

}

export default ChatPage;