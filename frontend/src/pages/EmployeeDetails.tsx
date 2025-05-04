
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmployeeDetailsHeader } from "@/components/employees/EmployeeDetailsHeader";
import { TimeRecordsList } from "@/components/time-records/TimeRecordsList";
import { employees, timeRecords } from "@/data/mockData";
import { ArrowLeft, Calendar, Download, FileText, Plus } from "lucide-react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function EmployeeDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the employee by ID
  const employee = employees.find(emp => emp.id === id);
  
  // If employee not found, show error
  if (!employee) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px]">
        <h2 className="text-2xl font-semibold mb-2">Employee Not Found</h2>
        <p className="text-muted-foreground mb-6">
          The employee you're looking for doesn't exist or has been removed.
        </p>
        <Button onClick={() => navigate("/employees")}>
          Back to Employees
        </Button>
      </div>
    );
  }
  
  // Filter time records for this employee
  const employeeRecords = timeRecords.filter(record => record.employeeId === employee.id);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/employees">
            <ArrowLeft size={18} />
          </Link>
        </Button>
        <h2 className="text-lg font-medium">Employee Details</h2>
      </div>
      
      <EmployeeDetailsHeader employee={employee} />
      
      <Tabs defaultValue="time-records">
        <TabsList className="grid grid-cols-3 sm:w-[400px]">
          <TabsTrigger value="time-records">Time Records</TabsTrigger>
          <TabsTrigger value="schedules">Schedules</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        
        <TabsContent value="time-records" className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Time Records</h3>
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
          
          {employeeRecords.length > 0 ? (
            <TimeRecordsList records={employeeRecords} />
          ) : (
            <div className="text-center py-8 text-muted-foreground border rounded-lg">
              No time records found for this employee.
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="schedules" className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Work Schedules</h3>
            <Button size="sm">
              <Plus size={16} className="mr-2" />
              Add Schedule
            </Button>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Regular Schedule</CardTitle>
              <CardDescription>Employee's standard working hours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">Weekdays (Mon-Fri)</h4>
                    <div className="flex items-center mt-2">
                      <Calendar size={16} className="mr-2 text-muted-foreground" />
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Weekends</h4>
                    <div className="flex items-center mt-2">
                      <Calendar size={16} className="mr-2 text-muted-foreground" />
                      <span>Off duty</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium">Break Times</h4>
                  <div className="flex items-center mt-2">
                    <span>Lunch: 12:00 PM - 1:00 PM</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium">Overtime Permission</h4>
                  <div className="mt-2">
                    {employee.permissions.overtime ? (
                      <span className="text-green-600">Allowed</span>
                    ) : (
                      <span className="text-red-600">Not allowed</span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="documents" className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Documents</h3>
            <Button size="sm">
              <Plus size={16} className="mr-2" />
              Upload Document
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="cursor-pointer hover:bg-muted/20 transition-colors">
              <CardContent className="p-6 flex items-center gap-4">
                <FileText size={24} className="text-blue-500" />
                <div>
                  <h4 className="font-medium">Employment Contract</h4>
                  <p className="text-sm text-muted-foreground">PDF • 2.4 MB • Uploaded Jan 15, 2020</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:bg-muted/20 transition-colors">
              <CardContent className="p-6 flex items-center gap-4">
                <FileText size={24} className="text-blue-500" />
                <div>
                  <h4 className="font-medium">ID Document</h4>
                  <p className="text-sm text-muted-foreground">PDF • 1.2 MB • Uploaded Jan 15, 2020</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:bg-muted/20 transition-colors">
              <CardContent className="p-6 flex items-center gap-4">
                <FileText size={24} className="text-blue-500" />
                <div>
                  <h4 className="font-medium">Performance Review</h4>
                  <p className="text-sm text-muted-foreground">PDF • 3.1 MB • Uploaded Dec 10, 2023</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
