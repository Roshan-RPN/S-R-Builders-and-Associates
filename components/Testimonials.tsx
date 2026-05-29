import { motion } from "motion/react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Jeni's Cuisine",
    date: "A month ago",
    rating: 5,
    text: "Best builders in kollam. Customer satisfaction and budget friendly packages.. wide varieties of modular kitchen designs and Interiors.😍",
    avatar: "J",
    verified: true,
  },
  {
    id: 2,
    name: "Sabari Sabari Arun",
    date: "3 months ago",
    rating: 5,
    text: "The very best builders in Kollam ....such a wonderful experience with them to make my dream come true.... I wish very successful in their future projects...",
    avatar: "S",
    verified: true,
  },
  {
    id: 3,
    name: "VISHNUPRAKASH CHAVARA",
    date: "5 months ago",
    rating: 5,
    text: "One of the best builders in kollam...amazing works...such a wonderful creative hands....super designs...and affordable rates ...",
    avatar: "V",
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-5 pointer-events-none">
          <span className="text-[180px] font-display font-bold">CLIENTS</span>
        </div>

        <div className="mb-16">
          <p className="text-blue-600 font-display font-bold tracking-widest text-sm uppercase mb-4">OUR CLIENTS</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
            Here&apos;s what our satisfied <br /> clients are saying
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr,3fr] gap-12 items-center">
          {/* Summary Card */}
          <div className="bg-charcoal text-white border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center shadow-xl">
            <div className="w-16 h-16 bg-white shadow-sm rounded-2xl mb-4 flex items-center justify-center p-3">
               <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" 
                alt="Google" 
                width={40} 
                height={40} 
              />
            </div>
            <h3 className="font-display font-bold text-lg mb-2 leading-tight">
              SR Builders & Interiors
            </h3>
            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <p className="text-gray-400 text-sm font-medium mb-6 tracking-wide uppercase">111 Verified Reviews</p>
            <a 
              href="https://maps.app.goo.gl/o6Ka4xuV2NqcTbka7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:bg-accent transition-all hover:-translate-y-0.5"
            >
              Write a review
            </a>
          </div>

          {/* Review Cards Grid */}
          <div className="relative group">
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl flex flex-col h-full relative hover:border-primary/20 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border-2 border-white bg-primary text-white font-bold shadow-sm">
                        {typeof review.avatar === 'string' && review.avatar.startsWith('http') ? (
                          <Image src={review.avatar} alt={review.name} width={48} height={48} className="object-cover" referrerPolicy="no-referrer" />
                        ) : (
                          review.avatar
                        )}
                      </div>
                      <div>
                        <p className="font-display font-bold text-gray-900 text-sm whitespace-nowrap">{review.name}</p>
                        <p className="text-gray-400 text-[10px]">{review.date}</p>
                      </div>
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center grayscale opacity-30">
                      <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" 
                        alt="Google" 
                        width={20} 
                        height={20} 
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-yellow-400 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} fill="currentColor" />)}
                    {review.verified && (
                      <div className="ml-2 bg-blue-500 text-white rounded-full p-0.5 scale-75">
                         <Star size={8} fill="currentColor" />
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed flex-grow italic">
                    &quot;{review.text}&quot;
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Buttons (Style only) */}
            <button className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-black transition-all group-hover:opacity-100 opacity-0 hidden md:flex">
              <ChevronLeft size={24} />
            </button>
            <button className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-black transition-all group-hover:opacity-100 opacity-0 hidden md:flex">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* World Map Backdrop (Simulated) */}
        <div className="mt-12 flex justify-center opacity-10 pointer-events-none select-none">
          <div className="w-full max-w-4xl h-48 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:24px_24px]" />
        </div>
      </div>
    </section>
  );
}
