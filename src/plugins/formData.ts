export function dateFormat(dateData:any) {
  let date = new Date(dateData)
  let y = date.getFullYear()
  let m:string | number = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  let d:string | number = date.getDate()
  d = d < 10 ? ('0' + d) : d
  const time = y + '-' + m + '-' + d
  return time
}