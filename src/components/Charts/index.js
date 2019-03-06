import React, { Suspense } from 'react';
import numeral from 'numeral';
import ChartCard from './ChartCard';
import Field from './Field';

const getComponent = Component => {
  return props => {
    return (
      <Suspense fallback="...">
        <Component {...props} />
      </Suspense>
    );
  };
};

const Gauge = getComponent(React.lazy(() => import('./Gauge')));
const MiniArea = getComponent(React.lazy(() => import('./MiniArea')));
const MiniBar = getComponent(React.lazy(() => import('./MiniBar')));
const MiniProgress = getComponent(React.lazy(() => import('./MiniProgress')));
const TimelineChart = getComponent(React.lazy(() => import('./TimelineChart')));
const Pie = getComponent(React.lazy(() => import('./Pie')));

const yuan = val => `¥ ${numeral(val).format('0,0')}`;

const Charts = {
  yuan,
  Gauge,
  MiniBar,
  MiniArea,
  MiniProgress,
  ChartCard,
  TimelineChart,
  Pie
};

export {
  Charts as default,
  yuan,
  Gauge,
  MiniBar,
  MiniArea,
  MiniProgress,
  ChartCard,
  Field,
  TimelineChart,
  Pie
};
