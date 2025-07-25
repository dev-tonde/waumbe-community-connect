import { ScrollAnimation } from "@/components/ScrollAnimation";
import MiniHeroBanner from "@/components/MiniHeroBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, DollarSign, TrendingUp } from "lucide-react";

const FinancialReports = () => {
  const reports = [
    {
      year: "2023",
      title: "Annual Financial Report 2023",
      description: "Comprehensive overview of our financial performance and impact for 2023",
      size: "2.4 MB",
      type: "PDF"
    },
    {
      year: "2022", 
      title: "Annual Financial Report 2022",
      description: "Financial statements and program outcomes for the year 2022",
      size: "2.1 MB",
      type: "PDF"
    },
    {
      year: "2021",
      title: "Annual Financial Report 2021",
      description: "Detailed financial analysis and community impact metrics for 2021",
      size: "1.9 MB",
      type: "PDF"
    },
    {
      year: "2020",
      title: "Annual Financial Report 2020",
      description: "Financial transparency report covering programs and operations in 2020",
      size: "1.8 MB",
      type: "PDF"
    }
  ];

  const highlights = [
    {
      icon: DollarSign,
      title: "R2.5M",
      description: "Total funds managed in 2023"
    },
    {
      icon: TrendingUp,
      title: "85%",
      description: "Funds allocated directly to programs"
    },
    {
      icon: FileText,
      title: "100%",
      description: "Financial transparency rating"
    }
  ];

  return (
    <div className="pt-16">
      <MiniHeroBanner 
        title="Financial Reports" 
        subtitle="We believe in complete transparency. Access our annual financial reports to see how your donations and support create real impact in our communities."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <highlight.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-3xl font-bold text-primary">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Download Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reports.map((report, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="bg-primary/10 px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-primary">{report.year}</span>
                      </div>
                      <FileText className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{report.title}</CardTitle>
                    <CardDescription>{report.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {report.type} • {report.size}
                      </div>
                      <Button size="sm" className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Financial Transparency</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We are committed to maintaining the highest standards of financial accountability and transparency. 
              All our reports are audited by independent certified accountants.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Audit Information</h3>
                <p className="text-muted-foreground">
                  Our financial statements are audited annually by Deloitte & Touche, 
                  ensuring accuracy and compliance with all regulatory requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                <p className="text-muted-foreground">
                  We maintain full compliance with NPO regulations and submit all required 
                  documentation to the Department of Social Development.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default FinancialReports;