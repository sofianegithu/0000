const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-lg mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p>When you use LinkVerse AI, we collect:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>URLs you submit for shortening</li>
            <li>Basic analytics data (clicks, locations, devices)</li>
            <li>Account information when you register</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide URL shortening services</li>
            <li>Generate analytics and insights</li>
            <li>Improve our services</li>
            <li>Send service-related communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
          <p>We implement appropriate security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
          <p>We use cookies to enhance your experience and analyze our traffic. You can control cookies through your browser settings.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p>For any questions about this Privacy Policy, please contact us at privacy@linkverse-ai.com</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
