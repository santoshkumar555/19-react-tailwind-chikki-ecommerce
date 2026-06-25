import BreadCrumb from "../components/ui/BreadCrumb";

const About = () => {
    return (
        <>
            <div className="bg-stone-50 pt-32 pb-20 border-b border-stone-200">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <BreadCrumb
                        items={[
                            { label: "Home", path: "/" },
                            { label: "About Us", path: "/about" },
                        ]}
                    />
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-6 mt-8 animate-in fade-in slide-in-from-bottom duration-700">
                        WELCOME TO MAGANLAL CHIKKI
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                        A trusted manufacturer, exporter & supplier based in
                        Lonavala, India since 1880. Online sales platform for
                        chikki, dry fruit rolls, fudges & savouries.
                    </p>
                    <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                        <img
                            src="https://appy.trycatchtech.com/uploads/maganlalchikki/7836f658857a8502ab444d2723490965.jpeg"
                            alt="Overview"
                            className="w-full aspect-21/9 object-cover rounded-3xl shadow-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 space-y-20">
                    <div className="animate-in fade-in slide-in-from-bottom duration-700">
                        <h2 className="font-display text-3xl font-bold text-stone-900 mb-5">
                            What We Do
                        </h2>
                        <p className="text-lg text-stone-600 leading-relaxed">
                            We specialize in producing high-quality{" "}
                            <strong>
                                Chikki, Dry Fruit Rolls, Fudges, Jellies,
                                Savouries (Namkeens)
                            </strong>
                            . Beyond manufacturing, we provide comprehensive
                            services including Content creation, Content
                            processing, Content management, Order collection,
                            Order dispatchment.
                        </p>
                    </div>

                    <div className="animate-in fade-in slide-in-from-bottom duration-700">
                        <h2 className="font-display text-3xl font-bold text-stone-900 mb-5">
                            Our Heritage
                        </h2>
                        <p className="text-lg text-stone-600 leading-relaxed">
                            Founded in 1880 by{" "}
                            <strong>Late Shri. Bhivrajji Agarrwal</strong>, our
                            legacy began by supplied nutritious chikki to
                            railway workers on teak leaves. Named after his son,
                            Maganlal (founder's son), the business was expanded
                            through innovative routes by Maganlal and his sons.
                            Today, serving as the 4th generation generation,
                            Mangeysh Dhruv Agarrwal leads our focus on
                            International market expansion and Online shopping
                            platform.
                        </p>
                    </div>

                    <div className="animate-in fade-in slide-in-from-bottom duration-700 border-l-4 border-amber-500 pl-6 my-12">
                        <h2 className="font-display text-3xl font-bold text-stone-900 mb-5">
                            Manufacturing Excellence
                        </h2>
                        <p className="text-lg text-stone-600 leading-relaxed mb-4">
                            Our products are meticulously hand-made in a clean
                            and hygienic environment using traditional methods
                            for easy digestion and high nutrition. This
                            preserves freshness, taste and aroma of products
                            through our efficient packing.
                        </p>
                        <p className="text-lg font-bold text-stone-900">
                            100% Free From:{" "}
                            <span className="font-medium text-stone-600">
                                Preservatives, Artificial color, Artificial
                                flavors, Intoxicating substances
                            </span>
                            .
                        </p>
                    </div>

                    <div className="animate-in fade-in slide-in-from-bottom duration-700">
                        <h2 className="font-display text-3xl font-bold text-stone-900 mb-5">
                            Leadership & Team
                        </h2>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6">
                            Guided by <strong>Mr. Dhruv Agarrwal</strong>, our
                            mentor & guide, who brings rich industrial
                            experience motivating the team to cater to varied
                            client requirements. He closely observes production
                            process and maintains quality standards.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-8">
                            {[
                                "Food experts",
                                "Chefs",
                                "Quality controllers",
                                "Sales and marketing personnel",
                                "Managing executives",
                                "Skilled workers",
                            ].map((m, i) => (
                                <span
                                    key={i}
                                    className="bg-stone-50 text-stone-700 px-5 py-2.5 rounded-full text-sm font-bold border border-stone-200 shadow-sm"
                                >
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="animate-in fade-in slide-in-from-bottom duration-700 bg-amber-50 rounded-3xl p-8 md:p-12 border border-amber-100">
                        <h2 className="font-display text-3xl font-bold text-amber-900 mb-5">
                            Global Reach & Satisfaction
                        </h2>
                        <p className="text-lg text-amber-900/80 leading-relaxed mb-6">
                            Maintaining an uncompromising attitude towards
                            quality, our customer-centric approach has led to{" "}
                            <strong>
                                overwhelming recognition in the industry
                            </strong>{" "}
                            and long-lasting relationships with existing
                            clients. We proudly export to:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Dubai", "England", "France", "America"].map(
                                (m, i) => (
                                    <span
                                        key={i}
                                        className="bg-amber-900 text-amber-50 px-4 py-2 rounded-lg text-sm font-bold"
                                    >
                                        {m}
                                    </span>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
