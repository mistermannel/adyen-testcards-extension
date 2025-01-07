// service worker

// Log when service worker is installed
chrome.runtime.onInstalled.addListener(() => {
  console.log('Service Worker installed');
});

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === 'complete' &&
    tab.url &&
    tab.url.match(/https:\/\/booking\.roadsurfer\.com\/.*\/rent\//)
  ) {
    chrome.action.setBadgeText({ 
      text: '!',
      tabId: tabId 
    });
    chrome.action.setBadgeBackgroundColor({ 
      color: '#4CAF50',
      tabId: tabId 
    });
  } else {
    chrome.action.setBadgeText({ 
      text: '',
      tabId: tabId 
    });
  }
});

// Handle extension icon clicks
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { action: 'togglePanel' });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'openPopup') {
    chrome.storage.local.set({ 
      activeTab: request.tab,
      configData: request.data 
    }, () => {
      chrome.windows.create({
        url: chrome.runtime.getURL('popup.html'),
        type: 'popup',
        width: 400,
        height: 600
      });
    });
  }
});