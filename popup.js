const targetDomains = [
  "google.com",
  "facebook.com",
  "netflix.com",
  "amazon.com"
];

document.getElementById("actionBtn").addEventListener("click", async () => {
  const email = document.getElementById("userEmail").value.trim();
  const statusPanel = document.getElementById("statusPanel");
  const statusText = document.getElementById("statusText");
  const progressBar = document.getElementById("progressBar");
  const resultsSummary = document.getElementById("resultsSummary");
  const purgeCount = document.getElementById("purgeCount");
  
  if (!email) {
    alert("Please paste an email first!");
    return;
  }

  // Reset and display the progress UI
  statusPanel.style.display = "block";
  resultsSummary.style.display = "none";
  progressBar.style.width = "0%";
  let clearedCount = 0;

  for (let i = 0; i < targetDomains.length; i++) {
    const domain = targetDomains[i];
    statusText.innerText = `Clearing session data for ${domain}...`;
    
    try {
      const cookies = await chrome.cookies.getAll({ domain: domain });
      
      if (cookies.length > 0) {
        clearedCount++;
        for (const cookie of cookies) {
          const url = "https://" + (cookie.domain.startsWith(".") ? cookie.domain.slice(1) : cookie.domain) + cookie.path;
          await chrome.cookies.remove({ url: url, name: cookie.name });
        }
      }
    } catch (error) {
      console.error(`Error clearing ${domain}:`, error);
    }

    // Update progress bar percentage dynamically
    const progressPercent = Math.round(((i + 1) / targetDomains.length) * 100);
    progressBar.style.width = `${progressPercent}%`;
    
    // Tiny delay to make the UI look fluid and operational
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  // Wrap up the process
  statusText.innerText = "Session purge complete!";
  purgeCount.innerText = `${clearedCount} / ${targetDomains.length}`;
  resultsSummary.style.style.display = "flex";
});
