// <auto-generated />
using Homecalc.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Homecalc.Migrations
{
    [DbContext(typeof(DbContexts))]
    partial class DbContextsModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Homecalc.Models.Record", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ElectricityCount")
                        .HasColumnType("int");

                    b.Property<double>("ElectricityPrice")
                        .HasColumnType("float");

                    b.Property<double>("HeatingPrice")
                        .HasColumnType("float");

                    b.Property<double>("IntercomSysPrice")
                        .HasColumnType("float");

                    b.Property<int>("Month")
                        .HasColumnType("int");

                    b.Property<double>("OSBB")
                        .HasColumnType("float");

                    b.Property<double>("TrashDeliver")
                        .HasColumnType("float");

                    b.Property<double>("Triolan")
                        .HasColumnType("float");

                    b.Property<int>("WaterColdCount")
                        .HasColumnType("int");

                    b.Property<double>("WaterColdPrice")
                        .HasColumnType("float");

                    b.Property<int>("WaterHotCount")
                        .HasColumnType("int");

                    b.Property<int>("WaterHotDrainageCount")
                        .HasColumnType("int");

                    b.Property<double>("WaterHotDrinagePrice")
                        .HasColumnType("float");

                    b.Property<double>("WaterHotPrice")
                        .HasColumnType("float");

                    b.Property<int>("Year")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Records");
                });
#pragma warning restore 612, 618
        }
    }
}
