import { Row, Col, Card, Statistic } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DashboardPage = () => {
  const productSalesData = [
    { name: "Ocak", satilanUrunSayisi: 10 },
    { name: "Şubat", satilanUrunSayisi: 15 },
    { name: "Mart", satilanUrunSayisi: 20 },
    { name: "Nisan", satilanUrunSayisi: 25 },
    { name: "Mayıs", satilanUrunSayisi: 30 },
    { name: "Haziran", satilanUrunSayisi: 35 },
  ];

  const customerData = [
    { name: "Ocak", musteriSayisi: 20 },
    { name: "Şubat", musteriSayisi: 25 },
    { name: "Mart", musteriSayisi: 30 },
    { name: "Nisan", musteriSayisi: 10 },
    { name: "Mayıs", musteriSayisi: 40 },
    { name: "Haziran", musteriSayisi: 45 },
  ];

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Total Product Sales" value={120} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Total Number of Customers" value={50} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Total Earnings" value={3000} prefix="$" />
          </Card>
        </Col>
      </Row>
      <Card style={{ marginTop: "20px" }}>
        <h2>Product increase in the last month</h2>
        <LineChart
          width={600}
          height={600}
          data={productSalesData}
          margin={{ top: 5, right: 30, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="satilanUrunSayisi"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Card>
      <Card style={{ marginTop: "20px" }}>
        <h2>Customer Increase in the Last Month</h2>
        <LineChart
          width={600}
          height={300}
          data={customerData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="musteriSayisi"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Card>
    </div>
  );
};

export default DashboardPage;
