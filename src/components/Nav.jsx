import {useState,useEffect} from "react";
import {NavLink,Link,useLocation} from "react-router-dom";
import {AnimatePresence,motion} from "framer-motion";
import {Menu,X,Sun,Moon} from "lucide-react";
import {Logo} from "./Logo";
import {Btn} from "./UI";
import {useTheme} from "../context/ThemeContext";

export const LINKS = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/how-we-work", "How We Work"],
  ["/about", "About Us"],
  ["/contact", "Contact"]
];

export default function Nav(){
  const [s,setS]=useState(false),[o,setO]=useState(false),{pathname}=useLocation();
  const {theme,toggleTheme} = useTheme();

  useEffect(()=>{
    const f=()=>setS(window.scrollY>30);
    f();
    window.addEventListener("scroll",f,{passive:true});
    return()=>window.removeEventListener("scroll",f);
  },[]);
  useEffect(()=>setO(false),[pathname]);

  const cls=({isActive})=>`transition text-sm tracking-wide font-medium hover:text-cy ${isActive?"text-cy font-semibold":"text-snow/80"}`;

  return(
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${s||o?"bg-ink/95 backdrop-blur-md border-b border-border shadow-sm":"bg-transparent"}`}>
      <nav aria-label="Main" className="container-x flex h-24 items-center justify-between">
        <Link 
          to="/" 
          aria-label="WolfNex Technologies Home" 
          onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
          className="flex items-center hover:opacity-90 transition-opacity py-1"
        >
          <Logo s={46} className="h-11 w-auto"/>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {LINKS.map(([t,l])=>(
            <li key={t}>
              <NavLink to={t} end={t==="/"} className={cls}>{l}</NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-lg border border-border bg-char hover:border-cy text-snow transition flex items-center justify-center cursor-pointer"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} theme`}
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>

          <Btn to="/contact" className="hidden sm:inline-flex text-xs py-2 px-4 font-semibold uppercase tracking-wider">
            Contact Us
          </Btn>

          <button 
            className="lg:hidden p-2 text-snow hover:text-cy" 
            aria-label={o?"Close menu":"Open menu"} 
            aria-expanded={o} 
            onClick={()=>setO(!o)}
          >
            {o?<X size={24}/>:<Menu size={24}/>}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {o&&(
          <motion.ul 
            initial={{height:0,opacity:0}} 
            animate={{height:"auto",opacity:1}} 
            exit={{height:0,opacity:0}} 
            transition={{duration:.2}} 
            className="lg:hidden overflow-hidden container-x flex flex-col gap-1 pb-6 bg-ink border-b border-border"
          >
            {LINKS.map(([t,l])=>(
              <li key={t}>
                <NavLink to={t} end={t==="/"} className={c=>`block py-3 text-lg border-b border-border ${cls(c)}`}>{l}</NavLink>
              </li>
            ))}
            <li className="pt-4 flex items-center gap-3">
              <Btn to="/contact" className="flex-1 flex items-center justify-center">
                Contact Us
              </Btn>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
