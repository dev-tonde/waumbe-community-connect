import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EntrepreneurshipNavbar } from "@/components/entrepreneurship/EntrepreneurshipNavbar";
import EntrepreneurshipFooter from "@/components/entrepreneurship/EntrepreneurshipFooter";
import SEOManager from "@/components/EnhancedSEO";
import { FloatingMainSiteButton } from "@/components/FloatingMainSiteButton";
import { Heart, DollarSign, Users, TrendingUp, Star, Target } from "lucide-react";

const Donate = () => {
  const donationAmounts = [100, 250, 500, 1000, 2500, 5000];

  const impactAreas = [
    {
      icon: Users,
      title: "Startup Funding",
      description: "Provide seed capital for promising new businesses",
      impact: "R500 can help launch a new business idea"
    },
    {
      icon: TrendingUp,
      title: "Mentorship Programs",
      description: "Connect entrepreneurs with experienced business mentors",
      impact: "R250 sponsors one month of mentorship"
    },
    {
      icon: Star,
      title: "Skills Training",
      description: "Offer business skills workshops and training sessions",
      impact: "R1000 funds a complete workshop series"
    },
    {
      icon: Target,
      title: "Equipment & Resources",
      description: "Provide essential business tools and technology",
      impact: "R2000 equips a small business with basic tools"
    }
  ];

  const donorBenefits = [
    "Tax-deductible Section 18A certificate",
    "Quarterly impact reports",
    "Invitation to exclusive donor events",
    "Direct updates from funded entrepreneurs",
    "Recognition on our donor wall",
    "Early access to success stories"
  ];

  return (
    <div className="min-h-screen bg-background">
      <EntrepreneurshipNavbar />
      
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Support Entrepreneurs
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your donation directly impacts aspiring entrepreneurs by providing them with the funding, mentorship, and resources they need to build successful businesses.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <ScrollAnimation>
              <Card className="p-8">
                <CardHeader className="px-0">
                  <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-primary" />
                    Make a Donation
                  </CardTitle>
                  <CardDescription>Choose an amount and help us create the next generation of successful entrepreneurs.</CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                    <form name="PayFastPayNowForm" action="https://payment.payfast.io/eng/process" method="post" className="space-y-6">
                      <input type="hidden" name="cmd" value="_paynow" />
                      <input type="hidden" name="receiver" value="27185441" />
                      <input type="hidden" name="return_url" value="https://www.waumbe.org.za" />
                      <input type="hidden" name="cancel_url" value="https://www.waumbe.org.za" />
                      <input type="hidden" name="notify_url" value="https://www.waumbe.org.za" />
                      <input type="hidden" name="item_name" value="Donation" />
                      
                      <div>
                        <label className="block text-sm font-medium mb-4">Select Amount</label>
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {donationAmounts.map((amount) => (
                            <Button
                              key={amount}
                              type="button"
                              variant="outline"
                              className="text-center"
                              onClick={() => {
                                const amountInput = document.querySelector('input[name="amount"]') as HTMLInputElement;
                                if (amountInput) amountInput.value = amount.toString();
                              }}
                            >
                              R{amount}
                            </Button>
                          ))}
                        </div>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input 
                            type="number" 
                            name="amount"
                            placeholder="Custom amount" 
                            className="pl-10"
                            min="5.00"
                            step="0.01"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Focus Area</label>
                        <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                          <option>Where needed most</option>
                          <option>Startup Funding</option>
                          <option>Mentorship Programs</option>
                          <option>Skills Training</option>
                          <option>Equipment & Resources</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name</label>
                          <Input placeholder="Your first name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name</label>
                          <Input placeholder="Your last name" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="your.email@example.com" />
                      </div>

                      {/* Address Section */}
                      <div className="space-y-4">
                        <h3 className="font-medium text-foreground">Shipping Address</h3>
                        <Input name="line1" placeholder="Address Line 1" required />
                        <Input name="line2" placeholder="Address Line 2 (Optional)" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input name="city" placeholder="City" required />
                          <Input name="region" placeholder="Province" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <select name="country" required className="w-full px-3 py-2 border border-input rounded-md bg-background">
                            <option value="">- Select Country -</option>
                            <option value="South Africa">South Africa</option>
                            <option value="">------------------------</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                          <Input name="code" type="number" placeholder="Postal Code" required />
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="newsletter" className="rounded" />
                        <label htmlFor="newsletter" className="text-sm">
                          Subscribe to our newsletter for impact updates
                        </label>
                      </div>
                      
                      <div className="text-center">
                        <input 
                          type="image" 
                          src="https://my.payfast.io/images/buttons/DonateNow/Dark-Large-DonateNow.png" 
                          alt="Donate Now" 
                          title="Donate Now with Payfast"
                          className="mx-auto"
                        />
                      </div>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        Your donation is secure and you'll receive a Section 18A tax certificate
                      </p>
                    </form>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <div className="space-y-8">
              <ScrollAnimation>
                <div>
                  <h2 className="text-2xl font-bold mb-6">Your Impact</h2>
                  <div className="space-y-6">
                    {impactAreas.map((area, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <area.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">{area.title}</h3>
                              <p className="text-sm text-muted-foreground mb-2">{area.description}</p>
                              <p className="text-sm font-medium text-primary">{area.impact}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Donor Benefits</h3>
                  <ul className="space-y-2">
                    {donorBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollAnimation>
            </div>
          </div>

          <ScrollAnimation>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Creating Lasting Change</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every donation creates a ripple effect. When you support one entrepreneur, you're helping create jobs, 
                build communities, and inspire the next generation of business leaders.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-muted-foreground">Businesses Funded</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Jobs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">R2.5M</div>
                  <div className="text-muted-foreground">Economic Impact</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      
      <EntrepreneurshipFooter />
      <FloatingMainSiteButton />
    </div>
  );
};

export default Donate;