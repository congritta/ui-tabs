# @congritta-ui/tabs

This is tabs React component and part of [Congritta UI](https://ui.congritta.com)

## How to install

1. Install `@congritta-ui/base` if you didn't it yet. (More info at: http://ui.congritta.com/docs/base);
2. Install `@congritta-ui/tabs`;

Add

```javascript
import DatePicker from '@congritta-ui/tabs';
```

into your code

## How to use

Example:

```jsx
export default MyComponentWidthTabs() {
  const [value, setValue] = useState('apples')

  return (
    <Tabs activeTab={value} onChange={setValue} tabs={[
      {value: 'apples', element: 'Apples'},
      {value: 'pears', element: 'Pears'},
      {value: 'oranges', element: 'Oranges'},
      {value: 'pineapples', element: 'Pineapples'},
      {value: 'cherries', element: 'Cherries'},
      {value: 'melons', element: 'Melons'},
    ]} />
  )
}
```

### Props

| Prop name                               | Description                                                                                                                                                       | Is Required | Default value                         |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------------------------|
| tabs                                    | Array of objects. `value` propetry is unique value key (like value in regular HTML), `element` property is a string or JSX component that is visible in tabs list | true        |                                       |
| activeTab                               | Active tab value                                                                                                                                                  | true        |                                       |
| onChange                                | Function that executes when user clicks on inactive tab                                                                                                           | true        |                                       |
| tabsWrapperClassName                    | Class name for tabs wrapper for adding additional styles                                                                                                          | false       |                                       |
| tabClassName                            | Class name for a tab for adding additional styles                                                                                                                 | false       |                                       |
