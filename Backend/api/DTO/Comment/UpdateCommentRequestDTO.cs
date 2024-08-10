using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTO.Comment
{
    public class UpdateCommentRequestDTO
    {
        [Required]
        [MinLength(5, ErrorMessage = "Title must have at least 5 characters.")]
        [MaxLength(280, ErrorMessage = "Title can't be over 280 characters.")]
        public string Title { get; set; } = string.Empty;
        [Required]
        [MinLength(20, ErrorMessage = "Content must have at least 20 characters.")]
        [MaxLength(1000, ErrorMessage = "Content part can't be over 1000 characters.")]
        public string Content { get; set; } = string.Empty;
    }
}