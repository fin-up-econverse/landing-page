import { motion } from "framer-motion";
import "./index.css";
import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { 
  Sparkles, 
  TrendingUp, 
  CreditCard, 
  GraduationCap, 
  Brain,
  Zap,
  Check
} from "lucide-react";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    {
      icon: GraduationCap,
      title: "Financial Education",
      description: "5-minute interactive lessons with gamification and AI assistant analyzing your decisions",
      color: "from-primary to-primary-glow"
    },
    {
      icon: TrendingUp,
      title: "Easy Investing",
      description: "Start investing in crypto from just 50-100 zł. Your money works for you.",
      color: "from-secondary to-purple-400"
    },
    {
      icon: CreditCard,
      title: "Virtual Cards",
      description: "Crypto Card for daily payments and Crypto One for one-time subscriptions",
      color: "from-primary-glow to-primary"
    }
  ];

  const stats = [
    { value: "60%", label: "of Poles (18-30) have no savings" },
    { value: "45%", label: "don't invest due to lack of crypto knowledge" },
    { value: "92%", label: "want mandatory financial education" }
  ];

  const pricingPlans = [
    {
      name: "Freemium",
      price: "Free",
      features: [
        "Financial education",
        "Investment simulator",
        "0.5% transaction fees",
        "Basic features"
      ]
    },
    {
      name: "Premium",
      price: "9.99 zł",
      period: "/month",
      features: [
        "One-time virtual card",
        "Crypto payments",
        "AI Assistant",
        "No transaction fees",
        "Full access"
      ],
      highlighted: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
          <nav className="w-full py-6 flex justify-around gap-10 text-lg font-medium">
      <a href="#features" className="hover:text-primary transition-colors">Features</a>
      <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
      <a
        href="https://www.linkedin.com/company/finupforgenz/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Contact
      </a>
    </nav>
      {/* Hero Section */}
      <section className="relative overflow-hidden" id="about">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 pt-20 pb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Built by Gen Z, for Gen Z
              </span>
            </motion.div>

            <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent leading-tight">
              FinUp
            </h1>

            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 font-light">
              Your all-in-one financial platform for the crypto generation
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary-glow shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)]">
                Get Started Free
                <Zap className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors duration-300">
                  <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-4">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-lg">{stat.label}</p>
                </Card>
              </motion.div> 
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section className="py-20 relative" id="features">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              The answer to all Gen Z financial needs
            </h2>
            <p className="text-xl text-muted-foreground">
              We combine education, investment, and payment solutions in one seamless platform
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-8 h-full bg-card/80 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-shadow duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-12 bg-gradient-to-br from-card to-muted/30 border-primary/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold mb-4">AI Assistant</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Get personalized feedback on your financial decisions. Our AI analyzes your spending patterns and investment choices to help you make smarter money moves.
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold">
                    <Sparkles className="w-5 h-5" />
                    Powered by advanced AI
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative" id="pricing">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free and upgrade when you're ready
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`p-8 h-full ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary shadow-[0_0_40px_hsl(var(--primary)/0.2)]' 
                    : 'bg-card/80 border-border/50'
                }`}>
                  <div className="mb-8">
                    <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-display font-bold">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.highlighted 
                        ? 'bg-primary hover:bg-primary-glow shadow-[0_0_20px_hsl(var(--primary)/0.3)]' 
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                    size="lg"
                  >
                    {plan.highlighted ? 'Get Premium' : 'Start Free'}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Ready to take control of your finances?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Join thousands of Gen Z users already building their financial future
            </p>
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 rounded-full bg-primary hover:bg-primary-glow shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.6)] transition-all duration-300"
            >
              Start Your Journey
              <Zap className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="font-display text-3xl font-bold mb-4">FinUp</h3>
            <p className="text-muted-foreground mb-8">
              Financial platform built by Gen Z for Gen Z
            </p>
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
              <a
        href="https://www.linkedin.com/company/finupforgenz/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Contact
      </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
