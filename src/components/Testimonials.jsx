import React from 'react';

const ROW1_REVIEWS = [
  {
    id: 1,
    name: "Alex Rivera",
    handle: "alexrivera",
    avatar: "https://picsum.photos/seed/alex/100/100",
    comment: "DevAI completely redefined how we spin up MVPs. I literally typed 'Design a real-time cluster monitoring tool' and had a working React prototype running in 3 minutes. The web search is hyper-accurate."
  },
  {
    id: 2,
    name: "Sarah Chen",
    handle: "sarahchen",
    avatar: "https://picsum.photos/seed/sarah/100/100",
    comment: "What blew me away was DevAI's multimodal image analysis. I uploaded a handwritten whiteboard wireframe of a billing checkout portal, and it compiled a pixel-perfect React dashboard."
  },
  {
    id: 3,
    name: "Marcus Dupont",
    handle: "marcusdupont",
    avatar: "https://picsum.photos/seed/marcus/100/100",
    comment: "As a non-technical founder, DevAI was the turning point. It acts as an elite senior developer that doesn't sleep. The preview engine is incredibly polished."
  },
  {
    id: 4,
    name: "Kanya Srisai",
    handle: "kanyasrisai",
    avatar: "https://picsum.photos/seed/kanya/100/100",
    comment: "DevAI writes cleaner Tailwind than 90% of developers I know. The fact that it searches live API docs on the fly means it never writes deprecated code."
  }
];

const ROW2_REVIEWS = [
  {
    id: 5,
    name: "David Cole",
    handle: "davidcole",
    avatar: "https://picsum.photos/seed/david/100/100",
    comment: "Isolated sandboxes are an absolute lifesaver. Being able to test click handlers, dynamic states, and live routing updates instantly is incredible."
  },
  {
    id: 6,
    name: "Elena Rostova",
    handle: "elenarostova",
    avatar: "https://picsum.photos/seed/elena/100/100",
    comment: "I can drop my Figma mockups directly into DevAI. The generated React components are exceptionally structured, semantic, and easy to integrate."
  },
  {
    id: 7,
    name: "Jordan K.",
    handle: "jordank",
    avatar: "https://picsum.photos/seed/jordan/100/100",
    comment: "The backend generation is solid. Express routers and schema definitions matched our spec precisely. Highly recommend DevAI for speed."
  },
  {
    id: 8,
    name: "Takashi Sato",
    handle: "takashis",
    avatar: "https://picsum.photos/seed/takashi/100/100",
    comment: "Web crawler auditing prevents package compilation errors before they happen. Absolute game changer for modern React app development."
  }
];

function TestimonialCard({ review }) {
  return (
    <div className="flex-shrink-0 w-[350px] sm:w-[400px] whitespace-normal rounded-2xl p-6 border border-slate-800/80 hover:border-coral-500/35 bg-[#030712]/55 hover:bg-[#050c24]/85 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,90,95,0.06)] flex flex-col justify-between">
      <p className="text-xs sm:text-[13px] text-slate-300 font-light leading-relaxed">
        "{review.comment}"
      </p>
      
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-900/60">
        <img 
          src={review.avatar} 
          alt={review.name} 
          className="w-10 h-10 rounded-full border border-slate-800 object-cover shrink-0" 
        />
        <div className="text-left">
          <h5 className="text-xs font-black text-white leading-none">{review.name}</h5>
          <span className="text-[10px] text-coral-500 font-bold block mt-1">
            @{review.handle}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-coral-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Row */}
        <div className="flex justify-between items-end mb-12 border-b border-slate-900/60 pb-6">
          <div className="flex items-center gap-2.5">
            <h2 className="font-display font-black text-xl sm:text-3xl text-white tracking-tight">
              What People Say
            </h2>
          </div>
        </div>

        {/* Dual Marquee Container */}
        <div className="space-y-6 relative z-10 marquee-mask">
          
          {/* Row 1: Upper line - Moving to the RIGHT (left-to-right scrolling animation) */}
          <div className="flex w-full overflow-hidden">
            <div className="flex gap-6 animate-marquee-right flex-row flex-nowrap min-w-full">
              {ROW1_REVIEWS.map((rev) => (
                <TestimonialCard key={rev.id} review={rev} />
              ))}
              {ROW1_REVIEWS.map((rev) => (
                <TestimonialCard key={`${rev.id}-dup`} review={rev} />
              ))}
            </div>
          </div>

          {/* Row 2: Lower line - Moving to the LEFT (right-to-left scrolling animation) */}
          <div className="flex w-full overflow-hidden">
            <div className="flex gap-6 animate-marquee-left flex-row flex-nowrap min-w-full">
              {ROW2_REVIEWS.map((rev) => (
                <TestimonialCard key={rev.id} review={rev} />
              ))}
              {ROW2_REVIEWS.map((rev) => (
                <TestimonialCard key={`${rev.id}-dup`} review={rev} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
