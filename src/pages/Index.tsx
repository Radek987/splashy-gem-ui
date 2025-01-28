import { Button } from "@/components/ui/button";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { Mail, Zap, Shield, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <SplashCursor />
      
      {/* Hero Section */}
      <div className="relative z-10">
        <nav className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">EmailAI</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <Button variant="outline">Sign In</Button>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 pt-32 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-8 gradient-text">
              Your AI Email Assistant
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Transform your inbox with AI-powered email management. Save time, stay organized, and never miss important messages.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Free
            </Button>
          </div>
        </main>
      </div>

      {/* Features Section */}
      <section id="features" className="relative z-10 bg-gray-50/80 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Mail className="w-6 h-6" />}
              title="Smart Inbox"
              description="AI-powered inbox organization that automatically prioritizes your emails"
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Quick Replies"
              description="Generate contextual responses with one click using advanced AI"
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Spam Shield"
              description="Advanced protection against spam and phishing attempts"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Simple Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Basic"
              price="Free"
              features={[
                "Smart inbox organization",
                "Basic AI responses",
                "5 email accounts"
              ]}
            />
            <PricingCard
              title="Pro"
              price="$12"
              features={[
                "Everything in Basic",
                "Advanced AI features",
                "Unlimited email accounts",
                "Priority support"
              ]}
              highlighted
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={[
                "Everything in Pro",
                "Custom AI training",
                "Dedicated support",
                "SLA guarantee"
              ]}
            />
          </div>
        </div>
      </section>
    </div>
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

const PricingCard = ({ title, price, features, highlighted = false }: { 
  title: string; 
  price: string; 
  features: string[];
  highlighted?: boolean;
}) => (
  <div className={`glass-card p-8 ${highlighted ? 'border-indigo-500 border-2' : ''}`}>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold">{price}</span>
      {price !== "Custom" && <span className="text-gray-600">/month</span>}
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Star className="w-5 h-5 text-indigo-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <Button className="w-full" variant={highlighted ? "default" : "outline"}>
      Get Started
    </Button>
  </div>
);

export default Index;