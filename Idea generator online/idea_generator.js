function bodyLoaded()
{
    if (location.href.includes("?"))
    {
        const properties = location.href.split("?")[1].split("&");

        document.getElementById("objects").value = properties[0].replaceAll("%20", " ");
        document.getElementById("descriptors").value = properties[1].replaceAll("%20", " ");
        document.getElementById("actions").value = properties[2].replaceAll("%20", " ");
        document.getElementById("places").value = properties[3].replaceAll("%20", " ");
    }
}


var button = document.getElementById("generate")
button.addEventListener("click", generate)

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
}

function share()
{
    const shareLink = document.getElementById("shareLink");

    var objects = document.getElementById("objects").value;
    var object_descriptors = document.getElementById("descriptors").value;
    var object_actions = document.getElementById("actions").value;
    var places = document.getElementById("places").value;

    var link = location.href.replace(location.search, "") + "?" + objects + "&" + object_descriptors + "&" + object_actions + "&" + places;

    shareLink.innerText = link;
}