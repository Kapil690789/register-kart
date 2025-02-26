const stats = [
  { number: "1M+", label: "Customers" },
  { number: "12+", label: "Years of Excellence" },
  { number: "41+", label: "MSE Employees" },
  { number: "78+", label: "Countries" },
  { number: "3287+", label: "Partners" },
  { number: "41+", label: "Awards Received" },
]

export default function Stats() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Some Numbers are Important</h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A8A] mb-4">{stat.number}</div>
              <div className="text-gray-600 text-lg md:text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

