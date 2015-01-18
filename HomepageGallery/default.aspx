<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
  <title>Pedro Liska</title>
  <link type="text/css" rel="Stylesheet" href="resources2/home.css" />
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
  <script type="text/javascript">
    var images = ['<%=String.Join("','", this.fileNames) %>'];
    var imageIndex = <%= new Random().Next(this.fileNames.Length) %>;
  </script>
  <script src="resources2/home.js" type="text/javascript"></script>
</head>
<body>
  <div id="canvas">
    <div class="left">
    </div>
    <div class="right">
    </div>
    <div class="top">
    </div>
    <div class="bottom">
    </div>
    <img alt="Click for another image" id="image" src="" style="display: none;" />
    <div id="menu" class="rounded">
      <ul>
        <li><a href="http://pedroliska.com/resume">Resume</a></li>
        <li><a href="http://pedroliska.com/resizer">Resizer</a></li>
        <li><a href="http://pedroliska.com/blog">Blog</a></li>
      </ul>
    </div>
    <img id="next" src="resources2/next.png" />
    <div id="site" class="rounded">
      PedroLiska.com
    </div>
  </div>
</body>
</html>
