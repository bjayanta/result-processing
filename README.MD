# Result processing system
This jQuery plugin able to calculate *Grade* and *Point* from given marks. 

## Dependance
* [jQuery](https://code.jquery.com/jquery-3.3.1.slim.min.js) 

## Basic Usage
### HTML Code 
```html
<div id="result">
    <p data-mark="60"></p>
    <p data-mark="70"></p>
    <p data-mark="80"></p>
    <p data-mark="90"></p>
    <p data-mark="100"></p>
    <p data-mark="50"></p>
    <p data-mark="40"></p>
    <p data-mark="33"></p>
    <p data-mark="20"></p>
</div>
```
*Add all the marks using data attribute*

### jQuery Code
```javascript
$('div#result p').calculateResult();
```

## Options
| Options   | Description                  | Default                                    |
| --------- | ---------------------------- | ------------------------------------------ |
| marks     | Array type (*Numbers*)       | [80, 70, 60, 50, 40, 33]                   |
| grades    | Array type (*String*)        | ['A+', 'A', 'A-', 'B', 'C', 'D']           |
| points    | Array type (*Float*)         | [5.00, 4.00, 3.50, 3.00, 2.00, 1.00, 0.00] |
| passmarks | Integer                      | 33                                         |
| success   | Function with response param. This *response* param hold the total result data (grade, point and marks) | null                                       |


Thanks