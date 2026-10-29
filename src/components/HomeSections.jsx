import {useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {
  GraduationCap,
  Globe,
  Layout,
  Smartphone,
  Cpu,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Code2,
  ShieldCheck,
  Zap,
  Users,
  Rocket,
  Layers,
  Terminal,
  Check,
  MessageCircle,
  FileText
} from "lucide-react";
import {Btn,Reveal} from "./UI";
import {Logo} from "./Logo";

// 1. Unique Hero for Home Page
export function HomeHero(){
  return (
    <section className="relative min-h-[88vh] overflow-hidden grid-bg flex items-center pt-28 pb-16">
      <div className="absolute -top-36 right-0 h-[500px] w-[500px] rounded-full bg-brand/15 blur-[140px] pointer-events-none" aria-hidden="true"/>
      <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-cy/10 blur-[130px] pointer-events-none" aria-hidden="true"/>

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 border border-cy/30 bg-cy/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-cy mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-cy animate-ping" />
            <span>Independent Technology & Engineering Studio</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-snow">
            Where Ideas Turn Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-cy to-cyan-500">Working Technology</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-mute leading-relaxed">
            From final-year academic projects with complete viva coaching to custom business websites, mobile apps, and drone telemetry software. We engineer real, working solutions built around your goals.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Btn to="/services" className="py-3 px-6 text-sm font-semibold shadow-lg shadow-brand/20">
              <Sparkles size={16} className="text-cy"/> Explore What We Provide
            </Btn>
            <Btn to="/contact" v="s" className="py-3 px-6 text-sm font-medium">
              Start a Conversation
            </Btn>
            <Btn to="/how-we-work" v="s" className="py-3 px-5 text-sm font-medium text-mute hover:text-snow border-transparent hover:border-border">
              How We Work →
            </Btn>
          </div>

          {/* Quick value props */}
          <div className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-4 text-left">
            <div>
              <p className="font-display text-2xl font-bold text-snow">100%</p>
              <p className="text-xs text-mute mt-0.5">Code & Project Ownership</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-cy">Practical</p>
              <p className="text-xs text-mute mt-0.5">Hands-On Development</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-brand">Direct</p>
              <p className="text-xs text-mute mt-0.5">Developer Mentorship</p>
            </div>
          </div>
        </div>

        {/* Visual Interactive Terminal Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative border border-border bg-char/90 backdrop-blur-md rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-border pb-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"/>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"/>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"/>
                <span className="text-xs text-mute font-mono ml-2">wolfnex-core.ts</span>
              </div>
              <span className="text-[11px] font-mono text-cy bg-cy/10 border border-cy/20 px-2 py-0.5 rounded">
                v2.0 Active
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-ink border border-border p-4 rounded-xl">
                <p className="text-xs font-mono text-mute mb-2">// What we engineer:</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-snow font-medium">
                    <span className="flex items-center gap-2">
                      <GraduationCap size={15} className="text-cy"/> Academic Projects
                    </span>
                    <span className="text-[11px] font-mono text-mute">Code + Report + Viva</span>
                  </div>
                  <div className="flex items-center justify-between text-snow font-medium">
                    <span className="flex items-center gap-2">
                      <Globe size={15} className="text-cy"/> Website Development
                    </span>
                    <span className="text-[11px] font-mono text-mute">React, Next.js, SEO</span>
                  </div>
                  <div className="flex items-center justify-between text-snow font-medium">
                    <span className="flex items-center gap-2">
                      <Layout size={15} className="text-cy"/> UI / UX Design
                    </span>
                    <span className="text-[11px] font-mono text-mute">Figma Prototypes</span>
                  </div>
                  <div className="flex items-center justify-between text-snow font-medium">
                    <span className="flex items-center gap-2">
                      <Smartphone size={15} className="text-cy"/> App Development
                    </span>
                    <span className="text-[11px] font-mono text-mute">Android & iOS</span>
                  </div>
                  <div className="flex items-center justify-between text-snow font-medium">
                    <span className="flex items-center gap-2">
                      <Cpu size={15} className="text-cy"/> Drone Tech & Parts
                    </span>
                    <span className="text-[11px] font-mono text-mute">Telemetry & Hardware</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-ink border border-border">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-500"/>
                  <span className="text-snow font-semibold">Ready to get started?</span>
                </div>
                <Link to="/services" className="text-cy font-bold flex items-center gap-1 hover:underline">
                  View Details <ArrowRight size={13}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 2. Core Pillars Strip (Concise, visual glance at the 6 areas)
export function HomePillars(){
  const pillars = [
    {
      icon: GraduationCap,
      title: "Academic Projects",
      desc: "Mini & major engineering projects with complete source code, IEEE reports, and viva coaching.",
      tag: "Students & Research"
    },
    {
      icon: FileText,
      title: "Documentation & Journal Paper",
      desc: "Project reports, viva PPT presentation slides, and research journal paper drafting.",
      tag: "Reports & Papers"
    },
    {
      icon: Globe,
      title: "Website Development",
      desc: "High-speed modern websites, portfolio platforms, and full-stack web applications.",
      tag: "Business & Personal"
    },
    {
      icon: Layout,
      title: "UI / UX Design",
      desc: "Pixel-perfect Figma wireframes, modern design systems, and clickable user flow prototypes.",
      tag: "Product Design"
    },
    {
      icon: Smartphone,
      title: "App Development",
      desc: "Native-grade cross-platform Android and iOS applications with seamless database sync.",
      tag: "Mobile Apps"
    },
    {
      icon: Cpu,
      title: "Drone Tech & Parts",
      desc: "Drone hardware components, microcontroller firmware, and live flight telemetry dashboards.",
      tag: "Hardware & IoT"
    }
  ];

  return (
    <section className="py-20 bg-char/40 border-y border-border">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono text-cy uppercase tracking-wider font-semibold">Our Core Capabilities</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-snow">
              What We Build & Deliver
            </h2>
          </div>
          <Link to="/services" className="text-xs font-bold text-cy hover:underline flex items-center gap-1">
            See full service breakdown & basic pay →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, idx) => {
            const I = p.icon;
            return (
              <Reveal key={p.title} delay={idx * 0.05} className="bg-ink border border-border hover:border-cy/60 rounded-xl p-5 flex flex-col justify-between transition-all group shadow-sm">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-char border border-border flex items-center justify-center text-cy mb-4 group-hover:scale-110 transition-transform">
                    <I size={20} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-mute block mb-1">
                    {p.tag}
                  </span>
                  <h3 className="font-display text-base font-bold text-snow group-hover:text-cy transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-mute mt-2.5 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-border">
                  <Link to="/services" className="text-[11px] font-semibold text-cy flex items-center justify-between">
                    <span>Learn more</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
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

// 3. Who We Work With / Target Tracks
export function WhoWeServe(){
  const tracks = [
    {
      icon: GraduationCap,
      audience: "Engineering Students",
      tagline: "Academic Projects & Viva Success",
      desc: "Stuck on your final year or mini engineering project? We help design, code, and document complete projects in AI/ML, Web, IoT, and Mobile, plus guide you through the viva demo so you know your project inside out.",
      highlights: ["Clean explained code", "Complete IEEE report & synopsis", "Viva demonstration coaching"]
    },
    {
      icon: Rocket,
      audience: "Startups & Businesses",
      tagline: "Websites, Apps & UI/UX Design",
      desc: "Need to launch your product fast without agency overhead? We build blazing-fast websites, custom mobile apps, and interactive Figma prototypes ready for real users and client inquiries.",
      highlights: ["Modern React & Next.js builds", "Cross-platform mobile apps", "100% full source code handover"]
    },
    {
      icon: Cpu,
      audience: "Hardware & Drone Innovators",
      tagline: "Components, Firmware & Telemetry",
      desc: "Bridging the physical and digital. We assist with drone component selection, circuit assembly, microcontroller programming, and live WebSockets telemetry dashboards for aerial and IoT devices.",
      highlights: ["Drone hardware & bench assembly", "Flight controller tuning", "Live telemetry map & web console"]
    }
  ];

  return (
    <section className="py-24">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono text-cy uppercase tracking-wider font-semibold">Tailored Guidance</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-snow">
            Built for Students, Startups & Builders
          </h2>
          <p className="mt-4 text-mute text-base leading-relaxed">
            Whether you need hands-on project coaching for your college presentation or production-ready software for your business, we tailor our delivery to your exact needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((t, idx) => {
            const I = t.icon;
            return (
              <Reveal key={t.audience} delay={idx * 0.08} className="bg-ink border border-border hover:border-cy/50 rounded-2xl p-7 flex flex-col justify-between shadow-sm transition">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-cy mb-5">
                    <I size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-snow">{t.audience}</h3>
                  <p className="text-xs font-semibold text-cy mt-1">{t.tagline}</p>
                  <p className="text-xs text-mute mt-4 leading-relaxed">{t.desc}</p>

                  <div className="mt-6 pt-5 border-t border-border space-y-2 text-xs">
                    {t.highlights.map(h => (
                      <div key={h} className="flex items-center gap-2 text-snow/90">
                        <Check size={14} className="text-cy shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-border">
                  <Btn to="/contact" v="s" className="w-full text-xs py-2.5">
                    Discuss Your Requirements
                  </Btn>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 4. The WolfNex Difference (Contrast Comparison)
export function HomeDifference(){
  return (
    <section className="py-24 bg-char/40 border-y border-border">
      <div className="container-x">
        <div className="max-w-2xl mb-14 text-center mx-auto">
          <span className="text-xs font-mono text-cy uppercase tracking-wider font-semibold">Why We Stand Apart</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-snow">
            The WolfNex Difference
          </h2>
          <p className="mt-4 text-mute text-base">
            Why clients and students choose us over template sellers and unreliable freelancers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Other / Freelancer marketplaces */}
          <div className="bg-ink border border-red-500/20 rounded-2xl p-7 shadow-sm">
            <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-4">
              <XCircle size={18} />
              <span>Generic Sellers & Marketplaces</span>
            </div>
            <ul className="space-y-3.5 text-xs text-mute">
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Copied templates with little understanding of the underlying logic.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>No documentation or explanation leaves you stranded during project viva demos.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Unresponsive communication and sudden unexpected charges.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>No post-delivery support once files are sent.</span>
              </li>
            </ul>
          </div>

          {/* WolfNex */}
          <div className="bg-ink border border-cy/50 rounded-2xl p-7 shadow-md relative overflow-hidden ring-1 ring-cy/20">
            <div className="flex items-center gap-2 text-cy font-semibold text-sm mb-4">
              <CheckCircle2 size={18} />
              <span>WolfNex Technologies</span>
            </div>
            <ul className="space-y-3.5 text-xs text-snow/90">
              <li className="flex items-start gap-2.5">
                <span className="text-cy font-bold shrink-0">✓</span>
                <span>Custom, clean code built and tested for your exact requirements.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cy font-bold shrink-0">✓</span>
                <span>Line-by-line explanation, complete IEEE documentation, and viva prep.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cy font-bold shrink-0">✓</span>
                <span>Direct developer communication via WhatsApp & phone with honest timelines.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cy font-bold shrink-0">✓</span>
                <span>14 days of dedicated post-delivery assistance and local setup support.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. Tech Stack & Engineering Toolkit Strip
export function TechEcosystem(){
  const stacks = [
    {category: "Languages & Frameworks", items: ["React", "Next.js", "TypeScript", "Python", "Node.js", "Tailwind CSS"]},
    {category: "Mobile & Cross-Platform", items: ["React Native", "Expo", "Flutter", "Android SDK", "iOS"]},
    {category: "Hardware & IoT", items: ["ESP32", "STM32", "Arduino", "Embedded C++", "WebSockets", "MAVLink"]},
    {category: "Design & Tools", items: ["Figma", "Design Systems", "Wireframing", "Git", "Vercel", "Firebase"]}
  ];

  return (
    <section className="py-20">
      <div className="container-x">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono text-cy uppercase tracking-wider font-semibold">Our Technology Stack</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold mt-2 text-snow">
            Modern Tools for Modern Solutions
          </h2>
          <p className="mt-2 text-mute text-xs">
            We use production-ready languages, frameworks, and electronics to build resilient projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stacks.map(s => (
            <div key={s.category} className="bg-char border border-border p-5 rounded-xl shadow-sm">
              <h3 className="font-display font-semibold text-xs text-snow uppercase tracking-wider mb-3">
                {s.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map(tech => (
                  <span key={tech} className="text-[11px] font-mono text-snow bg-ink border border-border px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. Unique Home Call to Action
export function HomeCTA(){
  return (
    <section className="py-20 bg-char/50 border-t border-border">
      <div className="container-x">
        <div className="bg-ink border border-border rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-1/2 translate-x-1/2 h-36 w-36 bg-cy/10 blur-2xl pointer-events-none"/>
          
          <span className="inline-flex items-center gap-1.5 border border-brand/30 bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-semibold mb-4">
            <Zap size={13} className="text-cy"/> Fast Project Onboarding
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-snow">
            Have a Project or Idea in Mind?
          </h2>
          
          <p className="mt-4 text-mute text-sm max-w-lg mx-auto leading-relaxed">
            Whether it's an engineering final-year project, a business website, an app prototype, or drone hardware, let's talk and get it built.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Btn to="/contact" className="py-3 px-6 text-xs font-bold uppercase tracking-wider">
              Send Project Inquiry
            </Btn>
            <Btn to="/services" v="s" className="py-3 px-6 text-xs font-semibold">
              Check All Services
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}
