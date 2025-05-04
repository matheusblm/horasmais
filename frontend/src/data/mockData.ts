
// Mock data for the application

// Employees
export const employees = [
  {
    id: "emp-001",
    name: "Sarah Johnson",
    position: "Senior Developer",
    department: "Engineering",
    email: "sarah.johnson@company.com",
    phone: "(555) 123-4567",
    status: "active" as const,
    startDate: "Jan 15, 2020",
    permissions: {
      overtime: true,
      remote: true
    },
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: "emp-002",
    name: "Michael Chen",
    position: "Marketing Specialist",
    department: "Marketing",
    email: "michael.chen@company.com",
    phone: "(555) 234-5678",
    status: "active" as const,
    startDate: "Mar 3, 2021",
    permissions: {
      overtime: true,
      remote: false
    },
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: "emp-003",
    name: "Emily Rodriguez",
    position: "HR Manager",
    department: "Human Resources",
    email: "emily.rodriguez@company.com",
    phone: "(555) 345-6789",
    status: "active" as const,
    startDate: "Sep 12, 2019",
    permissions: {
      overtime: true,
      remote: true
    },
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: "emp-004",
    name: "David Kim",
    position: "Financial Analyst",
    department: "Finance",
    email: "david.kim@company.com",
    phone: "(555) 456-7890",
    status: "active" as const,
    startDate: "May 20, 2022",
    permissions: {
      overtime: false,
      remote: false
    },
    avatar: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: "emp-005",
    name: "Sophia Patel",
    position: "UX Designer",
    department: "Design",
    email: "sophia.patel@company.com",
    phone: "(555) 567-8901",
    status: "on-leave" as const,
    startDate: "Nov 8, 2020",
    permissions: {
      overtime: true,
      remote: true
    },
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: "emp-006",
    name: "James Wilson",
    position: "Sales Representative",
    department: "Sales",
    email: "james.wilson@company.com",
    phone: "(555) 678-9012",
    status: "active" as const,
    startDate: "Feb 14, 2021",
    permissions: {
      overtime: true,
      remote: false
    },
    avatar: "https://i.pravatar.cc/150?img=6"
  },
  {
    id: "emp-007",
    name: "Olivia Martinez",
    position: "Customer Support",
    department: "Support",
    email: "olivia.martinez@company.com",
    phone: "(555) 789-0123",
    status: "active" as const,
    startDate: "Jul 7, 2022",
    permissions: {
      overtime: false,
      remote: true
    },
    avatar: "https://i.pravatar.cc/150?img=7"
  },
  {
    id: "emp-008",
    name: "Ethan Taylor",
    position: "Product Manager",
    department: "Product",
    email: "ethan.taylor@company.com",
    phone: "(555) 890-1234",
    status: "inactive" as const,
    startDate: "Jan 3, 2020",
    permissions: {
      overtime: true,
      remote: true
    },
    avatar: "https://i.pravatar.cc/150?img=8"
  }
];

// Time Records
export const timeRecords = [
  {
    id: "tr-001",
    employeeId: "emp-001",
    employeeName: "Sarah Johnson",
    employeeAvatar: "https://i.pravatar.cc/150?img=1",
    type: "clock-in" as const,
    timestamp: new Date("2025-04-10T09:05:00"),
    location: "Main Office",
    verified: true,
    method: "app" as const,
  },
  {
    id: "tr-002",
    employeeId: "emp-001",
    employeeName: "Sarah Johnson",
    employeeAvatar: "https://i.pravatar.cc/150?img=1",
    type: "clock-out" as const,
    timestamp: new Date("2025-04-10T17:10:00"),
    location: "Main Office",
    verified: true,
    method: "app" as const,
  },
  {
    id: "tr-003",
    employeeId: "emp-002",
    employeeName: "Michael Chen",
    employeeAvatar: "https://i.pravatar.cc/150?img=2",
    type: "clock-in" as const,
    timestamp: new Date("2025-04-10T08:55:00"),
    location: "Main Office",
    verified: true,
    method: "web" as const,
  },
  {
    id: "tr-004",
    employeeId: "emp-002",
    employeeName: "Michael Chen",
    employeeAvatar: "https://i.pravatar.cc/150?img=2",
    type: "clock-out" as const,
    timestamp: new Date("2025-04-10T17:00:00"),
    location: "Main Office",
    verified: true,
    method: "web" as const,
  },
  {
    id: "tr-005",
    employeeId: "emp-003",
    employeeName: "Emily Rodriguez",
    employeeAvatar: "https://i.pravatar.cc/150?img=3",
    type: "clock-in" as const,
    timestamp: new Date("2025-04-10T09:15:00"),
    location: "Remote",
    verified: false,
    method: "whatsapp" as const,
    notes: "Internet connectivity issues"
  },
  {
    id: "tr-006",
    employeeId: "emp-003",
    employeeName: "Emily Rodriguez",
    employeeAvatar: "https://i.pravatar.cc/150?img=3",
    type: "clock-out" as const,
    timestamp: new Date("2025-04-10T18:30:00"),
    location: "Remote",
    verified: false,
    method: "whatsapp" as const,
  },
  {
    id: "tr-007",
    employeeId: "emp-004",
    employeeName: "David Kim",
    employeeAvatar: "https://i.pravatar.cc/150?img=4",
    type: "clock-in" as const,
    timestamp: new Date("2025-04-10T09:45:00"),
    location: "Main Office",
    verified: true,
    method: "manual" as const,
    notes: "Forgot to clock in, added by manager"
  },
  {
    id: "tr-008",
    employeeId: "emp-004",
    employeeName: "David Kim",
    employeeAvatar: "https://i.pravatar.cc/150?img=4",
    type: "clock-out" as const,
    timestamp: new Date("2025-04-10T17:45:00"),
    location: "Main Office",
    verified: true,
    method: "app" as const,
  },
  {
    id: "tr-009",
    employeeId: "emp-006",
    employeeName: "James Wilson",
    employeeAvatar: "https://i.pravatar.cc/150?img=6",
    type: "clock-in" as const,
    timestamp: new Date("2025-04-10T08:30:00"),
    location: "Branch Office",
    verified: true,
    method: "app" as const,
  },
  {
    id: "tr-010",
    employeeId: "emp-006",
    employeeName: "James Wilson",
    employeeAvatar: "https://i.pravatar.cc/150?img=6",
    type: "clock-out" as const,
    timestamp: new Date("2025-04-10T16:45:00"),
    location: "Branch Office",
    verified: true,
    method: "app" as const,
  },
  {
    id: "tr-011",
    employeeId: "emp-007",
    employeeName: "Olivia Martinez",
    employeeAvatar: "https://i.pravatar.cc/150?img=7",
    type: "clock-in" as const,
    timestamp: new Date("2025-04-10T09:00:00"),
    location: "Remote",
    verified: true,
    method: "web" as const,
  },
  {
    id: "tr-012",
    employeeId: "emp-007",
    employeeName: "Olivia Martinez",
    employeeAvatar: "https://i.pravatar.cc/150?img=7",
    type: "clock-out" as const,
    timestamp: new Date("2025-04-10T17:15:00"),
    location: "Remote",
    verified: true,
    method: "web" as const,
  }
];

// Stats
export const dashboardStats = {
  totalEmployees: 48,
  activeToday: 42,
  totalHoursToday: 336,
  averageHoursPerEmployee: 8.2,
  lateArrivals: 3,
  earlyDepartures: 1,
  overtimeHours: 12.5
};

// Department breakdown
export const departmentStats = [
  { department: "Engineering", employees: 12, hoursToday: 96 },
  { department: "Marketing", employees: 8, hoursToday: 62 },
  { department: "Sales", employees: 10, hoursToday: 74 },
  { department: "HR", employees: 5, hoursToday: 40 },
  { department: "Finance", employees: 6, hoursToday: 48 },
  { department: "Support", employees: 7, hoursToday: 56 }
];
