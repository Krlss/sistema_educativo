import { Unit } from "../../../domain/units/unit.entity";

export interface AsignatureProps {
  name: string;
  description: string;
  image: string;
}

export interface AsignatureCreateProps extends AsignatureProps {
  units: number[];
}

export interface AsignatureSaveProps extends AsignatureProps {
  units: Unit[];
}

export interface AsignatureUpdateProps extends AsignatureProps {
  units?: number[];
}
