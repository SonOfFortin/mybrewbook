import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboards from "../components/Dashboards";
import MainLayout from "../layouts/MainLayout";

const MainRoutes = () => {
    return (
        <Router>
            {/*<GlobalStyle />*/}
            <Routes>
                <Route element={<MainLayout />}>
                    <Route exact path="/" element={<Dashboards />} />
                </Route>
                {/*<Route path="*" element={<Error />} />*/}
            </Routes>
            {/*<Footer />*/}
        </Router>
    );
};

export default MainRoutes;
