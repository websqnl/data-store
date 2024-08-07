import {DataSchema} from './types'
import {async} from './utils'

export class DataConnection {
  constructor(
    private name: string,
    private version: number,
    private schemas: DataSchema[],
  ) {}

  open() {
    return async<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open(this.name, this.version)

      request.addEventListener('upgradeneeded', () => {
        const db = request.result

        for (const schema of this.schemas) {
          if (!db.objectStoreNames.contains(schema.name)) {
            const collection = db.createObjectStore(schema.name, {
              keyPath: schema.keyPath,
            })

            for (const index of schema.indexes) {
              collection.createIndex(index.name, index.keyPath, {
                unique: index.unique,
              })
            }
          }
        }
      })

      request.addEventListener('success', () => resolve(request.result))
      request.addEventListener('error', () => reject(request.error))
    })
  }
}
