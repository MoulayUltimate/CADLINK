import { BuyNowButton } from "./buy-now-button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/cadlink-product.png"
                alt="CADlink Digital Factory 11 Software Box"
                width={380}
                height={450}
                className="drop-shadow-xl"
                priority
              />
            </div>

            <div className="text-left">
              <p className="text-[#0168A0] text-sm font-semibold tracking-wider mb-4">#CADLINK™</p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                CADlink
                <br />
                Digital
                <br />
                Factory 11 !
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Complete Your Activation and Get Your License Key Now !
              </p>

              <div className="flex items-center gap-4 mb-6">
                <BuyNowButton
                  productId="prod_cadlink_v11"
                  size="lg"
                  className="bg-[#0168A0] hover:bg-[#015580] text-white font-semibold px-10 py-6 text-lg"
                >
                  Buy Now
                </BuyNowButton>
                <div className="text-4xl font-bold text-foreground">
                  $75<span className="text-2xl">.19</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xs text-muted-foreground mb-2">Secure and trusted checkout with:</p>
                <div className="flex items-center gap-3">
                  <div className="bg-[#1a1f71] text-white text-xs font-bold px-2 py-1 rounded">VISA</div>
                  <div className="bg-[#eb001b] text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-0.5">
                    <span className="text-[#f79e1b]">●</span>
                    <span className="text-[#eb001b]">●</span> MasterCard
                  </div>
                  <div className="bg-[#006fcf] text-white text-xs font-bold px-2 py-1 rounded">AMERICAN EXPRESS</div>
                  <div className="bg-black text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Pay
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z"
                      fill="#00b67a"
                    />
                  </svg>
                  <span className="font-semibold text-sm">Trustpilot</span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-sm">Excellent</p>
                  <p className="text-xs text-muted-foreground">Reviews 4,317</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
