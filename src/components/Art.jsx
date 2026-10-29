export const Drone=({className=""})=>(<svg viewBox="0 0 520 380" className={className} role="img" aria-label="Stylised quadcopter drone illustration with glowing blue light trails"><defs><linearGradient id="dg" x1="0" x2="1"><stop stopColor="#3B82F6"/><stop offset="1" stopColor="#22D3EE"/></linearGradient><radialGradient id="gl"><stop stopColor="#3B82F6" stopOpacity=".35"/><stop offset="1" stopColor="#3B82F6" stopOpacity="0"/></radialGradient></defs>
<circle cx="260" cy="190" r="190" fill="url(#gl)"/>
<g stroke="url(#dg)" strokeWidth="3" fill="none"><path d="M230 180L90 100M290 180L430 100M230 200L90 280M290 200L430 280"/>
{[[90,100],[430,100],[90,280],[430,280]].map(([x,y])=><g key={x+y}><circle cx={x} cy={y} r="14" fill="#111827"/><ellipse cx={x} cy={y} rx="58" ry="9" opacity=".6"/></g>)}
<path d="M200 170l30-30h60l30 30v40l-30 30h-60l-30-30z" fill="#111827"/><path d="M235 175l25 10 25-10-8 28h-34z"/></g>
<circle cx="250" cy="180" r="3" fill="#22D3EE"/><circle cx="270" cy="180" r="3" fill="#22D3EE"/>
<g stroke="#22D3EE" strokeWidth="1.5" fill="none" className="trail"><path d="M10 320h170l20-20h80M340 335h170M50 352h130l16-16"/></g></svg>);
export const Dash=()=>(<svg viewBox="0 0 480 300" className="w-full" role="img" aria-label="Illustrative flight telemetry dashboard preview"><rect width="480" height="300" fill="#111827"/><g fill="none" stroke="#3B82F6" strokeOpacity=".25"><rect x="16" y="16" width="300" height="160"/><rect x="332" y="16" width="132" height="76"/><rect x="332" y="100" width="132" height="76"/><rect x="16" y="188" width="448" height="96"/></g>
<path d="M28 150l40-30 40 14 50-60 50 30 60-40 40 20" stroke="#22D3EE" strokeWidth="2" fill="none"/><path d="M28 250l60-20 60 10 60-30 70 20 60-24 60 12 70-8" stroke="#3B82F6" strokeWidth="2" fill="none"/>
<g fill="#94A3B8" fontSize="11" fontFamily="Inter"><text x="28" y="34">Altitude (sample)</text><text x="344" y="34">Battery</text><text x="344" y="118">Signal</text><text x="28" y="206">Telemetry (sample)</text></g>
<text x="344" y="72" fill="#22D3EE" fontSize="28" fontFamily="Space Grotesk">--%</text><text x="344" y="156" fill="#22D3EE" fontSize="28" fontFamily="Space Grotesk">-- dB</text></svg>);
