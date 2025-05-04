
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { DownloadIcon, PrinterIcon } from "lucide-react";

// Sample data for reports
const weeklyData = [
  { name: "Monday", hours: 385 },
  { name: "Tuesday", hours: 390 },
  { name: "Wednesday", hours: 410 },
  { name: "Thursday", hours: 400 },
  { name: "Friday", hours: 375 },
  { name: "Saturday", hours: 160 },
  { name: "Sunday", hours: 0 },
];

const departmentData = [
  { name: "Engineering", value: 96, color: "#3B82F6" },
  { name: "Marketing", value: 62, color: "#F59E0B" },
  { name: "Sales", value: 74, color: "#10B981" },
  { name: "HR", value: 40, color: "#6366F1" },
  { name: "Finance", value: 48, color: "#EC4899" },
  { name: "Support", value: 56, color: "#8B5CF6" },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <PrinterIcon size={16} className="mr-2" />
            Print
          </Button>
          <Button size="sm">
            <DownloadIcon size={16} className="mr-2" />
            Export
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Hours</CardTitle>
            <CardDescription>Total hours worked by day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={weeklyData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    formatter={(value) => [`${value} hours`, '']}
                    labelFormatter={(label) => `${label}`}
                  />
                  <Bar dataKey="hours" name="Hours" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Department Hours</CardTitle>
            <CardDescription>Hours distribution by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value} hrs`}
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} hours`, 'Hours']}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>Download or print detailed reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="cursor-pointer hover:bg-muted/20 transition-colors">
              <CardContent className="p-6">
                <div className="font-medium mb-2">Daily Time Records</div>
                <p className="text-sm text-muted-foreground mb-4">Detailed log of all clock ins/outs for a specific date.</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <PrinterIcon size={14} className="mr-2" />
                    Print
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    <DownloadIcon size={14} className="mr-2" />
                    Export
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:bg-muted/20 transition-colors">
              <CardContent className="p-6">
                <div className="font-medium mb-2">Monthly Attendance</div>
                <p className="text-sm text-muted-foreground mb-4">Summary of attendance, leaves, and overtime by month.</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <PrinterIcon size={14} className="mr-2" />
                    Print
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    <DownloadIcon size={14} className="mr-2" />
                    Export
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:bg-muted/20 transition-colors">
              <CardContent className="p-6">
                <div className="font-medium mb-2">Department Analysis</div>
                <p className="text-sm text-muted-foreground mb-4">Breakdown of hours and attendance by department.</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <PrinterIcon size={14} className="mr-2" />
                    Print
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    <DownloadIcon size={14} className="mr-2" />
                    Export
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
