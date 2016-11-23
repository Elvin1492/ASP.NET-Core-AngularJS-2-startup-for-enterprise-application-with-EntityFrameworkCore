using Microsoft.AspNetCore.Mvc;
using StartUpApp.Core;
using StartUpApp.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StartUpApp.Web.UI.Controllers
{
    [Route("api/[controller]/[action]")]
    public class BaseApiController<TEntity, TService> : Controller where TEntity : EntityBase where TService : IServiceBase<TEntity>
    {
        protected TService Service;

        public JsonResult Get(int id)
        {
            var result = Service.GetSingle(id);
            return Json(result);
        }

        [HttpGet("{pageSize}/{pageNumber}")]
        public JsonResult GetAll()
        {
            var data = Service.GetAll();

            return Json(data);
        }

        [HttpPost]
        public JsonResult Add([FromBody]TEntity entity)
        {
            var result = Service.Add(entity);
            return Json(result);
        }

        [HttpPut]
        public JsonResult Update(TEntity entity)
        {
            var result = Service.Update(entity);
            return Json(result);
        }

        [HttpPost]
        public JsonResult SaveOrUpdate([FromBody]TEntity entity)
        {
            var result = Service.SaveOrUpdate(entity);
            return Json(result);
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            var result = Service.DeleteWhere(entity => entity.Id == id);
            return Json(result);
        }
    }
}
