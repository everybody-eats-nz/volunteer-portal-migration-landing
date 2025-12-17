import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.svg"
            alt="Everybody Eats"
            width={200}
            height={80}
            priority
            style={{
              filter:
                "invert(1) hue-rotate(180deg) saturate(2) brightness(0.4)",
            }}
          />
        </div>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl mb-4">
            We&apos;re Upgrading Our Volunteer Experience
          </h1>
          {/* <p className="text-xl opacity-80 mb-8">
            We&apos;re Upgrading Our Volunteer Experience
          </p> */}

          {/* CTA Above the Fold */}
          <div className="flex justify-center">
            <a
              href="https://volunteer.everybodyeats.nz"
              className="btn btn-primary text-lg"
            >
              Go to New Volunteer Portal
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl mb-4">What&apos;s Happening?</h2>
          <p className="mb-6 leading-relaxed">
            We&apos;re transitioning from our legacy volunteer application to a
            new, improved volunteer portal. This upgrade brings a better user
            experience, enhanced features, and improved security for all our
            volunteers.
          </p>

          <h2 className="text-2xl mb-4">What You Need to Know</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 flex-shrink-0"
                style={{ color: "var(--ee-primary)" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="leading-relaxed">
                The new portal offers an improved interface and easier
                navigation
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 flex-shrink-0"
                style={{ color: "var(--ee-primary)" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="leading-relaxed">
                Enhanced shift management and booking capabilities
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 flex-shrink-0"
                style={{ color: "var(--ee-primary)" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="leading-relaxed">
                New features including achievements, group bookings, and more
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 flex-shrink-0"
                style={{ color: "var(--ee-primary)" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="leading-relaxed">
                Your volunteer history and profile information will be preserved
              </span>
            </li>
          </ul>

          <h2 className="text-2xl mb-4">Need Help?</h2>
          <p className="leading-relaxed">
            If you have any questions or concerns about the migration, please
            contact us at{" "}
            <a
              href="mailto:volunteers@everybodyeats.nz"
              className="hover:underline"
              style={{ color: "var(--ee-primary)" }}
            >
              volunteers@everybodyeats.nz
            </a>
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://volunteer.everybodyeats.nz"
            className="btn btn-primary text-lg"
          >
            Visit New Volunteer Portal
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-sm opacity-60">
          <p>
            &copy; {new Date().getFullYear()} Everybody Eats. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
