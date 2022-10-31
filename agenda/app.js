// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];
// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true),
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true),
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true),
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true),
  },
];

// OBTENER UN VALOR ALTEAOTRIO TRU - FALSE
var getRandom = () => {
  let disp = Math.random() < 0.5 ? true : false;
  return disp;
};

// ASIGNAR UNA DISPONIBILIDAD ALEATORIA A CADA MIEMBRO DEL EQUIPO
var assignAvailabilityTeam = (arr) => {
  for (person of arr) {
    for (let i = 0; i < person.availability.length; i++)  person.availability[i] = getRandom();
  }
};

// OBTENER DISPONIBILIDAD HORARIA DE CADA PERSONA DEL EQUIPO
var getAvailabilityTeam = (arrTeam, arrWorkHours) => {
    for (let x = 0; x < arrTeam.length; x++) {
    console.log("La disponibilidad de " + arrTeam[x].name + " es:");
    for (let i = 0; i < arrWorkHours.length; i++) {
        let dispSN = "";
        arrTeam[x].availability[i] ? dispSN = "si" : dispSN = "no";
        console.log(arrWorkHours[i] + ": " + dispSN);
    }
  }
};

// BUSCAR PRIMER HUECO DISPONIBLE
var availabilityTeam = (arrTeam, arrWorkHours) => {
    let i = 0;
    while (i < arrWorkHours.length){
        let x = 0;
        allDisp = true;
        while (x < arrTeam.length && allDisp == true){
            if (!arrTeam[x].availability[i]) allDisp = false;
            x++
        }
        if (allDisp) return console.log("Hueco encontrado en el horario " + arrWorkHours[i]);
        i++
    }
    if (!allDisp) console.log("Lo siento. No hay hueco en el equipo");
}

// LLAMADO DE FUNCIONES 
assignAvailabilityTeam(myTeam);
getAvailabilityTeam(myTeam, WORK_HOURS);
availabilityTeam(myTeam, WORK_HOURS);
