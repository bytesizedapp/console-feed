import console from './console'

function Log(type: string, ...data: any[]) {
  return new Promise((resolve, reject) => {
    const length = console.logs.length
    console[type](...data)

    setTimeout(() => {
      if (console.logs.length !== length) {
        resolve(console.logs[console.logs.length - 1])
      }
      reject()
    })
  })
}

export default Log
