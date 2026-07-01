function ConversationItem({ conversation, onSelect }) {

    return (

        <div

            onClick={() => onSelect(conversation)}

            className="p-4 border-b cursor-pointer hover:bg-gray-100"

        >

            <h3 className="font-semibold">

                {conversation.participants.join(", ")}

            </h3>

            <p className="text-gray-500">

                {conversation.last_message}

            </p>

        </div>

    );

}

export default ConversationItem;