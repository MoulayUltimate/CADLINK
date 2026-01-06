import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How do I Download my purchased software?",
      answer:
        "After completing your purchase, a download link will appear on your order confirmation page. Click on this link to download the software instantly.",
    },
    {
      question: "What types of software do you offer?",
      answer:
        "We offer a wide range of software, including productivity tools, design software, security programs, and more. Visit our store to explore the available products.",
    },
    {
      question: "Will I receive installation instructions?",
      answer:
        "Yes! Along with the download link, you will also find a step-by-step video tutorial that guides you through the installation and activation process.",
    },
    {
      question: "Are there dongles or activation keys?",
      answer: "No dongles, no complicated activations! Just install the software and start creating.",
    },
    {
      question: "Can I upgrade my software after purchasing?",
      answer:
        "The ability to upgrade depends on the specific software provider. Some software may require a new purchase for an upgrade, while others allow free updates. Check the product details for more information.",
    },
    {
      question: "What if I don't like the software?",
      answer: "No worries — there's a 90-day refund policy if you're not satisfied with your purchase.",
    },
    {
      question: "How do I buy the software?",
      answer:
        "It's easy! Just add it to your cart, fill in your details, and you'll get your activation code right after completing your purchase.",
    },
    {
      question: "Can I reinstall the software in the future?",
      answer:
        "Yes, you can reinstall the software, but we suggest keeping a backup of the installation file. If you need to reinstall, use the same file and follow the video tutorial steps.",
    },
    {
      question: "What if I don't see the download link after purchasing?",
      answer:
        "If the download link does not appear immediately, please check your email for the order confirmation. If the link is still missing, contact us via email for assistance.",
    },
    {
      question: "I'm facing issues with downloading or installing the software. What should I do?",
      answer:
        "If you experience any difficulties, first refer to the video tutorial for guidance. If the issue persists, send us an email with details of the problem, and our support team will assist you as soon as possible.",
    },
    {
      question: "What should I do if I don't receive an order confirmation email?",
      answer:
        "Check your spam or junk folder in case the email was filtered there. If you still haven't received it, contact us via email with your order details.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "If you need any assistance, feel free to send us an email at contact@Cadlink.us. Our team is ready to help!",
    },
    {
      question: "How long is the download link available?",
      answer:
        "The download link will be available immediately after purchase, but we recommend downloading the software as soon as possible to avoid any inconvenience.",
    },
  ]

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
            FAQ for <span className="text-primary">CADlink</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-8">Digital Factory 11</p>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
