function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

async function connectPhantom() {
  if (isMobile()) {
    const deeplink = 'https://phantom.app/ul/v1/connect?redirect_link=' + encodeURIComponent(window.location.href);
    window.location.href = deeplink;
  } else {
    if (window.solana && window.solana.isPhantom) {
      try {
        const resp = await window.solana.connect();
        alert(`Connected: ${resp.publicKey.toString()}`);
      } catch (err) {
        console.error('Connection to Phantom failed', err);
      }
    } else {
      alert('Please install Phantom Wallet!');
    }
  }
}

document.getElementById('connect-wallet').addEventListener('click', connectPhantom);
