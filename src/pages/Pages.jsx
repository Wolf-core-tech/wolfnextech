import {Seo,Btn} from "../components/UI";
import {
  Services,
  About,
  Why,
  EngagementModels,
  TestimonialsSection,
  DroneShowcase,
  Process,
  FAQSection
} from "../components/Sections";
import {
  HomeHero,
  HomePillars,
  WhoWeServe,
  HomeDifference,
  TechEcosystem,
  HomeCTA
} from "../components/HomeSections";
import Contact from "../components/Contact";

const P = ({t, d, top = true, children}) => (
  <>
    <Seo title={t} desc={d}/>
    {top && <div className="h-24"/>}
    {children}
  </>
);

// 1. UNIQUE HOME PAGE (No duplication of full services, how-we-work, or about page content)
export const Home = () => (
  <P 
    top={false} 
    t="Technology & Engineering Studio" 
    d="WolfNex Technologies: Turning engineering ideas into working technology across academic projects, web, mobile, UI/UX, and drone hardware."
  >
    <HomeHero/>
    <HomePillars/>
    <WhoWeServe/>
    <HomeDifference/>
    <TechEcosystem/>
    <HomeCTA/>
  </P>
);

// 2. SERVICES PAGE (Dedicated "What We Provide" with basic pay details & specs)
export const ServicesP = () => (
  <P 
    t="What We Provide - Services" 
    d="Explore what WolfNex provides: Academic Projects, Website Development, UI/UX Design, App Development, and Drone Softwares and Components."
  >
    <Services/>
    <DroneShowcase/>
    <Process/>
    <Contact/>
  </P>
);

// 3. HOW WE WORK PAGE (Engagement models, transparent workflow & FAQs)
export const HowWeWorkP = () => (
  <P 
    t="How We Work" 
    d="Our transparent engagement models: Fixed-Price Projects, Dedicated Monthly Talent, and On-Demand Retainers with milestone delivery."
  >
    <EngagementModels/>
    <Process/>
    <FAQSection/>
    <Contact/>
  </P>
);

// 4. ABOUT US PAGE (Who we are, our philosophy, why choose us & client feedback)
export const AboutP = () => (
  <P 
    t="About Us" 
    d="Learn about WolfNex Technologies, an independent tech studio combining practical engineering, creative design, and technical mentoring."
  >
    <About/>
    <Why/>
    <TestimonialsSection/>
    <Contact/>
  </P>
);

// 5. CONTACT PAGE (Project inquiry & instant quote)
export const ContactP = () => (
  <P 
    t="Contact Us" 
    d="Get in touch with WolfNex Technologies for academic project guidance, website development, mobile apps, or drone engineering."
  >
    <Contact/>
    <FAQSection/>
  </P>
);

export const ProjectsP = ServicesP;
export const DronesP = ServicesP;

const Legal = ({t, children}) => (
  <P t={t} d={`${t} for WolfNex Technologies.`}>
    <section className="container-x max-w-3xl py-20 space-y-5 text-mute">
      <h1 className="font-display text-4xl text-snow font-bold">{t}</h1>
      <p className="border border-brand/30 bg-brand/10 p-4 text-xs text-brand font-mono rounded-lg">
        Standard Terms & Privacy for WolfNex Technologies.
      </p>
      {children}
      <div className="pt-4">
        <Btn to="/contact" v="s">Have Questions? Get in Touch</Btn>
      </div>
    </section>
  </P>
);

export const Privacy = () => (
  <Legal t="Privacy Policy">
    <p>
      WolfNex Technologies respects your privacy. We collect only information provided through the contact form (name, email, phone, project brief) solely to respond to your inquiry and deliver your project.
    </p>
    <p>
      We do not share or sell your data to any third parties. All project discussions and academic requirements are kept confidential.
    </p>
  </Legal>
);

export const Terms = () => (
  <Legal t="Terms and Conditions">
    <p>
      All project timelines, scopes, and pricing are agreed upon prior to project commencement.
    </p>
    <p>
      <strong>100% Code & Project Ownership:</strong> The client or student receives full ownership of all custom source code, documentation, and design files upon completion of agreed milestone payments.
    </p>
    <p>
      Academic services are provided as practical development coaching and mentoring; students remain responsible for explaining and submitting their work in compliance with their university standards.
    </p>
  </Legal>
);
