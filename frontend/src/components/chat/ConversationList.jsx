import ConversationItem from "./ConversationItem";

function ConversationList({

    conversations,

    onSelect,

}) {

    return (

        <div className="w-80 border-r overflow-y-auto">

            {

                conversations.map(conversation => (

                    <ConversationItem

                        key={conversation.id}

                        conversation={conversation}

                        onSelect={onSelect}

                    />

                ))

            }

        </div>

    );

}

export default ConversationList;