using Microsoft.EntityFrameworkCore;
using StartUpApp.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StartUpApp.DataAccess.Maps;

namespace StartUpApp.DataAccess
{
    public class StartUpAppDbContext : DbContext
    {
        public StartUpAppDbContext(DbContextOptions<StartUpAppDbContext> options) : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categpries { get; set; }


        /// <summary>
        /// Custom mappings
        /// </summary>
        /// <param name="modelBuilder"></param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Adding Fluent Mapping
            new ProductMapping(modelBuilder.Entity<Product>());
            new CategoryMapping(modelBuilder.Entity<Category>());
        }
    }
}
