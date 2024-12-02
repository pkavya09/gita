import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
    import { getDatabase,ref,get} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
    const firebaseConfig = {
      apiKey: "AIzaSyB2rqIPzwKpi_F9wZblykXyArZaDz_mk6s",
      authDomain: "gita-269f8.firebaseapp.com",
      databaseURL: "https://gita-269f8-default-rtdb.firebaseio.com",
      projectId: "gita-269f8",
      storageBucket: "gita-269f8.firebasestorage.app",
      messagingSenderId: "506820047158",
      appId: "1:506820047158:web:7927eae4abbe51a606c397",
      measurementId: "G-47D5M4PPP3"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getDatabase(app);

// HTML elements
const slokaTitle=document.getElementById("sloka-title")
const slokaContainer = document.getElementById("sloka-text");
const nextBtn = document.getElementById("next-btn");
const engBtn=document.getElementById("eng-btn");
const telBtn=document.getElementById("tel-btn");
const hinBtn=document.getElementById("hin-btn");
const tamilBtn=document.getElementById("tamil-btn")
const meanBtn=document.getElementById("meaning-btn");
// Variables
let currentSloka = 1; // Starting from the first sloka
const maxSloka = 11; // Total number of slokas
let Engnum=1;let Telnum=1;let Hinnum=1;let Tamnum=1;let meanNum=1;
let slokaNum=281;
let isClicked=false;
const maxSlokaNum=290;

nextBtn.addEventListener("click",()=>{
   const transRef=ref(database,`/${currentSloka}/sloka`);
   get(transRef).then((snapshot)=>{
      if(snapshot.exists){
         isClicked=true;
         slokaContainer.innerHTML=snapshot.val();
          slokaDisplay();
      }
      else{
         console.log("data not found!")
      }
   })
 })
engBtn.addEventListener("click",()=>{
  if(isClicked && currentSloka-1==Engnum){
   const transRef=ref(database,`/${Engnum}/translations/english`);
   get(transRef).then((snapshot)=>{
      if(snapshot.exists){
       slokaContainer.innerHTML=snapshot.val();
       Engnum++;  
      }
      else{
         console.log("data not found!")
      }})

  }
})

telBtn.addEventListener("click",()=>{
   if(isClicked && currentSloka-1==Telnum){
      const transRef=ref(database,`/${Telnum}/translations/telugu`);
      get(transRef).then((snapshot)=>{
         if(snapshot.exists){
            slokaContainer.innerHTML=snapshot.val();    
            Telnum++;
         }
         else{
            console.log("data not found!")
         }
        
      })
   }
 
})
hinBtn.addEventListener("click",()=>{
   if(isClicked && currentSloka-1==Hinnum){
   const transRef=ref(database,`/${Hinnum}/translations/hindi`);
   get(transRef).then((snapshot)=>{
      if(snapshot.exists){
         slokaContainer.innerHTML=snapshot.val();  
         Hinnum++;
      }
      else{
         console.log("data not found!")
      }
      
   })
}
})
tamilBtn.addEventListener("click",()=>{
   if(isClicked && currentSloka-1==Tamnum){
   const transRef=ref(database,`/${Tamnum}/translations/tamil`);
   get(transRef).then((snapshot)=>{
      if(snapshot.exists){
        slokaContainer.innerHTML=snapshot.val();  
        Tamnum++;
      }
      else{
         console.log("data not found!")
      }
 
   })
}
})
meanBtn.addEventListener("click",()=>{
   if(isClicked && currentSloka-1==meanNum){
   const transRef=ref(database,`/${meanNum}/meaning`);
   get(transRef).then((snapshot)=>{
      if(snapshot.exists){
        slokaContainer.innerHTML=snapshot.val();  
        meanNum++;
      }
      else{
         console.log("data not found!")
      }
 
   })
}
})
function slokaDisplay(){
   if(currentSloka===maxSloka){
      slokaContainer.innerHTML="Click next to continue again form 281"
      slokaTitle.innerText=""
      currentSloka=1;
      slokaNum=281;
   }
   else{
      slokaTitle.innerText=slokaNum;
      currentSloka++;
      slokaNum++;
   }
}