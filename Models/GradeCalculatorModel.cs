using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FirstApp.Models
{
    public class GradeCalculatorModel
    {
        [Range(0,100)]
        public double assignments { get; set; }

        [Range(0, 100)]
        public double project { get; set; }

        [Range(0, 100)]
        public double quizzes { get; set; }

        [Range(0, 100)]
        public double exams { get; set; }

        [Range(0, 100)]
        public double intex { get; set; }

    }
}
