import {motion,useReducedMotion} from "framer-motion";
import {Link} from "react-router-dom";
import {useEffect} from "react";

export const Reveal = ({children, delay = 0, className = ""}) => {
  const r = useReducedMotion();
  return (
    <motion.div 
      className={className} 
      initial={r ? false : {opacity: 0, y: 20}} 
      whileInView={{opacity: 1, y: 0}} 
      viewport={{once: true, margin: "-60px"}} 
      transition={{duration: .45, delay}}
    >
      {children}
    </motion.div>
  );
};

export const Btn = ({to, v = "p", className = "", children, ...p}) => {
  const c = `btn btn-${v} ${className}`;
  return to ? (
    <Link to={to} className={c} {...p}>{children}</Link>
  ) : (
    <button className={c} {...p}>{children}</button>
  );
};

export const Head = ({title, text, center = false, className = ""}) => (
  <Reveal className={`max-w-3xl mb-12 ${center ? "mx-auto text-center" : ""} ${className}`}>
    <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-snow">
      {title}
    </h2>
    {text && <p className="text-mute mt-4 text-base leading-relaxed max-w-2xl mx-auto">{text}</p>}
  </Reveal>
);

export const Seo = ({title, desc}) => {
  useEffect(() => {
    const fullTitle = title.includes("WolfNex") ? title : `${title} | WolfNex Technologies`;
    document.title = fullTitle;

    const setMeta = (attr, key, val) => {
      if (!val) return;
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", val);
    };

    setMeta("name", "description", desc);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", window.location.href);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:url", window.location.href);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", window.location.href);
    }
  }, [title, desc]);
  return null;
};
