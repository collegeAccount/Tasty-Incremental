var num_salt_water = 0;
var num_salt = 0;
var num_turtles = 0;
var num_crabs = 0;
var num_birbs = 0;

function getSaltWater(input){
    num_salt_water = num_salt_water + input;
    document.getElementById("num_salt_water").innerHTML = "Salt Water: " + num_salt_water + "ml";
}

function dryWater(input){
    if(num_salt_water >= input){
      num_salt = num_salt + input;
      num_salt_water = num_salt_water - input;
      document.getElementById("num_salt_water").innerHTML = "Salt Water: " + num_salt_water + "ml";
      document.getElementById("num_salt").innerHTML = "Salt: " + num_salt + "g";
    }
}

function buyTurtle(){
        var turtle_cost = Math.floor(10 * Math.pow(1.1,num_turtles));

        if(num_salt_water >= turtle_cost){
            num_turtles = num_turtles + 1;
            num_salt_water = num_salt_water - turtle_cost;
            document.getElementById('num_turtles').innerHTML = "Turtles: " + num_turtles;
            document.getElementById('num_salt_water').innerHTML = "Salt Water: " + num_salt_water + "ml";
            document.getElementById('salt_water_per_sec').innerHTML = "Per Sec: " + (num_turtles - num_crabs) + "ml/s"
            document.getElementById('turtle_salt_water_per_sec').innerHTML = "Per Sec: " + num_turtles + "ml/s"
        }

    var next_cost = Math.floor(10 * Math.pow(1.1,num_turtles));
    document.getElementById('turtle_cost').innerHTML = "Cost: " + next_cost + "ml water";
}

function buyCrab(){
        var crab_cost = Math.floor(10 * Math.pow(1.1,num_crabs));

        if(num_salt >= crab_cost){
            num_crabs = num_crabs + 1;
            num_salt = num_salt - crab_cost;
            document.getElementById('num_crabs').innerHTML = "Crabs: " + num_crabs;
            document.getElementById('num_salt').innerHTML = "Salt: " + num_salt + "g";
            document.getElementById('salt_per_sec').innerHTML = "Per Sec: " + num_crabs + "g/s"
            document.getElementById('salt_water_per_sec').innerHTML = "Per Sec: " + (num_turtles - num_crabs) + "ml/s"
            document.getElementById('crab_salt_per_sec').innerHTML = "Per Sec: " + num_crabs + "g/s"
        }

    var next_cost = Math.floor(10 * Math.pow(1.1,num_crabs));
    document.getElementById('crab_cost').innerHTML = "Cost: " + next_cost + "g salt";
}

function buyBirb(){
        var birb_cost = Math.floor(10 * Math.pow(1.1,num_birbs));

        if(num_salt >= birb_cost && num_salt_water >= birb_cost){
            num_birbs = num_birbs + 1;
            num_salt = num_salt - birb_cost;
            num_salt_water = num_salt_water - birb_cost;
            document.getElementById('num_birbs').innerHTML = "Birbs: " + num_birbs;
            document.getElementById('num_salt').innerHTML = "Salt: " + num_salt + "g";
            document.getElementById('num_salt_water').innerHTML = "Salt Water: " + num_salt_water + "ml";
            document.getElementById('peppercorns_per_sec').innerHTML = "Per Sec: " + num_birbs + "c/s"
        }

    var next_cost = Math.floor(10 * Math.pow(1.1,num_crabs));
    document.getElementById('crab_cost').innerHTML = "Cost: " + next_cost + "g salt";
}

window.setInterval(function(){
    getSaltWater(num_turtles);
}, 1000);

window.setInterval(function(){
    dryWater(num_crabs);
}, 1000);
