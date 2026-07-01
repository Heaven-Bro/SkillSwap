import { useState } from "react";

function MessageInput({onSend, onTyping,}) {

    const [text, setText] = useState("");

    function submit(e) {

        e.preventDefault();

        if (!text.trim()) return;

        onSend(text);

        setText("");

    }

    return (

        <form
            onSubmit={submit}
            className="flex border-t"
        >

            <input

                value={text}

                onChange={(e)=>{

                    setText(e.target.value);

                    onTyping();

                }}

                className="flex-1 p-4 outline-none"

                placeholder="Type a message..."

            />

            <button
                className="bg-blue-600 text-white px-6"
            >

                Send

            </button>

        </form>

    );

}

export default MessageInput;