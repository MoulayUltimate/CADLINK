import { Check } from "lucide-react"

export function SystemRequirementsSection() {
  const requirements = [
    { label: "Operating System", value: "64-bit Microsoft® Windows® 11 or Windows 10 version 1809 or above." },
    { label: "Processor", value: "Basic: 2.5–2.9 GHz processor; Recommended: 3+ GHz processor." },
    { label: "Memory", value: "Basic: 8 GB; Recommended: 16 GB." },
    { label: "Display", value: "Resolution: 1920 x 1080 with True Color." },
    {
      label: "Graphics Card",
      value:
        "Basic: 1 GB GPU with 29 GB/s Bandwidth and DirectX 11 compliant; Recommended: 4 GB GPU with 106 GB/s Bandwidth and DirectX 12 compliant.",
    },
    { label: "Disk Space", value: "10.0 GB (preferably on an SSD)." },
  ]

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">System Requirements</h2>
          <div className="space-y-4">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <p className="text-foreground">
                  <strong>{req.label}:</strong> <span className="text-muted-foreground">{req.value}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
