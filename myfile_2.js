/**
 * 
 */

var i = 0;


function pageLoad(){
	document.getElementById("search").onclick = handleZIPCode;
	
	//check the search history
	if(!window.localStorage){
        alert("if the browser support localstorage");
        return false;
    }else{
    	var hh = localStorage.history;
    	if(typeof(hh) !== 'undefined'){
    		for(var j=0;j<hh.length;j++){
    			var node = document.createElement('p');
    			var textNode1 = document.createTextNode(hh[i]);
    			node.appendChild(textNode1);
    			document.getElementById("history").appendChild(node);
    		}
    	}
    }
	
	
}

//get the JSON result from the input zip code
//first get which country it is


window.onload = pageLoad;

function handleZIPCode(){
	//get the value of selected country's name in the options list
	var myselect = document.getElementById("country");
	var index= myselect.selectedIndex;          
	var country = myselect.options[index].text;
//	var latitude;
//	var longitude;
	var placeName;
	
	//initial url 
	var url = "http://api.zippopotam.us/";
	var popcode = document.getElementById("zipcode").value;

	if(popcode.length !== 0){
		if(country === "Finland"){

			url = url.concat("fi/").concat(popcode);
			//get code from api
			var client1 = new XMLHttpRequest();
			client1.open('GET', url, true);
			client1.onreadystatechange = function() {
				if(client1.readyState === 4) {

					const json1 = client1.responseText;
					var obj1 = JSON.parse(json1);
					placeName = obj1.places[0]['place name'];
					const longitude = obj1.places[0].longitude;
					const latitude = obj1.places[0].latitude;
					document.getElementById("placename").innerHTML = placeName;
					document.getElementById("longitude").innerHTML = longitude;
					document.getElementById("latitude").innerHTML = latitude;

//					i = i + 1;
//					var tdNode1 = document.createElement(i.toString().concat("place"));
//					var tdNode2 = document.createElement(i.toString().concat("long"));
//					var tdNode3 = document.createElement(i.toString().concat("lat"));
//					var trNode = document.createElement(i.toString().concat("tr"));
//					var textNode1 = document.createTextNode(placeName);
//					var textNode2 = document.createTextNode(longitude);
//					var textNode3 = document.createTextNode(latitude);
//					
//					trNode.appendChild(tdNode1);
//					trNode.appendChild(tdNode2);
//					trNode.appendChild(tdNode3);
//					tdNode1.appendChild(textNode1);
//					tdNode2.appendChild(textNode2);
//					tdNode3.appendChild(textNode3);
//					document.getElementById("result").appendChild(trNode);
					var myLatlng = new google.maps.LatLng(latitude,longitude);
					var mapProp = {
					    center:myLatlng,
					    zoom:5,
					};
					var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
				    var marker = new google.maps.Marker({
				    	position: myLatlng,
				       
				     });
				     marker.setMap(map);
					
				}
			};
	
			client1.send();
			

		}else if(country === "Sweden"){
			url = url.concat("se/").concat(popcode);
			
			var client2 = new XMLHttpRequest();
			client2.open("GET", url, true);
			client2.onreadystatechange = function() {
				if(client2.readyState === 4) {
					var json2 = client2.responseText;
					var obj2 = JSON.parse(json2);
					placeName = obj2.places[0]['place name']; 
					var longitude = obj2.places[0].longitude;
					var latitude = obj2.places[0].latitude;
					
					document.getElementById("placename").innerHTML = placeName;
					document.getElementById("longitude").innerHTML = longitude;
					document.getElementById("latitude").innerHTML = latitude;
					
					var myLatlng = new google.maps.LatLng(latitude,longitude);
					var mapProp = {
					    center:myLatlng,
					    zoom:5,
					};
					var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
				    var marker = new google.maps.Marker({
				    	position: myLatlng,
				       
				     });
				     marker.setMap(map);
				     
//					i = i + 1;
//					var tdNode1 = document.createElement(i.toString().concat("place"));
//					var tdNode2 = document.createElement(i.toString().concat("long"));
//					var tdNode3 = document.createElement(i.toString().concat("lat"));
//					var trNode = document.createElement(i.toString().concat("tr"));
//					var textNode1 = document.createTextNode(placeName);
//					var textNode2 = document.createTextNode(longitude);
//					var textNode3 = document.createTextNode(latitude);
//					
//					trNode.appendChild(tdNode1);
//					trNode.appendChild(tdNode2);
//					trNode.appendChild(tdNode3);
//					tdNode1.appendChild(textNode1);
//					tdNode2.appendChild(textNode2);
//					tdNode3.appendChild(textNode3);
//					document.getElementById("result").appendChild(trNode);
				}
			};

			client2.send();
			
		}else if(country === "France"){
			url = url.concat("fr/").concat(popcode);
			
			var client3 = new XMLHttpRequest();
			client3.open("GET", url, true);
			client3.onreadystatechange = function() {
				if(client3.readyState === 4) {
					var json3 = client3.responseText;
					var obj3 = JSON.parse(json3);
					placeName = obj3.places[0]['place name']; 
					longitude = obj3.places[0].longitude;
					latitude = obj3.places[0].latitude;
					
					document.getElementById("placename").innerHTML = placeName;
					document.getElementById("longitude").innerHTML = longitude;
					document.getElementById("latitude").innerHTML = latitude;
					
					var myLatlng = new google.maps.LatLng(latitude,longitude);
					var mapProp = {
					    center:myLatlng,
					    zoom:5,
					};
					var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
				    var marker = new google.maps.Marker({
				    	position: myLatlng,
				       
				     });
				     marker.setMap(map);
					
//					i = i + 1;
//					var tdNode1 = document.createElement(i.toString().concat("place"));
//					var tdNode2 = document.createElement(i.toString().concat("long"));
//					var tdNode3 = document.createElement(i.toString().concat("lat"));
//					var trNode = document.createElement(i.toString().concat("tr"));
//					var textNode1 = document.createTextNode(placeName);
//					var textNode2 = document.createTextNode(longitude);
//					var textNode3 = document.createTextNode(latitude);
//					
//					trNode.appendChild(tdNode1);
//					trNode.appendChild(tdNode2);
//					trNode.appendChild(tdNode3);
//					tdNode1.appendChild(textNode1);
//					tdNode2.appendChild(textNode2);
//					tdNode3.appendChild(textNode3);
//					document.getElementById("result").appendChild(trNode);
				}
			};

			client3.send();
			
		}else if(country === "Germany"){
			url = url.concat("de/").concat(popcode);
			
			var client4 = new XMLHttpRequest();
			client4.open("GET", url, true);
			client4.onreadystatechange = function() {
				if(client4.readyState === 4) {
					var json4 = client4.responseText;
					var obj4 = JSON.parse(json4);
					placeName = obj4.places[0]['place name']; 
					longitude = obj4.places[0].longitude;
					latitude = obj4.places[0].latitude;
					
					document.getElementById("placename").innerHTML = placeName;
					document.getElementById("longitude").innerHTML = longitude;
					document.getElementById("latitude").innerHTML = latitude;
					
					var myLatlng = new google.maps.LatLng(latitude,longitude);
					var mapProp = {
					    center:myLatlng,
					    zoom:5,
					};
					var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
				    var marker = new google.maps.Marker({
				    	position: myLatlng,
				       
				     });
				     marker.setMap(map);
					
//					i = i + 1;
//					var tdNode1 = document.createElement(i.toString().concat("place"));
//					var tdNode2 = document.createElement(i.toString().concat("long"));
//					var tdNode3 = document.createElement(i.toString().concat("lat"));
//					var trNode = document.createElement(i.toString().concat("tr"));
//					var textNode1 = document.createTextNode(placeName);
//					var textNode2 = document.createTextNode(longitude);
//					var textNode3 = document.createTextNode(latitude);
//					
//					trNode.appendChild(tdNode1);
//					trNode.appendChild(tdNode2);
//					trNode.appendChild(tdNode3);
//					tdNode1.appendChild(textNode1);
//					tdNode2.appendChild(textNode2);
//					tdNode3.appendChild(textNode3);
//					document.getElementById("result").appendChild(trNode);
				}
			};

			client4.send();
			
		}else{
			alert("please choose your country!");
		}
	}else{
		alert("Please input ZIP code!");
	}

//	document.getElementById("placename").innerHTML = placeName;
//	document.getElementById("longitude").innerHTML = longitude;
//	document.getElementById("latitude").innerHTML = latitude;
	
	//add a marker to the map
	
	var history = localStorage.history;
	//save the search history to localStorage
	if(!window.localStorage){
        alert("if the browser support localstorage");
        return false;
    }else{
        if(typeof(history) == "undefined"){
        	history = [];
        	history.unshift(country.concat(" - ").concat(popcode));
        }else if(history.length<10){
        	history.unshift(country.concat(" - ").concat(popcode));
        }else if(history.length===10){
        	history.unshift(country.concat(" - ").concat(popcode));
        	history.pop();
        }
        
        
    }

	var node = document.createElement('tr');
	var countryCell = document.createElement('td');
	var codeCell = document.createElement('td');
	const textNodeC = document.createTextNode(country);
	const textNodeP = document.createTextNode(popcode);
	countryCell.appendChild(textNodeC);
	codeCell.appendChild(textNodeP);
	node.appendChild(countryCell);
	node.appendChild(codeCell);
	document.getElementById("history").appendChild(node);
	
//	
//	var myLatlng = new google.maps.LatLng(latitude,longitude);
//	alert(latitude);
//	var mapProp = {
//	    center:myLatlng,
//	    zoom:5,
//	};
//	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//    var marker = new google.maps.Marker({
//    	position: myLatlng,
//       
//     });
//     marker.setMap(map);

	
}

function myMap() {
	var mapProp= {
	    center:new google.maps.LatLng(60.45,22.2833),
	    zoom:5,
	};
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

}

