//array declaration
var nameOfTheArray=[1,2,3,4,1,5,7,6,3];
console.log(nameOfTheArray);
for(i=0;i<nameOfTheArray.length;i++)
{
    console.log(nameOfTheArray[i]);
}
nameOfTheArray[1]=10;
console.log(nameOfTheArray)

//push is used to add the element in last of the array
var index=nameOfTheArray.push(60);
console.log(index);
console.log(nameOfTheArray);

//pop is used to delete the last index of the element
var element=nameOfTheArray.pop(60);
console.log(element);
console.log(nameOfTheArray);

//unshift operaation is used to add element to starting index
nameOfTheArray.unshift(50);
console.log(nameOfTheArray);

//shift is used to delete the starting index.
console.log(nameOfTheArray.shift(50));
console.log(nameOfTheArray);

//slice operation is used to cut the array values.--->arrayName.slice(starting index,Ending index);
var array=[10,30,20,50,60,30,40,30,40,50,37,45];
console.log(array);
var newArray=array.slice(0,6);
console.log(newArray);

var deletedElement=newArray.pop();
console.log(deletedElement);

console.log(newArray);
console.log(newArray.shift());

//splice operation---->arrayName.splice(index,no_of_deleted_elements,insert_No_Of_Element)
var numbers=[2,5,4,5,6,7,8,3,6];
console.log(numbers);
console.log(numbers.splice(1,3,7,8,0));
console.log(numbers);

var names=["Shambhu","jai","Wasi","Poki","Bharat","Nitin"];
console.log(names);
console.log(names.splice(1,4,"Madhu","Kiran","Ganesh"));
console.log(names);



