export const loans = [
  {
    id: 'LC-2024-001',
    lineId: 'U-LINE-9A3F',
    avatar: 'C1',
    applicant: 'Customer 01',
    phase: 'submitted',
    phaseLabel: 'ส่งคำขอแล้ว',
    trust: 'L3',
    docMain: { id_card: true, book_bank: true, bank_statement: true, salary_slip: true, name_change_cert: null },
    docJoint: null,
    decision: 'approved',
    decisionLabel: 'อนุมัติ',
    amount: '2,500,000',
    rate: '5.75%',
    conditions: [],
    updatedAt: '18 พ.ค. 68, 09:30',
  },
  {
    id: 'LC-2024-002',
    lineId: 'U-LINE-7B2C',
    avatar: 'C2',
    applicant: 'Customer 02',
    phase: 'doc_review',
    phaseLabel: 'ตรวจสอบเอกสาร',
    trust: 'L2',
    docMain: { id_card: true, book_bank: true, bank_statement: false, salary_slip: true, name_change_cert: null },
    docJoint: { id_card: true, book_bank: false, bank_statement: null, salary_slip: null, name_change_cert: null },
    decision: 'pending',
    decisionLabel: 'รอผล',
    amount: null,
    rate: null,
    conditions: [],
    updatedAt: '18 พ.ค. 68, 10:15',
  },
  {
    id: 'LC-2024-003',
    lineId: 'U-LINE-4D8E',
    avatar: 'C3',
    applicant: 'Customer 03',
    phase: 'pre_approve',
    phaseLabel: 'พิจารณาสินเชื่อ',
    trust: 'L2',
    docMain: { id_card: true, book_bank: true, bank_statement: true, salary_slip: true, name_change_cert: null },
    docJoint: null,
    decision: 'conditional',
    decisionLabel: 'มีเงื่อนไข',
    amount: '1,800,000',
    rate: '6.25%',
    conditions: ['ต้องมีหนังสือรับรองเงินเดือน', 'DSR อยู่ที่ 48% (ใกล้เกณฑ์)'],
    updatedAt: '18 พ.ค. 68, 08:30',
  },
  {
    id: 'LC-2024-004',
    lineId: 'U-LINE-2F1A',
    avatar: 'C4',
    applicant: 'Customer 04',
    phase: 'product_inquire',
    phaseLabel: 'สอบถามผลิตภัณฑ์',
    trust: 'L1',
    docMain: null,
    docJoint: null,
    decision: 'pending',
    decisionLabel: 'รอผล',
    amount: null,
    rate: null,
    conditions: [],
    updatedAt: '18 พ.ค. 68, 11:03',
  },
]

// Phase badge styles
export const phaseColors = {
  product_inquire: 'bg-blue-50 text-blue-600',
  doc_review:      'bg-amber-50 text-amber-600',
  pre_approve:     'bg-purple-50 text-purple-600',
  offer:           'bg-emerald-50 text-emerald-600',
  submitted:       'bg-green-50 text-green-700',
}
export const phaseDotColors = {
  product_inquire: 'bg-blue-500',
  doc_review:      'bg-amber-500',
  pre_approve:     'bg-purple-500',
  offer:           'bg-emerald-500',
  submitted:       'bg-green-600',
}

// Trust badge styles
export const trustColors = {
  L1: 'bg-slate-100 text-slate-500',
  L2: 'bg-blue-50 text-blue-600',
  L3: 'bg-green-50 text-green-700',
}

// Decision badge styles
export const decisionColors = {
  approved:    'bg-green-50 text-green-700',
  conditional: 'bg-amber-50 text-amber-600',
  declined:    'bg-red-50 text-red-600',
  pending:     'bg-slate-100 text-slate-400',
}

// Tab filters (keyed by Thai label)
export const TAB_FILTERS = {
  'ทั้งหมด': () => true,
  'รอเอกสาร': (l) => l.phase === 'doc_review',
  'พิจารณา':  (l) => ['pre_approve', 'offer'].includes(l.phase),
  'เสร็จสิ้น': (l) => l.phase === 'submitted',
}

// Document labels
export const DOC_LABELS = {
  id_card:          'บัตรประชาชน',
  book_bank:        'สมุดบัญชี',
  bank_statement:   'Statement บัญชี',
  salary_slip:      'สลิปเงินเดือน',
  name_change_cert: 'ใบเปลี่ยนชื่อ',
}

// Stepper config
export const PHASES_ORDER = ['product_inquire', 'doc_review', 'pre_approve', 'offer', 'submitted']
export const PHASES_LABEL = ['สอบถาม\nผลิตภัณฑ์', 'ตรวจสอบ\nเอกสาร', 'พิจารณา\nสินเชื่อ', 'ข้อเสนอ', 'ส่งคำขอ']
