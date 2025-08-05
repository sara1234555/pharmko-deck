
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  { year: "2022", income: 1600878 },
  { year: "2023", income: 2163313 },
  { year: "2024", income: 1965362 },
  { year: "2025", income: 2757434 }
];

const marginChart = [
  { year: "2022", margin: 53.1 },
  { year: "2023", margin: 24.5 },
  { year: "2024", margin: 38 },
  { year: "2025", margin: 56 }
];

const sensitivityChart = [
  { scenario: "Conservative", margin: 45, valuation: 18.5 },
  { scenario: "Balanced", margin: 56, valuation: 22.95 },
  { scenario: "Optimistic", margin: 62, valuation: 27.5 }
];

const valuationChart = [
  { scenario: "Base Case", multiple: 10, valuation: 15.3 },
  { scenario: "Mid Case", multiple: 15, valuation: 22.95 },
  { scenario: "Aggressive", multiple: 20, valuation: 30.6 }
];

const deckSlides = [
  {
    title: "EBITDA Margin Improvement",
    chartData: marginChart,
    xKey: "year",
    yKey: "margin",
    color: "#6366f1"
  },
  {
    title: "Valuation Sensitivity by Margin",
    chartData: sensitivityChart,
    xKey: "scenario",
    yKey: "valuation",
    color: "#f59e0b"
  },
  {
    title: "Exit Valuation Scenarios",
    chartData: valuationChart,
    xKey: "scenario",
    yKey: "valuation",
    color: "#10b981"
  },
  {
    title: "Welcome to Pharmko",
    imageOnly: true
  },
  {
    title: "Pharmko INC. Investment Highlights",
    bullets: [
      "16.39% 3.5-year CAGR in Total Income",
      "Multi-service verticals: Home Infusion, GLPs, Binder's",
      "2025 EBITDA on pace to exceed $1.5M",
      "Low debt-to-equity ratio of 0.18"
    ]
  },
  {
    title: "Financial Performance (2022–2025)",
    chartData: data,
    xKey: "year",
    yKey: "income",
    color: "#3b82f6"
  },
  {
    title: "Forward-Looking Projections",
    bullets: [
      "2026–2028 CAGR forecast: 12–15%",
      "EBITDA margin expected to exceed 18%",
      "Target valuation: $21M–$46M at 10–20x EBITDA"
    ]
  },
  {
    title: "Strategic Exit Case",
    bullets: [
      "3-year scaling model validated by historical performance",
      "Minimal leverage enables flexibility",
      "Strong clinical differentiation in specialty infusion"
    ]
  },
  {
    title: "Contact & Team",
    bullets: [
      "Sarah Bensimon, Founder & CEO",
      "Email: sarah@pharmko.com",
      "Phone: (Your Contact Info Here)",
      "LinkedIn: (optional)"
    ]
  }
];

export default function InvestorDeck() {
  return (
    <div className="p-4 space-y-6">
      {deckSlides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative"
        >
          <Card className="shadow-xl rounded-2xl p-4">
            <CardContent className="relative">
              <h2 className="text-xl font-bold mb-2">{slide.title}</h2>

              {slide.imageOnly ? (
                <div className="flex justify-center items-center h-60">
                  <Image src="/pharmko-logo.jpg" alt="Pharmko Logo" width={220} height={90} />
                </div>
              ) : slide.chartData ? (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={slide.chartData}>
                    <XAxis dataKey={slide.xKey} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey={slide.yKey} fill={slide.color} />
                  </BarChart>
                </ResponsiveContainer>
              ) : slide.bullets ? (
                <ul className="list-disc pl-5 space-y-1">
                  {slide.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : null}

              <div className="absolute bottom-2 right-4 opacity-80">
                <Image src="/pharmko-logo.jpg" alt="Pharmko Logo" width={100} height={40} />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
