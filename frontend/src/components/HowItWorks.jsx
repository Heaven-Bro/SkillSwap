function HowItWorks() {

    const steps = [

        "Create Profile",

        "Add Your Skills",

        "Find People",

        "Exchange Knowledge"

    ];

    return (

        <section className="bg-gray-100 py-16">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-3xl font-bold text-center">

                    How SkillSwap Works

                </h2>

                <div className="grid md:grid-cols-4 gap-6 mt-10">

                    {

                        steps.map((step, index) => (

                            <div

                                key={index}

                                className="bg-white p-6 rounded-lg shadow"

                            >

                                <h3 className="font-bold text-xl">

                                    {index + 1}

                                </h3>

                                <p className="mt-3">

                                    {step}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default HowItWorks;