const BASE_URL = "https://festus-jnr-portfolio.vercel.app";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Chidubem Festus Jnr Offiaukwu",
  alternateName: "Festus Jnr",

  url: BASE_URL,

  jobTitle: "Full-Stack Web Developer",

  description:
    "Full-stack web developer building modern web applications and digital experiences with JavaScript, TypeScript, React, Next.js, Node.js, and more.",

  knowsAbout: [
    "Web Development",
    "Full-Stack Development",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "SQL",
    "Tailwind CSS",
    "React Native",
  ],

  sameAs: [
    "https://github.com/stacklordz1",
    "https://www.linkedin.com/in/chidubem-festus-jnr-offiaukwu-5565643a5",
    "https://youtube.com/@festus_dev",
    "https://instagram.com/buildwithfestus",
    "https://twitter.com/@festus_jnr08",
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  );
}