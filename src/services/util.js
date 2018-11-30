import { List, OrderedMap } from 'immutable'

export function generateId() {
  return Date.now()
}

export function fbToEntities(values, DataRecord) {
  return new List(
    Object.entries(values).map(
      ([id, value]) => new DataRecord({ id, ...value })
    )
  )
}

export function fbToMapEntities(values, DataRecord) {
  return Object.entries(values).reduce(
    (acc, [id, value]) => acc.set(id, new DataRecord({ id, ...value })),
    new OrderedMap()
  )
}
