import { useEffect, useState } from "react";
import { getReviews } from "../api/reviewApi";

function ReviewList() {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        loadReviews();
    }, []);

    async function loadReviews() {

        const response = await getReviews();

        setReviews(response.data);

    }

    return (

        <div className="max-w-5xl mx-auto mt-10">

            <h1 className="text-3xl font-bold mb-6">

                Reviews

            </h1>

            {reviews.map(review => (

                <div
                    key={review.id}
                    className="border rounded-lg p-5 mb-5 shadow"
                >

                    <h2 className="font-bold">

                        {review.reviewer_name}

                    </h2>

                    <p>

                        ⭐ {review.rating}/5

                    </p>

                    <p className="mt-2">

                        {review.comment}

                    </p>

                </div>

            ))}

        </div>

    );

}

export default ReviewList;