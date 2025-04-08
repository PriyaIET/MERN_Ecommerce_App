import AdminSidebar from '../../../components/admin/AdminSidebar'
import { LineChart } from '../../../components/admin/Charts'

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const LineCharts = () => {
  return (
    <div className="admin-container">
      {/* SideBar */}
      <AdminSidebar />
      {/* main */}
       <main className="chart-container">
              <h1>Line Charts</h1>
              <section>
                <LineChart
                  data={[200, 444, 444, 343, 556, 778, 455, 990, 688, 345, 1000, 1200, 564, 698]}
                  label='Users'
                  backgroundColor="rgba(53, 162, 255, 0.5)"
                  borderColor="rgb(53, 162, 255)"
                  labels={months}
                />
                <h2>Active Users</h2>
              </section>
              <section>
                <LineChart
                  data={[34, 100, 120, 56, 68, 20, 44, 44, 34, 55, 77, 45, 32, 56]}
                  label='Products'
                  backgroundColor="hsla(269, 80%, 40%, 0.4)"
                  borderColor="hsl(269, 80%, 40%)"
                  labels={months}
                />
                <h2>Total Products (SKU)</h2>
              </section>

              <section>
                <LineChart
                  data={[345, 1000, 1200, 564, 698, 200, 444, 444, 343, 556, 778, 455, 990, 688]}
                  label='Revenue'
                  backgroundColor="hsla(129, 80%, 40%, 0.4)"
                  borderColor="hsl(129, 80%, 40%)"
                  labels={months}
                />
                <h2>Total Revenue</h2>
              </section>

              <section>
                <LineChart
                  data={[34500, 10000, 12000, 56004, 6098, 20000, 14000, 14990, 30043, 50456, 7998, 49955, 9090, 6988]}
                  label='Discount'
                  backgroundColor="hsla(29, 80%, 40%, 0.4)"
                  borderColor="hsl(29, 80%, 40%)"
                  labels={months}
                />
                <h2>Discount Alloted</h2>
              </section>
        </main>
    </div>
  )
}

export default LineCharts