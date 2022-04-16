empty_array=[]
function submit() {
  display_array=[]
  for (var g=1;g<=4;g++){
    var name_of_singers=document.getElementById("name_of_singer_"+g).value ;
    empty_array.push(name_of_singers);
    console.log(name_of_singers);
  } 
  var length_array=name_of_singers.length;
  for (var x=0;x<length_array;x++){
    display_array.push("<h4>Name of Singer-"+ empty_array[x]+"</h4>")
  }
  document.getElementById("display_name_with_commas").innerHTML=display_array;
  remove_commas=display_array.join(" ");
  document.getElementById("display_name_without_commas").innerHTML=remove_commas;
  document.getElementById("submit_button").style.display="none";
  document.getElementById("sort_button").style.display="inline-block";
}

function sort(){
    display_array.sort()
    document.getElementById("display_name_with_commas").innerHTML=display_array;

}