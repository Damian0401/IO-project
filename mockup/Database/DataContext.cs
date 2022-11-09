using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Database.Models;
using Microsoft.EntityFrameworkCore;

namespace Database;

public class DataContext : DbContext
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            .HasOne(x => x.Department)
            .WithMany(x => x.Employees)
            .HasForeignKey(x => x.DepartmentId);

        modelBuilder.Entity<User>()
            .HasMany(x => x.OwnedDepartments)
            .WithOne(x => x.Manager)
            .HasForeignKey(x => x.ManagerId)
            .OnDelete(DeleteBehavior.ClientSetNull);

        modelBuilder.Entity<Department>()
            .Property(x => x.ManagerId)
            .IsRequired(false);
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=LAPTOP-51S57U32\\DAMIANSQL;Database=CarRentalDB;Trusted_Connection=True");
    }

    public DbSet<User> Users { get; set; } = default!;
    public DbSet<Vehicle> Vehicles { get; set; } = default!;
    public DbSet<Brand> Brands { get; set; } = default!;
    public DbSet<Department> Departments { get; set; } = default!;
    public DbSet<Rent> Rents { get; set; } = default!;
    public DbSet<RentStatus> RentStatuses { get; set; } = default!;
    public DbSet<Role> Roles { get; set; } = default!;
    public DbSet<VehicleStatus> VehicleStatuses { get; set; } = default!;
}