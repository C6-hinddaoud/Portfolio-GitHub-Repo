$("#liskill").click(function(){
     $("#mainSkillDiv").show();
     $("#abputDiv").hide();
     $('.projectClass').hide()
  });



  $("#liAboutDiv").click(function(){
    $("#mainSkillDiv").hide();
     $("#abputDiv").show();
     $('.projectClass').hide()
  });


  
  $("#projectdiv").click(function(){
   $("#mainSkillDiv").hide();
    $("#abputDiv").hide();
    $('.projectClass').show()
 });
  