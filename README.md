# 🌐 Portafolio Web Personal &bull; Juan Diego Rodríguez Yanquen

Sitio web interactivo tipo **Single Page Application (SPA)** diseñado y construido con **HTML5 semántico, CSS3 moderno y JavaScript vanilla**. Actúa como centro de presentación profesional para exhibir proyectos de software, stack tecnológico, currículums descargables y canales directos de contacto.

[![HTML5](https://img.shields.io/badge/HTML5-Semántico-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Modern_Grid_%26_Flexbox-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla_ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Design-Mobile--First-38bdf8?style=flat-square)](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## ✨ Características y Módulos de la Aplicación

* **🎨 Estética Dark Navy Tech:**
  * Paleta de colores armónica basada en la teoría del color: Fondo Dark Navy (`#0b1120`), superficies (`#1e293b`), acentos en cian (`#38bdf8`) e índigo (`#818cf8`), con contraste accesible certificado (**WCAG AAA**).
* **📱 Diseño Totalmente Adaptable (Mobile-First):**
  * Barra de navegación fija con desenfoque de cristal (*Glassmorphism* con `backdrop-filter: blur(16px)`).
  * Menú hamburguesa fluido y accesible con atributos ARIA para dispositivos móviles y tabletas.
  * Cuadrículas dinámicas construidas con **CSS Grid** y componentes alineados con **Flexbox**.
* **🚀 Exhibición de Proyectos de Alto Impacto:**
  * Tarjeta técnica de **ALIMOP (Marketplace de Alimentos)** con resumen arquitectónico, desglose de aportes clave, badges de tecnologías y enlace directo al repositorio de código fuente.
  * Ranura modular preparada para la integración de futuros desarrollos móviles y web.
* **📄 Centro de Descarga de Currículums:**
  * Acceso directo a ambas versiones de la hoja de vida (**PDF ATS** y **PDF Visual / Normal**).
* **⚡ Interactividad Nativa (JavaScript ES6+):**
  * *ScrollSpy* mediante la API `IntersectionObserver` para iluminar dinámicamente la sección activa durante la navegación.
  * Botón para copiar el correo al portapapeles con alerta visual flotante (*Toast Notification*).
  * Enlaces directos a WhatsApp, llamadas telefónicas, perfil de LinkedIn y repositorios de GitHub.

---

## ⚡ Arquitectura y Rendimiento (Zero Dependencies)

A diferencia de los portafolios construidos sobre pesados empaquetadores o dependencias de terceros, este proyecto fue desarrollado bajo una premisa de **eficiencia y velocidad máxima**:

* **Cero Dependencias Externas (0 KB Bundles):** No requiere frameworks ni bibliotecas adicionales; el navegador ejecuta el código de forma inmediata sin sobrecarga de parsing de scripts.
* **Mantenimiento Centralizado:** Los estilos se organizan mediante **Custom Properties (Variables CSS)**, facilitando ajustes de temas, espaciados y tipografías en un solo punto.
* **Animaciones Aceleradas por GPU:** Las transiciones y microinteracciones de tarjetas y badges flotantes operan exclusivamente sobre las propiedades `transform` y `opacity`, garantizando una tasa de refresco fluida de **60 FPS** sin provocar reflujos (*reflows*) en el DOM.
* **Carga Rápida y Buenas Prácticas:** Cumplimiento de métricas esenciales de rendimiento (*Core Web Vitals*), con imágenes dimensionadas y favicon vectorial en formato SVG.

---

## 🔗 Ecosistema de Proyectos Vinculados

Este portafolio se conecta y complementa directamente con el ecosistema de proyectos profesionales de Juan Diego Rodríguez:

| Proyecto / Recurso | Tipo | Descripción Técnica | Repositorio |
|---|---|---|---|
| **ALIMOP** | Aplicación Web Full-Stack | Marketplace de alimentos con React 18, Vite, Node.js, Express, PostgreSQL, JWT, ImageKit CDN y pruebas automatizadas con Jest. | [juandirodriguezy/ALIMOP](https://github.com/juandirodriguezy/ALIMOP) |
| **CV-ATS** | Hoja de Vida Optimizada | Currículum estructurado en una sola columna con HTML semántico puro, diseñado para superar filtros automáticos de contratación. | [juandirodriguezy/CV-ATS](https://github.com/juandirodriguezy/CV-ATS) |
| **CV-WEB** | Hoja de Vida Visual | Currículum interactivo con maquetación en dos columnas con CSS Grid, paleta ejecutiva y adaptación responsive. | [juandirodriguezy/CV-WEB](https://github.com/juandirodriguezy/CV-WEB) |

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías | Propósito |
|---|---|---|
| **Marcado** | HTML5 Semántico, Accesibilidad (ARIA), OpenGraph Meta | Estructura legible para buscadores y lectores de pantalla |
| **Estilos** | CSS3 Moderno, CSS Grid, Flexbox, Glassmorphism, `@keyframes` | Maquetación visual, diseño adaptable y microinteracciones |
| **Lógica** | JavaScript ES6+ Nativo (DOM, `IntersectionObserver`, Clipboard API) | Control del menú móvil, scroll dinámico y notificaciones toast |

---

## 📂 Estructura del Directorio

```text
Portafolio Web/
├── index.html              # Estructura principal de la SPA
├── css/
│   └── style.css           # Variables CSS, diseño responsive y estilos de componentes
├── js/
│   └── main.js             # Lógica del menú móvil, ScrollSpy y copiado al portapapeles
├── img/
│   ├── Foto Perfil.jpg     # Fotografía profesional de perfil
│   ├── alimop-logo.png     # Logotipo oficial del proyecto ALIMOP
│   └── favicon.svg         # Favicon vectorial monograma JR
├── docs/
│   ├── Hoja de Vida en Formato ATS.pdf   # Versión descargable para sistemas ATS
│   └── Hoja de Vida (Normal).pdf         # Versión descargable visual / tradicional
└── README.md               # Documentación técnica del proyecto
```

---

## 👤 Contacto y Autor

**Juan Diego Rodríguez Yanquen**
* 📍 Bogotá D.C., Colombia
* ✉️ [juandrodriguezy057@gmail.com](mailto:juandrodriguezy057@gmail.com)
* 💬 WhatsApp: [+57 310 669 0137](https://wa.me/573106690137)
* 💼 [LinkedIn](https://www.linkedin.com/in/juan-rodriguez-3b2589450)
* 💻 [GitHub](https://github.com/juandirodriguezy)
