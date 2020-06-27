## API:
https://abhi3315-covid-api.herokuapp.com/

## Getting started:
```
//Clone the directory
npm i
npm run start
```

## Getting JSON data
> request method: GET
> response date: JSON

#### Get global data (ordered by: countries name)
> BASE_URL/global?order_by=country_name

#### Get global data (ordered by: total cases)
> BASE_URL/global?ordered_by=total_cases

#### Get the Indian state data
> BASE_URL/india

#### Get the Indian district data
> BASE_URL/india/district

#### Get the cases time series of India
> BASE_URL/india/cases_time_series
