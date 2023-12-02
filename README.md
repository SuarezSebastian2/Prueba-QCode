# Calculador de Espacios Disponibles para Citas

Este proyecto incluye un programa en JavaScript que calcula y muestra el total de espacios disponibles para citas en un sistema de administración de agendas de servicios. Utiliza datos proporcionados a través de un servicio web.

## Funcionalidades

- **Obtención de Datos:** La clase `CitaService` se encarga de obtener datos desde un servicio web externo que proporciona información sobre citas programadas.

- **Cálculo de Espacios Disponibles:** La clase `CalculadorEspacios` toma los datos de citas y calcula el total de espacios disponibles para un día específico, considerando la duración mínima de una cita.

- **Salida Detallada:** Además de mostrar el total de espacios disponibles, se registra y muestra detalladamente las horas disponibles junto con la cantidad de espacios para cada una.

## Tecnologías Utilizadas

- **JavaScript:** El código está escrito en JavaScript, lo que permite su ejecución en entornos basados en Node.js.

## Principios SOLID

Este proyecto sigue los principios SOLID para promover un diseño de código robusto y mantenible:

- **SRP (Principio de Responsabilidad Única):** Las clases tienen responsabilidades específicas: `CitaService` para obtener datos y `CalculadorEspacios` para realizar cálculos y mostrar la salida.

- **OCP (Principio de Abierto/Cerrado):** El código está diseñado para ser extensible sin modificar las clases existentes.

- **LSP (Principio de Sustitución de Liskov):** Aunque no hay herencia directa, las clases están diseñadas de manera coherente y pueden intercambiarse según las necesidades.

- **ISP (Principio de Segregación de Interfaces):** Las clases no están obligadas a implementar interfaces innecesarias.

- **DIP (Principio de Inversión de Dependencia):** Las dependencias se gestionan a través de una interfaz (`CitaService`), permitiendo flexibilidad en la implementación.

## Buenas Prácticas

- Se utiliza `fetch` para realizar solicitudes HTTP en lugar de una biblioteca externa como `axios`.
- La lógica está modularizada en clases, siguiendo un enfoque orientado a objetos.

## Uso

Para calcular los espacios disponibles para un día específico, simplemente crea instancias de las clases `CitaService` y `CalculadorEspacios` y llama al método `calcularEspaciosDisponibles` en `CalculadorEspacios`, pasando el día como parámetro.

```javascript
const citaService = new CitaService('URL_DEL_SERVICIO_WEB');
const calculadorEspacios = new CalculadorEspacios(citaService);

calculadorEspacios.calcularEspaciosDisponibles('DIA_DE_LA_SEMANA');
```

Asegúrate de reemplazar `'URL_DEL_SERVICIO_WEB'` con la URL real de tu servicio web.
## Salida

![image](https://github.com/SuarezSebastian2/Prueba-QCode/assets/78248849/ddcc665f-1d3b-45c1-93e3-151426d7578d)
![image](https://github.com/SuarezSebastian2/Prueba-QCode/assets/78248849/8ebf8670-ea01-40a2-be84-82b94a435ce7)

