import { fileURLToPath } from 'url';
import { format } from 'date-fns'
import { v4 as uuid4 } from 'uuid';

import fsPromises from 'node:fs/promises'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const logEvent = async (...data) => {
  const [message1, message2] = data

  const dateTime = `${format(new Date(), 'MM/dd/yyyy\tHH:mm:ss')}`
  const logItem = `[${dateTime}]\t${uuid4()}\t${message1}${message2}`

  try {
   await fsPromises.writeFile(path.join(__dirname, 'eventLog.txt'), logItem)
  }
  catch(err) {
    console.log(err)
  }
}

export { logEvent }