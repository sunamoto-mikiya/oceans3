import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home({ posts }) {
    console.log(posts)
    return (
        <>
            <Header />
            <h1>Home1</h1>
            <Footer />
        </>
    )
}