$(document).ready(function () {

 

let winners = [
  {
    name: "جون دو",
    phone: "555-1234",
    city: "نيويورك"
  },
  {
    name: "جين سميث",
    phone: "555-5678",
    city: "لوس انجلوس"
  },
  {
    name: "بوب جونسون",
    phone: "555-9012",
    city: "شيكاغو"
  },
  {
    name: "أليس لي",
    phone: "555-3456",
    city: "سان فرانسيسكو"
  },
  {
    name: "محمد أحمد",
    phone: "555-6789",
    city: "القاهرة"
  },
  {
    name: "ليلى علي",
    phone: "555-2345",
    city: "دبي"
  },
  {
    name: "أحمد حسين",
    phone: "555-7890",
    city: "الرياض"
  },
  {
    name: "فاطمة عبدالله",
    phone: "555-4567",
    city: "المنامة"
  },
  {
    name: "خالد ناصر",
    phone: "555-7891",
    city: "جدة"
  },
  {
    name: "ريما الحسيني",
    phone: "555-2346",
    city: "بغداد"
  },
  {
    name: "نور علي",
    phone: "555-6780",
    city: "أبو ظبي"
  },
  {
    name: "عبدالرحمن سعيد",
    phone: "555-1235",
    city: "الخرطوم"
  },
  {
    name: "سلمان فهد",
    phone: "555-9013",
    city: "الدمام"
  },
  {
    name: "مريم يوسف",
    phone: "555-5679",
    city: "المدينة"
  },
  {
    name: "عمر علي",
    phone: "555-3457",
    city: "طرابلس"
  },
  {
    name: "علي الكويتي",
    phone: "555-9014",
    city: "الكويت"
  },
  {
    name: "صالح محمد",
    phone: "555-2347",
    city: "صنعاء"
  },
  {
    name: "منى عبدالرحمن",
    phone: "555-6781",
    city: "دمشق"
  },
  {
    name: "جون دو",
    phone: "555-1234",
    city: "نيويورك"
  },
  {
    name: "جين سميث",
    phone: "555-5678",
    city: "لوس انجلوس"
  },
  {
    name: "بوب جونسون",
    phone: "555-9012",
    city: "شيكاغو"
  },
  {
    name: "أليس لي",
    phone: "555-3456",
    city: "سان فرانسيسكو"
  },
  {
    name: "محمد أحمد",
    phone: "555-6789",
    city: "القاهرة"
  },
  {
    name: "ليلى علي",
    phone: "555-2345",
    city: "دبي"
  },
  {
    name: "أحمد حسين",
    phone: "555-7890",
    city: "الرياض"
  },
  {
    name: "فاطمة عبدالله",
    phone: "555-4567",
    city: "المنامة"
  },
  {
    name: "خالد ناصر",
    phone: "555-7891",
    city: "جدة"
  },
  {
    name: "ريما الحسيني",
    phone: "555-2346",
    city: "بغداد"
  },
  {
    name: "نور علي",
    phone: "555-6780",
    city: "أبو ظبي"
  },
  {
    name: "عبدالرحمن سعيد",
    phone: "555-1235",
    city: "الخرطوم"
  },
  {
    name: "سلمان فهد",
    phone: "555-9013",
    city: "الدمام"
  },
  {
    name: "مريم يوسف",
    phone: "555-5679",
    city: "المدينة"
  },
  {
    name: "عمر علي",
    phone: "555-3457",
    city: "طرابلس"
  },
  {
    name: "علي الكويتي",
    phone: "555-9014",
    city: "الكويت"
  },
  {
    name: "صالح محمد",
    phone: "555-2347",
    city: "صنعاء"
  },
  {
    name: "منى عبدالرحمن",
    phone: "555-6781",
    city: "دمشق"
  },
  {
    name: "جون دو",
    phone: "555-1234",
    city: "نيويورك"
  },
  {
    name: "جين سميث",
    phone: "555-5678",
    city: "لوس انجلوس"
  },
  {
    name: "بوب جونسون",
    phone: "555-9012",
    city: "شيكاغو"
  },
  {
    name: "أليس لي",
    phone: "555-3456",
    city: "سان فرانسيسكو"
  },
  {
    name: "محمد أحمد",
    phone: "555-6789",
    city: "القاهرة"
  },
  {
    name: "ليلى علي",
    phone: "555-2345",
    city: "دبي"
  },
  {
    name: "أحمد حسين",
    phone: "555-7890",
    city: "الرياض"
  },
  {
    name: "فاطمة عبدالله",
    phone: "555-4567",
    city: "المنامة"
  },
  {
    name: "خالد ناصر",
    phone: "555-7891",
    city: "جدة"
  },
  {
    name: "ريما الحسيني",
    phone: "555-2346",
    city: "بغداد"
  },
  {
    name: "نور علي",
    phone: "555-6780",
    city: "أبو ظبي"
  },
  {
    name: "عبدالرحمن سعيد",
    phone: "555-1235",
    city: "الخرطوم"
  },
  {
    name: "سلمان فهد",
    phone: "555-9013",
    city: "الدمام"
  },
  {
    name: "مريم يوسف",
    phone: "555-5679",
    city: "المدينة"
  },
  {
    name: "عمر علي",
    phone: "555-3457",
    city: "طرابلس"
  },
  {
    name: "علي الكويتي",
    phone: "555-9014",
    city: "الكويت"
  },
  {
    name: "صالح محمد",
    phone: "555-2347",
    city: "صنعاء"
  },
  {
    name: "منى عبدالرحمن",
    phone: "555-6781",
    city: "دمشق"
  },
  {
    name: "جون دو",
    phone: "555-1234",
    city: "نيويورك"
  },
  {
    name: "جين سميث",
    phone: "555-5678",
    city: "لوس انجلوس"
  },
  {
    name: "بوب جونسون",
    phone: "555-9012",
    city: "شيكاغو"
  },
  {
    name: "أليس لي",
    phone: "555-3456",
    city: "سان فرانسيسكو"
  },
  {
    name: "محمد أحمد",
    phone: "555-6789",
    city: "القاهرة"
  },
  {
    name: "ليلى علي",
    phone: "555-2345",
    city: "دبي"
  },
  {
    name: "أحمد حسين",
    phone: "555-7890",
    city: "الرياض"
  },
  {
    name: "فاطمة عبدالله",
    phone: "555-4567",
    city: "المنامة"
  },
  {
    name: "خالد ناصر",
    phone: "555-7891",
    city: "جدة"
  },
  {
    name: "ريما الحسيني",
    phone: "555-2346",
    city: "بغداد"
  },
  {
    name: "نور علي",
    phone: "555-6780",
    city: "أبو ظبي"
  },
  {
    name: "عبدالرحمن سعيد",
    phone: "555-1235",
    city: "الخرطوم"
  },
  {
    name: "سلمان فهد",
    phone: "555-9013",
    city: "الدمام"
  },
  {
    name: "مريم يوسف",
    phone: "555-5679",
    city: "المدينة"
  },
  {
    name: "عمر علي",
    phone: "555-3457",
    city: "طرابلس"
  },
  {
    name: "علي الكويتي",
    phone: "555-9014",
    city: "الكويت"
  },
  {
    name: "صالح محمد",
    phone: "555-2347",
    city: "صنعاء"
  },
  {
    name: "منى عبدالرحمن",
    phone: "555-6781",
    city: "دمشق"
  },
  ];
  
  const contactsList = document.getElementById("winners-list");
  const randomIndex = Math.floor(Math.random() * winners.length);
  const randomWinner = winners[randomIndex];

		// Map the array of objects to list items and append to the unordered list
		winners.map(contact => {
			const li = document.createElement("li");
			const span = document.createElement("span");
			// li.textContent = `Name: ${contact.name}, Phone: ${contact.phone}, City: ${contact.city}`;
			span.textContent = `${contact.name}`;
			contactsList.appendChild(li);
			li.appendChild(span);
      // debugger;
		});


        $('#start').click(() => {
            
            $("#winners-list").animate({ scrollTop: $("ul li:last").offset().top},{duration:4000});
            $("#winners-list").animate({ scrollTop: $("ul li:first").offset().top},{duration:3000});



            setTimeout(function() {
                // this code will run after 5 seconds



                chooseWinner();
              }, 7000);
              


           
        })


       
          function chooseWinner() {
            winners.map(winner => {
               
                if (winner === randomWinner) {
                    // li.classList.add("active");
                    console.log(winner, randomWinner)
                    
                  
                    // debugger;
                    $($("#winners-list li")[winners.indexOf(winner)]).addClass('active');

                    $("#winners-list").animate({ scrollTop: $("ul .active").offset().top + 180}, 400);
                    
                    $('#view2').addClass('animate__bounceOutDown');
                    
                     
                     setTimeout(function() {
                      // this code will run after 5 seconds
                  
                  
                      showTap3(winner);
                    }, 1000);
                }
                
            });

          }



$('.start').click(function(){

  $('#view1').addClass('animate__bounceOutDown');
  setTimeout(function() {
    // this code will run after 5 seconds


    showTap2();
  }, 1000);
})

function showTap2(){
  $('#view1').addClass('d-none')
  // $('#view2').removeClass('d-none')
  $('#view2').addClass('animate__bounceInDown')
}


function showTap3(winner){
  $('#view2').addClass('d-none')
  // $('#view2').removeClass('d-none')
  $('#view3').addClass('animate__bounceInDown')
 

  $('.win-name').html(`${winner.name}`)
  $('.phone').html(`${winner.phone}`)
  $('.city').html(`${winner.city}`)

  async function loadParticles(options) {
    await loadFireworksPreset(tsParticles);
    
    await tsParticles.load(options);
  }
  
  const configs = { preset: "fireworks" };
  
  loadParticles(configs);

}



































// $('.main-box').click(function(){

  

// })
   




























          $('#winners-list').scroll(function() {
            $('#winners-list li').map(ele => {
                // console.log($($('#winners-list li')[10]).offset.top)
                if($($('#winners-list li')[ele]).offset().top > 0 && $($('#winners-list li')[ele]).offset().top <60 ){
                   $($('#winners-list li')[ele]).addClass('top1')
                }else{
                   $($('#winners-list li')[ele]).removeClass('top1')
                }


                if($($('#winners-list li')[ele]).offset().top > 60 && $($('#winners-list li')[ele]).offset().top <120 ){
                   $($('#winners-list li')[ele]).addClass('top2')
                }else{
                   $($('#winners-list li')[ele]).removeClass('top2')
                }
                if($($('#winners-list li')[ele]).offset().top > 120 && $($('#winners-list li')[ele]).offset().top <180 ){
                   $($('#winners-list li')[ele]).addClass('top3')
                }else{
                   $($('#winners-list li')[ele]).removeClass('top3')
                }






                if($($('#winners-list li')[ele]).offset().top > 180 && $($('#winners-list li')[ele]).offset().top <240 ){
                    $($('#winners-list li')[ele]).addClass('active1')
                }else{
                    $($('#winners-list li')[ele]).removeClass('active1')
                }






















                // console.log($($('#winners-list li')[10]).offset.top)
                if($($('#winners-list li')[ele]).offset().top > 240 && $($('#winners-list li')[ele]).offset().top <300 ){
                    $($('#winners-list li')[ele]).addClass('top4')
                }else{
                    $($('#winners-list li')[ele]).removeClass('top4')
                }


                if($($('#winners-list li')[ele]).offset().top > 300 && $($('#winners-list li')[ele]).offset().top <360 ){
                    $($('#winners-list li')[ele]).addClass('top5')
                }else{
                    $($('#winners-list li')[ele]).removeClass('top5')
                }
                if($($('#winners-list li')[ele]).offset().top > 360 && $($('#winners-list li')[ele]).offset().top <420 ){
                    $($('#winners-list li')[ele]).addClass('top6')
                }else{
                    $($('#winners-list li')[ele]).removeClass('top6')
                }

            })
          })
        //   $('#winners-list li').map(ele => {
        //     // $($('#winners-list li')[10]).offset.top)
        //     if($($('#winners-list li')[ele]).offset().top > 0 && $($('#winners-list li')[ele]).offset().top <60 ){
        //         $($('#winners-list li')[ele]).addClass('top1')
        //     }else{
        //         $($('#winners-list li')[ele]).removeClass('top1')
        //     }


        //     if($($('#winners-list li')[ele]).offset().top > 60 && $($('#winners-list li')[ele]).offset().top <120 ){
        //       $($('#winners-list li')[ele]).addClass('top2')
        //     }else{
        //  $($('#winners-list li')[ele]).removeClass('top2')
        //     }
        //     if($($('#winners-list li')[ele]).offset().top > 120 && $($('#winners-list li')[ele]).offset().top <180 ){
        //      $($('#winners-list li')[ele]).addClass('top3')
        //     }else{
        //       $($('#winners-list li')[ele]).removeClass('top3')
        //     }






        //     if($($('#winners-list li')[ele]).offset().top > 180 && $($('#winners-list li')[ele]).offset().top <240 ){
        //        $($('#winners-list li')[ele]).addClass('active1')
        //     }else{
        //        $($('#winners-list li')[ele]).removeClass('active1')
        //     }






















        //     // console.log($($('#winners-list li')[10]).offset.top)
        //     if($($('#winners-list li')[ele]).offset().top > 240 && $($('#winners-list li')[ele]).offset().top <300 ){
        //         $($('#winners-list li')[ele]).addClass('top4')
        //     }else{
        //         $($('#winners-list li')[ele]).removeClass('top4')
        //     }


        //     if($($('#winners-list li')[ele]).offset().top > 300 && $($('#winners-list li')[ele]).offset().top <360 ){
        //         $($('#winners-list li')[ele]).addClass('top5')
        //     }else{
        //         $($('#winners-list li')[ele]).removeClass('top5')
        //     }

        //     if($($('#winners-list li')[ele]).offset().top > 360 && $($('#winners-list li')[ele]).offset().top <420 ){
        //         $($('#winners-list li')[ele]).addClass('top6')
        //     }else{
        //         $($('#winners-list li')[ele]).removeClass('top6')
        //     }


        // })
  

});


