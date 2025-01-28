const productos = [
  {
    id: "1",
    nombre: "Auriculares inalámbricos",
    precio: "$10.000",
    img: "/images/auriculares-inalambricos.jpg",
    categoria: "Audio y Sonido",
    descripcion: "Auriculares de alta calidad con conectividad Bluetooth 5.0, cancelación de ruido y batería de larga duración."
  },
  {
    id: "2",
    nombre: "Teclado mecánico RGB",
    precio: "$7.000",
    img: "/images/teclado-mecanico-rgb.jpg",
    categoria: "Accesorios para computadoras",
    descripcion: "Teclado mecánico con iluminación RGB personalizable, ideal para gaming y productividad."
  },
  {
    id: "3",
    nombre: "Mouse ergonómico",
    precio: "$8.500",
    img: "/images/mouse-ergonomico.jpg",
    categoria: "Accesorios para computadoras",
    descripcion: "Mouse diseñado para reducir el cansancio en la muñeca, perfecto para largas horas de trabajo o gaming."
  },
  {
    id: "4",
    nombre: "Monitor Full HD 24 pulgadas",
    precio: "$199.000",
    img: "/images/monitor-full-hd.jpg",
    categoria: "Monitores y perifericos",
    descripcion: "Monitor de 24 pulgadas con resolución Full HD, tecnología de protección ocular y conectividad HDMI y VGA."
  },
  {
    id: "5",
    nombre: "Silla gamer",
    precio: "$259.000",
    img: "/images/silla-gamer.jpg",
    categoria: "Muebles y Ergonomicos",
    descripcion: "Silla ergonómica diseñada para largas sesiones de juego o trabajo, con soporte lumbar, reposabrazos ajustables y reclinación hasta 135°."
  },
  {
    id: "6",
    nombre: "Smartwatch deportivo",
    precio: "$79.000",
    img: "/images/smartwatch-deportivo.jpg",
    categoria: "Otros",
    descripcion: "Reloj inteligente con monitor de ritmo cardíaco, GPS integrado y resistencia al agua, ideal para entrenamientos y seguimiento de actividad."

  },
  {
    id: "7",
    nombre: "Parlantes Bluetooth",
    precio: "$35.000",
    img: "/images/parlantes-bluetooth.jpg",
    categoria: "Audio y Sonido",
    descripcion: "Parlantes portátiles con sonido estéreo de alta fidelidad, conectividad Bluetooth y batería de hasta 10 horas de duración."
  },
  {
    id: "8",
    nombre: "Cámara web 1080p",
    precio: "$29.000",
    img: "/images/camara-web.jpg",
    categoria: "Accesorio para computadoras",
    descripcion: "Cámara web con resolución Full HD 1080p, micrófono integrado y enfoque automático, ideal para videollamadas y streaming."
  },
  {
    id: "9",
    nombre: "Base refrigerante para laptop",
    precio: "$39.000",
    img: "/images/base-refrigerante.jpg",
    categoria: "Accesorios para computadoras",
    descripcion: "Base con ventiladores silenciosos para mantener tu laptop fresca, compatible con equipos de hasta 17 pulgadas."
  },
  {
    id: "10",
    nombre: "Cargador rápido USB-C",
    precio: "$12.000",
    img: "/images/cargador-usb-c.jpg",
    categoria: "cargadores y energia",
    descripcion: "Cargador USB-C con tecnología de carga rápida, compatible con dispositivos de última generación y diseño compacto."
  },
];


export const getProductos = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productos);
    }, 2000)
  })
}

export const getUnProducto = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const productoBuscado = productos.find(item => item.id === id);
      resolve(productoBuscado);
    }, 1000)
  })
}

export const getProductoPorCategoria = (idCategoria) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const productosCategoria = productos.filter(item => item.categoria === idCategoria);
      resolve(productosCategoria);
    }, 1000)
  })
}