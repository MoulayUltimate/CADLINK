import { Header } from "@/components/header"
import { SaleBanner } from "@/components/sale-banner"
import { HeroSection } from "@/components/hero-section"
import { TrustedPartnersSection } from "@/components/trusted-partners-section"
import { AboutSection } from "@/components/about-section"
import { ProductCardSection } from "@/components/product-card-section"
import { PrinterCompatibilitySection } from "@/components/printer-compatibility-section"
import { TrustpilotReviewsSection } from "@/components/trustpilot-reviews-section"
import { SystemRequirementsSection } from "@/components/system-requirements-section"
import { ProductSummarySection } from "@/components/product-summary-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SaleBanner />
      <Header />
      <main>
        <HeroSection />
        <TrustedPartnersSection />
        <AboutSection />
        <ProductCardSection />
        <PrinterCompatibilitySection />
        <TrustpilotReviewsSection />
        <SystemRequirementsSection />
        <ProductSummarySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
