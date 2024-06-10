import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SharedLayout from '../SharedLayout';

const HomePage = lazy(() => import("../../pages/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
const FavoritesPage = lazy(() => import("../../pages/FavoritesPage"));
const Features = lazy(() => import("../Features"));
const Reviews = lazy(() => import("../Reviews"));

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="catalog" element={<CatalogPage />}>
                        <Route path="features" element={<Features />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                    <Route path="favorites" element={<FavoritesPage />} />
                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
