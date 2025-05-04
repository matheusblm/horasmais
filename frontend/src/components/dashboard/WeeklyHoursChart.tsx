
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Sample data
const data = [
  {
    name: "Mon",
    regular: 380,
    overtime: 20,
  },
  {
    name: "Tue",
    regular: 375,
    overtime: 15,
  },
  {
    name: "Wed",
    regular: 390,
    overtime: 25,
  },
  {
    name: "Thu",
    regular: 380,
    overtime: 30,
  },
  {
    name: "Fri",
    regular: 370,
    overtime: 40,
  },
  {
    name: "Sat",
    regular: 150,
    overtime: 10,
  },
  {
    name: "Sun",
    regular: 0,
    overtime: 0,
  },
];

export function WeeklyHoursChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Hours</CardTitle>
        <CardDescription>Regular and overtime hours</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
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
              <Legend />
              <Bar dataKey="regular" name="Regular Hours" stackId="a" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="overtime" name="Overtime" stackId="a" fill="#93C5FD" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
