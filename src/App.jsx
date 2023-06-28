import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div className="App" id="App">
            <section>
                <Header />
                <nav></nav>
                <div id="main"></div>
                <Footer />
            </section>
        </div>
    );
};

export default App;
