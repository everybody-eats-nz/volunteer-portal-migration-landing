export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl mb-4">
            Everybody Eats Volunteer Portal
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            We&apos;re Upgrading Our Volunteer Experience
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            What&apos;s Happening?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            We&apos;re transitioning from our legacy volunteer application to a new, improved volunteer portal.
            This upgrade brings a better user experience, enhanced features, and improved reliability for all our volunteers.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            What You Need to Know
          </h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-6">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>The new portal offers an improved interface and easier navigation</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Enhanced shift management and booking capabilities</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>New features including achievements, group bookings, and more</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Your volunteer history and profile information will be preserved</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Timeline
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The migration is currently in progress. We&apos;ll notify all volunteers via email with specific dates
            and instructions for accessing the new portal.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Need Help?
          </h2>
          <p className="text-slate-700 dark:text-slate-300">
            If you have any questions or concerns about the migration, please contact us at{" "}
            <a
              href="mailto:volunteers@everybodyeats.nz"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              volunteers@everybodyeats.nz
            </a>
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://volunteer.everybodyeats.nz"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Visit New Volunteer Portal
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-slate-600 dark:text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Everybody Eats. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
