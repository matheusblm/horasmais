
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, BarChart3, Users } from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">TimeTrack</span>
          </div>
          <Button onClick={() => navigate("/dashboard")} variant="outline">
            Log In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Employee Time Management Made Simple
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              A modern time tracking system for administrators to manage employee attendance,
              monitor work hours, and streamline time record management.
            </p>
            <Button onClick={handleGetStarted} size="lg" className="gap-2">
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={BarChart3}
              title="Complete Dashboard"
              description="Get real-time insights on employee attendance, work hours, and time records."
            />
            <FeatureCard
              icon={Users}
              title="Employee Management"
              description="Manage employee profiles, work schedules, and permissions in one place."
            />
            <FeatureCard
              icon={Clock}
              title="Time Tracking"
              description="Track clock-ins and clock-outs with timestamps, photos, and locations."
            />
            <FeatureCard
              icon={Shield}
              title="Secure Access"
              description="Role-based access control ensures data security and privacy."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to streamline your time management?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using TimeTrack to simplify employee time management.
          </p>
          <Button onClick={handleGetStarted} size="lg" className="gap-2">
            Get Started <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Clock className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">TimeTrack</span>
            </div>
            <div className="text-gray-500">
              © {new Date().getFullYear()} TimeTrack. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
