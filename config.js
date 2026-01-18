// config.js
// This file contains all the content for your website.
// You can edit the text inside the quotes to update your site.

const siteConfig = {
  // --- General Info ---
  businessName: "Ashna Consulting",
  tagline: "Your partner in navigating Berlin's bureaucracy.",
  description: "Specializing in dealing with bureaucracy in Berlin. I make the complex simple. Services available in Farsi, English, and German.",

  // --- Contact Info ---
  contact: {
    email: "ashna.consult@outlook.com",
    phone: "+491742436954",
    address: "Berlin, Germany"
  },

  // --- Services ---
  // This disclaimer appears near the services section
  servicesDisclaimer: `
    Important Note: As your relocation consultant, my goal is to guide you through the German bureaucracy. Please note that I am not a certified attorney or insurance broker. My services provide orientation and practical assistance, but do not constitute binding legal or insurance advice. I recommend consulting a specialist for specific legal guarantees. Liability for the final approval of applications is excluded.
    
    Haftungsausschluss: Als Ihre Relocation-Beraterin unterstütze ich Sie bei der Orientierung in Deutschland. Ich weise jedoch darauf hin, dass ich keine Rechtsanwältin oder Versicherungsvermittlerin bin. Meine Informationen dienen der Hilfestellung und ersetzen keine verbindliche Rechts- oder Versicherungsberatung durch Fachleute. Eine Haftung für den Erfolg oder die Ablehnung von Anträgen wird nicht übernommen.

    Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
  `,

  services: [
    {
      title: "Moving to Berlin",
      description: "The complete solution for a smooth start. I handle the essential first steps so you can settle in immediately.",
      price: "149 Euro",
      details: [
        "<strong>Bureaucracy:</strong> I handle your Anmeldung appointment and forms.",
        "<strong>Banking:</strong> Fast setup of a German Bank Account (DE IBAN).",
        "<strong>Connectivity:</strong> Support with SIM cards and Internet contracts.",
        "<strong>Insurance Orientation:</strong> I explain the German health system (Public vs. Private) and help you find which path fits your situation best.",
        "<strong>Tax ID:</strong> Securing your Tax ID.",
        "<strong>ARD/ZDF:</strong> Correct registration of the Radio Tax (Rundfunkbeitrag) to avoid fines.",
        "<strong>Bonus:</strong> Emergency Contacts, Maps & More."
      ]
    },
    {
      title: "Moving out of Berlin",
      description: "Leaving Germany? Make a clean exit. I ensure you close all chapters correctly.",
      price: "129 Euro",
      details: [
        "<strong>Abmeldung:</strong> Filing your official de-registration.",
        "<strong>Contract Killer:</strong> Canceling Gym, Internet, and Insurance contracts.",
        "<strong>Refund Check:</strong> Advice on Pension Refunds (thousands of Euros back) & Tax Returns.",
        "<strong>Clean Slate:</strong> Closing your ARD/ZDF account and forwarding mail."
      ]
    },
    {
      title: "Individual help with documents from A to Z",
      description: "Expert support for specific bureaucratic hurdles, education, career, and daily life.",
      price: "Individual Price",
      details: [
        "<strong>Visa & Residence Permit Support:</strong> Preparation and document review.",
        "<strong>Paperwork Rescue:</strong> Explanation of confused German letters.",
        "<strong>Bureaucracy Buddy:</strong> In-person support at authorities.",
        "<strong>Degree Recognition:</strong> Guidance on recognizing foreign diplomas.",
        "<strong>Freelance Setup:</strong> Assistance with tax registration and invoicing.",
        "<strong>Ausbildung Coaching:</strong> Application support for apprenticeships.",
        "<strong>Driving License:</strong> Support with conversion or new license.",
        "<strong>Appointments:</strong> Scheduling with doctors and specialists.",
        "<strong>Family Support:</strong> Kindergeld, Elterngeld, and Kita vouchers.",
        "<strong>Housing:</strong> Schufa assistance and rental applications."
      ]
    }
  ],

  // --- Testimonials ---
  testimonials: [
    {
      quote: "I was terrified of the Ausländerbehörde, but Ashna Consulting made it so simple. She organized my entire portfolio, and I got my freelance visa approved on the spot! Worth every penny.",
      author: "Sarah Jenkins, Graphic Designer"
    },
    {
      quote: "The 'Goodbye Germany' kit was a lifesaver. I had to leave Berlin in a rush and didn't know how to cancel my contracts or de-register properly. She handled everything while I focused on packing.",
      author: "Markus O., Software Engineer"
    },
    {
      quote: "I received a scary-looking tax letter in German and had no idea what to do. The Paperwork Rescue service explained it was just a standard query and told me exactly how to reply. Crisis averted!",
      author: "Priya P., Student"
    }
  ]

};