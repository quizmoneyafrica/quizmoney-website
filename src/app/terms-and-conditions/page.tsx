import React from 'react'

function Page() {
  return (
    <>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>

      <p className="mb-4">Effective Date: <strong>[Insert Effective Date]</strong></p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Quiz Money (&quot;App&quot;), you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you must not use our App.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Eligibility</h2>
        <p>
          You must be at least 18 years old and a resident of Nigeria to use the App. Users must provide accurate and complete registration information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Account Responsibility</h2>
        <p>
          You are solely responsible for all activities conducted through your account. You agree to protect your account information and notify us immediately of unauthorized use.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Participation and Conduct</h2>
        <p>
          Users agree to participate in quizzes fairly. Quiz Money reserves the right to disqualify any participant found violating game rules, cheating, or disrupting service operations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Payments and Withdrawals</h2>
        <p>
          Entry fees and prizes are clearly stated within the App. Withdrawals must be made to bank accounts matching the user&quot;s registered name. All transactions are final.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property</h2>
        <p>
          All content, designs, trademarks, and intellectual property on the App are owned by Quiz Money and protected by applicable laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Limitation of Liability</h2>
        <p>
          Quiz Money shall not be liable for any indirect, incidental, or consequential damages arising from your use of the App.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Amendments</h2>
        <p>
          We reserve the right to update or change these Terms at any time. Continued use of the App after changes constitutes acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">9. Contact Information</h2>
        <p>
          For questions regarding these Terms and Conditions, please contact us at:
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
