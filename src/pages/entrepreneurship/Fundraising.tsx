import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EntrepreneurshipNavbar } from "@/components/entrepreneurship/EntrepreneurshipNavbar";
import EntrepreneurshipFooter from "@/components/entrepreneurship/EntrepreneurshipFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import SEOManager from "@/components/PageSEO";
import { FloatingMainSiteButton } from "@/components/FloatingMainSiteButton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Fundraising = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Entrepreneurship", href: "/entrepreneurship" },
    { label: "Fundraising" }
  ];

  const contextStats = [
    { label: "Black African population", value: "52%" },
    { label: "Coloured population", value: "47%" },
    { label: "Completed Grade 12 or higher", value: "17%" },
    { label: "Earn R3,200 or less per month", value: "73%" },
    { label: "Live in formal dwellings", value: "43%" },
    { label: "Have piped water", value: "68%" },
    { label: "Have flush toilets", value: "71%" },
    { label: "Weekly refuse removal", value: "93%" },
    { label: "Use electricity for lighting", value: "69%" }
  ];

  const budgetData = [
    { category: "ICT Equipment & Software", amount: "R2,500,000.00" },
    { category: "Facilitator Salaries & Training", amount: "R2,000,000.00" },
    { category: "Learning Materials & Course Content", amount: "R800,000.00" },
    { category: "Venue Rental & Operational Costs", amount: "R700,000.00" },
    { category: "Youth Stipends & Transportation", amount: "R500,000.00" },
    { category: "Monitoring, Evaluation, & Reporting", amount: "R200,000.00" },
    { category: "Administrative & Miscellaneous", amount: "R220,133.33" },
    { category: "Tutoring Programme Coordinators", amount: "R120,000.00" },
    { category: "Numeracy & Literacy Programme Coordinators", amount: "R120,000.00" },
    { category: "Total Budget Requested", amount: "R7,160,133.33" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EntrepreneurshipNavbar />
      
      <div className="pt-16">
        <MiniHeroBanner
          title="Fundraising"
          subtitle="Help us sustain and expand our impact through your support."
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbItems} />

          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Context and Community Landscape</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Fisantekraal, a farming community in Durbanville, faces challenges including alcoholism, drug abuse, youth unemployment, and extreme poverty. Key statistics include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {contextStats.map((stat, index) => (
                  <Card key={index} className="p-4">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Waumbe is also expanding to Philippi (Cape Town) and Cofimvaba (Eastern Cape) — both under-resourced areas with high crime and low high-school completion rates.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Programmes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Academic Development & Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Tutoring, career guidance, and post-matric support reaching 3,000+ learners annually.</p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Societal Reformation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Life skills, leadership training, and "Raising a Quality Man" mentorship.</p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Skills Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Accredited Learnerships, farming initiatives, and micro-enterprise training.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Key Achievements (2014–2025)</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">SAQA MICTSETA Accreditation:</p>
                      <p className="text-muted-foreground">IT, Technical Support, End User Computing</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Partnered with Presidential Youth Employment Stimulus (2022–present)</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">YearBeyond implementation partner since 2021</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Improved Fisantekraal High's matric pass rate from 45.1% to 85%</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Over 30,000 youth reached across the Western and Eastern Cape</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Funding Requests</h2>
              
              <div className="space-y-12">
                <Card className="p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl">1. Computer Skills Training</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Through holistic skills development, unemployed youth gain access to essential skills and meaningful employment opportunities.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      With over five years of experience in facilitating skills development courses, we aim to expand the reach and impact of our programmes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      This initiative will provide unemployed youth with access to ICT, Business Administration, and Agricultural courses. Given the increasing demand for these skills in South Africa's economy, it is crucial to align with global digital advancements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Unfortunately, young people in under-resourced communities are lagging behind. Furthermore, business and entrepreneurial skills are vital for driving economic growth in township and rural communities.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We plan to reach 60 unemployed youth across Fisantekraal, Philippi, and Cofimvaba (Eastern Cape).
                    </p>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-4">Youth Employment Placement Strategy</h4>
                      <p className="text-muted-foreground mb-4">Our placement strategy is structured around three key pathways:</p>
                      
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                          <h5 className="font-semibold">Employment Stream:</h5>
                          <p className="text-muted-foreground">Through partnerships with companies such as Mr Price, DSTV, and Investec, we have established a clear pipeline for graduates who wish to enter formal employment.</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <h5 className="font-semibold">Further Studies:</h5>
                          <p className="text-muted-foreground">Some participants opt to pursue further studies at TVET colleges, universities, or through online courses. We provide comprehensive support and guidance to facilitate their applications.</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <h5 className="font-semibold">Micro-enterprise:</h5>
                          <p className="text-muted-foreground">Entrepreneurial training is embedded within the programme to encourage self-employment. This ensures that participants remain proactive while seeking employment, and some graduates choose to follow an entrepreneurial path.</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mt-4">
                        Over the past five years, our placement rate has been 100%, with 10% securing permanent employment at their placement organisations. With this funding, we will continue ensuring that each participant accesses meaningful economic opportunities.
                      </p>
                    </div>
                    
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="text-2xl font-bold text-primary">Budget: R6,920,133.33</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl">2. Grade 12 Tutoring & Life Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      The objective of this programme is to enhance Grade 12 learners' academic performance and improve the pass rate for 186 learners in 2025.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Admission into tertiary institutions has become increasingly competitive, requiring not just a pass but high-quality grades to secure entry into preferred courses. To strengthen our educational support efforts, we propose hiring two Tutoring Programme Coordinators to ensure that learners receive the necessary academic guidance and support.
                    </p>
                    
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="text-2xl font-bold text-primary mb-2">Budget: R120,000</p>
                      <p className="text-muted-foreground">Breakdown: R5,000 per month per coordinator (2 coordinators) for 12 months</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl">3. Literacy & Numeracy Programme (Grades 2–4)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      This programme aims to enhance numeracy and literacy skills for 220 learners in Grades 2 to 4, reducing the risk of future school dropouts due to poor foundational learning.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The initiative is conducted during and after school at Fisantekraal Primary School and Trevor Manuel Primary School in the Fisantekraal community.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      A strong partnership with schools and tutors is crucial to the programme's success. We seek funding to support Programme Coordinators responsible for sustaining these efforts and reducing educational inequalities in our communities.
                    </p>
                    
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="text-2xl font-bold text-primary mb-2">Budget: R120,000</p>
                      <p className="text-muted-foreground">Breakdown: R5,000 per month per coordinator (2 coordinators) for 12 months</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Consolidated Proposed Budget</h2>
              <Card className="overflow-hidden">
                <Table>
                  <TableHeader className="bg-green-100">
                    <TableRow>
                      <TableHead className="font-bold text-green-800">Category</TableHead>
                      <TableHead className="font-bold text-green-800">Amount (Rands)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {budgetData.map((item, index) => (
                      <TableRow key={index} className={index === budgetData.length - 1 ? "font-bold bg-green-50" : ""}>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Placement Strategy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Employment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Placements with Mr Price, DSTV, Investec</p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Further Studies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Support for TVET, university, and online education</p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Micro-enterprise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Entrepreneurial training for business development</p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6 text-center p-6 bg-primary/10 rounded-lg">
                <p className="text-lg font-semibold">100% placement rate over five years, with 10% securing permanent roles.</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Governance</h2>
              <Card className="p-8">
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Waumbe is overseen by a board of four professionals providing strategic leadership, compliance oversight, and community representation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      
      <EntrepreneurshipFooter />
      <FloatingMainSiteButton />
    </div>
  );
};

export default Fundraising;