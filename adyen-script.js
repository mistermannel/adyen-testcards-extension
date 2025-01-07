// Konfiguration aus dem globalen Objekt laden
const { cards } = window.testConfig;

// Message Handler für die Kartendaten
window.addEventListener('message', (event) => {
  if (event.data.type === 'fill') {
    const data = event.data.data;
    
    // Suche nach den Eingabefeldern
    const fields = {
      number: document.querySelector('input[data-fieldtype="encryptedCardNumber"]'),
      expiry: document.querySelector('input[data-fieldtype="encryptedExpiryDate"]'),
      cvc: document.querySelector('input[data-fieldtype="encryptedSecurityCode"]')
    };

    // Fülle die Felder aus
    Object.entries(fields).forEach(([name, input]) => {
      if (input) {
        input.focus();
        input.value = data[name];
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  }
}); 