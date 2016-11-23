using StartUpApp.Core.Domain;
using StartUpApp.Service.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StartUpApp.Web.UI.Controllers.API
{
    public class CategoryController : BaseApiController<Category, ICategoryService>
    {
        public CategoryController(ICategoryService service)
        {
            Service = service;
        }
    }
}
