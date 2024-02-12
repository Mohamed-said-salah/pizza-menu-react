import "./App.css";
import pizzaData from "./data";

export default function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our menu</h2>

            {pizzaData.length > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzaData.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>
                    We're still working on our menu. Please come back later 😀
                </p>
            )}
        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOPen = hour >= openHour && hour < closeHour;

    return (
        <footer className="footer">
            <Order isOpen={isOPen} openHour={openHour} closeHour={closeHour} />
        </footer>
    );
}

function Pizza({ pizzaObj }) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>
                    {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + "$"}
                </span>
            </div>
        </li>
    );
}

function Order({ isOPen, openHour, closeHour }) {
    return isOPen ? (
        <div className="order">
            <p>
                We're open until {closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn" type="button">
                Order
            </button>
        </div>
    ) : (
        <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}
            :00.
        </p>
    );
}
