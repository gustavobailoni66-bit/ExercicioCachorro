import { Cachorro } from "./src/models/Cachorro.js";
import { Gato } from "./src/models/Gato.js";

const cachorro = new Cachorro({
  nomePaciente: "Rex",
  nomeTutor: "João",
  pesoKG: 15,
  porte: "Médio",
  precisaTosa: true
});

const gato = new Gato({
  nomePaciente: "Mingau",
  nomeTutor: "Maria",
  pesoKG: 5,
  fiveLvTestado: true,
  estaIndoAo: false
});

console.log("CACHORRO");
console.log(cachorro.getNomePaciente());
console.log(cachorro.getNomeTutor());
console.log(cachorro.getPesoKG());
console.log(cachorro.getPorte());
console.log(cachorro.getPrecisaTosa());

console.log("\nGATO");
console.log(gato.getNomePaciente());
console.log(gato.getNomeTutor());
console.log(gato.getPesoKG());
console.log(gato.getFiveLvTestado());
console.log(gato.getEstaIndoAo());

cachorro.setPeso(17);
gato.setPeso(6);

console.log("\nPesos atualizados:");
console.log("Cachorro:", cachorro.getPesoKG());
console.log("Gato:", gato.getPesoKG());
