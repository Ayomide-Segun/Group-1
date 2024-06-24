function OpenPopup() {
    var popup = document.getElementById('download-quality');
    var overlay = document.getElementById('overlay');
    popup.style.display = 'flex'; // Show the pop-up
    overlay.style.display = 'block'; // Show the overlay
}

function ClosePopup() {
    var popup = document.getElementById('download-quality');
    var overlay = document.getElementById('overlay');
    popup.style.display = 'none'; // Hide the pop-up
    overlay.style.display = 'none'; // Hide the overlay
}