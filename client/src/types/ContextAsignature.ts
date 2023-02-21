export interface ASIGNATURE {
  id: string
  name: string
  description: string
  image: string
  units: UNIT[]
}

interface UNIT {
  id: string
  name: string
  testActive: boolean
  topics: TOPIC[]
}

interface TOPIC {
  id: string
  name: string
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
