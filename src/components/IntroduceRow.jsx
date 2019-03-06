import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip } from 'antd';
import moment from 'moment';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from './Charts';
import Trend from './Trend';
import numeral from 'numeral';
import './Analysis.less';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

const visitData = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const IntroduceRow = memo(( ) => (
  <Row gutter={24} style={{margin: '24px'}}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title="Total Sales"
        total="$1,126,560"
        footer={
          <Field
            label="Daily Sales"
            value={`$${numeral(112423).format('0,0')}`}
          />
        }
        contentHeight={46}
      >
        <Trend flag="up" style={{ marginRight: 16 }}>
          Weekly Changes
          <span className="trendText" style={{color: 'green'}}>12%</span>
        </Trend>
        <Trend flag="down">
          Daily Changes
          <span className="trendText" style={{color: 'red'}}>11%</span>
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title="Visits"
        total={numeral(8846).format('0,0')}
        footer={
          <Field
            label="Daily Visits"
            value={numeral(1234).format('0,0')}
          />
        }
        contentHeight={46}
      >
        <MiniArea color="#975FE4" data={visitData} />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title="Payments"
        total={numeral(6560).format('0,0')}
        footer={
          <Field
            label="Conversion Rate"
            value="60%"
          />
        }
        contentHeight={46}
      >
        <MiniBar data={visitData} />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title="Operational Effect"
        total="78%"
        footer={
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Trend flag="up" style={{ marginRight: 16 }}>
              Weekly Changes
              <span className="trendText" style={{color: 'green'}}>12%</span>
            </Trend>
          </div>
        }
        contentHeight={46}
      >
        <MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2" />
      </ChartCard>
    </Col>
  </Row>
));

export default IntroduceRow;
