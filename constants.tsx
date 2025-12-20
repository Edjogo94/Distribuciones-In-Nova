
import React from 'react';
import { ShopData } from './types';

export const FREE_SHIPPING_THRESHOLD = 150000;

export const SHOP_DATA: ShopData = {
  info: {
    name: "Distribuciones In-Nova",
    tagline: "Valores Estimados - Precios Mayoristas",
    phone: "573206064030", 
    currency: "COP",
    location: "Barranquilla - Envíos Nacionales"
  },
  categories: ["Todos", "Hogar", "Tecnología", "Belleza"],
  products: [
    { 
      id: 1, 
      name: "HIDROLAVADORA", 
      description: "Hidrolavadora de alta presión para limpieza profunda en el hogar y vehículos.", 
      price: 89900, 
      retailPrice: 125000, 
      category: "Hogar", 
      image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/068e6304-ae00-41be-bd1c-fbd0324f8b33.webp",
      popular: true 
    },
    { 
      id: 2, 
      name: "SECADOR AGUACATE", 
      description: "Secador de cabello con tecnología de aguacate para un brillo excepcional.", 
      price: 25000, 
      retailPrice: 45000, 
      category: "Belleza", 
      image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/bc276c14-ebab-4f40-9861-3fdff091e7ca.webp" 
    },
    { 
      id: 3, 
      name: "TOPE DE PUERTA", 
      description: "Práctico tope de puerta resistente para protección de paredes.", 
      price: 7500, 
      retailPrice: 15000, 
      category: "Hogar", 
      image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/2c6c0062-a5ee-4288-a75b-9e585eb589a2.webp" 
    },
    { 
      id: 4, 
      name: "CEPILLO SECADOR 5 EN 1", 
      description: "Multifuncional para secar, alisar y dar volumen en un solo paso.", 
      price: 62500, 
      retailPrice: 95000, 
      category: "Belleza", 
      image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/deb97f30-3aa5-4a9c-9256-1e7eec62f5fe.webp",
      popular: true 
    },
    { 
      id: 5, 
      name: "RELOJ DE PARED 3D (80CM X 100CM)", 
      description: "Reloj decorativo de gran formato con efecto 3D para salas y oficinas.", 
      price: 31500, 
      retailPrice: 55000, 
      category: "Hogar", 
      image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/b9bf4384-d833-4675-a8ca-11ba81f8e1d4.webp" 
    },
    { 
      id: 6, 
      name: "COMBO TAPETE ULTRA ABSORBENTE", 
      description: "Set de tapetes de secado instantáneo y base antideslizante.", 
      price: 22000, 
      retailPrice: 38000, 
      category: "Hogar", 
      image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/103607b0-5960-4c69-8828-c79fc64e7caa.webp" 
    },
    { 
      id: 7, 
      name: "DISPENSADOR DE JABÓN MULTIFUNCIONAL", 
      description: "Dispensador ergonómico para cocina o baño con porta esponja.", 
      price: 19000, 
      retailPrice: 35000, 
      category: "Hogar", 
      image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/0bbad092-5b29-47b1-8437-4473005d0625.webp" 
    },
    { 
      id: 8, 
      name: "CÁMARA DE SEGURIDAD IK100", 
      description: "Cámara de vigilancia de alta definición con visión nocturna.", 
      price: 46000, 
      retailPrice: 75000, 
      category: "Tecnología", 
      image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/1b67a83c-f4c5-464e-9658-c52364796d71.webp",
      popular: true 
    },
    { 
      id: 9, 
      name: "ESTANTE ESQUINERO DE BAÑO", 
      description: "Organizador de aluminio para optimizar espacios en la ducha.", 
      price: 40000, 
      retailPrice: 65000, 
      category: "Hogar", 
      image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/5c7901ec-ea30-4fd1-b5aa-0f0a093b5322.webp" 
    },
    { 
      id: 10, 
      name: "TUBO MULTIFUNCIONAL 90 A 160 CM", 
      description: "Barra ajustable para cortinas o tendedero sin necesidad de taladro.", 
      price: 18900, 
      retailPrice: 32000, 
      category: "Hogar", 
      image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/653cdb2b-a1bb-4c60-85f9-0a62e4ecfb28.webp" 
    },
    { 
      id: 11, 
      name: "TUBO TENDEDERO PEQUEÑO 60 A 100 CM", 
      description: "Barra telescópica ideal para espacios reducidos y organización.", 
      price: 16900, 
      retailPrice: 28000, 
      category: "Hogar", 
      image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/057aecf9-d31a-4598-9eaa-b0065f4996d4.webp" 
    },
    { 
      id: 12, 
      name: "TUBO MULTIFUNCIONAL GRANDE 160 A 300 CM", 
      description: "Barra reforzada de largo alcance para clósets o cortinas pesadas.", 
      price: 27900, 
      retailPrice: 48000, 
      category: "Hogar", 
      image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/653cdb2b-a1bb-4c60-85f9-0a62e4ecfb28.webp" 
    },
    { 
      id: 13, 
      name: "LÁMPARA SOLAR PANEL", 
      description: "Iluminación exterior autónoma con carga solar y sensor de movimiento.", 
      price: 31000, 
      retailPrice: 55000, 
      category: "Tecnología", 
      image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/548c4770-21d8-42e7-ae50-4fc368e1ad2a.webp",
      popular: true 
    }
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
