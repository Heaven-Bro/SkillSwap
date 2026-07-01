import { useEffect, useRef, useState } from "react";

function useChat(roomId) {

    const socketRef = useRef(null);
    const [typingUser, setTypingUser] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        if (!roomId) return;

        const token = localStorage.getItem("access");

        socketRef.current = new WebSocket(
            `ws://127.0.0.1:8000/ws/chat/${roomId}/?token=${token}`
        );

        socketRef.current.onmessage = (event) => {

            const data = JSON.parse(event.data);

            if (data.event === "typing") {

                setTypingUser(data.user);

                setTimeout(() => {

                    setTypingUser("");

                }, 1200);

                return;

            }

            if (data.event === "read") {

                setMessages(prev =>

                    prev.map(msg =>

                        msg.id === data.message_id

                            ? {

                                ...msg,

                                is_read: true

                            }

                            : msg

                    )

                )

                return

            }

            setMessages(prev => [...prev, data]);

        };

        return () => {

            socketRef.current.close();

        };

    }, [roomId]);

    const send = (message) => {

        socketRef.current.send(

            JSON.stringify({

                message,

            })

        );

    };

    const read = (messageId) => {

        socketRef.current.send(

            JSON.stringify({

                event: "read",

                message_id: messageId

            })

        )

    }
    
    const typing = () => {

        socketRef.current.send(

            JSON.stringify({

                event: "typing"

            })

        );

    };

    return {

        messages,

        send,

        typing,

        typingUser,

    };

}

export default useChat;