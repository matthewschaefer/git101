// Dog model
function Hamster (name, breed, age, sound, imgUrl) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sound = sound;
    this.imgUrl = imgUrl; 
}

// dog Instances
var cousteau = new Hamster('Chiquita Banana', 'regular', 14, 'squeek','https://forcechange.com/wp-content/uploads/2015/05/syrian-hamster.jpg');
var Emy = new Hamster('Emy','regular', 7, 'AAAAAHHH!','http://www.yourpurebredpuppy.com/dogbreeds/photos-AB/australianshepherds-th1.jpg' );


// hamster Array
var hamsterArray = [cousteau, fred];

//Output to HTML
for (i=0;i < hamsterArray.length; i++) {
        name = hamsterArray[i].name,
        img = hamsterArray[i].imgUrl,
        breed = hamsterArray[i].breed,
        sound = hamsterArray[i].sound;
        var animalDiv = document.createElement('div');
        animalDiv.className = 'animalContainer'        
        animalDiv.innerHTML = '<div class="animalContent"><img class="animalImg" src="'+img+'" /><p class="name">'+name+'</p><p class="breed">'+breed+'</p><p class="sound">'+sound+'</p></div>';
        var sectionContainer = document.getElementById('dogs');
        sectionContainer.appendChild(animalDiv);
}

