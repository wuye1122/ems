/*
 * JSP generated by Resin-4.0.36 (built Fri, 26 Apr 2013 03:31:59 PDT)
 */

package _jsp._WEB_22dINF._views._oldManFree;
import javax.servlet.*;
import javax.servlet.jsp.*;
import javax.servlet.http.*;

public class _oldManFreeAdd__jsp extends com.caucho.jsp.JavaPage
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
    depend = new com.caucho.vfs.Depend(appDir.lookup("WEB-INF/views/oldManFree/oldManFreeAdd.jsp"), -4657015748133819395L, false);
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
    _jsp_string0 = "\r\n\r\n<!-- Modal -->\r\n<form id=\"form_validate\" class=\"form-horizontal\">\r\n    <div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" style=\"width: 1040px; margin-left: 0px; left: 20px;\">\r\n            <div class=\"modal-content\" style=\"height: 520px\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">\u6dfb\u52a0\u51cf\u514d</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 control-label\">\u8001\u4eba</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input type=\"hidden\" id=\"addfOldManID\"/>\r\n                            <input onclick=\"selectOldMan()\" type=\"text\" class=\"form-control\" id=\"oldManName\" placeholder=\"\u5fc5\u586b\u9879\">\r\n                            <label id=\"add_name_free\" style=\"color: red;width: 250px;height: auto\" >&nbsp;&nbsp;&nbsp;</label>\r\n                        </div>\r\n\r\n                        <label class=\"col-sm-2 control-label\">\u51cf\u514d\u9879\u76ee</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <select onblur=\"addCheck_FreeItem_free()\" class=\"form-control\" id=\"addfFreeItem\" name=\"addfFreeItem\">\r\n\r\n                            </select>\r\n                            <label id=\"add_Item_free\" style=\"color: red;width: 250px;height: auto\" >&nbsp;&nbsp;&nbsp;</label>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 control-label\">\u51cf\u514d\u6570\u91cf</label>\r\n                        <div class=\"col-sm-3\">\r\n                            <input onblur=\"addCheck_FreeNumber_free()\" type=\"text\" class=\"form-control\"\r\n                                   id=\"addfFreeNumber\" name=\"addfFreeNumber\" placeholder=\"\u5fc5\u586b\u9879\">\r\n                            <label id=\"add_number_free\" style=\"color: red;width: 250px;height: auto\" >&nbsp;&nbsp;&nbsp;</label>\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                            <select class=\"form-control\" id=\"addUnit\" name=\"addUnit\"  style=\"width:65px\">\r\n                                <option value=\"\u5929\">\u5929</option>\r\n                                <option value=\"\u6708\">\u6708</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label class=\"col-sm-2 control-label\">\u51cf\u514d\u65f6\u95f4</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input onblur=\"addCheck_CreateTime_free()\" class=\"form-control\" onFocus=\"WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM'})\" type=\"text\" id=\"addfCreateTime\" placeholder=\"\u5fc5\u586b\u9879\">\r\n                            <label id=\"add_time_free\" style=\"color: red;width: 250px;height: auto\" >&nbsp;&nbsp;&nbsp;</label>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 control-label\">\u51cf\u514d\u5355\u4ef7</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input  onblur=\"addCheck_FreePrice_free()\" type=\"text\" class=\"form-control\" id=\"addfFreePrice\" name=\"addfFreePrice\" placeholder=\"\u5fc5\u586b\u9879\">\r\n                            <label id=\"add_price_free\" style=\"color: red;width: 250px;height: auto\" >&nbsp;&nbsp;&nbsp;</label>\r\n                        </div>\r\n\r\n                        <label id=\"aChargeCycle\" class=\"col-sm-2 control-label\" value=\"\u8d39\u7528\u5468\u671f\">\u51cf\u514d\u603b\u4ef7</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"addfFreeTotal\" name=\"addfFreeTotal\" readonly=\"readonly\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <input type=\"hidden\" value=\"era34\" id=\"addfNumber\"/>\r\n                    <input type=\"hidden\" value=\"0\" id=\"addfStatus\"/>\r\n                    <input type=\"hidden\" id=\"addfPaymentID\"/>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 control-label\">\u5907\u6ce8\r\n                        </label>\r\n                        <div class=\"col-sm-6\">\r\n							<textarea class=\"form-control\" rows=\"5\" style=\"resize: none;\"\r\n                                      name=\"addfExplain\" id=\"addfExplain\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" onclick=\"closeFreeModal()\">\u5173\u95ed</button>\r\n                    <button type=\"button\" class=\"btn btn-primary\" onclick=\"addOldManFree()\">\u4fdd\u5b58</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</form>\r\n".toCharArray();
  }
}
