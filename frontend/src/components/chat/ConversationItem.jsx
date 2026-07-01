import UserStatusBadge from "./UserStatusBadge";


function ConversationItem({ conversation, onSelect }) {

    return (

        <div

            onClick={() => onSelect(conversation)}

            className="p-4 border-b cursor-pointer hover:bg-gray-100"

        >


            <div className="flex items-center gap-2">

                <UserStatusBadge
                    online={conversation.online}
                />

                <h3>

                    {conversation.participants.join(", ")}

                </h3>

            </div>

            <p className="text-gray-500">

                {conversation.last_message}

            </p>

        </div>

    );

}

export default ConversationItem;