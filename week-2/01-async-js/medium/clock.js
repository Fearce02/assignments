function updateClock() {
    let currentTime = new Date();

    // Format: HH:MM::SS
    let hh = currentTime.getHours().toString().padStart(2, '0');
    let mm = currentTime.getMinutes().toString().padStart(2, '0');
    let ss = currentTime.getSeconds().toString().padStart(2, '0');
    let withoutAMPM = `${hh}:${mm}:${ss}`;

    // Format: HH:MM::SS AM/PM
    let withAMPM = currentTime.toLocaleTimeString([], {hour12: true});

    console.log(withoutAMPM);
    console.log(withAMPM);

    // Update the clock every second using setTimeout
    setTimeout(updateClock, 1000);
}

// Initial call to display the clock immediately
updateClock();
