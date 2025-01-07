// Config ist bereits verfügbar, da sie als Content Script geladen wird
// Entfernen Sie den fetch-Teil und nutzen Sie die Config direkt

function waitForElement(selector, callback, maxAttempts = 50) {
  let attempts = 0;
  
  const checkElement = () => {
    attempts++;
    const element = document.querySelector(selector);
    
    if (element) {
      callback(element);
      return;
    }
    
    if (attempts < maxAttempts) {
      setTimeout(checkElement, 100);
    }
  };
  
  checkElement();
}

function createMenuButton() {
  const menuButton = document.createElement('button');
  menuButton.className = 'adyen-menu-button flex items-center';
  menuButton.innerHTML = `
    <span class="mr-2">Adyen Tools</span>
    <svg data-testid="menu-icon" xmlns="http://www.w3.org/2000/svg" class="icon sprite-icons" width="20" height="20" viewBox="0 0 24 24">
      <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
  `;
  menuButton.style.cssText = `
    margin-right: 1.5rem;
    padding: 0.5rem 1rem;
    background: none;
    border: 2px solid #000;
    border-radius: 4px;
    color: #000;
    font-family: inherit;
    font-size: 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s ease;
  `;
  
  return menuButton;
}

function createPopupMenu() {
  const popup = document.createElement('div');
  popup.className = 'adyen-popup';
  popup.style.cssText = `
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    display: none;
    z-index: 1000;
    min-width: 200px;
    padding: 8px 0;
  `;
  
  return popup;
}

function insertMenuButton() {
  const headerInterval = setInterval(() => {
    const supportElement = document.querySelector('.v-popper--theme-tooltip');
    if (!supportElement) return;
    clearInterval(headerInterval);

    // Erstellen des Menü-Buttons
    const menuButton = document.createElement('button');
    menuButton.className = 'adyen-menu-button flex items-center';
    menuButton.innerHTML = `
      <span class="mr-2">Adyen Tools</span>
      <svg data-testid="menu-icon" xmlns="http://www.w3.org/2000/svg" class="icon sprite-icons" width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
    `;
    menuButton.style.cssText = `
      margin-right: 1.5rem;
      padding: 0.5rem 1rem;
      background: #00112c;
      border: none;
      border-radius: 4px;
      color: white;
      font-family: inherit;
      font-size: 14px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      transition: all 0.2s ease;
    `;

    // Button vor dem Support-Element einfügen
    supportElement.parentNode.insertBefore(menuButton, supportElement);

    // Hover-Effekt
    menuButton.addEventListener('mouseenter', () => {
      menuButton.style.backgroundColor = '#0066ff';
    });

    menuButton.addEventListener('mouseleave', () => {
      menuButton.style.backgroundColor = '#00112c';
    });

    // Popup-Menü erstellen
    const popup = document.createElement('div');
    popup.className = 'adyen-popup';
    popup.style.cssText = `
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      display: none;
      z-index: 1000;
      min-width: 200px;
      padding: 8px 0;
    `;

    // Menüoptionen erstellen
    const menuItems = [
      { text: 'Testkarten', id: 'cards', items: testCards },
      { text: 'Testbenutzer', id: 'users', items: testUsers }
    ];

    menuItems.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.className = 'adyen-menu-item';
      menuItem.textContent = item.text;
      menuItem.style.cssText = `
        padding: 8px 16px;
        cursor: pointer;
        transition: background-color 0.2s;
      `;

      menuItem.addEventListener('mouseenter', () => {
        menuItem.style.backgroundColor = '#f5f5f5';
      });

      menuItem.addEventListener('mouseleave', () => {
        menuItem.style.backgroundColor = 'transparent';
      });

      menuItem.addEventListener('click', () => {
        chrome.runtime.sendMessage({ 
          action: 'openPopup', 
          tab: item.id,
          data: item.items
        });
        popup.style.display = 'none';
      });

      popup.appendChild(menuItem);
    });

    // Popup zum Button hinzufügen
    menuButton.style.position = 'relative';
    menuButton.appendChild(popup);

    // Click-Handler für den Button
    menuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
    });

    // Klick außerhalb schließt das Menü
    document.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }, 500);
}

// Funktion aufrufen, wenn das DOM geladen ist
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', insertMenuButton);
} else {
  insertMenuButton();
}
