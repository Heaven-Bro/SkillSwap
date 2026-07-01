import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createReview } from "../api/reviewApi";

function CreateReview() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        exchange: "",

        reviewee: "",

        rating: 5,

        comment: "",

    });

    async function handleSubmit(e) {

        e.preventDefault();

        await createReview(formData);

        navigate("/reviews");

    }

    return (

        <div className="max-w-xl mx-auto mt-10">

            <h1 className="text-3xl font-bold mb-5">

                Add Review

            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    className="w-full border p-3 rounded"
                    placeholder="Exchange ID"
                    onChange={(e)=>setFormData({...formData,exchange:e.target.value})}
                />

                <input
                    className="w-full border p-3 rounded"
                    placeholder="Reviewee ID"
                    onChange={(e)=>setFormData({...formData,reviewee:e.target.value})}
                />

                <input
                    type="number"
                    min="1"
                    max="5"
                    className="w-full border p-3 rounded"
                    onChange={(e)=>setFormData({...formData,rating:e.target.value})}
                />

                <textarea
                    className="w-full border p-3 rounded"
                    rows="5"
                    placeholder="Comment"
                    onChange={(e)=>setFormData({...formData,comment:e.target.value})}
                />

                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded"
                >

                    Submit

                </button>

            </form>

        </div>

    );

}

export default CreateReview;