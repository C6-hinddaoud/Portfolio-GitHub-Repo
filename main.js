// 
const lodAbout=()=>{

   $("#mainSkillDiv").hide();
     $("#abputDiv").show();
     $('.projectClass').hide()
     $('.gallery1').hide()
}
lodAbout()
$("#liskill").click(function(){
     $("#mainSkillDiv").show();
     $("#abputDiv").hide();
     $('.projectClass').hide()
     $('.gallery1').hide()
  });


  
  $("#liAboutDiv").click(function(){
    $("#mainSkillDiv").hide();
     $("#abputDiv").show();
     $('.projectClass').hide()
     $('.gallery1').hide()
  });

  $(".hospital").click(function(){
   $("#mainSkillDiv").hide();
    $("#abputDiv").hide();
    $('.projectClass').hide()
    $('.gallery1').show()
   
 });
  
  $("#projectdiv").click(function(){
   $("#mainSkillDiv").hide();
    $("#abputDiv").hide();
    $('.projectClass').show()
    $('.gallery1').hide()
 });
  

 //Drag and drop Sortable.js
new Sortable(gallery, {
   swapThreshold: 1,
   animation: 150
 });
 
 //Add random heart
 function heart_loop() {
   var number = 1 + Math.floor(Math.random() * 6);
   if (number == 1 || number == 5 || number == 6) {
     $("#" + number).addClass("heart dark");
   } else {
     $("#" + number).addClass("heart");
   }
   setTimeout(function () {
     $("#" + number).removeClass();
     heart_loop();
   }, 5000);
 }
 
 heart_loop();
 