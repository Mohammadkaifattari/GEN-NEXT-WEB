import { useState, useEffect, useRef } from 'react'
import brandImage from './assets/img1.png'
import brandImage2 from './assets/img2.png'
import { img } from 'framer-motion/client';
import bg from './assets/bg.png'
const MouseGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={glowRef} className="mouse-glow hidden md:block" />;
};

const Navbar = () => (
  
  <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl ">
    <div className="glass-dark rounded-full px-8 py-2 flex justify-between items-center border border-white/5 shadow-2xl">
      <div className="flex items-center">
        <img src={brandImage} alt="NEXTGEN" className="h-10 md:h-12" />
      </div>

      <div className="hidden lg:flex gap-12 text-[12px] font-bold uppercase tracking-[0.3em] text-white/70">
        <a href="#home" className="hover:text-orange-400 transition-all">HOME</a>
        <a href="#features" className="hover:text-orange-400 transition-all">FEATURES</a>
        <a href="#contact" className="hover:text-orange-400 transition-all">CONTACT US</a>
        <a href="#products" className="hover:text-orange-400 transition-all">PRODUCTS</a>
      </div>

     <button className="px-8 py-2.5 rounded-full text-[12px] font-bold text-white 
border border-white/10 tracking-widest uppercase 
bg-transparent transition-all duration-300

hover:bg-orange-500 hover:border-orange-400
hover:shadow-[0_0_20px_rgba(255,94,0,0.6)]">

Sign UP
</button>
    </div>
  </nav>
)

const Hero = () => (
 <section
  id="home"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
  className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-32 px-32 "
>
  
    {/* Background Neural Grid */}
    

   <div className='flex justify-around items-center  '>
    <div className='w-6/12 px-10 flex flex-col justify-between gap-8 '>
      <h1 className='text-5xl tracking-widest leading-[50px] '>The Future <br />IS <br />  <span className='text-orange-400'>HERE</span></h1>
      <p className='text-2xl'>Converting your ideas into real digital solutions.
Building smart systems that solve real-world problems.</p>
     <button className="w-fit 
bg-gradient-to-b from-orange-400 via-orange-500 to-orange-800
px-6 py-3 rounded-lg text-lg font-semibold text-white
hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40
transition-all duration-300 mb-5">
  Discover
</button>
      </div>
      <img className='h-[410px]' src={brandImage2} alt="" />


   </div>

    {/* Service Banner - Bright Orange */}
   {/* Banner */}
<div className="relative left-1/2 -translate-x-1/2 w-screen bg-[#ed752f] py-2">
  <div className="font-thin px-20 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">

    <span className="text-white text-2xl md:text-4xl uppercase">
      SEO MARKETING
    </span>

    <div className="hidden md:block w-px h-10 bg-white/30"></div>

    <span className="text-white text-2xl md:text-4xl uppercase">
      UXUI DESIGNING
    </span>

    <div className="hidden md:block w-px h-10 bg-white/30"></div>

    <span className="text-white text-2xl md:text-4xl uppercase">
      WEBSITE DESIGNING
    </span>

  </div>
</div>

  </section>
)

const Solutions = () => {
  const solutions = [
    { title: "Neural Networks", desc: "Self-evolving neural architectures that adapt to complex data patterns.", icon: "🧠" },
    { title: "Quantum Logic", desc: "Harnessing quantum superposition for multi-variable problem solving.", icon: "⚡" },
    { title: "Autonomous Ops", desc: "Fully deck-independent operations for mission-critical infrastructure.", icon: "🛰️" },
    { title: "Predictive Flux", desc: "Accurately forecast market and environmental shifts before they materialize.", icon: "📈" }
  ]

  return (
    <section id="features" className="py-32 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">ENGINEERED <span className="text-primary">SOLUTIONS</span></h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((s, i) => (
            <div key={i} className="glass group p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] transition-all transform hover:-translate-y-4 cursor-default overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="text-6xl">{s.icon}</span>
              </div>
              <div className="text-3xl mb-8 grayscale group-hover:grayscale-0 transition-all">{s.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm group-hover:text-white/60 transition-colors">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 relative z-10 bg-background">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex items-center">
        <img src={brandImage} alt="NEXTGEN" className="h-8" />
      </div>
      <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-white/30">
        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        <a href="#" className="hover:text-primary transition-colors">Discord</a>
        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
      </div>
      <p className="text-[10px] font-bold text-white/10 uppercase tracking-[0.2em]">© 2026 NEXTGEN SYSTEMS</p>
    </div>
  </footer>
)

function App() {
  return (
    <div className="bg-background text-white selection:bg-primary/30 min-h-screen">
      <MouseGlow />
      <Navbar />
      <Hero />
      <Solutions />
      <Footer />
    </div>
  )
}

export default App
