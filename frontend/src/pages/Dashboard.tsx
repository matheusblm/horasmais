
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/dashboard/StatCard";
import { TimeRecordItem } from "@/components/dashboard/TimeRecordItem";
import { EmployeeStatusChart } from "@/components/dashboard/EmployeeStatusChart";
import { WeeklyHoursChart } from "@/components/dashboard/WeeklyHoursChart";
import { dashboardStats, timeRecords, departmentStats } from "@/data/mockData";
import { BarChart3, Clock, Download, Plus, Users, UserCheck, Timer, AlertTriangle } from "lucide-react";

export default function Dashboard() {
  // Get only the most recent 5 time records
  const recentRecords = [...timeRecords]
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 5);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download size={16} className="mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus size={16} className="mr-2" />
            Add Record
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Employees" 
          value={dashboardStats.totalEmployees} 
          icon={Users}
          description="Total number of employees" 
        />
        <StatCard 
          title="Active Today" 
          value={dashboardStats.activeToday} 
          icon={UserCheck} 
          trend={{ value: 8, isPositive: true }}
          description={`${Math.round(dashboardStats.activeToday / dashboardStats.totalEmployees * 100)}% attendance`}
        />
        <StatCard 
          title="Total Hours Today" 
          value={dashboardStats.totalHoursToday} 
          icon={Clock} 
          trend={{ value: 5, isPositive: true }}
          description={`${dashboardStats.averageHoursPerEmployee} hrs per employee`} 
        />
        <StatCard 
          title="Anomalies" 
          value={dashboardStats.lateArrivals + dashboardStats.earlyDepartures} 
          icon={AlertTriangle} 
          trend={{ value: 2, isPositive: false }}
          description={`${dashboardStats.lateArrivals} late, ${dashboardStats.earlyDepartures} early departure`} 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EmployeeStatusChart />
        <WeeklyHoursChart />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Time Records</CardTitle>
              <CardDescription>Latest employee check-ins and check-outs</CardDescription>
            </div>
            <Button variant="ghost" size="sm">View all</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {recentRecords.map(record => (
                <TimeRecordItem key={record.id} record={record} />
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Department Summary</CardTitle>
            <CardDescription>Hours by department today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentStats.map(dept => (
                <div key={dept.department} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{dept.department}</div>
                    <div className="text-sm text-muted-foreground">
                      {dept.employees} employees
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-muted-foreground" />
                    <span className="font-medium">{dept.hoursToday} hrs</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
