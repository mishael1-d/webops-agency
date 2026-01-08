import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import QuestionSection from "@/components/QuestionSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <TestimonialSection />
        <QuestionSection />
      </main>
      <Footer />
    </div>
  );
}
