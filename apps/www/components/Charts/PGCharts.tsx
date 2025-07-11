import { Tabs } from 'ui'
import { useState } from 'react'
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, Legend } from 'recharts'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Placeholder implementations for missing symbols
// You should replace these with real implementations as needed
const CustomizedAxisTick = () => null
const renderColorfulLegendText = () => null
const dimensions: string[] = []
const barColors: Record<string, string> = {}
const data: Record<string, any[]> = { latency: [], results: [], avg_latency: [] }

const Chart = () => {
  const [selection, setSelection] = useState('latency')
  return (
    <div className={'my-16 flex flex-col'}>
      <Tabs
        defaultActiveId={'latency'}
        type="underlined"
        size="medium"
        block
        onChange={(value: string) => setSelection(value)}
      >
        <Tabs.Panel id="latency" label="Latency"></Tabs.Panel>
        <Tabs.Panel id="results" label="Number of results"></Tabs.Panel>
        <Tabs.Panel id="avg_latency" label="Average latency"></Tabs.Panel>
        <Tabs.Panel id="raw_data" label="Raw data"></Tabs.Panel>
      </Tabs>
      {selection !== 'raw_data' ? (
        <ResponsiveContainer height={720} minHeight={720} width="100%">
          <BarChart data={data[selection] || []} layout="vertical">
            <XAxis
              axisLine={{ stroke: 'hsl(var(--border-default))' }}
              tickLine={{ stroke: 'hsl(var(--border-default))' }}
              type="number"
              tickMargin={8}
              style={{
                fontSize: '14px',
                marginBottom: '32px',
                color: 'hsl(var(--foreground-default))'
              }}
              tick={<CustomizedAxisTick />}
              label={{
                value:
                  selection === 'latency'
                    ? 'Latency (ms)'
                    : selection === 'avg_latency'
                      ? 'Avg latency per result (ms)'
                      : 'Number of results',
                position: 'insideBottom',
                offset: -32,
                fill: 'hsl(var(--foreground-default))',
              }}
            />
            <YAxis
              dataKey={'query'}
              type="category"
              minTickGap={16}
              tickMargin={8}
              axisLine={{ stroke: 'hsl(var(--border-default))' }}
              tickLine={{ stroke: 'hsl(var(--border-default))' }}
              tick={<CustomizedAxisTick />}
            />
            {dimensions.map((dimension) => (
              <Bar key={dimension} dataKey={dimension} fill={barColors[dimension]} />
            ))}
            <Legend
              verticalAlign="top"
              height={64}
              className={'mt-16'}
              iconSize={8}
              formatter={renderColorfulLegendText}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        // @ts-expect-error: TS2786 react-markdown v8+ JSX type workaround
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {`
| Engine | Query | Results | Latency | Avg per result |
|--------|-------|---------|---------|----------------|
| pg     | spy   | 349     | 1.78    | 0.00510        |
| ...    | ...   | ...     | ...     | ...            |
          `}
        </ReactMarkdown>
      )}
    </div>
  );
}

export default Chart
