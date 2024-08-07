import {AsyncCallback} from '../types/async-callback'

export const async = <T>(executor: AsyncCallback<T>) => {
  return new Promise<T>(executor)
}
