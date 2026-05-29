import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "The Umbrella Analysis",
    description: "Beyond simple consultation, we conduct site & soil diagnostics to optimize your building layout for natural airflow and sunlight.",
  },
  {
    number: "02",
    title: "Unified Planning",
    description: "Modern space planning and 3D elevations. We ensure zero-gap accountability between the architect's blueprint and civil execution.",
  },
  {
    number: "03",
    title: "Budget Mastery",
    description: "We prevent sudden overheads through locked estimations and material integrity, focusing on accessible luxury milestones.",
  },
  {
    number: "04",
    title: "Integrated Execution",
    description: "Our 'One Roof' approach brings modular kitchens, structural layouts, and civil construction under single-point management.",
  },
  {
    number: "05",
    title: "Key Handover",
    description: "A completely hassle-free transition from raw structural planning to a fully customized, premium living experience.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-primary font-display font-black tracking-[0.3em] text-[10px] uppercase mb-4">OUR PHILOSOPHY</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 uppercase tracking-tight">
            The Umbrella Concept
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            One single roof for architecture, contracting, and interiors. No fragmented entities, just zero-gap accountability and controlled brilliance.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all group relative overflow-hidden rounded-2xl"
            >
              <div className="text-8xl font-display font-black text-gray-300/30 mb-6 group-hover:text-primary/30 transition-colors leading-none relative">
                {step.number}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-1.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {step.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-primary transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
