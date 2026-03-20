window.onload = function () {
    alert("Bienvenido a STARCIND - Agencia de Marketing Digital");
    alert("¡Explora nuestros servicios y descubre cómo podemos ayudarte a crecer tu negocio en línea!");
};
document.querySelector('a[href="#quienes-somos"]').addEventListener('click', function (event) {
    alert("hizo click en el enlace de 'Quiénes Somos'");
    setTimeout(function () {
        document.body.style.backgroundColor = '#1b4b75'; // Cambia el fondo a un color suave
    }, 3000); // Espera 3 segundos antes de mostrar el mensaje
});
document.querySelectorAll('.btn-warning').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
       // e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const servicio = btn.closest('.card').querySelector('.card-title').textContent; // Obtiene el nombre del servicio
        alert('Solicitando informacion sobre: '+ servicio);
    });
});
document.querySelectorAll('.btn-danger').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const servicio = btn.closest('.card').querySelector('.card-title').textContent; // Obtiene el nombre del servicio
        alert('gracias por su interés en el servicio ');
        setTimeout(function () {
            window.location.href = btn.getAttribute('href'); // Redirige después de mostrar el mensaje
        }, 2000); // Espera 2 segundos antes de redirigir
    });
});