import React from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const LineChartExample = () => {
  const data = [
    { date: '01-01', electricity: 2980 },
    { date: '02-01', electricity: 3025 },
    { date: '03-01', electricity: 2950 },
    { date: '04-01', electricity: 2905 },
    { date: '05-01', electricity: 3050 },
    { date: '06-01', electricity: 2975 },
    { date: '07-01', electricity: 3000 },
    { date: '08-01', electricity: 2925 },
    { date: '09-01', electricity: 3030 },
    { date: '10-01', electricity: 2985 },
    { date: '11-01', electricity: 2960 },
    { date: '12-01', electricity: 3015 },
    { date: '13-01', electricity: 2945 },
    { date: '14-01', electricity: 2995 },
    { date: '15-01', electricity: 3020 },
    { date: '16-01', electricity: 2910 },
    { date: '17-01', electricity: 3045 },
    { date: '18-01', electricity: 2970 },
    { date: '19-01', electricity: 3005 },
    { date: '20-01', electricity: 2935 },
    { date: '21-01', electricity: 3010 },
    { date: '22-01', electricity: 2965 },
    { date: '23-01', electricity: 2990 },
    { date: '24-01', electricity: 3035 },
    { date: '25-01', electricity: 2920 },
    { date: '26-01', electricity: 2980 },
    { date: '27-01', electricity: 3025 },
    { date: '28-01', electricity: 2950 },
    { date: '29-01', electricity: 2905 },
    { date: '30-01', electricity: 3050 },
    { date: '31-01', electricity: 2975 },
  ];

  const labels = data.map(d => d.date);
  const electricity = data.map(d => d.electricity);

  return (
    <ScrollView horizontal>
      <View>
        <LineChart
          data={{
            labels,
            datasets: [
              {
                data: electricity,
              },
            ],
            legend: ['Electricity (kWh)'],
          }}
          width={Math.max(screenWidth, labels.length * 40)}
          height={260}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#007bff',
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            alignSelf: 'center',
          }}
          bezier
        />
      </View>
    </ScrollView>
  );
};

export default LineChartExample;
