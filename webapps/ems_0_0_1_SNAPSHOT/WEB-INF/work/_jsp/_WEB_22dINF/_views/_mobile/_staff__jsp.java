/*
 * JSP generated by Resin-4.0.36 (built Fri, 26 Apr 2013 03:31:59 PDT)
 */

package _jsp._WEB_22dINF._views._mobile;
import javax.servlet.*;
import javax.servlet.jsp.*;
import javax.servlet.http.*;

public class _staff__jsp extends com.caucho.jsp.JavaPage
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
    javax.servlet.http.HttpSession session = request.getSession(true);
    com.caucho.server.webapp.WebApp _jsp_application = _caucho_getApplication();
    com.caucho.jsp.PageContextImpl pageContext = _jsp_pageManager.allocatePageContext(this, _jsp_application, request, response, null, session, 8192, true, false);

    TagState _jsp_state = null;

    try {
      _jspService(request, response, pageContext, _jsp_application, session, _jsp_state);
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
              javax.servlet.http.HttpSession session,
              TagState _jsp_state)
    throws Throwable
  {
    javax.servlet.jsp.JspWriter out = pageContext.getOut();
    final javax.el.ELContext _jsp_env = pageContext.getELContext();
    javax.servlet.ServletConfig config = getServletConfig();
    javax.servlet.Servlet page = this;
    javax.servlet.jsp.tagext.JspTag _jsp_parent_tag = null;
    com.caucho.jsp.PageContextImpl _jsp_parentContext = pageContext;
    response.setContentType("text/html; charset=UTF-8");

    out.write(_jsp_string0, 0, _jsp_string0.length);
    _caucho_expr_0.print(out, _jsp_env, false);
    out.write(_jsp_string1, 0, _jsp_string1.length);
    _caucho_expr_0.print(out, _jsp_env, false);
    out.write(_jsp_string2, 0, _jsp_string2.length);
    _caucho_expr_0.print(out, _jsp_env, false);
    out.write(_jsp_string3, 0, _jsp_string3.length);
    _caucho_expr_0.print(out, _jsp_env, false);
    out.write(_jsp_string4, 0, _jsp_string4.length);
    _caucho_expr_0.print(out, _jsp_env, false);
    out.write(_jsp_string5, 0, _jsp_string5.length);
    _caucho_expr_0.print(out, _jsp_env, false);
    out.write(_jsp_string6, 0, _jsp_string6.length);
    _caucho_expr_0.print(out, _jsp_env, false);
    out.write(_jsp_string7, 0, _jsp_string7.length);
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
    depend = new com.caucho.vfs.Depend(appDir.lookup("WEB-INF/views/mobile/staff.jsp"), -4623515411977549712L, false);
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
      _caucho_expr_0 = com.caucho.jsp.JspUtil.createExpr(pageContext.getELContext(), "${pageContext.request.contextPath}");
    } catch (Exception e) {
      throw com.caucho.config.ConfigException.create(e);
    }
  }
  private static com.caucho.el.Expr _caucho_expr_0;

  private final static char []_jsp_string6;
  private final static char []_jsp_string4;
  private final static char []_jsp_string3;
  private final static char []_jsp_string5;
  private final static char []_jsp_string2;
  private final static char []_jsp_string7;
  private final static char []_jsp_string0;
  private final static char []_jsp_string1;
  static {
    _jsp_string6 = "/staff/StaffMessage.do\" class=\"ui-btn ui-icon-mail ui-btn-icon-left\">\u901a\u77e5</a></li>\r\n			<li><a href=\"".toCharArray();
    _jsp_string4 = "/staff/StaffHome.do\" class=\"ui-btn ui-icon-home ui-btn-icon-left\">\u623f\u95f4</a></li>\r\n			<li><a href=\"".toCharArray();
    _jsp_string3 = "/script/lib/H+/js/jquery.mobile-1.4.5.min.js\"></script>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n	<style>\r\n		th {\r\n			border-bottom: 1px solid #d6d6d6;\r\n		}\r\n		tr:nth-child(even) {\r\n			background: #e9e9e9;\r\n		}\r\n	</style>\r\n</head>\r\n<title>\u535a\u7231\u517b\u8001</title>\r\n</head>\r\n<body>\r\n<div data-role=\"page\">\r\n	<div data-role=\"header\">\r\n	    <h1>AAA\u7684\u4efb\u52a1\u7248</h1>\r\n	</div>\r\n	<div data-role=\"main\" class=\"ui-content\">\r\n		  <table data-role=\"table\" data-mode=\"columntoggle\" class=\"ui-responsive ui-shadow\" id=\"myTable\">\r\n			  <thead>\r\n			  <tr>\r\n				  <th>\u4efb\u52a1ID</th>\r\n				  <th data-priority=\"2\">\u540d\u79f0</th>\r\n				  <th data-priority=\"1\">\u6570\u91cf</th>\r\n			  </tr>\r\n			  </thead>\r\n			  <tbody>\r\n			  <tr>\r\n				  <td>1</td>\r\n				  <td>\u4eca\u65e5\u4efb\u52a1\u6570\u91cf</td>\r\n				  <td>100</td>\r\n			  </tr>\r\n			  <tr>\r\n				  <td>2</td>\r\n				  <td>\u5df2\u5b8c\u6210\u4efb\u52a1\u6570\u91cf</td>\r\n				  <td>50</td>\r\n\r\n			  </tr>\r\n			  <tr>\r\n				  <td>3</td>\r\n				  <td>\u672a\u5b8c\u6210\u4efb\u52a1\u6570\u91cf</td>\r\n				  <td>50</td>\r\n			  </tr>\r\n			  </tbody>\r\n		  </table>\r\n	  </div>\r\n	<div data-role=\"footer\"  data-position=\"fixed\">\r\n		<div data-role=\"navbar\" >\r\n		<ul>\r\n			<li><a href=\"".toCharArray();
    _jsp_string5 = "/staff/StaffOldMan.do\" class=\"ui-btn ui-icon-user ui-btn-icon-left\">\u8001\u4eba</a></li>\r\n			<li><a href=\"".toCharArray();
    _jsp_string2 = "/script/lib/H+/js/jquery.min.js\"></script>\r\n\r\n	<!-- \u5f15\u5165 jQuery Mobile \u5e93 -->\r\n	<script src=\"".toCharArray();
    _jsp_string7 = "/mobilePresident/changePassword.do\"  class=\"ui-btn ui-icon-user ui-btn-icon-top\">\u6211</a></li>\r\n		</ul>\r\n		</div>\r\n	</div>\r\n</div>\r\n</body>\r\n</html>".toCharArray();
    _jsp_string0 = "\r\n<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\r\n<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\r\n<head>\r\n\r\n<!-- meta\u4f7f\u7528viewport\u4ee5\u786e\u4fdd\u9875\u9762\u53ef\u81ea\u7531\u7f29\u653e -->\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n	<!-- \u5f15\u5165 jQuery Mobile \u6837\u5f0f -->\r\n	<link href=\"".toCharArray();
    _jsp_string1 = "/script/lib/H+/css/jquery.mobile-1.4.5.min.css\" rel=\"stylesheet\">\r\n\r\n	<!-- \u5f15\u5165 jQuery \u5e93 -->\r\n	<script src=\"".toCharArray();
  }
}
