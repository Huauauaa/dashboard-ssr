import type { EChartsOption } from "echarts";
import { EChart } from "@/components/EChart";

const metricCards = [
  { name: "核心应用", count: "1.28M", amount: "访问量", trend: "+12.8%" },
  { name: "交易通道", count: "98.7%", amount: "成功率", trend: "+3.4%" },
  { name: "告警处理", count: "26", amount: "待跟进", trend: "-18.6%" },
  { name: "活跃用户", count: "82K", amount: "在线", trend: "+8.1%" },
  { name: "资源利用", count: "67%", amount: "集群负载", trend: "+4.6%" },
  { name: "收益规模", count: "128K", amount: "今日金额", trend: "+15.2%" },
];

const tableRows = [
  ["支付网关", "42 ms", "稳定"],
  ["营销系统", "58 ms", "增长"],
  ["用户中心", "36 ms", "稳定"],
  ["数据同步", "71 ms", "观察"],
];

const lineOption: EChartsOption = {
  color: ["#38bdf8", "#a78bfa"],
  tooltip: { trigger: "axis", backgroundColor: "rgba(15, 23, 42, 0.92)" },
  grid: { left: 18, right: 18, top: 18, bottom: 24, containLabel: true },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["1月", "2月", "3月", "4月", "5月"],
    axisLine: { lineStyle: { color: "rgba(148, 163, 184, 0.35)" } },
    axisLabel: { color: "#94a3b8" },
    axisTick: { show: false },
  },
  yAxis: {
    type: "value",
    axisLabel: { color: "#94a3b8" },
    splitLine: { lineStyle: { color: "rgba(148, 163, 184, 0.18)" } },
  },
  series: [
    {
      name: "业务访问量",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 7,
      lineStyle: { width: 4 },
      areaStyle: { color: "rgba(56, 189, 248, 0.16)" },
      data: [20, 42, 45, 62, 80],
    },
    {
      name: "对比趋势",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 7,
      lineStyle: { width: 4 },
      data: [24, 58, 35, 72, 90],
    },
  ],
};

const barOption: EChartsOption = {
  color: ["#22d3ee", "#6366f1"],
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "shadow" },
    backgroundColor: "rgba(15, 23, 42, 0.92)",
  },
  grid: { left: 16, right: 18, top: 18, bottom: 18, containLabel: true },
  xAxis: {
    type: "value",
    axisLabel: { color: "#94a3b8" },
    splitLine: { lineStyle: { color: "rgba(148, 163, 184, 0.16)" } },
  },
  yAxis: {
    type: "category",
    data: ["项目A", "项目B", "项目C", "项目D"],
    axisLabel: { color: "#cbd5e1" },
    axisTick: { show: false },
    axisLine: { lineStyle: { color: "rgba(148, 163, 184, 0.28)" } },
  },
  series: [
    {
      name: "基线",
      type: "bar",
      barWidth: 14,
      barGap: "-100%",
      itemStyle: { color: "rgba(148, 163, 184, 0.18)", borderRadius: 10 },
      data: [90, 78, 88, 82],
      z: 1,
    },
    {
      name: "完成度",
      type: "bar",
      barWidth: 14,
      itemStyle: { color: "#38bdf8", borderRadius: 10 },
      data: [76, 68, 81, 73],
      z: 2,
    },
  ],
};

const pieOption: EChartsOption = {
  color: ["#38bdf8", "#818cf8", "#34d399"],
  tooltip: { trigger: "item", backgroundColor: "rgba(15, 23, 42, 0.92)" },
  series: [
    {
      name: "占比",
      type: "pie",
      radius: ["48%", "82%"],
      center: ["50%", "52%"],
      avoidLabelOverlap: true,
      label: { color: "#cbd5e1", formatter: "{b}\n{d}%" },
      labelLine: { lineStyle: { color: "rgba(203, 213, 225, 0.45)" } },
      itemStyle: {
        borderColor: "#0f172a",
        borderWidth: 4,
      },
      data: [
        { value: 54, name: "核心业务" },
        { value: 32, name: "增长业务" },
        { value: 14, name: "其他业务" },
      ],
    },
  ],
};

const chartPanels = [
  { title: "业务访问趋势", subtitle: "月度访问量对比", option: lineOption },
  { title: "项目完成度", subtitle: "核心项目实时进展", option: barOption },
  { title: "业务结构占比", subtitle: "当日流量构成", option: pieOption },
];

export default function Home() {
  return (
    <main className="dashboard-page">
      <section className="dashboard-shell">
        <header className="dashboard-header">
          <div className="brand-card">
            <div className="brand-mark">DS</div>
            <div>
              <p className="brand-title">Dashboard</p>
              <span className="brand-subtitle">实时运营中心</span>
            </div>
          </div>

          <div className="notice-bar">
            <span className="animate-marquee">
              消息通知：今日业务运行稳定，核心指标持续刷新，重点应用延迟保持在安全阈值内
            </span>
          </div>

          <div className="user-card">
            <div className="user-avatar">U</div>
            <div>
              <p>运营管理员</p>
              <span>在线监控中</span>
            </div>
          </div>
        </header>

        <section className="metrics-section">
          <div className="metrics-copy">
            <span>实时指标</span>
            <strong>关键业务滚动看板</strong>
          </div>

          <div className="metrics-viewport">
            <div className="metrics-track animate-card-scroll">
              {[...metricCards, ...metricCards].map((item, index) => (
                <article className="metric-card" key={`${item.name}-${index}`}>
                  <span>{item.name}</span>
                  <strong>{item.count}</strong>
                  <div>
                    <em>{item.amount}</em>
                    <small>{item.trend}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dashboard-content">
          {chartPanels.map((panel) => (
            <article className="chart-panel" key={panel.title}>
              <div className="panel-heading">
                <div>
                  <h2>{panel.title}</h2>
                  <p>{panel.subtitle}</p>
                </div>
                <span>Live</span>
              </div>
              <EChart option={panel.option} className="chart-canvas" />
            </article>
          ))}

          <article className="table-panel">
            <div className="panel-heading">
              <div>
                <h2>服务健康状态</h2>
                <p>接口延迟与运行态势</p>
              </div>
              <span>4 Nodes</span>
            </div>

            <div className="table-wrap">
              <table className="status-table">
                <thead>
                  <tr>
                    <th>服务</th>
                    <th>平均延迟</th>
                    <th>状态</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, rowIndex) => (
                    <tr key={row.join("-")}>
                      {row.map((cell) => (
                        <td key={cell}>
                          {rowIndex === 3 && cell === "观察" ? (
                            <span className="status-pill status-watch">
                              {cell}
                            </span>
                          ) : cell === "稳定" || cell === "增长" ? (
                            <span className="status-pill">{cell}</span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
