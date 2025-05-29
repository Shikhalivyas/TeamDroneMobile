// LineChartFromCSV.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Dimensions } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { Circle } from 'react-native-svg';
import * as shape from 'd3-shape';
import Papa from 'papaparse';

const screenWidth = Dimensions.get('window').width;

export default function LineChartFromCSV() {
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCSV = async () => {
      try {
        // Use require to get the asset URI
        const csvAsset = require('../assets/data.csv');
        const csvUri = csvAsset.uri ? csvAsset.uri : csvAsset;
        const fileContent = await FileSystem.readAsStringAsync(csvUri);

        const parsed = Papa.parse(fileContent, { header: true });
        const rows = parsed.data as { month: string; value: string }[];

        const chartData = rows.map(row => Number(row.value));
        const xLabels = rows.map(row => row.month);

        setDataPoints(chartData);
        setLabels(xLabels);
      } catch (error) {
        console.error('CSV load error:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCSV();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  const CustomDots = ({ x, y, data }: any) =>
    data.map((value: number, index: number) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={4}
        stroke={'white'}
        fill={'#007aff'}
      />
    ));

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Line Chart from CSV
      </Text>
      <View style={{ flexDirection: 'row', height: 200 }}>
        <YAxis
          data={dataPoints}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ fill: 'grey', fontSize: 10 }}
          numberOfTicks={5}
          formatLabel={value => `${value}`}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={dataPoints}
            svg={{ stroke: '#007aff' }}
            contentInset={{ top: 20, bottom: 20 }}
            curve={shape.curveMonotoneX}
          >
            <Grid />
            <CustomDots />
          </LineChart>
          <XAxis
            style={{ marginTop: 10 }}
            data={dataPoints}
            formatLabel={(value, index) => labels[index]}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 10, fill: 'grey' }}
          />
        </View>
      </View>
    </View>
  );
}
