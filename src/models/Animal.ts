import { AnimalProps } from "../Interface/AnimalProps.js";

export class Animal<T extends AnimalProps> {
  protected props: T;

  constructor(props: T) {
    this.props = props;
  }

  public getNomePaciente(): string {
    return this.props.nomePaciente;
  }

  public getNomeTutor(): string {
    return this.props.nomeTutor;
  }

  public getPesoKG(): number {
    return this.props.pesoKG;
  }

  public setPeso(peso: number): void {
    this.props.pesoKG = peso;
  }
}
