import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';

const projects = [
  {
    num: "01",
    label: "Client",
    name: "Nextlevel Studio",
    images: {
      left1: "./assets/p1-c1-i1.webp",
      left2: "./assets/p1-c1-i2.webp",
      right: "./assets/p1-c2-i1.webp"
    }
  },
  {
    num: "02",
    label: "Personal",
    name: "Aura Brand Identity",
    images: {
      left1: "./assets/p2-c1-i1.webp",
      left2: "./assets/p2-c1-i2.webp",
      right: "./assets/p2-c2-i1.webp"
    }
  },
  {
    num: "03",
    label: "Client",
    name: "Solaris Digital",
    images: {
      left1: "./assets/p3-c1-i1.webp",
      left2: "./assets/p3-c1-i2.webp",
      right: "./assets/p3-c2-i1.webp"
    }
  }
];

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" ref={containerRef} className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative pt-20 pb-32">
      <div className="px-5 sm:px-8 md:px-10">
        <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28 flex justify-center">
          <h2 className="hero-heading font-black uppercase leading-none text-center" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Project
          </h2>
        </FadeIn>

        <div className="flex flex-col relative h-[calc(3*100vh)] w-full max-w-7xl mx-auto">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - 1 - i) * 0.03;
            const range = [i * 0.33, 1];
            const scale = useTransform(scrollYProgress, range, [1, targetScale]);

            return (
              <div key={project.num} className="h-screen w-full flex items-center justify-center sticky top-0" style={{ paddingTop: `${i * 28}px` }}>
                <motion.div 
                  style={{ scale }}
                  className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex flex-col gap-6"
                >
                  {/* Top Row */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <span className="text-[#D7E2EA] font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                        {project.num}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-sm mb-1">{project.label}</span>
                        <h3 className="text-[#D7E2EA] font-medium uppercase" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>{project.name}</h3>
                      </div>
                    </div>
                    <LiveProjectButton />
                  </div>

                  {/* Bottom Row - Image Grid */}
                  <div className="flex flex-col md:flex-row gap-4 h-full">
                    <div className="flex flex-col gap-4 w-full md:w-[40%]">
                      <img src={project.images.left1} alt="Project view 1" className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" style={{ height: 'clamp(130px, 16vw, 230px)' }} />
                      <img src={project.images.left2} alt="Project view 2" className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" style={{ height: 'clamp(160px, 22vw, 340px)' }} />
                    </div>
                    <div className="w-full md:w-[60%] h-full min-h-[300px]">
                      <img src={project.images.right} alt="Project view 3" className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
