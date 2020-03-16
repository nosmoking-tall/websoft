using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using webapp.Models;
using webapp.Services;
using Newtonsoft.Json;


namespace webapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        public AccountController(JsonFileAccountService accountService)
        {
            AccountService = accountService;
        }

        public JsonFileAccountService AccountService { get; }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            Account account = AccountService.GetAccount(id);
            string error = "{\"error\":\"no such account!\"}";
            if(account != null)
            {
                return account.ToString();
            }
            else
            {
                return error;
            }
        }
    }
}
