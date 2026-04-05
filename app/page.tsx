export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">

      {/* Header */}
      <header className="bg-gray-900 text-white px-6 py-6 rounded mb-6">
        <h1 className="text-3xl font-bold">Sany Binthe Akter</h1>
        <p className="text-gray-300">sakter@usf.edu | +1 813 370 7133</p>
      </header>

      {/* Summary */}
      <section className="border-t pt-4 mt-4">
        <h2 className="font-semibold text-lg uppercase tracking-wide">Summary</h2>
        <p className="text-gray-700 mt-2">
          Short summary about you.
        </p>
      </section>

      {/* Education */}
      <section className="border-t pt-4 mt-4">
        <h2 className="font-semibold text-lg uppercase tracking-wide">Education</h2>
        <p className="mt-2">University of South Florida | Business Analytics and Information Systems </p>
      </section>

      {/* Experience */}
      <section className="border-t pt-4 mt-4">
  <h2 className="font-semibold text-lg uppercase tracking-wide">Experience</h2>

  {/* Argos Dining */}
  <div className="mt-4">
    <h3 className="font-medium">Student Worker – Dining Operations</h3>
    <p className="text-sm text-gray-500">USF (Compass Group) | Sept 2025 – Present</p>
    <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
      <li>Supported inventory organization and high-volume service workflows.</li>
      <li>Identified inefficiencies and contributed to process improvements.</li>
      <li>Maintained accuracy and consistency in operational processes.</li>
    </ul>
  </div>

  {/* Barnes & Noble */}
  <div className="mt-4">
    <h3 className="font-medium">Bookseller – Barnes & Noble</h3>
    <p className="text-sm text-gray-500">Tampa, FL | Aug 2022 – Dec 2024</p>
    <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
      <li>Delivered customer service in a fast-paced retail environment.</li>
      <li>Managed transactions and maintained organized inventory systems.</li>
      <li>Handled incoming shipments and stock organization.</li>
    </ul>
  </div>

  {/* Business */}
  <div className="mt-4">
    <h3 className="font-medium">Business Entrepreneur – El’carino</h3>
    <p className="text-sm text-gray-500">Dhaka, Bangladesh | Aug 2020 – Dec 2021</p>
    <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
      <li>Managed budgets and forecasted financial performance.</li>
      <li>Oversaw daily operations and improved workflow efficiency.</li>
      <li>Applied data-driven decision making to support business growth.</li>
    </ul>
  </div>
</section>

      {/* Skills */}
      <section className="border-t pt-4 mt-4">
        <h2 className="font-semibold text-lg uppercase tracking-wide">Skills</h2>
        <p className="mt-2">Python, SQL, Tableau, Excel</p>
      </section>

    </main>
  );
}