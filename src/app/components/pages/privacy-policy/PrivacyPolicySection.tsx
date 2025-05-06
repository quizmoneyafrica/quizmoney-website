"use client";
import React, { useState } from "react";

function PrivacyPolicySection() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "information-collect", title: "2. Information We Collect" },
    { id: "information-use", title: "3. How We Use Your Information" },
    { id: "sharing-disclosure", title: "4. Sharing and Disclosure" },
    { id: "data-security", title: "5. Data Security" },
    { id: "data-retention", title: "6. Data Retention" },
    { id: "children-privacy", title: "7. Children&apos;s Privacy" },
    { id: "user-rights", title: "8. User Rights" },
    { id: "policy-changes", title: "9. Changes to this Policy" },
    { id: "contact", title: "10. Contact Us" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 gap-8">
      <nav className="hidden md:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left w-full py-2 uppercase px-4 rounded hover:bg-gray-100 ${
                    activeSection === section.id
                      ? "font-bold text-[#17478B]"
                      : " font-bold text-black"
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="mb-4">
          Effective Date: <strong>May 6, 2025</strong>
        </p>

        <div className="space-y-12">
          <section id="introduction">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Quiz Money (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, store, and share your
              personal information when you access or use our mobile application
              (the &ldquo;App&rdquo;). By using Quiz Money, you agree to this
              Privacy Policy.
            </p>
          </section>

          <section id="information-collect">
            <h2 className="text-2xl font-semibold mb-4">
              2. Information We Collect
            </h2>
            <ul className="list-disc ml-5">
              <li>
                Registration Information: Name, email, phone number, date of
                birth, bank details.
              </li>
              <li>
                User Activity: Participation data, leaderboard positions, in-app
                purchases.
              </li>
              <li>
                Device Information: Model, OS, IP address, network carrier,
                unique identifiers.
              </li>
              <li>
                Usage Information: Interaction with quizzes, scores, usage
                patterns.
              </li>
            </ul>
          </section>

          <section id="information-use">
            <h2 className="text-2xl font-semibold mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc ml-5">
              <li>Provide and enhance the App.</li>
              <li>Process transactions and withdrawals.</li>
              <li>Send important updates and announcements.</li>
              <li>Improve user experience and performance.</li>
              <li>Comply with legal requirements.</li>
            </ul>
          </section>

          <section id="sharing-disclosure">
            <h2 className="text-2xl font-semibold mb-4">
              4. Sharing and Disclosure
            </h2>
            <p>
              We do not sell personal information. We may share data with
              financial institutions, regulatory authorities, or trusted
              third-party service providers.
            </p>
          </section>

          <section id="data-security">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p>
              We use industry-standard measures to secure your personal data.
            </p>
          </section>

          <section id="data-retention">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p>
              Your data is retained only as long as necessary to provide
              services and meet legal obligations.
            </p>
          </section>

          <section id="children-privacy">
            <h2 className="text-2xl font-semibold mb-4">
              7. Children&apos;s Privacy
            </h2>
            <p>
              Quiz Money is not for individuals under 18, and we do not
              knowingly collect data from minors.
            </p>
          </section>

          <section id="user-rights">
            <h2 className="text-2xl font-semibold mb-4">8. User Rights</h2>
            <p>
              You may request access, correction, or deletion of your personal
              data by contacting our support.
            </p>
          </section>

          <section id="policy-changes">
            <h2 className="text-2xl font-semibold mb-4">
              9. Changes to this Policy
            </h2>
            <p>
              We may periodically update this policy and will notify you of
              significant changes.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              For privacy inquiries, contact us at:
              <br />
              <strong>Email:</strong> hi@quizmoney.ng
            </p>
          </section>
        </div>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <select
          className="w-full p-2 border rounded"
          value={activeSection}
          onChange={(e) => scrollToSection(e.target.value)}
        >
          {sections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.title}
            </option>
          ))}
        </select>
      </nav>
    </div>
  );
}

export default PrivacyPolicySection;
