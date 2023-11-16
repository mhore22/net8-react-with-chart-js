using Microsoft.AspNetCore.Mvc;
using net8_react_with_chart_js.Server.Model;
using System;
using System.Linq;

namespace net8_react_with_chart_js.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChartDataController : ControllerBase
    {
        private static readonly string[] Months = new[]
        {
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        };

        private readonly ILogger<ChartDataController> _logger;

        public ChartDataController(ILogger<ChartDataController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetYearlySales")]
        public IEnumerable<YearlySalesModel> Get()
        {
            return Enumerable.Range(0, 5).Select(year => new YearlySalesModel
            {
                Year = 20211 + year,
                MonthlySales = Enumerable.Range(0, 12).Select(month => new MonthlySalesModel
                {
                    Month = Months[month],
                    Sales = Random.Shared.Next(1000, 100000000)
                }).ToList()
            })
            .ToArray();
        }
    }
}
