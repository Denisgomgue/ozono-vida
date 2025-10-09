# OZONO VIDA HUARAZ - Clínica de Ozonoterapia

Sitio web profesional para la clínica de ozonoterapia OZONO VIDA HUARAZ, desarrollado con Next.js 14 y Tailwind CSS.

## 🎯 Características

- ✅ **Next.js 14** con App Router
- ✅ **TypeScript** para type safety
- ✅ **Tailwind CSS** con colores personalizados del logo
- ✅ **Modo claro/oscuro** con next-themes
- ✅ **Menú responsivo** con navegación completa
- ✅ **SEO optimizado** con metadata dinámica
- ✅ **Logo personalizado** con SVG
- ✅ **Estructura de imágenes** organizada

## 🎨 Colores del Branding

Basado en el logo de la clínica:

- **Azul Primario**: `#193e8a` (OZONO VIDA)
- **Rojo Secundario**: `#e63333` (HUARAZ)
- **Modo oscuro** completamente implementado

## 📁 Estructura del Proyecto

```
ozono-vida/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página de inicio
│   │   └── globals.css        # Estilos globales
│   ├── components/
│   │   ├── ui/                # Componentes base
│   │   │   ├── Logo.tsx       # Logo de la clínica
│   │   │   └── ThemeToggle.tsx # Botón modo oscuro
│   │   ├── layout/            # Componentes de layout
│   │   │   ├── Header.tsx     # Header con navegación
│   │   │   ├── Navigation.tsx # Menú responsivo
│   │   │   └── Footer.tsx     # Footer
│   │   ├── sections/          # Secciones de páginas
│   │   └── providers/         # Providers (Theme, etc.)
│   └── lib/                   # Utilidades
├── public/
│   └── images/                # Imágenes organizadas
│       ├── hero/              # Imágenes principales
│       ├── services/          # Imágenes de servicios
│       ├── treatments/        # Imágenes de tratamientos
│       ├── applications/      # Imágenes de aplicaciones
│       ├── team/              # Fotos del equipo
│       ├── clinic/            # Fotos de la clínica
│       ├── testimonials/      # Fotos de testimonios
│       └── icons/             # Iconos y logos
└── tailwind.config.ts         # Configuración de Tailwind
```

## 🧭 Estructura de Navegación

### Menú Principal

- **Inicio**
- **Servicios** (4 tratamientos principales)
  - Ozonoterapia
  - Plasma Rico en Plaquetas
  - Medicina Regenerativa
  - Cóctel de Vida
- **Tratamientos** (Condiciones específicas)
  - Tratamiento de Dolor (13 items + subcategorías)
  - Tratamiento de Enfermedades (11 items)
  - Estética (4 items)
  - Infecciones (3 items)
  - Ginecología (5 items)
- **Aplicaciones** (8 métodos técnicos)
- **Nosotros**
- **Contacto**
- **Reservar Cita**

### Navegación Móvil

- Menú hamburguesa responsivo
- Dropdowns colapsables
- Navegación táctil optimizada

## 🚀 Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start

# Linting
npm run lint
```

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS
- **next-themes** - Gestión de temas
- **Lucide React** - Iconos
- **Framer Motion** - Animaciones

## 📱 Responsive Design

- **Mobile First** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Menú hamburguesa** para móviles
- **Touch-friendly** en dispositivos táctiles

## 🎨 Modo Oscuro

- **Toggle automático** entre modo claro y oscuro
- **Persistencia** de preferencias del usuario
- **Colores optimizados** para ambos modos
- **Transiciones suaves** entre temas

## 📊 SEO

- **Metadata dinámica** por página
- **Open Graph** tags
- **URLs semánticas**
- **Sitemap** automático
- **Performance optimizada**

## 🔧 Configuración

### Variables de Entorno

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://ozonovidahuaraz.com
```

### Tailwind Config

- Colores personalizados del branding
- Modo oscuro configurado
- Animaciones personalizadas
- Fuentes optimizadas

## 📈 Próximos Pasos

1. **Crear páginas de servicios** individuales
2. **Implementar páginas de tratamientos** específicos
3. **Agregar formularios** de contacto y citas
4. **Optimizar imágenes** y performance
5. **Implementar CMS** para contenido dinámico
6. **Agregar analytics** y tracking

## 📞 Contacto

- **Clínica**: OZONO VIDA HUARAZ
- **Ubicación**: Huaraz, Ancash, Perú
- **Email**: info@ozonovida.com
- **Teléfono**: +51 999 888 777

---

Desarrollado con ❤️ para mejorar la salud y bienestar de nuestros pacientes.
