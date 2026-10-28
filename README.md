# Práctica Web I: Alicia en el País de las Maravillas

Aplicación web interactiva desarrollada con HTML5, CSS3 y JavaScript nativo, implementando formularios, validaciones, manipulación del DOM y estructuras de control.

## 🔗 Enlace a la página publicada
Puedes ver la aplicación funcionando en línea aquí: [https://intialacoma-afk.github.io/ALICIA-EN-EL-PAIS-DE-LAS-MARAVILLAS/](https://intialacoma-afk.github.io/ALICIA-EN-EL-PAIS-DE-LAS-MARAVILLAS/)

## Estructura de archivos
- `index.html`: Contiene la estructura semántica y los formularios de los tres ejercicios.
- `styles.css`: Estilos visuales personalizados inspirados en la temática de la obra (sin frameworks ni Flexbox ni Grid).
- `script.js`: Lógica de programación, eventos, validaciones y cálculos con JavaScript con comandos básicos y sencillos.

## Ejercicios Incluidos
1. **La poción mágica de Alicia:** Uso de estructuras `if / else` para calcular cambios de altura y verificar si pasa por la puerta.
2. **La merienda del Sombrerero Loco:** Uso de estructuras `switch` para calcular precios de bebidas y descuentos por cantidad.
3. **El desafío de la Reina de Corazones:** Uso de bucles `for` para analizar secuencias de cartas (pares e impares).

---

## Casos de Prueba

### Ejercicio 1: La poción mágica de Alicia (`if / else`)
| Caso # | Altura Inicial (cm) | Poción Consumida (ml) | Resultado Esperado | Resultado Obtenido |
| :---: | :---: | :---: | :---: | :---: |
| **1 (Correcto)** | 150 | 50 | Altura final: 160 cm. Mensaje: No puede pasar. | *Éxito* |
| **2 (Correcto)** | 150 | 100 | Altura final: 170 cm. Mensaje: No puede pasar. | *Éxito* |
| **3 (Límite)** | 100 | 100 | Altura final: 120 cm. Mensaje: Cabe exactamente. | *Éxito* |
| **4 (Incorrecto)**| -50 | 20 | Mensaje de error (altura negativa no válida). | *Éxito (Bloqueado)* |
| **5 (Incorrecto)**| 140 | -10 | Mensaje de error (poción negativa no válida). | *Éxito (Bloqueado)* |

### Ejercicio 2: La merienda del Sombrerero Loco (`switch`)
| Caso # | Nombre | Bebida | Tazas | Resultado Esperado | Resultado Obtenido |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **1 (Correcto)** | Alicia | Té ($5) | 2 | Subtotal $10, Descuento 0%, Total: **$10.00** | *Éxito* |
| **2 (Correcto)** | Conejo | Café ($6) | 4 | Subtotal $24, Descuento 15%, Total: **$20.40** | *Éxito* |
| **3 (Límite)** | Sombrerero | Chocolate ($7)| 20 | Subtotal $140, Descuento 15%, Total: **$119.00** | *Éxito* |
| **4 (Incorrecto)**| (vacío) | Infusión ($4)| 3 | Mensaje de error (nombre obligatorio). | *Éxito (Bloqueado)* |
| **5 (Incorrecto)**| Liebre | Té ($5) | 25 | Mensaje de error (supera el límite). | *Éxito (Bloqueado)* |

### Ejercicio 3: El desafío de la Reina de Corazones (`for`)
| Caso # | Cantidad de Cartas | Resultado Esperado | Resultado Obtenido |
| :---: | :---: | :---: | :---: |
| **1 (Correcto)** | 5 | Pares: 2 (Suma 6) \| Impares: 3 (Suma 9) \| Mayor: Impares. | *Éxito* |
| **2 (Correcto)** | 4 | Pares: 2 (Suma 6) \| Impares: 2 (Suma 4) \| Mayor: Pares. | *Éxito* |
| **3 (Límite)** | 1 | Pares: 0 (Suma 0) \| Impares: 1 (Suma 1) \| Mayor: Impares. | *Éxito* |
| **4 (Incorrecto)**| 0 | Mensaje de error (mínimo 1 carta). | *Éxito (Bloqueado)* |
| **5 (Incorrecto)**| 150 | Mensaje de error (máximo 100 cartas). | *Éxito (Bloqueado)* |

---

## Evidencias y Capturas de Interfaz

### Ejercicio 1: La poción mágica
![Resultado Ejercicio 1](ejercicio1.png)

### Ejercicio 2: La merienda del Sombrerero
![Resultado Ejercicio 2](ejercicio2.png)

### Ejercicio 3: El desafío de la Reina
![Resultado Ejercicio 3](ejercicio3.png)
