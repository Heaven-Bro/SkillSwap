import MessageBubble from "./MessageBubble";

function MessageList({ messages, currentUser }) {

    useEffect(() => {

        messages.forEach(msg => {

            if (msg.sender !== currentUser && !msg.is_read) {

                read(msg.id)

            }

        })

    }, [messages])


    return (

        <div className="flex-1 overflow-y-auto p-5">

            {

                messages.map(message => (

                    <MessageBubble

                        key={message.id}

                        message={message}

                        currentUser={currentUser}

                    />

                ))

            }

        </div>

    );

}

export default MessageList;