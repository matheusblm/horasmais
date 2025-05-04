
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, Mail, MessageSquare, Plus, Send, Trash, UserPlus, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { employees } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Notifications() {
  const [selected, setSelected] = useState<string[]>([]);
  
  const toggleEmployee = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(empId => empId !== id));
    } else {
      setSelected([...selected, id]);
    }
  };
  
  const selectAll = () => {
    if (selected.length === employees.length) {
      setSelected([]);
    } else {
      setSelected(employees.map(emp => emp.id));
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
      </div>
      
      <Tabs defaultValue="send">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="send">Send Notifications</TabsTrigger>
          <TabsTrigger value="history">Notification History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="send" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Send Message</CardTitle>
              <CardDescription>
                Send notifications to employees via email, WhatsApp, or in-app messages
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Message Type</Label>
                <Select defaultValue="announcement">
                  <SelectTrigger>
                    <SelectValue placeholder="Select message type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="announcement">Announcement</SelectItem>
                    <SelectItem value="reminder">Reminder</SelectItem>
                    <SelectItem value="alert">Alert</SelectItem>
                    <SelectItem value="custom">Custom Message</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Delivery Method</Label>
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="in-app" defaultChecked />
                    <label
                      htmlFor="in-app"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      In-App
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="email" defaultChecked />
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="whatsapp" />
                    <label
                      htmlFor="whatsapp"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      WhatsApp
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Recipients</Label>
                  <Button variant="ghost" size="sm" onClick={selectAll}>
                    {selected.length === employees.length ? "Deselect All" : "Select All"}
                  </Button>
                </div>
                <div className="border rounded-md p-4 max-h-[200px] overflow-y-auto">
                  <div className="space-y-2">
                    {employees.map(employee => (
                      <div key={employee.id} className="flex items-center gap-2">
                        <Checkbox 
                          id={employee.id} 
                          checked={selected.includes(employee.id)}
                          onCheckedChange={() => toggleEmployee(employee.id)}
                        />
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={employee.avatar} />
                          <AvatarFallback>
                            {employee.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <label
                          htmlFor={employee.id}
                          className="text-sm font-medium leading-none cursor-pointer"
                        >
                          {employee.name}
                        </label>
                        <Badge variant="outline" className="ml-auto">
                          {employee.department}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter message subject" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here" rows={6} />
              </div>
              
              <div className="flex justify-end">
                <Button className="w-full sm:w-auto">
                  <Send size={16} className="mr-2" />
                  Send Notification
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>
                History of notifications sent to employees
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg flex items-start gap-4">
                  <MessageSquare className="text-blue-500 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium">Company Meeting Announcement</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Sent to all employees (48 recipients)
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Today, 10:45 AM
                      </div>
                    </div>
                    <p className="text-sm mt-2">
                      Reminder: There will be a company-wide meeting tomorrow at 2 PM in the main conference room.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <CheckCircle size={12} className="mr-1" />
                        Delivered
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        via Email, In-App
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg flex items-start gap-4">
                  <MessageSquare className="text-blue-500 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium">System Maintenance Alert</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Sent to Engineering department (12 recipients)
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Yesterday, 4:20 PM
                      </div>
                    </div>
                    <p className="text-sm mt-2">
                      The system will undergo maintenance tonight from 10 PM to 2 AM. Please save your work before leaving.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <CheckCircle size={12} className="mr-1" />
                        Delivered
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        via Email, WhatsApp, In-App
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg flex items-start gap-4">
                  <MessageSquare className="text-blue-500 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium">Reminder: Submit Timesheets</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Sent to all employees (48 recipients)
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Apr 8, 2025, 9:00 AM
                      </div>
                    </div>
                    <p className="text-sm mt-2">
                      This is a reminder to submit your timesheets for the last week by end of day today.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <CheckCircle size={12} className="mr-1" />
                        Delivered
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        via Email, In-App
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
