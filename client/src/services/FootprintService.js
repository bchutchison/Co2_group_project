const baseURL = 'http://localhost:3000/api/emissions/'
export default {
 getFootprint(){
   return fetch(baseURL).then(res => res.json());
 },
 postFootprint(payload) {
   return fetch(baseURL, {
     method: 'POST',
     body: JSON.stringify(payload),
     headers: { 'Content-Type': 'application/json' }
   })
   .then(res => res.json());
 },
 deleteFootprint(id){
   return fetch(${baseURL}${id}, { method: 'DELETE' })
 }
 }
}
