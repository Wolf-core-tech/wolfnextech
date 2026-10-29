import {useEffect} from "react";
import {Routes,Route,useLocation,Link} from "react-router-dom";
import {motion} from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {Home,AboutP,ServicesP,ProjectsP,HowWeWorkP,DronesP,ContactP,Privacy,Terms} from "./pages/Pages";

const NF = () => (
  <div className="container-x pt-40 pb-32 text-center">
    <h1 className="font-display text-5xl font-bold">Page not found</h1>
    <p className="mt-4 text-mute">The page you were looking for doesn't exist.</p>
    <Link className="mt-6 inline-block btn btn-p text-xs py-2.5 px-5" to="/">
      Back to Home
    </Link>
  </div>
);

export default function App(){
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:bg-brand focus:p-3">
        Skip to content
      </a>
      <Nav/>
      <motion.main 
        id="main" 
        key={pathname} 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{duration:.25}}
      >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutP/>}/>
          <Route path="/services" element={<ServicesP/>}/>
          <Route path="/projects" element={<ProjectsP/>}/>
          <Route path="/how-we-work" element={<HowWeWorkP/>}/>
          <Route path="/drones" element={<DronesP/>}/>
          <Route path="/contact" element={<ContactP/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="*" element={<NF/>}/>
        </Routes>
      </motion.main>
      <Footer/>
    </>
  );
}
