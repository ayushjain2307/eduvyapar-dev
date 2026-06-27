export const mockMetrics = {
  totalStudents: 2341,
  avgAttendance: 94.2,
  feeCollected: '₹18.4L',
  pendingTasks: 48,
}

export const mockApplications = [
  { month: 'Jan', approved: 45, pending: 18, rejected: 12 },
  { month: 'Feb', approved: 52, pending: 14, rejected: 8 },
  { month: 'Mar', approved: 61, pending: 20, rejected: 15 },
  { month: 'Apr', approved: 48, pending: 22, rejected: 14 },
  { month: 'May', approved: 55, pending: 12, rejected: 16 },
  { month: 'Jun', approved: 51, pending: 11, rejected: 12 },
]

export const mockFeeTrend = [
  { month: 'Jan', collected: 14.2 },
  { month: 'Feb', collected: 11.8 },
  { month: 'Mar', collected: 16.5 },
  { month: 'Apr', collected: 13.1 },
  { month: 'May', collected: 15.9 },
  { month: 'Jun', collected: 18.4 },
]

export const mockNotices = [
  { id: 1, title: 'PTM scheduled for today at 4:30 PM', tag: 'Urgent', date: 'Jun 10' },
  { id: 2, title: 'Annual Sports Day — Registration Open', tag: 'General', date: 'Jun 8' },
  { id: 3, title: 'Semester exams timetable published', tag: 'Exam', date: 'Jun 7' },
  { id: 4, title: 'Holiday — Bank Holiday (Jun 15)', tag: 'General', date: 'Jun 6' },
]

export const mockEvents = [
  { id: 1, day: 10, month: 'Jun', name: 'Parent-Teacher Meeting', time: '4:30 PM · Main Hall', color: 'var(--te-50)', dayColor: 'var(--te-600)' },
  { id: 2, day: 15, month: 'Jun', name: 'Bank Holiday', time: 'Full Day · Campus closed', color: 'var(--am-50)', dayColor: 'var(--am-600)' },
  { id: 3, day: 20, month: 'Jun', name: 'Sports Day Registrations Close', time: '11:59 PM', color: '#F5F3FF', dayColor: '#7C3AED' },
  { id: 4, day: 28, month: 'Jun', name: 'Semester Exam begins', time: '9:00 AM · All blocks', color: '#FFF1F2', dayColor: '#BE123C' },
]

export interface Module {
  id: string
  name: string
  icon: string
  color: string
  bg: string
  category: string
  pinned: boolean
  subs: string[]
}

export const mockModules: Module[] = [
  // Configuration
  { id: 'system-config', name: 'System Configuration', icon: 'ti-settings-2', color: '#7C3AED', bg: '#F5F3FF', category: 'Configuration', pinned: false, subs: ['General Settings', 'Academic Year', 'School Profile', 'Roles & Permissions', 'Notification Settings'] },
  { id: 'user-mgmt', name: 'User Management', icon: 'ti-user-cog', color: '#6D28D9', bg: '#EDE9FE', category: 'Configuration', pinned: false, subs: ['Create User', 'Manage Roles', 'Access Control', 'Audit Log'] },
  // Admission
  { id: 'admission', name: 'Admission', icon: 'ti-user-plus', color: '#0D9488', bg: '#F0FDFA', category: 'Admission', pinned: true, subs: ['New Application', 'Application List', 'Enquiry Register', 'Document Checklist', 'Admission Status', 'Interview Schedule'] },
  { id: 'pre-admission', name: 'Pre-Admission Enquiry', icon: 'ti-mail', color: '#0891B2', bg: '#ECFEFF', category: 'Admission', pinned: false, subs: ['Enquiry Form', 'Enquiry List', 'Follow-up', 'Convert to Admission'] },
  { id: 'document-mgmt', name: 'Document Management', icon: 'ti-file-certificate', color: '#0E7490', bg: '#CFFAFE', category: 'Admission', pinned: false, subs: ['Upload Documents', 'Verify Documents', 'Missing Documents', 'Archive'] },
  // Finance
  { id: 'fees', name: 'Fee Management', icon: 'ti-cash', color: '#D97706', bg: '#FFFBEB', category: 'Finance', pinned: true, subs: ['Fee Structure', 'Collect Fee', 'Fee Receipt', 'Due Report', 'Concession', 'Refund'] },
  { id: 'payroll', name: 'Payroll', icon: 'ti-wallet', color: '#92400E', bg: '#FEF3C7', category: 'Finance', pinned: false, subs: ['Salary Structure', 'Process Payroll', 'Payslip', 'TDS', 'PF & ESI'] },
  { id: 'accounts', name: 'Accounts & Ledger', icon: 'ti-report-money', color: '#B45309', bg: '#FDE68A', category: 'Finance', pinned: false, subs: ['Income', 'Expense', 'Journal Entry', 'Balance Sheet', 'Trial Balance'] },
  // Academics
  { id: 'attendance', name: 'Attendance', icon: 'ti-clipboard-check', color: '#2563EB', bg: '#EFF6FF', category: 'Academics', pinned: false, subs: ['Daily Attendance', 'Bulk Attendance', 'Biometric Sync', 'Attendance Report', 'Leave Request'] },
  { id: 'academics', name: 'Academics', icon: 'ti-book', color: '#1D4ED8', bg: '#DBEAFE', category: 'Academics', pinned: false, subs: ['Curriculum', 'Subjects', 'Timetable', 'Lesson Plan', 'Homework', 'Chapter Progress'] },
  { id: 'examinations', name: 'Examinations', icon: 'ti-pencil', color: '#1E40AF', bg: '#BFDBFE', category: 'Academics', pinned: false, subs: ['Exam Schedule', 'Hall Ticket', 'Mark Entry', 'Report Card', 'Rank List'] },
  { id: 'library', name: 'Library', icon: 'ti-books', color: '#7C3AED', bg: '#EDE9FE', category: 'Academics', pinned: false, subs: ['Book Catalogue', 'Issue/Return', 'Overdue', 'Library Card', 'Reports'] },
  // Staff
  { id: 'staff', name: 'Staff Management', icon: 'ti-users', color: '#059669', bg: '#ECFDF5', category: 'Staff', pinned: false, subs: ['Staff Profile', 'Attendance', 'Leave', 'Performance', 'Documents', 'Transfer'] },
  { id: 'recruitment', name: 'Recruitment', icon: 'ti-briefcase', color: '#047857', bg: '#D1FAE5', category: 'Staff', pinned: false, subs: ['Job Postings', 'Applications', 'Interview', 'Offer Letter', 'Onboarding'] },
  { id: 'training', name: 'Training & CPD', icon: 'ti-certificate', color: '#065F46', bg: '#A7F3D0', category: 'Staff', pinned: false, subs: ['Training Calendar', 'Enroll', 'Attendance', 'Certificates', 'Skill Matrix'] },
  // Analytics
  { id: 'analytics', name: 'Analytics & Reports', icon: 'ti-chart-pie', color: '#DC2626', bg: '#FEF2F2', category: 'Analytics', pinned: false, subs: ['Dashboard Reports', 'Custom Reports', 'KPI Tracker', 'Export Center', 'Scheduled Reports'] },
  { id: 'performance', name: 'Academic Performance', icon: 'ti-trending-up', color: '#B91C1C', bg: '#FEE2E2', category: 'Analytics', pinned: false, subs: ['Class Performance', 'Student Performance', 'Subject Analysis', 'Comparison Report'] },
  // Campus
  { id: 'transport', name: 'Transport', icon: 'ti-bus', color: '#0369A1', bg: '#E0F2FE', category: 'Campus', pinned: false, subs: ['Route Management', 'Vehicle Tracker', 'Student Bus Pass', 'Driver Attendance', 'Fuel Log'] },
  { id: 'hostel', name: 'Hostel', icon: 'ti-building', color: '#9333EA', bg: '#FAF5FF', category: 'Campus', pinned: false, subs: ['Room Allotment', 'Hostel Fees', 'Warden Log', 'Visitor Register', 'Mess Menu'] },
  { id: 'canteen', name: 'Canteen', icon: 'ti-soup', color: '#EA580C', bg: '#FFF7ED', category: 'Campus', pinned: false, subs: ['Menu Management', 'Orders', 'Billing', 'Vendor Management', 'Nutrition Report'] },
  { id: 'events', name: 'Events & Activities', icon: 'ti-calendar-event', color: '#7C3AED', bg: '#F5F3FF', category: 'Campus', pinned: false, subs: ['Add Event', 'Event Calendar', 'Registrations', 'Gallery', 'Certificates'] },
  { id: 'health', name: 'Health & Wellness', icon: 'ti-heart-rate-monitor', color: '#BE123C', bg: '#FFF1F2', category: 'Campus', pinned: false, subs: ['Medical Records', 'Vaccination', 'First Aid Log', 'Health Reports'] },
  { id: 'communication', name: 'Communication', icon: 'ti-message-dots', color: '#0891B2', bg: '#ECFEFF', category: 'Campus', pinned: false, subs: ['Announcements', 'Bulk SMS', 'Email Campaigns', 'Parent Notifications', 'Chat'] },
]

export interface Department {
  id: string
  name: string
  icon: string
  color: string
  bg: string
  category: string
}

export const mockDepartments: Department[] = [
  // Learning
  { id: 'edu-courses', name: 'Edu Courses', icon: 'ti-book', color: '#4F46E5', bg: '#EEF2FF', category: 'Learning' },
  { id: 'edu-skills', name: 'Edu Skills', icon: 'ti-certificate', color: '#7C3AED', bg: '#F5F3FF', category: 'Learning' },
  { id: 'digital-library', name: 'Digital Library', icon: 'ti-books', color: '#2563EB', bg: '#EFF6FF', category: 'Learning' },
  { id: 'ai-learning', name: 'AI Learning Center', icon: 'ti-brain', color: '#9333EA', bg: '#FDF4FF', category: 'Learning' },
  // Career
  { id: 'edu-jobs', name: 'Edu Jobs', icon: 'ti-briefcase', color: '#D97706', bg: '#FFFBEB', category: 'Career' },
  { id: 'study-abroad', name: 'Study Abroad', icon: 'ti-world', color: '#0891B2', bg: '#ECFEFF', category: 'Career' },
  { id: 'startup', name: 'Startup Incubation', icon: 'ti-rocket', color: '#EA580C', bg: '#FFF7ED', category: 'Career' },
  { id: 'career-guidance', name: 'Career Guidance', icon: 'ti-trending-up', color: '#16A34A', bg: '#F0FDF4', category: 'Career' },
  // Commerce
  { id: 'edu-marketplace', name: 'Edu Marketplace', icon: 'ti-shopping-cart', color: '#0D9488', bg: '#F0FDFA', category: 'Commerce' },
  { id: 'edu-store', name: 'Edu Store', icon: 'ti-building-store', color: '#E11D48', bg: '#FFF1F2', category: 'Commerce' },
  { id: 'education-erp', name: 'Education ERP', icon: 'ti-layout-dashboard', color: '#475569', bg: '#F8FAFC', category: 'Commerce' },
  // Community
  { id: 'edu-events', name: 'Edu Events', icon: 'ti-calendar-event', color: '#DB2777', bg: '#FFF0F6', category: 'Community' },
  { id: 'research', name: 'Research & Innovation', icon: 'ti-bulb', color: '#CA8A04', bg: '#FEFCE8', category: 'Community' },
  { id: 'community', name: 'Community & Forums', icon: 'ti-users-group', color: '#0F766E', bg: '#F0FDFA', category: 'Community' },
  { id: 'news-media', name: 'News & Media', icon: 'ti-news', color: '#DC2626', bg: '#FEF2F2', category: 'Community' },
  // Support
  { id: 'scholarships', name: 'Scholarships & Funding', icon: 'ti-coin', color: '#B45309', bg: '#FFFBEB', category: 'Support' },
  { id: 'online-tuition', name: 'Online Tuition', icon: 'ti-device-desktop-analytics', color: '#0D9488', bg: '#F0FDFA', category: 'Support' },
  { id: 'parent-monitoring', name: 'Parent Monitoring', icon: 'ti-heart-handshake', color: '#DB2777', bg: '#FFF0F6', category: 'Support' },
  // Administration
  { id: 'admission-portal', name: 'Admission Portal', icon: 'ti-clipboard-list', color: '#2563EB', bg: '#EFF6FF', category: 'Administration' },
  { id: 'teacher-recruitment', name: 'Teacher Recruitment', icon: 'ti-user-check', color: '#15803D', bg: '#F0FDF4', category: 'Administration' },
]

export const mockApplicationStatus = {
  total: 486,
  approved: 312,
  pending: 97,
  rejected: 77,
}
