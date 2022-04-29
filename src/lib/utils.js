export function formatDate(date) {
  if(typeof date?.getMonth !== 'function') {
    date = new Date(date)
  }

  return date.toLocaleDateString()
}