
class CitaService {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
    }

    async obtenerCitas() {
        try {
            const response = await fetch(this.dataUrl);
            return await response.json();
        } catch (error) {
            console.error('Error al obtener los datos:', error.message);
            throw error;
        }
    }
}

class CalculadorEspacios {
    constructor(citaService) {
        this.citaService = citaService;
    }

    async calcularEspaciosDisponibles(dia) {
        try {
            const citas = await this.citaService.obtenerCitas();

            const citasDelDia = citas.filter(cita => cita.Day.toLowerCase() === dia.toLowerCase());
            let totalEspacios = 0;
            const horasDisponibles = [];
            citasDelDia.forEach(cita => {
                const duracion = parseInt(cita.Duration);
                const espacios = Math.floor(60 / duracion);
                totalEspacios += espacios;
                horasDisponibles.push({ hour: cita.Hour, availableSpaces: espacios });
            });

            console.log(`Total de espacios disponibles para ${dia}: ${totalEspacios}`);
            console.log('Horas disponibles:');
            horasDisponibles.forEach(hora => {
                console.log(`Hora: ${hora.hour}`);
            });

            return totalEspacios;
        } catch (error) {
            console.error('Error al calcular los espacios disponibles:', error.message);
            return -1;
        }
    }
}

const citaService = new CitaService('https://luegopago.blob.core.windows.net/luegopago-uploads/Pruebas%20LuegoPago/data.json');
const calculadorEspacios = new CalculadorEspacios(citaService);

calculadorEspacios.calcularEspaciosDisponibles('Jueves');
