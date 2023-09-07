StudentArray = [];
function Submit()

{
    var displayStudentArray = [];
    for (var j = 1; j <= 4; j++)
    {
        var nameOfTheStudent = document.getElementById("nameOfTheStudent"+j).value;
        console.log(nameOfTheStudent);
        StudentArray.push(nameOfTheStudent);

    }

    console.log(StudentArray)

    var lengthOfNameOfStudentsArray = StudentsArray.length;
    console.log(lengthOfNameOfStudentsArray);

    for (var k = 0; k < lengthOfNameOfStudentsArray; k++)
    {

displayStudentArray.push("<h4>NOME - "+ StudentArray[k] + "</h4>" );
console.log(displayStudentArray);
}

console.log(displayStudentArray);
document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

var removeCommas = displayStudentArray.join(" ");
console.log(removeCommas);
document.getElementById("submitButton").style.display = "none";

function sorting()
{
    StudentArray.sort();
    console.log(StudentArray);
}
    var displayStudentArraySorting = [];

    var lenghtOfNameOfStudentArray = StudentArray.lenght;
    console.log(lenghtOfNameOfStudentArray);

    for (var k = 0; k < lenghtOfNameOfStudentArray; k++)
    {
        displayStudentArraySorting.push("<h4>NOME - " + StudentAray[k] + "</h4>")
        ;
        console.log(displayStudentArraySorting);

    }

    var removeCommas = displayStudentArraySorting.join(" ");

    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
   
    function newupdate()
    {
        document.getEementById("displayNameWithoutCommas").innerHTML = "<h1>" + StudentArray +"</h1>";
    }
}
