$(function (){
    isNavBarHidden = true;
   $('body > header .menu_icon img').click(function (){
       if(isNavBarHidden){
            $('body > header > div > nav .nav_bar').show('slow');
            isNavBarHidden = false;
       }
        else{
            isNavBarHidden = true;
            $('body > header > div > nav .nav_bar').hide("slow");
        }
      
   });
});