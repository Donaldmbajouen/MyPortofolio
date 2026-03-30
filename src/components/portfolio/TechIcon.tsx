import type { ReactNode } from 'react';
import { Bot, Brain, Figma, FileText, Github, GitBranch, Gitlab, PenTool, Sparkles } from 'lucide-react';

export type TechIconName =
  | 'android'
  | 'api'
  | 'cursor'
  | 'css3'
  | 'docker'
  | 'figma'
  | 'firebase'
  | 'flutter'
  | 'github'
  | 'git'
  | 'gitlab'
  | 'html5'
  | 'ios'
  | 'javascript'
  | 'laravel'
  | 'mysql'
  | 'nuxt'
  | 'photoshop'
  | 'php'
  | 'postgresql'
  | 'prompt'
  | 'prompt-structured'
  | 'python'
  | 'react'
  | 'tailwind'
  | 'trello'
  | 'typescript'
  | 'uxui'
  | 'vscode'
  | 'vue'
  | 'ai';

type TechIconProps = {
  name: TechIconName;
  size?: 'sm' | 'md';
};

const frameBySize = {
  sm: 'h-9 w-9 rounded-lg',
  md: 'h-12 w-12 rounded-xl',
};

const glyphBySize = {
  sm: 'h-5 w-5',
  md: 'h-7 w-7',
};

const IconFrame = ({
  size = 'md',
  className,
  children,
}: {
  size?: 'sm' | 'md';
  className: string;
  children: ReactNode;
}) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center border border-border/60 shadow-sm ${frameBySize[size]} ${className}`}
    aria-hidden="true"
  >
    {children}
  </span>
);

const Badge = ({
  size = 'md',
  className,
  text,
  textClassName = '',
}: {
  size?: 'sm' | 'md';
  className: string;
  text: string;
  textClassName?: string;
}) => (
  <IconFrame size={size} className={className}>
    <span className={`font-black leading-none ${size === 'sm' ? 'text-[10px]' : 'text-xs'} ${textClassName}`}>
      {text}
    </span>
  </IconFrame>
);

const VueLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-slate-950/95">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <path fill="#41B883" d="M2 5h7l7 12L23 5h7L16 29z" />
      <path fill="#35495E" d="M8 5h4l4 7 4-7h4L16 20z" />
    </svg>
  </IconFrame>
);

const NuxtLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-emerald-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <path fill="#00DC82" d="M6 24 13.8 10.5a2.5 2.5 0 0 1 4.4 0L26 24H6Z" />
      <path fill="#00C16A" d="M3 24 9.8 12.7a2.5 2.5 0 0 1 4.3.1L21 24H3Z" opacity=".9" />
      <path fill="#108775" d="M17.8 24 22.6 16a2.5 2.5 0 0 1 4.3 0L30 24h-12.2Z" />
    </svg>
  </IconFrame>
);

const ReactLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-cyan-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <circle cx="16" cy="16" r="2.7" fill="#61DAFB" />
      <ellipse cx="16" cy="16" rx="11" ry="4.4" fill="none" stroke="#61DAFB" strokeWidth="1.8" />
      <ellipse cx="16" cy="16" rx="11" ry="4.4" fill="none" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="11" ry="4.4" fill="none" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(120 16 16)" />
    </svg>
  </IconFrame>
);

const HtmlLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-orange-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <path fill="#E34F26" d="M6 3h20l-1.8 21.4L16 28.8 7.8 24.4z" />
      <path fill="#EF652A" d="M16 5v21.7l6.6-2 1.5-19.7z" />
      <text x="16" y="19" textAnchor="middle" fontSize="10" fontWeight="900" fill="#fff">
        5
      </text>
    </svg>
  </IconFrame>
);

const CssLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-sky-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <path fill="#1572B6" d="M6 3h20l-1.8 21.4L16 28.8 7.8 24.4z" />
      <path fill="#33A9DC" d="M16 5v21.7l6.6-2 1.5-19.7z" />
      <text x="16" y="19" textAnchor="middle" fontSize="10" fontWeight="900" fill="#fff">
        3
      </text>
    </svg>
  </IconFrame>
);

const TailwindLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-cyan-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <path
        fill="#06B6D4"
        d="M10.5 11.3c1.7-2.2 3.4-3.1 5.2-2.7 1.1.2 1.9.8 2.8 1.8.9 1.1 1.4 1.5 2.1 1.6 1.3.3 2.4-.2 3.4-1.7-1.7 2.2-3.4 3.1-5.2 2.7-1.1-.2-1.9-.8-2.8-1.8-.9-1.1-1.4-1.5-2.1-1.6-1.3-.3-2.4.2-3.4 1.7Zm-4 6c1.7-2.2 3.4-3.1 5.2-2.7 1.1.2 1.9.8 2.8 1.8.9 1.1 1.4 1.5 2.1 1.6 1.3.3 2.4-.2 3.4-1.7-1.7 2.2-3.4 3.1-5.2 2.7-1.1-.2-1.9-.8-2.8-1.8-.9-1.1-1.4-1.5-2.1-1.6-1.3-.3-2.4.2-3.4 1.7Z"
      />
    </svg>
  </IconFrame>
);

const LaravelLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-rose-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <path
        fill="none"
        stroke="#FF2D20"
        strokeWidth="2.2"
        strokeLinejoin="round"
        d="m16 4 8 4.5v9L16 22l-8-4.5v-9L16 4Zm0 0v9m8-4.5-8 4.5M8 8.5l8 4.5m0 9v6m-5-3 5 3 5-3"
      />
    </svg>
  </IconFrame>
);

const PythonLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-slate-100">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <path fill="#3776AB" d="M16 4c-5.7 0-5.4 2.5-5.4 2.5v2.6H16v.8H7.8S4 9.4 4 15.5c0 6 3.3 5.8 3.3 5.8h2v-2.8s-.1-3.3 3.2-3.3H18s3.1.1 3.1-3V7.1S21.6 4 16 4Zm-3 2.3a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z" />
      <path fill="#FFD43B" d="M16 28c5.7 0 5.4-2.5 5.4-2.5v-2.6H16v-.8h8.2s3.8.5 3.8-5.6c0-6-3.3-5.8-3.3-5.8h-2v2.8s.1 3.3-3.2 3.3H14s-3.1-.1-3.1 3v5.1S10.4 28 16 28Zm3-2.3a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Z" />
    </svg>
  </IconFrame>
);

const FlutterLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-sky-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <path fill="#54C5F8" d="M18.5 3 8 13.5l4 4L26.5 3Z" />
      <path fill="#29B6F6" d="M12 17.5 18.5 24H26l-10-10z" />
      <path fill="#01579B" d="m16 21.5 4.7 4.7H26L20.6 21Z" />
    </svg>
  </IconFrame>
);

const FirebaseLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-amber-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <path fill="#FFA000" d="M7.6 24.6 10.4 6.8c.1-.8 1.1-1 1.5-.4l3.5 6.6Z" />
      <path fill="#F57C00" d="m24.5 24.6-2.2-13.8c-.1-.8-1.1-1.1-1.5-.4L7.6 24.6Z" />
      <path fill="#FFCA28" d="m14.2 14.5 2.4-4.6c.3-.6 1.2-.6 1.5 0l1.5 2.9-5.4 11.8a1 1 0 0 1-1.8-.1L9.8 20Z" />
    </svg>
  </IconFrame>
);

const AndroidLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-lime-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <g fill="#3DDC84">
        <rect x="8" y="11" width="16" height="11" rx="4" />
        <rect x="6.5" y="12" width="1.8" height="8" rx=".9" />
        <rect x="23.7" y="12" width="1.8" height="8" rx=".9" />
        <rect x="11" y="22" width="2" height="5" rx="1" />
        <rect x="19" y="22" width="2" height="5" rx="1" />
      </g>
      <path d="m11 9.5-1.8-2.4m13.6 2.4 1.8-2.4" stroke="#3DDC84" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="13" cy="15" r="1" fill="#fff" />
      <circle cx="19" cy="15" r="1" fill="#fff" />
    </svg>
  </IconFrame>
);

const AppleLikeLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-slate-950">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <path
        fill="#fff"
        d="M20.7 8.2c1.2-1.4 1-3 .9-3.6-1.5.1-3.1 1.1-4 2.2-.8 1-.9 2.1-.8 2.8 1.5.1 2.9-.7 3.9-1.4ZM21.8 16.6c0-2.9 2.4-4.3 2.5-4.4-1.4-2-3.6-2.3-4.4-2.3-1.9-.2-3.6 1.1-4.5 1.1-.9 0-2.3-1.1-3.7-1.1-1.9 0-3.6 1.1-4.6 2.8-2 3.4-.5 8.4 1.5 11.2 1 1.4 2.1 2.9 3.7 2.8 1.5-.1 2.1-1 3.9-1 1.8 0 2.3 1 3.9 1 1.6 0 2.7-1.4 3.7-2.8 1.1-1.6 1.6-3.1 1.6-3.2-.1 0-3.2-1.2-3.2-5.1Z"
      />
    </svg>
  </IconFrame>
);

const DockerLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-sky-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <g fill="#2496ED">
        <rect x="6" y="12" width="4" height="4" rx=".7" />
        <rect x="11" y="12" width="4" height="4" rx=".7" />
        <rect x="16" y="12" width="4" height="4" rx=".7" />
        <rect x="11" y="7" width="4" height="4" rx=".7" />
        <rect x="16" y="7" width="4" height="4" rx=".7" />
        <path d="M5 17h17.5c-.2 4-3.4 6.6-7.7 6.6H11c-3.4 0-6-2.4-6-5.9V17Zm18.3-3.9c1.9-.6 3.1 1.2 3.1 2.8 1.1.2 1.9-.1 2.7-.8-.1 2.5-2.1 4-4.9 4h-1.1Z" />
      </g>
    </svg>
  </IconFrame>
);

const VsCodeLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-blue-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <path fill="#0065A9" d="M23.7 4.7 12.1 15.1 8 11.9 4.7 13.8v4.4l3.3 1.9 4.1-3.2 11.6 10.4c.7.6 1.8.1 1.8-.8V5.5c0-.9-1.1-1.4-1.8-.8Z" />
      <path fill="#007ACC" d="M25.5 6.4 16 13.8l-6.1-4.6L6 11.5l6.6 4.5L6 20.5l3.9 2.3L16 18.2l9.5 7.4V6.4Z" />
      <path fill="#1F9CF0" d="M23.7 4.7 9.9 9.2 16 13.8l9.5-7.4c0-.9-1.1-1.4-1.8-.9ZM9.9 22.8l13.8 4.5c.7.5 1.8 0 1.8-.9L16 18.2Z" />
    </svg>
  </IconFrame>
);

const PostmanLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-orange-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <circle cx="16" cy="16" r="10" fill="#FF6C37" />
      <path fill="#fff" d="M11 15.2h7.5l-2.7-2.7 1.4-1.4 5.1 5.1-5.1 5.1-1.4-1.4 2.7-2.7H11z" />
    </svg>
  </IconFrame>
);

const TrelloLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-sky-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <rect x="5" y="5" width="22" height="22" rx="5" fill="#0052CC" />
      <rect x="10" y="9.5" width="4.5" height="13" rx="2" fill="#fff" />
      <rect x="17.5" y="9.5" width="4.5" height="9" rx="2" fill="#fff" />
    </svg>
  </IconFrame>
);

const CursorLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-slate-950">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <path fill="#fff" d="m8 8 8.8 1.9-3.5 3.4 2.8 2.8 3.6-3.5 2 8.9-2.9 2.9-2-8.4-3.6 3.6-2.8-2.8 3.6-3.6-8.4-2Z" />
    </svg>
  </IconFrame>
);

const ApiLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
  <IconFrame size={size} className="bg-violet-50">
    <svg viewBox="0 0 32 32" className={glyphBySize[size]}>
      <path fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10 9 6 16l4 7m12-14 4 7-4 7m-9-4h6" />
      <circle cx="13" cy="16" r="1.5" fill="#A78BFA" />
      <circle cx="19" cy="16" r="1.5" fill="#A78BFA" />
    </svg>
  </IconFrame>
);

const TechIcon = ({ name, size = 'md' }: TechIconProps) => {
  switch (name) {
    case 'vue':
      return <VueLogo size={size} />;
    case 'nuxt':
      return <NuxtLogo size={size} />;
    case 'react':
      return <ReactLogo size={size} />;
    case 'typescript':
      return <Badge size={size} className="bg-[#3178C6] text-white" text="TS" />;
    case 'html5':
      return <HtmlLogo size={size} />;
    case 'css3':
      return <CssLogo size={size} />;
    case 'javascript':
      return <Badge size={size} className="bg-[#F7DF1E] text-slate-950" text="JS" />;
    case 'tailwind':
      return <TailwindLogo size={size} />;
    case 'laravel':
      return <LaravelLogo size={size} />;
    case 'php':
      return <Badge size={size} className="bg-[#777BB4] text-white" text="PHP" textClassName="text-[9px]" />;
    case 'mysql':
      return <Badge size={size} className="bg-[#00758F] text-white" text="My" />;
    case 'postgresql':
      return <Badge size={size} className="bg-[#336791] text-white" text="Pg" />;
    case 'api':
      return <ApiLogo size={size} />;
    case 'python':
      return <PythonLogo size={size} />;
    case 'flutter':
      return <FlutterLogo size={size} />;
    case 'firebase':
      return <FirebaseLogo size={size} />;
    case 'android':
      return <AndroidLogo size={size} />;
    case 'ios':
      return <AppleLikeLogo size={size} />;
    case 'git':
      return (
        <IconFrame size={size} className="bg-orange-50 text-[#F05032]">
          <GitBranch className={glyphBySize[size]} strokeWidth={2.2} />
        </IconFrame>
      );
    case 'github':
      return (
        <IconFrame size={size} className="bg-slate-950 text-white">
          <Github className={glyphBySize[size]} strokeWidth={2.2} />
        </IconFrame>
      );
    case 'gitlab':
      return (
        <IconFrame size={size} className="bg-orange-50 text-[#FC6D26]">
          <Gitlab className={glyphBySize[size]} strokeWidth={2.2} />
        </IconFrame>
      );
    case 'docker':
      return <DockerLogo size={size} />;
    case 'vscode':
      return <VsCodeLogo size={size} />;
    case 'postman':
      return <PostmanLogo size={size} />;
    case 'trello':
      return <TrelloLogo size={size} />;
    case 'cursor':
      return <CursorLogo size={size} />;
    case 'ai':
      return (
        <IconFrame size={size} className="bg-fuchsia-50 text-fuchsia-600">
          <Bot className={glyphBySize[size]} strokeWidth={2.1} />
        </IconFrame>
      );
    case 'prompt':
      return (
        <IconFrame size={size} className="bg-indigo-50 text-indigo-600">
          <Brain className={glyphBySize[size]} strokeWidth={2.1} />
        </IconFrame>
      );
    case 'prompt-structured':
      return (
        <IconFrame size={size} className="bg-slate-100 text-slate-700">
          <FileText className={glyphBySize[size]} strokeWidth={2.1} />
        </IconFrame>
      );
    case 'figma':
      return (
        <IconFrame size={size} className="bg-rose-50 text-[#F24E1E]">
          <Figma className={glyphBySize[size]} strokeWidth={2.1} />
        </IconFrame>
      );
    case 'photoshop':
      return <Badge size={size} className="bg-[#001E36] text-[#31A8FF]" text="Ps" />;
    case 'uxui':
      return (
        <IconFrame size={size} className="bg-amber-50 text-amber-600">
          <PenTool className={glyphBySize[size]} strokeWidth={2.1} />
        </IconFrame>
      );
    default:
      return (
        <IconFrame size={size} className="bg-slate-100 text-slate-700">
          <Sparkles className={glyphBySize[size]} strokeWidth={2.1} />
        </IconFrame>
      );
  }
};

export default TechIcon;
