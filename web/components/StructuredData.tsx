export function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Florian Huber",
    "url": "https://ideawithflo.com",
    "image": "https://ideawithflo.com/Logo@300x.png",
    "jobTitle": "Industrial Designer",
    "description": "Industrial designer based in Vienna, Austria. Specializing in product design, concept development, 3D modeling & CAD, prototyping, and design strategy.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vienna",
      "addressCountry": "AT"
    },
    "sameAs": [
      "https://www.linkedin.com/in/florian-huber-055700169/"
    ],
    "knowsAbout": [
      "Product Design",
      "Industrial Design",
      "Concept Development",
      "3D Modeling",
      "CAD",
      "Prototyping",
      "Design Strategy"
    ]
  }

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Florian Huber e.U.",
    "url": "https://ideawithflo.com",
    "logo": "https://ideawithflo.com/Logo@300x.png",
    "description": "Industrial design studio based in Vienna, Austria. We manifest ideas — from concept to reality.",
    "slogan": "Florian Huber manifestiert Ideen",
    "founder": {
      "@type": "Person",
      "name": "Florian Huber"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vienna",
      "addressCountry": "AT"
    },
    "email": "office@florianhuber.at",
    "areaServed": "Worldwide",
    "serviceType": [
      "Product Design",
      "Industrial Design",
      "Concept Development",
      "3D Modeling & CAD",
      "Prototyping",
      "Design Strategy"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/florian-huber-055700169/"
    ]
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Florian Huber — Industrial Designer Vienna",
    "url": "https://ideawithflo.com",
    "description": "Portfolio of Florian Huber, industrial designer based in Vienna. Product design, concept development, 3D modeling and prototyping.",
    "author": {
      "@type": "Person",
      "name": "Florian Huber"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ideawithflo.com/projects/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
