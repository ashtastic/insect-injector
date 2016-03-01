// Create your variable here, name it `insects`

var insects = [{
    name: 'Ant Nest Beetle',
    image: 'ant-nest-beetle.jpg',
    family: 'Carabidae',
    minSize: '6',
    maxSize: '20',
    eatsInsects: 'Yes',
    eatsDung: 'No',
    eatsPlants: 'No'

  }, {

    name: 'Dung Beetle',
    image: 'dung-beetle.jpg',
    family: 'Scarabidae',
    minSize: '20',
    maxSize: '30',
    eatsInsects: 'No',
    eatsDung: 'Yes',
    eatsPlants: 'No'

  }, {

    name: 'Stag Beetle',
    image: 'stag-beetle.jpg',
    family: 'Lucanidae',
    minSize: '5',
    maxSize: '120',
    eatsInsects: 'No',
    eatsDung: 'No',
    eatsPlants: 'Yes'

  }, {

    name: 'Tortoise Beetle',
    image: 'tortoise-beetle.jpg',
    family: 'Cassidinae',
    minSize: '1',
    maxSize: '18',
    eatsInsects: 'No',
    eatsDung: 'No',
    eatsPlants: 'Yes'

  }

}];

// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var writeInsects = function (bugs) {
  document.write('<h1>Insects</h1>');

  document.write('<ol>');

  bugs.forEach(function (bug) {
    document.write('<li>');
    document.write('<h2>' + bug.name + '</h2>');
    document.write('<img src="images/' + bug.img + '" alt="">');
    document.write('<dl>');
    document.write('<dt>Family</dt>');
    document.write('<dd><i>' + bug.family + '</i></dd>');
    document.write('<dt>Size</dt>');
    document.write('<dd>' + bug.size[0] + '–' + bug.size[1] + ' mm</dd>');
    document.write('<dt>Eats</dt>');

    document.write('<dd>');

    if (bug.food.eatsInsects) {
      document.write('Insects');
    }

    if (bug.food.eatsDung) {
      document.write('Dung');
    }

    if (bug.food.eatsPlants) {
      document.write('Plants');
    }

    document.write('</dd>');

    document.write('</dl>');
    document.write('</li>');
  });

  document.write('</ol>');
};

writeInsects(insects);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
