window.testConfig = {
  cards: [
    { 
      title: 'Visa', 
      number: '4917 6100 0000 0000', 
      expiry: '03/30', 
      cvc: '737', 
      name: 'Testi Testenberger' 
    },
    { 
      title: 'Mastercard', 
      number: '5454 5454 5454 5454', 
      expiry: '03/30', 
      cvc: '737', 
      name: 'Testi Testenberger' 
    },
    { 
      title: 'Amex', 
      number: '3714 496353 98431', 
      expiry: '03/30', 
      cvc: '7373', 
      name: 'Testi Testenberger' 
    },
    // Spezielle Testfälle
    { 
      title: 'Expired Card', 
      number: '4917 6100 0000 0000', 
      expiry: '03/20', 
      cvc: '737', 
      name: 'Expired Card',
      description: 'Card is expired'
    },
    { 
      title: 'Invalid CVC', 
      number: '4917 6100 0000 0000', 
      expiry: '03/30', 
      cvc: '000', 
      name: 'Invalid CVC',
      description: 'Wrong CVC code'
    },
  ],
  
  voucherCodes: [

    { 
      title: 'Early Bird', 
      code: 'EARLY25',
      description: '25% off for early bookings'
    }
  ],
  
  personalData: {
    firstName: 'Testi',
    lastName: 'Testenberger',
    email: 'test@example.com',
    phone: '0123456789',
    phonePrefix: '+39',
    street: 'Teststraße 42',
    city: 'München',
    postalCode: '12345',
    country: 'Germany',
    dateOfBirth: '01/01/1990',
    driversLicenseDate: '01/01/2010',
    taxNumber: 'DE123456789',
    company: 'Test GmbH'
  },

  // Neue Konfigurationen
  countryTranslations: {
    en: 'Italy',
    fr: 'Italie',
    pt: 'Itália',
    es: 'Italia',
    it: 'Italia',
    sv: 'Italien',
    nl: 'Italië',
    default: 'Italien' // für Deutsch
  },

  dateFormats: {
    'DD/MM/YYYY': {
      birth: '01/01/1990',
      license: '01/01/2010'
    },
    'TT.MM.JJJJ': {
      birth: '01.01.1990',
      license: '01.01.2010'
    },
    'ÅÅÅÅ-MM-DD': {
      birth: '1990-01-01',
      license: '2010-01-01'
    },
    'DD.MM.AAAA': {
      birth: '01.01.1990',
      license: '01.01.2010'
    },
    'GG.MM.AAAA': {
      birth: '01.01.1990',
      license: '01.01.2010'
    },
    'DD-MM-JJJJ': {
      birth: '01-01-1990',
      license: '01-01-2010'
    },
    'JJ.MM.AAAA': {
      birth: '01.01.1990',
      license: '01.01.2010'
    }
  },

  csvVouchers: [
    { code: 'JMX03WJGRNLW3', balance: '€1.00', startDate: '11 Dec 2024', endDate: '31 Dec 2030' },
    { code: 'LEHREU5IN2UCO', balance: '€1.00', startDate: '11 Dec 2024', endDate: '31 Dec 2030' },
    { code: 'PJPY290HBL10H', balance: '€1.00', startDate: '11 Dec 2024', endDate: '31 Dec 2030' },
    { code: 'FXOP530LFWGXQ', balance: '€1.00', startDate: '11 Dec 2024', endDate: '31 Dec 2030' },
    { code: 'WPDIOLP5QSX4D', balance: '€1.00', startDate: '11 Dec 2024', endDate: '31 Dec 2030' },
    { code: 'RBUCXOMK7WYXN', balance: '€1.00', startDate: '11 Dec 2024', endDate: '31 Dec 2030' },
    { code: 'SPBAJXKYEOX3H', balance: '€1.00', startDate: '11 Dec 2024', endDate: '31 Dec 2030' },
    { code: 'C9IAY7RQFNYWB', balance: '€1.00', startDate: '11 Dec 2024', endDate: '31 Dec 2030' },
    { code: 'UPJT5VAV3719S', balance: '€1.00', startDate: '11 Dec 2024', endDate: '31 Dec 2030' },
    { code: 'Y84R1PI6OTTL2', balance: '€1.00', startDate: '11 Dec 2024', endDate: '31 Dec 2030' },
    // ... weitere 40 Voucher hier einfügen ...
  ]
}; 