var people = [
	{
		firstName: 'Amanda',
		lastName: 'Harris',
		age: 42,
		gender: 'f',
		children: [
			{
				firstName: 'Ben',
				age: 18,
				gender: 'm'
			},
			{
				firstName: 'Lisa',
				age: 15,
				gender: 'f',
			}
		]
	},
	{
		firstName: 'Brian',
		lastName: 'Hall',
		age: 36,
		gender: 'm',
		children: [
			{
				firstName: 'Erica',
				age: 11,
				gender: 'f',
			},
			{
				firstName: 'Jenny',
				age: 8,
				gender: 'f',
			} 
		]
	},
	{
		firstName: 'Terrence',
		lastName: 'Smith',
		age: 49,
		gender: 'm',
		children: [
			{
				firstName: 'David',
				age: 17,
				gender: 'm,'
			},
			{
				firstName: 'Alex',
				age: 23,
				gender: 'f',
			},
			{
				firstName: 'Joe',
				age: 25,
				gender: 'm',
			}
		]
	},
	{
		firstName: 'Alyssa',
		lastName: 'Ingram',
		age: 28,
		gender: 'f',
		children: [
			{
				firstName: 'Jamie',
				age: 3,
				gender: 'f',
			},
			{
				firstName: 'Lori',
				age: 2,
				gender: 'f',
			}
		]
	}
];

//1

for (var i = 0; i < people.length; i++) {
		people[i].children.push({
			firstName: 'Ashton',
			age: 10 + i,
			gender: 'f'
		});
}

// 2
 
for (var i = 0; i < people.length; i++) {
  	if (people[i].gender === 'm') {
  		people[i].age += 5;
  	}
 }
 	console.log(people);

// 3
var sum = 0;
var i = 0;

	while (i < people.length) {
		sum += people[i].age;
 		i++;
 	}

var avg = sum / people.length;
 console.log(avg);

// 4
 
 for (var i = 0; i < people.length; i++) {
 	for (var j = 0; j < people[i].children.length; j++) {
 	console.log(people[i].children[j].firstName +'('+ people[i].children[j].age +','+ people[i].children[j].gender  + ')');
 	}
 }
 // 5

 var femaleSum = 0;
 var maleSum = 0;
 var maleCount = 0;
 var femaleCount = 0;
 	
 	for (var i = 0; i < people.length; i++) {
 		for (var j = 0; j < people[i].children.length; j++) {
 			if ( people[i].children[j].gender === 'm') {
 				maleSum += people[i].children[j].age;
 				maleCount++;
 			} else if (people[i].children[j].age < 12) {
 				femaleSum += people[i].children[j].age;
 				femaleCount++;
 			}
 		}
 	}	
maleAvg = maleSum / maleCount;
femaleAvg = femaleSum / femaleCount;

console.log(maleAvg);
console.log(femaleAvg);


