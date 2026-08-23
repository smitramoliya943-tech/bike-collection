import "./home.css";


function Home({bikes}) {
    return (
        <main className="bike-home">
            <section className="bikes-section">
                <div className="bikes-header">

                    <div>
                        <p className="collection-text">
                            BIKES COLLECTION
                        </p>

                        <h1>
                            PREMIUM <span>BIKES</span>
                        </h1>
                    </div>

                    <p className="model-count">
                        15 MODELS
                    </p>

                </div>


                <div className="bikes-grid">

                    {bikes.map((bike, index) => (

                        <div className="bike-card" key={index}>

                            <div className="bike-image">
                                <img
                                    src={bike.image}
                                    alt={bike.name}
                                />
                            </div>

                            <div className="bike-info">

                                <p className="bike-model">
                                    {bike.model}
                                </p>

                                <h2>
                                    {bike.name}
                                </h2>

                                <p className="bike-price">
                                    {bike.price}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </main>
    );
}

export default Home;