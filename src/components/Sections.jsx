import {useState,useRef} from "react";
import {Link} from "react-router-dom";
import {motion,useScroll,useTransform,useReducedMotion} from "framer-motion";
import {
  Code2,
  Smartphone,
  Layout,
  Cloud,
  Cpu,
  Layers,
  TrendingUp,
  Wrench,
  MessagesSquare,
  Target,
  Globe,
  Workflow,
  Check,
  ArrowRight,
  RadioTower,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Rocket,
  Zap,
  Sparkles,
  Users,
  Terminal,
  ExternalLink,
  ChevronDown,
  GraduationCap,
  Tag,
  FileText
} from "lucide-react";
import {Btn,Head,Reveal} from "./UI";
import {Drone,Dash} from "./Art";
import {Logo} from "./Logo";
import {SERVICES,ENGAGEMENT_MODELS,WHY,TESTIMONIALS,STEPS,FAQ} from "../data";

const IC = {
  code: Code2,
  phone: Smartphone,
  layout: Layout,
  cloud: Cloud,
  cpu: Cpu,
  layers: Layers,
  trend: TrendingUp,
  wrench: Wrench,
  chat: MessagesSquare,
  target: Target,
  globe: Globe,
  flow: Workflow,
  radar: RadioTower,
  grad: GraduationCap,
  doc: FileText
};

const q = s => `/contact?service=${encodeURIComponent(s)}`;

export function Hero(){
  const ref = useRef(null);
  const r = useReducedMotion();
  const {scrollYProgress: p} = useScroll({target: ref, offset: ["start start", "end start"]});
  const y = useTransform(p, [0, 1], [0, 80]);
  const up = d => r ? {} : {initial: {opacity: 0, y: 24}, animate: {opacity: 1, y: 0}, transition: {duration: 0.6, delay: d}};

  return (
    <section ref={ref} className="relative min-h-[90vh] overflow-hidden grid-bg flex items-center pt-28 pb-16">
      <div className="absolute -top-36 right-0 h-[500px] w-[500px] rounded-full bg-brand/15 blur-[140px] pointer-events-none" aria-hidden="true"/>
      <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-cy/10 blur-[130px] pointer-events-none" aria-hidden="true"/>
      
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div {...up(0)} className="inline-flex items-center gap-2 border border-cy/30 bg-cy/10 px-3 py-1.5 rounded-full text-xs font-medium text-cy mb-6">
            <span className="flex h-2 w-2 rounded-full bg-cy animate-ping" />
            <span>Open for Academic Projects, Web/App Development & Drone Tech</span>
          </motion.div>

          <motion.h1 {...up(0.1)} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-snow">
            Practical Tech Solutions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-cy to-cyan-500">Project Development</span>.
          </motion.h1>

          <motion.p {...up(0.2)} className="mt-6 max-w-2xl text-lg text-mute leading-relaxed">
            WolfNex is your technology studio specializing in <strong className="text-snow">Academic Projects</strong>, <strong className="text-snow">Website Development</strong>, <strong className="text-snow">UI/UX Design</strong>, <strong className="text-snow">App Development</strong>, and <strong className="text-snow">Drone Softwares & Components</strong>.
          </motion.p>

          <motion.div {...up(0.3)} className="mt-8 flex flex-wrap items-center gap-4">
            <Btn to="/contact" className="py-3 px-6 text-sm font-semibold shadow-lg shadow-brand/20">
              <Zap size={16} className="text-cy"/> Get Project Quote
            </Btn>
            <Btn to="/services" v="s" className="py-3 px-6 text-sm font-medium">
              View Services & Pay Details
            </Btn>
            <Btn to="/how-we-work" v="s" className="py-3 px-5 text-sm font-medium text-mute hover:text-snow border-transparent hover:border-border">
              How We Work →
            </Btn>
          </motion.div>

          {/* Stats bar */}
          <motion.div {...up(0.4)} className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-4 text-left">
            <div>
              <p className="font-display text-2xl font-bold text-snow">5 Core</p>
              <p className="text-xs text-mute mt-0.5">Specialized Offerings</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-cy">100%</p>
              <p className="text-xs text-mute mt-0.5">Code & Project Handover</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-brand">Direct</p>
              <p className="text-xs text-mute mt-0.5">Developer Mentoring</p>
            </div>
          </motion.div>
        </div>

        {/* Hero Card */}
        <motion.div style={r ? {} : {y}} className="lg:col-span-5 relative">
          <div className="relative border border-border bg-char/90 backdrop-blur-md rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"/>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"/>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"/>
                <span className="text-xs text-mute font-mono ml-2">wolfnex-services.ts</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-cy font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-cy animate-pulse"/>
                <span>ready_for_work</span>
              </div>
            </div>

            {/* What we provide summary */}
            <div className="space-y-3">
              <p className="text-xs font-mono text-mute uppercase tracking-wider">What We Provide:</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded bg-ink border border-border">
                  <span className="font-semibold text-snow flex items-center gap-2">
                    <GraduationCap size={15} className="text-cy"/> 1. Academic Projects
                  </span>
                  <span className="font-mono text-mute">Code, Report & Viva</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-ink border border-border">
                  <span className="font-semibold text-snow flex items-center gap-2">
                    <Globe size={15} className="text-cy"/> 2. Website Development
                  </span>
                  <span className="font-mono text-mute">Custom & Responsive</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-ink border border-border">
                  <span className="font-semibold text-snow flex items-center gap-2">
                    <Layout size={15} className="text-cy"/> 3. UI / UX Design
                  </span>
                  <span className="font-mono text-mute">Figma Prototypes</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-ink border border-border">
                  <span className="font-semibold text-snow flex items-center gap-2">
                    <Smartphone size={15} className="text-cy"/> 4. App Development
                  </span>
                  <span className="font-mono text-mute">Android & iOS</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-ink border border-border">
                  <span className="font-semibold text-snow flex items-center gap-2">
                    <Cpu size={15} className="text-cy"/> 5. Drone Softwares & Parts
                  </span>
                  <span className="font-mono text-mute">Hardware & Telemetry</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs">
              <span className="text-mute">Need quick delivery?</span>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-cy font-semibold hover:underline">
                Get Instant Quote <ArrowRight size={14}/>
              </Link>
            </div>
          </div>

          {/* Floating mini badge */}
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-ink/95 border border-border px-4 py-3 rounded-lg shadow-lg backdrop-blur">
            <ShieldCheck className="text-cy" size={24}/>
            <div>
              <p className="text-xs font-semibold text-snow">100% Code Handover</p>
              <p className="text-[11px] text-mute">Full files, report & demo coaching</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Services(){
  return (
    <section className="pt-8 pb-20 bg-char/30" id="services">
      <div className="container-x">
        <Head 
          title="What We Provide" 
          text="Clear, transparent technology services with upfront pay details and full project handover."
          center={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((s, i) => {
            const I = IC[s.icon] || Code2;
            const isFirst = i === 0; // Academic projects highlighted
            return (
              <Reveal 
                key={s.id} 
                delay={i * 0.05} 
                className={`bg-ink border transition-all duration-300 p-8 flex flex-col justify-between group rounded-2xl relative shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(37,99,235,0.12)] ${
                  isFirst 
                    ? "border-brand/40 ring-1 ring-brand/20 dark:border-cy/40 dark:ring-cy/20" 
                    : "border-border hover:border-brand/40 dark:hover:border-cy/40"
                }`}
              >
                <div>
                  {/* Card Top: Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/10 via-brand/5 to-cy/10 border border-brand/20 flex items-center justify-center text-brand dark:text-cy group-hover:scale-105 transition-transform shadow-sm">
                      <I size={24} />
                    </div>
                    {isFirst ? (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-brand dark:text-cy bg-brand/10 dark:bg-cy/10 border border-brand/30 dark:border-cy/30 px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Sparkles size={12}/> Priority Mentoring
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono uppercase tracking-wider text-mute border border-border px-2.5 py-1 rounded-full bg-char">
                        Service 0{i + 1}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-xl font-bold text-snow group-hover:text-brand dark:group-hover:text-cy transition-colors tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand/90 dark:text-cy mt-1">{s.tagline}</p>
                  
                  {/* Elegant Basic Pay Card */}
                  <div className="mt-5 p-4 rounded-xl bg-char border border-border/80 shadow-inner">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-[10px] font-mono text-mute uppercase tracking-wider font-semibold">
                        Basic Starting Pay:
                      </span>
                      <span className="text-xs font-bold text-brand bg-brand/10 px-2.5 py-0.5 rounded-md font-mono">
                        {s.pricing.startingAt}
                      </span>
                    </div>
                    <div className="space-y-1.5 text-xs border-t border-border pt-2.5">
                      {s.pricing.plans.map(p => (
                        <div key={p.name} className="flex items-center justify-between gap-2">
                          <span className="text-mute text-[11px]">{p.name}:</span>
                          <span className="font-semibold text-snow text-[11px] font-mono">{p.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Brief description */}
                  <p className="text-mute text-xs mt-4 leading-relaxed">{s.desc}</p>

                  {/* Feature Checklist with neat check icon */}
                  <ul className="mt-5 space-y-2.5 text-xs text-snow/90 border-t border-border pt-4">
                    {s.items.map(item => (
                      <li key={item} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={2.5} />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Elegant Full-Width Action Button */}
                <div className="mt-8 pt-4 border-t border-border">
                  <Link 
                    to={q(s.service)} 
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-brand/10 hover:bg-brand text-brand hover:text-white border border-brand/20 hover:border-transparent transition-all duration-200 shadow-sm group-hover:shadow"
                  >
                    <span>{s.cta}</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function EngagementModels(){
  return (
    <section className="pt-8 pb-20 relative overflow-hidden" id="models">
      <div className="container-x">
        <Head 
          title="How We Work" 
          text="Simple, transparent ways to work with us. Guaranteed milestones and no surprise invoices."
          center={true}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {ENGAGEMENT_MODELS.map((m, i) => (
            <Reveal 
              key={m.id} 
              delay={i * 0.08} 
              className={`relative bg-ink p-8 border flex flex-col justify-between rounded-xl transition-all duration-300 ${
                i === 0 
                  ? "border-cy/60 shadow-lg shadow-cy/10" 
                  : "border-border hover:border-brand/50"
              }`}
            >
              {m.badge && (
                <div className="absolute -top-3 left-8 bg-gradient-to-r from-brand to-cy text-white font-semibold text-[11px] px-3 py-0.5 rounded-full uppercase tracking-wider">
                  {m.badge}
                </div>
              )}

              <div>
                <h3 className="font-display text-2xl font-bold text-snow mt-2">{m.title}</h3>
                <p className="text-xs font-medium text-cy mt-1">{m.tagline}</p>
                <p className="text-sm text-mute mt-4 leading-relaxed">{m.desc}</p>

                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-xs font-semibold text-snow/90 uppercase tracking-wider mb-3">Included in this model:</p>
                  <ul className="space-y-2.5 text-xs text-mute">
                    {m.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-snow/80">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cy" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-border">
                <div className="bg-char p-3 rounded text-[11px] text-mute mb-5 border border-border">
                  <span className="font-semibold text-snow">Best For:</span> {m.idealFor}
                </div>
                <Btn 
                  to={`/contact?model=${encodeURIComponent(m.title)}`} 
                  v={i === 0 ? "p" : "s"} 
                  className="w-full text-xs py-3 font-semibold uppercase tracking-wider"
                >
                  {m.cta}
                </Btn>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Why(){
  return (
    <section className="py-24">
      <div className="container-x">
        <Head 
          title="Why Work With WolfNex?" 
          text="We combine direct developer access, hands-on engineering, and clean delivery."
        />

        <div className="grid gap-px bg-border border border-border sm:grid-cols-2 lg:grid-cols-5">
          {WHY.map(([t, d, i], k) => {
            const I = IC[i] || Target;
            return (
              <Reveal key={t} delay={k * 0.05} className="bg-ink p-7 h-full flex flex-col justify-between hover:bg-char transition">
                <div>
                  <div className="w-10 h-10 rounded bg-char border border-border flex items-center justify-center text-cy mb-4">
                    <I size={22} />
                  </div>
                  <h3 className="font-display font-bold text-base leading-snug text-snow">{t}</h3>
                  <p className="mt-2.5 text-xs text-mute leading-relaxed">{d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection(){
  return (
    <section className="py-24 bg-char/40 border-y border-border">
      <div className="container-x">
        <Head 
          title="What Our Clients & Students Say" 
          text="Hear from people who trusted WolfNex for their digital products and engineering guidance."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.author} delay={i * 0.06} className="bg-ink border border-border p-7 rounded-xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex gap-1 text-cy mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Sparkles key={idx} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-snow/90 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-display font-semibold text-sm text-snow">{item.author}</p>
                <p className="text-xs text-mute">{item.role}</p>
                <span className="inline-block mt-2 text-[10px] font-mono text-cy bg-cy/10 border border-cy/20 px-2 py-0.5 rounded">
                  {item.project}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DroneShowcase(){
  return (
    <section className="relative overflow-hidden py-24 bg-char/40 border-y border-border">
      <div className="container-x relative">
        <Reveal className="max-w-2xl">
          <div className="inline-flex items-center gap-2 border border-brand/40 bg-brand/10 px-3 py-1 text-xs text-brand rounded-full mb-4">
            <span>Specialized Tech Capability</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-snow">Drone Softwares & Hardware Components</h2>
          <p className="mt-4 text-base text-mute leading-relaxed">
            From drone hardware components, motors, and microcontrollers to real-time telemetry dashboards and ground control software. Basic pay starting from ₹6,999.
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <Drone className="w-full drop-shadow-[0_0_35px_rgba(59,130,246,0.25)]"/>
          <div className="border border-border bg-ink p-4 rounded-lg shadow-sm">
            <Dash/>
            <p className="mt-3 text-xs text-mute font-mono">Telemetry dashboard preview with altitude, battery, and signal tracking.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="bg-ink border border-border p-6 rounded-lg">
            <h3 className="font-display text-lg font-bold text-snow mb-4 flex items-center gap-2">
              <Cpu size={20} className="text-cy"/> Drone Components & Hardware
            </h3>
            <ul className="space-y-2.5 text-xs text-mute">
              {["Drone motors, electronic speed controllers (ESC), frames & propellers", "Flight controller integration (Pixhawk, Betaflight, ArduPilot)", "Microcontroller prototyping (ESP32, STM32, Arduino)", "Bench testing, wiring, assembly & troubleshooting"].map(t => (
                <li key={t} className="flex gap-2">
                  <Check size={16} className="text-cy shrink-0 mt-0.5"/>
                  <span className="text-snow/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ink border border-border p-6 rounded-lg">
            <h3 className="font-display text-lg font-bold text-snow mb-4 flex items-center gap-2">
              <RadioTower size={20} className="text-cy"/> Drone Software & Telemetry
            </h3>
            <ul className="space-y-2.5 text-xs text-mute">
              {["Live telemetry dashboards streaming flight stats via WebSockets", "Ground control station (GCS) telemetry visualization", "MAVLink and serial communication interfaces", "Flight log data analysis & flight telemetry graphs"].map(t => (
                <li key={t} className="flex gap-2">
                  <Check size={16} className="text-cy shrink-0 mt-0.5"/>
                  <span className="text-snow/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Btn to={q("Drone Softwares and Components")}>Discuss a Drone Project</Btn>
          <Btn to="/contact" v="s">Inquire on Hardware Components</Btn>
        </div>
      </div>
    </section>
  );
}

export function Process(){
  return (
    <section className="py-24">
      <div className="container-x">
        <Head 
          title="From Idea to Finished Delivery" 
          text="A transparent 4-step process designed to keep you updated from start to finish."
          center={true}
        />

        <ol className="border-l border-border pl-8 space-y-10 md:space-y-0 md:border-l-0 md:pl-0 md:grid md:grid-cols-4 md:gap-8 md:border-t md:pt-8">
          {STEPS.map(([n, t, d], i) => (
            <li key={n} className="relative list-none">
              <Reveal delay={i * 0.08}>
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-cy md:-top-[39px] md:left-0 shadow-[0_0_10px_#0284C7]" aria-hidden="true"/>
                <p className="font-mono text-cy text-xs font-semibold">{n}</p>
                <h3 className="font-display text-xl font-bold mt-1 text-snow">{t}</h3>
                <p className="mt-2 text-xs text-mute leading-relaxed">{d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FAQSection(){
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-char/30 border-t border-border" id="faq">
      <div className="container-x max-w-4xl">
        <Head 
          title="Frequently Asked Questions" 
          text="Common questions about our services, workflow, and basic pay."
          center={true}
        />

        <div className="space-y-4">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div 
                key={f.q} 
                className="border border-border bg-ink rounded-lg overflow-hidden transition"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-semibold text-base text-snow hover:text-cy transition"
                >
                  <span>{f.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-cy" : "text-mute"}`} 
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-mute leading-relaxed border-t border-border pt-3">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function About(){
  return (
    <section className="pt-8 pb-20 bg-char/50">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="inline-flex items-center gap-2 border border-cy/30 bg-cy/10 px-3 py-1 rounded-full text-xs font-medium text-cy mb-4">
            <span>About WolfNex Technologies</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-snow">
            Practical Engineering, Creative Design & Mentorship.
          </h2>
          <p className="mt-6 text-base text-mute leading-relaxed">
            WolfNex Technologies is an independent technology startup and freelance studio. We focus on delivering top-tier practical solutions across five core areas:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-snow/90">
            <li className="flex items-center gap-2"><Check size={16} className="text-cy"/> <strong>Academic Projects:</strong> Practical engineering guidance, code coaching & documentation.</li>
            <li className="flex items-center gap-2"><Check size={16} className="text-cy"/> <strong>Website Development:</strong> Modern, fast, and responsive web platforms.</li>
            <li className="flex items-center gap-2"><Check size={16} className="text-cy"/> <strong>UI / UX Design:</strong> Clean Figma design systems & prototypes.</li>
            <li className="flex items-center gap-2"><Check size={16} className="text-cy"/> <strong>App Development:</strong> Android and iOS mobile applications.</li>
            <li className="flex items-center gap-2"><Check size={16} className="text-cy"/> <strong>Drone Softwares & Components:</strong> Hardware components & flight telemetry systems.</li>
          </ul>
          <p className="mt-6 text-xs text-mute leading-relaxed">
            Whether you are a student needing final-year project guidance, or a startup needing a custom web app or mobile interface, WolfNex provides hands-on technical excellence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Btn to="/contact">Contact Our Team</Btn>
            <Btn to="/services" v="s">Explore What We Provide</Btn>
          </div>
        </Reveal>
        <Reveal className="grid-bg border border-border rounded-xl aspect-square max-w-md w-full mx-auto flex flex-col items-center justify-center bg-ink p-8 text-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent pointer-events-none"/>
          <Logo s={160}/>
          <p className="font-display text-xl font-bold mt-6 text-snow">WolfNex <span className="text-cy">Technologies</span></p>
          <p className="text-xs text-mute mt-1">Multi-Disciplinary Freelance Studio</p>
          <div className="mt-4 inline-flex items-center gap-2 border border-cy/30 bg-cy/10 px-3 py-1 rounded-full text-[11px] text-cy font-mono">
            <span>● Open for Projects & Guidance</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
