let marks = "60";

switch(marks){
    case "80":
    console.log("Grade : A");
    break;
    case "60":
        console.log("Grade : B");
        break;
        case "40":
    console.log("Grade : C");
    break;
    default:
    
        console.log("Grade : fail"); 
} 
let color = "pink";
switch(color){
    case "red" :
        console.log("stop!");
        break;
        case "yellow":
            console.log("slow down");
            break;
            case "green" :
        console.log("go away");
        break;
        default :
        
            console.log("traffic light has broken");
}
let day = "9";
switch(day){
    case "1":
        console.log("Monday");
        break;
        case "2" :
        console.log("tuesday");
        case "3":
            console.log("wednesday");
            break;
            case "4" :
            console.log("thrusday");
            case "5":
                console.log("friday");
                break;
                case "6" :
                console.log("saturday");

            break;
            case "7" :
                console.log("sunday");
                break;
            default:
                console.log("wrong day");
}

let firstname = prompt("enter your first name");
let lastname = prompt("enter your last name");
alert(firstname + " " +  lastname + "!" );