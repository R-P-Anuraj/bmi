let calories=0;
function calculate(){
    names=document.getElementById(`names`).value
    age=parseInt(document.getElementById(`age`).value)
    weight=parseFloat(document.getElementById(`weight`).value)
    height=parseFloat(document.getElementById(`height`).value)
    gender=document.getElementById(`gender`).value
    activity=parseFloat(document.getElementById(`activity`).value)


    let bmr;
                    if (gender === "male") {
                     bmr = parseFloat(10 * weight + 6.25 * height - 5 * age + 5);
                     } else {
                     bmr = 10 * weight + 6.25 * height - 5 * age - 161;
                      }
                   let calories=parseFloat(bmr *activity); 
                    console.log(names) 
                    console.log(age)
                    console.log(bmr)
                    document.getElementById("result").innerHTML = `${names} maintenance calories are: ${calories} kcal/day`;
                    const obj={
                        names:names,
                        age:age,
                        weight:weight,
                        height:height,
                        gender:gender,
                        calories:calories
                    }
                    localStorage.setItem("data",JSON.stringify(obj));
                   const m=JSON.parse(localStorage.getItem("data")) 
                    document.getElementById("details").innerHTML= `<p>Name: ${m.names}</p>
    <p>Age: ${m.age}</p>
    <p>Weight: ${m.weight}</p>
    <p>Height: ${m.height}</p>
    <p>Gender: ${m.gender}</p>
    <p>Calories: ${m.calories}</p>
`;
                    
                   
                }

let totalca=0;
let m=0;
function set(){ 
    foodname=document.getElementById(`f`).value
    fc=parseInt(document.getElementById(`ca`).value)
    if(foodname&&fc){
       totalca=totalca+fc
       console.log(totalca,foodname)
       foodlist=document.getElementById(`toul`)
       listitem=document.createElement(`li`)
       listitem.textContent=`${foodname}  ${fc}kcal you consumed total calories ${totalca}kcal`
       foodlist.appendChild(listitem)
    }
}

