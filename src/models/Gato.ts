import { Animal } from "./Animal.js";
import { AnimalProps } from "../Interface/AnimalProps.js";

export interface GatoProps extends AnimalProps {
  fiveLvTestado: boolean;
  estaIndoAo: boolean;
}

export class Gato extends Animal<GatoProps> {

  public getFiveLvTestado(): boolean {
    return this.props.fiveLvTestado;
  }

  public getEstaIndoAo(): boolean {
    return this.props.estaIndoAo;
  }
}
