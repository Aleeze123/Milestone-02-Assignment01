import Navbar from "@/components/Navbar";
export default function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <main className="main-content">
                <div className="home-card">
                    <h2 className="home-title">
                        This is a Home page!
                    </h2>
                </div>
            </main>
        </div>
    );
}
