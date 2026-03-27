import { motion } from 'framer-motion';
import {
  Bot,
  BrainCircuit,
  Braces,
  Code2,
  Database,
  Figma,
  GitBranch,
  Layers3,
  Palette,
  Server,
  Sparkles,
} from 'lucide-react';

const floatingItems = [
  { Icon: Code2, className: 'left-[6%] top-[12%] text-primary/14', size: 34, delay: 0 },
  { Icon: Braces, className: 'left-[16%] top-[58%] text-primary/10', size: 42, delay: 0.4 },
  { Icon: Database, className: 'left-[9%] top-[82%] text-primary/10', size: 30, delay: 0.8 },
  { Icon: GitBranch, className: 'left-[28%] top-[22%] text-primary/12', size: 28, delay: 1.2 },
  { Icon: Server, className: 'left-[39%] top-[72%] text-primary/10', size: 36, delay: 1.6 },
  { Icon: Palette, className: 'left-[54%] top-[16%] text-primary/10', size: 38, delay: 0.3 },
  { Icon: Figma, className: 'left-[63%] top-[44%] text-primary/12', size: 32, delay: 0.9 },
  { Icon: Layers3, className: 'left-[74%] top-[24%] text-primary/10', size: 34, delay: 1.4 },
  { Icon: Bot, className: 'left-[84%] top-[58%] text-primary/12', size: 42, delay: 0.6 },
  { Icon: BrainCircuit, className: 'left-[78%] top-[82%] text-primary/10', size: 36, delay: 1 },
  { Icon: Sparkles, className: 'left-[48%] top-[88%] text-primary/10', size: 28, delay: 1.8 },
];

const FloatingBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.12),transparent_28%),radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.08),transparent_24%),radial-gradient(circle_at_bottom_right,hsl(var(--primary)/0.1),transparent_30%)]" />

      <div className="absolute left-[8%] top-[14%] h-52 w-52 rounded-full bg-primary/6 blur-3xl" />
      <div className="absolute right-[10%] top-[24%] h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-[12%] left-[22%] h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-[8%] right-[18%] h-72 w-72 rounded-full bg-primary/6 blur-3xl" />

      {floatingItems.map(({ Icon, className, size, delay }, index) => (
        <motion.div
          key={`${index}-${size}`}
          className={`absolute hidden md:block ${className}`}
          animate={{
            y: [0, -18, 0, 14, 0],
            x: [0, 10, -8, 6, 0],
            rotate: [0, 5, -4, 3, 0],
            scale: [1, 1.04, 0.98, 1.02, 1],
          }}
          transition={{
            duration: 12 + index,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          }}
        >
          <div className="rounded-2xl border border-primary/10 bg-card/20 p-4 shadow-[0_0_30px_hsl(var(--primary)/0.06)] backdrop-blur-[2px]">
            <Icon size={size} strokeWidth={1.6} />
          </div>
        </motion.div>
      ))}

      {floatingItems.slice(0, 6).map(({ Icon, className, size, delay }, index) => (
        <motion.div
          key={`mobile-${index}-${size}`}
          className={`absolute md:hidden ${className.replace(/left-\[[^\]]+\]/, '').replace(/top-\[[^\]]+\]/, '')}`}
          style={{
            left: `${14 + index * 13}%`,
            top: `${10 + (index % 3) * 28}%`,
          }}
          animate={{
            y: [0, -12, 0, 10, 0],
            rotate: [0, 4, -3, 2, 0],
          }}
          transition={{
            duration: 10 + index,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          }}
        >
          <div className="rounded-xl border border-primary/10 bg-card/15 p-3 backdrop-blur-[1px]">
            <Icon size={Math.max(22, size - 10)} strokeWidth={1.5} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBackground;
