'use client'
import { Chart } from 'react-google-charts'
import catSpinning from 'public/cat-spinning.gif'
import Image from 'next/image'

// Exemplos de entrada. Mais exemplos em https://www.react-google-charts.com/examples/line-chart
// const data = [
//     ['x', 'máxima', 'mínima'],
//     [0, 0, 0],
//     [1, 10, 5],
//     [2, 23, 15],
//     [3, 17, 9],
//     [4, 18, 10],
//     [5, 9, 5],
//     [6, 11, 3],
//     [7, 27, 19],
// ]

// const options = {
//     hAxis: {
//         title: 'TEMPO (HORAS)',
//     },
//     vAxis: {
//         title: 'TEMPERATURA (C)',
//     },
//     series: {
//         1: { curveType: 'function' },
//     },
//     backgroundColor: '#f5f5f5',
//     colors: ['orangered', 'steelblue'],
// }

interface ILineChartProps {
    data: any[]
    options: {
        hAxis: { title: string }
        vAxis: { title: string }
        backgroundColor?: string
        colors?: string[]
        series?: any
        curveType?: any
    }
}

const Loading = () => {
    return (
        <div className='flex flex-col items-center h-[300px] justify-center'>
            <Image src={catSpinning} alt='Gatinho girando' width={100} />
            <span className='text-lg'>Criando gráfico...</span>
        </div>
    )
}

export const LineChart = ({ data, options }: ILineChartProps) => {
    return (
        <div className='rounded-2xl overflow-hidden'>
            <Chart
                chartType='LineChart'
                width='100%'
                height='300px'
                data={data}
                options={options}
                loader={<Loading />}
            />
        </div>
    )
}
