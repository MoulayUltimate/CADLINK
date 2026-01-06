import Image from "next/image"
import { Shield } from "lucide-react"

export function TrustedPartnersSection() {
  const partners = [
    {
      name: "Verified by Google",
      description: "Reliable online verification & authenticity",
      logo: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg",
    },
    {
      name: "Secured by PayPal",
      description: "Safe digital payments & buyer protection",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    },
    {
      name: "Integrated with Autodesk",
      description: "Seamless CAD & design file compatibility",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Autodesk_Logo_2021.svg",
    },
    {
      name: "Powered by CorelDRAW",
      description: "Professional vector & printing workflow",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/CorelDraw_logo.svg",
    },
    {
      name: "Connected with Adobe",
      description: "Industry-standard design workflow support",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
    },
    {
      name: "Official Digital Factory Partner",
      description: "We provide genuine Digital Factory 11 license keys & solutions",
      logo: "/images/cadlink-product.png",
    },
  ]

  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="max-w-[900px] mx-auto px-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-6">
          <Shield className="w-6 h-6 text-gray-900" fill="currentColor" />
          <h3 className="text-[1.4rem] font-bold text-gray-900 m-0">
            Trusted by Global Software & Verification Leaders
          </h3>
        </div>

        {/* Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-[18px] flex items-center gap-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-gray-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <div className="flex-shrink-0">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={34}
                  height={34}
                  className="h-[34px] w-auto object-contain"
                  unoptimized
                />
              </div>
              <div>
                <div className="font-semibold text-base text-gray-900 mb-0.5">{partner.name}</div>
                <div className="text-[0.88rem] text-gray-500">{partner.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Note paragraph */}
        <p className="mt-5 text-gray-600 text-[0.9rem] leading-relaxed">
          Our store is trusted by global creative and manufacturing professionals. We deliver{" "}
          <strong className="text-gray-900">official Digital Factory 11 license keys</strong> and provide secure,
          verified transactions through <strong className="text-gray-900">PayPal</strong>. Our software integrates
          seamlessly with <strong className="text-gray-900">CorelDRAW</strong>,{" "}
          <strong className="text-gray-900">Autodesk</strong>, and <strong className="text-gray-900">Adobe</strong>{" "}
          design environments — ensuring smooth and efficient production workflows.
        </p>
      </div>
    </section>
  )
}
