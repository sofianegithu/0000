const About = () => {
      return (
        <div className="container mx-auto px-4 py-32">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-4">
              Welcome to LinkVerse AI, your go-to platform for simplifying and enhancing your digital links.
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p>
                Our mission is to provide innovative and user-friendly tools for managing and optimizing your URLs. We believe that every link should be a powerful asset, and we're here to help you make the most of them.
              </p>
            </section>
    
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <p>
                LinkVerse AI offers a range of features, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>URL Shortening: Transform long, cumbersome URLs into short, shareable links.</li>
                <li>Advanced Analytics: Track clicks, locations, and user behavior to gain valuable insights.</li>
                <li>AI-Powered Tools: Generate engaging content and optimize your links with our AI-driven features.</li>
                <li>Secure Link Management: Protect your links with password protection and expiration dates.</li>
              </ul>
            </section>
    
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p>
                We are a team of passionate developers and digital marketers dedicated to providing the best link management solutions. We are constantly working to improve our platform and provide you with the tools you need to succeed.
              </p>
            </section>
    
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions or feedback, please don't hesitate to contact us at <a href="mailto:contact@linkverse-ai.com" className="text-primary">contact@linkverse-ai.com</a>.
              </p>
            </section>
          </div>
        </div>
      );
    };
    
    export default About;
