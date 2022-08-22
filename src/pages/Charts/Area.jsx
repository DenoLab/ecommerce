import React from 'react'
import { ChartComponent, SeriesCollectionDirective, Inject, DateTime, Legend, Tooltip, SplineAreaSeries, SeriesDirective } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis, } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../components'


const AreaChart = () => {
  const { currentMode } = useStateContext()
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl '>
      <Header category='Area' title='Inflation Rate in Percentage' />
      <ChartComponent background={currentMode === 'Dark' ? '#33373E' : '#fff'} id='line-chart' height='420px' primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }}>
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default AreaChart