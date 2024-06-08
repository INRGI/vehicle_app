import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SharedLayout from '../SharedLayout';

const HomePage = lazy(() => import("../../pages/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
const FavoritesPage = lazy(() => import("../../pages/FavoritesPage"));

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="catalogPage" element={<CatalogPage />} />
                    <Route path="favoritesPage" element={<FavoritesPage />} />
                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;