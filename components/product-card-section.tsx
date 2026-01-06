"use client"

import { useState } from "react"
import { BuyNowButton } from "./buy-now-button"
import { Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export function ProductCardSection() {
  const [quantity, setQuantity] = useState(1)

  const desktopPrinters = [
    "AGA-DTF-M2A",
    "AGA-DTF-M2A6",
    "AGA-DTF-M2P",
    "Azon Pronto",
    "Azon Pronto v2",
    "DTFJet ONE",
    "Epson 38xx DTF / v2",
    "Epson 48xx DTF / v2",
    "Epson ET-8550 DTF / v2",
    "Epson L1800 DTF / v2",
    "Epson L805 DTF / v2",
    "Epson L8180 DTF / v2",
    "Epson P5000 DTF",
    "Epson R1800 / R2000 / R3000 DTF (v2 included)",
    "Epson SC-P400 / SC-P4900 / SC-P5000 / SC-P600 / SC-P800 / XP-15000 DTF (v2 included)",
    "M2M DTF30, NSP DTF DP2, Oasis DTF30",
    "PIT DTF A3, Prestige A3 DTF, Printec DeskDTF / v2, Printec Pro35",
    "Sublistar Eco Mini 300 1 DTF, X-TEC DTF-30, YBERIA DTF 30",
  ]

  const wideFormatPrinters = [
    "DTFPRO Panthera",
    "DTF JET ONE",
    "Epson 78xx / 98xx / 9900",
    "Epson SC-P6000 / SC-P9000",
    "Audley 24, Azon Pronto, AGA DTF-L, AGA DTF-M2A",
    "Titan Jet, Oric, HJD, Sublistar Allfar DTF, Mutoh VJ-628",
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[1000px] mx-auto">
          <div
            className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 transition-all duration-300"
            style={{
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* Left Section - Product Image */}
            <div className="bg-[#F5F5F5] p-10 md:p-[60px] flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(24, 117, 183, 0.05) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <Image
                  src="/images/cadlink-product.png"
                  alt="CADLINK Digital Factory 11 DTF - Windows"
                  width={500}
                  height={500}
                  className="w-full h-auto max-w-[500px]"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))",
                  }}
                />
              </div>
            </div>

            {/* Right Section - Product Details */}
            <div className="p-10 md:p-[60px_50px] flex flex-col justify-center">
              <h2
                className="text-[28px] font-bold text-[#2C2C2C] leading-tight mb-5"
                style={{ letterSpacing: "-0.5px" }}
              >
                CADLINK Digital Factory 11 DTF - Windows
              </h2>

              {/* Price Section */}
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-xl text-[#666666] line-through opacity-70">$800.00</span>
                <span className="text-[36px] font-extrabold text-[#0168A0]" style={{ letterSpacing: "-1px" }}>
                  <span className="text-2xl align-super mr-0.5">$</span>75.19
                </span>
                <span
                  className="text-[13px] font-semibold text-white px-3 py-1 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #4CAF50 0%, #45A049 100%)",
                    letterSpacing: "0.3px",
                  }}
                >
                  -37%
                </span>
              </div>

              {/* Stock Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold mb-8 w-fit"
                style={{
                  background: "rgba(76, 175, 80, 0.1)",
                  border: "1.5px solid #4CAF50",
                  color: "#4CAF50",
                  letterSpacing: "0.3px",
                }}
              >
                <Check className="w-4 h-4" strokeWidth={3} />
                In stock
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label
                  className="text-sm font-semibold text-[#2C2C2C] mb-2.5 block uppercase"
                  style={{ letterSpacing: "0.5px" }}
                >
                  Quantity
                </label>
                <div
                  className="flex items-center w-fit rounded-lg overflow-hidden transition-colors duration-300 hover:border-[#4A9BCE]"
                  style={{ border: "2px solid #E0E0E0" }}
                >
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-[45px] h-[45px] bg-white text-[#2C2C2C] text-xl font-semibold flex items-center justify-center transition-all duration-200 hover:bg-[#0168A0] hover:text-white active:scale-95"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-[60px] h-[45px] text-center text-base font-semibold text-[#2C2C2C] bg-[#F5F5F5] border-x border-[#E0E0E0] focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(999, quantity + 1))}
                    className="w-[45px] h-[45px] bg-white text-[#2C2C2C] text-xl font-semibold flex items-center justify-center transition-all duration-200 hover:bg-[#0168A0] hover:text-white active:scale-95"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <BuyNowButton
                productId="prod_cadlink_v11"
                className="w-full py-[18px] px-10 text-base font-bold uppercase tracking-wider rounded-lg transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: "linear-gradient(135deg, #0168A0 0%, #015580 100%)",
                  boxShadow: "0 4px 15px rgba(1, 104, 160, 0.15)",
                  letterSpacing: "1px",
                }}
              >
                Add to Cart
              </BuyNowButton>

              {/* Compatibility Accordion */}
              <Accordion type="single" collapsible className="mt-6">
                <AccordionItem value="compatibility" className="border-[#E0E0E0]">
                  <AccordionTrigger className="text-sm font-semibold text-[#2C2C2C] hover:no-underline hover:text-[#0168A0]">
                    Compatibility+
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-[#666666]">
                    <p className="font-medium text-[#2C2C2C] mb-2">
                      The DESKTOP Edition is compatible with the following popular DTF based printers (and more):
                    </p>
                    <ul className="space-y-1 mb-4">
                      {desktopPrinters.map((printer, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#0168A0]">•</span>
                          {printer}
                        </li>
                      ))}
                    </ul>
                    <p className="font-medium text-[#2C2C2C] mb-2">
                      The WIDE FORMAT Edition is compatible with the following popular DTF based printers (and more):
                    </p>
                    <ul className="space-y-1">
                      {wideFormatPrinters.map((printer, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#0168A0]">•</span>
                          {printer}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
