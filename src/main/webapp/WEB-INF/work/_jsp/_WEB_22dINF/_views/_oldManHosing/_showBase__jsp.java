/*
 * JSP generated by Resin-4.0.36 (built Fri, 26 Apr 2013 03:31:59 PDT)
 */

package _jsp._WEB_22dINF._views._oldManHosing;
import javax.servlet.*;
import javax.servlet.jsp.*;
import javax.servlet.http.*;

public class _showBase__jsp extends com.caucho.jsp.JavaPage
{
  private static final java.util.HashMap<String,java.lang.reflect.Method> _jsp_functionMap = new java.util.HashMap<String,java.lang.reflect.Method>();
  private boolean _caucho_isDead;
  private boolean _caucho_isNotModified;
  private com.caucho.jsp.PageManager _jsp_pageManager;
  
  public void
  _jspService(javax.servlet.http.HttpServletRequest request,
              javax.servlet.http.HttpServletResponse response)
    throws java.io.IOException, javax.servlet.ServletException
  {
    com.caucho.server.webapp.WebApp _jsp_application = _caucho_getApplication();
    com.caucho.jsp.PageContextImpl pageContext = _jsp_pageManager.allocatePageContext(this, _jsp_application, request, response, null, null, 8192, true, false);

    TagState _jsp_state = null;

    try {
      _jspService(request, response, pageContext, _jsp_application, _jsp_state);
    } catch (java.lang.Throwable _jsp_e) {
      pageContext.handlePageException(_jsp_e);
    } finally {
      _jsp_pageManager.freePageContext(pageContext);
    }
  }
  
  private void
  _jspService(javax.servlet.http.HttpServletRequest request,
              javax.servlet.http.HttpServletResponse response,
              com.caucho.jsp.PageContextImpl pageContext,
              javax.servlet.ServletContext application,
              TagState _jsp_state)
    throws Throwable
  {
    javax.servlet.jsp.JspWriter out = pageContext.getOut();
    final javax.el.ELContext _jsp_env = pageContext.getELContext();
    javax.servlet.ServletConfig config = getServletConfig();
    javax.servlet.Servlet page = this;
    javax.servlet.jsp.tagext.JspTag _jsp_parent_tag = null;
    com.caucho.jsp.PageContextImpl _jsp_parentContext = pageContext;
    response.setContentType("text/html;charset=UTF-8");

    out.write(_jsp_string0, 0, _jsp_string0.length);
  }

  private com.caucho.make.DependencyContainer _caucho_depends
    = new com.caucho.make.DependencyContainer();

  public java.util.ArrayList<com.caucho.vfs.Dependency> _caucho_getDependList()
  {
    return _caucho_depends.getDependencies();
  }

  public void _caucho_addDepend(com.caucho.vfs.PersistentDependency depend)
  {
    super._caucho_addDepend(depend);
    _caucho_depends.add(depend);
  }

  protected void _caucho_setNeverModified(boolean isNotModified)
  {
    _caucho_isNotModified = true;
  }

  public boolean _caucho_isModified()
  {
    if (_caucho_isDead)
      return true;

    if (_caucho_isNotModified)
      return false;

    if (com.caucho.server.util.CauchoSystem.getVersionId() != -1842010395327194821L)
      return true;

    return _caucho_depends.isModified();
  }

  public long _caucho_lastModified()
  {
    return 0;
  }

  public void destroy()
  {
      _caucho_isDead = true;
      super.destroy();
    TagState tagState;
  }

  public void init(com.caucho.vfs.Path appDir)
    throws javax.servlet.ServletException
  {
    com.caucho.vfs.Path resinHome = com.caucho.server.util.CauchoSystem.getResinHome();
    com.caucho.vfs.MergePath mergePath = new com.caucho.vfs.MergePath();
    mergePath.addMergePath(appDir);
    mergePath.addMergePath(resinHome);
    com.caucho.loader.DynamicClassLoader loader;
    loader = (com.caucho.loader.DynamicClassLoader) getClass().getClassLoader();
    String resourcePath = loader.getResourcePathSpecificFirst();
    mergePath.addClassPath(resourcePath);
    com.caucho.vfs.Depend depend;
    depend = new com.caucho.vfs.Depend(appDir.lookup("WEB-INF/views/oldManHosing/showBase.jsp"), 5264596053874054897L, false);
    _caucho_depends.add(depend);
  }

  final static class TagState {

    void release()
    {
    }
  }

  public java.util.HashMap<String,java.lang.reflect.Method> _caucho_getFunctionMap()
  {
    return _jsp_functionMap;
  }

  public void caucho_init(ServletConfig config)
  {
    try {
      com.caucho.server.webapp.WebApp webApp
        = (com.caucho.server.webapp.WebApp) config.getServletContext();
      init(config);
      if (com.caucho.jsp.JspManager.getCheckInterval() >= 0)
        _caucho_depends.setCheckInterval(com.caucho.jsp.JspManager.getCheckInterval());
      _jsp_pageManager = webApp.getJspApplicationContext().getPageManager();
      com.caucho.jsp.TaglibManager manager = webApp.getJspApplicationContext().getTaglibManager();
      com.caucho.jsp.PageContextImpl pageContext = new com.caucho.jsp.InitPageContextImpl(webApp, this);
    } catch (Exception e) {
      throw com.caucho.config.ConfigException.create(e);
    }
  }

  private final static char []_jsp_string0;
  static {
    _jsp_string0 = "\r\n\r\n<html>\r\n<head>\r\n    <title>\u8001\u4eba\u57fa\u672c\u4fe1\u606f</title>\r\n</head>\r\n<body>\r\n<div class=\"popover-content\" style=\"width: 1000px;\">\r\n    <table style=\"\">\r\n        <tbody>\r\n        <tr>\r\n            <td></td>\r\n            <td></td>\r\n            <td>&nbsp;</td>\r\n            <td>&nbsp;</td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td></td>\r\n            <td rowspan=\"8\" style=\"text-align: center;vertical-align: middle;\">\r\n                <input type=\"hidden\" id=\"imageName\" value=\"\">\r\n                <img id=\"img_3\" src=\"/ems/img/a1.jpg\" style=\"height: 135px;width: 110px;\">\r\n                \r\n                \r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td align=\"right\" style=\"width:70px;\">\u8001\u4eba\u7f16\u53f7\uff1a</td>\r\n            <td style=\"width: 150px\">\r\n                <span id=\"oldManNum\"></span>\r\n            </td>\r\n            <td align=\"right\" style=\"width:70px;\">\u8001\u4eba\u59d3\u540d\uff1a</td>\r\n            <td style=\"width: 145px\">\r\n                <span id=\"oldMan_Name\"></span>\r\n            </td>\r\n            <td align=\"right\" style=\"width:70px;\">\u8001\u4eba\u6027\u522b\uff1a</td>\r\n            <td>\r\n                <span id=\"oldManIDnSex\"></span>\r\n            </td>\r\n            <td align=\"right\" style=\"width:80px;\">&nbsp;\u8001\u4eba\u72b6\u6001\uff1a</td>\r\n            <td>\r\n                <span id=\"oldManStatusID\" style=\"width: 90px;height: 23px\"></span>\r\n            </td>\r\n\r\n        </tr>\r\n\r\n        <tr>\r\n            <td align=\"right\">\u8001\u4eba\u804c\u4e1a\uff1a</td>\r\n            <td>\r\n                <span id=\"occupation\"></span>\r\n            </td>\r\n            <td align=\"right\">\u51fa\u751f\u65e5\u671f\uff1a</td>\r\n            <td>\r\n                <span id=\"oldManBirth\"></span>\r\n            </td>\r\n            <td align=\"right\">\u653f\u6cbb\u9762\u8c8c\uff1a</td>\r\n            <td>\r\n                <span id=\"oldManPoliticsID\"></span>\r\n            </td>\r\n            <td align=\"right\">\u8001\u4eba\u6c11\u65cf\uff1a</td>\r\n            <td>\r\n                <span id=\"oldManNationID\"></span>\r\n            </td>\r\n\r\n        </tr>\r\n        <tr>\r\n            <td align=\"right\">\u5a92\u4f53\u6e20\u9053\uff1a</td>\r\n            <td>\r\n                <span id=\"oldManMediaID\"></span>\r\n            </td>\r\n\r\n            <td align=\"right\">\u5408\u540c\u53f7\uff1a</td>\r\n            <td>\r\n                <span id=\"contractNo\"></span>\r\n            </td>\r\n            <td align=\"right\">\u5408\u540c\u5f00\u59cb\uff1a</td>\r\n            <td>\r\n                <span id=\"contractBegin\"></span>\r\n            </td>\r\n            <td align=\"right\">\u5408\u540c\u7ed3\u675f\uff1a</td>\r\n            <td>\r\n                <span id=\"contractEnd\"></span>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td align=\"right\">\u533b\u4fdd\u7c7b\u578b\uff1a</td>\r\n            <td>\r\n                <span id=\"minsuranceType\"></span>\r\n            </td>\r\n            <td align=\"right\">\u8001\u4eba\u5361\u53f7\uff1a</td>\r\n            <td>\r\n                <span id=\"oldManCardNo\"></span>\r\n            </td>\r\n            <td align=\"right\">\u529e\u7406\u4eba\uff1a</td>\r\n            <td>\r\n                <span id=\"transactor\"></span>\r\n            </td>\r\n            <td align=\"right\">\u62a4\u7406\u5458\uff1a</td>\r\n            <td>\r\n                <span id=\"nursing\"></span>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td align=\"right\">\u8001\u4eba\u4fe1\u4ef0\uff1a</td>\r\n            <td>\r\n                <span id=\"oldManBeliefID\"></span>\r\n            </td>\r\n            <td align=\"right\">\u5165\u4f4f\u7c7b\u578b:</td>\r\n            <td>\r\n                <span id=\"oldManTypeID\"></span>\r\n            </td>\r\n            <td align=\"right\">\u8001\u4eba\u624b\u673a\uff1a</td>\r\n            <td>\r\n                <span id=\"oldManMobile\"></span>\r\n            </td>\r\n            <td align=\"right\">\u5165\u4f4f\u65e5\u671f\uff1a</td>\r\n            <td>\r\n                <span id=\"checkinTime\"></span>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td align=\"right\">\u6240\u4f4f\u5927\u53a6\uff1a</td>\r\n            <td>\r\n                <span id=\"buildingID\"></span>\r\n            </td>\r\n\r\n            <td align=\"right\">\u6240\u4f4f\u623f\u95f4\uff1a</td>\r\n            <td>\r\n                <span id=\"roomID\"></span>\r\n            </td>\r\n            <td align=\"right\">\u6240\u4f4f\u5e8a\u4f4d\uff1a</td>\r\n            <td colspan=\"2\">\r\n                <span id=\"bedID\"></span>\r\n            </td>\r\n\r\n        </tr>\r\n\r\n        <tr>\r\n            <td align=\"right\">\u8eab\u4efd\u8bc1\u53f7\uff1a</td>\r\n            <td>\r\n                <span id=\"oldManIdCard\"></span>\r\n            </td>\r\n\r\n            <td align=\"right\">\u62a4\u7406\u7ea7\u522b\uff1a</td>\r\n            <td colspan=\"4\">\r\n                <span id=\"nursingLevel\"></span>\r\n            </td>\r\n\r\n        </tr>\r\n        <tr>\r\n            <td align=\"right\">\u6237\u7c4d\uff1a</td>\r\n            <td colspan=\"8\">\r\n                <span id=\"oldManNative\"></span>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td align=\"right\">\u8bf4\u660e\uff1a</td>\r\n            <td colspan=\"8\">\r\n                <span id=\"instruction\"></span>\r\n                \r\n            </td>\r\n        </tr>\r\n\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n</body>\r\n</html>\r\n\r\n\r\n".toCharArray();
  }
}
