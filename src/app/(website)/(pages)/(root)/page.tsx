import SectionHero from "./_sections/Hero";
import SectionSocialProof from "./_sections/SocialProof";
import SectionUseCases from "./_sections/UseCases";
import SectionBenefits from "./_sections/Benefits";
import SectionPricing from "./_sections/Pricing";
import SectionTestimonials from "./_sections/Testimonials";
import SectionFAQ from "./_sections/FAQ";
import SectionCTA from "./_sections/CTA";

function WebsitePageHome() {
  return (
    <>
      <h1>Home Page</h1>
      <SectionHero />
      <SectionSocialProof />
      <SectionUseCases />
      <SectionBenefits />
      <SectionPricing />
      <SectionTestimonials />
      <SectionFAQ />
      <SectionCTA />
    </>
  );
}

export default WebsitePageHome
