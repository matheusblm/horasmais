
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

// Sample data
const data = [
  { name: "Present", value: 35, color: "#3B82F6" },
  { name: "Absent", value: 5, color: "#EF4444" },
  { name: "Late", value: 8, color: "#F59E0B" },
  { name: "On Leave", value: 2, color: "#10B981" },
];

export function EmployeeStatusChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Status</CardTitle>
        <CardDescription>Today's attendance overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value} employees`, 'Count']}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
