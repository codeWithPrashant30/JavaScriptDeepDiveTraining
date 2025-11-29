export const Welcome = ({greetings, myYTchannelName, arr})=>{

   //component

   function DisplayNum(){
      return arr.map((num)=>{
               return <span> {num}  </span>
      })
   }
 
   return <div style={{"border": "1px solid red", margin:"10px"}}>
            <h2>
               {greetings}
         </h2>
         <h3>
               {myYTchannelName}
         </h3>
         <div>
               <DisplayNum/>
         </div>     
   </div>

}