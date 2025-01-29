import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Shield, Link, Check, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { VantaBackground } from "@/components/VantaBackground";

const Index = () => {
  return (
    <VantaBackground>
      <div className="relative min-h-screen overflow-auto">
        {/* Header/Hero Section */}
        <div className="relative z-10">
        <nav className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text drop-shadow-lg">Your Email Manager</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-200 hover:text-white drop-shadow-md transition-colors">Features</a>
              <a href="#pricing" className="text-gray-200 hover:text-white drop-shadow-md transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-200 hover:text-white drop-shadow-md transition-colors">FAQ</a>
              <Button variant="outline" className="shadow-lg">Sign In</Button>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 pt-32 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text drop-shadow-xl">
              Streamline Your Inbox with AI-Powered Efficiency
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 gradient-text drop-shadow-lg">
              Get Daily Summaries, Manage Multiple Emails, and Respond via WhatsApp
            </h2>
            <p className="text-xl text-gray-200 mb-12 drop-shadow-md">
              Stay on top of your email game with an intelligent assistant that simplifies your day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
                Learn More
              </Button>
            </div>
          </div>
        </main>
        </div>

        <section id="features" className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Why Choose Our AI Email Manager?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Mail />}
              title="Smart Summaries"
              description="Get a daily overview of all your email accounts in one place"
            />
            <FeatureCard
              icon={<MessageSquare />}
              title="AI-Generated Responses"
              description="Reply to emails directly via WhatsApp, powered by AI that adapts to your tone"
            />
            <FeatureCard
              icon={<Shield />}
              title="Secure & Private"
              description="We prioritize your data privacy with end-to-end encryption"
            />
          </div>
        </div>
        </section>

        {/* Testimonials Section with improved readability */}
        <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text drop-shadow-xl">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="This app has revolutionized how I manage emails. The daily summaries save me hours!"
              author="John D."
              role="Manager"
            />
            <TestimonialCard
              quote="Being able to reply via WhatsApp has made my workflow seamless. Love it!"
              author="Sarah L."
              role="Freelancer"
            />
            <TestimonialCard
              quote="The AI responses are spot-on and professional. Highly recommend it!"
              author="Tom P."
              role="Small Business Owner"
            />
          </div>
        </div>
        </section>

        <section id="pricing" className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Simple Plans for Everyone
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Free"
              description="Perfect for individuals starting out"
              price="$0"
              features={[
                "1 email account",
                "Daily summaries",
                "Limited AI responses"
              ]}
              ctaText="Sign Up for Free"
            />
            <PricingCard
              title="Pro"
              description="Ideal for freelancers and small teams"
              price="$19"
              features={[
                "Up to 5 email accounts",
                "Unlimited summaries",
                "AI-generated responses via WhatsApp"
              ]}
              ctaText="Start Free Trial"
              highlighted
            />
            <PricingCard
              title="Business"
              description="Perfect for growing businesses"
              price="$49"
              features={[
                "Unlimited email accounts",
                "Advanced AI personalization",
                "Priority support"
              ]}
              ctaText="Get Started Now"
            />
          </div>
        </div>
        </section>

        {/* How It Works Section */}
        <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Getting Started is Easy!
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StepCard
              number="1"
              title="Sign Up"
              description="Create an account and connect your email accounts"
            />
            <StepCard
              number="2"
              title="Set Preferences"
              description="Customize how you receive summaries and responses"
            />
            <StepCard
              number="3"
              title="Let AI Work"
              description="Relax while we manage your emails and send updates directly to WhatsApp"
            />
          </div>
        </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Have Questions? We've Got Answers
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <FAQCard
              question="How secure is my data?"
              answer="We use end-to-end encryption and follow industry best practices to ensure your data is always protected."
            />
            <FAQCard
              question="Can I use this with multiple email providers?"
              answer="Yes! We support Gmail, Outlook, and any IMAP-supported email provider."
            />
            <FAQCard
              question="Is the WhatsApp integration included in all plans?"
              answer="WhatsApp integration is available in our Pro and Business plans."
            />
          </div>
        </div>
        </section>

        {/* Footer with improved contrast */}
        <footer className="relative z-10 bg-gray-900/90 backdrop-blur-sm text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 drop-shadow-md">Your Email Manager</h3>
              <p className="text-gray-300">Transform your inbox experience</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 drop-shadow-md">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-4 drop-shadow-md">Ready to Transform Your Inbox?</h4>
              <Button size="lg" className="w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all">
                Start Free Today <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
        </footer>
      </div>
    </VantaBackground>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="glass-card p-6">
    <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center text-white mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role }: { quote: string; author: string; role: string }) => (
  <div className="glass-card p-6">
    <p className="text-gray-600 mb-4">"{quote}"</p>
    <div className="font-semibold">{author}</div>
    <div className="text-gray-500">{role}</div>
  </div>
);

const PricingCard = ({ 
  title, 
  description, 
  price, 
  features, 
  ctaText, 
  highlighted = false 
}: { 
  title: string;
  description: string;
  price: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
}) => (
  <div className={`glass-card p-8 ${highlighted ? 'border-indigo-500 border-2' : ''}`}>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="mb-6">
      <span className="text-4xl font-bold">{price}</span>
      <span className="text-gray-600">/month</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="w-5 h-5 text-indigo-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <Button className="w-full" variant={highlighted ? "default" : "outline"}>
      {ctaText}
    </Button>
  </div>
);

const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="glass-card p-6 text-center">
    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FAQCard = ({ question, answer }: { question: string; answer: string }) => (
  <div className="glass-card p-6">
    <h3 className="text-xl font-semibold mb-2">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default Index;
