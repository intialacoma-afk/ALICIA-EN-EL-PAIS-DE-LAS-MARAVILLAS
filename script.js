/* ================= SCRIPT - ALICIA EN EL PAÍS DE LAS MARAVILLAS ================= */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // EJERCICIO 1: La poción mágica de Alicia (Estructura condicional if / else)
    // =========================================================================
    const formPocion = document.getElementById('formPocion');
    
    formPocion.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue

        // Captura de datos usando getElementById y value
        const alturaInput = document.getElementById('alturaAlicia').value;
        const mlInput = document.getElementById('mlPocion').value;
        const divResultado = document.getElementById('resultadoPocion');

        // Conversión a números
        const alturaInicial = parseFloat(alturaInput);
        const ml = parseFloat(mlInput);

        // Validación de datos correctos y positivos
        if (isNaN(alturaInicial) || isNaN(ml) || alturaInicial <= 0 || ml < 0) {
            divResultado.style.display = 'block';
            divResultado.style.borderColor = '#ff5252';
            divResultado.innerHTML = '<strong>❌ Error:</strong> Ingrese valores numéricos válidos (la altura debe ser mayor a 0 y la poción mayor o igual a 0).';
            return;
        }

        // Definición de la regla matemática y cálculo
        const reglaTexto = "Nueva Altura = Altura Inicial + (ml consumidos * 0.2)";
        const nuevaAltura = alturaInicial + (ml * 0.2);
        const alturaPuerta = 120; // Altura fija de referencia de la puerta (cm)

        // Estructura condicional if / else if / else
        let mensajeEstado = "";
        if (nuevaAltura === alturaPuerta) {
            mensajeEstado = "¡Alicia cabe exactamente por la puerta, pero rozando el marco!";
        } else if (nuevaAltura < alturaPuerta) {
            mensajeEstado = "¡Perfecto! Alicia es ahora más baja que la puerta y puede pasar sin problemas.";
        } else {
            mensajeEstado = "¡Oh no! Alicia ha crecido demasiado y no puede atravesar la puerta. ¡Se requiere corregir datos!";
        }

        // Mostrar resultados en la interfaz usando innerHTML y textContent implícito
        divResultado.style.display = 'block';
        divResultado.style.borderColor = '#d4af37';
        divResultado.innerHTML = `
            <strong>🧪 Resultado de la Poción Mágica:</strong><br>
            • <em>Regla aplicada:</em> ${reglaTexto}<br>
            • <em>Altura inicial:</em> ${alturaInicial} cm<br>
            • <em>Poción consumida:</em> ${ml} ml<br>
            • <strong>Altura final calculada:</strong> ${nuevaAltura.toFixed(2)} cm<br>
            • <strong>Estado frente a la puerta (120 cm):</strong> ${mensajeEstado}
        `;
    });


    // =========================================================================
    // EJERCICIO 2: La merienda del Sombrerero Loco (Estructura switch)
    // =========================================================================
    const formSombrerero = document.getElementById('formSombrerero');
    
    formSombrerero.addEventListener('submit', function(e) {
        e.preventDefault();

        // Captura de datos
        const nombre = document.getElementById('nombreInvitado').value.trim();
        const bebida = document.getElementById('tipoBebida').value;
        const tazasInput = document.getElementById('cantidadTazas').value;
        const divResultado = document.getElementById('resultadoSombrerero');

        const tazas = parseInt(tazasInput);

        // Validación de campos vacíos y rangos
        if (nombre === "" || !bebida || isNaN(tazas) || tazas < 1 || tazas > 20) {
            divResultado.style.display = 'block';
            divResultado.style.borderColor = '#ff5252';
            divResultado.innerHTML = '<strong>❌ Error:</strong> Complete el nombre, seleccione una bebida y asegúrese de que las tazas estén entre 1 y 20.';
            return;
        }

        let precioUnitario = 0;
        let nombreBebidaTexto = "";

        // Estructura de selección múltiple (switch) para los precios de las bebidas
        switch (bebida) {
            case 'te':
                precioUnitario = 5;
                nombreBebidaTexto = "Té de las Locuras";
                break;
            case 'cafe':
                precioUnitario = 6;
                nombreBebidaTexto = "Café del Dormir";
                break;
            case 'infusion':
                precioUnitario = 4;
                nombreBebidaTexto = "Infusión de Rosas Blancas";
                break;
            case 'chocolate':
                precioUnitario = 7;
                nombreBebidaTexto = "Chocolate del Gato de Cheshire";
                break;
            default:
                precioUnitario = 0;
                nombreBebidaTexto = "Desconocida";
        }

        // Cálculos de subtotal, descuento condicional y total
        const subtotal = precioUnitario * tazas;
        
        let descuentoPorcentaje = 0;
        if (tazas >= 4) {
            descuentoPorcentaje = 0.15; // 15% de descuento si pide 4 tazas o más
        } else {
            descuentoPorcentaje = 0;
        }

        const descuentoMonto = subtotal * descuentoPorcentaje;
        const total = subtotal - descuentoMonto;

        // Mostrar resultados en la interfaz
        divResultado.style.display = 'block';
        divResultado.style.borderColor = '#d4af37';
        divResultado.innerHTML = `
            <strong>🫖 Factura de la Merienda:</strong><br>
            • <em>Invitado:</em> ${nombre}<br>
            • <em>Bebida elegida:</em> ${nombreBebidaTexto}<br>
            • <em>Cantidad de tazas:</em> ${tazas}<br>
            • <em>Precio unitario:</em> $${precioUnitario}.00<br>
            • <em>Subtotal:</em> $${subtotal.toFixed(2)}<br>
            • <em>Descuento aplicado:</em> ${(descuentoPorcentaje * 100)}% (-$${descuentoMonto.toFixed(2)})<br>
            • <strong>Total a pagar:</strong> $${total.toFixed(2)}
        `;
    });


    // =========================================================================
    // EJERCICIO 3: El desafío de la Reina de Corazones (Estructura for)
    // =========================================================================
    const formReina = document.getElementById('formReina');
    
    formReina.addEventListener('submit', function(e) {
        e.preventDefault();

        // Captura de datos
        const cartasInput = document.getElementById('cantidadCartas').value;
        const divResultado = document.getElementById('resultadoReina');

        const nCartas = parseInt(cartasInput);

        // Validación del límite (1 a 100)
        if (isNaN(nCartas) || nCartas < 1 || nCartas > 100) {
            divResultado.style.display = 'block';
            divResultado.style.borderColor = '#ff5252';
            divResultado.innerHTML = '<strong>❌ Error:</strong> Ingrese un número de cartas válido entre 1 y 100.';
            return;
        }

        let secuenciaArray = [];
        let sumaPares = 0;
        let cuentaPares = 0;
        let sumaImpares = 0;
        let cuentaImpares = 0;

        // Estructura repetitiva (for) para recorrer los números y clasificar pares/impares
        for (let i = 1; i <= nCartas; i++) {
            secuenciaArray.push(i);
            
            if (i % 2 === 0) {
                sumaPares += i;
                cuentaPares++;
            } else {
                sumaImpares += i;
                cuentaImpares++;
            }
        }

        // Comparación para determinar qué grupo acumuló mayor suma
        let mensajeGrupo = "";
        if (sumaPares > sumaImpares) {
            mensajeGrupo = "El grupo de los números PARES acumuló la mayor suma.";
        } else if (sumaImpares > sumaPares) {
            mensajeGrupo = "El grupo de los números IMPARES acumuló la mayor suma.";
        } else {
            mensajeGrupo = "¡Hay un empate exacto entre las sumas de pares e impares!";
        }

        // Mostrar resultados en la interfaz
        divResultado.style.display = 'block';
        divResultado.style.borderColor = '#d4af37';
        divResultado.innerHTML = `
            <strong>👑 Resultado del Desafío de la Reina:</strong><br>
            • <em>Secuencia analizada (${nCartas} cartas):</em> ${secuenciaArray.join(', ')}<br><br>
            • <strong>Números Pares:</strong> ${cuentaPares} en total | Suma = ${sumaPares}<br>
            • <strong>Números Impares:</strong> ${cuentaImpares} en total | Suma = ${sumaImpares}<br><br>
            • <strong>Veredicto de la corte:</strong> ${mensajeGrupo}
        `;
    });

});