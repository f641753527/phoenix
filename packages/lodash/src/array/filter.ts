interface CallbackFnType<T> {
  (item: T, i: number, source: T[]): boolean
}

export interface FilterFnType<T=any> {
  (sourceArray: T[], fn: CallbackFnType<T>): T[]
}

const filter = <T=any>(sourceArray: T[], callback: CallbackFnType<T>): T[] => {
  const filteredArray = []
  for(let i = 0; i < sourceArray.length; i++) {
    const item = sourceArray[i]
    const isOK = callback(item, i, sourceArray)
    isOK && filteredArray.push(item)
  }
  return filteredArray
}

export default filter
