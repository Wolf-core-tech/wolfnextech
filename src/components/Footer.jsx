import {Link} from "react-router-dom";
import {Linkedin,Github,Instagram} from "lucide-react";
import {Logo} from "./Logo";
import {LINKS} from "./Nav";
import {CONFIG} from "../config";

export default function Footer(){
  const soc = [
    ["LinkedIn", Linkedin, CONFIG.linkedin],
    ["GitHub", Github, CONFIG.github],
    ["Instagram", Instagram, CONFIG.instagram]
  ];

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <footer className="border-t border-border bg-char/80 py-8">
      <div className="container-x">
        {/* Main Row: Brand on Left, Quick Links on Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
            <Link 
              to="/" 
              aria-label="WolfNex Technologies Home" 
              onClick={scrollToTop}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <Logo s={40} className="h-10 w-auto group-hover:scale-105 transition-transform duration-200 drop-shadow-sm"/>
              <span className="font-display text-lg font-bold text-snow tracking-tight group-hover:text-cy transition-colors">
                WolfNex <span className="text-cy">Technologies</span>
              </span>
            </Link>
            <span className="hidden sm:inline-block text-border">|</span>
            <p className="text-xs text-mute font-medium">
              Technology & Project Development Studio
            </p>
          </div>

          {/* Quick Links Alone */}
          <nav aria-label="Footer Quick Links">
            <ul className="flex flex-wrap items-center justify-center gap-6 text-xs text-mute font-medium">
              {LINKS.map(([t, l]) => (
                <li key={t}>
                  <Link 
                    to={t} 
                    onClick={scrollToTop}
                    className="hover:text-cy transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" onClick={scrollToTop} className="hover:text-cy transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" onClick={scrollToTop} className="hover:text-cy transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="mt-6 pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-mute">
          <p>© {new Date().getFullYear()} WolfNex Technologies. All rights reserved.</p>

          <div className="flex items-center gap-2">
            {soc.map(([n, I, u]) => (
              u ? (
                <a 
                  key={n} 
                  href={u} 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label={n} 
                  className="p-1.5 border border-border rounded-md bg-ink hover:border-cy hover:text-cy text-snow transition"
                >
                  <I size={14}/>
                </a>
              ) : (
                <span 
                  key={n} 
                  title={`${n} link can be configured in src/config.js`} 
                  className="p-1.5 border border-border rounded-md bg-ink text-mute/40"
                >
                  <I size={14}/>
                </span>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
