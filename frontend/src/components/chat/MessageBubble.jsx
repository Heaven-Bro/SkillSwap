function MessageBubble({ message, currentUser }) {

    const mine = message.sender === currentUser;

    return (

        <div
            className={`flex mb-3 ${
                mine
                    ? "justify-end"
                    : "justify-start"
            }`}
        >

            <div
                className={`max-w-sm px-4 py-2 rounded-xl ${
                    mine
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                }`}
            >

                <p>{message.message}</p>

                <small>

                    {message.sender}

                </small>

            </div>

        </div>

    );

}

export default MessageBubble;