/*
 * JSP generated by Resin-4.0.36 (built Fri, 26 Apr 2013 03:31:59 PDT)
 */

package _jsp._WEB_22dINF._views._chargeStandard;
import javax.servlet.*;
import javax.servlet.jsp.*;
import javax.servlet.http.*;

public class _chargeStandardAdd__jsp extends com.caucho.jsp.JavaPage
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
    depend = new com.caucho.vfs.Depend(appDir.lookup("WEB-INF/views/chargeStandard/chargeStandardAdd.jsp"), -7033925259137125007L, false);
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
    _jsp_string0 = "\r\n\r\n<!-- Modal -->\r\n<style>\r\n    .modal-body .row label {\r\n        line-height: 30px;\r\n    }\r\n    .row {\r\n        margin-bottom: 5px;\r\n    }\r\n</style>\r\n<form id=\"form_validate\" class=\"form-horizontal\">\r\n    <div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" style=\"width: 950px\">\r\n            <div class=\"modal-content\" style=\"height: 540px\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">\u65b0\u589e\u8d39\u7528\u9879\u76ee</h4>\r\n                </div>\r\n                \r\n                \r\n                \r\n                \r\n                <div class=\"modal-body\">\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"addChrgeNumber\" class=\"col-sm-2 control-label\">\u8d39\u7528\u7f16\u7801</label>\r\n                            <div class=\"col-sm-4\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"addChrgeNumber\" readonly=\"readonly\" name=\"addChrgeNumber\">\r\n                            </div>\r\n\r\n                            <label for=\"addChrgeName\" class=\"col-sm-2 control-label\">\u8d39\u7528\u540d\u79f0</label>\r\n                            <div class=\"col-sm-4\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"addChrgeName\" name=\"addChrgeName\">\r\n                                \r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"addPrice\" class=\"col-sm-2 control-label\">\u8d39\u7528\u4ef7\u683c</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"addPrice\" name=\"addPrice\" placeholder=\"price\">\r\n                        </div>\r\n\r\n                        <label id=\"aUnit\" class=\"col-sm-2 control-label\" value=\"\u5355\u4f4d\">\u5355\u4f4d</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <select class=\"form-control\" id=\"addUnit\" name=\"addUnit\">\r\n\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"addChrgeType\" class=\"col-sm-2 control-label\" id=\"ChrgeType\" value=\"\u8d39\u7528\u7c7b\u578b\">\u8d39\u7528\u7c7b\u578b</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <select class=\"form-control\" id=\"addChrgeType\" name=\"addChrgeType\">\r\n\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label id=\"aChargeCycle\" class=\"col-sm-2 control-label\" value=\"\u8d39\u7528\u5468\u671f\">\u8d39\u7528\u5468\u671f</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <select class=\"form-control\" id=\"addChargeCycle\" name=\"addChargeCycle\">\r\n\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label id=\"aNursingLevel\" class=\"col-sm-2 control-label\" value=\"\u9879\u76ee\u7b49\u7ea7\">\u9879\u76ee\u7b49\u7ea7</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <select class=\"form-control\" id=\"addNursingLevel\" name=\"addNursingLevel\">\r\n\r\n                            </select>\r\n                        </div>\r\n\r\n                        \r\n                        \r\n                            \r\n\r\n                            \r\n                        \r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"addChrgeStartDate\" class=\"col-sm-2 control-label\">\u9636\u6bb5\u8d39\u7528\u5f00\u59cb\u65f6\u95f4</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input onFocus=\"WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd'})\" type=\"text\" class=\"form-control\" id=\"addChrgeStartDate\" name=\"addChrgeStartDate\">\r\n                        </div>\r\n\r\n                            <label for=\"addChrgeStopDate\" class=\"col-sm-2 control-label\">\u9636\u6bb5\u8d39\u7528\u7ed3\u675f\u65f6\u95f4</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input onFocus=\"WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd'})\" type=\"text\" class=\"form-control\" id=\"addChrgeStopDate\" name=\"addChrgeStopDate\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"addValidityStartDate\" class=\"col-sm-2 control-label\">\u8d39\u7528\u6709\u6548\u671f\u5f00\u59cb\u65f6\u95f4</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input onFocus=\"WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd'})\" type=\"text\" class=\"form-control\" id=\"addValidityStartDate\" name=\"addValidityStartDate\">\r\n                        </div>\r\n\r\n                        <label for=\"addValidityEndDate\" class=\"col-sm-2 control-label\">\u8d39\u7528\u6709\u6548\u671f\u7ed3\u675f\u65f6\u95f4</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input onFocus=\"WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd'})\" type=\"text\" class=\"form-control\" id=\"addValidityEndDate\" name=\"addValidityEndDate\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 control-label\">\u9000\u79df\u65f6\u9000\u6b3e</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input class=\"addRefundType\" type=\"checkbox\" name=\"addRefundType\" id=\"addRefundType\" value=\"1\"/>\u662f\r\n                        </div>\r\n\r\n                        <label class=\"col-sm-2 control-label\">\u72b6\u6001</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <select class=\"form-control\" id=\"addStatus\" name=\"addStatus\">\r\n                                <option value=\"11\">\u542f\u7528</option>\r\n                                <option value=\"10\">\u7981\u7528</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 control-label\">\u5168\u9662\u5fc5\u6536\u8d39\u7528</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input class=\"addIsALLFee\" type=\"checkbox\" name=\"addIsALLFee\" id=\"addIsALLFee\" value=\"1\"/>\u662f\r\n                        </div>\r\n\r\n                        <label class=\"col-sm-2 control-label\">\u5faa\u73af\u6536\u53d6\u8d39\u7528</label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input class=\"addIsCycleFee\" type=\"checkbox\" name=\"addIsCycleFee\" id=\"addIsCycleFee\" value=\"1\"/>\u662f\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"addExplain\" class=\"col-sm-2 control-label\">\u8bf4\u660e</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <textarea class=\"form-control\" name=\"addExplain\" id=\"addExplain\" placeholder=\"\u8bf4\u660e\"></textarea>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                \r\n                <div class=\"modal-footer\" style=\"text-align:center;\">\r\n                    <div class=\"col-sm-6\">\r\n                     <button type=\"button\" class=\"btn btn-default\" onclick=\"closeModal()\" data-dismiss=\"modal\">\u5173\u95ed</button>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                     <button type=\"button\" class=\"btn btn-primary\" onclick=\"addChargeStandard()\">\u4fdd\u5b58</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</form>".toCharArray();
  }
}
