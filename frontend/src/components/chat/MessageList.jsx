import MessageBubble from "./MessageBubble";

function MessageList({ messages, currentUser }) {

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