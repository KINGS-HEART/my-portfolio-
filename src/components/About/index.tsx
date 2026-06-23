import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { slideInLeft, slideInRight, staggerContainer, staggerItem } from '@/lib/animations/variants';
import { useScrollReveal } from '@/lib/animations/hooks';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { HiCode, HiLightningBolt, HiUserGroup, HiAcademicCap } from 'react-icons/hi';

const highlights = [
  {
    icon: <HiCode size={28} />,
    title: 'Frontend Engineering',
    description: 'Building responsive user interfaces using HTML, CSS, JavaScript and React.',
    color: 'text-primary-400',
  },
  {
    icon: <HiLightningBolt size={28} />,
    title: 'React Development',
    description: 'Creating dynamic and interactive web applications with modern React practices.',
    color: 'text-accent-400',
  },
  {
    icon: <HiUserGroup size={28} />,
    title: 'Collaboration',
    description: 'Working with Git and GitHub to collaborate and manage real-world development workflows.',
    color: 'text-highlight-400',
  },
  {
    icon: <HiAcademicCap size={28} />,
    title: 'Continuous Learning',
    description: 'Frontend Engineering student at AltSchool Africa focused on building globally competitive skills.',
    color: 'text-green-400',
  },
];

export default function About() {
  const { ref, controls } = useScrollReveal();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const logoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const bioY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="about" className="section-padding glow-about" ref={sectionRef}>
      <div className="container-max">
        <SectionHeading
          title="About Me"
          subtitle="A passionate frontend engineer building modern and responsive web experiences."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Animated IB Logo with parallax */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={slideInLeft}
            style={{ y: logoY }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0">
              {/* Outer glow pulse */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-highlight-500 rounded-3xl opacity-20 blur-xl animate-pulse-glow" />

              {/* Spinning border ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-3xl opacity-30"
                style={{
                  background: 'conic-gradient(from 0deg, #7c3aed, #06b6d4, #ec4899, #7c3aed)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '2px',
                }}
              />

              {/* DEK  Logo card */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(124, 58, 237, 0.2)',
                    '0 0 60px rgba(6, 182, 212, 0.3)',
                    '0 0 30px rgba(236, 72, 153, 0.2)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative glass-card rounded-3xl w-full h-full overflow-hidden flex items-center justify-center"
              >
                {/* Background grid pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* {'<DEK />'}text */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-center"
                >
                  <span className="text-6xl md:text-7xl font-heading font-bold gradient-text">
                  {'<DEK />'}
                  </span>
                  <motion.p
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-foreground-dim text-sm font-mono mt-3"
                  >
                    frontend.engineer
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio text with parallax */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={slideInRight}
            style={{ y: bioY }}
          >
            <p className="text-foreground-secondary font-body text-lg leading-relaxed mb-6">
  I’m <span className="text-foreground font-semibold">Dunu Ebuka Kingsley</span>,
  a frontend engineer based in <span className="text-accent-400">Lagos, Nigeria</span>.
  I specialize in building modern, responsive web applications using HTML, CSS,
  JavaScript, and React.
</p>

<p className="text-foreground-muted font-body leading-relaxed mb-6">
  Before joining AltSchool Africa, I had passion but not direction.
  What started as curiosity quickly became commitment. I moved from
  writing simple web pages to building responsive and scalable
  applications while learning real-world development practices like
  version control, collaboration, and structured problem solving.
</p>

<p className="text-foreground-muted font-body leading-relaxed">
  Today, I am more confident, skilled, and focused than when I started.
  My goal is to become a globally competitive frontend engineer,
  build impactful digital products, and mentor others who are
  beginning their journey in tech.
</p>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {highlights.map((item) => (
            <motion.div key={item.title} variants={staggerItem}>
              <GlassCard glow="primary" className="text-center h-full">
                <div className={`${item.color} mb-4 flex justify-center`}>
                  {item.icon}
                </div>
                <h3 className="text-foreground font-heading font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground-muted text-sm font-body">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
