import { CheckCircle2, Shield, Clock, Ruler } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "Architecture & Structural",
    description: "Modern space planning and site Diagnostics focusing on natural airflow and floor-plan optimization.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Turnkey Civil Builds",
    description: "End-to-end execution of luxury villas and premium standalone bungalows from foundation to key handover.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Budget-Optimized Luxury",
    description: "Developing premium-finish homes tailored strictly within accessible budget milestones like our ₹30-Lakh blueprints.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Custom Interior Arch",
    description: "From modular kitchens to bespoke false ceilings and lighting layouts, we transform structures into homes.",
  },
];

export default function Features() {
  return (
    <section id="services" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="bg-orange-50 text-orange-600 p-4 rounded-2xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
