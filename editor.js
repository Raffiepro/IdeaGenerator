function bodyLoaded()
{
    document.getElementById("username").value = "Random Guy";

    if (location.href.includes("?"))
    {
        const properties = location.href.split("?")[1].split("&");

        document.getElementById("objects").value = properties[0].replaceAll("%20", " ");
        document.getElementById("descriptors").value = properties[1].replaceAll("%20", " ");
        document.getElementById("actions").value = properties[2].replaceAll("%20", " ");
        document.getElementById("places").value = properties[3].replaceAll("%20", " ");
    };
};


var button = document.getElementById("generate");
button.addEventListener("click", generate);

//Idea generating
function generate()
{
    const objects = document.getElementById("objects").value.split(",");
    const object_descriptors = document.getElementById("descriptors").value.split(",");
    const object_actions = document.getElementById("actions").value.split(",");
    const places = document.getElementById("places").value.split(",");


    var random_object = objects[Math.floor(Math.random() * objects.length)];
    var random_object2 = objects[Math.floor(Math.random() * objects.length)];
    var random_object_descriptor = object_descriptors[Math.floor(Math.random() * object_descriptors.length)];
    var random_object_descriptor2 = object_descriptors[Math.floor(Math.random() * object_descriptors.length)];
    var random_object_action = object_actions[Math.floor(Math.random() * object_actions.length)];
    var random_place = places[Math.floor(Math.random() * places.length)];

    var idea = "A" + random_object_descriptor + " " + random_object + " " + random_object_action + " a" + random_object_descriptor2 + " " + random_object2 + " in" + random_place;
    document.getElementById("idea").innerHTML = "<code>"+ idea +"</code>";

    return(idea);
};

function share()
{
    const shareLink = document.getElementById("shareLink");

    var objects = document.getElementById("objects").value;
    var object_descriptors = document.getElementById("descriptors").value;
    var object_actions = document.getElementById("actions").value;
    var places = document.getElementById("places").value;

    var link = location.href.replace(location.search, "") + "?" + objects + "&" + object_descriptors + "&" + object_actions + "&" + places;
    link = link.replaceAll(" ", "%20");

    shareLink.innerText = link;
};


var ID = Math.floor(Math.random() * 999999)


function publish()
{
    var objects = document.getElementById("objects").value;
    var object_descriptors = document.getElementById("descriptors").value;
    var object_actions = document.getElementById("actions").value;
    var places = document.getElementById("places").value;

    var link = location.href.replace(location.search, "") + "?" + objects + "&" + object_descriptors + "&" + object_actions + "&" + places;
    link = link.replaceAll(" ", "%20");


    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1130625727176396850/JBOINBRhTLthAVKcWOsjYSMaS1qtKUeeOZ2JTKg6H09NIH9dqOeeCPUVhbVwt1a4muiK");

    request.setRequestHeader("Content-type", "application/json");

    const embed = {
        author: {
            name: document.getElementById("username").value + " (" + ID + ")",
        },
        title: document.getElementById("title").value,
        url: link,
        description: "Example: " + generate()
    }

    const params = {
        username: document.getElementById("username").value + " (" + ID + ")",
        avatar_url: "https://raw.githubusercontent.com/Raffiepro/IdeaGenerator/main/pfp.jpg",
        embeds: [embed]
    };
    
    console.log(JSON.stringify(params));
    //request.send(JSON.stringify(params));


    document.getElementById("published").innerText = "Published to https://discord.gg/CTNEqcgV!";
    setTimeout(function(){
        document.getElementById("published").innerText = "";
    }, 2500);
};
