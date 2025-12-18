
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
    { id: 101, name: "Juego Aritmético Montessori", description: "Aprende matemáticas jugando con clips y números en madera.", price: 34990, retailPrice: 45000, volumePrice: 29990, volumeInfo: "x 48 unidades", category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/7f377ee1-af4c-4fee-9a0a-7d453d424853.webp", popular: true },
    { id: 104, name: "Tanque de Acrobacias Exciter", description: "Tanque RC 4WD. Dispara balas de agua seguras.", price: 89990, retailPrice: 99990, volumePrice: 85000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/59c1b08a-e3f6-4a05-b4e6-d72541a34820.webp", popular: true },
    { id: 105, name: "Pistola de Hidrogel P90", description: "Arma de gel recargable con luces y láser.", price: 149990, retailPrice: 159900, volumePrice: 135000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/628b2b1f-eb9f-4e41-92ea-ff84b347f334.webp", popular: false },
    { id: 106, name: "Patineta Unicornio / Fantasy", description: "Patineta ajustable con luces LED en las llantas.", price: 75000, retailPrice: 79990, volumePrice: 67000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/0e35bdd6-5e22-4b4c-bd9c-f0c769f643be.webp", popular: true },
    { id: 109, name: "Maletín Herramientas Kids", description: "Taller portátil que se convierte en banco de trabajo.", price: 105000, retailPrice: 115000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/3d9b893b-76a9-48d9-b8ed-458224f9050f.webp", popular: false },
    { id: 110, name: "Scooter Capitán América", description: "Scooter estable de 3 ruedas con luces LED.", price: 185000, retailPrice: 195000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/9c5d3ca1-c234-4960-ade8-854d6452d1a6.webp", popular: true },
    { id: 111, name: "Juego de Madera Didáctico", description: "Caja de entrenamiento lógico Montessori.", price: 29990, retailPrice: 35000, volumePrice: 29990, volumeInfo: "x 60 unidades", category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/2c6c0062-a5ee-4288-a75b-9e585eb589a2.webp", popular: false },
    { id: 112, name: "Diadema Kids Bluetooth", description: "Audífonos para niños con diseño animado.", price: 32000, retailPrice: 37000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/bc276c14-ebab-4f40-9861-3fdff091e7ca.webp", popular: false },
    { id: 115, name: "Pista de Autos Sprint Track", description: "Pista modular con loopings.", price: 69990, retailPrice: 79990, volumePrice: 65000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/8d7cc9ce-ba4d-42f4-8917-e14c32614177.webp", popular: true },
    { id: 116, name: "Carro Acrobacias Drift Spray", description: "Carro RC 4x4 con humo y luces.", price: 79990, retailPrice: 89990, volumePrice: 75000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/acbb40a0-3024-41d1-982f-a6dff11063bb.webp", popular: true },
    { id: 117, name: "Carro de Acrobacias Spray X-Bao", description: "Carro RC 6 ruedas transforma.", price: 85000, retailPrice: 95000, volumePrice: 80000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/c9b20a2d-17eb-49dc-b073-65988eda4d6b.webp", popular: false },
    { id: 118, name: "Pista de Carros Power Track", description: "Pista alta velocidad con tiburón.", price: 45000, retailPrice: 55000, volumePrice: 40000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/ecbacddd-6a86-46a1-a2c7-5ec4c5e01cf9.webp", popular: false },
    { id: 119, name: "Pistola Hidrogel AK", description: "Réplica AK47 hidrogel.", price: 65000, retailPrice: 75000, volumePrice: 60000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/6ada237c-ab97-4bdb-8b51-a44ceeff937e.webp", popular: true },
    { id: 120, name: "Pistola Hidrogel M416", description: "M416 con máscara incluida.", price: 75000, retailPrice: 105000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/ab6f5682-b6e9-4b16-b10e-fb228b263253.webp", popular: true },
    { id: 121, name: "Pistola M416 Hidrogel Plus", description: "M416 mejorada con mira.", price: 75000, retailPrice: 105000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/6370d87f-94cb-4a92-be77-3c7e3fbc1074.webp", popular: false },
    { id: 122, name: "Scooter Kids Mediano", description: "Scooter ajustable con ruedas de silicona.", price: 75000, retailPrice: 80000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/dac00b3c-a33c-4e5e-9974-aa37902bec84.webp", popular: true },
    { id: 125, name: "Patines de Luz Lineal Mermaid", description: "Ajustables, ruedas luminosas.", price: 99990, retailPrice: 125000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/3cdeb9be-cd57-41cc-bf12-d7d396768bae.jpg", popular: false },
    { id: 127, name: "Scooter Kids Elsa", description: "Luces LED, música, manubrio graduable.", price: 185000, retailPrice: 180000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/53c4da1e-f917-43e4-ae1f-7dd57ee74daf.webp", popular: true },
    { id: 128, name: "Scooter Kids Spider Man", description: "3 ruedas silicona PU + freno.", price: 185000, retailPrice: 195000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/fa677659-415c-4a2f-b1e0-1e30db2df26b.webp", popular: true },
    { id: 129, name: "Juego de Médico", description: "Kit médico infantil completo.", price: 95000, retailPrice: 133000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/7f24073d-fb0b-40f6-8b6c-03c6b5905274.webp", popular: false },
    { id: 130, name: "Juego Cocina Niña", description: "Mochila cocina interactiva.", price: 95000, retailPrice: 133000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/89c64adb-4201-4da6-aac4-47ca7593813c.webp", popular: false },
    { id: 131, name: "Juego Cocina Niño", description: "Set cocina con lavaplatos funcional.", price: 95000, retailPrice: 133000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/deb97f30-3aa5-4a9c-9256-1e7eec62f5fe.webp", popular: false },
    { id: 489, name: "Cartas Didácticas", description: "Set de cartas educativas para niños.", price: 19990, retailPrice: 29990, volumePrice: 15000, volumeInfo: "x 64 unidades", category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/754a5b55-58e6-42fa-b4c7-94f38cfae158.webp", popular: false },
    { id: 490, name: "Bandeja de Arena Montessori", description: "Bandeja de madera para escritura en arena.", price: 29990, retailPrice: 38000, volumePrice: 25000, volumeInfo: "x 72 unidades", category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/22c8a01c-f7b5-48a2-a51e-88b7c54562c6.webp", popular: false },
    { id: 801, name: "Kit de Belleza Infantil", description: "Set de belleza completo y seguro para niñas.", price: 79990, retailPrice: 85000, volumePrice: 75000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/5ed899e7-d3a5-4db8-ac42-989f19497ff8.webp", popular: true },
    { id: 803, name: "Bolso con Maquillaje", description: "Bolso fashion con set de maquillaje lavable.", price: 35000, retailPrice: 39990, volumePrice: 28000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/e1ebc11a-4ea1-4b89-a3af-7ca5c29d1255.webp", popular: false },
    { id: 808, name: "Patineta Kids 8090", description: "Patineta altura ajustable en 4 niveles.", price: 89990, retailPrice: 110000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/63e5ce00-39c6-4170-bb55-ee73e6685407.webp", popular: false },
    { id: 812, name: "Kit de Belleza Shinning", description: "Estuche de maquillaje infantil con accesorios.", price: 69990, retailPrice: 75000, category: "Juguetes Kids", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/d1db04db-738a-4df1-82b6-a1a3ff866021.webp", popular: false },

    // --- TECNOLOGÍA ---
    { id: 201, name: "Timbre Cámara Inalámbrico", description: "Timbre inteligente WiFi. Paca x 100", price: 35000, retailPrice: 42000, volumePrice: 32000, volumeInfo: "x 100 unidades", category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/1b67a83c-f4c5-464e-9658-c52364796d71.webp", popular: true },
    { id: 202, name: "Mini Proyector Portátil", description: "Proyector compacto con altavoz. Paca x 20", price: 65000, retailPrice: 75000, volumePrice: 65000, volumeInfo: "x 20 unidades", category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/ccc37113-b165-467e-a66e-40ec8781aa52.webp", popular: true },
    { id: 203, name: "Cinta LED RGB 5 Metros", description: "Tira LED con control de colores.", price: 14000, retailPrice: 17000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/a10ba212-3aa1-404c-a171-74508b45b2c4.webp", popular: false },
    { id: 243, name: "Patineta Eléctrica", description: "Vel máx 25km/h, autonomía 25km.", price: 850000, retailPrice: 950000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/42d01c7e-9fe8-4f8e-9788-269eaab934d4.webp", popular: true },
    { id: 244, name: "Drone Plegable F167", description: "Cámara integrada, giro 360°, luces LED.", price: 149990, retailPrice: 170000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/c03020e0-3030-4ebe-8d5f-d345d3c38abf.webp", popular: true },
    { id: 245, name: "Dron F169 4K Plegable", description: "Cámara dual 4K, motor sin escobillas.", price: 169000, retailPrice: 190000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/51c05d6d-0123-4fc1-847e-4fd94ddb2c81.webp", popular: true },
    { id: 483, name: "Mini Parlante Impermeable", description: "Parlante bluetooth resistente al agua.", price: 15000, retailPrice: 18000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/e80f579c-c694-4045-81ca-fee79f013057.webp", popular: false },
    { id: 487, name: "Diadema P9", description: "Bluetooth 5.0 calidad premium.", price: 22000, retailPrice: 30000, volumePrice: 18000, volumeInfo: "x 50 unidades", category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/597b70f8-8bf7-4d6a-af26-e9acf3c28a77.webp", popular: false },
    { id: 210, name: "Mini Linterna Llavero", description: "Linterna potente recargable.", price: 6000, retailPrice: 9990, volumePrice: 4990, volumeInfo: "x 240 unidades", category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/0eed8826-a666-442e-8c96-59d2e6076257.webp", popular: false },
    { id: 211, name: "Proyector Deluxe", description: "Wifi y Bluetooth alta resolución.", price: 169000, retailPrice: 189990, volumePrice: 150000, volumeInfo: "x 20 unidades", category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/24bbe3cf-82bb-4c7c-bc62-b490e05f9fdb.webp", popular: true },
    { id: 212, name: "Diadema Gamer", description: "Micrófono incorporado luces RGB.", price: 18000, retailPrice: 20000, volumePrice: 15000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/07dd1e64-d760-49c6-8517-27fed42407d2.webp", popular: true },
    { id: 214, name: "Linterna Minero Deluxe", description: "Luz alta potencia con zoom.", price: 24000, retailPrice: 28000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/b9fe68e5-c4ef-4038-9b1e-b909b073a8a0.webp", popular: true },
    { id: 216, name: "Cámara Seguridad", description: "Visión panorámica e inteligente.", price: 45000, retailPrice: 48000, volumePrice: 35000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/068e6304-ae00-41be-bd1c-fbd0324f8b33.webp", popular: true },
    { id: 218, name: "Control PS4", description: "Control inalámbrico alta calidad.", price: 39990, retailPrice: 45000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/3863d748-f1d6-4d1b-807b-a80e8c481cb7.webp", popular: true },
    { id: 221, name: "Micrófono Inalámbrico", description: "Micrófono profesional USB.", price: 69990, retailPrice: 79990, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/0dea54ca-4da6-4a8f-a9ae-fda7acfa3d37.png", popular: true },
    { id: 226, name: "TV Stick 4K", description: "Convierte TV en Smart TV.", price: 75000, retailPrice: 89990, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/4505bc07-bd67-4b77-9358-5af9a3c7cdb8.webp", popular: true },
    { id: 232, name: "Smartwatch GT7 7in1", description: "Reloj con 7 correas diferentes.", price: 45000, retailPrice: 49990, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/57461f1f-3ad8-4f6d-bde5-49726a86b05e.webp", popular: true },
    { id: 233, name: "Parlante Zealot S32", description: "Altavoz potente bajos profundos.", price: 75000, retailPrice: 79990, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/87931fe5-416b-4934-9bb8-16e1ec29a511.webp", popular: true },
    { id: 234, name: "Parlante Zealot S51", description: "Altavoz cilíndrico bluetooth.", price: 69999, retailPrice: 75000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/6e222ef9-f55a-429d-9184-431732031846.webp", popular: true },
    { id: 237, name: "Parlante Flip 6 RGB", description: "Parlante con luces decorativas.", price: 45000, retailPrice: 49990, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/7ffcaa7d-be80-4ccb-a5e0-da0d82e4646e.webp", popular: true },
    { id: 240, name: "Parlante Pulse 5", description: "Parlante show de luces envolvente.", price: 85000, retailPrice: 89990, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/5a81b6c8-8b25-424e-a897-295d7b762196.webp", popular: true },
    { id: 246, name: "Proyector Octagonal 360°", description: "Proyector de galaxia LED.", price: 49990, retailPrice: 60000, volumePrice: 45000, volumeInfo: "x 30 unidades", category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/3d35434e-f2e0-4c28-bc90-8a88dbd1350b.webp", popular: true },
    { id: 810, name: "Mini Karaoke", description: "Parlante con micrófono inalámbrico.", price: 27000, retailPrice: 37000, volumePrice: 23000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/0a0eed53-cba6-4262-98a7-47cb2ec8bb0c.webp", popular: true },
    { id: 834, name: "Bolso de Seguridad", description: "Bolso antirrobo impermeable USB.", price: 35000, retailPrice: 45000, category: "Tecnología", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/3bffb12e-1251-430e-8bde-016e2a1b4088.webp", popular: true },

    // --- HOGAR ---
    { id: 301, name: "Lámpara Medusa", description: "Efecto acuático relajante.", price: 39990, retailPrice: 45000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/d25dfd2b-f167-4ee6-b89b-69e45aeeb578.webp", popular: false },
    { id: 302, name: "Luz LED Solar", description: "Sensor de movimiento exterior.", price: 19990, retailPrice: 25000, volumePrice: 15000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/548c4770-21d8-42e7-ae50-4fc368e1ad2a.webp", popular: true },
    { id: 303, name: "Pistola Aspiradora", description: "Inalámbrica con batería modular.", price: 69990, retailPrice: 79990, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/f6ca3614-2817-45f0-9d39-d76b8372403b.webp", popular: false },
    { id: 304, name: "Bombillo Recargable", description: "Bombillo LED con gancho.", price: 16000, retailPrice: 19990, volumePrice: 12000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/a24474d1-8e66-4697-a2ba-0f2b2e480ac6.webp", popular: true },
    { id: 306, name: "Ventilador Doble", description: "Diseño dual turbo ajustable.", price: 79990, retailPrice: 86000, volumePrice: 75000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/50db1627-05b6-4cf8-bb8a-379c79d59666.webp", popular: true },
    { id: 307, name: "Lámpara Solar 180 LEDs", description: "Panel alta luminosidad sensor.", price: 16000, retailPrice: 19990, volumePrice: 12000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/7ab69337-6e6f-452b-8d01-caffcb0ef8f3.webp", popular: true },
    { id: 310, name: "Lámpara Solar 6000W", description: "Sensor crepuscular potente.", price: 25000, retailPrice: 29990, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/3f72a9d2-f197-40aa-9787-7bf67e4becea.webp", popular: true },
    { id: 311, name: "Lámpara Tulipanes", description: "Diseño espejo luz infinita.", price: 23000, retailPrice: 27000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/b9bf4384-d833-4675-a8ca-11ba81f8e1d4.webp", popular: true },
    { id: 313, name: "Raqueta Mata Mosquitos", description: "Raqueta eléctrica efectiva.", price: 25000, retailPrice: 35000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/2b1c93f9-0ad2-4987-9e53-721b67dba526.webp", popular: true },
    { id: 319, name: "Gramera SF-400", description: "Balanza de cocina precisa.", price: 19990, retailPrice: 25000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/057aecf9-d31a-4598-9eaa-b0065f4996d4.webp", popular: true },
    { id: 323, name: "Org. Ropa Sucia 3 Comp", description: "Cesta con 3 divisiones.", price: 39990, retailPrice: 50000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/226aea1b-814a-4bae-bed7-b42a5c1fbea7.webp", popular: true },
    { id: 325, name: "Zapatera 9 Niveles", description: "Organizador tela y metal.", price: 35000, retailPrice: 45000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/653cdb2b-a1bb-4c60-85f9-0a62e4ecfb28.webp", popular: true },
    { id: 326, name: "Removedor Mota Deluxe", description: "Quitapelusas eléctrico potente.", price: 35000, retailPrice: 45000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/c3eae208-759e-4482-bee3-78792d73e468.webp", popular: true },
    { id: 328, name: "Lámpara Cristal Diamond", description: "Táctil recargable efecto cristal.", price: 45000, retailPrice: 55000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/bfe744ff-7eb3-4a84-a531-3267ccf57600.webp", popular: true },
    { id: 329, name: "Trapero Giratorio", description: "Sistema de escurrido giratorio.", price: 85000, retailPrice: 95000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/c55acce2-077f-4f21-a5ee-2fc173493ce3.webp", popular: true },
    { id: 336, name: "Dispensador Bebidas", description: "Jarra con grifo dispensador.", price: 35000, retailPrice: 45000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/2bf93bec-935d-4633-af7a-f0d5451008b0.webp", popular: true },
    { id: 337, name: "Dispensador Granos", description: "Dispensador de pared para granos.", price: 49990, retailPrice: 65000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/0bbad092-5b29-47b1-8437-4473005d0625.webp", popular: true },
    { id: 340, name: "Dispensador Agua Eco", description: "Bomba recargable para botellón.", price: 28000, retailPrice: 35000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/34a1bbb7-3cd8-47be-82b0-dbd2a650338c.webp", popular: true },
    { id: 341, name: "Utensilios Silicona 19p", description: "Set completo cocina.", price: 59990, retailPrice: 75000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/5c7901ec-ea30-4fd1-b5aa-0f0a093b5322.webp", popular: true },
    { id: 344, name: "Tapas Silicona x6", description: "Set tapas elásticas reutilizables.", price: 15000, retailPrice: 20000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/76721a0e-7c9b-42f9-972a-dbdaf170d07a.webp", popular: true },
    { id: 351, name: "Tabla Plegable 3en1", description: "Tabla convertible en cesta.", price: 19990, retailPrice: 28000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/39fe6b38-5d11-42b0-bedd-55de9f7e83d4.webp", popular: true },
    { id: 354, name: "Tubo Multifuncional", description: "Barra telescópica 90-160cm.", price: 28000, retailPrice: 35000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/e1884248-42d9-4439-a455-d1a04b64a045.webp", popular: true },
    { id: 356, name: "Protector Calzado", description: "Funda impermeable zapatos.", price: 14990, retailPrice: 20000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/9d1e8fb6-20b1-499d-9fe1-7b984161953e.webp", popular: true },
    { id: 357, name: "Reloj Pared 3D", description: "Reloj adhesivo gigante 80cm.", price: 28000, retailPrice: 38000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/2d500d91-f3cb-4edc-8973-1d26c616ee6d.webp", popular: true },
    { id: 358, name: "Reloj Pared Negro", description: "Reloj minimalista 60x70.", price: 35000, retailPrice: 45000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/24b1915b-d7f8-497d-904c-a90bf2703da5.webp", popular: true },
    { id: 359, name: "Reloj Pared Gigante", description: "Reloj decorativo 120cm.", price: 45000, retailPrice: 55000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/476ee506-7c51-4388-9653-99f25133ff2b.webp", popular: true },
    { id: 361, name: "Cinta Doble Faz 3M", description: "Cinta adhesiva ultra fuerte.", price: 14990, retailPrice: 20000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/bf372994-39ae-430c-ba1c-f28fabec7a8d.webp", popular: true },
    { id: 363, name: "Alcancía Electrónica", description: "Caja fuerte juguete clave.", price: 49990, retailPrice: 65000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/92a70c15-dce0-469b-a3db-2c941024436b.webp", popular: true },
    { id: 365, name: "Tapete Absorbente", description: "Alfombra baño secado rápido.", price: 25000, retailPrice: 35000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/103607b0-5960-4c69-8828-c79fc64e7caa.webp", popular: true },
    { id: 366, name: "Crispetera Deluxe", description: "Máquina palomitas aire caliente.", price: 65000, retailPrice: 80000, category: "Hogar", image: "https://placehold.co/600x400/FF33A8/white?text=Crispetera", popular: true },
    { id: 369, name: "Set Cuchillos x6", description: "Juego cuchillos profesionales.", price: 25000, retailPrice: 35000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/12e688b0-6dce-46ac-82cd-76d981b549ce.webp", popular: true },
    { id: 373, name: "Lámpara Espiral", description: "Lámpara mesa diseño moderno.", price: 35000, retailPrice: 45000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/68edcfc0-31e6-4772-a53c-5f623eec9ceb.webp", popular: true },
    { id: 374, name: "Zapatero con Cubierta", description: "Organizador zapatos tela 6 niveles.", price: 45000, retailPrice: 60000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/fbce1a61-0da4-4771-ae22-b3d44dfae82f.webp", popular: true },
    { id: 377, name: "Sartén 3 Espacios", description: "Sartén divisiones antiadherente.", price: 35000, retailPrice: 45000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/35274b4d-c998-4d74-8019-1bfc2a72bad7.webp", popular: true },
    { id: 379, name: "Zapatero con Tapa", description: "Zapatera transparente moderna.", price: 55000, retailPrice: 70000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/2081dfa9-45ef-42f5-8e31-fb850d811949.webp", popular: true },
    { id: 382, name: "Humidificador Lluvia", description: "Humidificador nube relax.", price: 45000, retailPrice: 60000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/20cae9fe-9e91-41cb-ace9-bf2772f90601.webp", popular: true },
    { id: 384, name: "Máquina Hamburguesas", description: "Parrilla eléctrica compacta.", price: 60000, retailPrice: 80000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/b3f9bc47-30ea-43ca-8a81-5c4b0a6b62c3.webp", popular: true },
    { id: 386, name: "Licuadora RAF", description: "Licuadora casera potente.", price: 75000, retailPrice: 95000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/13dbbe0c-e01b-4377-872f-e71fb020f93d.webp", popular: true },
    { id: 389, name: "Estufa Eléctrica 2P", description: "Estufa mesa doble platina.", price: 45000, retailPrice: 60000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/53a88594-14f7-473e-b814-3081e410f2ef.webp", popular: true },
    { id: 390, name: "Licuadora Deluxe", description: "Motor reforzado industrial.", price: 95000, retailPrice: 120000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/a1e84e48-30c9-4fe5-b444-761c2d4f5e39.webp", popular: true },
    { id: 396, name: "Cortador Aguacate", description: "Herramienta 3 en 1 segura.", price: 10000, retailPrice: 15000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/f1476e75-3999-4e6b-9a95-07058b39e9b3.webp", popular: true },
    { id: 397, name: "Olla Vidrio Borosilicato", description: "Olla transparente premium.", price: 45000, retailPrice: 60000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/2ef60ae2-694b-42b8-9b0f-774944ddf608.webp", popular: true },
    { id: 399, name: "Pasta Limpiadora", description: "Crema pulidora metal brillo.", price: 12000, retailPrice: 16000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/42a21b59-8e79-42ab-bc27-d50e1f4d965e.webp", popular: true },
    { id: 400, name: "Mesa Portátil", description: "Mesa cama laptop cómoda.", price: 35000, retailPrice: 45000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/45f11e30-ce46-4eab-ab21-2542e557c444.webp", popular: true },
    { id: 405, name: "Juego Ollas 10pcs", description: "Batería cocina completa premium.", price: 180000, retailPrice: 220000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/77324e72-6ed4-413f-bd31-d5c334375b09.webp", popular: true },
    { id: 412, name: "Set Alfombra Deluxe", description: "Alfombras baño alta densidad.", price: 25000, retailPrice: 35000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/b625a0cf-c951-41b2-9220-645fb809c8b0.webp", popular: true },
    { id: 414, name: "Manta Terciopelo", description: "Cobija decorativa ultra suave.", price: 45000, retailPrice: 60000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/84476fa6-3358-4d6f-bc97-e5557445a9b1.webp", popular: true },
    { id: 415, name: "Set Tazas Doble Pared", description: "Juego 6 vasos vidrio térmico.", price: 55000, retailPrice: 70000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/2eff5e2f-10eb-4548-a9e0-2d8b70ab1f2d.webp", popular: true },
    { id: 417, name: "Licuadora Sokany", description: "Licuadora smoothies alta velocidad.", price: 95000, retailPrice: 120000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/9688d66a-b7e5-449b-a242-584bf6f8d734.webp", popular: true },
    { id: 418, name: "Mini Fuente Chocolate", description: "Fuente eléctrica 3 niveles.", price: 40000, retailPrice: 55000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/3cac2f60-684f-4b61-ae31-11991707d2e7.webp", popular: true },
    { id: 421, name: "Termo Licuadora 1.5L", description: "Termo licuadora portátil.", price: 45000, retailPrice: 60000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/cbb8b94e-a28f-4795-80bb-26f61eec066a.webp", popular: true },
    { id: 424, name: "Carrito Auxiliar", description: "Carrito organizador 4 niveles.", price: 55000, retailPrice: 70000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/078cad35-df9a-4871-91d1-cdd9735dfea5.webp", popular: true },
    { id: 426, name: "Hervidor Eléctrico", description: "Hervidor rápido 2.3L.", price: 30000, retailPrice: 42000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/8a4dc822-850e-400d-93dc-9a74dfcce287.webp", popular: true },
    { id: 482, name: "Zapatero Perchero", description: "Organizador completo cubierta.", price: 65000, retailPrice: 91000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/ffcd7ac9-f9af-4556-8146-3f6ed375a0e0.webp", popular: true },
    { id: 485, name: "Protector Colchón", description: "Impermeable cama doble.", price: 35000, retailPrice: 49000, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/1259e8cd-d383-4361-9549-c5c55df1f76b.webp", popular: true },
    { id: 850, name: "Trapero Giratorio Pro", description: "Doble rotación enjuague secado.", price: 45000, retailPrice: 39990, category: "Hogar", image: "https://d2nagnwby8accc.cloudfront.net/companies/products/images/800/eed5af54-3440-4671-8723-177f3fa9dc0e.webp", popular: false },
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
