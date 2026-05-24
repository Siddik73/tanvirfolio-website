
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip pt-6 md:pt-8">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full px-6 md:px-10 flex justify-between items-center z-20">
        {["About", "Price", "Projects", "Contact"].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex flex-col justify-center overflow-hidden z-20 relative">
        <FadeIn delay={0.15} y={40} className="w-full mt-6 sm:mt-4 md:-mt-5">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] text-center w-full">
            Hi, i&apos;m tanvir
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20 relative">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 pointer-events-none">
        <Magnet padding={150} strength={3} className="pointer-events-auto">
          <img 
            src="/assets/hero-portrait.png" 
            alt="Tanvir Portrait" 
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain drop-shadow-2xl" 
          />
        </Magnet>
      </FadeIn>
    </section>
  );
};
