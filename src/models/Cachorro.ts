import { Animal } from "./Animal.js";
import { AnimalProps } from "../Interface/AnimalProps.js";

export interface CachorroProps extends AnimalProps {
  porte: string;
  precisaTosa: boolean;
}

export class Cachorro extends Animal<CachorroProps> {

  public getPorte(): string {
    return this.props.porte;
  }

  public getPrecisaTosa(): boolean {
    return this.props.precisaTosa;
  }
}
