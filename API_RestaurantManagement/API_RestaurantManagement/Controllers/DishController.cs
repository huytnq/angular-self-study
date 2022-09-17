using API_RestaurantManagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace API_RestaurantManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DishController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public DishController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = "Select DishID, DishName, Menu, CreatedDate, DishImage from Dish";
            DataTable table = new DataTable();
            String sqlDataSrc = _configuration.GetConnectionString("QLNH");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSrc))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [Route("GetAllDishName")]
        [HttpGet]
        public JsonResult GetAllDishName()
        {
            string query = "Select DishName from Dish";
            DataTable table = new DataTable();
            String sqlDataSrc = _configuration.GetConnectionString("QLNH");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSrc))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Dish dish)
        {
            string query = @"Insert into Dish values
                            (
                            N'" + dish.DishName + "'" + 
                            ", N'" + dish.Menu + "'" +
                            ", '"+ dish.CreatedDate + "'" +
                            ", '" + dish.DishImage + "'" + ")";

            DataTable table = new DataTable();
            String sqlDataSrc = _configuration.GetConnectionString("QLNH");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSrc))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Add sucessfully");
        }

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile(IFormFile file)
        {
            try
            {
                var physicalPath = _env.ContentRootPath + "/Photos/" + file.FileName;

                using(var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }

                return new JsonResult("Add sucessfully");
            }
            catch (Exception ex)
            {
                return new JsonResult(ex.Message);
            }

            
        }

        [HttpPut]
        public JsonResult Put(Dish dish)
        {
            string query = @"Update Dish set 
                DishName = N'" + dish.DishName + "'" + 
                " Menu = '" + dish.Menu + "'" +
                " CreatedDate = '" + dish.CreatedDate + "'" +
                " DishImage = N'" + dish.DishImage + "'" +
                "where DishID = " + dish.DishID;
            DataTable table = new DataTable();
            String sqlDataSrc = _configuration.GetConnectionString("QLNH");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSrc))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Add sucessfully");
        }

        [HttpDelete]
        public JsonResult Delete(int dishID)
        {
            string query = @"Delete From Dish " +
                "where DishID = " + dishID;
            DataTable table = new DataTable();
            String sqlDataSrc = _configuration.GetConnectionString("QLNH");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSrc))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Delete sucessfully");
        }
    }
}
