listofstudents=[]
function submit(){
   var displaystudent=[]

   for(var j=1; j<=6; j++){
       var studentname=document.getElementById("s"+j).value 
       listofstudents.push(studentname)
   }
   var lengthofstudent=listofstudents.length 
   
   for(var b=0; b<lengthofstudent; b++){
       displaystudent.push(listofstudents[b])
   }
   document.getElementById("displayname").innerHTML=displaystudent
 
}
function sorting(){
    listofstudents.sort()
    document.getElementById("displayname").innerHTML=listofstudents
}