import { Asignature } from "../../../domain/asignatures/asignature.entity";

export interface UnitProps {
  name: string;
}

export interface UnitCreateProps extends UnitProps {
  asignatures: number[];
}

export interface UnitSaveProps extends UnitProps {
  asignatures?: Asignature[];
}

export interface UnitUpdateProps extends UnitProps {
  asignatures?: number[];
}
