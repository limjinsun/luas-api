# Dublin Luas - node js api

There were no json friendly api. so I just made it by myself.

### Installing

```
npm install
npm start
```

! important.
If you have trouble to deploy in Linux server environment. You need to disable some function from node-js package 'tabletojson' - and
anything related to following function 
```
static async convertUrl(url, arg1, arg2) {
```
'async' keyword making a trouble, but I wouldn't know why and details. This function hasn't been used. so You can 'block comments' it.


## How to use

localhost:8080/luas/[luas-station-stop-id]

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
Following informaition are Luas stop id and station indicating text. from - http://luasforecasts.rpa.ie/analysis/view.aspx?

```
stop id - station indicator - station 

57 - TPT - The Point
56 - SDK - Spencer Dock
55 - MYS - Mayor Square - NCI
54 - GDK - Georges Dock
23 - CON - Connolly
22 - BUS - Busras
21 - ABB - Abbey Street
20 - JER - Jervis
19 - FOU - Four Courts
18 - SMI - Smithfield
17 - MUS - Museum
16 - HEU - Heuston
15 - JAM - Jamess
14 - FAT - Fatima
13 - RIA - Rialto
12 - SUI - Suir Road
11 - GOL - Goldenbridge
10 - DRI - Drimnagh
9 - BLA - Blackhorse
8 - BLU - Bluebell
7 - KYL - Kylemore
6 - RED - Red Cow
5 - KIN - Kingswood
4 - BEL - Belgard
3 - COO - Cookstown
2 - HOS - Hospital
1 - TAL - Tallaght
49 - FET - Fettercairn
50 - CVN - Cheeverstown
51 - CIT - Citywest Campus
52 - FOR - Fortunestown
53 - SAG - Saggart
58 - DEP - Depot
71 - BRO - Broombridge
70 - CAB - Cabra
69 - PHI - Phibsborough
68 - GRA - Grangegorman
67 - BRD - Broadstone - DIT
66 - DOM - Dominick
65 - PAR - Parnell
64 - OUP - OConnell - Upper
63 - OGP - OConnell - GPO
62 - MAR - Marlborough
61 - WES - Westmoreland
60 - TRY - Trinity
59 - DAW - Dawson
24 - STS - St. Stephen's Green
25 - HAR - Harcourt
26 - CHA - Charlemont
27 - RAN - Ranelagh
28 - BEE - Beechwood
29 - COW - Cowper
30 - MIL - Milltown
31 - WIN - Windy Arbour
32 - DUN - Dundrum
33 - BAL - Balally
34 - KIL - Kilmacud
35 - STI - Stillorgan
36 - SAN - Sandyford
37 - CPK - Central Park
38 - GLE - Glencairn
39 - GAL - The Gallops
40 - LEO - Leopardstown Valley
42 - BAW - Ballyogan Wood
43 - RCC - Racecourse
44 - CCK - Carrickmines
45 - BRE - Brennanstown
46 - LAU - Laughanstown
47 - CHE - Cherrywood
48 - BRI - Bride's Glen
```

## Authors

* **Jin Lim** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc


