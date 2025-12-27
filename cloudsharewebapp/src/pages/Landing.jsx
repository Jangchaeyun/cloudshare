import { features, pricingPlans } from "../assets/data";
import CTASection from "../components/landing/CTASection";
import FeaturesSection from "../components/landing/FeaturesSection";
import FooterSection from "../components/landing/FooterSection";
import HeroSection from "../components/landing/HeroSection";
import PricingSection from "../components/landing/PricingSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";

const Landing = () => {
  return (
    <div className="landing-page bg-gradient-to-b from-gray-50to-gray-100">
      {/* Hero Section */}
      <HeroSection />
      {/* Feature section */}
      <FeaturesSection features={features} />
      {/* Pricing section */}
      <PricingSection pricingPlans={pricingPlans} />
      {/* Testimonials section */}
      <TestimonialsSection />
      {/* CTA section */}
      <CTASection />
      {/* Footer section */}
      <FooterSection />
    </div>
  );
};

export default Landing;
