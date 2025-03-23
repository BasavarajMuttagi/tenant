import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-zinc-200 text-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
              <path d="M2 7h20" />
              <path d="M22 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7" />
              <path d="M4 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7" />
            </svg>
            <span className="font-medium">Rarome</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium">
              Documentation
            </Link>
            <Link href="#" className="text-sm font-medium">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <SignInButton />
            <SignUpButton unsafeMetadata={{ onboardingComplete: false }} />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-zinc-900 sm:text-5xl xl:text-6xl/none">
                    Complete School ERP Software Solution
                  </h1>
                  <p className="max-w-[600px] text-zinc-600 md:text-xl">
                    Streamline administration, enhance learning, and connect
                    your school community with our comprehensive ERP system
                    designed for educational institutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-zinc-50 rounded-xl opacity-50"></div>
                <Image
                  src="https://images.pexels.com/photos/21862234/pexels-photo-21862234/free-photo-of-aerial-view-of-jiujiang-city-above-hukou-jinshawan-school.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  width={550}
                  height={550}
                  alt="Modern School Campus"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center  relative z-10"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-200 bg-white">
        <div className="container flex flex-col gap-6 py-8 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-zinc-700"
              >
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                <path d="M2 7h20" />
                <path d="M22 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7" />
                <path d="M4 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7" />
              </svg>
              <span className="font-medium text-zinc-900">Rarome</span>
            </Link>
            <p className="text-sm text-zinc-500">
              Comprehensive school ERP software solution.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-900">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-900">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-900">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-900">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-200">
          <div className="container flex flex-col gap-2 py-4 px-4 md:px-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} Rarome. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-500 hover:text-zinc-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-zinc-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-zinc-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
