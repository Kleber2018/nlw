/**
 * Converter hora hh:mm para int em minutos
 */

export function convertHourStringToMinutes(hourString: string){
     const [hour, minutes] = hourString.split(':').map(Number);
     const minutesAmount = (hour * 60) + minutes;
     return minutesAmount;
}