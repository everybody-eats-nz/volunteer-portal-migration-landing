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
            We&apos;re Upgrading Our
            <br />
            Volunteer Experience
          </h1>

          {/* CTA Above the Fold */}
          <div className="flex justify-center">
            <a
              href="https://volunteers.everybodyeats.nz"
              className="btn btn-primary text-lg"
            >
              Go to our New Volunteer Portal
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
            We&apos;ve completed the migration from our legacy volunteer
            application to a new, improved volunteer portal. All existing users
            and their shift history have been transferred to the new system.
          </p>

          <h2 className="text-2xl mb-4">For Existing Volunteers</h2>
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
                <strong>Your account has been migrated</strong> - all your
                existing shift history is preserved in the new portal
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
                <strong>Check your email</strong> for an invitation with
                instructions to access the new portal
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="leading-relaxed">
                <strong>Haven&apos;t received the email?</strong> Please{" "}
                <a
                  href="mailto:volunteers@everybodyeats.nz?subject=Migration%20Invitation%20Email%20Not%20Received"
                  className="hover:underline"
                  style={{ color: "var(--ee-primary)" }}
                >
                  contact us
                </a>{" "}
                and we&apos;ll help you get set up
              </span>
            </li>
          </ul>

          <h2 className="text-2xl mb-4">For New Volunteers</h2>
          <p className="mb-6 leading-relaxed">
            If you&apos;re new to volunteering with Everybody Eats, you can sign
            up directly through the new volunteer portal. Click the button above
            to get started!
          </p>

          <h2 className="text-2xl mb-4">What&apos;s New?</h2>
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="leading-relaxed">
                Improved interface and easier navigation
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="leading-relaxed">
                New features including achievements, seeing your shift history,
                and more
              </span>
            </li>
          </ul>

          <h2 className="text-2xl mb-4">Need Help?</h2>
          <p className="leading-relaxed">
            If you have any questions, haven&apos;t received your invitation
            email, or need assistance accessing the new portal, please contact
            us at{" "}
            <a
              href="mailto:volunteers@everybodyeats.nz?subject=Volunteer%20Portal%20Migration%20Support"
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
            href="https://volunteers.everybodyeats.nz"
            className="btn btn-primary text-lg"
          >
            Go to our New Volunteer Portal
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
