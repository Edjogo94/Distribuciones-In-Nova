
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
    // --- JUGUETES KIDS ---
    { id: 101, name: "Juego Aritmético Montessori", description: "Aprende matemáticas jugando con clips y números en madera de alta calidad.", price: 34990, retailPrice: 45000, volumePrice: 29990, volumeInfo: "x 48 und", category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/7f377ee1-af4c-4fee-9a0a-7d453d424853.webp", popular: true },
    { id: 104, name: "Tanque de Acrobacias Exciter", description: "Tanque RC 4WD. Dispara balas de agua seguras, incluye control remoto.", price: 89990, retailPrice: 99990, volumePrice: 85000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/59c1b08a-e3f6-4a05-b4e6-d72541a34820.webp", popular: true },
    { id: 105, name: "Pistola de Hidrogel P90 Plus", description: "Arma de gel recargable con batería de litio, luces y láser de precisión.", price: 149990, retailPrice: 159900, volumePrice: 135000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/628b2b1f-eb9f-4e41-92ea-ff84b347f334.webp" },
    { id: 106, name: "Patineta Unicornio / Fantasy", description: "Patineta ajustable con luces LED en las 3 llantas, diseño ergonómico.", price: 75000, retailPrice: 79990, volumePrice: 67000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/0e35bdd6-5e22-4b4c-bd9c-f0c769f643be.webp", popular: true },
    { id: 110, name: "Scooter Capitán América", description: "Scooter estable de 3 ruedas con luces LED y freno trasero reforzado.", price: 185000, retailPrice: 195000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/9c5d3ca1-c234-4960-ade8-854d6452d1a6.webp" },
    { id: 115, name: "Pista de Autos Sprint Track", description: "Pista modular con loopings y 2 autos de carrera incluidos.", price: 69990, retailPrice: 79990, volumePrice: 65000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/8d7cc9ce-ba4d-42f4-8917-e14c32614177.webp", popular: true },
    { id: 119, name: "Pistola Hidrogel AK-47 Gold", description: "Réplica AK47 hidrogel con modo ráfaga y 5000 municiones.", price: 65000, retailPrice: 75000, volumePrice: 60000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/6ada237c-ab97-4bdb-8b51-a44ceeff937e.webp" },
    { id: 132, name: "Mesa Proyectora de Dibujo", description: "Incluye 24 patrones para calcar, marcadores y borrador. Ideal aprendizaje.", price: 39990, retailPrice: 55000, category: "Juguetes Kids", image: "https://placehold.co/600x400/3B82F6/white?text=Proyector+Dibujo", popular: true },
    { id: 134, name: "Muñeca Habladora Premium", description: "Dice frases, cierra los ojos y trae accesorios de alimentación.", price: 55000, retailPrice: 75000, category: "Juguetes Kids", image: "https://placehold.co/600x400/F472B6/white?text=Muñeca+Premium" },
    { id: 135, name: "Carro Control Remoto Anfibio", description: "Camina por tierra y flota en agua. Rotación 360 grados.", price: 89000, retailPrice: 110000, category: "Juguetes Kids", image: "https://placehold.co/600x400/EF4444/white?text=Carro+Anfibio" },

    // --- TECNOLOGÍA ---
    { id: 201, name: "Timbre Cámara WiFi 1080p", description: "Timbre inteligente con sensor de movimiento y audio doble vía.", price: 35000, retailPrice: 42000, volumePrice: 32000, volumeInfo: "x 100 und", category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/1b67a83c-f4c5-464e-9658-c52364796d71.webp", popular: true },
    { id: 202, name: "Mini Proyector Cinema Pro", description: "Soporta 1080p, HDMI, USB y conexión a consolas. Incluye parlante.", price: 65000, retailPrice: 75000, volumePrice: 65000, volumeInfo: "x 20 und", category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/ccc37113-b165-467e-a66e-40ec8781aa52.webp", popular: true },
    { id: 243, name: "Patineta Eléctrica X8", description: "Velocidad 30km/h, motor 350W, batería de larga duración.", price: 850000, retailPrice: 950000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/42d01c7e-9fe8-4f8e-9788-269eaab934d4.webp", popular: true },
    { id: 250, name: "Smartwatch Ultra Series 9", description: "Pantalla AMOLED, monitoreo de salud completo y llamadas BT.", price: 45000, retailPrice: 75000, volumePrice: 39000, category: "Tecnología", image: "https://placehold.co/600x400/FB923C/white?text=Smartwatch+Ultra", popular: true },
    { id: 251, name: "Audífonos Inalámbricos M10", description: "Powerbank integrado en estuche, pantalla digital de carga.", price: 15000, retailPrice: 25000, volumePrice: 12000, category: "Tecnología", image: "https://placehold.co/600x400/111827/white?text=Audifonos+M10" },
    { id: 252, name: "Cámara Bombillo 360°", description: "Se instala en cualquier soquete, visión nocturna y seguimiento.", price: 38000, retailPrice: 55000, volumePrice: 32000, category: "Tecnología", image: "https://placehold.co/600x400/F3F4F6/000000?text=Camara+Bombillo" },
    { id: 253, name: "Mini Teclado Inalámbrico", description: "Touchpad integrado, ideal para Android TV y Smart TV.", price: 18000, retailPrice: 30000, category: "Tecnología", image: "https://placehold.co/600x400/374151/white?text=Mini+Teclado" },
    { id: 254, name: "Barra de Sonido TV 40W", description: "Bluetooth 5.1, entrada óptica y control remoto.", price: 85000, retailPrice: 125000, category: "Tecnología", image: "https://placehold.co/600x400/000000/white?text=Barra+Sonido" },

    // --- HOGAR ---
    { id: 302, name: "Luz Solar 100 LEDs", description: "Tres modos de iluminación, sensor PIR de alta sensibilidad.", price: 19990, retailPrice: 25000, volumePrice: 15000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/548c4770-21d8-42e7-ae50-4fc368e1ad2a.webp", popular: true },
    { id: 325, name: "Zapatera Metálica Reforzada", description: "9 niveles con cubierta protectora contra polvo.", price: 35000, retailPrice: 45000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/653cdb2b-a1bb-4c60-85f9-0a62e4ecfb28.webp", popular: true },
    { id: 430, name: "Kit de Costura 126 piezas", description: "Maletín completo con hilos, agujas, tijeras y accesorios.", price: 15000, retailPrice: 25000, volumePrice: 11000, category: "Hogar", image: "https://placehold.co/600x400/4F46E5/white?text=Kit+Costura" },
    { id: 431, name: "Picadora de Ajos Recargable", description: "Cuchillas de acero inoxidable, carga USB, 250ml.", price: 18000, retailPrice: 30000, category: "Hogar", image: "https://placehold.co/600x400/10B981/white?text=Picadora+Ajo" },
    { id: 432, name: "Estante Organizador de Baño", description: "Se ubica sobre el inodoro, 3 repisas de metal blanco.", price: 45000, retailPrice: 65000, category: "Hogar", image: "https://placehold.co/600x400/FFFFFF/000000?text=Organizador+Baño" },
    { id: 433, name: "Termo Inteligente 500ml", description: "Pantalla táctil que indica temperatura exacta del líquido.", price: 15000, retailPrice: 28000, volumePrice: 12000, category: "Hogar", image: "https://placehold.co/600x400/000000/white?text=Termo+Led" },

    // --- BELLEZA ---
    { id: 501, name: "Plancha Nano Titanio 2000", description: "Calienta en 15 seg, cable giratorio, placas anchas.", price: 55000, retailPrice: 85000, volumePrice: 48000, category: "Belleza", image: "https://placehold.co/600x400/1F2937/white?text=Plancha+Titanio", popular: true },
    { id: 505, name: "Cepillo Secador 3 en 1", description: "Seca, alisa y da volumen al mismo tiempo. 1200W.", price: 35000, retailPrice: 65000, volumePrice: 28000, category: "Belleza", image: "https://placehold.co/600x400/DB2777/white?text=Cepillo+Secador", popular: true },
    { id: 506, name: "Espejo LED Maquillaje", description: "Recargable, niveles de brillo y base organizadora.", price: 25000, retailPrice: 45000, category: "Belleza", image: "https://placehold.co/600x400/FDF2F8/000000?text=Espejo+LED" },
    { id: 507, name: "Vaporizador Facial Nano", description: "Hidratación profunda para limpieza de cutis.", price: 22000, retailPrice: 38000, category: "Belleza", image: "https://placehold.co/600x400/FCE7F3/000000?text=Vaporizador" },

    // --- SALUD ---
    { id: 605, name: "Tensiómetro Digital de Brazo", description: "Precisión clínica, memoria para 2 usuarios.", price: 65000, retailPrice: 95000, category: "Salud", image: "https://placehold.co/600x400/60A5FA/white?text=Tensiometro", popular: true },
    { id: 606, name: "Oxímetro de Pulso Pro", description: "Medición instantánea de SpO2 y frecuencia cardíaca.", price: 18000, retailPrice: 35000, volumePrice: 12000, category: "Salud", image: "https://placehold.co/600x400/EF4444/white?text=Oximetro" },
    { id: 607, name: "Termómetro Infrarrojo", description: "Medición sin contacto en 1 segundo. Alerta fiebre.", price: 35000, retailPrice: 55000, category: "Salud", image: "https://placehold.co/600x400/FFFFFF/000000?text=Termometro" },

    // --- HERRAMIENTAS ---
    { id: 701, name: "Taladro Inalámbrico 21V Pro", description: "Torque ajustable, 2 velocidades, kit completo de brocas.", price: 145000, retailPrice: 195000, category: "Herramientas", image: "https://placehold.co/600x400/D97706/white?text=Taladro+Pro", popular: true },
    { id: 705, name: "Pulidora Angular 4.5\"", description: "Motor de 800W, mango ergonómico, protector de disco.", price: 115000, retailPrice: 165000, category: "Herramientas", image: "https://placehold.co/600x400/4B5563/white?text=Pulidora" },
    { id: 706, name: "Set Copas 40 piezas", description: "Dados milimétricos y en pulgadas con rachet.", price: 35000, retailPrice: 55000, category: "Herramientas", image: "https://placehold.co/600x400/374151/white?text=Set+Copas" },
    { id: 707, name: "Cautín Soldador 60W Kit", description: "Incluye soporte, soldadura y desoldador.", price: 18000, retailPrice: 32000, category: "Herramientas", image: "https://placehold.co/600x400/1F2937/white?text=Kit+Soldador" },

    // --- MASCOTAS ---
    { id: 901, name: "Fuente de Agua Flor 2.5L", description: "Ultra silenciosa con filtros de repuesto incluidos.", price: 45000, retailPrice: 70000, category: "Mascotas", image: "https://placehold.co/600x400/93C5FD/white?text=Fuente+Mascota", popular: true },
    { id: 904, name: "Cama Térmica Mascota XL", description: "Material ultra suave con base antideslizante.", price: 48000, retailPrice: 75000, category: "Mascotas", image: "https://placehold.co/600x400/A78BFA/white?text=Cama+Mascota" },
    { id: 905, name: "Lanza Pelotas Automático", description: "3 distancias de lanzamiento. Incluye 3 pelotas.", price: 185000, retailPrice: 250000, category: "Mascotas", image: "https://placehold.co/600x400/10B981/white?text=Lanza+Pelotas" },

    // --- PAPELERÍA ---
    { id: 1001, name: "Set Marcadores Touch x80", description: "Estuche de transporte, doble punta biselada y fina.", price: 55000, retailPrice: 85000, volumePrice: 48000, category: "Papelería", image: "https://placehold.co/600x400/000000/white?text=Marcadores+x80", popular: true },
    { id: 1004, name: "Colores x72 Profesionales", description: "Alta pigmentación, mina suave, estuche metálico.", price: 42000, retailPrice: 65000, category: "Papelería", image: "https://placehold.co/600x400/F59E0B/white?text=Colores+x72" },
    { id: 1005, name: "Calculadora Científica Pro", description: "Más de 400 funciones, pantalla de 2 líneas.", price: 25000, retailPrice: 45000, category: "Papelería", image: "https://placehold.co/600x400/312E81/white?text=Calculadora" }
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
