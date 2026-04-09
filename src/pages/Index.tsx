import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import GoogleReviews from "@/components/GoogleReviews";
import DashboardResultsSection from "@/components/DashboardResultsSection";
import StarterPlanCTA from "@/components/StarterPlanCTA";
import CaseStudySnapshot from "@/components/CaseStudySnapshot";
import HowItWorks from "@/components/HowItWorks";
import FounderSection from "@/components/FounderSection";
import Testimonial from "@/components/Testimonial";
import TrustSection from "@/components/TrustSection";
import { useMeta } from "@/hooks/useMeta";

const Index = () => {
  useMeta({
    title: "DiziGroww | Web Development & Performance Marketing | UAE, Singapore & India",
    description: "We Build High-Converting Websites & Run Ads That Actually Grow Your Business."
  });

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
      <CaseStudySnapshot />
      <HowItWorks />
      <ServicesGrid />
      <DashboardResultsSection />
      <WhyChooseUs />
      <GoogleReviews />
      <Testimonial />
      <StarterPlanCTA />
      <Process />
      <Pricing />
      <LeadForm />
      <FAQ />
    </main>
    <Footer />
  </>
  );
};

export default Index;
