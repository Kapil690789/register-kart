const transformationItems = [
    { image: '/transform1.jpg', title: 'Small Business & Startup', description: 'Tailored solutions for growing businesses' },
    { image: '/transform2.jpg', title: 'Small Business & Startup', description: 'Streamlined processes for efficient operations' },
    { image: '/transform3.jpg', title: 'Small Business & Startup', description: 'Expert guidance for compliance and growth' },
    { image: '/transform4.jpg', title: 'Small Business & Startup', description: 'Innovative tools for digital transformation' },
    { image: '/transform5.jpg', title: 'Small Business & Startup', description: 'Comprehensive support for all business stages' },
    { image: '/transform6.jpg', title: 'Small Business & Startup', description: 'Customized strategies for success' },
  ]
  
  export default function Transformation() {
    return (
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Accelerate Digital Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empower your business with our cutting-edge solutions designed to drive growth and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Tag & Trend</span>
                    <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-[#1E3A8A] text-white px-10 py-4 text-lg rounded-md hover:bg-blue-900 transition-colors">
              Explore More
            </button>
          </div>
        </div>
      </section>
    )
  }