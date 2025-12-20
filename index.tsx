
import React, { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ShoppingBag, Search, Plus, Minus, X, Trash2, 
  MessageCircle, Phone, MapPin, User, ChevronRight, Truck
} from 'lucide-react';

// --- DATOS DE LOS 13 PRODUCTOS (IMAGEN PROPORCIONADA) ---
const PRODUCTS = [
  { id: 1, name: "HIDROLAVADORA", price: 89900, img: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/068e6304-ae00-41be-bd1c-fbd0324f8b33.webp" },
  { id: 2, name: "SECADOR AGUACATE", price: 25000, img: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/bc276c14-ebab-4f40-9861-3fdff091e7ca.webp" },
  { id: 3, name: "TOPE DE PUERTA", price: 7500, img: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/2c6c0062-a5ee-4288-a75b-9e585eb589a2.webp" },
  { id: 4, name: "CEPILLO SECADOR 5 EN 1", price: 62500, img: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/deb97f30-3aa5-4a9c-9256-1e7eec62f5fe.webp" },
  { id: 5, name: "RELOJ DE PARED 3D (80x100CM)", price: 31500, img: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/b9bf4384-d833-4675-a8ca-11ba81f8e1d4.webp" },
  { id: 6, name: "COMBO TAPETE ULTRA ABSORBENTE", price: 22000, img: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/103607b0-5960-4c69-8828-c79fc64e7caa.webp" },
  { id: 7, name: "DISPENSADOR DE JABÓN MULTIFUNCIONAL", price: 19000, img: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/0bbad092-5b29-47b1-8437-4473005d0625.webp" },
  { id: 8, name: "CÁMARA DE SEGURIDAD IK100", price: 46000, img: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/1b67a83c-f4c5-464e-9658-c52364796d71.webp" },
  { id: 9, name: "ESTANTE ESQUINERO DE BAÑO", price: 40000, img: "https://d2nagnwby8accc.cloudfront.net/volumes/product/2023/11/02/7f7e9f3b-5a02-4f3b-85d1-d92231c59e7e.webp" },
  { id: 10, name: "TUBO MULTIFUNCIONAL 90 A 160 CM", price: 18900, img: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/653cdb2b-a1bb-4c60-85f9-0a62e4ecfb28.webp" },
  { id: 11, name: "TUBO TENDEDERO PEQUEÑO 60-100 CM", price: 16900, img: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/057aecf9-d31a-4598-9eaa-b0065f4996d4.webp" },
  { id: 12, name: "TUBO MULTIFUNCIONAL GRANDE 160-300 CM", price: 27900, img: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/653cdb2b-a1bb-4c60-85f9-0a62e4ecfb28.webp" },
  { id: 13, name: "LÁMPARA SOLAR PANEL", price: 31000, img: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/548c4770-21d8-42e7-ae50-4fc368e1ad2a.webp" }
];

const SHOP_PHONE = "573206064030";

const formatPrice = (val: number) => 
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);

const App = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [customer, setCustomer] = useState({ name: '', phone: '', city: '', address: '' });

  // Cargar carrito guardado
  useEffect(() => {
    const saved = localStorage.getItem('innova_mini_cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // Guardar carrito
  useEffect(() => {
    localStorage.setItem('innova_mini_cart', JSON.stringify(cart));
  }, [cart]);

  const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const addToCart = (p: any) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === p.id);
      if (exists) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i).filter(i => i.qty > 0));
  };

  const sendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = `*NUEVO PEDIDO MAYORISTA - IN-NOVA*\n\n`;
    msg += `👤 *Cliente:* ${customer.name}\n`;
    msg += `📞 *WhatsApp:* ${customer.phone}\n`;
    msg += `📍 *Ubicación:* ${customer.city} - ${customer.address}\n\n`;
    msg += `🛒 *Detalle del Pedido:*\n`;
    cart.forEach(i => msg += `- ${i.qty}x ${i.name} (${formatPrice(i.price * i.qty)})\n`);
    msg += `\n💰 *TOTAL A PAGAR: ${formatPrice(total)}*`;
    
    const url = `https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav px-4 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-extrabold text-white">Distribuciones In-Nova</h1>
            <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Precios de Distribuidor</p>
          </div>
          <button onClick={() => setIsCartOpen(true)} className="relative p-2.5 bg-slate-800 rounded-2xl text-white hover:bg-slate-700 transition-colors">
            <ShoppingBag size={22} />
            {cartCount > 0 && <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg">{cartCount}</span>}
          </button>
        </div>
      </nav>

      {/* HEADER & SEARCH */}
      <div className="pt-28 pb-10 px-4 max-w-5xl mx-auto">
        <div className="mb-10 text-center animate-item">
            <h2 className="text-3xl font-black text-white mb-2">Catálogo Mayorista</h2>
            <p className="text-slate-400 text-sm">Productos seleccionados con la mejor utilidad del mercado.</p>
        </div>

        <div className="relative mb-12 animate-item">
          <Search className="absolute left-4 top-4 text-slate-500" size={20} />
          <input 
            type="text" 
            placeholder="¿Qué producto buscas hoy?" 
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-inner"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* LISTA DE PRODUCTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, idx) => (
            <div key={p.id} className="bg-slate-900/40 border border-slate-800 rounded-[32px] overflow-hidden animate-item" style={{animationDelay: `${idx * 0.05}s`}}>
              <div className="h-48 overflow-hidden bg-slate-800 relative group">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-cyan-400 border border-white/5">
                  Stock Disponible
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-white text-sm mb-4 h-10 line-clamp-2 uppercase leading-snug">{p.name}</h3>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">Precio Distribuidor</p>
                    <p className="text-2xl font-black text-white leading-none">{formatPrice(p.price)}</p>
                  </div>
                  <button onClick={() => addToCart(p)} className="bg-cyan-600 hover:bg-cyan-500 p-3.5 rounded-2xl text-white transition-all active:scale-90 shadow-lg shadow-cyan-600/20">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CARRITO LATERAL */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-[#0f172a] h-full shadow-2xl flex flex-col p-6 border-l border-slate-800 animate-item">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black text-white flex items-center gap-2"><ShoppingBag className="text-cyan-500" /> Mi Pedido</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-slate-500 hover:text-white"><X size={28} /></button>
            </div>

            <div className="flex-grow overflow-y-auto space-y-4 pr-2">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-slate-500 gap-4 opacity-50">
                   <ShoppingBag size={64} />
                   <p className="font-bold">No has agregado productos</p>
                </div>
              ) : (
                cart.map(i => (
                  <div key={i.id} className="flex gap-4 bg-slate-900/50 p-4 rounded-3xl border border-slate-800/50 items-center">
                    <img src={i.img} className="w-16 h-16 object-cover rounded-2xl border border-white/5" />
                    <div className="flex-grow">
                      <h4 className="text-xs font-bold text-white uppercase leading-tight">{i.name}</h4>
                      <p className="text-cyan-400 font-black text-sm mt-1">{formatPrice(i.price)}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <button onClick={() => updateQty(i.id, 1)} className="text-white bg-slate-800 p-1.5 rounded-lg"><Plus size={14} /></button>
                       <span className="text-white text-xs font-black">{i.qty}</span>
                       <button onClick={() => updateQty(i.id, -1)} className="text-slate-500 hover:text-red-500"><Minus size={14} /></button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-slate-500 uppercase text-[10px] font-black tracking-widest">Total del Pedido</span>
                    <span className="text-3xl font-black text-white block">{formatPrice(total)}</span>
                  </div>
                </div>
                <button onClick={() => setShowCheckout(true)} className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-black py-5 rounded-[20px] text-lg flex items-center justify-center gap-2 shadow-xl shadow-cyan-600/20 active:scale-95 transition-all">
                  Completar Pedido <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FORMULARIO FINAL (MODAL) */}
      {showCheckout && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowCheckout(false)}></div>
          <form onSubmit={sendOrder} className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-[40px] p-8 shadow-2xl animate-item">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-black text-white flex items-center gap-2"><MessageCircle className="text-green-500" /> Datos de Envío</h3>
                <button type="button" onClick={() => setShowCheckout(false)} className="text-slate-500"><X size={24} /></button>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="relative">
                <User className="absolute left-4 top-4 text-slate-500" size={18} />
                <input required placeholder="Nombre Completo / Empresa" className="w-full bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500" value={customer.name} onChange={e => setCustomer({...customer, name: e.target.value})} />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-4 text-slate-500" size={18} />
                <input required placeholder="Teléfono WhatsApp" className="w-full bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500" value={customer.phone} onChange={e => setCustomer({...customer, phone: e.target.value})} />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-slate-500" size={18} />
                <input required placeholder="Ciudad de Destino" className="w-full bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500" value={customer.city} onChange={e => setCustomer({...customer, city: e.target.value})} />
              </div>
              <textarea required placeholder="Dirección exacta para entrega" className="w-full bg-slate-800 border-none rounded-2xl p-4 text-white placeholder:text-slate-500 min-h-[80px]" value={customer.address} onChange={e => setCustomer({...customer, address: e.target.value})} />
            </div>

            <div className="bg-slate-950/50 p-6 rounded-3xl mb-8 flex justify-between items-center border border-slate-800/50">
                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">A pagar en WhatsApp</span>
                <span className="text-2xl font-black text-cyan-500">{formatPrice(total)}</span>
            </div>

            <button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-5 rounded-[24px] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-green-600/20 text-lg">
              <MessageCircle size={24} /> Confirmar vía WhatsApp
            </button>
          </form>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-20 py-16 border-t border-slate-800/50 text-center">
         <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">In-Nova Distribuciones © 2024</p>
         <div className="flex justify-center gap-8 text-slate-600">
            <Truck size={20} />
            <ShoppingBag size={20} />
            <Phone size={20} />
         </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
