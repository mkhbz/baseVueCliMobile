export default function (code, errMsg, response) {

  // Message({
  //   message: errMsg,
  //   type: 'error',
  //   duration: 2.5 * 1000,

  // })
}

const httpErrorStatusMap = [
  {
    code: [401, 403],
    msg: '登录信息已过期，请重新登录'
  },
  {
    code: 404,
    msg: '接口未定义',
  },
  {
    code: 500,
    msg: '服务器错误',
  }
]

export function httpErrorHandler(callback) {
  const result = httpErrorStatusMap.find((item) => {
    const codes = Array.isArray(item) ? item : [item]
    return codes.includes(code)
  })
  const msg = (result && result.msg) || '服务器繁忙，请稍后再试'
  const type = (result && result.errorType) || 'error'
  const duration = (result && result.duration) || 2.5 * 1000
  if (result && typeof result.action === 'function') {
    result.action()
  }
  // Message({
  //   message: msg,
  //   type,
  //   duration,
  //   onClose: () => {
  //     if (result && typeof result.action === 'function') {
  //       result.action()
  //     }
  //   }
  // })
}