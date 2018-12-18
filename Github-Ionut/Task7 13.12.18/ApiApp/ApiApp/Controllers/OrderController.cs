using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ApiApp.Models;

namespace ApiApp.Controllers
{
    
    public class OrderController : ApiController
    {

        List<Order> orders = OrderDataStore.Current.Orders;

        [HttpGet]
        [Route("api/Order/")]
        public IHttpActionResult Get()
        {
            return Ok(orders);
        }

        [HttpGet]
        [Route("api/Order/{id}")]
        public IHttpActionResult Get(int id)
        {
            
            Order myOrder = new Order();
            foreach(Order o in orders)
            {
                if(o.Id == id)
                {
                    myOrder = o;
                }
            }

            return Ok(myOrder);

        }

        [HttpPost]
        [Route("api/Order/")]
        public IHttpActionResult Post([FromBody] Order o)
        {
                       
            orders.Add(o);
      
            if(orders.Contains(o))
            {

                return Created("api/Order/", o);
            }
            else
            {
                return BadRequest();
            }
            
        }


     

        [HttpDelete]
        [Route("api/Order/{id}")]
        public IHttpActionResult Delete(int id)
        {
 
            bool isEmpty = !orders.Any();
           
            Order myOrder = new Order();
            foreach (Order o in orders)
            {
               if (o.Id == id)
               {
                  myOrder = o;
               }
            }

            if (orders.Remove(myOrder))
            {
                return Ok(orders);
            }
            else if (isEmpty)
            {
                return ResponseMessage(new HttpResponseMessage(HttpStatusCode.NoContent));
            }
            else
            {
                return NotFound();
            }
          
         
        }

       

       
    }
}
