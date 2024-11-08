function updateDateTime() { 
    const now = new Date(); 
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'America/Bogota' }; 
    const dateTimeString = now.toLocaleString('es-ES', options); 
    document.getElementById('date-time').innerHTML = dateTimeString; } 
    // Actualiza la fecha y la hora cada segundo 
    setInterval(updateDateTime, 1000); 
    // Llamada inicial para que se muestre inmediatamente al cargar la página 
    updateDateTime();