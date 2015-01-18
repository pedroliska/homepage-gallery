using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Default : System.Web.UI.Page
{
    protected string[] fileNames;
    protected void Page_Load(object sender, EventArgs e)
    {
        string imagesFolder = "images";
        this.fileNames = System.IO.Directory.GetFiles(Server.MapPath(imagesFolder), "*.jpg")
            .Select(f => imagesFolder + "/" + System.IO.Path.GetFileName(f))
            .OrderBy(f => Guid.NewGuid())
            .ToArray();
    }
}