import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: process.env.NODE_ENV === 'development' ? { kind: 'local' } : {
    kind: "github",
    repo: {
      owner: "trunicz",
      name: "landingpagecms",
    },
  },
  singletons: {
    home: singleton({
      label: 'Inicio',
      path: 'src/content/home/data',
      schema: {
        hero: fields.object({
          headline: fields.text({ label: 'Título Principal', validation: { length: { min: 1 } } }),
          subheadline: fields.text({ label: 'Subtítulo', multiline: true, validation: { length: { min: 1 } } }),
        }),
        hours: fields.object({
          poolHours: fields.text({ label: 'Horario Alberca', validation: { length: { min: 1 } } }),
          salonHours: fields.text({ label: 'Horario Salón', validation: { length: { min: 1 } } }),
        })
      },
    }),
    about: singleton({
      label: 'Nosotros',
      path: 'src/content/about/data',
      schema: {
        title: fields.text({ label: 'Título', validation: { length: { min: 1 } } }),
        content: fields.markdoc({ label: 'Contenido', validation: { length: { min: 1 } } }),
        image: fields.image({ label: 'Imagen Destacada', directory: 'public/images/about', publicPath: '/images/about/' }),
      }
    }),
  },
  collections: {
    amenities: collection({
      label: 'Servicios/Amenidades',
      slugField: 'title',
      path: 'src/content/amenities/*',
      schema: {
        title: fields.slug({ name: { label: 'Nombre del Servicio', validation: { length: { min: 1 } } } }),
        description: fields.text({ label: 'Descripción', multiline: true, validation: { length: { min: 1 } } }),
        icon: fields.text({ label: 'Icono (nombre)' }), 
        priceInfo: fields.text({ label: 'Info de Precio / Link', validation: { length: { min: 1 } } }),
      }
    }),
  }
});