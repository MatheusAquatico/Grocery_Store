import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const BasePage = () => {
    return (
        <>
        <Header />
        <Container>
            <Outlet/>
        </Container>
        <Footer />
        </>
    )
}

export default BasePage;