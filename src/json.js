/*
messages logic : 
const filter1=get messages where ("message_to_userId" === 1)
if (filter1!==null) {
   return filter1;
} else {
   const filter2=get messages where ("message_from_userId" === 1)
   return filter2;
}
Data : 
{
   "Message":{
      "id":1,
      "message_to_userId":1,
      "message_from_userId":2,
      "messages":[
         {
            "id":1,
            "to_user_id":1,
            "from_user_id":2,
            "content":"Hello"
            "date_send":"11/09/2022"
         },
         {
            "id":2,
            "to_user_id":2,
            "from_user_id":1,
            "content":"Hello"
            "date_send":"11/09/2022"
         }
      ]
   }
}
*/
