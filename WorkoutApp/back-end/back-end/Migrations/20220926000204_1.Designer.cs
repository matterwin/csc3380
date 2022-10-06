﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using back_end.Repositories;

#nullable disable

namespace back_end.Migrations
{
    [DbContext(typeof(WorkoutAppContext))]
    [Migration("20220926000204_1")]
    partial class _1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("back_end.Domain.User", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("FirebaseID")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MiddleName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasAlternateKey("FirebaseID");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            ID = 1,
                            FirebaseID = "1",
                            FirstName = "FirstName1",
                            LastName = "LastName1",
                            MiddleName = "MiddleName1"
                        },
                        new
                        {
                            ID = 2,
                            FirebaseID = "2",
                            FirstName = "FirstName2",
                            LastName = "LastName2",
                            MiddleName = "MiddleName2"
                        },
                        new
                        {
                            ID = 3,
                            FirebaseID = "3",
                            FirstName = "FirstName3",
                            LastName = "LastName3",
                            MiddleName = "MiddleName3"
                        },
                        new
                        {
                            ID = 4,
                            FirebaseID = "4",
                            FirstName = "FirstName4",
                            LastName = "LastName4",
                            MiddleName = "MiddleName4"
                        },
                        new
                        {
                            ID = 5,
                            FirebaseID = "5",
                            FirstName = "FirstName4",
                            LastName = "LastName5",
                            MiddleName = "MiddleName5"
                        });
                });

            modelBuilder.Entity("back_end.Domain.Workout", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("FirebaseID")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Workouts");

                    b.HasData(
                        new
                        {
                            ID = 1,
                            FirebaseID = "1",
                            Title = "Workout #1"
                        },
                        new
                        {
                            ID = 2,
                            FirebaseID = "2",
                            Title = "Workout #2"
                        },
                        new
                        {
                            ID = 3,
                            FirebaseID = "3",
                            Title = "Workout #3"
                        },
                        new
                        {
                            ID = 4,
                            FirebaseID = "4",
                            Title = "Workout #4"
                        },
                        new
                        {
                            ID = 5,
                            FirebaseID = "5",
                            Title = "Workout #5"
                        });
                });

            modelBuilder.Entity("back_end.Domain.WorkoutStep", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Instruction")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("WorkoutID")
                        .HasColumnType("int");

                    b.Property<int>("WorkoutTime")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("WorkoutID");

                    b.ToTable("WorkoutSteps");

                    b.HasData(
                        new
                        {
                            ID = 1,
                            Instruction = "Instruction #1",
                            WorkoutID = 1,
                            WorkoutTime = 1
                        },
                        new
                        {
                            ID = 2,
                            Instruction = "Instruction #2",
                            WorkoutID = 1,
                            WorkoutTime = 2
                        },
                        new
                        {
                            ID = 3,
                            Instruction = "Instruction #3",
                            WorkoutID = 1,
                            WorkoutTime = 3
                        },
                        new
                        {
                            ID = 4,
                            Instruction = "Instruction #4",
                            WorkoutID = 1,
                            WorkoutTime = 4
                        },
                        new
                        {
                            ID = 5,
                            Instruction = "Instruction #5",
                            WorkoutID = 1,
                            WorkoutTime = 5
                        },
                        new
                        {
                            ID = 6,
                            Instruction = "Instruction #1",
                            WorkoutID = 2,
                            WorkoutTime = 1
                        },
                        new
                        {
                            ID = 7,
                            Instruction = "Instruction #2",
                            WorkoutID = 2,
                            WorkoutTime = 2
                        },
                        new
                        {
                            ID = 8,
                            Instruction = "Instruction #3",
                            WorkoutID = 2,
                            WorkoutTime = 3
                        },
                        new
                        {
                            ID = 9,
                            Instruction = "Instruction #4",
                            WorkoutID = 2,
                            WorkoutTime = 4
                        },
                        new
                        {
                            ID = 10,
                            Instruction = "Instruction #5",
                            WorkoutID = 2,
                            WorkoutTime = 5
                        },
                        new
                        {
                            ID = 11,
                            Instruction = "Instruction #1",
                            WorkoutID = 3,
                            WorkoutTime = 1
                        },
                        new
                        {
                            ID = 12,
                            Instruction = "Instruction #2",
                            WorkoutID = 3,
                            WorkoutTime = 2
                        },
                        new
                        {
                            ID = 13,
                            Instruction = "Instruction #3",
                            WorkoutID = 3,
                            WorkoutTime = 3
                        },
                        new
                        {
                            ID = 14,
                            Instruction = "Instruction #4",
                            WorkoutID = 3,
                            WorkoutTime = 4
                        },
                        new
                        {
                            ID = 15,
                            Instruction = "Instruction #5",
                            WorkoutID = 3,
                            WorkoutTime = 5
                        },
                        new
                        {
                            ID = 16,
                            Instruction = "Instruction #1",
                            WorkoutID = 4,
                            WorkoutTime = 1
                        },
                        new
                        {
                            ID = 17,
                            Instruction = "Instruction #2",
                            WorkoutID = 4,
                            WorkoutTime = 2
                        },
                        new
                        {
                            ID = 18,
                            Instruction = "Instruction #3",
                            WorkoutID = 4,
                            WorkoutTime = 3
                        },
                        new
                        {
                            ID = 19,
                            Instruction = "Instruction #4",
                            WorkoutID = 4,
                            WorkoutTime = 4
                        },
                        new
                        {
                            ID = 20,
                            Instruction = "Instruction #5",
                            WorkoutID = 4,
                            WorkoutTime = 5
                        },
                        new
                        {
                            ID = 21,
                            Instruction = "Instruction #1",
                            WorkoutID = 5,
                            WorkoutTime = 1
                        },
                        new
                        {
                            ID = 22,
                            Instruction = "Instruction #2",
                            WorkoutID = 5,
                            WorkoutTime = 2
                        },
                        new
                        {
                            ID = 23,
                            Instruction = "Instruction #3",
                            WorkoutID = 5,
                            WorkoutTime = 3
                        },
                        new
                        {
                            ID = 24,
                            Instruction = "Instruction #4",
                            WorkoutID = 5,
                            WorkoutTime = 4
                        },
                        new
                        {
                            ID = 25,
                            Instruction = "Instruction #5",
                            WorkoutID = 5,
                            WorkoutTime = 5
                        });
                });

            modelBuilder.Entity("back_end.Domain.WorkoutStep", b =>
                {
                    b.HasOne("back_end.Domain.Workout", "Workout")
                        .WithMany("Steps")
                        .HasForeignKey("WorkoutID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Workout");
                });

            modelBuilder.Entity("back_end.Domain.Workout", b =>
                {
                    b.Navigation("Steps");
                });
#pragma warning restore 612, 618
        }
    }
}
