export default function MobileApp() {
    return (
      <section className="py-20 md:py-32 bg-[#1E3A8A] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Manage Your Services by your Mobile Phone
              </h2>
              <p className="text-xl text-gray-300">
                Download our app to access all our services on the go. Stay updated with your compliance status and manage your business from anywhere.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-[#1E3A8A] px-6 py-3 rounded-md hover:bg-gray-100 transition-colors flex items-center">
                  <img src="/app-store.svg" alt="App Store" className="h-8 mr-2" />
                  App Store
                </button>
                <button className="bg-white text-[#1E3A8A] px-6 py-3 rounded-md hover:bg-gray-100 transition-colors flex items-center">
                  <img src="/google-play.svg" alt="Google Play" className="h-8 mr-2" />
                  Google Play
                </button>
              </div>
            </div>
            <div className="relative">
              <img src="/mobile-app-mockup.png" alt="Mobile App" className="w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>
    )
  }