
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { AnimatedText } from '../components/AnimatedText';

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C]">
      {/* Decorative 3D images absolutely positioned */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none">
        <img src="./assets/moon_icon.png" alt="Moon 3D" className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none">
        <img src="./assets/p59_1.png" alt="Abstract 3D" className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-xl" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none">
        <img src="./assets/lego_icon.png" alt="Lego 3D" className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none">
        <img src="./assets/group_134.png" alt="3D Group" className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-xl" />
      </FadeIn>

      {/* Heading */}
      <div className="flex flex-col items-center z-10 w-full max-w-5xl">
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            About me
          </h2>
        </FadeIn>

        <AnimatedText 
          text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!" 
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] mb-16 sm:mb-20 md:mb-24 text-[clamp(1rem,2vw,1.35rem)]"
        />

        <FadeIn delay={0.2} y={30}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
