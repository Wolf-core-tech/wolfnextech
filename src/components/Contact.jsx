import {useState,useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {Mail,Phone,MapPin,MessageCircle,Sparkles,Check,Calculator,Send,Clock,DollarSign} from "lucide-react";
import {Btn,Reveal} from "./UI";
import {CONFIG} from "../config";
import {OPTIONS,BUDGET_RANGES,TIMELINES} from "../data";

const MSG = {
  off: [
    "bg-amber-500/10 border-amber-400/40 text-amber-500 dark:text-amber-200",
    "Your estimate details look great! The backend form endpoint is not yet connected to an email provider, but you can send your estimate directly to us via WhatsApp with one click below, or email us directly."
  ],
  ok: [
    "bg-emerald-500/10 border-emerald-400/40 text-emerald-600 dark:text-emerald-200",
    "Thank you! Your project quote request has been received. Our team will review your specs and reply within 24 hours."
  ],
  err: [
    "bg-red-500/10 border-red-400/40 text-red-500 dark:text-red-200",
    "There was an error sending the request. Please contact us directly or click the WhatsApp button to chat instantly."
  ]
};

const F = ({id, label, err, children}) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-snow/90">
      {label}
    </label>
    {children}
    {err && <p id={`${id}-e`} className="mt-1 text-xs text-red-400 font-mono">{err}</p>}
  </div>
);

export default function Contact(){
  const [sp] = useSearchParams();
  const [er, setE] = useState({});
  const [st, setSt] = useState("");
  
  // Selected estimator state
  const initialService = OPTIONS.includes(sp.get("service")) ? sp.get("service") : OPTIONS[0];
  const initialModel = sp.get("model") || "";
  
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_RANGES[0]);
  const [selectedTimeline, setSelectedTimeline] = useState(TIMELINES[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(initialModel ? `Hi, I am interested in your ${initialModel} engagement model for...` : "");

  useEffect(() => {
    const s = sp.get("service");
    if (s && OPTIONS.includes(s)) {
      setSelectedService(s);
    }
    const m = sp.get("model");
    if (m) {
      setMessage(`Hi, I would like to inquire about the ${m} engagement model.`);
    }
  }, [sp]);

  const submit = async ev => {
    ev.preventDefault();
    const e = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email address.";
    if (!selectedService) e.service = "Please choose a service.";
    if (message.trim().length < 5) e.message = "Please briefly describe your requirements in at least 5 characters.";

    setE(e);
    setSt("");
    if (Object.keys(e).length) return;

    if (!CONFIG.formEndpoint) {
      return setSt("off");
    }

    try {
      const payload = {
        name,
        email,
        phone,
        service: selectedService,
        budget: selectedBudget,
        timeline: selectedTimeline,
        message
      };
      const r = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json", Accept: "application/json"},
        body: JSON.stringify(payload)
      });
      if (!r.ok) throw new Error();
      setSt("ok");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setSt("err");
    }
  };

  // Pre-generate WhatsApp message
  const waText = encodeURIComponent(
    `Hello WolfNex Technologies!\n\nI want to discuss a project:\n• Service: ${selectedService}\n• Target Budget: ${selectedBudget}\n• Timeline: ${selectedTimeline}\n• Name: ${name || "[Client / Student]"}\n• Details: ${message || "Let's discuss requirements"}`
  );

  const wa = CONFIG.whatsapp 
    ? `https://wa.me/${CONFIG.whatsapp.replace(/\D/g, "")}?text=${waText}`
    : `https://wa.me/?text=${waText}`;

  const info = [
    [Phone, CONFIG.phone || "+91 90253 19434", "Direct Call / WhatsApp", CONFIG.phone ? `tel:${CONFIG.phone.replace(/\s+/g, "")}` : "tel:+919025319434"],
    [Mail, CONFIG.email || "hello@wolfnex.dev", "Email Address", CONFIG.email ? `mailto:${CONFIG.email}` : "mailto:hello@wolfnex.dev"],
    [MapPin, CONFIG.location || "Remote Studio (India / Global)", "Location"]
  ];

  return (
    <section className="pt-8 pb-20" id="quote">
      <div className="container-x">
        <div className="max-w-3xl mb-12 mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-cy/30 bg-cy/10 px-3.5 py-1 rounded-full text-xs font-medium text-cy mb-3">
            <Calculator size={14} />
            <span>Interactive Project & Scope Inquiry</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-snow">
            Get an Instant Project Quote
          </h2>
          <p className="mt-4 text-mute text-base max-w-2xl mx-auto leading-relaxed">
            Tell us about your academic project, website, mobile app, or drone tech need. We will prepare an exact quote and milestone delivery schedule.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main Estimator / Form Form (8 cols) */}
          <Reveal className="lg:col-span-8 bg-char border border-border rounded-xl p-6 sm:p-8 shadow-sm">
            <form noValidate onSubmit={submit} className="space-y-6">
              
              {/* Step 1: Service Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-snow/90 mb-3">
                  1. Select Service Required *
                </label>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {OPTIONS.map(opt => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setSelectedService(opt)}
                      className={`p-3 text-left rounded-lg border text-xs font-medium transition cursor-pointer ${
                        selectedService === opt
                          ? "border-cy bg-cy/15 text-snow ring-1 ring-cy font-semibold"
                          : "border-border bg-ink hover:border-cy/50 text-mute hover:text-snow"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt}</span>
                        {selectedService === opt && <Check size={14} className="text-cy" />}
                      </div>
                    </button>
                  ))}
                </div>
                {er.service && <p className="mt-1 text-xs text-red-400 font-mono">{er.service}</p>}
              </div>

              {/* Step 2: Budget & Timeline Selectors */}
              <div className="grid sm:grid-cols-2 gap-5 pt-2 border-t border-border">
                <div>
                  <label htmlFor="budget-select" className="block text-xs font-semibold uppercase tracking-wider text-snow/90 mb-2">
                    2. Estimated Budget Range
                  </label>
                  <select
                    id="budget-select"
                    value={selectedBudget}
                    onChange={e => setSelectedBudget(e.target.value)}
                    className="field rounded-lg cursor-pointer"
                  >
                    {BUDGET_RANGES.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline-select" className="block text-xs font-semibold uppercase tracking-wider text-snow/90 mb-2">
                    3. Target Delivery Timeline
                  </label>
                  <select
                    id="timeline-select"
                    value={selectedTimeline}
                    onChange={e => setSelectedTimeline(e.target.value)}
                    className="field rounded-lg cursor-pointer"
                  >
                    {TIMELINES.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Contact & Project Details */}
              <div className="pt-2 border-t border-border space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-snow/90">
                  4. Your Details & Requirements
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <F id="name" label="Your Name *" err={er.name}>
                    <input
                      id="name"
                      name="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Alex / Karthik"
                      className="field rounded-lg"
                      autoComplete="name"
                    />
                  </F>

                  <F id="email" label="Email Address *" err={er.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="e.g. name@domain.com"
                      className="field rounded-lg"
                      autoComplete="email"
                    />
                  </F>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <F id="phone" label="Phone / WhatsApp Number (Optional)">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="field rounded-lg"
                      autoComplete="tel"
                    />
                  </F>

                  <div className="flex flex-col justify-end pb-0.5">
                    <p className="text-[11px] text-mute">
                      🔒 100% Confidential. We never share your project idea or contact details.
                    </p>
                  </div>
                </div>

                <F id="message" label="Project Details / Topic / Brief *" err={er.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Briefly describe your project, academic problem statement, website pages, or requirements..."
                    className="field rounded-lg resize-y"
                  />
                </F>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Btn type="submit" className="py-3 px-6 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <Send size={15} /> Submit Inquiry
                </Btn>
                
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-s py-3 px-5 text-xs font-semibold flex items-center gap-2 text-emerald-600 dark:text-emerald-300 border-emerald-500/30 hover:border-emerald-500"
                >
                  <MessageCircle size={16} /> Send via WhatsApp
                </a>
              </div>

              {st && (
                <div role="status" className={`border p-4 text-xs rounded-lg leading-relaxed ${MSG[st][0]}`}>
                  <p>{MSG[st][1]}</p>
                  {st === "off" && (
                    <div className="mt-3">
                      <a href={wa} target="_blank" rel="noreferrer" className="btn btn-p text-xs py-2 px-4 inline-flex items-center gap-1.5">
                        <MessageCircle size={14}/> Forward Inquiry to WhatsApp Now
                      </a>
                    </div>
                  )}
                </div>
              )}
            </form>
          </Reveal>

          {/* Right Summary / Direct Channels (4 cols) */}
          <Reveal delay={0.1} className="lg:col-span-4 flex flex-col justify-between space-y-6">
            {/* Live Scope Estimate Summary Card */}
            <div className="bg-ink border border-cy/40 rounded-xl p-6 shadow-md relative overflow-hidden">
              <div className="flex items-center gap-2 text-cy text-xs font-mono uppercase tracking-wider mb-4 font-bold">
                <Sparkles size={14}/>
                <span>Quote Summary</span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-mute block text-[11px]">Selected Service:</span>
                  <span className="font-semibold text-snow text-sm">{selectedService}</span>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-3">
                  <div>
                    <span className="text-mute block text-[11px]">Budget Range</span>
                    <span className="text-snow font-medium">{selectedBudget.split("(")[0]}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-mute block text-[11px]">Timeline</span>
                    <span className="text-cy font-medium">{selectedTimeline.split("(")[0]}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-3 space-y-1.5 text-[11px] text-mute">
                  <p className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-300">
                    <Check size={12}/> 100% Code & Project Handover
                  </p>
                  <p className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-300">
                    <Check size={12}/> Milestone-based progress demos
                  </p>
                  <p className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-300">
                    <Check size={12}/> Free post-delivery support included
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Channels */}
            <div className="bg-char border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-display font-semibold text-xs text-snow uppercase tracking-wider mb-4">
                Direct Contact Channels
              </h3>
              <ul className="space-y-4 text-xs">
                {info.map(([I, v, l, h]) => (
                  <li key={l} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-ink border border-border flex items-center justify-center text-cy shrink-0">
                      <I size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] text-mute uppercase font-mono block">{l}</span>
                      {h ? (
                        <a href={h} className="text-snow hover:text-cy font-medium transition">
                          {v}
                        </a>
                      ) : (
                        <span className="text-snow font-medium">{v}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-border">
                <a
                  href={`https://wa.me/${(CONFIG.whatsapp || "919025319434").replace(/\D/g, "")}?text=Hello%20WolfNex%20Technologies%2C%20I%20have%20a%20project%20inquiry.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-medium text-xs flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle size={15} />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-border text-xs text-mute">
                <p className="flex items-center gap-2">
                  <Clock size={14} className="text-cy"/>
                  <span>Fast reply within 2 to 4 hours</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
