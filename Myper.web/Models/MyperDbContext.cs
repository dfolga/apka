using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Myper.Web.Models
{
    public class MyperDbContext : DbContext
    {
        public MyperDbContext(DbContextOptions<MyperDbContext> options):base(options)
        {

        }
        public DbSet<User> User { get; set; }
    }
}
