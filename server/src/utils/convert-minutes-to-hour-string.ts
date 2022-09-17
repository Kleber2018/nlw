/**
 * Converter hora hh:mm para int em minutos
 */

export function convertMinutesToHourString(minutesAmount: number){
     const hours = Math.floor(minutesAmount / 60 );
     const minutes = minutesAmount %60

     return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`; //adiciona o 0 para hora e minuto sem 2 digitos
}