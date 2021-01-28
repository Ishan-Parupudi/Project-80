var name_of_the_student_array=[];

function submit(){
    var display_student_array=[];
    for(var j=1;j<=4;j++){
    var name_of_the_student=document.getElementById("name_of_the_student_" + j).value;
    console.log(name_of_the_student);
    name_of_the_student_array.push(name_of_the_student);
    }
    console.log(name_of_the_student_array);
    var length_1=name_of_the_student_array.length;
    console.log(length_1);
    for(var i=0;i<length_1;i++){
        display_student_array.push( "NAME:" + name_of_the_student_array[i] );
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;

    document.getElementById("submit_button").style.display = "none"; document.getElementById("sort_button").style.display = "inline-block";
    
}

function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
  var  display_student_array_sorting=[];
    var length_2=name_of_the_student_array.length;
    console.log(length_2);
    for(var a=0;a<length_2;a++){
        display_student_array_sorting.push("<h4> NAME ;" + name_of_the_student_array[a] + "</h4>");
        console.log(display_student_array_sorting);
}
console.log(display_student_array_sorting);
document.getElementById("display_name_with_commas").innerHTML=display_student_array_sorting;
}