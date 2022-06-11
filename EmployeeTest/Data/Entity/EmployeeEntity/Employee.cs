using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeTest.Data.Entity.EmployeeEntity
{
    [Table("Employee")]
    public class Employee:Base
    {
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [Required]
        [StringLength(120)]
        public string Email { get; set; }
        [Required]
        [StringLength(150)]
        public string Address { get; set; }
        [Required]
        [StringLength(30)]
        public string Phone { get; set; }

    }
}
