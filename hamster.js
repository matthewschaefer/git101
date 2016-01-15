// Dog model
function Hamster (name, breed, age, sound, imgUrl) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sound = sound;
    this.imgUrl = imgUrl; 
}

// dog Instances
var cousteau = new Hamster('Cousteau', 'regular', 14, 'zzzzzzzzzzzz','https://forcechange.com/wp-content/uploads/2015/05/syrian-hamster.jpg');
var fred = new Hamster('Fred','little', 7, 'AAAAAHHH!','https://s-media-cache-ak0.pinimg.com/736x/6d/e2/25/6de2251b8b4be709dcc936ae4f0caaaf.jpg' );


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
        var sectionContainer = document.getElementById('hamsters');
        sectionContainer.appendChild(animalDiv);
}

