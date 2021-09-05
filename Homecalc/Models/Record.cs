using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Homecalc.Models
{
    public class Record
    {
        public int Id { get; set; }
        public int Year { get; set; }
        public int Month { get; set; }
        public int ElectricityCount { get; set; }
        public double ElectricityPrice { get; set; }
        public int WaterHotCount { get; set; }
        public double WaterHotPrice { get; set; }
        public int WaterHotDrainageCount { get; set; }
        public double WaterHotDrinagePrice { get; set; }
        public int WaterColdCount { get; set; }
        public double WaterColdPrice { get; set; }
        public double HeatingPrice { get; set; }
        public double IntercomSysPrice { get; set; }
        public double OSBB { get; set; }
        public double TrashDeliver { get; set; }
        public double Triolan { get; set; }
        public string Address { get; set; }


        /// <summary>
        /// Constructor of Home Payment record
        /// </summary>
        /// <param name="year">Number: 2021</param>
        /// <param name="month">Number: 3 (March)</param>
        /// <param name="electricityCount">Meter readings</param>
        /// <param name="electricityPrice">Uah per cube</param>
        /// <param name="waterHotCount">Meter readings</param>
        /// <param name="waterHotPrice">Uah per cube</param>
        /// <param name="waterHotDrainageCount">Meter readings</param>
        /// <param name="waterHotDrinagePrice">Uah per cube</param>
        /// <param name="waterColdCount">Meter readings</param>
        /// <param name="waterColdPrice">Uah per cube</param>
        /// <param name="heatingPrice">Total for month</param>
        /// <param name="intercomSysPrice">Total for month (домофон)</param>
        /// <param name="oSBB">Total for month</param>
        /// <param name="trashDeliver">Total for month</param>
        /// <param name="triolan">Total for month</param>
        /// <param name="address">Address for apartmrnts</param>

        public Record(int year, int month, int electricityCount, double electricityPrice, int waterHotCount, 
            double waterHotPrice, int waterHotDrainageCount, double waterHotDrinagePrice, int waterColdCount, 
            double waterColdPrice, double heatingPrice, double intercomSysPrice, double oSBB, double trashDeliver, 
            double triolan, string address)
        {
            Year = year;
            Month = month;
            ElectricityCount = electricityCount;
            ElectricityPrice = electricityPrice;
            WaterHotCount = waterHotCount;
            WaterHotPrice = waterHotPrice;
            WaterHotDrainageCount = waterHotDrainageCount;
            WaterHotDrinagePrice = waterHotDrinagePrice;
            WaterColdCount = waterColdCount;
            WaterColdPrice = waterColdPrice;
            HeatingPrice = heatingPrice;
            IntercomSysPrice = intercomSysPrice;
            OSBB = oSBB;
            TrashDeliver = trashDeliver;
            Triolan = triolan;
            Address = address;
        }

        public override string ToString()
        {
            return $"{this.Month + 1} {this.Year}\n{this.ElectricityCount} {this.ElectricityPrice}\n---\n{this.Address}";
        }
    }
}
