import { useEffect, useState } from "react";

import logoImg from "../imports/1f09be69-178d-4e9a-bb21-19f2eb0cdafa-1.png";
import gallery1 from "../imports/1c41cff6-c630-4d8a-ad34-739d0f9972a7-1.jfif";
import gallery2 from "../imports/2f8eb30d-4eb2-46a8-863f-ff05160b890a-1.jfif";
import gallery3 from "../imports/30d28b0f-4cd1-446e-b7b9-50b8bd0d14a8-1.jfif";
import gallery4 from "../imports/147ce33d-ed75-4370-9d1a-5ba8f2ab4586-1.jfif";
import gallery5 from "../imports/64129c43-bdf3-4e70-8728-8217d7cbd384-1.jfif";
import gallery6 from "../imports/bd306616-3866-486f-8cdd-5c0cf846b321-1.jfif";
import gallery7 from "../imports/fd84e2fe-e899-40cf-ac59-07d5a446fc5a-1.jfif";

// Local asset replacements requested by the user
import newlyProvided from "../../assets/newly-provided-mango.jpg";
import mosmiImg from "../../assets/mosmi-chaunsa.jpeg";
import whiteChaunsaImg from "../../assets/white-chaunsa.jpg";
import anwarRatolImg from "../../assets/anwar-ratol.jpeg";
import saroliImg from "../../assets/saroli-mango.jpeg";
import dusehriImg from "../../assets/dusehri-mango.jpg";
import langraImg from "../../assets/langra-mango.jpg";
import nawabpuriImg from "../../assets/nawabpuri-mango.jpg";
import sindhriImg from "../../assets/sindhri-mango.jpg";
import desiImg from "../../assets/desi-mango.jpg";

const WA_URL = "https://wa.me/923376113633";
const WA_PRIMARY = "+92 337 6113633";
const WA_SECONDARY = "+92 314 4225277";

const C = {
  yellow: "#FCD12A",
  golden: "#F7C830",
  green: "#036231",
  deepGreen: "#005B2B",
  ivory: "#FFF8ED",
  cream: "#FAF7F0",
  beige: "#F4E8D0",
};

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Inter', 'Arial', sans-serif";

const skeuCard = {
  background: "linear-gradient(145deg, #ffffff 0%, #f7f2ea 100%)",
  boxShadow: "8px 8px 24px rgba(0,0,0,0.10), -4px -4px 16px rgba(255,255,255,0.95), inset 0 1px 0 rgba(255,255,255,0.85)",
  border: "1px solid rgba(255,255,255,0.75)",
};

const skeuBtnGreen = {
  background: "linear-gradient(160deg, #04913e 0%, #036231 50%, #005B2B 100%)",
  boxShadow: "5px 5px 14px rgba(0,55,22,0.38), -2px -2px 8px rgba(255,255,255,0.30), inset 0 2px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.15)",
};

const skeuBtnYellow = {
  background: "linear-gradient(160deg, #FDED90 0%, #FCD12A 50%, #F0B800 100%)",
  boxShadow: "5px 5px 14px rgba(180,125,0,0.35), -2px -2px 8px rgba(255,255,255,0.80), inset 0 2px 0 rgba(255,255,255,0.50), inset 0 -1px 0 rgba(0,0,0,0.08)",
};

const mangoVarieties = [
  { name: "Mosmi Chaunsa", desc: "The king of Pakistani mangoes with unmatched sweetness and a rich golden hue.", img: mosmiImg },
  { name: "White Chaunsa", desc: "Exceptionally sweet with a pale golden skin and fiber free pulp.", img: whiteChaunsaImg },
  { name: "Anwar Ratol", desc: "Small yet intensely aromatic with an extraordinary natural sugar content.", img: anwarRatolImg },
  { name: "Saroli", desc: "A rare early season variety known for its perfectly balanced sweet and tangy profile.", img: saroliImg },
  { name: "Dusehri", desc: "Slender, oblong shape with a refreshingly sweet and delicate flavor.", img: dusehriImg },
  { name: "Langra", desc: "Green skinned even when ripe, with a uniquely complex sweet and tart flavor.", img: langraImg },
  { name: "Nawabpuri", desc: "A traditional cultivar prized for its aromatic richness and smooth velvety texture.", img: nawabpuriImg },
  { name: "Sindhri", desc: "The pride of Sindh, celebrated for its large size and exceptionally sweet taste.", img: sindhriImg },
  { name: "Desi Mango", desc: "The authentic village mango with an intensely concentrated and nostalgic flavor.", img: desiImg },
];

const galleryItems = [
  { src: gallery1, alt: "Fresh mangoes from The Chosens orchards" },
  { src: gallery2, alt: "Premium mango harvest" },
  { src: gallery3, alt: "Hand selected mangoes at peak ripeness" },
  { src: gallery4, alt: "The Chosens mango collection" },
  { src: gallery5, alt: "Premium Pakistani mangoes ready for delivery" },
  { src: gallery6, alt: "Orchard fresh mangoes" },
  { src: gallery7, alt: "The Chosens quality packaging" },
];

const farmSteps = [
  {
    num: "01",
    title: "Orchards",
    desc: "We partner exclusively with heritage orchards across Punjab and Sindh, where generations of farmers have perfected the craft of mango cultivation in Pakistan's most fertile lands.",
  },
  {
    num: "02",
    title: "Hand Selection",
    desc: "Every single mango is individually inspected and hand picked at the peak of ripeness by our expert selectors, ensuring only the finest fruit advances to the next stage.",
  },
  {
    num: "03",
    title: "Premium Packaging",
    desc: "Our mangoes are carefully packed in premium climate controlled packaging designed to preserve freshness, aroma, and presentation from orchard to your door.",
  },
  {
    num: "04",
    title: "Fresh Delivery",
    desc: "Delivered directly to your doorstep within 24 to 48 hours of harvest, ensuring maximum freshness and the full aromatic experience of Pakistan's finest mangoes.",
  },
];

const qualitySteps = [
  { label: "Tree", desc: "Selected at source" },
  { label: "Selection", desc: "Expert screening" },
  { label: "Inspection", desc: "Quality verification" },
  { label: "Packing", desc: "Premium packaging" },
  { label: "Delivery", desc: "Door to door" },
];

const trustItems = [
  { val: "Farm Fresh", lbl: "Direct from Orchards" },
  { val: "100% Natural", lbl: "Chemical Free" },
  { val: "Premium", lbl: "Quality" },
  { val: "Fast", lbl: "Delivery" },
  { val: "Export Grade", lbl: "Selection" },
];

const navItems = [
  ["Home", "#home"],
  ["Our Mangoes", "#our-mangoes"],
  ["Farm Journey", "#farm-journey"],
  ["Gallery", "#gallery"],
  ["Why The Chosens", "#why-the-chosens"],
  ["Contact", "#contact"],
];

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{
      display: "inline-block",
      fontSize: "11px",
      fontFamily: sans,
      letterSpacing: "3px",
      color: C.green,
      textTransform: "uppercase" as const,
      fontWeight: 700,
      marginBottom: "18px",
      padding: "8px 22px",
      borderRadius: "30px",
      background: "linear-gradient(145deg, #FFF8ED, #F4E8D0)",
      boxShadow: "3px 3px 8px rgba(0,0,0,0.08), -2px -2px 6px rgba(255,255,255,0.95)",
      border: "1px solid rgba(252,209,42,0.3)",
    }}>{children}</div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Set favicon
    let link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = logoImg;
    link.type = "image/png";

    const shortcut = document.createElement("link");
    shortcut.rel = "shortcut icon";
    shortcut.href = logoImg;
    document.head.appendChild(shortcut);

    document.title = "The Chosens | Pakistan's Finest Mangoes";
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 900) setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const lift = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px) scale(1.01)";
    (e.currentTarget as HTMLElement).style.boxShadow = "12px 18px 38px rgba(0,0,0,0.16), -4px -4px 16px rgba(255,255,255,0.95)";
  };
  const drop = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
    (e.currentTarget as HTMLElement).style.boxShadow = skeuCard.boxShadow;
  };

  return (
    <div style={{ fontFamily: serif, backgroundColor: C.ivory, overflowX: "hidden", minHeight: "100vh" }}>

      {/* ── NAVIGATION ── */}
      <nav className="main-nav" style={{
        position: "fixed",
        top: "14px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        width: "calc(100% - 40px)",
        maxWidth: "1200px",
        background: scrolled
          ? "linear-gradient(135deg, rgba(250,247,240,0.99) 0%, rgba(255,248,237,0.99) 100%)"
          : "linear-gradient(135deg, rgba(250,247,240,0.96) 0%, rgba(255,248,237,0.96) 100%)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRadius: "60px",
        padding: "10px 20px",
        boxShadow: scrolled
          ? "0 8px 40px rgba(0,0,0,0.16), 0 2px 6px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)"
          : "0 4px 24px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.90)",
        border: "1px solid rgba(255,255,255,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        transition: "box-shadow 0.3s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <img src={logoImg} alt="The Chosens Logo" style={{
            width: "42px", height: "42px", objectFit: "contain", borderRadius: "50%",
            boxShadow: "0 2px 10px rgba(252,209,42,0.45), 2px 2px 6px rgba(0,0,0,0.1)",
          }} />
          <div>
            <div style={{ fontSize: "15px", fontWeight: 800, color: C.deepGreen, letterSpacing: "-0.2px", fontFamily: serif }}>The Chosens</div>
            <div style={{ fontSize: "9px", fontFamily: sans, color: "#8a7a50", letterSpacing: "1.5px", fontWeight: 600, textTransform: "uppercase" }}>Premium Mangoes</div>
          </div>
        </div>

        <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} style={{
              padding: "7px 13px",
              borderRadius: "30px",
              fontSize: "12.5px",
              fontFamily: sans,
              color: "#4a3a1a",
              textDecoration: "none",
              fontWeight: 500,
              whiteSpace: "nowrap" as const,
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "linear-gradient(145deg,rgba(252,209,42,0.18),rgba(247,200,48,0.12))";
              (e.currentTarget as HTMLElement).style.color = C.deepGreen;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#4a3a1a";
            }}
            >{label}</a>
          ))}
        </div>

        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#053018" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12"></path>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#053018" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M3 12h18M3 18h18"></path>
            </svg>
          )}
        </button>

        <a className="order-btn-desktop" href={WA_URL} target="_blank" rel="noopener noreferrer" style={{
          display: "flex", alignItems: "center", gap: "7px",
          padding: "10px 18px", borderRadius: "30px",
          color: "#fff", fontSize: "12.5px", fontFamily: sans, fontWeight: 700,
          textDecoration: "none", whiteSpace: "nowrap" as const,
          flexShrink: 0, letterSpacing: "0.2px",
          ...skeuBtnGreen,
          transition: "transform 0.15s ease",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
        >
          <WhatsAppIcon size={14} />
          Order on WhatsApp
        </a>
      </nav>

      {mobileOpen && (
        <div id="mobile-navigation" className="mobile-nav-overlay" role="navigation" aria-label="Mobile navigation">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ fontWeight: 800, color: C.deepGreen, fontFamily: serif, fontSize: 18 }}>The Chosens</div>
            <button onClick={() => setMobileOpen(false)} aria-label="Close navigation">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={C.deepGreen} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMobileOpen(false)}>{label}</a>
          ))}
          <div style={{ marginTop: 16 }}>
            <a href={WA_URL} target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)} style={{ display: "inline-block", width: "100%", textAlign: "center", padding: "12px 14px", background: "#036231", color: "#fff", borderRadius: 12, textDecoration: "none", fontWeight: 800 }}>Order on WhatsApp</a>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section id="home" style={{
        minHeight: "100vh",
        background: "linear-gradient(140deg, #FFF8ED 0%, #F9EFD8 35%, #FFFAEE 65%, #FFF8ED 100%)",
        display: "flex", alignItems: "center",
        paddingTop: "120px", paddingBottom: "80px",
        position: "relative", overflow: "hidden",
      }}>
        {/* decorative circles */}
        <div style={{ position:"absolute", top:"-120px", right:"-80px", width:"640px", height:"640px", borderRadius:"50%", background:"radial-gradient(circle, rgba(252,209,42,0.09) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-180px", left:"-120px", width:"540px", height:"540px", borderRadius:"50%", background:"radial-gradient(circle, rgba(3,98,49,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"30%", right:"5%", width:"220px", height:"220px", borderRadius:"50%", background:"radial-gradient(circle, rgba(252,209,42,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />

        <div className="hero-grid" style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 28px", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", gap:"64px", alignItems:"center", width:"100%" }}>

          {/* LEFT */}
          <div>
            <h1 style={{
              fontSize:"clamp(38px, 5.5vw, 64px)",
              lineHeight:"1.10",
              fontWeight:900, letterSpacing:"-1.5px",
              marginBottom:"10px", fontFamily:serif, color:"#180d00",
            }}>
              Pakistan's Finest<br />
              <span style={{ color:C.green }}>Mangoes.</span>
            </h1>
            <h2 style={{
              fontSize:"clamp(20px, 2.8vw, 34px)",
              lineHeight:"1.3", color:"#3a2800",
              fontWeight:500, letterSpacing:"-0.3px",
              marginBottom:"22px", fontFamily:serif,
            }}>
              Selectively Chosen. Devotedly Delivered.
            </h2>
            <p style={{
              fontSize:"17px", lineHeight:"1.80", color:"#5a4822",
              marginBottom:"42px", fontFamily:sans, maxWidth:"460px",
            }}>
              Every mango is individually hand selected to ensure premium quality, iconic aroma, and unforgettable flavor.
            </p>

            <div style={{ display:"flex", gap:"14px", flexWrap:"wrap" as const }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"15px 32px", borderRadius:"50px",
                color:"#fff", fontSize:"15px", fontFamily:sans, fontWeight:700,
                textDecoration:"none", letterSpacing:"0.3px",
                ...skeuBtnGreen,
                transition:"transform 0.15s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <WhatsAppIcon size={18} />
                Order on WhatsApp
              </a>
              <a href="#our-mangoes" style={{
                display:"inline-flex", alignItems:"center", gap:"8px",
                padding:"15px 32px", borderRadius:"50px",
                color:C.deepGreen, fontSize:"15px", fontFamily:sans, fontWeight:700,
                textDecoration:"none", letterSpacing:"0.3px",
                ...skeuBtnYellow,
                transition:"transform 0.15s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                Explore Collection
              </a>
            </div>

            {/* mini trust bar */}
            <div style={{ display:"flex", gap:"28px", marginTop:"44px", flexWrap:"wrap" as const }}>
              {[["100% Natural","Certified"],["Farm Fresh","Guaranteed"]].map(([v,l],i)=>(
                <div key={i} style={{ textAlign:"center" as const }}>
                  <div style={{ fontSize:"20px", fontWeight:800, color:C.green, fontFamily:serif }}>{v}</div>
                  <div style={{ fontSize:"11px", fontFamily:sans, color:"#8a7a50", letterSpacing:"0.5px" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ position: "relative" }} className="fade-up">
            {/* softened vertical shadow */}
            <div style={{
              position: "absolute", top: 24, left: 0, right: 0, bottom: -8,
              borderRadius: "36px",
              background: "linear-gradient(180deg, rgba(252,209,42,0.08), rgba(3,98,49,0.04))",
              boxShadow: "0 24px 36px rgba(0,0,0,0.12)",
            }} />
            <div style={{
              position: "relative", borderRadius: "36px", overflow: "hidden",
              boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
              border: "2px solid rgba(255,255,255,0.80)",
            }}>
              <img
                src={newlyProvided}
                alt="Pakistan's finest premium mangoes"
                style={{ width: "100%", height: "min(52vh, 520px)", objectFit: "cover", display: "block" }}
              />
              {/* floating quality badge */}
              <div style={{
                position: "absolute", top: "22px", right: "22px",
                background: "linear-gradient(145deg,#FDED90,#FCD12A)",
                borderRadius: "14px", padding: "8px 16px",
                boxShadow: "3px 3px 10px rgba(180,125,0,0.3), inset 0 1px 0 rgba(255,255,255,0.6)",
                fontSize: "12px", fontFamily: sans, fontWeight: 800, color: C.deepGreen, letterSpacing: "0.5px",
              }}>
                Export Grade
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="trust-strip" style={{
        background:"linear-gradient(160deg, #036231 0%, #005B2B 100%)",
        padding:"36px 24px",
        boxShadow:"0 6px 30px rgba(0,50,20,0.30), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}>
        <div className="trust-grid" style={{ maxWidth:"1100px", margin:"0 auto", display:"flex", justifyContent:"space-around", alignItems:"center", flexWrap:"wrap" as const, gap:"16px" }}>
          {trustItems.map((item,i)=>(
            <div className="trust-item" key={i} style={{
              display:"flex", flexDirection:"column" as const, alignItems:"center", textAlign:"center" as const,
              padding:"14px 20px", borderRadius:"18px",
              background:"rgba(255,255,255,0.08)",
              boxShadow:"inset 0 1px 0 rgba(255,255,255,0.14), 2px 2px 8px rgba(0,0,0,0.18)",
              border:"1px solid rgba(255,255,255,0.10)",
            }}>
              <div style={{ fontSize:"21px", fontWeight:800, color:C.yellow, fontFamily:serif, letterSpacing:"-0.3px" }}>{item.val}</div>
              <div style={{ fontSize:"11px", fontFamily:sans, color:"rgba(255,255,255,0.80)", marginTop:"3px", letterSpacing:"0.5px" }}>{item.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY THE CHOSENS ── */}
      <section id="why-the-chosens" style={{
        padding:"100px 24px",
        background:"linear-gradient(180deg, #FFF8ED 0%, #FAF7F0 100%)",
      }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
          <div style={{ textAlign:"center" as const, marginBottom:"64px" }}>
            <SectionLabel>Our Promise</SectionLabel>
            <h2 style={{ fontSize:"clamp(28px,4vw,50px)", fontWeight:900, color:"#180d00", letterSpacing:"-0.8px", marginBottom:"16px", fontFamily:serif }}>
              Why The Chosens
            </h2>
            <p style={{ fontSize:"17px", color:"#6a5830", fontFamily:sans, maxWidth:"500px", margin:"0 auto", lineHeight:"1.75" }}>
              We do not just sell mangoes. We deliver an experience rooted in quality, trust, and generations of expertise.
            </p>
          </div>

          <div className="promise-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:"26px" }}>
            {[
              {
                title:"Farm Fresh",
                sub:"Directly sourced from selected orchards.",
                detail:"We maintain direct partnerships with certified heritage orchards, ensuring every mango reaches you at the peak of freshness without any intermediaries.",
                iconPath:"M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-15 9",
              },
              {
                title:"100% Natural",
                sub:"Chemical free cultivation.",
                detail:"Our mangoes are grown without harmful pesticides or artificial chemicals, using traditional organic farming practices passed down through generations.",
                iconPath:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
              },
              {
                title:"Premium Selection",
                sub:"Handpicked mangoes only.",
                detail:"Each mango undergoes a rigorous quality inspection before it earns The Chosens seal. Only the finest fruit representing less than 30% of each harvest qualifies.",
                iconPath:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z",
              },
              {
                title:"Fast Delivery",
                sub:"Fresh delivery nationwide.",
                detail:"Our cold chain logistics guarantee your mangoes arrive in perfect condition. We deliver nationwide within 24 to 48 hours of harvest, preserving every note of freshness.",
                iconPath:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
              },
            ].map((card,i)=>(
              <div className="promise-card" key={i}
                style={{ ...skeuCard, borderRadius:"28px", padding:"36px 28px", transition:"transform 0.3s ease, box-shadow 0.3s ease", cursor:"default" }}
                onMouseEnter={lift} onMouseLeave={drop}
              >
                <div style={{
                  width:"62px", height:"62px", borderRadius:"18px",
                  background:"linear-gradient(145deg, #FDEF94, #FCD12A)",
                  boxShadow:"4px 4px 12px rgba(180,125,0,0.26), -2px -2px 8px rgba(255,255,255,0.85), inset 0 1px 0 rgba(255,255,255,0.60)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  marginBottom:"24px", flexShrink:0,
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill={C.deepGreen}>
                    <path d={card.iconPath}/>
                  </svg>
                </div>
                <h3 style={{ fontSize:"21px", fontWeight:800, color:"#180d00", marginBottom:"8px", fontFamily:serif }}>{card.title}</h3>
                <p style={{ fontSize:"14px", fontWeight:700, color:C.green, marginBottom:"12px", fontFamily:sans }}>{card.sub}</p>
                <p style={{ fontSize:"14px", color:"#6a5830", lineHeight:"1.70", fontFamily:sans }}>{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANGO COLLECTION ── */}
      <section id="our-mangoes" style={{
        padding:"100px 24px",
        background:"linear-gradient(180deg, #F4E8D0 0%, #FFF8ED 100%)",
      }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
          <div style={{ textAlign:"center" as const, marginBottom:"64px" }}>
            <SectionLabel>Premium Varieties</SectionLabel>
            <h2 style={{ fontSize:"clamp(28px,4vw,50px)", fontWeight:900, color:"#180d00", letterSpacing:"-0.8px", marginBottom:"16px", fontFamily:serif }}>
              Our Mango Collection
            </h2>
            <p style={{ fontSize:"17px", color:"#6a5830", fontFamily:sans, maxWidth:"520px", margin:"0 auto", lineHeight:"1.75" }}>
              Nine exceptional varieties, each hand selected from Pakistan's finest orchards and delivered at the peak of perfection.
            </p>
          </div>

          <div className="mango-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"26px" }}>
            {mangoVarieties.map((m,i)=>(
              <div className="mango-card" key={i}
                style={{ ...skeuCard, borderRadius:"28px", overflow:"hidden", transition:"transform 0.3s ease, box-shadow 0.3s ease", cursor:"pointer" }}
                onMouseEnter={(e)=>{
                  (e.currentTarget as HTMLElement).style.transform="translateY(-8px) scale(1.01)";
                  (e.currentTarget as HTMLElement).style.boxShadow="14px 20px 44px rgba(0,0,0,0.17), -4px -4px 16px rgba(255,255,255,0.95)";
                  const img=(e.currentTarget as HTMLElement).querySelector("img") as HTMLImageElement;
                  if(img) img.style.transform="scale(1.08)";
                }}
                onMouseLeave={(e)=>{
                  (e.currentTarget as HTMLElement).style.transform="translateY(0) scale(1)";
                  (e.currentTarget as HTMLElement).style.boxShadow=skeuCard.boxShadow;
                  const img=(e.currentTarget as HTMLElement).querySelector("img") as HTMLImageElement;
                  if(img) img.style.transform="scale(1)";
                }}
              >
                <div className="var-img-wrap" style={{ position:"relative", overflow:"hidden" }}>
                  <img
                    src={m.img}
                    alt={m.name}
                    style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", transition:"transform 0.45s ease" }}
                  />
                  <div style={{
                    position:"absolute", top:"12px", right:"12px",
                    background:"linear-gradient(145deg,#FDEF94,#FCD12A)",
                    borderRadius:"10px", padding:"4px 12px",
                    fontSize:"10px", fontFamily:sans, fontWeight:800, color:C.deepGreen,
                    boxShadow:"2px 2px 6px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.55)",
                    letterSpacing:"0.8px", textTransform:"uppercase" as const,
                  }}>
                    Premium Grade
                  </div>
                </div>
                <div className="mango-card-body" style={{ padding:"24px" }}>
                  <h3 style={{ fontSize:"19px", fontWeight:800, color:"#180d00", marginBottom:"8px", fontFamily:serif }}>{m.name}</h3>
                  <p style={{ fontSize:"13.5px", color:"#6a5830", lineHeight:"1.65", fontFamily:sans, marginBottom:"20px" }}>{m.desc}</p>
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{
                    display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
                    padding:"11px 0", borderRadius:"50px",
                    color:"#fff", fontSize:"13px", fontFamily:sans, fontWeight:700,
                    textDecoration:"none", letterSpacing:"0.2px",
                    ...skeuBtnGreen,
                  }}>
                    <WhatsAppIcon size={14} />
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FARM TO DOORSTEP ── */}
      <section id="farm-journey" className="farm-section" style={{
        padding:"100px 24px",
        background:"linear-gradient(180deg, #FFF8ED 0%, #FAF7F0 100%)",
      }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div className="section-heading" style={{ textAlign:"center" as const, marginBottom:"70px" }}>
            <SectionLabel>Our Process</SectionLabel>
            <h2 style={{ fontSize:"clamp(28px,4vw,50px)", fontWeight:900, color:"#180d00", letterSpacing:"-0.8px", marginBottom:"16px", fontFamily:serif }}>
              Farm to Doorstep
            </h2>
            <p style={{ fontSize:"17px", color:"#6a5830", fontFamily:sans, maxWidth:"480px", margin:"0 auto", lineHeight:"1.75" }}>
              Every mango follows a carefully orchestrated journey from Pakistan's finest orchards directly to your home.
            </p>
          </div>

          <div className="farm-timeline" style={{ position:"relative" }}>
            <div className="farm-timeline-line" style={{
              position:"absolute", left:"50%", top:"0", bottom:"0",
              width:"2px",
              background:"linear-gradient(180deg, transparent, rgba(252,209,42,0.55) 10%, rgba(252,209,42,0.55) 90%, transparent)",
              transform:"translateX(-50%)",
            }} />
            {farmSteps.map((step,i)=>(
              <div className="farm-step" key={i} style={{
                display:"flex",
                justifyContent:i%2===0?"flex-start":"flex-end",
                marginBottom:"36px", position:"relative",
              }}>
                <div className="farm-step-dot" style={{
                  position:"absolute", left:"50%", top:"38px",
                  transform:"translate(-50%,-50%)",
                  width:"22px", height:"22px", borderRadius:"50%",
                  background:"linear-gradient(145deg,#FDEF94,#FCD12A)",
                  boxShadow:"0 0 0 5px rgba(252,209,42,0.18), 3px 3px 10px rgba(180,125,0,0.30), -2px -2px 6px rgba(255,255,255,0.90)",
                  zIndex:2,
                }} />
                <div className="farm-step-card" style={{
                  width:"45%",
                  ...skeuCard,
                  borderRadius:"24px", padding:"28px 30px",
                  transition:"transform 0.3s ease",
                }}
                onMouseEnter={(e)=>{ (e.currentTarget as HTMLElement).style.transform="translateY(-4px)"; }}
                onMouseLeave={(e)=>{ (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
                >
                  <div style={{
                    display:"inline-block",
                    fontSize:"11px", fontFamily:sans, fontWeight:800, color:C.green,
                    letterSpacing:"2px", marginBottom:"10px",
                    padding:"4px 14px", borderRadius:"20px",
                    background:"linear-gradient(145deg,#FDEF94,#FCD12A)",
                    boxShadow:"2px 2px 6px rgba(180,125,0,0.20), inset 0 1px 0 rgba(255,255,255,0.55)",
                  }}>
                    Step {step.num}
                  </div>
                  <h3 style={{ fontSize:"22px", fontWeight:800, color:"#180d00", marginBottom:"10px", fontFamily:serif }}>{step.title}</h3>
                  <p style={{ fontSize:"14.5px", color:"#6a5830", lineHeight:"1.72", fontFamily:sans }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITY PROCESS ── */}
      <section className="quality-section" style={{
        padding:"80px 24px",
        background:"linear-gradient(160deg, #036231 0%, #005B2B 100%)",
        boxShadow:"inset 0 4px 24px rgba(0,0,0,0.10)",
      }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div className="section-heading quality-heading" style={{ textAlign:"center" as const, marginBottom:"56px" }}>
            <h2 style={{ fontSize:"clamp(24px,3.5vw,44px)", fontWeight:900, color:"#fff", letterSpacing:"-0.5px", marginBottom:"14px", fontFamily:serif }}>
              Our Quality Selection Process
            </h2>
            <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.80)", fontFamily:sans, maxWidth:"460px", margin:"0 auto", lineHeight:"1.72" }}>
              Five rigorous steps ensure that only the finest mangoes carry The Chosens name.
            </p>
          </div>
          <div className="quality-steps" style={{ display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap" as const, gap:"0" }}>
            {qualitySteps.map((qs,i)=>(
              <div className="quality-step-wrap" key={i} style={{ display:"flex", alignItems:"center" }}>
                <div className="quality-step-card" style={{
                  display:"flex", flexDirection:"column" as const, alignItems:"center",
                  textAlign:"center" as const, width:"160px", padding:"24px 12px",
                  borderRadius:"24px",
                  background:"rgba(255,255,255,0.09)",
                  boxShadow:"4px 4px 14px rgba(0,0,0,0.22), -2px -2px 8px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.14)",
                  border:"1px solid rgba(255,255,255,0.11)",
                  transition:"transform 0.2s ease",
                }}
                onMouseEnter={(e)=>{ (e.currentTarget as HTMLElement).style.transform="translateY(-4px)"; }}
                onMouseLeave={(e)=>{ (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
                >
                  <div style={{
                    width:"50px", height:"50px", borderRadius:"14px",
                    background:"linear-gradient(145deg,#FDEF94,#FCD12A)",
                    boxShadow:"4px 4px 10px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.55)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    marginBottom:"14px",
                    fontSize:"13px", fontFamily:sans, fontWeight:800, color:C.deepGreen,
                  }}>
                    0{i+1}
                  </div>
                  <div style={{ fontSize:"15px", fontWeight:700, color:"#fff", marginBottom:"6px", fontFamily:serif }}>{qs.label}</div>
                  <div style={{ fontSize:"11px", fontFamily:sans, color:"rgba(255,255,255,0.70)", lineHeight:"1.4" }}>{qs.desc}</div>
                </div>
                {i<qualitySteps.length-1 && (
                  <div className="quality-connector" style={{ width:"28px", height:"2px", background:"rgba(252,209,42,0.35)", flexShrink:0 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mango Deals removed */}

      {/* ── PHOTO GALLERY ── */}
      <section id="gallery" style={{
        padding:"100px 24px",
        background:"linear-gradient(180deg, #FAF7F0 0%, #FFF8ED 100%)",
      }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
          <div style={{ textAlign:"center" as const, marginBottom:"64px" }}>
            <SectionLabel>Gallery</SectionLabel>
            <h2 style={{ fontSize:"clamp(28px,4vw,50px)", fontWeight:900, color:"#180d00", letterSpacing:"-0.8px", marginBottom:"16px", fontFamily:serif }}>
              From Our Orchards
            </h2>
            <p style={{ fontSize:"17px", color:"#6a5830", fontFamily:sans, maxWidth:"600px", margin:"0 auto", lineHeight:"1.75" }}>
              A visual journey through the finest mango orchards of Pakistan, captured at the peak of harvest season. The first and the last mango in the box wears the same crown.
            </p>
          </div>
          <div className="columns-3" style={{ gap:"20px", columns: "3 260px" }}>
            {galleryItems.map((img,i)=>(
              <div className="fade-up"
                key={i}
                style={{
                  breakInside:"avoid", marginBottom:"20px",
                  borderRadius:"20px", overflow:"hidden",
                  boxShadow:"6px 6px 20px rgba(0,0,0,0.12), -3px -3px 12px rgba(255,255,255,0.90), inset 0 1px 0 rgba(255,255,255,0.70)",
                  border:"2px solid rgba(255,255,255,0.80)",
                  cursor:"pointer",
                  transition:"transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onClick={()=>setLightboxSrc(img.src)}
                onMouseEnter={(e)=>{
                  (e.currentTarget as HTMLElement).style.transform="scale(1.025)";
                  (e.currentTarget as HTMLElement).style.boxShadow="10px 12px 30px rgba(0,0,0,0.20), -3px -3px 12px rgba(255,255,255,0.90)";
                }}
                onMouseLeave={(e)=>{
                  (e.currentTarget as HTMLElement).style.transform="scale(1)";
                  (e.currentTarget as HTMLElement).style.boxShadow="6px 6px 20px rgba(0,0,0,0.12), -3px -3px 12px rgba(255,255,255,0.90)";
                }}
              >
                <img
                  src={img.src} alt={img.alt}
                  style={{ width:"100%", display:"block", transition:"transform 0.45s ease" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORDER SECTION ── */}
      <section id="contact" style={{
        padding:"80px 24px",
        background:"linear-gradient(145deg, #FFF8ED 0%, #F4E8D0 100%)",
      }}>
        <div style={{ maxWidth:"860px", margin:"0 auto" }}>
          <div style={{
            ...skeuCard,
            borderRadius:"40px", padding:"64px 48px",
            textAlign:"center" as const,
            boxShadow:"14px 14px 44px rgba(0,0,0,0.12), -7px -7px 28px rgba(255,255,255,0.95), inset 0 2px 0 rgba(255,255,255,0.88)",
          }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:"18px" }}>
              <img src={logoImg} alt="The Chosens" style={{
                width:"88px", height:"88px", objectFit:"contain", borderRadius:"50%",
                boxShadow:"0 4px 20px rgba(252,209,42,0.45), 4px 4px 12px rgba(0,0,0,0.12)",
                
              }} />
            </div>
            <h2 style={{ fontSize:"clamp(24px,4vw,46px)", fontWeight:900, color:"#180d00", letterSpacing:"-0.8px", marginBottom:"16px", fontFamily:serif }}>
              Order Your Premium Mangoes Today
            </h2>
            <p style={{ fontSize:"17px", color:"#6a5830", fontFamily:sans, maxWidth:"500px", margin:"0 auto 38px", lineHeight:"1.75" }}>
              Place your order instantly via WhatsApp. Our team responds within minutes and ensures delivery to your doorstep.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{
              display:"inline-flex", alignItems:"center", gap:"10px",
              padding:"16px 36px", borderRadius:"50px",
              color:"#fff", fontSize:"16px", fontFamily:sans, fontWeight:700,
              textDecoration:"none", letterSpacing:"0.3px",
              ...skeuBtnGreen,
              transition:"transform 0.15s ease",
              marginBottom:"28px",
            }}
            onMouseEnter={(e)=>{ (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
            onMouseLeave={(e)=>{ (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
            >
              <WhatsAppIcon size={20} />
              Order on WhatsApp: {WA_PRIMARY}
            </a>
            <div style={{ display:"flex", justifyContent:"center", gap:"40px", flexWrap:"wrap" as const }}>
              <div>
                <div style={{ fontSize:"11px", fontFamily:sans, color:"#9a8a60", fontWeight:700, letterSpacing:"1px", textTransform:"uppercase" as const, marginBottom:"4px" }}>Primary</div>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize:"15px", fontFamily:sans, color:C.green, fontWeight:700, textDecoration:"none" }}>{WA_PRIMARY}</a>
              </div>
              <div>
                <div style={{ fontSize:"11px", fontFamily:sans, color:"#9a8a60", fontWeight:700, letterSpacing:"1px", textTransform:"uppercase" as const, marginBottom:"4px" }}>Secondary</div>
                <div style={{ fontSize:"15px", fontFamily:sans, color:"#6a5830", fontWeight:600 }}>{WA_SECONDARY}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer" style={{
        background:"linear-gradient(145deg, #FAF7F0 0%, #F0E8D0 100%)",
        borderTop:"1px solid rgba(252,209,42,0.18)",
        padding:"80px 24px 40px",
        boxShadow:"inset 0 4px 28px rgba(0,0,0,0.04)",
      }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
          <div className="footer-grid" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:"48px", marginBottom:"60px" }}>

            {/* Brand */}
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"20px" }}>
                <img src={logoImg} alt="The Chosens" style={{
                  width:"54px", height:"54px", objectFit:"contain", borderRadius:"50%",
                  boxShadow:"0 3px 14px rgba(252,209,42,0.45), 3px 3px 8px rgba(0,0,0,0.10)",
                }} />
                <div>
                  <div style={{ fontSize:"18px", fontWeight:800, color:C.deepGreen, fontFamily:serif }}>The Chosens</div>
                  <div style={{ fontSize:"10px", fontFamily:sans, color:"#8a7a50", letterSpacing:"1.5px", fontWeight:600, textTransform:"uppercase" as const }}>Premium Mangoes</div>
                </div>
              </div>
              <p style={{ fontSize:"14px", fontFamily:sans, color:"#6a5830", lineHeight:"1.80", marginBottom:"24px", maxWidth:"280px" }}>
                Selectively Chosen. Devotedly Delivered.
                <br /><br />
                Pakistan's finest mangoes delivered fresh to your doorstep with unwavering commitment to quality and authenticity.
              </p>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{
                display:"inline-flex", alignItems:"center", gap:"8px",
                padding:"10px 22px", borderRadius:"30px",
                color:"#fff", fontSize:"13px", fontFamily:sans, fontWeight:700,
                textDecoration:"none", letterSpacing:"0.2px",
                ...skeuBtnGreen,
              }}>
                <WhatsAppIcon size={13} />
                Order Now
              </a>
            </div>

            {/* Varieties */}
            <div>
              <h4 style={{ fontSize:"13px", fontWeight:700, color:"#180d00", letterSpacing:"1.5px", textTransform:"uppercase" as const, marginBottom:"20px", fontFamily:sans }}>
                Our Varieties
              </h4>
              {["Mosmi Chaunsa","White Chaunsa","Anwar Ratol","Saroli","Dusehri","Langra","Nawabpuri","Sindhri","Desi Mango"].map(v=>(
                <div key={v} style={{ marginBottom:"8px" }}>
                  <a href="#our-mangoes" style={{ fontSize:"13px", fontFamily:sans, color:"#6a5830", textDecoration:"none", transition:"color 0.2s" }}
                    onMouseEnter={(e)=>{ (e.currentTarget as HTMLElement).style.color=C.green; }}
                    onMouseLeave={(e)=>{ (e.currentTarget as HTMLElement).style.color="#6a5830"; }}
                  >{v}</a>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontSize:"13px", fontWeight:700, color:"#180d00", letterSpacing:"1.5px", textTransform:"uppercase" as const, marginBottom:"20px", fontFamily:sans }}>
                Quick Links
              </h4>
              {[["Home","#home"],["Our Mangoes","#our-mangoes"],["Farm Journey","#farm-journey"],["Gallery","#gallery"],["Why The Chosens","#why-the-chosens"],["Contact","#contact"]].map(([l,h])=>(
                <div key={l} style={{ marginBottom:"8px" }}>
                  <a href={h} style={{ fontSize:"13px", fontFamily:sans, color:"#6a5830", textDecoration:"none", transition:"color 0.2s" }}
                    onMouseEnter={(e)=>{ (e.currentTarget as HTMLElement).style.color=C.green; }}
                    onMouseLeave={(e)=>{ (e.currentTarget as HTMLElement).style.color="#6a5830"; }}
                  >{l}</a>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontSize:"13px", fontWeight:700, color:"#180d00", letterSpacing:"1.5px", textTransform:"uppercase" as const, marginBottom:"20px", fontFamily:sans }}>
                Contact Us
              </h4>
              <div style={{ display:"flex", flexDirection:"column" as const, gap:"18px" }}>
                <div>
                  <div style={{ fontSize:"10px", fontFamily:sans, color:"#9a8a60", fontWeight:700, letterSpacing:"1px", textTransform:"uppercase" as const, marginBottom:"4px" }}>WhatsApp Primary</div>
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize:"14px", fontFamily:sans, color:C.green, fontWeight:700, textDecoration:"none" }}>{WA_PRIMARY}</a>
                </div>
                <div>
                  <div style={{ fontSize:"10px", fontFamily:sans, color:"#9a8a60", fontWeight:700, letterSpacing:"1px", textTransform:"uppercase" as const, marginBottom:"4px" }}>WhatsApp Secondary</div>
                  <div style={{ fontSize:"14px", fontFamily:sans, color:"#6a5830", fontWeight:600 }}>{WA_SECONDARY}</div>
                </div>
                <div>
                  <div style={{ fontSize:"10px", fontFamily:sans, color:"#9a8a60", fontWeight:700, letterSpacing:"1px", textTransform:"uppercase" as const, marginBottom:"10px" }}>Follow Us</div>
                  {/* Follow icons removed per request */}
                  <div />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            height:"1px",
            background:"linear-gradient(90deg, transparent, rgba(180,125,0,0.22) 30%, rgba(180,125,0,0.22) 70%, transparent)",
            marginBottom:"32px",
          }} />

          {/* Copyright */}
          <div className="footer-bottom" style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap" as const, gap:"12px" }}>
            <p style={{ fontSize:"13px", fontFamily:sans, color:"#9a8a60" }}>
              2024 The Chosens. All rights reserved. Pakistan's Finest Mangoes.
            </p>
            <p style={{ fontSize:"13px", fontFamily:sans, color:"#9a8a60" }}>
              Designed by{" "}
              <a
                href="https://linkin.bio/ahmadraza/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color:C.green, textDecoration:"none", fontWeight:700 }}
              >
                Ahmad Raza
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        className="floating-whatsapp"
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position:"fixed", bottom:"28px", right:"28px", zIndex:999,
          width:"62px", height:"62px", borderRadius:"50%",
          background:"linear-gradient(145deg, #2FD871, #25D366, #128C7E)",
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:"6px 6px 20px rgba(0,110,60,0.42), -3px -3px 12px rgba(255,255,255,0.40), inset 0 2px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.10)",
          border:"2px solid rgba(255,255,255,0.35)",
          textDecoration:"none",
          transition:"transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e)=>{
          (e.currentTarget as HTMLElement).style.transform="scale(1.12)";
          (e.currentTarget as HTMLElement).style.boxShadow="8px 8px 24px rgba(0,110,60,0.52), -3px -3px 12px rgba(255,255,255,0.40)";
        }}
        onMouseLeave={(e)=>{
          (e.currentTarget as HTMLElement).style.transform="scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow="6px 6px 20px rgba(0,110,60,0.42), -3px -3px 12px rgba(255,255,255,0.40)";
        }}
      >
        <WhatsAppIcon size={30} />
      </a>

      {/* ── LIGHTBOX ── */}
      {lightboxSrc && (
        <div
          style={{
            position:"fixed", inset:0, zIndex:9999,
            background:"rgba(10,5,0,0.93)",
            display:"flex", alignItems:"center", justifyContent:"center",
            padding:"24px", backdropFilter:"blur(10px)", WebkitBackdropFilter:"blur(10px)",
          }}
          onClick={()=>setLightboxSrc(null)}
        >
          <div
            style={{ position:"relative", maxWidth:"90vw", maxHeight:"90vh" }}
            onClick={(e)=>e.stopPropagation()}
          >
            <img
              src={lightboxSrc}
              alt="Gallery preview"
              style={{
                maxWidth:"90vw", maxHeight:"85vh",
                objectFit:"contain", display:"block",
                borderRadius:"24px",
                boxShadow:"0 24px 80px rgba(0,0,0,0.65)",
                border:"2px solid rgba(255,255,255,0.14)",
              }}
            />
            <button
              onClick={()=>setLightboxSrc(null)}
              style={{
                position:"absolute", top:"-16px", right:"-16px",
                width:"46px", height:"46px", borderRadius:"50%",
                background:"linear-gradient(145deg,#FDEF94,#FCD12A)",
                border:"none", cursor:"pointer",
                display:"flex", alignItems:"center", justifyContent:"center",
                boxShadow:"4px 4px 14px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.55)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill={C.deepGreen}>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
