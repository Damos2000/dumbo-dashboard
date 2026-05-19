export const loans = [
  {
    id: 'LC-2024-001',
    applicant: 'Customer 01',
    phone: '0XX-XXX-XX01',
    amount: 2500000,
    stage: 'รอเอกสาร',
    trustLevel: 78,
    docsSubmitted: 3,
    docsTotal: 5,
    result: null,
    updatedAt: '2024-05-19T09:30:00',
  },
  {
    id: 'LC-2024-002',
    applicant: 'Customer 02',
    phone: '0XX-XXX-XX02',
    amount: 1800000,
    stage: 'พิจารณา',
    trustLevel: 91,
    docsSubmitted: 5,
    docsTotal: 5,
    result: null,
    updatedAt: '2024-05-19T10:15:00',
  },
  {
    id: 'LC-2024-003',
    applicant: 'Customer 03',
    phone: '0XX-XXX-XX03',
    amount: 3200000,
    stage: 'อนุมัติ',
    trustLevel: 95,
    docsSubmitted: 5,
    docsTotal: 5,
    result: 'อนุมัติ',
    updatedAt: '2024-05-19T08:00:00',
  },
  {
    id: 'LC-2024-004',
    applicant: 'Customer 04',
    phone: '0XX-XXX-XX04',
    amount: 900000,
    stage: 'รอเอกสาร',
    trustLevel: 62,
    docsSubmitted: 2,
    docsTotal: 5,
    result: null,
    updatedAt: '2024-05-18T16:45:00',
  },
]

export const stageColors = {
  'รอเอกสาร': 'text-orange-500 bg-orange-50',
  'พิจารณา': 'text-purple-600 bg-purple-50',
  'อนุมัติ': 'text-purple-600 bg-purple-50',
  'ปฏิเสธ': 'text-red-500 bg-red-50',
}

export function getTrustColor(score) {
  if (score >= 90) return 'text-purple-600'
  if (score >= 75) return 'text-blue-600'
  if (score >= 60) return 'text-yellow-600'
  return 'text-red-500'
}

export function getTrustBg(score) {
  if (score >= 90) return 'bg-purple-500'
  if (score >= 75) return 'bg-blue-500'
  if (score >= 60) return 'bg-yellow-400'
  return 'bg-red-400'
}
