
//let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

//** Add a Pine Tree */
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200x'
// document.body.append(pineTree)

//** Add a sword*/
// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)
// sword.addEventListener('click', function(){
//     sword.remove()
// })  


function newImage(object, position){
    let newObject = document.createElement('img');
    newObject.src = './assets/' + String(object);
    newObject.style.position = 'fixed';
    newObject.style.left = position[0]+'px';
    newObject.style.bottom = position[1]+'px';
    document.body.append(newObject);

    return newObject; 
}

function newItem(newObject, position){
    let item = newImage(newObject, position);

    item.addEventListener('dblclick', function(){
        item.remove();
    });

    return item;
}

function setBackground(newObject){
    let xRatio = Math.ceil(window.innerWidth / 100);
    let yRatio = Math.ceil(window.innerHeight / 100);
    
    for (let x = 0; x < xRatio; x++){
        for (let y = 0; y < yRatio; y++){
            let indexBackground = 0;
            let horizon = 500;
            if(y*100 < horizon){
                indexBackground = 0;
            }
            else{
                indexBackground = 1;
            }
            newImage(newObject[indexBackground], [x*100,y*100]);
        }
    }
}

//Create background 
setBackground(['grass.png','sky.png']);

//new objects using newImage function.
newImage('green-character.gif', [100,100]);
newImage('pine-tree.png', [450, 200]);
newImage('tree.png', [200,300]);
newImage('pillar.png', [350, 100]);
newImage('crate.png', [150, 200]);
newImage('well.png', [500,425]);

//new items with 'pick-up' function. 
newItem('sword.png', [500, 405])
newItem('sheild.png', [165, 185]);
newItem('staff.png', [600, 100]);