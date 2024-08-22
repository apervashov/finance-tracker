using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTO.Stock;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Newtonsoft.Json;

namespace api.Service
{
    public class FMPService : IFMPService
    {
        private HttpClient _httpClient;
        private IConfiguration _config;
        public FMPService(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _config = config;
        }
        public async Task<Stock> FindBySymbolAsync(string symbol)
{
    try
    {
        var result = await _httpClient.GetAsync($"https://financialmodelingprep.com/api/v3/profile/{symbol}?apikey={_config["FMPKey"]}");
        if (result.IsSuccessStatusCode)
        {
            var content = await result.Content.ReadAsStringAsync();
            var tasks = JsonConvert.DeserializeObject<FMPStock[]>(content);
            var stock = tasks.FirstOrDefault(); // Используем FirstOrDefault для безопасного доступа к первому элементу
            if (stock != null)
            {
                return stock.ToStockFromFMP();
            }
        }
    }
    catch (Exception e)
    {
        Console.WriteLine(e);
        // Логируем ошибку и продолжаем выполнение
    }
    return null; // Возвращаем null, если что-то пошло не так или данные не найдены
}

}
}
