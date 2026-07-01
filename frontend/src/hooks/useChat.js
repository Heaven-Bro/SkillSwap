import { useEffect, useRef, useState } from "react";

function useChat(roomId) {

    const socketRef = useRef(null);

    const [messages, setMessages] = useState([]);

    useEffect(() => {

        if (!roomId) return;

        const token = localStorage.getItem("access");

        socketRef.current = new WebSocket(
            `ws://127.0.0.1:8000/ws/chat/${roomId}/?token=${token}`
        );

        socketRef.current.onmessage = (event) => {

            const data = JSON.parse(event.data);

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

    return {

        messages,

        send,

    };

}

export default useChat;