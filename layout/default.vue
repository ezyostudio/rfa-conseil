<template>
  <Nuxt />
</template>

<script>
  export default {
    data() {
      return {
        structuredData: {
          "@context": "https://schema.org",
          "@type": "DryCleaningOrLaundry",
          "name": "RFA Conseil",
          "image": "https://rfa-conseil.com/images/banner.jpg",
          "url": "https://rfa-conseil.com",
          "telephone": "0951740779",
          "priceRange": "$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "11 rue des Métiers",
            "addressLocality": "Courtry",
            "postalCode": "77181",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.9149221,
            "longitude": 2.5954422
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        }
      }
    },
    head() {
      return {
        script: [{
          type: 'application/ld+json',
          json: this.structuredData
        }]
      }
    }
  }

</script>
