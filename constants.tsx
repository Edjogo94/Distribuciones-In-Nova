
import React from 'react';
import { ShopData } from './types';

export const FREE_SHIPPING_THRESHOLD = 100000;

export const SHOP_DATA: ShopData = {
  info: {
    name: "Distribuciones In-Nova",
    tagline: "Tu proveedor confiable de novedades y tecnología",
    phone: "573206064030", 
    currency: "COP",
    location: "Envíos a Nivel Nacional"
  },
  categories: ["Todos", "Tecnología", "Hogar", "Juguetes Kids", "Salud", "Belleza", "Herramientas", "Mascotas", "Papelería"],
  products: [
    // --- JUGUETES KIDS (Ampliación) ---
    { id: 101, name: "Juego Aritmético Montessori", description: "Aprende matemáticas jugando con clips y números en madera.", price: 34990, retailPrice: 45000, volumePrice: 29990, volumeInfo: "x 48 unidades", category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/7f377ee1-af4c-4fee-9a0a-7d453d424853.webp", popular: true },
    { id: 104, name: "Tanque de Acrobacias Exciter", description: "Tanque RC 4WD. Dispara balas de agua seguras.", price: 89990, retailPrice: 99990, volumePrice: 85000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/59c1b08a-e3f6-4a05-b4e6-d72541a34820.webp", popular: true },
    { id: 106, name: "Patineta Unicornio / Fantasy", description: "Patineta ajustable con luces LED en las llantas.", price: 75000, retailPrice: 79990, volumePrice: 67000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/0e35bdd6-5e22-4b4c-bd9c-f0c769f643be.webp", popular: true },
    { id: 110, name: "Scooter Capitán América", description: "Scooter estable de 3 ruedas con luces LED.", price: 185000, retailPrice: 195000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/9c5d3ca1-c234-4960-ade8-854d6452d1a6.webp", popular: true },
    { id: 115, name: "Pista de Autos Sprint Track", description: "Pista modular con loopings.", price: 69990, retailPrice: 79990, volumePrice: 65000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/8d7cc9ce-ba4d-42f4-8917-e14c32614177.webp", popular: true },
    { id: 119, name: "Pistola Hidrogel AK", description: "Réplica AK47 hidrogel con modo ráfaga.", price: 65000, retailPrice: 75000, volumePrice: 60000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/6ada237c-ab97-4bdb-8b51-a44ceeff937e.webp", popular: true },
    { id: 132, name: "Proyector de Dibujo Kids", description: "Mesa con proyector para calcar y pintar.", price: 39990, retailPrice: 55000, category: "Juguetes Kids", image: "https://placehold.co/600x400/3B82F6/white?text=Proyector+Dibujo", popular: true },
    { id: 133, name: "Walkie Talkies Camuflados", description: "Set de 2 radios de largo alcance para niños.", price: 45000, retailPrice: 65000, category: "Juguetes Kids", image: "https://placehold.co/600x400/10B981/white?text=Walkie+Talkies" },

    // --- TECNOLOGÍA (Ampliación) ---
    { id: 201, name: "Timbre Cámara Inalámbrico", description: "Timbre inteligente WiFi con visión nocturna.", price: 35000, retailPrice: 42000, volumePrice: 32000, volumeInfo: "x 100 unidades", category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/1b67a83c-f4c5-464e-9658-c52364796d71.webp", popular: true },
    { id: 202, name: "Mini Proyector Portátil", description: "Proyector compacto con altavoz integrado.", price: 65000, retailPrice: 75000, volumePrice: 65000, volumeInfo: "x 20 unidades", category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/ccc37113-b165-467e-a66e-40ec8781aa52.webp", popular: true },
    { id: 243, name: "Patineta Eléctrica Smart", description: "Vel máx 25km/h, autonomía 25km. Plegable.", price: 850000, retailPrice: 950000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/42d01c7e-9fe8-4f8e-9788-269eaab934d4.webp", popular: true },
    { id: 247, name: "Audífonos AirPro 3 Gen", description: "Calidad de sonido premium con estuche de carga inalámbrica.", price: 35000, retailPrice: 55000, volumePrice: 28000, category: "Tecnología", image: "https://placehold.co/600x400/FFFFFF/000000?text=Audifonos+AirPro" },
    { id: 248, name: "Parlante Bluetooth 15\"", description: "Parlante de gran tamaño con micrófono para karaoke.", price: 185000, retailPrice: 240000, category: "Tecnología", image: "https://placehold.co/600x400/000000/white?text=Parlante+15+Pulgadas" },
    { id: 249, name: "Mouse Gamer RGB 7200DPI", description: "Sensor óptico de alta precisión con luces personalizables.", price: 15000, retailPrice: 25000, volumePrice: 12000, category: "Tecnología", image: "https://placehold.co/600x400/8B5CF6/white?text=Mouse+Gamer" },

    // --- HOGAR (Ampliación) ---
    { id: 302, name: "Luz LED Solar Exterior", description: "Sensor de movimiento, resistente al agua.", price: 19990, retailPrice: 25000, volumePrice: 15000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/548c4770-21d8-42e7-ae50-4fc368e1ad2a.webp", popular: true },
    { id: 325, name: "Zapatera Metálica 9 Niveles", description: "Estante organizador resistente para 27 pares.", price: 35000, retailPrice: 45000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/653cdb2b-a1bb-4c60-85f9-0a62e4ecfb28.webp", popular: true },
    { id: 427, name: "Air Fryer 4.5L Digital", description: "Freidora de aire sin aceite con panel táctil.", price: 185000, retailPrice: 230000, category: "Hogar", image: "https://placehold.co/600x400/1F2937/white?text=Air+Fryer", popular: true },
    { id: 428, name: "Molino Eléctrico de Café", description: "Cuchillas de acero inoxidable para granos y especias.", price: 45000, retailPrice: 65000, category: "Hogar", image: "https://placehold.co/600x400/78350F/white?text=Molino+Cafe" },
    { id: 429, name: "Organizador Giratorio Especias", description: "Ahorra espacio en tu cocina con este rack 360.", price: 25000, retailPrice: 38000, category: "Hogar", image: "https://placehold.co/600x400/D1D5DB/000000?text=Organizador+Especias" },

    // --- BELLEZA ---
    { id: 501, name: "Plancha Profesional Nano Titanio", description: "Alisado perfecto en una sola pasada hasta 450°F.", price: 55000, retailPrice: 85000, volumePrice: 48000, category: "Belleza", image: "https://placehold.co/600x400/374151/white?text=Plancha+Cabello", popular: true },
    { id: 502, name: "Secador Iónico 3000W", description: "Secado rápido con tecnología de iones para menos frizz.", price: 45000, retailPrice: 70000, category: "Belleza", image: "https://placehold.co/600x400/EC4899/white?text=Secador+Cabello" },
    { id: 503, name: "Combo Patillera + Máquina", description: "Kit de corte profesional recargable con accesorios.", price: 65000, retailPrice: 95000, category: "Belleza", image: "https://placehold.co/600x400/D1D5DB/000000?text=Kit+Barberia", popular: true },
    { id: 504, name: "Limpiador Facial Ultrasónico", description: "Exfoliación profunda y remoción de puntos negros.", price: 28000, retailPrice: 45000, category: "Belleza", image: "https://placehold.co/600x400/F9A8D4/000000?text=Limpiador+Facial" },

    // --- SALUD ---
    { id: 601, name: "Masajeador de Cuello Shiatsu", description: "Calor infrarrojo y nodos de rotación profunda.", price: 65000, retailPrice: 95000, category: "Salud", image: "https://placehold.co/600x400/1E293B/white?text=Masajeador+Cuello", popular: true },
    { id: 602, name: "Pistola de Masaje Pro", description: "6 niveles de intensidad y 4 cabezales intercambiables.", price: 55000, retailPrice: 85000, volumePrice: 49000, category: "Salud", image: "https://placehold.co/600x400/000000/white?text=Pistola+Masaje" },
    { id: 603, name: "Irrigador Dental Portátil", description: "Limpieza interdental profunda con chorro de agua.", price: 42000, retailPrice: 65000, category: "Salud", image: "https://placehold.co/600x400/60A5FA/white?text=Irrigador+Dental" },
    { id: 604, name: "Corrector de Postura Inteligente", description: "Vibra cuando detecta una mala posición de la espalda.", price: 25000, retailPrice: 40000, category: "Salud", image: "https://placehold.co/600x400/94A3B8/white?text=Corrector+Postura" },

    // --- HERRAMIENTAS ---
    { id: 701, name: "Taladro Inalámbrico 21V", description: "Incluye 2 baterías, maletín y set de brocas.", price: 145000, retailPrice: 195000, category: "Herramientas", image: "https://placehold.co/600x400/F59E0B/white?text=Taladro+21V", popular: true },
    { id: 702, name: "Nivel Láser Autonivelante", description: "Líneas verdes de alta visibilidad para construcción.", price: 85000, retailPrice: 125000, category: "Herramientas", image: "https://placehold.co/600x400/10B981/white?text=Nivel+Laser" },
    { id: 703, name: "Set Destornilladores 115 en 1", description: "Kit de precisión para reparación de celulares y PCs.", price: 28000, retailPrice: 45000, volumePrice: 22000, category: "Herramientas", image: "https://placehold.co/600x400/3B82F6/white?text=Set+Precision" },
    { id: 704, name: "Linterna Táctica de 10000 Lumens", description: "Recargable USB, zoom telescópico y aleación de aluminio.", price: 18000, retailPrice: 30000, category: "Herramientas", image: "https://placehold.co/600x400/000000/white?text=Linterna+Tactica" },

    // --- MASCOTAS ---
    { id: 901, name: "Bebedero Fuente para Gatos", description: "Filtro de carbón activo y flujo continuo de agua.", price: 45000, retailPrice: 70000, category: "Mascotas", image: "https://placehold.co/600x400/60A5FA/white?text=Fuente+Mascotas", popular: true },
    { id: 902, name: "Cepillo Removedor de Pelo", description: "Botón de auto-limpieza, ideal para perros y gatos.", price: 12000, retailPrice: 22000, volumePrice: 9000, category: "Mascotas", image: "https://placehold.co/600x400/A855F7/white?text=Cepillo+Mascotas" },
    { id: 903, name: "Arnés Táctico para Perros", description: "Material resistente con sistema de agarre superior.", price: 35000, retailPrice: 55000, category: "Mascotas", image: "https://placehold.co/600x400/4B5563/white?text=Arnes+Perro" },

    // --- PAPELERÍA ---
    { id: 1001, name: "Set de Marcadores x80", description: "Doble punta, base de alcohol para ilustración profesional.", price: 55000, retailPrice: 85000, volumePrice: 48000, category: "Papelería", image: "https://placehold.co/600x400/F43F5E/white?text=Marcadores+x80", popular: true },
    { id: 1002, name: "Maletín de Arte 145 piezas", description: "Incluye colores, acuarelas, crayones y más.", price: 65000, retailPrice: 95000, category: "Papelería", image: "https://placehold.co/600x400/FACC15/000000?text=Maletin+Arte" },
    { id: 1003, name: "Agenda Ejecutiva con Powerbank", description: "Carga tu celular mientras tomas notas, puerto USB.", price: 45000, retailPrice: 75000, category: "Papelería", image: "https://placehold.co/600x400/1E293B/white?text=Agenda+Powerbank" }
  ]
};

export const GLOBAL_STYLES = `
  .glass-panel {
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  .hero-pattern {
      background-color: #0b1121;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 30px 30px;
  }
  @keyframes slideInRight {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
  }
  .animate-slideInRight { animation: slideInRight 0.3s ease-out; }
  @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeInUp { animation: fadeInUp 0.3s ease-out forwards; }
  @keyframes popIn {
      0% { opacity: 0; transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
  }
  .animate-pop-in { animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .pulse-cyan {
      animation: pulse-cyan 2s infinite;
  }
  @keyframes pulse-cyan {
      0% { box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.4); }
      70% { box-shadow: 0 0 0 10px rgba(34, 211, 238, 0); }
      100% { box-shadow: 0 0 0 0 rgba(34, 211, 238, 0); }
  }
`;

export const InNovaLogo: React.FC = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-500 fill-current">
        <path d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M50 15 L80 32 L80 68 L50 85 L20 68 L20 32 Z" fill="currentColor" opacity="0.2" />
        <text x="50" y="65" fontSize="40" fontWeight="bold" textAnchor="middle" fill="white">IN</text>
    </svg>
);
