import "./fleet-page.css";


const Fleet = () => {
    return (
        <>
        <div className="fleet-page">
            <h1>Our Fleet</h1>
            <p>Here is the selection of vehicles we offer</p>
            <div className="fleet-grid">
                <div className="fleet-item">
                <img src="/images/car1.jpg" alt="Car 1" />
                <h2>Car Model 1</h2>
                <p>Description of Car Model 1.</p>
            </div>
            <div className="fleet-item">
                <img src="/images/car2.jpg" alt="Car 2" />
                <h2>Car Model 2</h2>
                <p>Description of Car Model 2.</p>
            </div>
            <div className="fleet-item">
                <img src="/images/car3.jpg" alt="Car 3" />
                <h2>Car Model 3</h2>
                <p>Description of Car Model 3.</p>
            </div>
        </div>
        </div>
        </>
    );
}