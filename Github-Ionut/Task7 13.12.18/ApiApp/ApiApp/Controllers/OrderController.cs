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
        [HttpGet]
        [Route("api/Order/")]
        public IHttpActionResult Get()
        {
            var orders = OrderDataStore.Current.Orders;
            return Ok(orders);
        }

        [HttpGet]
        [Route("api/Order/{id}")]
        public IHttpActionResult Get(int id)
        {
            var order = OrderDataStore.Current.Orders;
            Order myOrder = new Order();
            foreach(Order o in order)
            {
                if(o.Id == id)
                {
                    myOrder = o;
                }
            }

            return Ok(myOrder);

        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post([FromBody] Order o)
        {
            
            var order = OrderDataStore.Current.Orders;
            order.Add(o);
      
            if(order.Contains(o))
            {
                Created("api/Order/", o);
                return Ok(order);
            }
            else
            {
                return BadRequest();
            }
            
        }
     

     
    }
}
