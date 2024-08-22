using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTO.Comment;
using api.Extensions;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace api.Controllers
{
    [Route("api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IStockRepository _stockRepository;
        private readonly UserManager<AppUser> _userManager;
        private readonly IFMPService _fmpService;
        public CommentController(ICommentRepository commentRepository, IStockRepository stockRepository, UserManager<AppUser> userManager, IFMPService fmpService)
        {
            _commentRepository = commentRepository;
            _stockRepository = stockRepository;
            _userManager = userManager;
            _fmpService = fmpService;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll([FromQuery] CommentQueryObject queryObject)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var comments = await _commentRepository.GetAllAsync(queryObject);
            var commentDTO = comments.Select(s => s.ToCommentDTO());
            return Ok(commentDTO);
        }
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var comment = await _commentRepository.GetByIdAsync(id);
            if (comment == null)
            {
                return NotFound();
            }
            return Ok(comment.ToCommentDTO());
        }

        [HttpPost]
        [Route("{symbol:alpha}")]
        public async Task<IActionResult> Create([FromRoute] string symbol, CreateCommentDTO commentDTO)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var stock = await _stockRepository.GetBySymbolAsync(symbol);
            if(stock==null)
            {
                stock = await _fmpService.FindBySymbolAsync(symbol);
                if(stock == null)
                {
                    return BadRequest("This stock doesn't exist.");
                }
                else{
                    await _stockRepository.CreateAsync(stock);
                }
            }
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);
            var commentModel = commentDTO.ToCommentFromCreate(stock.Id);
            commentModel.AppUserId = appUser.Id;
            await _commentRepository.CreateAsync(commentModel);
            return CreatedAtAction(nameof(GetById), new { id = commentModel.Id }, commentModel.ToCommentDTO());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var commentModel = await _commentRepository.DeleteAsync(id);
            if (commentModel == null)
            {
                return NotFound("Comment doesn't exist.");
            }
            return Ok(commentModel);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateCommentRequestDTO updateDTO)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var comment = await _commentRepository.UpdateAsync(id, updateDTO.ToCommentFromUpdate());
            if (comment == null)
            {
                NotFound("Comment not found.");
            }
            return Ok(comment.ToCommentDTO());
        }
    }
}