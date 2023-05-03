using System.Web.Mvc;

namespace Menu.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}

	}
}