# Banco de Promesas 2.0

Este repositorio contiene un ejercicio práctico para los estudiantes, que simula el funcionamiento de un banco digital utilizando promesas en JavaScript. El objetivo es manejar correctamente los diferentes estados de una promesa según la información del cliente.

## Instrucciones

1. **Clona o descarga** este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador para ver el proyecto en funcionamiento.
3. Edita el archivo `script.js` para resolver los siguientes casos:

### Casos a resolver:

1. **Caso 1: Cuenta activa con fondos suficientes**
   - Cambia el valor de `estadoCuenta` a `"activa"`.
   - Cambia el valor de `fondos` a un valor mayor o igual a 100.
   - Al resolver la promesa, debería mostrarse el mensaje de éxito.

2. **Caso 2: Cuenta activa con fondos insuficientes**
   - Cambia el valor de `estadoCuenta` a `"activa"`.
   - Cambia el valor de `fondos` a un valor menor a 100.
   - Al rechazar la promesa, debería mostrarse el mensaje de "Fondos insuficientes".

3. **Caso 3: Cuenta inactiva**
   - Cambia el valor de `estadoCuenta` a `"inactiva"`.
   - Al rechazar la promesa, debería mostrarse el mensaje de "Su cuenta no está activa".

4. **Otros casos: Personaliza los valores del objeto `cliente` para simular otros escenarios**.

## Archivos incluidos

- `index.html`: Estructura básica del proyecto.
- `style.css`: Hoja de estilo para la visualización.
- `script.js`: Lógica principal para la simulación de la consulta.

## Recomendaciones

- Utiliza la consola del navegador para ver los mensajes de estado y errores que se imprimen al cargar la página.
- Modifica los valores del objeto `cliente` y observa cómo cambia el comportamiento de la promesa.

## Autor

Prof. Ing. Fabio Argañaraz Azua