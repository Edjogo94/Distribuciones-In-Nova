
import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, ShoppingBag, Plus, X, Minus, Trash2, 
  MessageCircle, Check, ArrowDown, Gift, Smartphone, Home, Zap, Palette, 
  Truck, Heart, Dog, Wrench, CreditCard, User, ChevronRight,
  TrendingUp, ShoppingCart, SearchX, MapPin, Phone, Package, Star
} from 'lucide-react';
import { Product, CartItem, CustomerData } from './types';
import { SHOP_DATA, FREE_SHIPPING_THRESHOLD, GLOBAL_STYLES, InNovaLogo } from './constants';
import { normalizeText, formatPrice } from './utils';

const App: React.FC = () => {
  // --- STATE ---
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'Transferencia'
  });

  // --- INITIAL LOAD ---
  useEffect(() => {
    const savedCart = localStorage.getItem('innova_cart');
    const savedWishlist = localStorage.getItem('innova_wishlist');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // --- PERSISTENCE ---
  useEffect(() => {
    localStorage.setItem('innova_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('innova_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // --- FILTER LOGIC ---
  const filteredProducts = useMemo(() => {
    const terms = normalizeText(searchTerm).split(" ").filter(t => t.length > 0);
    return SHOP_DATA.products.filter(product => {
      if (showOnlyFavorites && !wishlist.includes(product.id)) return false;
      
      const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
      if (!matchesCategory) return false;
      
      if (terms.length === 0) return true;
      
      const productText = normalizeText(`${product.name} ${product.description} ${product.category}`);
      return terms.every(term => productText.includes(term));
    });
  }, [activeCategory, searchTerm, wishlist, showOnlyFavorites]);

  // --- HANDLERS ---
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showNotification(`¡${product.name} agregado!`);
    if (selectedProduct) setSelectedProduct(null); 
  };

  const toggleWishlist = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation();
    setWishlist(prev => {
      if (prev.includes(productId)) {
        showNotification("Eliminado de favoritos");
        return prev.filter(id => id !== productId);
      }
      showNotification("¡Añadido a favoritos!");
      return [...prev, productId];
    });
  };

  const removeFromCart = (id: number) => setCart(prev => prev.filter(item => item.id !== id));
  
  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) return { ...item, qty: Math.max(0, item.qty + delta) };
      return item;
    }).filter(item => item.qty > 0));
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomerData(prev => ({ ...prev, [name]: value }));
  };

  const calculateShipping = () => {
    const city = normalizeText(customerData.city);
    if (city.includes("barranquilla") || city.includes("soledad")) return 0;
    return 12000;
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const sendOrderWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const shippingCost = calculateShipping();
    const finalTotal = cartTotal + shippingCost;
    let message = `Hola *Distribuciones In-Nova*, quiero realizar el siguiente pedido mayorista:\n\n`;
    message += `📋 *Datos del Cliente:*\n`;
    message += `Nombre: ${customerData.name}\n`;
    message += `Teléfono: ${customerData.phone}\n`;
    message += `Dirección: ${customerData.address}, ${customerData.city}\n\n`;
    message += `🛒 *Productos:*\n`;
    cart.forEach(item => {
      message += `▪️ ${item.qty}x ${item.name} - ${formatPrice(item.price * item.qty)}\n`;
    });
    message += `\n🚚 *Envío:* ${shippingCost === 0 ? 'GRATIS' : formatPrice(shippingCost)}\n`;
    message += `💳 *Método de Pago:* ${customerData.paymentMethod}\n`;
    message += `💰 *TOTAL A PAGAR: ${formatPrice(finalTotal)}*`;
    
    const url = `https://wa.me/${SHOP_DATA.info.phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsCheckoutOpen(false);
    setCart([]);
    showNotification("¡Pedido enviado con éxito!");
  };

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'Juguetes Kids': return <Gift size={16} />;
      case 'Tecnología': return <Smartphone size={16} />;
      case 'Hogar': return <Home size={16} />;
      case 'Belleza': return <Palette size={16} />;
      case 'Papelería': return <Palette size={16} />;
      case 'Salud': return <Heart size={16} />;
      case 'Mascotas': return <Dog size={16} />;
      case 'Herramientas': return <Wrench size={16} />;
      default: return <Zap size={16} />;
    }
  };

  return (
    <div className="min-h-screen pb-20 hero-pattern text-slate-200 font-sans selection:bg-cyan-500/30">
      <style>{GLOBAL_STYLES}</style>
      
      {/* NOTIFICATION TOAST */}
      {notification && (
        <div className="fixed top-24 right-4 z-[100] bg-cyan-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/20 flex items-center gap-3 animate-slideInRight font-medium">
          <Check size={20} className="bg-white text-cyan-500 rounded-full p-0.5" />
          {notification}
        </div>
      )}

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => {
            window.scrollTo({top: 0, behavior: 'smooth'});
            setSearchTerm("");
            setActiveCategory("Todos");
            setShowOnlyFavorites(false);
          }}>
            <div className="w-10 h-10"><InNovaLogo /></div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white leading-none tracking-tight">{SHOP_DATA.info.name}</h1>
              <p className="text-[10px] text-cyan-400 font-medium tracking-widest uppercase mt-0.5">Tienda Mayorista & Detal</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
              className={`p-2.5 rounded-xl transition-all relative ${showOnlyFavorites ? 'bg-red-500/20 text-red-500 border border-red-500/30' : 'text-slate-400 hover:bg-slate-800'}`}
              title="Favoritos"
            >
              <Heart size={22} fill={showOnlyFavorites ? "currentColor" : "none"} />
              {wishlist.length > 0 && !showOnlyFavorites && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            <button onClick={() => setIsCartOpen(true)} className="relative p-3 hover:bg-slate-800 rounded-xl transition-all group">
              <ShoppingBag className="text-slate-300 group-hover:text-cyan-400 transition-colors" size={24} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      {!searchTerm && !showOnlyFavorites && (
        <div className="pt-24 pb-8 px-4 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="relative z-10 max-w-xl text-center md:text-left animate-fadeInUp">
              <span className="inline-flex items-center gap-2 py-1 px-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-bold mb-6 text-cyan-400 uppercase tracking-wider">
                <Truck size={12} fill="currentColor" /> Envíos Nacionales
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                Distribuciones <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">In-Nova</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 font-light leading-relaxed">
                Tecnología, hogar y tendencias con los mejores precios del mercado. Haz crecer tu negocio con nosotros.
              </p>
              <button onClick={()=> document.getElementById('menu-section')?.scrollIntoView({behavior: 'smooth'})} className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold shadow-xl shadow-cyan-500/10 hover:scale-105 hover:bg-cyan-50 transition-all flex items-center gap-2 mx-auto md:mx-0">
                Ver Productos <ArrowDown size={18} />
              </button>
            </div>
            <div className="relative z-10 w-full md:w-1/2 flex justify-center h-48 md:h-64 animate-pop-in">
                 <div className="w-48 h-48 md:w-64 md:h-64 opacity-80 filter drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    <InNovaLogo />
                 </div>
            </div>
          </div>
        </div>
      )}

      {/* SEARCH AND CATEGORIES */}
      <div id="menu-section" className="max-w-7xl mx-auto px-4 mb-8 sticky top-[70px] z-40 bg-[#0b1121]/95 backdrop-blur-xl py-4 -mx-4 md:mx-auto md:rounded-2xl border-y border-slate-800 md:border-none">
          <div className="px-4 mb-4 relative max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Busca marcas o productos..." 
                className="w-full bg-slate-800/80 border border-slate-700/50 rounded-2xl py-3.5 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-slate-500 transition-all shadow-inner"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  if (showOnlyFavorites) setShowOnlyFavorites(false);
                }}
              />
              <div className="absolute left-8 top-4 text-slate-400"><Search size={20} /></div>
              {searchTerm && <button onClick={() => setSearchTerm("")} className="absolute right-8 top-3.5 text-slate-400 hover:text-white"><X size={20} /></button>}
          </div>

          <div className="flex gap-3 overflow-x-auto hide-scrollbar px-4 pb-2">
            {SHOP_DATA.categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowOnlyFavorites(false);
                }}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 border ${
                  activeCategory === cat && !showOnlyFavorites
                  ? 'bg-cyan-600 border-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105' 
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-750 hover:border-slate-600 hover:text-slate-200'
                }`}
              >
                 {cat !== "Todos" && getCategoryIcon(cat)} {cat}
              </button>
            ))}
          </div>
      </div>

      {/* PRODUCTS DISPLAY */}
      <main className="max-w-7xl mx-auto px-4 pb-24">
        {showOnlyFavorites && (
          <div className="mb-8 flex items-center justify-between bg-red-500/10 border border-red-500/20 p-4 rounded-2xl animate-fadeInUp">
            <h2 className="text-xl font-bold text-red-400 flex items-center gap-2"><Heart size={20} fill="currentColor" /> Mis Favoritos</h2>
            <button onClick={() => setShowOnlyFavorites(false)} className="text-slate-400 hover:text-white text-sm font-bold">Cerrar</button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} onClick={() => setSelectedProduct(product)}
              className="bg-slate-800/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group hover:shadow-cyan-500/10 cursor-pointer relative flex flex-col h-full animate-fadeInUp"
            >
              <button 
                onClick={(e) => toggleWishlist(e, product.id)} 
                className="absolute top-3 right-3 z-20 p-2.5 bg-black/40 hover:bg-slate-800 rounded-full backdrop-blur-md transition-all border border-white/5"
              >
                <Heart size={18} className={`transition-all ${wishlist.includes(product.id) ? "fill-red-500 text-red-500 scale-110" : "text-white opacity-80"}`} />
              </button>

              <div className="relative h-60 overflow-hidden bg-slate-800">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/600x400/1F2937/FFFFFF?text=IN-NOVA`; }}
                />
                
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {product.popular && (
                    <span className="bg-yellow-500/90 text-yellow-950 text-[10px] font-black uppercase px-2 py-1 rounded-md shadow-lg flex items-center gap-1 backdrop-blur-md">
                      <TrendingUp size={10} /> Popular
                    </span>
                  )}
                  {product.volumePrice && (
                    <span className="bg-purple-600/90 text-white text-[10px] font-black uppercase px-2 py-1 rounded-md shadow-lg flex items-center gap-1 backdrop-blur-md border border-purple-400/30">
                      <Package size={10} /> Mayorista Plus
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-3">
                  <p className="text-cyan-500 text-[10px] font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5 opacity-80">
                    {getCategoryIcon(product.category)} {product.category}
                  </p>
                  <h3 className="font-bold text-lg text-white leading-tight line-clamp-2">{product.name}</h3>
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter mb-0.5">Precio Mayorista</p>
                    <span className="text-2xl font-black text-white">{formatPrice(product.price)}</span>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                    className="w-12 h-12 bg-cyan-600 hover:bg-cyan-500 rounded-2xl text-white shadow-lg shadow-cyan-600/20 transition-all active:scale-90 flex items-center justify-center pulse-cyan"
                  >
                    <Plus size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 animate-fadeInUp">
            <div className="inline-block p-8 rounded-full bg-slate-800/50 mb-6 border border-slate-700/50">
              <SearchX size={56} className="text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-300">No hay productos que coincidan</h3>
            <p className="text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">Prueba con otros términos de búsqueda o revisa tus filtros de categorías.</p>
            <button onClick={() => {setSearchTerm(""); setActiveCategory("Todos"); setShowOnlyFavorites(false);}} className="mt-8 px-8 py-3 bg-slate-800 text-cyan-400 font-bold rounded-xl hover:bg-slate-750 transition-colors border border-slate-700">
              Reiniciar Búsqueda
            </button>
          </div>
        )}
      </main>

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href={`https://wa.me/${SHOP_DATA.info.phone}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-90 flex items-center gap-2 group border-4 border-[#0b1121]"
      >
        <MessageCircle size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold text-sm whitespace-nowrap">¿Necesitas ayuda?</span>
      </a>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-pop-in">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 hover:bg-slate-700 text-white rounded-full transition-colors border border-white/5"><X size={20} /></button>
            
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-800 relative">
              <img 
                src={selectedProduct.image} 
                className="w-full h-full object-cover" 
                onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/600x400/1F2937/FFFFFF?text=IN-NOVA`; }}
              />
            </div>

            <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
              <div className="flex-grow">
                <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg text-xs font-black mb-4 uppercase tracking-widest border border-cyan-500/20">
                  {selectedProduct.category}
                </span>
                <h2 className="text-3xl font-black text-white mb-4 leading-tight">{selectedProduct.name}</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-4 border-slate-700 pl-5 italic">{selectedProduct.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-5 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl text-center shadow-inner">
                    <p className="text-cyan-400 text-[10px] uppercase font-black mb-1">Precio Mayorista</p>
                    <p className="text-2xl font-black text-white">{formatPrice(selectedProduct.price)}</p>
                  </div>
                  <div className="p-5 bg-slate-800/80 border border-slate-700 rounded-2xl text-center">
                    <p className="text-slate-500 text-[10px] uppercase font-black mb-1">Precio Sugerido</p>
                    <p className="text-xl font-bold text-slate-300">{formatPrice(selectedProduct.retailPrice)}</p>
                  </div>
                </div>

                {selectedProduct.volumePrice && (
                  <div className="p-5 bg-purple-500/10 border border-purple-500/30 rounded-2xl mb-8 flex items-center gap-5">
                    <div className="bg-purple-600 p-3 rounded-2xl shadow-lg">
                      <Package className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-purple-300 text-[10px] uppercase font-black mb-0.5">Precio por Paca / Volumen</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-black text-white">{formatPrice(selectedProduct.volumePrice)}</p>
                        {selectedProduct.volumeInfo && <span className="text-xs text-purple-200 font-bold bg-purple-500/20 px-2 py-0.5 rounded-full">{selectedProduct.volumeInfo}</span>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => addToCart(selectedProduct)}
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-black py-5 rounded-2xl text-lg shadow-xl shadow-cyan-600/30 flex items-center justify-center gap-3 transition-all active:scale-95 mt-6"
              >
                <Plus size={24} /> Agregar al Pedido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SIDE CART */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-slate-900 h-full shadow-2xl flex flex-col animate-slideInRight border-l border-slate-800">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-md z-10">
              <h2 className="text-xl font-black text-white flex items-center gap-3"><ShoppingBag className="text-cyan-500" /> Tu Pedido</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"><X size={24} /></button>
            </div>

            {/* FREE SHIPPING PROGRESS */}
            {cart.length > 0 && (
              <div className="px-6 py-5 bg-slate-800/30 border-b border-slate-800">
                <div className="flex justify-between text-[11px] font-black uppercase mb-2.5">
                  <span className={cartTotal >= FREE_SHIPPING_THRESHOLD ? "text-green-400" : "text-slate-400"}>
                    {cartTotal >= FREE_SHIPPING_THRESHOLD 
                      ? "¡Envío GRATIS en Barranquilla activado! 🎉" 
                      : `Faltan ${formatPrice(FREE_SHIPPING_THRESHOLD - cartTotal)} para envío gratis`}
                  </span>
                  <span className="text-cyan-400">{Math.min(100, Math.round((cartTotal / FREE_SHIPPING_THRESHOLD) * 100))}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-cyan-600 to-green-500 h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(34,211,238,0.3)]" 
                    style={{ width: `${Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100)}%` }}
                  ></div>
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-slate-500 space-y-5">
                  <div className="p-8 bg-slate-800/50 rounded-full border border-slate-700/50 shadow-inner"><ShoppingCart size={64} className="opacity-20" /></div>
                  <p className="text-xl font-bold text-slate-300">Tu pedido está vacío</p>
                  <p className="text-sm max-w-[240px] mx-auto leading-relaxed">Aún no has agregado productos. Explora nuestro catálogo mayorista.</p>
                  <button onClick={() => setIsCartOpen(false)} className="mt-4 px-8 py-3 bg-cyan-600/10 text-cyan-400 font-black rounded-xl border border-cyan-500/20 hover:bg-cyan-600 hover:text-white transition-all">
                    Empezar a Comprar
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 bg-slate-800/30 p-4 rounded-3xl border border-slate-700/40 shadow-sm group">
                    <div className="w-24 h-24 bg-slate-800 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-700/50">
                      <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/600x400/1F2937/FFFFFF?text=IN-NOVA`; }} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-white text-sm line-clamp-1 group-hover:text-cyan-400 transition-colors">{item.name}</h4>
                        <p className="text-cyan-400 text-sm font-black mt-1">{formatPrice(item.price)}</p>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-4 bg-slate-900/80 rounded-xl p-1.5 border border-slate-700/50">
                          <button onClick={() => updateQty(item.id, -1)} className="p-1.5 hover:text-cyan-400 text-slate-500 transition-colors"><Minus size={14} /></button>
                          <span className="text-sm font-black w-4 text-center text-white">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="p-1.5 hover:text-cyan-400 text-white transition-colors"><Plus size={14} /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-slate-600 hover:text-red-500 transition-all p-2 bg-slate-900 rounded-xl">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-slate-800 bg-slate-900/80 backdrop-blur-md z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest block mb-1">Subtotal Pedido</span>
                    <span className="text-3xl font-black text-white">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-cyan-500 bg-cyan-500/10 px-2.5 py-1 rounded-full uppercase">Mayorista</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-black py-5 rounded-2xl text-lg shadow-xl shadow-cyan-600/30 flex items-center justify-center gap-3 transition-all active:scale-95 group"
                >
                  Confirmar Pedido <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CHECKOUT MODAL */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-pop-in">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={() => setIsCheckoutOpen(false)}></div>
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-800/50">
              <h3 className="text-xl font-black text-white flex items-center gap-3">
                <MessageCircle className="text-green-500" /> Finalizar en WhatsApp
              </h3>
              <button onClick={() => setIsCheckoutOpen(false)} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"><X size={24} /></button>
            </div>
            
            <div className="p-8 overflow-y-auto">
              <form onSubmit={sendOrderWhatsapp} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Nombre Completo</label>
                    <div className="relative">
                      <User className="absolute left-4 top-4 text-slate-500" size={18} />
                      <input required name="name" value={customerData.name} onChange={handleInputChange} type="text" placeholder="Tu nombre o empresa" className="w-full bg-slate-800/80 border border-slate-700/50 rounded-2xl py-4 px-4 pl-12 text-white focus:ring-2 focus:ring-cyan-500/50 focus:outline-none placeholder:text-slate-600" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Teléfono de Contacto</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-4 text-slate-500" size={18} />
                      <input required name="phone" value={customerData.phone} onChange={handleInputChange} type="tel" placeholder="WhatsApp ej: 300 123 4567" className="w-full bg-slate-800/80 border border-slate-700/50 rounded-2xl py-4 px-4 pl-12 text-white focus:ring-2 focus:ring-cyan-500/50 focus:outline-none placeholder:text-slate-600" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Ciudad</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 text-slate-500" size={18} />
                        <input required name="city" value={customerData.city} onChange={handleInputChange} type="text" placeholder="Ej: Bogotá" className="w-full bg-slate-800/80 border border-slate-700/50 rounded-2xl py-4 px-4 pl-12 text-white focus:ring-2 focus:ring-cyan-500/50 focus:outline-none placeholder:text-slate-600" />
                      </div>
                    </div>
                    <div>
                       <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Pago</label>
                       <div className="relative">
                        <CreditCard className="absolute left-4 top-4 text-slate-500" size={18} />
                        <select name="paymentMethod" value={customerData.paymentMethod} onChange={handleInputChange} className="w-full bg-slate-800/80 border border-slate-700/50 rounded-2xl py-4 px-4 pl-12 text-white focus:ring-2 focus:ring-cyan-500/50 focus:outline-none appearance-none cursor-pointer">
                            <option value="Transferencia">Transferencia</option>
                            <option value="Contraentrega">Contraentrega</option>
                            <option value="Nequi / Daviplata">Nequi / Daviplata</option>
                        </select>
                       </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Dirección Exacta</label>
                    <textarea required name="address" value={customerData.address} onChange={handleInputChange} placeholder="Barrio, calle, número y apto..." rows={3} className="w-full bg-slate-800/80 border border-slate-700/50 rounded-2xl py-4 px-4 text-white focus:ring-2 focus:ring-cyan-500/50 focus:outline-none resize-none placeholder:text-slate-600"></textarea>
                  </div>
                </div>

                <div className="bg-slate-950/50 p-6 rounded-3xl border border-slate-800 space-y-3">
                  <div className="flex justify-between text-slate-500 text-xs font-black uppercase">
                    <span>Subtotal Items</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 text-xs font-black uppercase">
                    <span>Envío</span>
                    <span className={calculateShipping() === 0 ? "text-green-500 font-black" : ""}>
                      {calculateShipping() === 0 ? "GRATIS" : formatPrice(calculateShipping())}
                    </span>
                  </div>
                  <div className="border-t border-slate-800 pt-3 flex justify-between items-center">
                    <span className="font-black text-white text-lg">Total Pedido</span>
                    <span className="text-2xl font-black text-cyan-500">{formatPrice(cartTotal + calculateShipping())}</span>
                  </div>
                </div>

                <button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-5 rounded-2xl text-lg shadow-xl shadow-green-600/30 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95">
                  <MessageCircle size={28} /> Confirmar por WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 hover:opacity-100">
            <InNovaLogo />
          </div>
          <h4 className="text-white font-black text-xl mb-2">{SHOP_DATA.info.name}</h4>
          <p className="text-slate-500 text-sm mb-10 max-w-md mx-auto leading-relaxed">Importadores directos de tecnología y novedades. Despachos desde Barranquilla a toda Colombia.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-3 group">
              <div className="p-4 bg-slate-800 rounded-2xl text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-all"><Package size={24} /></div>
              <span className="text-xs font-black uppercase text-slate-400 tracking-widest">Pagos Seguros</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="p-4 bg-slate-800 rounded-2xl text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-all"><Truck size={24} /></div>
              <span className="text-xs font-black uppercase text-slate-400 tracking-widest">Envíos Rápidos</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="p-4 bg-slate-800 rounded-2xl text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-all"><Smartphone size={24} /></div>
              <span className="text-xs font-black uppercase text-slate-400 tracking-widest">Soporte 24/7</span>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
            <span>© {new Date().getFullYear()} IN-NOVA DISTRIBUCIONES</span>
            <div className="flex gap-6">
              <span className="hover:text-cyan-500 cursor-pointer transition-colors">Términos</span>
              <span className="hover:text-cyan-500 cursor-pointer transition-colors">Privacidad</span>
              <span className="hover:text-cyan-500 cursor-pointer transition-colors">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
