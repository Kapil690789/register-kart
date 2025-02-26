import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/logo-white.svg" alt="Register Karo" className="h-8 mb-6" />
            <p className="text-gray-300 mb-4">Trusted compliance solutions with unmatched service quality.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Start a Business */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Start a Business</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Management */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Management</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* We & Others */}
          <div>
            <h3 className="text-lg font-semibold mb-4">We & Others</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Media Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>© 2024 RegisterKaro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

