import { Slider } from '@mantine/core';

export default function TestSlider() {
  return (
    <Slider
      color="blue"
      marks={[
        { value: 20, label: '20%' },
        { value: 30, label: '30%' },
        { value: 40, label: '40%' },
        { value: 50, label: '50%' },
        { value: 60, label: '60%' },
        { value: 70, label: '70%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}