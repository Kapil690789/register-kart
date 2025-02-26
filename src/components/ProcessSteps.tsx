import { FileText, CreditCard, CheckCircle, MessageCircle } from 'lucide-react'

const steps = [
  { icon: <FileText className="w-12 h-12 text-orange-500" />, text: "Fill an Application Form" },
  { icon: <CreditCard className="w-12 h-12 text-orange-500" />, text: "Make Online Payment" },
  { icon: <CheckCircle className="w-12 h-12 text-orange-500" />, text: "Executive will Process Application" },
  { icon: <MessageCircle className="w-12 h-12 text-orange-500" />, text: "Get Confirm Mail" },
]

export default function ProcessSteps() {
  return (
    <section className="py-20 md:py-32 bg-orange-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step process makes compliance easy and hassle-free for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 bg-white p-4 rounded-full shadow-lg">
                {step.icon}
              </div>
              <p className="text-xl font-semibold">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}