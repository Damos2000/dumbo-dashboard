export const TAB_FILTERS = {
  'ทั้งหมด': () => true,
  'รอเอกสาร': (l) => l.stage === 'รอเอกสาร',
  'พิจารณา': (l) => l.stage === 'พิจารณา',
  'เสร็จสิ้น': (l) => ['อนุมัติ', 'ปฏิเสธ'].includes(l.stage),
}
