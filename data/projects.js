const PROJECTS = {
  "ceramic-industries": {
    name: "Ceramic Industries Website",
    urlKey: "ceramic-industries",
    role: "Senior frontend developer.",
    type: "Professional",
    links: {
      android: "",
      ios: "",
      web: "https://www.ceramic.co.za/",
    },
    image: "/images/projects/ceramic-industries-logo.png",
    summary:
      "The catalogue website and client portal for Ceramic Industries, a leader in the design and manufacture of ceramic tiles and bathroomware.",
    technologies: ["React", "Next", "Node", "Strapi"],
  },
  leatt: {
    name: "Leatt Ecommerce Website",
    urlKey: "leatt",
    role: "Technical lead and senior frontend developer.",
    type: "Professional",
    links: {
      android: "",
      ios: "",
      web: "https://www.leatt.com/",
    },
    image: "/images/projects/leatt.png",
    summary:
      "The ecommerce website for Leatt, a global distributor of Leatt sports equipment.",
    technologies: ["Vue", "Nuxt", "Magento", "Storyblok"],
  },
  sbs: {
    name: "SAFAL Building Systems Website",
    urlKey: "sbs",
    role: "Technical lead and senior frontend developer.",
    type: "Professional",
    links: {
      android: "",
      ios: "",
      web: "https://www.safalbuildingsystems.com/",
    },
    image: "/images/projects/sbs.png",
    summary:
      "The catalogue website for SAFAL Building Systems, a member of Safal Group that exclusively provides pre-engineered building solutions.",
    technologies: ["Vue", "Nuxt", "Vue Storefront", "Storyblok"],
  },
  opfc: {
    name: "OPFC Supporter App",
    urlKey: "opfc",
    role: "Technical team lead and mobile app developer.",
    type: "Professional",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.orlandopiratesfc.mobileapp",
      ios: "https://apps.apple.com/za/app/orlando-pirates-official-app/id1469888955",
      web: "",
    },
    image: "/images/projects/opfc.svg",
    summary:
      "The official supporter app for Orlando Pirates, one of South Africa's oldest football clubs.",
    technologies: ["React Native"],
  },
  acvehicles: {
    name: "AC Vehicles Process Management System",
    urlKey: "acvehicles",
    role: "Technical team lead, mobile app and full stack developer.",
    type: "Professional",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.comune.nabupax",
      ios: "https://apps.apple.com/za/app/ac-vehicles/id1527276814",
      web: "",
    },
    image: "/images/projects/autoconnect.webp",
    summary:
      "The process management web platform and mobile app for Autoconnect Vehicles, a solution provider for national procurement of motor parts and the management of insurance claims.",
    info: "AC Vehicles is the heart of the Motor body repair industry, with cutting edge skills that allows AC Vehicles to provide a turnkey solution to their customers anything from motor parts supply to management of insurance claims, AC Vehicles has the necessary solution for you! https://www.autnect.com/our-services",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  acplumbing: {
    name: "AC Plumbing & Electrical Process Management System",
    urlKey: "acplumbing",
    role: "Technical team lead, mobile app and full stack developer.",
    type: "Professional",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.autoconnect.pe",
      ios: "https://apps.apple.com/za/app/ac-plumbing-electrical/id1537592989",
      web: "",
    },
    image: "/images/projects/acplumbing.webp",
    summary:
      "The process management web platform and mobile app for Autoconnect Plumbing & Electrical, a solution provider for national procurement of all construction materials relating to plumbing, electrical and related industries.",
    info: "AutoConnect is the heart of the plumbing and electrical industry, with cutting edge skills that allows AutoConnect to provide a turnkey solution to their customers anything from motor parts supply to management of insurance claims, AutoConnect has the necessary solution for you!",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  "secure-legacy": {
    name: "Secure Legacy Process Management System",
    urlKey: "secure-legacy",
    role: "Technical team lead, mobile app and full stack developer.",
    type: "Professional",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.comune.securelegacy",
      ios: "https://apps.apple.com/za/app/secure-legacy/id1487136644",
      web: "",
    },
    image: "/images/projects/secure-legacy.png",
    summary:
      "The client and project management web platform and mobile app for Secure Legacy, executors of wills, trusts and estates.",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  "tammy-taylor": {
    name: "Tammy Taylor Nails App",
    urlKey: "tammy-taylor",
    role: "Senior mobile app and full stack web developer.",
    type: "Professional",
    links: {
      android: "",
      ios: "",
      web: "",
    },
    image: "/images/projects/tammy-taylor.png",
    summary:
      "The ecommerce portal and mobile app for Tammy Taylor Nails South Africa, an international beauty salon chain.",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  clickr: {
    name: "Clickr App",
    urlKey: "clickr",
    role: "Technical team lead, mobile app and full stack web developer.",
    type: "Professional",
    links: {
      android: "",
      ios: "",
      web: "https://clickr.online/",
    },
    image: "/images/projects/clickr.jfif",
    summary:
      "The Clickr mobile app and supporting web platform, a social engagement and marketing tool.",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  siq: {
    name: "SiQ Survey App",
    urlKey: "siq",
    role: "Senior mobile app developer.",
    type: "Professional",
    links: {
      android: "",
      ios: "",
      web: "https://www.siq.co.za/nissa.php",
    },
    image: "/images/projects/siq.png",
    summary:
      "The survey tablet app for the UNICEF survey in Lesotho, managed by SiQ.",
    info: "SiQ has been appointed by UNICEF (the United Nations children's fund) to do a survey in the Kingdom of Lesotho. During this time, approximately 60 000 households have to be surveyed, by an estimated 100 surveyors. The area of interest encompasses from deep rural up to urban (and everything in between). Cell phone reception is not guaranteed within the area of interest, and some areas are also without electricity and other basic services.    This mobile application will lessen the burden of data capturing by streamlining the process and at the same time guiding the surveyors to record accurate data. The application will facilitate the survey process by being the primary data capturing and storing tool.",
    technologies: ["React Native"],
  },
  nucleo: {
    name: "Nucleo Superfood App",
    urlKey: "nucleo",
    role: "Senior mobile app and full stack web developer.",
    type: "Professional",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.comune.nucleoapp",
      ios: "https://apps.apple.com/za/app/nucleo-superfood/id1201934593",
      web: "",
    },
    image: "/images/projects/nucleo.png",
    summary: "The ecommerce web platform and mobile for Nucleo Superfood.",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  "harrys-butchery": {
    name: "Harry's Butchery App",
    urlKey: "harrys-butchery",
    role: "Senior mobile app and full stack web developer.",
    type: "Professional",
    links: {
      android: "",
      ios: "",
      web: "",
    },
    image: "/images/projects/harry.jpg",
    summary: "The ecommerce web platform and mobile app for Harry's Butchery.",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  "ntek-college": {
    name: "NTEK College App",
    urlKey: "ntek-college",
    role: "Senior mobile app and full stack web developer.",
    type: "Professional",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.comune.ntekcollege",
      ios: "https://apps.apple.com/za/app/ntek-college/id1519420687",
      web: "",
    },
    image: "/images/projects/ntek.png",
    summary:
      "The student mobile app and content management web platform for NTEK College.",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  "tekkie-tax": {
    name: "Tekkie Tax App",
    urlKey: "tekkie-tax",
    role: "Senior mobile app and full stack web developer.",
    type: "Professional",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.comune.tekkietax_",
      ios: "",
      web: "",
    },
    image: "/images/projects/tekkie-tax.gif",
    summary:
      "The ecommerce web portal and mobile app for Tekkie Tax, a South African national fundraising campaign for 250+ local welfare organisations.",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  cafe2go: {
    name: "Cafe2Go App",
    urlKey: "cafe2go",
    role: "Senior mobile app and full stack web developer.",
    type: "Professional",
    links: {
      android: "",
      ios: "",
      web: "",
    },
    image: "/images/projects/cafe2go.png",
    summary:
      "The ecommorce web platform and mobile app for Cafe2Go, a chain of mobile coffee bars.",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  "rooibos-on-call": {
    name: "Rooibos On Call App",
    urlKey: "rooibos-on-call",
    role: "Senior mobile app and full stack web developer.",
    type: "Professional",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.comune.rooibos",
      ios: "",
      web: "",
    },
    image: "/images/projects/rooibos.png",
    summary:
      "The ecommerce web platform and mobile app for Rooibos on Call, an independent consultant of Annique health and beauty products.",
    info: "An independent consultant of Annique is selling Rooibos items directly to the public. Now you can have all the necessary information right at your fingertips anywhere, anytime online.",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  "bni-tshwane": {
    name: "BNI Tshwane App",
    urlKey: "bni-tshwane",
    role: "Senior mobile app and full stack web developer.",
    type: "Professional",
    links: {
      android: "",
      ios: "",
      web: "",
    },
    image: "/images/projects/bni.png",
    summary:
      "The event management app for BNI, a global business networking organization.",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  "cih-stock": {
    name: "CIH Stock Management App",
    urlKey: "cih-stock",
    role: "Senior mobile app and full stack web developer.",
    type: "Professional",
    links: {
      android: "",
      ios: "",
      web: "http://www.ciholdings.co.za/",
    },
    image: "/images/projects/cih.png",
    summary:
      "The internal stock management app for Community Investment Holdings.",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  optiphi: {
    name: "Optiphi App",
    urlKey: "optiphi",
    role: "Senior mobile app and full stack web developer.",
    type: "Professional",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.comune.optiphiapp",
      ios: "https://apps.apple.com/za/app/optiphi/id1540731812",
      web: "",
    },
    image: "/images/projects/optiphi.png",
    summary:
      "The ecommerce web platform and mobile app for Optiphi, a global supplier of skincare products.",
    technologies: ["React Native", "PHP", "Yii", "PostgreSQL", "AWS", "Redis"],
  },
  "fisika-js": {
    name: "Fisika JS",
    urlKey: "fisika-js",
    role: "",
    type: "Hobby",
    links: {
      android: "",
      ios: "",
      web: "https://frans-de-waal.github.io/fisika-js/",
      github: "https://github.com/frans-de-waal/fisika-js",
    },
    image: "/images/projects/fisika-js.png",
    summary: "A simple 2D JavaScript physics engine.",
    technologies: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
  },
  "robin-dood": {
    name: "Robin Dood",
    urlKey: "robin-dood",
    role: "",
    type: "Hobby",
    links: {
      android: "",
      ios: "",
      web: "https://frans-de-waal.github.io/robin-dood/",
      github: "https://github.com/frans-de-waal/robin-dood",
    },
    image: "/images/projects/robin-dood.png",
    summary: "A 2D pure JavaScript physics game.",
    technologies: ["React", "Vite", "GitHub Pages"],
  },
  "pokemon-master": {
    name: "Pokemon Master",
    urlKey: "pokemon-master",
    role: "",
    type: "Hobby",
    links: {
      android: "",
      ios: "",
      web: "https://frans-de-waal.github.io/pokemon-master/",
      github: "https://github.com/frans-de-waal/pokemon-master",
    },
    image: "/images/projects/pokemon-master.png",
    summary: "A tool to check Pokemon party compositions.",
    technologies: ["SolidJS", "Tailwind CSS", "Vite", "GitHub Pages"],
  },
  "dnd-engine": {
    name: "D&D Engine",
    urlKey: "dnd-engine",
    role: "",
    type: "Hobby",
    links: {
      android: "",
      ios: "",
      web: "https://frans-de-waal.github.io/dnd-engine/",
      github: "https://github.com/frans-de-waal/dnd-engine",
    },
    image: "/images/projects/dnd-engine.png",
    summary: "A JavaScript engine for D&D 5e with a React frontend.",
    technologies: ["React", "Vite", "GitHub Pages"],
  },
  portfolio: {
    name: "Personal Portfolio",
    urlKey: "portfolio",
    role: "",
    type: "Hobby",
    links: {
      android: "",
      ios: "",
      web: "",
      github: "https://github.com/frans-de-waal/portfolio",
    },
    image: "/images/projects/portfolio.png",
    summary: "My Personal Development Portfolio (this website).",
    technologies: ["Next.js", "React", "Vercel"],
  },
  // "robin-dood-server": {
  //   name: "Robin Dood Server",
  //   urlKey: "robin-dood-server",
  //   role: "",
  //   type: "Hobby",
  //   links: {
  //     android: "",
  //     ios: "",
  //     web: "",
  //     github: "https://github.com/frans-de-waal/robin-dood-server",
  //   },
  //   image: "/images/projects/robin-dood.png",
  //   summary: "Node.js game server.",
  //   technologies: ["Node.js"],
  // },
  vectra: {
    name: "Vectra Website",
    urlKey: "vectra",
    role: "Technical lead and senior frontend developer.",
    type: "Professional",
    links: {
      android: "",
      ios: "",
      web: "https://vectra.co.za/",
    },
    image: "/images/projects/vectra.svg",
    summary:
      "The corporate website for Vectra Business Technologies, a software company that specializes in retail and e-commerce solutions.",
    technologies: ["React", "Gatsby", "Storyblok", "Heroku"],
  },
};

export default PROJECTS;
