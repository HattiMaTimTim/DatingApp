using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOs
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(128,MinimumLength=8, ErrorMessage = "Must be between 8 and 128 chars")]
        public string Password { get; set; }
    }
}