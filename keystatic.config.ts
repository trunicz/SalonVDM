import { config, fields, collection, singleton } from "@keystatic/core"

export default config({
  storage: process.env.NODE_ENV === 'development' ? { kind: 'local' } : {
    kind: "github",
    repo: {
      owner: "trunicz",
      name: "landingpagecms",
    },
  },
  singletons: {
    landingPage: singleton({
      label: 'Landing Page',
      path: 'src/content/landing-page/data',
      schema: {
        hero: fields.object({
          headline: fields.text({ label: 'Hero Headline' }),
          subheadline: fields.text({ label: 'Hero Subheadline', multiline: true }),
          ctaText: fields.text({ label: 'CTA Button Text' }),
          ctaLink: fields.text({ label: 'CTA Button Link' }),
        }),
        features: fields.array(
          fields.object({
            title: fields.text({ label: 'Feature Title' }),
            description: fields.text({ label: 'Feature Description' }),
            icon: fields.text({ label: 'Icon Name (Lucide)' }),
          }),
          { label: 'Features' }
        ),
        products: fields.array(
          fields.object({
            name: fields.text({ label: 'Product Name' }),
            price: fields.text({ label: 'Price' }),
            description: fields.text({ label: 'Product Description' }),
            image: fields.image({ label: 'Product Image', directory: 'public/images/products', publicPath: '/images/products/' }),
          }),
          { label: 'Featured Products' }
        ),
        services: fields.array(
          fields.object({
            title: fields.text({ label: 'Service Title' }),
            price: fields.text({ label: 'Price' }),
            description: fields.text({ label: 'Description' }),
            duration: fields.text({ label: 'Duration' }),
          }),
          { label: 'Services' }
        ),
        team: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            role: fields.text({ label: 'Role' }),
            bio: fields.text({ label: 'Bio', multiline: true }),
            image: fields.image({ label: 'Photo', directory: 'public/images/team', publicPath: '/images/team/' }),
          }),
          { label: 'Team' }
        ),
        testimonials: fields.array(
          fields.object({
            author: fields.text({ label: 'Author' }),
            role: fields.text({ label: 'Role/Title' }),
            content: fields.text({ label: 'Content', multiline: true }),
            rating: fields.integer({ label: 'Rating (1-5)', validation: { min: 1, max: 5 } }),
          }),
          { label: 'Testimonials' }
        ),
        gallery: fields.array(
            fields.object({
                image: fields.image({ label: 'Image', directory: 'public/images/gallery', publicPath: '/images/gallery/' }),
                caption: fields.text({ label: 'Caption' }),
            }),
            { label: 'Gallery' }
        ),
        faq: fields.array(
            fields.object({
                question: fields.text({ label: 'Question' }),
                answer: fields.text({ label: 'Answer', multiline: true }),
            }),
            { label: 'FAQ' }
        ),
        about: fields.object({
          title: fields.text({ label: 'About Title' }),
          content: fields.markdoc({ label: 'About Content' }),
        }),
        cta: fields.object({
          title: fields.text({ label: 'CTA Title' }),
          subtext: fields.text({ label: 'CTA Subtext' }),
          buttonText: fields.text({ label: 'Button Text' }),
          link: fields.text({ label: 'Button Link' }),
        }),
        footer: fields.object({
          copyright: fields.text({ label: 'Copyright Text' }),
          socials: fields.array(
              fields.object({
                  platform: fields.text({ label: 'Platform' }),
                  url: fields.text({ label: 'URL' }),
              }),
              { label: 'Social Links' }
          )
        })
      },
    }),
  },
  collections: {
    post: collection({
      label: "Post",
      slugField: "title",
      path:"src/content/posts/*",
      format:{contentField:"content"},
      schema:{
        title: fields.slug({name:{label:"Title"}}),
        content: fields.markdoc({label:"Content"})
      }
    })
  }
})