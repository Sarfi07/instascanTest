
  const scannerContainer = document.getElementById('scanner-container');
  const startScanButton = document.getElementById('start-scan');

  // Create a new instance of the Instascan Scanner
  const scanner = new Instascan.Scanner({ video: scannerContainer });

  // Attach event listener to the start scan button
  startScanButton.addEventListener('click', () => {
    scanner.start(); // Start camera feed
    scanner.scan((content, image) => {
      // Content is the scanned data (e.g., QR code text)
      alert('Scanned: ' + content);
      scanner.stop(); // Stop camera feed
    });
  });
