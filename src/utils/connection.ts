import {DataConnection} from '../data-connection'
import {ConnectionOptions} from '../types'

export const connection = ({name, version, schemas}: ConnectionOptions) => {
  return new DataConnection(name, version, schemas)
}
