export default function({ $axios, redirect, error }) {
  $axios.onRequest((config) => {
    console.log('onRequest')
  })
  $axios.onResponse((response) => {
    console.log('onResponse')
    console.log(response.data.status)
  })
  // 请求出错
  $axios.onError((e) => {
    console.log('onError')
    redirect('/error')
  })
}
