import Link from "next/link";
import { Home, ArrowRight, Briefcase , Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center section-style2">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#5E9ED5]/90 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FC9810]/90 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>

      {/* Main Content */}
      <div className="relative z-10  mx-auto text-center">
        {/* Animated 404 Display */}
        <div className="mb-8">
          <div className="text-9xl font-bold  mb-2 tracking-tighter">
            <span className="inline-block animate-bounce">4</span>
            <span className="inline-block animate-bounce animation-delay-100">
              0
            </span>
            <span className="inline-block animate-bounce animation-delay-200">
              4
            </span>
          </div>

          {/* Decorative Divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-[#5E9ED5] to-[#FC9810] mx-auto rounded-full mb-6"></div>
        </div>

        {/* Robot/Character Illustration using CSS */}
        <div className="mb-10">
          <div className="relative w-40 h-40 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5E9ED5]/90 to-[#FC9810]/90 rounded-full opacity-10 animate-pulse"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-6xl">🤖</div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FC9810]/90 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-[80%]  mx-auto leading-relaxed">
            The requested resource is not available. This may be due to a broken link 
            or the page having been moved. We recommend the following actions:
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-6 h-6 text-[#5E9ED5]" />
            </div>
            <h3 className="text-[18px]  mb-1">Return Home</h3>
            <p className="  mb-4">Navigate to our main page</p>
            <Link
              href="/"
              className="view-all-btn inline-flex items-center "
            >
              Go to Homepage <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6 text-[#5E9ED5]" />
            </div>
            <h3 className="text-[18px]  mb-1">View Portfolio</h3>
            <p className="  mb-4">See our latest projects</p>
            <Link
              href="/portfolio"
              className="view-all-btn inline-flex items-center"
            >
              Browse Work <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-[#5E9ED5]" />
            </div>
            <h3 className="text-[18px]  mb-1">Contact Support</h3>
            <span className="mb-4"><Link href="tel:+917291934043">+91 72919 34043</Link></span>
            <p className="  mb-4">Get immediate assistance</p>
            <Link
              href="/contact"
              className="view-all-btn inline-flex items-center "
            >
              Reach Our Team <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
