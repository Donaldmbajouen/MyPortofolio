/**
 * SEO Configuration for Portfolio
 * Update these values with your actual data
 */

export const seoConfig = {
  // Site Information
  site: {
    url: "https://donald-njemi-portofolio.vercel.app",
    title: "Donald Njemi Mbajouen - Développeur Fullstack Web/Mobile",
    description: "Portfolio de Donald Njemi Mbajouen, développeur fullstack passionné. Spécialisé en React.js, Vue.js, Laravel, Flutter et PHP. 10+ projets réalisés. Basé à Yaounde, Cameroun.",
    ogImage: "https://donald-njemi-portofolio.vercel.app/og-image.png",
    twitterHandle: "@donaldmbajouen", // Update with your Twitter if applicable
  },

  // Author Information
  author: {
    name: "Donald Njemi Mbajouen",
    email: "mbajouend@gmail.com",
    location: {
      city: "Yaounde",
      country: "Cameroun",
      coordinates: {
        latitude: 3.8667,
        longitude: 11.5167,
      },
    },
    jobTitle: "Développeur Fullstack Web/Mobile",
  },

  // Social Profiles
  social: {
    github: "https://github.com/Donaldmbajouen",
    linkedin: "https://www.linkedin.com/in/donald-njemi-mbajouen-741889284/",
    // twitter: "https://twitter.com/yourusername", // Add if applicable
    // portfolio: "https://yourwebsite.com", // Add if applicable
  },

  // Skills & Keywords
  skills: [
    "React.js",
    "Vue.js",
    "Laravel",
    "Flutter",
    "PHP",
    "JavaScript",
    "TypeScript",
    "Fullstack Development",
    "Web Development",
    "Mobile Development",
  ],

  // Google Analytics
  googleAnalyticsId: "G-XXXXXXXXXX", // Replace with your actual GA ID

  // Contact Information
  contact: {
    email: "mbajouend@gmail.com",
    // phone: "+237XXXXXXXXX", // Add if applicable
  },

  // Structured Data
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Donald Njemi Mbajouen",
    "jobTitle": "Développeur Fullstack Web/Mobile",
    "url": "https://donald-njemi-portofolio.vercel.app/",
    "email": "mbajouend@gmail.com",
  },
};

export default seoConfig;
