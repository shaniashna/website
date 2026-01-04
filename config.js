// config.js
// This file contains all the content for your website.
// You can edit the text inside the quotes to update your site.

const siteConfig = {
  // --- General Info ---
  businessName: "Ashna Consulting",
  tagline: "Your partner in navigating Berlin's bureaucracy.",
  description: "Specializing in dealing with bureaucracy in Berlin. We make the complex simple. Services available in Farsi, English, and German.",

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
      title: "Package 1: The Berlin Starter Kit",
      description: "The complete solution for a smooth start. We handle the essential first steps so you can settle in immediately.",
      features: [
        "<strong>Bureaucracy:</strong> We handle your Anmeldung appointment and forms.",
        "<strong>Banking:</strong> Fast setup of a German Bank Account (DE IBAN).",
        "<strong>Connectivity:</strong> Support with SIM cards and Internet contracts.",
        "<strong>Insurance Orientation:</strong> We explain the German health system (Public vs. Private) and help you find which path fits your situation best.",
        "<strong>Tax ID:</strong> Securing your Tax ID.",
        "<strong>ARD/ZDF:</strong> Correct registration of the Radio Tax (Rundfunkbeitrag) to avoid fines.",
        "<strong>Bonus:</strong> Emergency Contacts, Maps & More."
      ]
    },
    {
      title: "Package 2: The Goodbye Germany Kit",
      description: "Leaving Germany? Make a clean exit. We ensure you close all chapters correctly.",
      features: [
        "<strong>Abmeldung:</strong> Filing your official de-registration.",
        "<strong>Contract Killer:</strong> Canceling Gym, Internet, and Insurance contracts.",
        "<strong>Refund Check:</strong> Advice on Pension Refunds (thousands of Euros back) & Tax Returns.",
        "<strong>Clean Slate:</strong> Closing your ARD/ZDF account and forwarding mail."
      ]
    },
    {
      title: "Bureaucracy & Paperwork",
      description: "Expert support for specific bureaucratic hurdles.",
      features: [
        "<strong>Visa & Residence Permit Support:</strong> We help you prepare and organize your document folder for the Ausländerbehörde. We review your forms to ensure everything is correct before you submit them, minimizing the risk of rejection.",
        "<strong>Paperwork Rescue (Letter Translation):</strong> Received a confusing German letter? Send us a photo. We explain exactly what it means and tell you what action to take.",
        "<strong>In-Person \"Bureaucracy Buddy\" (Beistand):</strong> You don't have to go alone. We accompany you to the Bürgeramt, Ausländerbehörde, or other authorities. We act as your witness (Beistand), translate the conversation, and ensure you are treated fairly."
      ]
    },
    {
      title: "Education & Career",
      description: "Guidance for your professional and educational journey in Germany.",
      features: [
        "<strong>Degree Recognition & Documents:</strong> We guide you through the complex process of recognizing your foreign diplomas or certificates in Germany and explain the exact steps required for your specific situation.",
        "<strong>Freelance & Self-Employment Setup:</strong> Starting your own business? We help you fill out the Tax Registration form (Fragebogen zur steuerlichen Erfassung) to get your Tax Number (Steuernummer) and provide professional German Invoice Templates so you can get paid.",
        "<strong>Ausbildung (Apprenticeship) Coaching:</strong> We help you find an Ausbildung and prepare a professional German application (Bewerbung), including your CV and motivation letter, to increase your chances of getting hired."
      ]
    },
    {
      title: "Daily Life & Family",
      description: "Assistance with everyday hurdles, appointments, and family needs.",
      features: [
        "<strong>Driving License Support:</strong> Whether you need to swap/convert your foreign license (Umschreibung) or get a German license from scratch, we guide you through the requirements, first-aid courses, and Car Registration appointments, and paperwork.",
        "<strong>Appointment Booking:</strong> Struggling to find a doctor? We help you find and book appointments with English or Farsi-speaking doctors, specialists, or other service providers.",
        "<strong>Family Support Services:</strong> We assist with the essential paperwork for families, including applications for Child Benefit (Kindergeld), Parental Allowance (Elterngeld), and Daycare Vouchers (Kita-Gutschein).",
        "<strong>Housing Application Check:</strong> Increase your chances. We organize your Schufa and documents and write a professional German cover letter for landlords.",
        "<strong>30-Minute \"Ask Me Anything\" Call:</strong> Confused? Book a quick call. We answer your specific questions about life or problems in Berlin."
      ]
    }
  ],

  // --- Testimonials ---
  testimonials: [
    {
      quote: "I was terrified of the Ausländerbehörde, but Ashna Consulting made it so simple. They organized my entire portfolio, and I got my freelance visa approved on the spot! Worth every penny.",
      author: "Sarah Jenkins, Graphic Designer"
    },
    {
      quote: "The 'Goodbye Germany' kit was a lifesaver. I had to leave Berlin in a rush and didn't know how to cancel my contracts or de-register properly. They handled everything while I focused on packing.",
      author: "Markus O., Software Engineer"
    },
    {
      quote: "I received a scary-looking tax letter in German and had no idea what to do. The Paperwork Rescue service explained it was just a standard query and told me exactly how to reply. Crisis averted!",
      author: "Priya P., Student"
    }
  ]

};