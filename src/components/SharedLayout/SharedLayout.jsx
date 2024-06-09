import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loader from '../Loader';
import NavBar from "../NavBar";
import { Container } from "./SharedLayout.styled";

const SharedLayout = () => {
    return (
    <Container>
        <NavBar />
        <Suspense fallback={<Loader />}>
                <Outlet />
        </Suspense>
    </Container>
    )
}

export default SharedLayout;