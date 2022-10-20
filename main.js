// 
const lodAbout=()=>{

   $("#mainSkillDiv").hide();
     $("#abputDiv").show();
     $('.projectClass').hide()
     $('.gallery1').hide()
     $('.gallery2').hide()
     $('.gallery3').hide()
     $('.gallery4').hide()
     $('.gallery5').hide()
     $('.gallery6').hide()
}
lodAbout()
$("#liskill").click(function(){
     $("#mainSkillDiv").show();
     $("#abputDiv").hide();
     $('.projectClass').hide()
     $('.gallery1').hide()
     $('.gallery2').hide()
     $('.gallery3').hide()
     $('.gallery4').hide()
     $('.gallery5').hide()
     $('.gallery6').hide()
  });


  
  $("#liAboutDiv").click(function(){
    $("#mainSkillDiv").hide();
     $("#abputDiv").show();
     $('.projectClass').hide()
     $('.gallery1').hide()
     $('.gallery2').hide()
     $('.gallery3').hide()
     $('.gallery4').hide()
     $('.gallery5').hide()
     $('.gallery6').hide()
  });

  $(".hospital").click(function(){
   $("#mainSkillDiv").hide();
    $("#abputDiv").hide();
    $('.projectClass').hide()
    $('.gallery1').show()
    $('.gallery2').hide()
    $('.gallery3').hide()
    $('.gallery4').hide()
    $('.gallery5').hide()
    $('.gallery6').hide()
   
 });
  
  $("#projectdiv").click(function(){
   $("#mainSkillDiv").hide();
    $("#abputDiv").hide();
    $('.projectClass').show()
    $('.gallery1').hide()
    $('.gallery2').hide()
    $('.gallery3').hide()
    $('.gallery4').hide()
    $('.gallery5').hide()
    $('.gallery6').hide()
 });
  
 $(".book").click(function(){
   $("#mainSkillDiv").hide();
    $("#abputDiv").hide();
    $('.projectClass').hide()
    $('.gallery1').hide()
    $('.gallery2').show()
    $('.gallery3').hide()
    $('.gallery4').hide()
    $('.gallery5').hide()
    $('.gallery6').hide()
   
 });

 $(".game").click(function(){
   $("#mainSkillDiv").hide();
    $("#abputDiv").hide();
    $('.projectClass').hide()
    $('.gallery1').hide()
    $('.gallery2').hide()
    $('.gallery3').show()
    $('.gallery4').hide()
    $('.gallery5').hide()
    $('.gallery6').hide()
 });

 $(".food").click(function(){
   $("#mainSkillDiv").hide();
    $("#abputDiv").hide();
    $('.projectClass').hide()
    $('.gallery1').hide()
    $('.gallery2').hide()
    $('.gallery3').hide()
    $('.gallery4').show()
    $('.gallery5').hide()
    $('.gallery6').hide()
 });

 $(".emp").click(function(){
   $("#mainSkillDiv").hide();
    $("#abputDiv").hide();
    $('.projectClass').hide()
    $('.gallery1').hide()
    $('.gallery2').hide()
    $('.gallery3').hide()
    $('.gallery4').hide()
    $('.gallery5').show()
    $('.gallery6').hide()
 });
 $(".art").click(function(){
   $("#mainSkillDiv").hide();
    $("#abputDiv").hide();
    $('.projectClass').hide()
    $('.gallery1').hide()
    $('.gallery2').hide()
    $('.gallery3').hide()
    $('.gallery4').hide()
    $('.gallery5').hide()
    $('.gallery6').show()
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
 