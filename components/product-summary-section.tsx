import { Check, Star } from "lucide-react"
import { BuyNowButton } from "./buy-now-button"

export function ProductSummarySection() {
  const features = [
    "One-Time Payment – Fully Activated for Lifetime Access.",
    "Fast email delivery guaranteed.",
    "You'll get a direct download link of the software.",
    "Step-by-Step Installation Video Included via Email.",
    "No monthly fees or subscription renewals—one time purchase.",
    "Warranty & 24/7 Customer Support.",
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            CADlink Digital Factory 11 ! - Windows
          </h2>

          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-muted-foreground">+ 795 Reviews</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
          </div>

          <div className="text-left space-y-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>

          <BuyNowButton
            productId="prod_cadlink_v11"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12"
          >
            Buy Now - $75.19
          </BuyNowButton>
        </div>
      </div>
    </section>
  )
}
