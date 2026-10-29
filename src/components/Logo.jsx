export const Logo = ({s = 36, className = ""}) => (
  <img 
    src="/logo.png" 
    alt="WolfNex Technologies Logo" 
    style={{height: `${s}px`, width: "auto", maxHeight: `${s}px`}} 
    className={`object-contain inline-block shrink-0 ${className}`} 
  />
);
