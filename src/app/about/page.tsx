import Navbar from "@/components/Navbar"

export default function About() {
  return (
    <div className="min-height-container">
      <Navbar />
      <main className="main-content">
        <div className="about-container">
          <h2 className="about-title">
            This is an About page!
          </h2>
        </div>
      </main>
    </div>
  );
}
