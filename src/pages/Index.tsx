import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/story", { replace: true });
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <WorkSection />
      <ProcessSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
