function updateUTCTime() {
    const utcTimeElement = document.getElementById("utcTime");
    const now = new Date();
    utcTimeElement.textContent = now.toISOString().replace("T", " ").substring(0, 19);
}

updateUTCTime();