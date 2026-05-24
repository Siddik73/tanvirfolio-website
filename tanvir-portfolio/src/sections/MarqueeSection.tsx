import { useEffect, useRef } from 'react';

const gifs = [
  'hero-space-voyage-preview-eECLH3Yc.gif',
  'hero-codenest-preview-Cgppc2qV.gif',
  'hero-vex-ventures-preview-BczMFIiw.gif',
  'hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'hero-asme-preview-B_nGDnTP.gif',
  'hero-transform-data-preview-Cx5OU29N.gif',
  'hero-vitara-preview-Cjz2QYyU.gif',
  'hero-terra-preview-BFjrCr7T.gif',
  'hero-skyelite-preview-DHaZIgUv.gif',
  'hero-aethera-preview-DknSlcTa.gif',
  'hero-designpro-preview-D8c5_een.gif',
  'hero-stellar-ai-preview-D3HL6bw1.gif',
  'hero-xportfolio-preview-D4A8maiC.gif',
  'hero-orbit-web3-preview-BXt4OttD.gif',
  'hero-nexora-preview-cx5HmUgo.gif',
  'hero-evr-ventures-preview-DZxeVFEX.gif',
  'hero-planet-orbit-preview-DWAP8Z1P.gif',
  'hero-new-era-preview-CocuDUm9.gif',
  'hero-wealth-preview-B70idl_u.gif',
  'hero-luminex-preview-CxOP7ce6.gif',
  'hero-celestia-preview-0yO3jXO8.gif'
];

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    const handleScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      
      animationFrameId = requestAnimationFrame(() => {
        if (row1Ref.current) row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
        if (row2Ref.current) row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const row1Gifs = gifs.slice(0, 11);
  const row2Gifs = gifs.slice(11);

  const renderGifs = (arr: string[]) => {
    const tripled = [...arr, ...arr, ...arr];
    return tripled.map((gif, idx) => (
      <img 
        key={`${gif}-${idx}`}
        src={`/assets/${gif}`} 
        alt="Portfolio work"
        loading="lazy"
        className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
      />
    ));
  };

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3">
      <div 
        ref={row1Ref} 
        className="flex gap-3 will-change-transform w-max"
        style={{ marginLeft: '-1500px' }} 
      >
        {renderGifs(row1Gifs)}
      </div>
      <div 
        ref={row2Ref} 
        className="flex gap-3 will-change-transform w-max"
        style={{ marginLeft: '-500px' }}
      >
        {renderGifs(row2Gifs)}
      </div>
    </section>
  );
};
