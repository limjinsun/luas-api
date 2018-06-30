# Dublin Luas - node js api

There were no json friendly api. so I just made it by myself.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

```
npm install
npm start
```

## Example

localhost:8080/luas/<<id nunber of station>>

for instance, localhost:8080/luas/21
you will get following result as Json object. 

```
[{
    "Direction": "Inbound",
    "Destination": "The Point",
    "DueTime": "00:00:55"
}, {
    "Direction": "Inbound",
    "Destination": "The Point",
    "DueTime": "00:04:14"
}, {
    "Direction": "Inbound",
    "Destination": "Connolly",
    "DueTime": "00:10:51"
}, {
    "Direction": "Inbound",
    "Destination": "The Point",
    "DueTime": "00:16:41"
}, {
    "Direction": "Outbound",
    "Destination": "Tallaght",
    "DueTime": "00:03:35"
}, {
    "Direction": "Outbound",
    "Destination": "Saggart",
    "DueTime": "00:09:35"
}, {
    "Direction": "Outbound",
    "Destination": "Tallaght",
    "DueTime": "00:15:35"
}]
```


## Authors

* **Jin Lim** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc


