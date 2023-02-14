export interface ASIGNATURE {
  id: string
  name: string
  description: string
  image: string
  PCA: periodsCoursesAsignatures[]
}

interface periodsCoursesAsignatures {
  PCAU: periodCourseAsignatureUnits[]
}

interface periodCourseAsignatureUnits {
  unit: unit
  PCAUT: periodCourseAsignatureUnitsTopic[]
}

interface periodCourseAsignatureUnitsTopic {
  topic: topic
}

interface topic {
  id: string
  name: string
  description?: string
  video?: string
}

interface unit {
  id: string
  name: string
}
