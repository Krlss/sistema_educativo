import { Unit } from "../../../domain/units/unit.entity";

export interface TopicProps {
  name: string;
  image: string;
  video: string;
}

export interface TopicCreateProps extends TopicProps {
  unit: number;
}

export interface TopicSaveProps extends TopicProps {
  unit?: Unit;
}

export interface TopicUpdateProps extends TopicProps {
  unit?: number[];
}
