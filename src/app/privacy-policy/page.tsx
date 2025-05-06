import React from 'react'

function Page() {
  return (
    <>
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

    <p className="mb-4">Effective Date: <strong>[Insert Effective Date]</strong></p>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
      <p>
        Quiz Money (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains
        how we collect, use, store, and share your personal information when you access or use our mobile
        application (the &quot;App&quot;). By using Quiz Money, you agree to this Privacy Policy. 
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
      <ul className="list-disc ml-5">
        <li>Registration Information: Name, email, phone number, date of birth, bank details.</li>
        <li>User Activity: Participation data, leaderboard positions, in-app purchases.</li>
        <li>Device Information: Model, OS, IP address, network carrier, unique identifiers.</li>
        <li>Usage Information: Interaction with quizzes, scores, usage patterns.</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
      <ul className="list-disc ml-5">
        <li>Provide and enhance the App.</li>
        <li>Process transactions and withdrawals.</li>
        <li>Send important updates and announcements.</li>
        <li>Improve user experience and performance.</li>
        <li>Comply with legal requirements.</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">4. Sharing and Disclosure</h2>
      <p>We do not sell personal information. We may share data with financial institutions, regulatory authorities, or trusted third-party service providers.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
      <p>We use industry-standard measures to secure your personal data.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">6. Data Retention</h2>
      <p>Your data is retained only as long as necessary to provide services and meet legal obligations.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">7. Children&quot;s Privacy</h2>
      <p>Quiz Money is not for individuals under 18, and we do not knowingly collect data from minors.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">8. User Rights</h2>
      <p>You may request access, correction, or deletion of your personal data by contacting our support.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">9. Changes to this Policy</h2>
      <p>We may periodically update this policy and will notify you of significant changes.</p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
      <p>
        For privacy inquiries, contact us at:
        <br />
        <strong>Email:</strong> hi@quizmoney.ng
        {/* <br />
        <strong>Address:</strong> [Insert Company Address] */}
      </p>
    </section>
  </div>
    </>
  )
}

export default Page
