////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////
/////
/////    Основной скрип . Very 628
/////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var device_L1="wb-led_140"      // 1 Модуль LED
    var device_L2="wb-led_75"      // 2 Модуль LED
    var device_L3="wb-led_131"      // 3 Модуль LED
    var device_L4="wb-led_169"      // 4 Модуль LED
    var device_L5="wb-led_176"      // 5 Модуль LED
    
    var device_R1="wb-mr6cu_113"      // 1  Модуль реле  Модуль 7  адрес 113
    var device_R2="wb-mr6cu_110"    // 2  "Модуль реле "
    var device_R3="wb-mr6cu_112"    // 3  "Модуль реле    Шторы
    var device_R4="wb-mr6cu_111"    // 4  "Модуль реле    Шторы
    
    var device_DIM="wb-mdm3_215"        // A1  "Модуль димирования / подсветка"
    var device_input_1="wb-mcm8_197"   //Модуль ввода . кнопки 
    var device_input_2="wb-mcm8_172"   //Модуль ввода . кнопки 
    var device_mwac="wb-mwac-v2_183";

   //  var DD_input_Holl="wb-gpio/EXT2_IN1";   // Датчик движения в коридоре 
   // var DD_input_CLoset="wb-gpio/EXT2_IN3";   // Датчик движения в Ванной
   // var DD_input_CLoset2="wb-gpio/EXT2_IN2";   // Датчик движения в туалете
   //var button_AllOut_holl="wb-gpio/EXT1_IN14"   //  Кнопка , я ушёл   Не используеться 
    //var button_Light_Off="wb-gpio/EXT1_IN13"    //  Выключить весь свет .   Не используеться 

// Не трогать   vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv




// Не трогать  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Input 

var button_Entity1="wb-mcm8_197"   //Коридор  1
var button_Entity2="wb-mcm8_172"   //Коридор  2





var _rele_Entity1=device_R1+"/K1";       // Коридор Lx 1
var _rele_Entity2=device_R1+"/K2";       // 
var _rele_Entity3=device_R1+"/K3";      // 
var _rele_Entity3_1=device_R1+"/K4";
var _rele_Entity3_2=device_R1+"/K5";
var _rele_Entity4=device_R1+"/K6";      // 


var _rele_Entity4_1=device_R2+"/K1";   // 
var _rele_Entity5=device_R2+"/K2";    //
var _rele_Entity6=device_R2+"/K3";     //
var _rele_Entity6_1=device_R2+"/K4";    //
var _rele_Entity7=device_R2+"/K5";    //
var _rele_Entity8=device_R2+"/K6";

var _rele_Entity_M1_UP=device_R3+"/K1";
var _rele_Entity_M1_DN=device_R3+"/K2";
var _rele_Entity_M2_UP=device_R3+"/K3";
var _rele_Entity_M2_DN=device_R3+"/K4";
var _rele_Entity_M3_UP=device_R3+"/K5";
var _rele_Entity_M3_DN=device_R3+"/K6";

var _rele_Entity_M4_UP=device_R4+"/K1";
var _rele_Entity_M4_DN=device_R4+"/K2";
var _rele_Entity_M5_UP=device_R4+"/K3";
var _rele_Entity_M5_DN=device_R4+"/K4";
var _rele_Entity_M6_UP=device_R4+"/K5";
var _rele_Entity_M6_DN=device_R4+"/K6";


var _Led_Entity1_1=device_L5+"/Channel 1";  
var _Pw_Entity1_1=device_L5+"/Channel 1 Brightness";  

var _Led_Entity1_2=device_L5+"/Channel 2";  
var _Pw_Entity1_2=device_L5+"/Channel 2 Brightness";  

var _Led_Entity4_2=device_L5+"/Channel 3";  
var _Pw_Entity4_2=device_L5+"/Channel 3 Brightness";  

var _Led_Entity8_1=device_L5+"/Channel 4";  
var _Pw_Entity8_1=device_L5+"/Channel 4 Brightness";  

var _Led_Entity10_1=device_L3+"/Channel 1";  
var _Pw_Entity10_1=device_L3+"/Channel 1 Brightness";  

var _Led_Entity10_4=device_L3+"/Channel 2";  
var _Pw_Entity10_4=device_L3+"/Channel 2 Brightness";  

var _Led_Entity9_1=device_L3+"/Channel 3";  
var _Pw_Entity9_1=device_L3+"/Channel 3 Brightness";  

var _Led_Entity9_2=device_L3+"/Channel 3";  
var _Pw_Entity9_2=device_L3+"/Channel 3 Brightness";  


var _Led_Entity10_2=device_L1+"/RGB Strip";  
var _Pw_Entity10_2=device_L1+"/RGB Strip Brightness";  
var _Led_Entity10_2W=device_L1+"/Channel 4";  
var _Pw_Entity10_2W=device_L1+"/Channel 4 Brightness";  



var _Led_Entity10_3=device_L2+"/RGB Strip";  
var _Pw_Entity10_3=device_L2+"/RGB Strip Brightness";  
var _Led_Entity10_3W=device_L2+"/Channel 4";  
var _Pw_Entity10_3W=device_L2+"/Channel 4 Brightness";  


var _Led_Entity3_3=device_L4+"/RGB Strip";  
var _Pw_Entity3_3=device_L4+"/RGB Strip Brightness";  
var _Led_Entity3_3W=device_L4+"/Channel 4";  
var _Pw_Entity3_3W=device_L4+"/Channel 4 Brightness";  


var _Dim_Entity7_1=device_DIM+"/K1";  
var _Pw_Entity7_1=device_DIM+"/Channel 1";  



var _Dim_Entity7_2=device_DIM+"/K2";  
var _Pw_Entity7_2=device_DIM+"/Channel 2";  



var _Dim_Entity1=device_DIM+"/K1";
var _Dim_Ch_Entity1=device_DIM+"/Channel 1";
var _input_dn_Dim_Entity1=device_DIM+"/Input 2";
var _input_up_Dim_Entity1=device_DIM+"/Input 1";

var _Dim_Entity2=device_DIM+"/K2";
var _input_dn_Dim_Entity2=device_DIM+"/Input 3";
var _input_up_Dim_Entity2=device_DIM+"/Input 4";
var _Dim_Ch_Entity2=device_DIM+"/Channel 2";

var _Dim_Entity3=device_DIM+"/K3";
var _input_dn_Dim_Entity3=device_DIM+"/Input 5";
var _input_up_Dim_Entity3=device_DIM+"/Input 6";
var _Dim_Ch_Entity3=device_DIM+"/Channel 3";


//  MWAC 

  var _rele_mwac=device_mwac+"/K1"       // V

//////////////////////////////////////////////////////////////////////////////////////
//

var L1_1_interval = null
var L3_3_interval = null
var L1_2_interval = null
var L4_2_interval = null
var L8_1_interval = null
var L10_1_interval = null
var L10_2_interval = null
var L10_3_interval = null
var L10_4_interval = null
var L9_1_interval = null
var L9_2_interval = null
var L7_1_interval = null
var L7_2_interval = null


//////////////////////////////////////////////////////////////////////////////////////
//      Выключатель 1
// //////////////////////////////////////////////////////////////////////////////////////

                                 // Одиночное нажатие , Свет 
defineRule({
  whenChanged: [button_Entity1+"/Input 1 Single Press Counter",button_Entity1+"/Input 5 Single Press Counter",],
  then: function (newValue, devName, cellName) {

   log("Log1 Input 1 Single Press Counter - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    if  ( dev[_rele_Entity1] ) {
         dev[_rele_Entity1] = false;
        }
    else {
        dev[_rele_Entity1] = true;
    }
  }
});

                           //  Двойное нажате   Димирование   LED 
defineRule({
  whenChanged:[button_Entity1+"/Input 1 Double Press Counter",button_Entity1+"/Input 5 Double Press Counter"],
  then: function (newValue, devName, cellName) {

    if  ( dev[_Led_Entity1_1] ) {
       // Выключаем    
      L1_1_interval=setInterval(function () { 
      if  (dev[_Pw_Entity1_1]<11) {
      dev[_Pw_Entity1_1]=0;
      dev[_Led_Entity1_1]=false;
      clearTimeout(L1_1_interval);
      }
      else
      {
        dev[_Pw_Entity1_1]=dev[_Pw_Entity1_1]-10;
      } 
      }, 250);
        }
    else {
      // Включаем 
      dev[_Pw_Entity1_1]=0;
      dev[_Led_Entity1_1]=true;
      L1_1_interval=setInterval(function () { 
        if(dev[_Pw_Entity1_1]>89) {
          dev[_Pw_Entity1_1]=100;
          clearTimeout(L1_1_interval);
          }
        else{
          dev[_Pw_Entity1_1]=dev[_Pw_Entity1_1]+10;
        } 
      }, 250);
    }
  }
});
                           //  Долгле нажате   - Выключить всё в коредоре 
defineRule({
  whenChanged:[button_Entity1+"/Input 1 Long Press Counter",button_Entity1+"/Input 5 Long Press Counter"],
    then: function (newValue, devName, cellName) {
    
    log(" LONG PRESS");
        dev[_rele_Entity1]=false;
    
      
      
      if  ( dev[_Led_Entity1_1] ) {
       // Выключаем    
      
      L1_1_interval=setInterval(function () { 
      if  (dev[_Pw_Entity1_1]<11) {
      dev[_Pw_Entity1_1]=0;
      dev[_Led_Entity1_1]=false;
      clearTimeout(L1_1_interval);
      }
      else
      {
        dev[_Pw_Entity1_1]=dev[_Pw_Entity1_1]-10;
      } 
      }, 250);
    }
    
  }
});


//////////////////////////////////////////////////////////////////////////////////////
//      Выключатель 2  
// //////////////////////////////////////////////////////////////////////////////////////

                                 // Одиночное нажатие , Свет  в постирочной 
defineRule({
  whenChanged: 
  button_Entity1+"/Input 2 Single Press Counter",
  then: function (newValue, devName, cellName) {

    if  ( dev[_rele_Entity2] ) {
         dev[_rele_Entity2] = false;
        }
    else {
        dev[_rele_Entity2] = true;

    }
  }
});

                           //  Долгле нажате   - Выключитьвсё 
defineRule({
  whenChanged: [button_Entity1+"/Input 2 Long Press Counter",button_Entity2+"/Input 6 Long Press Counter",button_Entity2+"/Input 7 Long Press Counter"],
  then: function (newValue, devName, cellName) {

  log ("ALL OFF");
          dev[_rele_Entity1]=false;
          dev[_rele_Entity2]=false;
          dev[_rele_Entity3]=false;
          dev[_rele_Entity3_1]=false;
          dev[_rele_Entity3_2]=false;
          
          dev[_rele_Entity4]=false;
          dev[_rele_Entity4_1]=false;
                
          dev[_rele_Entity5]=false;
          dev[_rele_Entity6]=false;
          dev[_rele_Entity6_1]=false;
          dev[_rele_Entity7]=false;
          dev[_rele_Entity8]=false;



        if  ( dev[_Led_Entity1_1] ) {
        dev[_Pw_Entity1_1]=100;
        // Выключаем    
        L1_1_interval=setInterval(function () { 
            if  (dev[_Pw_Entity1_1]<11) {
                dev[_Pw_Entity1_1]=0;
                dev[_Led_Entity1_1]=false;
                clearTimeout(L1_1_interval);
            }
            else
            {
                dev[_Pw_Entity1_1]=dev[_Pw_Entity1_1]-10;
            } 
        }, 250);
     }


        if  ( dev[_Led_Entity1_2] ) {
        dev[_Pw_Entity1_2]=100;
        // Выключаем    
        L1_2_interval=setInterval(function () { 
            if  (dev[_Pw_Entity1_2]<11) {
                dev[_Pw_Entity1_2]=0;
                dev[_Led_Entity1_2]=false;
                clearTimeout(L1_2_interval);
            }
            else
            {
                dev[_Pw_Entity1_2]=dev[_Pw_Entity1_2]-10;
            } 
        }, 250);
     }




    


    if  ( dev[_Led_Entity3_3] ) {
      
      dev[_Pw_Entity3_3]=100;
      // Выключаем    
      L3_3_interval=setInterval(function () { 
      if  (dev[_Pw_Entity3_3]<11) {
      dev[_Pw_Entity3_3]=0;
      dev[_Led_Entity3_3]=false;
      clearTimeout(L3_3_interval);
      }
          else
      {
        dev[_Pw_Entity3_3]=dev[_Pw_Entity3_3]-10;
      } 
      }, 250);
    }



    if  ( dev[_Led_Entity4_2] ) {
      
      dev[_Pw_Entity4_2]=100;
      // Выключаем    
      L4_2_interval=setInterval(function () { 
      if  (dev[_Pw_Entity4_2]<11) {
      dev[_Pw_Entity4_2]=0;
      dev[_Led_Entity4_2]=false;
      clearTimeout(L4_2_interval);
      }
          else
      {
        dev[_Pw_Entity4_2]=dev[_Pw_Entity4_2]-10;
      } 
      }, 250);
    }


    
      if  ( dev[_Led_Entity8_1] ) {
        dev[_Pw_Entity8_1]=100;
        // Выключаем    
        L8_1_interval=setInterval(function () { 
            if  (dev[_Pw_Entity8_1]<11) {
                dev[_Pw_Entity8_1]=0;
                dev[_Led_Entity8_1]=false;
                clearTimeout(L8_1_interval);
            }
            else
            {
                dev[_Pw_Entity8_1]=dev[_Pw_Entity8_1]-10;
            } 
        }, 250);
      }
  
      if  ( dev[_Dim_Entity7_2] ) {
        dev[_Pw_Entity7_2]=100;
        // Выключаем    
        L7_2_interval=setInterval(function () { 
            if  (dev[_Pw_Entity7_2]<11) {
                dev[_Pw_Entity7_2]=0;
                dev[_Dim_Entity7_2]=false;
                clearTimeout(L7_2_interval);
            }
            else
            {
                dev[_Pw_Entity7_2]=dev[_Pw_Entity7_2]-10;
            } 
        }, 250);
      }

        
        if  ( dev[_Dim_Entity7_1] ) {
        dev[_Pw_Entity7_1]=100;
        // Выключаем    
        L7_1_interval=setInterval(function () { 
            if  (dev[_Pw_Entity7_1]<11) {
                dev[_Pw_Entity7_1]=0;
                dev[_Dim_Entity7_1]=false;
                clearTimeout(L7_1_interval);
            }
            else
            {
                dev[_Pw_Entity7_1]=dev[_Pw_Entity7_1]-10;
            } 
        }, 250);
     }

    
    
    if  ( dev[_Led_Entity9_1] ) {
      dev[_Pw_Entity9_1]=100;
      // Выключаем    
      L9_1_interval=setInterval(function () { 
      if  (dev[_Pw_Entity9_1]<11) {
      dev[_Pw_Entity9_1]=0;
      dev[_Led_Entity9_1]=false;
      clearTimeout(L9_1_interval);
      }
          else
      {
        dev[_Pw_Entity9_1]=dev[_Pw_Entity9_1]-10;
      } 
      }, 250);
    }

    if  ( dev[_Led_Entity9_2] ) {
      
      dev[_Pw_Entity9_2]=100;
      // Выключаем    
      L9_2_interval=setInterval(function () { 
      if  (dev[_Pw_Entity9_2]<11) {
      dev[_Pw_Entity9_2]=0;
      dev[_Led_Entity9_2]=false;
      clearTimeout(L9_2_interval);
      }
          else
      {
        dev[_Pw_Entity9_2]=dev[_Pw_Entity9_2]-10;
      } 
      }, 250);
    }


    
    if  ( dev[_Led_Entity10_1] ) {
      log ("Led_10_1 OFF")
      dev[_Pw_Entity10_1]=100;
      // Выключаем    
      L10_1_interval=setInterval(function () { 
      if  (dev[_Pw_Entity10_1]<11) {
      dev[_Pw_Entity10_1]=0;
      dev[_Led_Entity10_1]=false;
      clearTimeout(L10_1_interval);
      }
          else
      {
        dev[_Pw_Entity10_1]=dev[_Pw_Entity10_1]-10;
      } 
      }, 250);
    }

    if  ( dev[_Led_Entity10_2] ) {
      log ("Led_10_2 OFF")
      dev[_Pw_Entity10_2]=100;
      // Выключаем    
      L10_2_interval=setInterval(function () { 
      if  (dev[_Pw_Entity10_2]<11) {
      dev[_Pw_Entity10_2]=0;
      dev[_Led_Entity10_2]=false;
      clearTimeout(L10_2_interval);
      }
          else
      {
        dev[_Pw_Entity10_2]=dev[_Pw_Entity10_2]-10;
      } 
      }, 250);
    }

    if  ( dev[_Led_Entity10_3] ) {
      
      dev[_Pw_Entity10_3]=100;
      // Выключаем    
      L10_3_interval=setInterval(function () { 
      if  (dev[_Pw_Entity10_3]<11) {
      dev[_Pw_Entity10_3]=0;
      dev[_Led_Entity10_3]=false;
      clearTimeout(L10_3_interval);
      }
          else
      {
        dev[_Pw_Entity10_3]=dev[_Pw_Entity10_3]-10;
      } 
      }, 250);
    }

    if  ( dev[_Led_Entity10_4] ) {
      
      dev[_Pw_Entity10_4]=100;
      // Выключаем    
      L10_4_interval=setInterval(function () { 
      if  (dev[_Pw_Entity10_4]<11) {
      dev[_Pw_Entity10_4]=0;
      dev[_Led_Entity10_4]=false;
      clearTimeout(L10_4_interval);
      }
          else
      {
        dev[_Pw_Entity10_4]=dev[_Pw_Entity10_4]-10;
      } 
      }, 250);
    }

    
  
  }
});
//////////////////////////////////////////////////////////////////////////////////////
//      Выключатель 3
// //////////////////////////////////////////////////////////////////////////////////////

                                 // Одиночное нажатие , Свет 
defineRule({
  whenChanged: 
  button_Entity1+"/Input 3 Single Press Counter",
  then: function (newValue, devName, cellName) {

   log("Log1 Input 3 Single Press Counter - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    if  ( dev[_rele_Entity3] ) {
         dev[_rele_Entity3] = false;
        }
    else {
        dev[_rele_Entity3] = true;

    }
  }
});

                           //  Двойное нажате   Димирование   LED 
defineRule({
  whenChanged: button_Entity1+"/Input 3 Double Press Counter",
  then: function (newValue, devName, cellName) {

    if  ( dev[_Led_Entity3_3] ) {
      dev[_Pw_Entity3_3]=100;
      // Выключаем    
      L1_3_interval=setInterval(function () { 
      if  (dev[_Pw_Entity3_3]<11) {
      dev[_Pw_Entity3_3]=0;
      dev[_Led_Entity3_3]=false;
      clearTimeout(L3_3_interval);
      }
      else
      {
        dev[_Pw_Entity3_3]=dev[_Pw_Entity3_3]-10;
      } 
      }, 250);
        }
    else {
      // Включаем 
      dev[_Pw_Entity3_3]=0;
      dev[_Led_Entity3_3]=true;
      L3_3_interval=setInterval(function () { 
        if(dev[_Pw_Entity3_3]>89) {
          dev[_Pw_Entity3_3]=100;
          clearTimeout(L3_3_interval);
          }
        else{
          dev[_Pw_Entity3_3]=dev[_Pw_Entity3_3]+10;
        } 
      }, 250);
    }
  }
});

                           //  Долгле нажате   - Выключить всё в ванной
defineRule({
  whenChanged: button_Entity1+"/Input 3 Long Press Counter",
  then: function (newValue, devName, cellName) {
       dev[_rele_Entity3]=false;
       dev[_rele_Entity3_1]=false;
       dev[_Led_Entity3_3]=false;
       dev[_rele_Entity3_2]=false;
       
    
  }
});


//////////////////////////////////////////////////////////////////////////////////////
//      Выключатель 4
// //////////////////////////////////////////////////////////////////////////////////////

                                 // Одиночное нажатие , Свет 
defineRule({
  whenChanged: 
  button_Entity1+"/Input 4 Single Press Counter",
  then: function (newValue, devName, cellName) {

   log("Log1 Input 4 Single Press Counter - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    if  ( dev[_rele_Entity3_1] ) {
         dev[_rele_Entity3_1] = false;
        }
    else {
        dev[_rele_Entity3_1] = true;

    }
  }
});
                           //  Двойное нажате   Димирование   LED 
defineRule({
  whenChanged: button_Entity1+"/Input 4 Double Press Counter",
  then: function (newValue, devName, cellName) {

   log("Log1 Input 4 Bouble Press Counter - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    if  ( dev[_rele_Entity3_2] ) {
         dev[_rele_Entity3_2] = false;
        }
    else {
        dev[_rele_Entity3_2] = true;
    }
  }
});


                           //  Долгле нажате   - Выключить всё в ванной
defineRule({
  whenChanged: button_Entity1+"/Input 4 Long Press Counter",
  then: function (newValue, devName, cellName) {
       dev[_rele_Entity3_1]=false;
       dev[_rele_Entity3_2]=false;
  }       
});

//////////////////////////////////////////////////////////////////////////////////////
//      Выключатель 5   !
// //////////////////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////
//      Выключатель 6
// //////////////////////////////////////////////////////////////////////////////////////

                                 // Одиночное нажатие , Свет 
defineRule({
  whenChanged: 
  button_Entity1+"/Input 6 Single Press Counter",
  then: function (newValue, devName, cellName) {

   log("Log1 Input 1 Single Press Counter - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    if  ( dev["Entity1/switch"] ) {
         dev["Entity1/switch"] = false;
        }
    else {
        dev["Entity1/switch"] = true;

    }
  }
});

                           //  Двойное нажате   Димирование   LED 
defineRule({
  whenChanged: button_Entity1+"/Input 6 Double Press Counter",
  then: function (newValue, devName, cellName) {

    if  ( dev[_Led_Entity1_1] ) {
      dev[_Pw_Entity1_1]=100;
      // Выключаем    
      L1_1_interval=setInterval(function () { 
      if  (dev[_Pw_Entity1_1]<11) {
      dev[_Pw_Entity1_1]=0;
      dev[_Led_Entity1_1]=false;
      clearTimeout(L1_1_interval);
      }
      else
      {
        dev[_Pw_Entity1_1]=dev[_Pw_Entity1_1]-10;
      } 
      }, 250);
        }
    else {
      // Включаем 
      dev[_Pw_Entity1_1]=0;
      dev[_Led_Entity1_1]=true;
      L1_1_interval=setInterval(function () { 
        if(dev[_Pw_Entity1_1]>89) {
          dev[_Pw_Entity1_1]=100;
          clearTimeout(L1_1_interval);
          }
        else{
          dev[_Pw_Entity1_1]=dev[_Pw_Entity1_1]+10;
        } 
      }, 250);
    }
  }
});
//////////////////////////////////////////////////////////////////////////////////////
//      Выключатель 7
// //////////////////////////////////////////////////////////////////////////////////////

                                 // Одиночное нажатие , Свет 
defineRule({
  whenChanged: 
  button_Entity1+"/Input 7 Single Press Counter",
  then: function (newValue, devName, cellName) {

   log("Log1 Input 7 Single Press Counter - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    if  ( dev[_rele_Entity4] ) {
         dev[_rele_Entity4] = false;
        }
    else {
        dev[_rele_Entity4] = true;

    }
  }
});

                           //  Двойное нажате  
defineRule({
  whenChanged: button_Entity1+"/Input 7 Double Press Counter",
  then: function (newValue, devName, cellName) {

   log("Log1 Input 7 Double Press Counter - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    if  ( dev[_rele_Entity4_1] ) {
         dev[_rele_Entity4_1] = false;
        }
    else {
        dev[_rele_Entity4_1] = true;
    }
  }
});

                           //  Долгле нажате   - Выключить в гостинной 
defineRule({
  whenChanged: button_Entity1+"/Input 3 Long Press Counter",
  then: function (newValue, devName, cellName) {
       dev[_rele_Entity4]=false;
       dev[_rele_Entity4_1]=false;

    
      if  ( dev[_Led_Entity10_1] ) {
        dev[_Pw_Entity10_1]=100;
        // Выключаем    
        L10_1_interval=setInterval(function () { 
            if  (dev[_Pw_Entity10_1]<11) {
                dev[_Pw_Entity10_1]=0;
                dev[_Led_Entity10_1]=false;
                clearTimeout(L10_1_interval);
            }
            else
            {
                dev[_Pw_Entity10_1]=dev[_Pw_Entity10_1]-10;
            } 
        }, 250);
      }
  }
});

                           //  короткое+ длинное нажате   
defineRule({
  whenChanged: button_Entity1+"/Input 7 Shortlong Press Counter",
  then: function (newValue, devName, cellName) {

log (" Input 7 Shortlong ");
    
    if  ( dev[_Led_Entity10_1] ) {
      dev[_Pw_Entity10_1]=100;
log (" L10_1 OFF ");

      // Выключаем    
      L10_1_interval=setInterval(function () { 
      if  (dev[_Pw_Entity10_1]<11) {
      dev[_Pw_Entity10_1]=0;
      dev[_Led_Entity10_1]=false;
      clearTimeout(L10_1_interval);
      log (" L10_1 OFF STOP ");

      }
      else
      {
        dev[_Pw_Entity10_1]=dev[_Pw_Entity10_1]-10;
        log (" L10_1 OFF go to  STOP ");

      } 
      }, 250);
        }
    else {
      // Включаем 
      log (" L10_1 On ");
      dev[_Pw_Entity10_1]=0;
      dev[_Led_Entity10_1]=true;
      L10_1_interval=setInterval(function () { 
        if(dev[_Pw_Entity10_1]>89) {
          dev[_Pw_Entity10_1]=100;
          clearTimeout(L10_1_interval);
        log (" L10_1 On STOP ");  
        }
        else{
          dev[_Pw_Entity10_1]=dev[_Pw_Entity10_1]+10;
          log (" L10_1 On go to  STOP ");
        } 
      }, 250);
    }
  }
});

//////////////////////////////////////////////////////////////////////////////////////
//      Выключатель 8
// //////////////////////////////////////////////////////////////////////////////////////

                                 // Одиночное нажатие , Свет 
defineRule({
  whenChanged: 
  button_Entity1+"/Input 8 Single Press Counter",
  then: function (newValue, devName, cellName) {

   log("Log1 Input 8 Single Press Counter - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    if  ( dev[_rele_Entity5] ) {
         dev[_rele_Entity5] = false;
        }
    else {
        dev[_rele_Entity5] = true;

    }
  }
});
                           //  Двойное нажате   Димирование   LED 
defineRule({
  whenChanged: button_Entity1+"/Input 8 Double Press Counter",
  then: function (newValue, devName, cellName) {

    if  ( dev[_Led_Entity9_1] ) {
      dev[_Pw_Entity9_1]=100;
      log ("Input 8 Double OFF ");
      // Выключаем    
      L9_1_interval=setInterval(function () { 
      if  (dev[_Pw_Entity9_1]<11) {
      dev[_Pw_Entity9_1]=0;
      dev[_Led_Entity9_1]=false;
      clearTimeout(L9_1_interval);
      }
      else
      {
        dev[_Pw_Entity9_1]=dev[_Pw_Entity9_1]-10;
      } 
      }, 250);
        }
    else {
      // Включаем 
      log ("Input 8 Double ON");
      dev[_Pw_Entity9_1]=0;
      dev[_Led_Entity9_1]=true;
      L9_1_interval=setInterval(function () { 
        if(dev[_Pw_Entity9_1]>89) {
          dev[_Pw_Entity9_1]=100;
          clearTimeout(L9_1_interval);
          }
        else{
          dev[_Pw_Entity9_1]=dev[_Pw_Entity9_1]+10;
        } 
      }, 250);
    }
  }
});

                          //  Долгле нажате   - Выключить в гостинной 
defineRule({
  whenChanged: button_Entity1+"/Input 8 Long Press Counter",
  then: function (newValue, devName, cellName) {
       dev[_rele_Entity5]=false;

    log ("Input 8 LONG ");

      if  ( dev[_Led_Entity9_1] ) {
        dev[_Pw_Entity9_1]=100;
        // Выключаем    
        L9_1_interval=setInterval(function () { 
            if  (dev[_Pw_Entity9_1]<11) {
                dev[_Pw_Entity9_1]=0;
                dev[_Led_Entity9_1]=false;
                clearTimeout(L9_1_interval);
            }
            else
            {
                dev[_Pw_Entity9_1]=dev[_Pw_Entity9_1]-10;
            } 
        }, 250);
     }
     
      if  ( dev[_Led_Entity10_2] ) {
        dev[_Pw_Entity10_2]=100;
        // Выключаем    
        L10_2_interval=setInterval(function () { 
            if  (dev[_Pw_Entity10_2]<11) {
                dev[_Pw_Entity10_2]=0;
                dev[_Led_Entity10_2]=false;
                clearTimeout(L10_2_interval);
            }
            else
            {
                dev[_Pw_Entity10_2]=dev[_Pw_Entity10_2]-10;
            } 
        }, 250);
      }
  }
});

                           //  короткое+ длинное нажате   
defineRule({
  whenChanged: button_Entity1+"/Input 8 Shortlong Press Counter",
  then: function (newValue, devName, cellName) {

  log ("Input 8 Shortlong");
    
    if  ( dev[_Led_Entity10_2] ) {
    log ("Input 8 Shortlong  OFF");
      
      dev[_Pw_Entity10_2]=100;
      // Выключаем    
      L10_2_interval=setInterval(function () { 
      if  (dev[_Pw_Entity10_2]<11) {
      dev[_Pw_Entity10_2]=0;
      dev[_Led_Entity10_2]=false;
      clearTimeout(L10_2_interval);
      }
      else
      {
        dev[_Pw_Entity10_2]=dev[_Pw_Entity10_2]-10;
      } 
      }, 250);
        }
    else {
      // Включаем 
        log ("Input 8 Shortlong  ON");
      dev[_Pw_Entity10_2]=0;
      dev[_Led_Entity10_2]=true;
      L10_2_interval=setInterval(function () { 
        if(dev[_Pw_Entity10_2]>89) {
          dev[_Pw_Entity10_2]=100;
          clearTimeout(L10_2_interval);
          }
        else{
          dev[_Pw_Entity10_2]=dev[_Pw_Entity10_2]+10;
        } 
      }, 250);
    }
  }
});



//////////////////////////////////////////////////////////////////////////////////////
//      Выключатель 9
// //////////////////////////////////////////////////////////////////////////////////////

                                 // Одиночное нажатие , Свет 
defineRule({
  whenChanged: 
  button_Entity2+"/Input 1 Single Press Counter",
  then: function (newValue, devName, cellName) {

    if  ( dev[_rele_Entity6] ) {
         dev[_rele_Entity6] = false;
        }
    else {
        dev[_rele_Entity6] = true;

    }
  }
});
                           //  Двойное нажате    
defineRule({
  whenChanged: button_Entity2+"/Input 1 Double Press Counter",
  then: function (newValue, devName, cellName) {

    if  ( dev[_rele_Entity6_1] ) {
         dev[_rele_Entity6_1] = false;
        }
    else {
        dev[_rele_Entity6_1] = true;
    }
  }
});

                          //  Долгле нажате   - Выключить в гостинной 
defineRule({
  whenChanged: button_Entity2+"/Input 1 Long Press Counter",
  then: function (newValue, devName, cellName) {
       dev[_rele_Entity6]=false;
       dev[_rele_Entity6_1]=false;
  
      if  ( dev[_Led_Entity10_3] ) {
        dev[_Pw_Entity10_3]=100;
        // Выключаем    
        L10_3_interval=setInterval(function () { 
            if  (dev[_Pw_Entity10_3]<11) {
                dev[_Pw_Entity10_3]=0;
                dev[_Led_Entity10_3]=false;
                clearTimeout(L10_3_interval);
            }
            else
            {
                dev[_Pw_Entity10_3]=dev[_Pw_Entity10_3]-10;
            } 
        }, 250);
     }
  }
});

                           //  короткое+ длинное нажате   
defineRule({
  whenChanged: button_Entity2+"/Input 1 Shortlong Press Counter",
  then: function (newValue, devName, cellName) {

  log ("Input 10 / 1 Shortlong");
    
    if  ( dev[_Led_Entity10_3] ) {
    log ("Input 10 / 1  Shortlong  OFF");
      
      dev[_Pw_Entity10_3]=100;
      // Выключаем    
      L10_3_interval=setInterval(function () { 
      if  (dev[_Pw_Entity10_3]<11) {
      dev[_Pw_Entity10_3]=0;
      dev[_Led_Entity10_3]=false;
      clearTimeout(L10_3_interval);
      }
      else
      {
        dev[_Pw_Entity10_3]=dev[_Pw_Entity10_3]-10;
      } 
      }, 250);
        }
    else {
      // Включаем 
        log ("Input 8 Shortlong  ON");
      dev[_Pw_Entity10_3]=0;
      dev[_Led_Entity10_3]=true;
      L10_3_interval=setInterval(function () { 
        if(dev[_Pw_Entity10_3]>89) {
          dev[_Pw_Entity10_3]=100;
          clearTimeout(L10_3_interval);
          }
        else{
          dev[_Pw_Entity10_3]=dev[_Pw_Entity10_3]+10;
        } 
      }, 250);
    }
  }
});




//////////////////////////////////////////////////////////////////////////////////////
//      Выключатель  11 спальня
// //////////////////////////////////////////////////////////////////////////////////////

                                 // Одиночное нажатие , Свет 
defineRule({
  whenChanged: [button_Entity2+"/Input 3 Single Press Counter",button_Entity2+"/Input 5 Single Press Counter",button_Entity2+"/Input 8 Single Press Counter"],
  then: function (newValue, devName, cellName) {

   log("Log1 Input 3 Single Press Counter - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    if  ( dev[_rele_Entity7] ) {
    log ("_rele_Entity7 - OFF");
    
      dev[_rele_Entity7] = false;
        }
    else {
        dev[_rele_Entity7] = true;
log ("_rele_Entity7 - ON");
    
    }
  }
});
                           //  Двойное нажате    
defineRule({
  whenChanged: [button_Entity2+"/Input 3 Double Press Counter",button_Entity2+"/Input 5 Double Press Counter",button_Entity2+"/Input 8 Double Press Counter"],
  then: function (newValue, devName, cellName) {

    
    if  ( dev[_Led_Entity9_2] ) {
    log ("Input 2 / 3  Shortlong  OFF");
      
      dev[_Pw_Entity9_2]=100;
      // Выключаем    
      L9_2_interval=setInterval(function () { 
      if  (dev[_Pw_Entity9_2]<11) {
      dev[_Pw_Entity9_2]=0;
      dev[_Led_Entity9_2]=false;
      clearTimeout(L9_2_interval);
      }
      else
      {
        dev[_Pw_Entity9_2]=dev[_Pw_Entity9_2]-10;
      } 
      }, 250);
        }
    else {
      // Включаем 
        log ("Input 2 /3 Double ON");
      dev[_Pw_Entity9_2]=0;
      dev[_Led_Entity9_2]=true;
      L9_2_interval=setInterval(function () { 
        if(dev[_Pw_Entity9_2]>89) {
          dev[_Pw_Entity9_2]=100;
          clearTimeout(L9_2_interval);
          }
        else{
          dev[_Pw_Entity9_2]=dev[_Pw_Entity9_2]+10;
        } 
      }, 250);
    }
  }

    
});

                          //  Долгле нажате   - Выключить в гостинной 
defineRule({
  whenChanged:  [button_Entity2+"/Input 3 Long Press Counter",button_Entity2+"/Input 5 Long Press Counter",button_Entity2+"/Input 6 Long Press Counter"],
  then: function (newValue, devName, cellName) {
       dev[_rele_Entity7]=false;
       dev[_rele_Entity8]=false;
    
  
      if  ( dev[_Led_Entity9_2] ) {
        dev[_Pw_Entity9_2]=100;
        // Выключаем    
        L9_2_interval=setInterval(function () { 
            if  (dev[_Pw_Entity9_2]<11) {
                dev[_Pw_Entity9_2]=0;
                dev[_Led_Entity9_2]=false;
                clearTimeout(L9_2_interval);
            }
            else
            {
                dev[_Pw_Entity9_2]=dev[_Pw_Entity9_2]-10;
            } 
        }, 250);
     }
  
      if  ( dev[_Led_Entity8_1] ) {
        dev[_Pw_Entity8_1]=100;
        // Выключаем    
        L8_1_interval=setInterval(function () { 
            if  (dev[_Pw_Entity8_1]<11) {
                dev[_Pw_Entity8_1]=0;
                dev[_Led_Entity8_1]=false;
                clearTimeout(L8_1_interval);
            }
            else
            {
                dev[_Pw_Entity8_1]=dev[_Pw_Entity8_1]-10;
            } 
        }, 250);
      }
  
      if  ( dev[_Dim_Entity7_2] ) {
        dev[_Pw_Entity7_2]=100;
        // Выключаем    
        L7_2_interval=setInterval(function () { 
            if  (dev[_Pw_Entity7_2]<11) {
                dev[_Pw_Entity7_2]=0;
                dev[_Dim_Entity7_2]=false;
                clearTimeout(L7_2_interval);
            }
            else
            {
                dev[_Pw_Entity7_2]=dev[_Pw_Entity7_2]-10;
            } 
        }, 250);
      }

        
        if  ( dev[_Dim_Entity7_1] ) {
        dev[_Pw_Entity7_1]=100;
        // Выключаем    
        L7_1_interval=setInterval(function () { 
            if  (dev[_Pw_Entity7_1]<11) {
                dev[_Pw_Entity7_1]=0;
                dev[_Dim_Entity7_1]=false;
                clearTimeout(L7_1_interval);
            }
            else
            {
                dev[_Pw_Entity7_1]=dev[_Pw_Entity7_1]-10;
            } 
        }, 250);
     }

    if  ( dev[_Led_Entity10_4] ) {
      
      dev[_Pw_Entity10_4]=100;
      // Выключаем    
      L10_4_interval=setInterval(function () { 
      if  (dev[_Pw_Entity10_4]<11) {
      dev[_Pw_Entity10_4]=0;
      dev[_Led_Entity10_4]=false;
      clearTimeout(L10_4_interval);
      }
          else
      {
        dev[_Pw_Entity10_4]=dev[_Pw_Entity10_4]-10;
      } 
      }, 250);
    }
      }
});




                           //  короткое+ длинное нажате   
defineRule({
  whenChanged:  [button_Entity2+"/Input 3 Shortlong Press Counter",button_Entity2+"/Input 5 Shortlong Press Counter",button_Entity2+"/Input 6 Shortlong Press Counter"],
  then: function (newValue, devName, cellName) {

    if  ( dev[_Led_Entity10_4] ) {
    log ("Input 2 / 3  Shortlong  OFF");
      
      dev[_Pw_Entity10_4]=100;
      // Выключаем    
      L10_4_interval=setInterval(function () { 
      if  (dev[_Pw_Entity10_4]<11) {
      dev[_Pw_Entity10_4]=0;
      dev[_Led_Entity10_4]=false;
      clearTimeout(L10_4_interval);
      }
      else
      {
        dev[_Pw_Entity10_4]=dev[_Pw_Entity10_4]-10;
      } 
      }, 250);
        }
    else {
      // Включаем 
        log ("Input 8 / 3 Shortlong  ON");
      dev[_Pw_Entity10_4]=0;
      dev[_Led_Entity10_4]=true;
      L10_4_interval=setInterval(function () { 
        if(dev[_Pw_Entity10_4]>89) {
          dev[_Pw_Entity10_4]=100;
          clearTimeout(L10_4_interval);
          }
        else{
          dev[_Pw_Entity10_4]=dev[_Pw_Entity10_4]+10;
        } 
      }, 250);
    }
  }
});

//////////////////////////////////////////////////////////////////////////////////////
//      Выключатель 12
// //////////////////////////////////////////////////////////////////////////////////////

                                 // Одиночное нажатие , Свет 
defineRule({
  whenChanged: 
  button_Entity2+"/Input 4 Single Press Counter",
  then: function (newValue, devName, cellName) {

    if  ( dev[_rele_Entity8] ) {
         dev[_rele_Entity8] = false;
        }
    else {
        dev[_rele_Entity8] = true;

    }
  }
});
                           //  Двойное нажате    
defineRule({
  whenChanged: button_Entity2+"/Input 4 Double Press Counter",
  then: function (newValue, devName, cellName) {
    
    if  ( dev[_Led_Entity8_1] ) {
    log ("Input 8 _1  Shortlong  OFF");
      dev[_Pw_Entity8_1]=100;
      // Выключаем    
      L8_1_interval=setInterval(function () { 
      if  (dev[_Pw_Entity8_1]<11) {
      dev[_Pw_Entity8_1]=0;
      dev[_Led_Entity8_1]=false;
      clearTimeout(L8_1_interval);
      }
      else
      {
        dev[_Pw_Entity8_1]=dev[_Pw_Entity8_1]-10;
      } 
      }, 250);
        }
    else {
      // Включаем 
        log ("Input 8 Shortlong  ON");
      dev[_Pw_Entity8_1]=0;
      dev[_Led_Entity8_1]=true;
      L8_1_interval=setInterval(function () { 
        if(dev[_Pw_Entity8_1]>89) {
          dev[_Pw_Entity8_1]=100;
          clearTimeout(L8_1_interval);
          }
        else{
          dev[_Pw_Entity8_1]=dev[_Pw_Entity8_1]+10;
        } 
      }, 250);
    }
  }
   
  });

                          //  Долгле нажате   - Выключить в 
defineRule({
  whenChanged: button_Entity2+"/Input 1 Long Press Counter",
  then: function (newValue, devName, cellName) {
       dev[_rele_Entity8]=false;

       if ( dev[_Led_Entity8_1] ) {
          log ("Input 8 _1  Shortlong  OFF");
          dev[_Pw_Entity8_1]=100;
      // Выключаем    
       L8_1_interval=setInterval(function () { 
          if  (dev[_Pw_Entity8_1]<11) {
              dev[_Pw_Entity8_1]=0;
              dev[_Led_Entity8_1]=false;
              clearTimeout(L8_1_interval);
          }
          else{
              dev[_Pw_Entity8_1]=dev[_Pw_Entity8_1]-10;
          } 
       }, 250);
   }
 }
});


//////////////////////////////////////////////////////////////////////////////////////
//      Выключатель  14
// //////////////////////////////////////////////////////////////////////////////////////

                                 // Одиночное нажатие , Свет 
defineRule({
  whenChanged: button_Entity2+"/Input 6 Single Press Counter",
  then: function (newValue, devName, cellName) {

    
    if  ( dev[_Dim_Entity7_1] ) {
    log ("button_Entity2+/Input 6  - OFF ");
      dev[_Pw_Entity7_1]=100;
      // Выключаем    
      L7_1_interval=setInterval(function () { 
      if  (dev[_Pw_Entity7_1]<11) {
      dev[_Pw_Entity7_1]=0;
      dev[_Dim_Entity7_1]=false;
      clearTimeout(L7_1_interval);
      }
      else
      {
        dev[_Pw_Entity7_1]=dev[_Pw_Entity7_1]-10;
      } 
      }, 250);
        }
    else {
      // Включаем 
       log ("button_Entity2+/Input 6  - ON "); 
      dev[_Pw_Entity7_1]=0;
      dev[_Dim_Entity7_1]=true;
      L7_1_interval=setInterval(function () { 
        if(dev[_Pw_Entity7_1]>89) {
          dev[_Pw_Entity7_1]=100;
          clearTimeout(L7_1_interval);
          }
        else{
          dev[_Pw_Entity7_1]=dev[_Pw_Entity7_1]+10;
        } 
      }, 250);
    }
  }
});


//////////////////////////////////////////////////////////////////////////////////////
//      Выключатель  15
// //////////////////////////////////////////////////////////////////////////////////////

                                 // Одиночное нажатие , Свет 
defineRule({
  whenChanged: button_Entity2+"/Input 7 Single Press Counter",
  then: function (newValue, devName, cellName) {

    log ("button_Entity2+/Input 7 ");
    if  ( dev[_Dim_Entity7_2] ) {
      log ("button_Entity2+/Input 7  - OFF ");
      dev[_Pw_Entity7_2]=100;
      // Выключаем    
      L7_2_interval=setInterval(function () { 
      if  (dev[_Pw_Entity7_2]<11) {
      dev[_Pw_Entity7_2]=0;
      dev[_Dim_Entity7_2]=false;
      clearTimeout(L7_2_interval);
      }
      else
      {
        dev[_Pw_Entity7_2]=dev[_Pw_Entity7_2]-10;
      } 
      }, 250);
        }
    else {
      log ("button_Entity2+/Input 7  - ON ");
      // Включаем 
      dev[_Pw_Entity7_2]=0;
      dev[_Dim_Entity7_2]=true;
      L7_2_interval=setInterval(function () { 
        if(dev[_Pw_Entity7_2]>89) {
          dev[_Pw_Entity7_2]=100;
          clearTimeout(L7_2_interval);
          }
        else{
          dev[_Pw_Entity7_2]=dev[_Pw_Entity7_2]+10;
        } 
      }, 250);
    }
  }
});
/////////////////////////////////////////////////////////////////////////
defineVirtualDevice("Dim_Entity1",  {
  
  title: "Dim Entity1",
 
  cells: {

     config: {
        title: "Окно настройки",
		type: "switch",
		value: false

        },// switch
 
      switch: {
        title: "ON/OFF",
		type: "switch",
		value: false

        },// switch
      dim: {
        title: "Яркость",
		type: "range",
	    value: 10,
        max: 100,
        min: 1

        },// Dimm

       0: {
        title: "Открвть полностью ",
		    type: "switch",
		    value: false
        },// 
    10: {
        title: "Открыть но 10% ",
		    type: "switch",
		    value: false
        },// 
    20: {
        title: "Открыть но 20% ",
		    type: "switch",
		    value: false
        },// 
    30: {
        title: "Открыть но 30% ",
		    type: "switch",
		    value: false
        },// 
    40: {
        title: "Открыть но 40% ",
		    type: "switch",
		    value: false
        },// 
    50: {
        title: "Открыть но 50% ",
		    type: "switch",
		    value: false
        },// 
    60: {
        title: "Открыть но 60% ",
		    type: "switch",
		    value: false
        },// 
    70: {
        title: "Открыть но 70% ",
		    type: "switch",
		    value: false
        },// 
    80: {
        title: "Открыть но 80% ",
		    type: "switch",
		    value: false
        },// 
    90: {
        title: "Открыть но 90% ",
		    type: "switch",
		    value: false
        },// 
    100: {
        title: "Открыть но 100% ",
		    type: "switch",
		    value: false
        },// 
      
      
      config: {
        title: "Управлени",
		    type: "switch",
		    value: false
        },// 
      plus: {
        title: "Roll UP",
		    type: "switch",
		    value: false
        },// up
       minus: {
        title: "Roll DN",
		    type: "switch",
		    value: false
        },// up
      
        }  // calls  
});    //      

////////////////////////////////////////////////////////////////////////////////

defineRule({  //
   whenChanged:  [_input_dn_Dim_Entity1,_input_up_Dim_Entity1,"Dim_Entity1/switch"], 
  then: function (newValue, devName, cellName) {
  log("Log - Гостинная Подсветка devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
   if (newValue){
      dev["All_Lite_Off/switch"] = true;
        } 
    
    if (devName=="Dim_Entity1") {
    dev[_Dim_Entity1] = newValue ;
	log("Log1 Dim_Entity1 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
  
      return;   
    }
    
     if (!newValue){
       
       dev["Dim_Entity1/switch"]= dev[_Dim_Entity1];
       dev["Dim_Entity1/dim"]=dev [_Dim_Ch_Entity1]  ;
     }  // if
     
    
   }
});


defineRule({  // Гостинная Яркость Подсветки
   whenChanged:  [_Dim_Ch_Entity1],  
  then: function (newValue, devName, cellName) {
  log("Log1 Dim_Ch_Entity1 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    
    dev["Dim_Entity1/dim"]= newValue ;
       
   }
});



defineRule({  // Гостинная Яркость Подсветки
   whenChanged:  ["Dim_Entity1/dim"], // правило сработает, когда значение параметра изменится на истинное 
  then: function (newValue, devName, cellName) {
    log("Log1 Dim_Entity1/dim - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    
   dev[_Dim_Ch_Entity1] = newValue ;
   
       
   }
});


  defineRule({
    whenChanged: ["Dim_Entity1/plus"],
   then: function (newValue, devName, cellName) {
        log ("Увеличиваем Яркость первого канала димирования" );
    dev[_Dim_Entity1] = 1;
     if (dev["Dim_Entity1/dim"] > 90 ) {
          log ("Увеличиваем уставку  штор Уставка больше 90 " );
           dev["Dim_Entity1/dim"]=100; 
             }
        else {
          log ("Увеличиваем уставку  штор Уставка меньше 90 " );
          dev["Dim_Entity1/dim"]=dev["Dim_Entity1/dim"]+10;
        }
      }
        });
  
  defineRule({
    whenChanged: "Dim_Entity1/minus",
   then: function (newValue, devName, cellName) {
              log ("Уменьшаем Яркость первого канала димирования " );
     dev[_Dim_Entity1] = 1;  
     if (dev["Dim_Entity1/dim"] < 11 ) {
           dev["Dim_Entity1/dim"]=1; 
          }
        else {
          dev["Dim_Entity1/dim"]=dev["Dim_Entity1/dim"]-10;
        }
   }   
   });

//**  Set 0
    
    defineRule({ 
    whenChanged: "Dim_Entity1/0",
   then: function (newValue, devName, cellName) {
   
      dev["Dim_Entity1/dim"]=0;
     dev["Dim_Entity1/switch"]=true;
      }   
     });

    
    defineRule({ 
    whenChanged: "Dim_Entity1/10",
   then: function (newValue, devName, cellName) {
   
      dev["Dim_Entity1/dim"]=10;
   dev["Dim_Entity1/switch"]=true;
      }   
     });
    
    defineRule({ 
    whenChanged: "Dim_Entity1/20",
   then: function (newValue, devName, cellName) {
   
      dev["Dim_Entity1/dim"]=20;
    dev["Dim_Entity1/switch"]=true;
      }   
     });

defineRule({ 
    whenChanged: "Dim_Entity1/30",
   then: function (newValue, devName, cellName) {
   
      dev["Dim_Entity1/dim"]=30;
   dev["Dim_Entity1/switch"]=true;
      }   
     });
    
    defineRule({ 
    whenChanged: "Dim_Entity1/40",
   then: function (newValue, devName, cellName) {
   
      dev["Dim_Entity1/dim"]=40;
     dev["Dim_Entity1/switch"]=true;
      }   
     });
    
    defineRule({ 
    whenChanged: "Dim_Entity1/50",
   then: function (newValue, devName, cellName) {




     
      dev["Dim_Entity1/dim"]=50;
       dev["Dim_Entity1/switch"]=true;
      }   
     });
    
    defineRule({ 
    whenChanged: "Dim_Entity1/60",
   then: function (newValue, devName, cellName) {
   
      dev["Dim_Entity1/dim"]=60;
    dev["Dim_Entity1/switch"]=true;
      }   
     });



defineRule({ 
    whenChanged: "Dim_Entity1/70",
   then: function (newValue, devName, cellName) {
   
      dev["Dim_Entity1/dim"]=70;
    dev["Dim_Entity1/switch"]=true;
      }   
     });

    
    defineRule({ 
    whenChanged: "Dim_Entity1/80",
   then: function (newValue, devName, cellName) {
   
      dev["Dim_Entity1/dim"]=80;
   dev["Dim_Entity1/switch"]=true;
      }   
     });
    
    defineRule({ 
    whenChanged: "Dim_Entity1/90",
   then: function (newValue, devName, cellName) {
   
      dev["Dim_Entity1/dim"]=90;
    dev["Dim_Entity1/switch"]=true;
      }   
     });

defineRule({ 
    whenChanged: "Dim_Entity1/100",
   then: function (newValue, devName, cellName) {
   
      dev["Dim_Entity1/dim"]=100;
   dev["Dim_Entity1/switch"]=true;
      }   
     });





///////////////////////////////////////////////////////////////////////////////////////////////////////////
///
defineVirtualDevice("Dim_Entity2",  {
  
  title: "Dim Entity2",
 	cells: {
    
      switch: {
        title: "ON/OFF",
		type: "switch",
		value: false

        },// switch
      dim: {
        title: "Яркость",
		type: "range",
	    value: 10,
        max: 100,
        min: 1

        },// Dimm
      
        }  // calls  
});    //      Dim_Entity2



defineRule({  //
   whenChanged:  [_input_dn_Dim_Entity2,_input_dn_Dim_Entity2,"Dim_Entity2/switch"], // правило сработает, когда значение параметра изменится на истинное 
  then: function (newValue, devName, cellName) {
  log("Log - Гостинная Подсветка devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    if (newValue){
      dev["All_Lite_Off/switch"] = true;
        }
    
    if (devName=="Dim_Entity2") {
    dev[_Dim_Entity2] = newValue ;
	log("Log1 Dim_Entity2 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
  
      return;   
    }
    
     if (!newValue){
       
       dev["Dim_Entity2/switch"]= dev[_Dim_Entity2];
       dev["Dim_Entity2/dim"]=dev [_Dim_Ch_Entity2]  ;
     }  // if
     
    
   }
});


defineRule({  // Гостинная Яркость Подсветки
   whenChanged:  [_Dim_Ch_Entity2], // правило сработает, когда значение параметра изменится на истинное 
  then: function (newValue, devName, cellName) {
  log("Log1 Dim_Ch_Entity2 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    
    dev["Dim_Entity2/dim"]= newValue ;
       
   }
});


defineRule({  // Гостинная Яркость Подсветки
   whenChanged:  ["Dim_Entity2/dim"], // правило сработает, когда значение параметра изменится на истинное 
  then: function (newValue, devName, cellName) {
    log("Log1 Dim_Entity2/dim - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    
   dev[_Dim_Ch_Entity2] = newValue ;
   
       
   }
});
//


defineVirtualDevice("Dim_Entity3",  {
  
  title: "DIM Entity3",
 	cells: {
    
      switch: {
        title: "ON/OFF",
		type: "switch",
		value: false

        },// switch
      dim: {
        title: "Яркость",
		type: "range",
	    value: 10,
        max: 100,
        min: 1

        },// Dimm
      
        }  // calls  
});    //      Dim_Entity3



defineRule({  //
   whenChanged:  [_input_dn_Dim_Entity3,_input_dn_Dim_Entity3,"Dim_Entity3/switch"], // правило сработает, когда значение параметра изменится на истинное 
  then: function (newValue, devName, cellName) {
  log("Log - Гостинная Подсветка devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  

 if (newValue){
      dev["All_Lite_Off/switch"] = true;
        }
    
    
    if (devName=="Dim_Entity3") {
    dev[_Dim_Entity3] = newValue ;
	log("Log1 Dim_Entity3 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
  
      return;   
    }
    
     if (!newValue){
       
       dev["Dim_Entity3/switch"]= dev[_Dim_Entity3];
       dev["Dim_Entity3/dim"]=dev [_Dim_Ch_Entity3]  ;
     }  // if
     
    
   }
});


defineRule({  // Гостинная Яркость Подсветки
   whenChanged:  [_Dim_Ch_Entity3], // правило сработает, когда значение параметра изменится на истинное 
  then: function (newValue, devName, cellName) {
  log("Log1 Dim_Ch_Entity3 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    
    dev["Dim_Entity3/dim"]= newValue ;
       
   }
});


defineRule({  // Гостинная Яркость Подсветки
   whenChanged:  ["Dim_Entity3/dim"], // правило сработает, когда значение параметра изменится на истинное 
  then: function (newValue, devName, cellName) {
    log("Log1 Dim_Entity3 dim - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);  
    
   dev[_Dim_Ch_Entity3] = newValue ;
   
       
   }
});




///////////////////////////////////////////////////////////////////


defineVirtualDevice("Valve", {
  title: "Запорные краны ",	
  cells: {
    switch: {
     	title: "Краны  Вкл/Выкл ",
      type: "switch",
			value: false
    	},
  }
});


defineRule({    // 
  whenChanged: ["Valve/switch",_rele_mwac], // правило сработает, когда значение параметра изменится на истинное 
   then: function (newValue, devName, cellName) {

     if (devName=="Valve"){
       dev[_rele_mwac] =  newValue;
      
        }	
     else{
          dev["Valve/switch"] = _rele_mwac; 
     }
   }  
 });

//////////////////////////////////////////////////   1
defineVirtualDevice("Entity1", {
  title: "Прихожая , Тип: Основной свет",	
  cells: {
    switch: {
          type: "switch",
			value: false
    	},
  }
});

defineRule({    // 
  whenChanged: ["Entity1/switch"], 
   then: function (newValue, devName, cellName) {
      if (newValue){
      dev["All_Lite_Off/switch"] = true;
        }
       dev[_rele_Entity1] =  newValue;
        }	
          });







defineRule({  //   Сценарий "Я пришёл"
   whenChanged:  "ALL_OUT/switch", // 
  then: function (newValue, devName, cellName) {
      log("Log1 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue); 

      if ((cellName) == "EXT2_IN1" )   {
        log("Log2 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue); 
          if ((newValue) && dev["ALL_OUT/switch" ]  ) {
      
            log("Log1 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue); 
            dev["ALL_OUT/switch"] = false;   // Отключаем сценарний я ушёл
            dev[_rele_Entity11]= true;   //ХОЛЛ
            dev[_rele_Entity9]= true;   //ХОЛЛ

            
          }
      }
    }
});

/*
  defineRule({  //   Ванная  
  whenChanged: [DD_input_CLoset], // правило сработает, когда значение параметра изменится на истинное 
  then: function (newValue, devName, cellName) {
    
    if  ( newValue )  {
    log("Log1 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);
      dev[_rele_Br_Lite]= true; 
      dev["All_Lite_Off/switch"] = true;
      }
   }
});
*/
/*
defineRule({  //  WC 
  whenChanged: [DD_input_CLoset2], // правило сработает, когда значение параметра изменится на истинное 
  then: function (newValue, devName, cellName) {
    
    if  ( newValue )  {
    log("Log1 - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue);
      dev[_rele_WC_Lite]= true; 
      dev["All_Lite_Off/switch"] = true;
      }
   }
});


*/

/////// Выключить весь свет 

defineVirtualDevice("All_Lite_Off", {
  title: "Отключить весь свет",	
  cells: {
    switch: {
          type: "switch",
			value: false
    	},
  }
});


  defineRule({  //     Отключение всего света 
  //whenChanged: [button_Light_Off,"All_Lite_Off/switch"], 
  whenChanged: ["All_Lite_Off/switch"], 
  then: function (newValue, devName, cellName) {

        if  (!newValue )  {
       
          dev[_rele_Entity1]=false;
          dev[_rele_Entity2]=false;
          dev[_rele_Entity3]=false;
          dev[_rele_Entity4]=false;
          dev[_rele_Entity5]=false;
          dev[_rele_Entity6]=false;
          dev[_rele_Entity7]=false;
          dev[_rele_Entity8]=false;
          dev[_rele_Entity9]=false;
          dev[_rele_Entity10]=false;
          dev[_rele_Entity11]=false;
          dev[_rele_Entity12]=false;
          dev[_rele_Entity13]=false;
          dev[_rele_Entity14]=false;
          dev[_rele_Entity15]=false;
          dev[_rele_Entity16]=false;
          dev[_rele_Entity17]=false;
          dev[_rele_Entity18]=false;
          dev[_rele_Entity19]=false;
          dev[_rele_Entity20]=false;
          dev[_rele_Entity21]=false;
          dev[_rele_Entity22]=false;
          dev[_rele_Entity23]=false;
          dev[_rele_Entity24]=false;
          dev[_rele_Entity25]=false;
          dev[_rele_Entity26]=false;
          dev[_rele_Entity27]=false;
          dev[_Dim_Entity1]=false;
          dev[_Dim_Entity2]=false;
          dev[_Dim_Entity3]=false;
        }
   
     }
});


defineVirtualDevice("ALL_OUT",  {
 
  title: "Сценарий всё ушли",
 	cells: {
      switch:  {
        title: "Сценарий всё ушли",
        type : "switch",
          value : true,
        },
       
      } //cells 
});    //      ALL_OUT



defineRule({  //     Включение сценария все ушли .
  //whenChanged: [button_AllOut_holl,"ALL_OUT/switch"], 
  whenChanged: ["ALL_OUT/switch"], 
  then: function (newValue, devName, cellName) {
  log("Log ALL_OUT - devName= {} ,cellName= {} =, Value=  {}  ",devName,cellName,newValue); 

        if  ( newValue )  {
      dev["ALL_OUT/switch"] = true;    // включаем сценарий я ушёл
      dev["All_Lite_Off/switch"] = false;


          dev[_rele_Entity1]=false;
          dev[_rele_Entity2]=false;
          dev[_rele_Entity3]=false;
          dev[_rele_Entity4]=false;
          dev[_rele_Entity5]=false;
          dev[_rele_Entity6]=false;
          dev[_rele_Entity7]=false;
          dev[_rele_Entity8]=false;
          dev[_rele_Entity9]=false;
          dev[_rele_Entity10]=false;
          dev[_rele_Entity11]=false;
          dev[_rele_Entity12]=false;
          dev[_rele_Entity13]=false;
          dev[_rele_Entity14]=false;
          dev[_rele_Entity15]=false;
          dev[_rele_Entity16]=false;
          dev[_rele_Entity17]=false;
          dev[_rele_Entity18]=false;
          dev[_rele_Entity19]=false;
          dev[_rele_Entity20]=false;
          dev[_rele_Entity21]=false;
          dev[_rele_Entity22]=false;
          dev[_rele_Entity23]=false;
          dev[_rele_Entity24]=false;
          dev[_rele_Entity25]=false;
          dev[_rele_Entity26]=false;
          dev[_rele_Entity27]=false;
          dev[_Dim_Entity1]=false;
          dev[_Dim_Entity2]=false;
          dev[_Dim_Entity3]=false;
        } 
     }
});
