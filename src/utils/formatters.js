export function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleString('th-TH', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })
}

export function formatAmount(n) {
  return n.toLocaleString('th-TH') + ' บาท'
}
