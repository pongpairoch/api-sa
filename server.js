
import express  from 'express'
import bodyParser  from "body-parser";

var app2 = express()
app2.use(bodyParser.json());
app2.use(bodyParser.urlencoded({extended: true}))
var server = app2.listen(3001, console.log('server is running on port 3001'));

const slot = {
    "status": "200",
    "data": [
        {
            "id": "1",
            "name": "Thai River Wonders",
            "image": "https://www.dbestqq.net/static/images/132466044153308755205D1CE947D77CDCE6F15BEB1981B8C68B29F46E.png",
            "winrate": "90"
        },
        {
            "id": "2",
            "name": "Caishen Wins",
            "image": "https://www.dbestqq.net/static/images/132313122957267617A76FD2EB0ABA95A9B2C15E60D32674347C9CB9E5.png",
            "winrate": "85"
        },
        {
            "id": "3",
            "name": "Egypt's Book of Myst",
            "image": "https://www.dbestqq.net/static/images/13241671578422897994BF2B58A31DBC29E4F90B6EEFB23A65CEB8CA9A.png",
            "winrate": "64"
        },
        {
            "id": "4",
            "name": "Ganesha Fortune",
            "image": "https://www.dbestqq.net/static/images/1323449865646546332102D7FC822B25A689BF3C4C964A0F62EBD165CE.png",
            "winrate": "57"
        },
        {
            "id": "5",
            "name": "Dreams of Macau",
            "image": "https://www.dbestqq.net/static/images/1323916972223155098754D87A2B50C53251FB60FADC5DAF6AA77638CB.png",
            "winrate": "31"
        },
        {
            "id": "6",
            "name": "Fortune Mouse",
            "image": "https://www.dbestqq.net/static/images/132263790244454359CBEFEB0B23E42E6B5E049EAF743C3AFB0B83C5EE.png",
            "winrate": "21"
        },
        {
            "id": "7",
            "name": "Leprechaun Riches",
            "image": "https://www.dbestqq.net/static/images/1321672872976815014F78E175DF21690D84B8D505E6C31BFDBE2A5957.png",
            "winrate": "79"
        },
        {
            "id": "8",
            "name": "Candy Burst",
            "image": "https://www.dbestqq.net/static/images/132313123381895055C121FC04EC6236D93958FEAE91F2E2AF302B00D6.png",
            "winrate": "49"
        },
        {
            "id": "9",
            "name": "Captain's Bounty",
            "image": "https://www.dbestqq.net/static/images/132167273712615866A75BE6EF279A7D190D587D96C18D2A6F383BA6EE.png",
            "winrate": "25"
        },
        {
            "id": "10",
            "name": "Dragon Hatch",
            "image": "https://www.dbestqq.net/static/images/1322337533694489044DCBE87D32A50A064124F50F716CA196B1D3DC0F.png",
            "winrate": "63"
        },
        {
            "id": "11",
            "name": "The Great Icescape",
            "image": "https://www.dbestqq.net/static/images/132167284328383969CEC1144DFD0056F72A21A59D96DD920F8CEA7250.png",
            "winrate": "28"
        },
        {
            "id": "12",
            "name": "Phoenix Rises",
            "image": "https://www.dbestqq.net/static/images/132367765874377473FBBE6650EB45AAF2038A4D38A8F15B9A57000032.png",
            "winrate": "79"
        },
        {
            "id": "13",
            "name": "Mahjong Ways",
            "image": "https://www.dbestqq.net/static/images/1322033933990415204C07310F51A5A1B5F64575CF9F45FC64285AE05B.png",
            "winrate": "43"
        },
        {
            "id": "14",
            "name": "Piggy Gold",
            "image": "https://www.dbestqq.net/static/images/132167289866387876D203CFE77265A1CB9A18B87A38D7C7B3BD66D9A9.png",
            "winrate": "75"
        },
        {
            "id": "15",
            "name": "Ganesha Gold",
            "image": "https://www.dbestqq.net/static/images/1321672761370558751104A570C789A5DDFC4A759A247826A2E0CF1605.png",
            "winrate": "72"
        },
        {
            "id": "16",
            "name": "Mahjong Ways 2",
            "image": "https://www.dbestqq.net/static/images/13233912874106543258B2299FA11C7F4FFBB22438207D441D2E8742C5.png",
            "winrate": "80"
        },
        {
            "id": "17",
            "name": "Ganesha Gold",
            "image": "https://www.dbestqq.net/static/images/132284543480617909FCACD67EA06850824A083E34375468109E0194FE.png",
            "winrate": "23"
        },
        {
            "id": "18",
            "name": "Double Fortune",
            "image": "https://www.dbestqq.net/static/images/132167274875396604739CEF2232FB5B06FA348CCEF8481F597F15447E.png",
            "winrate": "32"
        },
        {
            "id": "19",
            "name": "Muay Thai Champion",
            "image": "https://www.dbestqq.net/static/images/13216728892175432593BF03CE1363DFAF9D567682AAE65E8D3815F25C.png",
            "winrate": "49"
        },
        {
            "id": "20",
            "name": "Dragon Tiger Luck",
            "image": "https://www.dbestqq.net/static/images/132193195942189467D3F1AB86AD0032EA8DC03F0B644EE24896432D5B.png",
            "winrate": "47"
        },
        {
            "id": "21",
            "name": "Jungle Delight",
            "image": "https://www.dbestqq.net/static/images/132167286614862158BF1D570111E5E242BBAD53CC4E5A7D9A239B5AC7.png",
            "winrate": "48"
        },
        {
            "id": "22",
            "name": "Legend of Hou Yi",
            "image": "https://www.dbestqq.net/static/images/1321672869986356077F6AC9E2083BED0F7A7824EDB6BA7C1B6B9F785C.png",
            "winrate": "71"
        },
        {
            "id": "23",
            "name": "Shaolin Soccer",
            "image": "https://www.dbestqq.net/static/images/13228454253513401552ED5A94EAB042D266FFD0E9D102AF779F23438C.png",
            "winrate": "48"
        },
        {
            "id": "24",
            "name": "Journey to the Wealt",
            "image": "https://www.dbestqq.net/static/images/132167286297746276DC4C81C240209235D81FA5108C931B80137BD4BD.png",
            "winrate": "43"
        },
        {
            "id": "25",
            "name": "Gem Saviour Sword",
            "image": "https://www.dbestqq.net/static/images/132167277464786088A4F5414D08398226E38FCDAB982513CF7AD6C552.png",
            "winrate": "90"
        },
        {
            "id": "26",
            "name": "Symbols of Egypt",
            "image": "https://www.dbestqq.net/static/images/132167294532024021B5FC4F5D15589489083152CAC05933B58286BA35.png",
            "winrate": "25"
        },
        {
            "id": "27",
            "name": "Bikini Paradise",
            "image": "https://www.dbestqq.net/static/images/13231312379368419478BD1E68CD557262BA9DC86863420D91AC36BDEE.png",
            "winrate": "86"
        },
        {
            "id": "28",
            "name": "Bikini Paradise",
            "image": "https://www.dbestqq.net/static/images/132167295290806482BC2D38C6643BAA54B123136B23C3E2701AD8C191.png",
            "winrate": "52"
        },
        {
            "id": "29",
            "name": "Tree of Fortune",
            "image": "https://www.dbestqq.net/static/images/132167295290806482BC2D38C6643BAA54B123136B23C3E2701AD8C191.png",
            "winrate": "30"
        },
        {
            "id": "30",
            "name": "Tree of Fortune",
            "image": "https://www.dbestqq.net/static/images/132167285356248347C30787CC7DF2A20B100C42C54722789DBFC74F1E.png",
            "winrate": "62"
        },
        {
            "id": "31",
            "name": "Hood vs Wolf",
            "image": "https://www.dbestqq.net/static/images/132167285356248347C30787CC7DF2A20B100C42C54722789DBFC74F1E.png",
            "winrate": "72"
        },
        {
            "id": "32",
            "name": "Dragon Legend",
            "image": "https://www.dbestqq.net/static/images/132167297029613745CE3684E1FE3B6642CEE8A168121DA1148E318239.png",
            "winrate": "60"
        }
    ]
}





app2.post('/api/se', (req,res) =>{
	fetch('https://pdmoney.net/api-bac/database/getlog_se.php', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
}).then(response =>  response.json())
.then(data =>  res.json({"status":"200","data":data.data}) )});
// {"room_id":"2","room_name":"E02","records":data[1].records},
// {"room_id":"3","room_name":"E03","records":data[2].records},
// {"room_id":"4","room_name":"E04","records":data[3].records},
// {"room_id":"5","room_name":"E05","records":data[4].records},
// {"room_id":"6","room_name":"E06","records":data[5].records},
// {"room_id":"7","room_name":"E07","records":data[6].records},
// {"room_id":"8","room_name":"E08","records":data[7].records},
// {"room_id":"9","room_name":"E09","records":data[8].records},
// {"room_id":"10","room_name":"E10","records":data[9].records}
// {"room_id":"11","room_name":"C01","records":data[10].records},
// {"room_id":"12","room_name":"C02","records":data[11].records},
// {"room_id":"13","room_name":"C03","records":data[12].records},
// {"room_id":"14","room_name":"C04","records":data[13].records},
// {"room_id":"15","room_name":"C05","records":data[14].records},
// {"room_id":"16","room_name":"C06","records":data[15].records},
// {"room_id":"17","room_name":"C07","records":data[16].records},
// {"room_id":"18","room_name":"E08","records":data[17].records},
// {"room_id":"19","room_name":"E09","records":data[18].records},
// {"room_id":"20","room_name":"E10","records":data[19].records},
// {"room_id":"21","room_name":"E10","records":data[20].records},
// {"room_id":"22","room_name":"E10","records":data[21].records},








app2.get('/api/slot', (req,res) => {

	return res.json(slot)
})

app2.get('/api/get', (req, res) => {
   
var sa1,sa2,sa3,sa4,sa5,sa6,sa7,sa8,sa9;

// Call the API
fetch('https://cottoapi.com/api.php?game=sexy&tablename=Table1').then(function (response) {

		return response.text();

}).then(function (data1) {

	// Store the post data to a variable
	sa1 = data1;

	// Fetch another API
	return fetch('https://cottoapi.com/api.php?game=sexy&tablename=Table2' );

}).then(function (response) {

		return response.text();

}).then(function (data2) {
	sa2 = data2;
    return  fetch('https://cottoapi.com/api.php?game=sexy&tablename=Table3' );
}).then(function (response) {
	
		return response.text();

}).then(function (data3) {

	// Store the post data to a variable
	sa3 = data3;

	// Fetch another API
	return fetch('https://cottoapi.com/api.php?game=sexy&tablename=Table4' );

}).then(function (response) {
	
		return response.text();

}).then(function (data4) {
	sa4 = data4;
    return  fetch('https://cottoapi.com/api.php?game=sexy&tablename=Table5' );
}).then(function (response) {
	
		return response.text();
	
}).then(function (data5) {

	// Store the post data to a variable
	sa5 = data5;

	return fetch('https://cottoapi.com/api.php?game=sexy&tablename=Table6' );

}).then(function (response) {
		return response.text();
}).then(function (data6) {
	sa6 = data6;
    return  fetch('https://cottoapi.com/api.php?game=sexy&tablename=Table7' );
}).then(function (response) {

		return response.text();

}).then(function (data7) {

	sa7 = data7;

	return fetch('https://cottoapi.com/api.php?game=sexy&tablename=Table8' );

}).then(function (response) {

		return response.text();
	
}).then(function (data8) {
	sa8 = data8;
    return  fetch('https://cottoapi.com/api.php?game=sexy&tablename=Table9' );
}).then(function (response) {
	
		return response.text();

}).then(function (data9) {
	sa9 = data9;
    return  fetch('https://cottoapi.com/api.php?game=sexy&tablename=Table10' );
}).then(function (response) {
	return response.text();
}).then(function (sa10) {

    
  return res.json({"status":"200","data":[{"room_id":"1","room_name":"E01","records":sa1},
  {"room_id":"2","room_name":"E02","records":sa2},
  {"room_id":"3","room_name":"E03","records":sa3},
  {"room_id":"4","room_name":"E04","records":sa4},
  {"room_id":"5","room_name":"E05","records":sa5},
  {"room_id":"6","room_name":"E06","records":sa6},
  {"room_id":"7","room_name":"E07","records":sa7},
  {"room_id":"8","room_name":"E08","records":sa8},
  {"room_id":"9","room_name":"E09","records":sa9},
  {"room_id":"10","room_name":"E10","records":sa10}

]})
   
})

});
