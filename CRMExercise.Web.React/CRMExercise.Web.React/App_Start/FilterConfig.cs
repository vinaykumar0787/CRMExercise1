using System.Web;
using System.Web.Mvc;

namespace CRMExercise.Web.React
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
