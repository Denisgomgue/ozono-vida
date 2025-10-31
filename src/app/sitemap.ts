import { MetadataRoute } from 'next';
import companyData from '@/data/company.json';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ozonovidahuaraz.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Rutas estáticas principales
  const routes = [
    '',
    '/servicios',
    '/servicios/ozonoterapia',
    '/servicios/prp',
    '/servicios/medicina-regenerativa',
    '/servicios/coctel-vida',
    '/aplicaciones',
    '/aplicaciones/auto-hemoterapia-mayor',
    '/aplicaciones/auto-hemoterapia-menor',
    '/aplicaciones/bolsa-ozonisada',
    '/aplicaciones/embolsados',
    '/aplicaciones/insuflacion-rectal',
    '/aplicaciones/intraarticular',
    '/aplicaciones/intramuscular',
    '/aplicaciones/sueros-ozonizados',
    '/tratamientos',
    '/tratamientos/dolor',
    '/tratamientos/enfermedades',
    '/tratamientos/estetica',
    '/tratamientos/ginecologia',
    '/tratamientos/infecciones',
    '/nosotros',
    '/contacto',
    '/reservar-cita',
  ];

  // Generar rutas de tratamientos de dolor
  const dolorRoutes = [
    'artritis',
    'artrosis',
    'cervicalgia',
    'ciatalgia',
    'escoliosis',
    'espolon-calcaneo',
    'fascitis-plantar',
    'hernias-discales',
    'lumbalgia',
    'tendinitis',
    'tunel-carpiano',
    'fibromialgia',
  ];

  dolorRoutes.forEach(route => {
    routes.push(`/tratamientos/dolor/${route}`);
  });

  // Rutas de dolores específicos
  const doloresRoutes = [
    'cabeza',
    'cadera',
    'codo',
    'columna',
    'cuello',
    'espalda',
    'hombro',
    'manos',
    'muslo',
    'pie',
    'plantas-de-los-pies',
    'rodilla',
    'tobillo',
    'zona',
  ];

  doloresRoutes.forEach(route => {
    routes.push(`/tratamientos/dolor/dolores/${route}`);
  });

  // Rutas de artrosis específicas
  const artrosisRoutes = ['cadera', 'hombro', 'rodilla'];
  artrosisRoutes.forEach(route => {
    routes.push(`/tratamientos/dolor/artrosis/${route}`);
  });

  // Rutas de enfermedades
  const enfermedadesRoutes = [
    'cefaleas-migranas',
    'colitis-ulcerosa',
    'diabetes-mellitus',
    'enfermedad-crohn',
    'gastritis',
    'gota',
    'hepatitis-cronica',
    'insuficiencia-vascular',
    'lupus-eritematoso-sistemico',
    'prostatitis-cronica',
    'varices',
  ];

  enfermedadesRoutes.forEach(route => {
    routes.push(`/tratamientos/enfermedades/${route}`);
  });

  // Rutas de estética
  const esteticaRoutes = [
    'rejuvenecimiento-facial',
    'tratamiento-acne',
    'tratamiento-celulitis',
    'ulceras-varicosas',
  ];

  esteticaRoutes.forEach(route => {
    routes.push(`/tratamientos/estetica/${route}`);
  });

  // Rutas de ginecología
  const ginecologiaRoutes = [
    'candidiasis',
    'endometriosis',
    'post-cesarea',
    'vaginitis',
    'vph',
  ];

  ginecologiaRoutes.forEach(route => {
    routes.push(`/tratamientos/ginecologia/${route}`);
  });

  // Rutas de infecciones
  const infeccionesRoutes = [
    'heridas-infectadas',
    'pie-diabetico',
    'ulceras-por-presion',
    'infecciones-urinarias',
  ];

  infeccionesRoutes.forEach(route => {
    routes.push(`/tratamientos/infecciones/${route}`);
  });

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/servicios') || route.startsWith('/tratamientos') ? 0.9 : 0.7,
  }));
}

