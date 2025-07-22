import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FunButton } from "@/components/ui/fun-button";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Heart, GraduationCap, Users, Lightbulb, Home, Utensils } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCause, setSelectedCause] = useState("");
  const { toast } = useToast();

  const predefinedAmounts = ["50", "100", "250", "500", "1000"];

  const causes = [
    {
      id: "education",
      title: "Education Programs",
      description: "Support literacy, digital skills, and academic development programs",
      icon: GraduationCap,
      color: "fun-blue",
    },
    {
      id: "youth",
      title: "Youth Empowerment",
      description: "Fund leadership training, mentorship, and career development",
      icon: Users,
      color: "fun-purple",
    },
    {
      id: "innovation",
      title: "Innovation Labs",
      description: "Equip makerspaces, coding bootcamps, and entrepreneurship programs",
      icon: Lightbulb,
      color: "fun-green",
    },
    {
      id: "infrastructure",
      title: "Community Infrastructure",
      description: "Build safe learning spaces and community centers",
      icon: Home,
      color: "fun-yellow",
    },
    {
      id: "nutrition",
      title: "Nutrition Programs",
      description: "Provide healthy meals and nutrition education",
      icon: Utensils,
      color: "fun-pink",
    },
  ];

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount || customAmount;
    
    toast({
      title: "Thank you for your generous donation!",
      description: `Your R${amount} donation will make a real difference. Redirecting to payment...`,
    });
    
    // Here you would integrate with PayFast
    setTimeout(() => {
      toast({
        title: "Payment integration coming soon!",
        description: "PayFast integration will be implemented for secure payment processing.",
      });
    }, 2000);
  };

  const impactStats = [
    { amount: "R50", impact: "Provides school supplies for 1 child for a month" },
    { amount: "R100", impact: "Sponsors a coding workshop for 5 students" },
    { amount: "R250", impact: "Funds a week of nutritious meals for 10 children" },
    { amount: "R500", impact: "Supports entrepreneurship training for 3 youth" },
    { amount: "R1000", impact: "Covers technology equipment for a full classroom" },
  ];

  return (
    <div className="min-h-screen pt-16">
      <ScrollAnimation>
        <section className="py-16 bg-gradient-to-br from-fun-pink/5 to-fun-purple/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-fun-pink to-fun-purple bg-clip-text text-transparent">
                Make a Difference Today
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your donation directly impacts lives in our community. Every contribution, no matter the size, helps us build a brighter future.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Donation Form */}
              <ScrollAnimation delay={0.1}>
                <Card className="bg-gradient-to-br from-fun-pink/10 to-fun-purple/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-6 h-6 text-fun-pink animate-pulse-slow" />
                      Make Your Donation
                    </CardTitle>
                    <CardDescription>
                      Choose your donation amount and cause to support
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleDonateSubmit} className="space-y-6">
                      {/* Donation Amount */}
                      <div>
                        <label className="text-sm font-medium text-foreground mb-3 block">
                          Select Amount (ZAR)
                        </label>
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {predefinedAmounts.map((amount) => (
                            <button
                              key={amount}
                              type="button"
                              onClick={() => {
                                setSelectedAmount(amount);
                                setCustomAmount("");
                              }}
                              className={`p-3 rounded-lg border-2 transition-all ${
                                selectedAmount === amount
                                  ? "border-fun-pink bg-fun-pink/10 text-fun-pink font-semibold"
                                  : "border-gray-200 hover:border-fun-pink/50"
                              }`}
                            >
                              R{amount}
                            </button>
                          ))}
                        </div>
                        <Input
                          type="number"
                          placeholder="Custom amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount("");
                          }}
                          className="border-fun-pink/30 focus:border-fun-pink"
                        />
                      </div>

                      {/* Donation Cause */}
                      <div>
                        <label className="text-sm font-medium text-foreground mb-3 block">
                          Choose a Cause
                        </label>
                        <Select value={selectedCause} onValueChange={setSelectedCause}>
                          <SelectTrigger className="border-fun-pink/30 focus:border-fun-pink">
                            <SelectValue placeholder="Select a cause to support" />
                          </SelectTrigger>
                          <SelectContent>
                            {causes.map((cause) => (
                              <SelectItem key={cause.id} value={cause.id}>
                                {cause.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Personal Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input placeholder="Full Name" required className="border-fun-pink/30 focus:border-fun-pink" />
                        <Input placeholder="Email Address" type="email" required className="border-fun-pink/30 focus:border-fun-pink" />
                      </div>

                      <Textarea
                        placeholder="Leave a message (optional)"
                        className="border-fun-pink/30 focus:border-fun-pink"
                      />

                      <FunButton 
                        type="submit" 
                        variant="rainbow" 
                        size="lg" 
                        className="w-full"
                        disabled={!selectedAmount && !customAmount}
                      >
                        Donate {selectedAmount && `R${selectedAmount}`} {customAmount && `R${customAmount}`}
                      </FunButton>
                    </form>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Causes and Impact */}
              <div className="space-y-8">
                <ScrollAnimation delay={0.2}>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Our Causes</h2>
                    <div className="space-y-4">
                      {causes.map((cause, index) => (
                        <Card 
                          key={cause.id} 
                          className={`hover:scale-105 transition-transform cursor-pointer ${
                            selectedCause === cause.id ? 'border-2 border-fun-pink' : ''
                          }`}
                          onClick={() => setSelectedCause(cause.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              <div className={`w-12 h-12 bg-${cause.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                                <cause.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-foreground mb-1">{cause.title}</h3>
                                <p className="text-sm text-muted-foreground">{cause.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.3}>
                  <Card className="bg-gradient-to-br from-fun-blue/10 to-fun-green/10">
                    <CardHeader>
                      <CardTitle>Your Impact</CardTitle>
                      <CardDescription>See how your donation makes a difference</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {impactStats.map((stat, index) => (
                          <div key={index} className="flex justify-between items-start text-sm">
                            <span className="font-semibold text-fun-blue">{stat.amount}</span>
                            <span className="text-muted-foreground text-right flex-1 ml-4">{stat.impact}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Donate;