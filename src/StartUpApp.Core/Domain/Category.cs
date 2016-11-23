using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StartUpApp.Core.Domain
{
    public class Category : EntityBase
    {
        public string Name { get; set; }

        /// <summary>
        /// Relational fileds
        /// </summary>
        public IQueryable<Product> Products { get; set; }
    }
}
