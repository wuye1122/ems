/*
 * JSP generated by Resin-4.0.36 (built Fri, 26 Apr 2013 03:31:59 PDT)
 */

package _jsp._WEB_22dINF._views._providerManager;
import javax.servlet.*;
import javax.servlet.jsp.*;
import javax.servlet.http.*;

public class _providerManagerUpdate__jsp extends com.caucho.jsp.JavaPage
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
    response.setContentType("text/html; charset=UTF-8");

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
    depend = new com.caucho.vfs.Depend(appDir.lookup("WEB-INF/views/providerManager/providerManagerUpdate.jsp"), -6045632560442418288L, false);
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
    _jsp_string0 = "\r\n\r\n <!-- Modal -->\r\n <form id=\"form_validate\" class=\"form-horizontal\">\r\n<div class=\"modal fade\" id=\"updateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n	<div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\u66f4\u65b0\u4f9b\u5e94\u5546</h4>\r\n      </div>\r\n		<div class=\"modal-body\">\r\n			<input type=\"hidden\" id=\"provider_id\">\r\n			<div class=\"form-group row\">\r\n				<div class=\"col-sm-2\" class=\"col-sm-2 control-label\" style=\"padding-right: 1px;\">\r\n				<label for=\"updateFSupplierName\" >\u4f9b\u5e94\u5546\u540d\u79f0</label>\r\n				<label id=\"update_suname_message\" style=\"color: red;width: 94px;height: auto\">&nbsp;&nbsp;&nbsp;</label>\r\n				</div>\r\n				<div class=\"col-sm-4\">\r\n					<input type=\"text\" class=\"form-control\" id=\"updateFSupplierName\" placeholder=\"\u4f9b\u5e94\u5546\u540d\u79f0\" onblur=\"update_suname_check()\">\r\n				</div>\r\n				<label for=\"updateFAccountNumber\" class=\"col-sm-2 control-label\" style=\"padding-right: 1px;\">\u8d26\u53f7</label>\r\n				<div class=\"col-sm-4\">\r\n					<input type=\"text\" class=\"form-control\" id=\"updateFAccountNumber\" placeholder=\"\u8d26\u53f7\">\r\n				</div>\r\n			</div>\r\n			<div class=\"form-group row\">\r\n				<div class=\"col-sm-2\" class=\"col-sm-2 control-label\" style=\"padding-right: 1px;\">\r\n				<label for=\"updateFContactsName\">\u8054\u7cfb\u4eba</label>\r\n				<label id=\"add_coname_message\" style=\"color: red;width: 94px;height: auto\">&nbsp;&nbsp;&nbsp;</label>\r\n				</div>\r\n				<div class=\"col-sm-4\">\r\n					<input type=\"text\" class=\"form-control\" id=\"updateFContactsName\" placeholder=\"\u8054\u7cfb\u4eba\" onblur=\"update_coname_check()\">\r\n				</div>\r\n				<label for=\"updateFBank\" class=\"col-sm-2 control-label\" style=\"padding-right: 1px;\">\u5f00\u6237\u884c</label>\r\n				<div class=\"col-sm-4\">\r\n					<input type=\"text\" class=\"form-control\" id=\"updateFBank\" placeholder=\"\">\r\n				</div>\r\n			</div>\r\n			<div class=\"form-group row\">\r\n				<label for=\"updateFMailingAddress\" class=\"col-sm-2 control-label\" style=\"padding-right: 1px;\" >\u8054\u7cfb\u5730\u5740</label>\r\n				<div class=\"col-sm-4\">\r\n					<input type=\"text\" class=\"form-control\" id=\"updateFMailingAddress\" placeholder=\"\u8054\u7cfb\u5730\u5740\" >\r\n				</div>\r\n				<div class=\"col-sm-2\" class=\"col-sm-2 control-label\" style=\"padding-right: 1px;\">\r\n				<label for=\"updateFMobileTel\">\u624b\u673a</label>\r\n				<label id=\"update_moname_message\" style=\"color: red;width: 94px;height: auto\">&nbsp;&nbsp;&nbsp;</label>\r\n				</div>\r\n				<div class=\"col-sm-4\">\r\n					<input type=\"text\" class=\"form-control\" id=\"updateFMobileTel\" placeholder=\"\u8054\u7cfb\u7535\u8bdd\" onblur=\"update_moname_check()\">\r\n				</div>\r\n			</div>\r\n			<div class=\"form-group row\">\r\n				<label for=\"updateFMailingAddress\" class=\"col-sm-2 control-label\" style=\"padding-right: 1px;\">\u7a0e\u53f7</label>\r\n				<div class=\"col-sm-4\">\r\n					<input type=\"text\" class=\"form-control\" id=\"updateFDutyParagraph\" placeholder=\"\" >\r\n				</div>\r\n\r\n				<label for=\"updateFTel\" class=\"col-sm-2 control-label\" style=\"padding-right: 1px;\">\u56fa\u5b9a\u7535\u8bdd</label>\r\n				<div class=\"col-sm-4\">\r\n					<input type=\"text\" class=\"form-control\" id=\"updateFTel\" placeholder=\"\">\r\n				</div>\r\n			</div>\r\n			<div class=\"form-group row\">\r\n				<label for=\"updateFQqID\" class=\"col-sm-2 control-label\" style=\"padding-right: 1px;\">QQ\u53f7</label>\r\n				<div class=\"col-sm-4\">\r\n					<input type=\"text\" class=\"form-control\" id=\"updateFQqID\" placeholder=\"\" >\r\n				</div>\r\n\r\n				<label for=\"updateFWechatNumber\" class=\"col-sm-2 control-label\" style=\"padding-right: 1px;\">\u5fae\u4fe1</label>\r\n				<div class=\"col-sm-4\">\r\n					<input type=\"text\" class=\"form-control\" id=\"updateFWechatNumber\" placeholder=\"\">\r\n				</div>\r\n			</div>\r\n		</div>\r\n      <div class=\"modal-footer\">\r\n		  <button id=\"update_close_btn\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\u5173\u95ed</button>\r\n		  <button type=\"button\" class=\"btn btn-primary\" onclick=\"updateProviderManager()\">\u4fdd\u5b58</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n</form>".toCharArray();
  }
}
