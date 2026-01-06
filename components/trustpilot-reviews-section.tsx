import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export function TrustpilotReviewsSection() {
  const reviews = [
    {
      initial: "S",
      name: "Sarah M.",
      time: "2 days ago",
      title: "Outstanding color accuracy and speed!",
      review:
        "I'm using the trial version while waiting on my purchase to arrive. The color accuracy is something I haven't seen before—greens, purples, pinks, all coming out almost perfect. The best part: It actually prints twice as fast!",
      badge: "Verified Purchase",
    },
    {
      initial: "J",
      name: "James R.",
      time: "1 day ago",
      title: 'Great colour accuracy and "pop"',
      review:
        'I upgraded from v10 to v11 and it\'s pretty much the same, for what I do anyway. My humble opinion is… You could have snuck into my house, upgraded 10 to 11 for me and I would not have noticed. Key praise: colour accuracy, print-speed, "pop" of colours.',
      badge: "Verified Purchase",
    },
    {
      initial: "M",
      name: "Maria L.",
      time: "8 days ago",
      title: "Worth every penny at work",
      review:
        "We have CADlink Digital Factory v11 at work—small improvements over v10, but still worth every penny. While the jump from v10 →v11 may be modest, the overall quality makes it essential for our DTF production.",
      badge: "Designer",
    },
    {
      initial: "D",
      name: "David K.",
      time: "2 weeks ago",
      title: "AMAZING software - so simple to use!",
      review:
        "This software IS AMAZING and actually pretty simple to use… The color accuracy is something I haven't seen before… Greens, purples, pinks, all coming out almost perfect… The best part: It actually prints twice as fast!",
      badge: "Verified Purchase",
    },
    {
      initial: "M",
      name: "Melissa R.",
      time: "3 weeks ago",
      title: "Excellent installation and support",
      review:
        "Got the digital download within minutes and was modeling the same afternoon. Installation was straightforward and it recognized my libraries instantly. The tools for cabinets and framing saved me hours on my kitchen project.",
      badge: "Verified Purchase",
    },
    {
      initial: "C",
      name: "Craig S.",
      time: "1 month ago",
      title: "Great pricing and instant download",
      review:
        "I'm really happy with my purchase of CADlink Digital Factory 11. The download link arrived instantly, and the checkout experience was excellent. The rendering quality and color accuracy made client approvals much faster for me.",
      badge: "Verified Purchase",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-2">CADlink Trustpilot Reviews</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our customers' Trustpilot reviews</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg font-bold text-foreground">4.8</span>
            <span className="text-muted-foreground">average rating</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
                  </svg>
                </div>
              ))}
            </div>
            <span className="text-muted-foreground">based on 892 reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white border-border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4a7c9b] flex items-center justify-center">
                    <span className="text-lg font-bold text-white">{review.initial}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.time}</p>
                  </div>
                </div>
                <div className="flex mb-3 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{review.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{review.review}</p>
                <div className="flex items-center gap-2 text-xs text-[#00b67a]">
                  <Check className="h-3 w-3" />
                  {review.badge}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
