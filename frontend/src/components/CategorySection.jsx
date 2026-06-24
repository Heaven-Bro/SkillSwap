function CategorySection() {

    const categories = [

        "Programming",

        "Graphic Design",

        "Photography",

        "Language",

        "Marketing",

        "Music"

    ];

    return (

        <section className="max-w-7xl mx-auto py-10">

            <h2 className="text-3xl font-bold mb-6">

                Popular Categories

            </h2>

            <div className="grid md:grid-cols-3 gap-5">

                {

                    categories.map((category) => (

                        <div

                            key={category}

                            className="border rounded-lg p-6 hover:shadow-lg cursor-pointer"

                        >

                            <h3 className="text-xl font-semibold">

                                {category}

                            </h3>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default CategorySection;