import type { EChartsOption } from "echarts";
import { EChart } from "@/components/EChart";

const metricCards = [
  { name: "app1", count: "1", amount: "100" },
  { name: "app2", count: "2", amount: "10000" },
  { name: "app3", count: "8", amount: "8200" },
  { name: "app4", count: "16", amount: "32600" },
  { name: "app5", count: "32", amount: "78000" },
  { name: "app6", count: "64", amount: "128000" },
];

const tableRows = [
  ["Value 1", "Value 2", "Value 3"],
  ["Value 4", "Value 5", "Value 6"],
  ["Value 7", "Value 8", "Value 9"],
  ["Value 10", "Value 11", "Value 12"],
];

const lineOption: EChartsOption = {
  color: ["#178bff", "#d9dce1"],
  tooltip: { trigger: "axis" },
  grid: { left: 12, right: 20, top: 18, bottom: 24, containLabel: false },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["1月", "2月", "3月", "4月", "5月"],
    axisLine: { lineStyle: { color: "#707070", width: 2 } },
    axisLabel: { show: false },
    axisTick: { show: false },
  },
  yAxis: {
    type: "value",
    axisLabel: { show: false },
    splitLine: { show: false },
  },
  series: [
    {
      name: "业务访问量",
      type: "line",
      smooth: false,
      symbol: "none",
      lineStyle: { width: 3 },
      data: [20, 42, 45, 62, 80],
    },
    {
      name: "对比趋势",
      type: "line",
      smooth: false,
      symbol: "none",
      lineStyle: { width: 3 },
      data: [20, 58, 35, 90],
    },
  ],
};

const barOption: EChartsOption = {
  color: ["#178bff", "#d9dce1"],
  tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
  grid: { left: 12, right: 20, top: 16, bottom: 28, containLabel: false },
  xAxis: {
    type: "value",
    axisLabel: { show: false },
    splitLine: { show: false },
  },
  yAxis: {
    type: "category",
    data: ["项目A", "项目B", "项目C"],
    axisLabel: { show: false },
    axisTick: { show: false },
    axisLine: { lineStyle: { color: "#707070", width: 2 } },
  },
  series: [
    {
      name: "基线",
      type: "bar",
      barWidth: 12,
      barGap: "-100%",
      itemStyle: { color: "#d9d9d9" },
      data: [80, 65, 85],
      z: 1,
    },
    {
      name: "完成度",
      type: "bar",
      barWidth: 12,
      itemStyle: { color: "#178bff" },
      data: [70, 60, 75],
      z: 2,
    },
  ],
};

const pieOption: EChartsOption = {
  color: ["#bfbfbf", "#d9d9d9", "#efefef"],
  tooltip: { trigger: "item" },
  series: [
    {
      name: "占比",
      type: "pie",
      radius: ["0%", "86%"],
      center: ["50%", "52%"],
      avoidLabelOverlap: true,
      label: { show: false },
      labelLine: { show: false },
      itemStyle: {
        borderColor: "#178bff",
        borderWidth: 2,
      },
      data: [
        { value: 54, name: "核心业务" },
        { value: 32, name: "增长业务" },
        { value: 14, name: "其他业务" },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fa] px-6 py-8 text-[#111827] dashboard-grid">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1440px] flex-col overflow-hidden border-2 border-[#202020] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
        <header className="grid min-h-24 grid-cols-[220px_1fr_190px] border-b-2 border-[#202020]">
          <div className="grid place-items-center border-r-2 border-[#202020] text-xl font-semibold">
            logo
          </div>
          <div className="grid place-items-center overflow-hidden px-10 text-lg font-medium">
            <div className="w-full overflow-hidden whitespace-nowrap">
              <span className="inline-block min-w-full animate-marquee text-center">
                消息通知。。。 今日业务运行稳定，核心指标持续刷新
              </span>
            </div>
          </div>
          <div className="grid place-items-center border-l-2 border-[#202020]">
            <div className="relative h-16 w-16">
              <div className="absolute left-1/2 top-0 h-7 w-7 -translate-x-1/2 rounded-full border-2 border-[#202020]" />
              <div className="absolute bottom-0 left-1/2 h-11 w-14 -translate-x-1/2 rounded-t-full border-2 border-[#202020]" />
            </div>
          </div>
        </header>

        <section className="grid min-h-28 grid-cols-[1fr_176px] border-b-2 border-[#202020]">
          <div className="overflow-hidden px-4 py-2">
            <div className="flex h-full min-w-max animate-card-scroll gap-4">
              {[...metricCards, ...metricCards].map((item, index) => (
                <article
                  className="grid h-24 w-56 shrink-0 place-items-center border-2 border-[#202020] bg-white px-4 text-center"
                  key={`${item.name}-${index}`}
                >
                  <div>
                    <h2 className="text-lg font-semibold leading-tight">
                      {item.name}
                    </h2>
                    <p className="text-base leading-tight text-slate-700">
                      {item.count}
                    </p>
                    <p className="text-lg leading-tight text-slate-700">
                      {item.amount}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="grid place-items-center border-l-2 border-[#202020] px-6 text-center text-lg font-semibold leading-tight">
            卡片无缝
            <br />
            链接滚动
          </div>
        </section>

        <section className="grid flex-1 grid-cols-2 grid-rows-2 gap-x-10 gap-y-8 px-8 py-8">
          <div className="chart-panel">
            <EChart option={lineOption} className="h-full w-full" />
          </div>

          <div className="chart-panel">
            <EChart option={barOption} className="h-full w-full" />
          </div>

          <div className="chart-panel">
            <EChart option={pieOption} className="h-full w-full" />
          </div>

          <div className="flex items-center">
            <div className="w-full overflow-hidden rounded-sm border border-[#a8c83d] shadow-[6px_6px_12px_rgba(15,23,42,0.22)]">
              <table className="w-full border-collapse text-center text-base">
                <thead className="bg-[#a9cf3d] text-white">
                  <tr>
                    <th className="border-r border-[#95b52f] px-4 py-4 font-bold">
                      Title 1
                    </th>
                    <th className="border-r border-[#95b52f] px-4 py-4 font-bold">
                      Title 2
                    </th>
                    <th className="px-4 py-4 font-bold">Title 3</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, rowIndex) => (
                    <tr
                      className={
                        rowIndex % 2 === 0 ? "bg-white" : "bg-[#edf6d5]"
                      }
                      key={row.join("-")}
                    >
                      {row.map((cell) => (
                        <td
                          className="border-r border-t border-[#a8c83d] px-4 py-4 last:border-r-0"
                          key={cell}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
