using Homecalc.Models;
using Microsoft.EntityFrameworkCore;

namespace Homecalc.Contexts
{
    public class DbContexts: DbContext
    {
        public DbContexts(DbContextOptions<DbContexts> options) : base(options)
        {

        }
        public DbSet<Record> Records { get; set; }
    }
}
