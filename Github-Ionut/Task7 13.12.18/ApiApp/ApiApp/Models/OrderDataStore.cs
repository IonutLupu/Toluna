using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiApp.Models
{
    public class OrderDataStore
    {
        public static OrderDataStore Current { get; } = new OrderDataStore();

        public List<Order> Orders { get; set; }

        public OrderDataStore()
        {
            Orders = new List<Order>
            {
                new Order()
                {
                    Id=1,
                    Name="Order 1",
                    Description="Order 1 Description",

                    Products = new List<Product>()
                    {
                        new Product()
                        {
                            Id=1,
                            Name="Apple MacBook Air 13",
                            Description = "Laptop Apple MacBook Air 13 cu procesor Intel® Dual Core™ i5 1.80GHz, 13.3, 8GB, 128GB SSD, Intel® HD Graphics 6000, ROM KB, Silver"
                        },
                        new Product()
                        {
                            Id=2,
                            Name="Apple Magic 2",
                            Description = "Mouse Apple Magic 2 (2015), Culoare: alba"
                        }
                    }
                },
                new Order()
                {
                    Id=2,
                    Name="Order 2",
                    Description="Order 2 Description",

                    Products = new List<Product>()
                    {
                        new Product()
                        {
                            Id=3,
                            Name="Lenovo ThinkPad X1 Carbon",
                            Description = "Laptop ultraportabil Lenovo ThinkPad X1 Carbon 6th cu procesor Intel® Core™ i7-8550U pana la 4.00 GHz, Kaby Lake R, 14, Full HD, IPS, 16GB, 512GB SSD, Intel® UHD Graphics 620"
                        },
                        new Product()
                        {
                            Id=4,
                            Name="Lenovo Ultra slim sleeve",
                            Description = "Husa laptop Lenovo Ultra slim sleeve, 13, Gri"
                        }
                    }
                },
                new Order()
                {
                    Id=3,
                    Name="Order 3",
                    Description="Order 3 Description",

                    Products = new List<Product>()
                    {
                        new Product()
                        {
                            Id=5,
                            Name="Makita DF457DWE",
                            Description = "Masina de gaurit si insurubat cu acumulator Makita DF457DWE, 18V, 1,3Ah"
                        },
                        new Product()
                        {
                            Id=6,
                            Name="Set Makita",
                            Description = "Set combinat 99 burghie si capete de surubelnita Makita"
                        }
                    }
                }

            };
        }
    }
}