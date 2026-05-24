
import { FadeIn } from '../components/FadeIn';

const services = [
  {
    num: "01",
    title: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    num: "02",
    title: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    num: "03",
    title: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    num: "04",
    title: "Branding",
    desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    num: "05",
    title: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28">
          <h2 className="text-[#0C0C0C] font-black uppercase leading-none text-center" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Services
          </h2>
        </FadeIn>

        <div className="flex flex-col border-b border-[rgba(12,12,12,0.15)]">
          {services.map((service, i) => (
            <FadeIn 
              key={service.num} 
              delay={i * 0.1} 
              y={30} 
              className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 border-t border-[rgba(12,12,12,0.15)]"
            >
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <span className="text-[#0C0C0C] font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                  {service.num}
                </span>
              </div>
              <div className="w-full md:w-2/3 flex flex-col pl-0 md:pl-8">
                <h3 className="text-[#0C0C0C] font-medium uppercase mb-2 sm:mb-3" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {service.title}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
