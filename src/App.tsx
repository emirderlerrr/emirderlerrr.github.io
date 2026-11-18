import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Gauge,
  LayoutTemplate,
  Maximize2,
  Paintbrush,
  Rocket,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';
import { SpotlightCard } from './components/SpotlightCard';

type ShowcaseKey = 'custom' | 'real-estate' | 'saas';

interface ShowcaseItem {
  key: ShowcaseKey;
  label: string;
  title: string;
  platform: string;
  metric: string;
  image: string;
  alt: string;
}

const FIVERR_URL = 'https://www.fiverr.com/emirderlerrr';
const CONTACT_EMAIL = 'emircsql@gmail.com';

const CAPABILITIES = [
  {
    id: '01',
    title: '01 / Custom Websites',
    subtitle: 'Built from scratch',
    showcaseTarget: 'custom' as ShowcaseKey,
    Icon: LayoutTemplate,
  },
  {
    id: '02',
    title: '02 / Modern Redesigns',
    subtitle: 'Speed & UI overhaul',
    showcaseTarget: 'real-estate' as ShowcaseKey,
    Icon: Paintbrush,
  },
  {
    id: '03',
    title: '03 / Landing Pages',
    subtitle: 'High-converting layouts',
    showcaseTarget: 'saas' as ShowcaseKey,
    Icon: Rocket,
  },
];

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    key: 'custom',
    label: 'Custom Website',
    title: 'Obsidian Studio',
    platform: 'Squarespace · Custom CSS',
    metric: '+72% Client Leads',
    image: '/src/assets/images/bento_showcase_custom_1794953248959.jpg',
    alt: 'Obsidian Studio bespoke custom brand website UI preview',
  },
  {
    key: 'real-estate',
    label: 'Real Estate',
    title: 'Aurelia Estates',
    platform: 'Squarespace 7.1',
    metric: '+64% Inquiries',
    image: '/src/assets/images/bento_showcase_realestate_1794952750381.jpg',
    alt: 'Aurelia Estates luxury real estate website UI preview',
  },
  {
    key: 'saas',
    label: 'SaaS',
    title: 'Syncra Hub',
    platform: 'Wix Studio',
    metric: '4.8% Trial Rate',
    image: '/src/assets/images/bento_showcase_saas_1794952752897.jpg',
    alt: 'Syncra Hub SaaS analytics landing page UI preview',
  },
];

const GUARANTEE_METRICS = [
  {
    value: '48h',
    label: 'Fast Turnaround',
    Icon: Zap,
    accentClass: 'text-indigo-400',
  },
  {
    value: '100%',
    label: 'Mobile Responsive',
    Icon: Smartphone,
    accentClass: 'text-emerald-400',
  },
  {
    value: 'SEO',
    label: 'Speed Optimized',
    Icon: Gauge,
    accentClass: 'text-indigo-300',
  },
];

export default function App() {
  const [activeShowcase, setActiveShowcase] = useState<ShowcaseKey>('custom');
  const [activeCapability, setActiveCapability] = useState<string>('01');
  const [copied, setCopied] = useState(false);
  const [zoomedShowcase, setZoomedShowcase] = useState<ShowcaseItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const currentShowcase =
    SHOWCASE_ITEMS.find((item) => item.key === activeShowcase) ?? SHOWCASE_ITEMS[0];

  useEffect(() => {
    if (!zoomedShowcase) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setZoomedShowcase(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [zoomedShowcase]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      // Clipboard fallback ignored cleanly in restricted contexts; visual confirmation still provides feedback
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050507] text-[#F8FAFC] lg:h-screen lg:overflow-hidden flex items-center justify-center p-4 sm:p-6">
      {/* Ambient Moving Aurora Glow (Deep Indigo & Emerald) */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="aurora-indigo absolute -left-[12%] -top-[18%] h-[60vh] w-[60vw] rounded-full bg-indigo-600/20 blur-[140px]" />
        <div className="aurora-emerald absolute -bottom-[18%] -right-[10%] h-[58vh] w-[55vw] rounded-full bg-emerald-500/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050507_95%)]" />
      </div>

      {/* Main Centered 3x2 Single-Viewport Bento Grid */}
      <main className="relative z-10 w-full max-w-[1260px] lg:h-full lg:max-h-[760px] grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[1.08fr_1fr] gap-4">
        {/* BOX 1 (Top-Left, Large): Main Hero Box */}
        <SpotlightCard
          className="lg:col-span-7"
          innerClassName="p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            {/* Top Row: Status Pill + Subtle Brand Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span>Available for Projects</span>
              </div>

              <span className="font-mono text-xs text-slate-400 tracking-wide">
                EMIRHAN.DEV · SQUARESPACE &amp; WIX
              </span>
            </div>

            {/* Bold Gradient Headline */}
            <h1 className="mt-6 sm:mt-8 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-bold leading-[1.08] tracking-tight bg-gradient-to-br from-white via-slate-100 to-indigo-300 bg-clip-text text-transparent text-balance">
              Emirhan — Web Designer
            </h1>

            {/* One-line Punchy Bio */}
            <p className="mt-3.5 max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed">
              Crafting high-converting Squarespace, Wix &amp; custom landing pages built for speed
              and growth.
            </p>
          </div>

          {/* Primary Glowing CTA Row */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
            <a
              href="https://fiverr.com/emirderlerrr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white whitespace-nowrap shadow-[0_0_28px_-4px_rgba(99,102,241,0.65)] transition-all duration-150 hover:from-indigo-400 hover:to-indigo-500 hover:shadow-[0_0_34px_-2px_rgba(99,102,241,0.85)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <span>Hire Me on Fiverr</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              <span>48+ Client Launches · 4.9/5 Rating</span>
            </div>
          </div>
        </SpotlightCard>

        {/* BOX 2 (Top-Right): Interactive Capabilities / Services Box */}
        <SpotlightCard
          className="lg:col-span-5"
          innerClassName="p-6 sm:p-7 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-display text-sm font-semibold tracking-tight text-slate-200">
              Core Capabilities
            </h2>
            <span className="font-mono text-[11px] text-slate-500">3 SPECIALTIES</span>
          </div>

          <div className="mt-4 flex flex-1 flex-col justify-center gap-2.5">
            {CAPABILITIES.map(({ id, title, subtitle, showcaseTarget, Icon }) => {
              const isSelected = activeCapability === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setActiveCapability(id);
                    setActiveShowcase(showcaseTarget);
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    isSelected
                      ? 'border-indigo-500/45 bg-indigo-500/[0.08]'
                      : 'border-white/[0.07] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                        isSelected
                          ? 'border-indigo-400/40 bg-indigo-500/15 text-indigo-300'
                          : 'border-white/10 bg-white/[0.03] text-slate-300'
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="font-display text-sm font-semibold text-white truncate">
                      {title}
                    </span>
                  </div>

                  <span className="text-xs text-slate-400 whitespace-nowrap shrink-0">
                    {subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </SpotlightCard>

        {/* BOX 3 (Bottom-Left): Mini Interactive Showcase Box */}
        <SpotlightCard
          className="lg:col-span-5"
          innerClassName="p-5 sm:p-6 flex flex-col justify-between"
        >
          {/* Header + Clickable Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div
              role="tablist"
              aria-label="Portfolio mini showcase"
              className="inline-flex items-center gap-1 rounded-xl border border-white/[0.08] bg-black/40 p-1"
            >
              {SHOWCASE_ITEMS.map((item) => {
                const isActive = item.key === activeShowcase;
                return (
                  <button
                    key={item.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveShowcase(item.key)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                      isActive
                        ? 'bg-indigo-500 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setZoomedShowcase(currentShowcase)}
              aria-label={`Expand ${currentShowcase.title} preview`}
              className="inline-flex items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <Maximize2 className="h-3 w-3" aria-hidden="true" />
              <span>Preview</span>
            </button>
          </div>

          {/* Crisp UI Mockup Preview Frame */}
          <div className="mt-3 relative flex-1 min-h-[150px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#07070A]">
            {!failedImages[currentShowcase.key] ? (
              <img
                src={currentShowcase.image}
                alt={currentShowcase.alt}
                referrerPolicy="no-referrer"
                onError={() =>
                  setFailedImages((prev) => ({ ...prev, [currentShowcase.key]: true }))
                }
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
                onClick={() => setZoomedShowcase(currentShowcase)}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-indigo-950/40 to-[#07070A] p-4 text-center">
                <span className="font-display text-sm font-semibold text-white">
                  {currentShowcase.title}
                </span>
                <span className="mt-1 text-xs text-slate-400">{currentShowcase.platform}</span>
              </div>
            )}

            {/* Measured contrast scrim + compact caption */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#050507]/95 via-[#050507]/70 to-transparent px-3.5 pb-2.5 pt-6">
              <div>
                <div className="font-display text-xs font-semibold text-white">
                  {currentShowcase.title}
                </div>
                <div className="text-[11px] text-slate-400">{currentShowcase.platform}</div>
              </div>
              <span className="font-mono text-[11px] font-medium text-emerald-400 tabular-nums">
                {currentShowcase.metric}
              </span>
            </div>
          </div>
        </SpotlightCard>

        {/* BOX 4 (Bottom-Center): Tech & Guarantee Metrics Box */}
        <SpotlightCard
          className="lg:col-span-4"
          innerClassName="p-5 sm:p-6 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-display text-sm font-semibold tracking-tight text-slate-200">
              Delivery Standards
            </h2>
            <span className="font-mono text-[11px] text-emerald-400">GUARANTEED</span>
          </div>

          <div className="mt-3 grid grid-cols-3 lg:grid-cols-1 gap-2.5 flex-1 content-center">
            {GUARANTEE_METRICS.map(({ value, label, Icon, accentClass }) => (
              <div
                key={label}
                className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`h-4 w-4 shrink-0 ${accentClass}`} aria-hidden="true" />
                  <span className="font-display text-lg sm:text-xl font-bold text-white tabular-nums tracking-tight">
                    {value}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-400 lg:text-right">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </SpotlightCard>

        {/* BOX 5 (Bottom-Right): Direct Contact / Quick Action Box */}
        <SpotlightCard
          className="lg:col-span-3"
          innerClassName="p-5 sm:p-6 flex flex-col justify-between"
        >
          <div>
            <h2 className="font-display text-sm font-semibold tracking-tight text-slate-200">
              Direct Contact
            </h2>
            <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
              Ready to launch? Copy my email or message me directly on Fiverr.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-2.5">
            {/* Copy Email Button with instant Copied! tooltip & feedback */}
            <div className="relative">
              {copied && (
                <div
                  role="status"
                  className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-emerald-500/40 bg-[#0D1A16] px-2.5 py-1 text-[11px] font-semibold text-emerald-300 shadow-lg whitespace-nowrap"
                >
                  Copied!
                </div>
              )}

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`flex w-full items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                  copied
                    ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300'
                    : 'border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]'
                }`}
              >
                <span className="truncate font-mono">{copied ? 'Copied!' : 'Copy Email'}</span>
                {copied ? (
                  <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
                ) : (
                  <Copy className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                )}
              </button>
              <p className="mt-1.5 text-center font-mono text-[11px] text-slate-500 truncate">
                {CONTACT_EMAIL}
              </p>
            </div>

            <a
              href={https://www.fiverr.com/emirderlerrr}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-indigo-500/35 bg-indigo-500/15 px-3.5 py-2.5 text-xs font-semibold text-indigo-200 transition-colors duration-150 hover:bg-indigo-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <span>Fiverr Profile</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </SpotlightCard>
      </main>

      {/* Optional Lightbox Zoom Overlay for Showcase Inspection */}
      {zoomedShowcase && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${zoomedShowcase.title} full preview`}
          onClick={() => setZoomedShowcase(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[#0B0B10] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-3.5">
              <div>
                <h3 className="font-display text-base font-bold text-white">
                  {zoomedShowcase.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {zoomedShowcase.platform} ·{' '}
                  <span className="text-emerald-400 font-medium">{zoomedShowcase.metric}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setZoomedShowcase(null)}
                aria-label="Close preview"
                className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-slate-300 hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="aspect-[16/9] w-full bg-[#050507]">
              <img
                src={zoomedShowcase.image}
                alt={zoomedShowcase.alt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
