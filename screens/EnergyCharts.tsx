import React from 'react';
import { View, Dimensions, ScrollView, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

// Your data parsed into JS objects
const data = [
  { date: '01-05', electricity_kWh: 2980, gas_m3: 356, water_liters: 20616 },
  { date: '02-05', electricity_kWh: 3025, gas_m3: 362, water_liters: 21024 },
  { date: '03-05', electricity_kWh: 2950, gas_m3: 348, water_liters: 20832 },
  { date: '04-05', electricity_kWh: 2905, gas_m3: 342, water_liters: 20568 },
  { date: '05-05', electricity_kWh: 3050, gas_m3: 368, water_liters: 21240 },
  { date: '06-05', electricity_kWh: 2975, gas_m3: 354, water_liters: 20712 },
  { date: '07-05', electricity_kWh: 3000, gas_m3: 358, water_liters: 20976 },
  { date: '08-05', electricity_kWh: 2925, gas_m3: 350, water_liters: 20496 },
  { date: '09-05', electricity_kWh: 3030, gas_m3: 364, water_liters: 21144 },
  { date: '10-05', electricity_kWh: 2985, gas_m3: 352, water_liters: 20880 },
  { date: '11-05', electricity_kWh: 2960, gas_m3: 346, water_liters: 20760 },
  { date: '12-05', electricity_kWh: 3015, gas_m3: 360, water_liters: 21072 },
  { date: '13-05', electricity_kWh: 2945, gas_m3: 344, water_liters: 20640 },
  { date: '14-05', electricity_kWh: 2995, gas_m3: 355, water_liters: 20904 },
  { date: '15-05', electricity_kWh: 3020, gas_m3: 363, water_liters: 21192 },
  { date: '16-05', electricity_kWh: 2910, gas_m3: 340, water_liters: 20376 },
  { date: '17-05', electricity_kWh: 3045, gas_m3: 370, water_liters: 21336 },
  { date: '18-05', electricity_kWh: 2970, gas_m3: 353, water_liters: 20784 },
  { date: '19-05', electricity_kWh: 3005, gas_m3: 359, water_liters: 21048 },
  { date: '20-05', electricity_kWh: 2935, gas_m3: 347, water_liters: 20544 },
  { date: '21-05', electricity_kWh: 3010, gas_m3: 361, water_liters: 21096 },
  { date: '22-05', electricity_kWh: 2965, gas_m3: 349, water_liters: 20736 },
  { date: '23-05', electricity_kWh: 2990, gas_m3: 357, water_liters: 20928 },
  { date: '24-05', electricity_kWh: 3035, gas_m3: 365, water_liters: 21264 },
  { date: '25-05', electricity_kWh: 2920, gas_m3: 341, water_liters: 20448 },
  { date: '26-05', electricity_kWh: 2980, gas_m3: 356, water_liters: 20616 },
  { date: '27-05', electricity_kWh: 3025, gas_m3: 362, water_liters: 21024 },
  { date: '28-05', electricity_kWh: 2950, gas_m3: 348, water_liters: 20832 },
  { date: '29-05', electricity_kWh: 2905, gas_m3: 342, water_liters: 20568 },
  { date: '30-05', electricity_kWh: 3050, gas_m3: 368, water_liters: 21240 },
  { date: '31-05', electricity_kWh: 2975, gas_m3: 354, water_liters: 20712 },
];

const renderChart = (
  title: string,
  labels: string[],
  dataSet: number[],
  color: string
) => {
  return (
    <View style={{ marginBottom: 32 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: 12,
        }}
      >
        {title}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <LineChart
          data={{
            labels,
            datasets: [{ data: dataSet }],
            legend: [title],
          }}
          width={Math.max(screenWidth, labels.length * 40)}
          height={280}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: '#f0f0f0',
            backgroundGradientFrom: '#f0f0f0',
            backgroundGradientTo: '#f0f0f0',
            decimalPlaces: 0,
            color: (opacity = 1) => color.replace('opacity', opacity.toString()),
            labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: color.replace('opacity', '1'),
            },
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            alignSelf: 'center',
          }}
        />
      </ScrollView>
    </View>
  );
};

const EnergyCharts = () => {
  // Extract labels (dates) and datasets
  const labels = data.map((d) => d.date);
  const electricity = data.map((d) => d.electricity_kWh);
  const gas = data.map((d) => d.gas_m3);
  const water = data.map((d) => d.water_liters);

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      {renderChart('Electricity (kWh)', labels, electricity, 'rgba(0, 123, 255, opacity)')}
      {renderChart('Gas (m³)', labels, gas, 'rgba(255, 165, 0, opacity)')}
      {renderChart('Water (liters)', labels, water, 'rgba(0, 191, 255, opacity)')}
    </ScrollView>
  );
};

export default EnergyCharts;
