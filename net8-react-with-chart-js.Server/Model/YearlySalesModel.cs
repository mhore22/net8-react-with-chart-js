namespace net8_react_with_chart_js.Server.Model
{
    public class YearlySalesModel
    {
        public YearlySalesModel(){
            this.MonthlySales = new List<MonthlySalesModel>();
        }

        public int Year { get; set; }

        public List<MonthlySalesModel> MonthlySales { get; set; } 
    }

    public class MonthlySalesModel
    {
        public string Month { get; set; }     
        public double Sales { get; set; }
    }
}
