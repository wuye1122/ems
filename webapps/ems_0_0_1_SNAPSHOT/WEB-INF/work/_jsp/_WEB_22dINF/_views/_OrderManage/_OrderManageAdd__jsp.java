/*
 * JSP generated by Resin-4.0.36 (built Fri, 26 Apr 2013 03:31:59 PDT)
 */

package _jsp._WEB_22dINF._views._OrderManage;
import javax.servlet.*;
import javax.servlet.jsp.*;
import javax.servlet.http.*;

public class _OrderManageAdd__jsp extends com.caucho.jsp.JavaPage
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
    out.write(_jsp_string1, 0, _jsp_string1.length);
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
    depend = new com.caucho.vfs.Depend(appDir.lookup("WEB-INF/views/OrderManage/OrderManageAdd.jsp"), 4603518691251074460L, false);
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

  private final static char []_jsp_string1;
  private final static char []_jsp_string0;
  static {
    _jsp_string1 = "Price\" class=\"col-sm-2 control-label\">\u5355\u4ef7 \r\n                         <span class=\" control-label\" id=\"addfPrice_message\" style=\"color: red;width: 140px;height: auto\">&nbsp;&nbsp;&nbsp;</span>\r\n                         \r\n                         </label>\r\n                        <div class=\"col-sm-2\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"addfPrice\"  readonly=\"readonly\" name=\"fPrice\" >                                                                       \r\n                        </div>    \r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                          <label for=\"addfDealStatus\" class=\"col-sm-2 control-label\" >\u5904\u7406\u72b6\u6001</label>\r\n                        <div class=\"col-sm-2\">\r\n                           <select class=\"form-control\" id=\"addfDealStatus\" name=\"fDealStatus\">\r\n                            </select>                       \r\n                         </div>\r\n                        <label for=\"addfTotal\"class=\"col-sm-2 control-label\">\u91d1\u989d </label>\r\n                        <div class=\"col-sm-2\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"addfTotal\" readonly=\"readonly\" name=\"fTotal\" >\r\n                        </div>\r\n\r\n\r\n                         \r\n                             <label for=\"addfNumber\" class=\"col-sm-2 control-label\">\u6570\u91cf\r\n                           <span class=\" control-label\" id=\"addfNumber_message\" style=\"color: red;width: 140px;height: auto\">&nbsp;&nbsp;&nbsp;</span>\r\n                             \r\n                             </label>\r\n                        <div class=\"col-sm-2\">\r\n                          <input  onkeyup=\"value=value.replace(/[^\\d]/g,'')\" type=\"text\" class=\"form-control\" id=\"addfNumber\" name=\"fNumber\" >                                                                       \r\n                        </div>\r\n                         \r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n\r\n                        <label for=\"addfServiceAdd\" class=\"col-sm-2 control-label\">\u670d\u52a1\u5730\u5740</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"addfServiceAdd\" name=\"fServiceAdd\" >\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"addfOrderExplain\" class=\"col-sm-2 control-label\">\u5de5\u5355\u8bf4\u660e </label>\r\n                        <div class=\"col-sm-10\">\r\n                            <textarea class=\"form-control\"  style=\"resize: none;\"  name=\"fOrderExplain\" id=\"addfOrderExplain\" ></textarea>\r\n                        </div>\r\n                    </div>\r\n      \r\n              \r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" onclick=\"addOrder()\">\u8ba2\u5355\u4fdd\u5b58</button>                                                    \r\n                    <button id=\"add_close_btn\" type=\"button\" class=\"btn btn-primary\" onclick=\"closeModal()\" data-dismiss=\"modal\" >\u5173\u95ed</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n</form>".toCharArray();
    _jsp_string0 = "\r\n<!-- Modal -->\r\n<style>\r\n    .modal-body .row label {\r\n        line-height: 30px;\r\n    }\r\n    .row {\r\n        margin-bottom: 5px;\r\n    }\r\n</style>\r\n<form id=\"form_validate\" class=\"form-horizontal notprint\">\r\n    <div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n           <div class=\"modal-dialog\" style=\"width: 1100px\">\r\n            <div class=\"modal-content\" >\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">\u6dfb\u52a0\u8ba2\u5355</h4>\r\n                </div>                             \r\n                <div class=\"modal-body\">\r\n                \r\n<!--  \u66f4\u6539\u6709 \u9690\u85cf\u5b57\u6bb5     <input type=\"hidden\"  class=\"form-control\" id=\"addNursinghomeID\" name=\"addNursinghomeID\" value=\"3\">\r\n -->                       \r\n\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"addOrderNumber\" class=\"col-sm-1 control-label\">\u5de5\u5355\u53f7</label>\r\n                            <div class=\"col-sm-3\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"addOrderNumber\" readonly=\"readonly\" name=\"fOrderNo\">\r\n                            </div>\r\n\r\n                            <label for=\"addfServiceObject\" class=\"col-sm-2 control-label\">\u670d\u52a1\u5bf9\u8c61</label>\r\n                            <div class=\"col-sm-2\" >\r\n                                <select class=\"form-control\" id=\"addfServiceObject\" name=\"fServiceObject\">\r\n                                </select>\r\n                            </div> \r\n\r\n                            <label for=\"addfOrderType\" class=\"col-sm-2 control-label\">\u5de5\u5355\u7c7b\u578b</label>\r\n                            <div class=\"col-sm-2\">\r\n                              <select class=\"form-control\" id=\"addfOrderType\" name=\"fOrderType\">\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"addfRecieveDept\" class=\"col-sm-2 control-label\">\u53d7\u7406\u90e8\u95e8</label>\r\n                        <div class=\"col-sm-2\">\r\n                            <select class=\"form-control\" id=\"addfRecieveDept\" name=\"fRecieveDept\">\r\n                            </select>                     \r\n                        </div>\r\n\r\n                        <label for=\"addfCallPhone\" class=\"col-sm-2 control-label\" >\u6765\u7535\u4eba\u7535\u8bdd</label>\r\n                        <div class=\"col-sm-2\">\r\n                         <input  onkeyup=\"value=value.replace(/[^\\d]/g,'')\" type=\"text\" class=\"form-control\" id=\"addfCallPhone\" name=\"fCallPhone\" placeholder=\"\u6765\u7535\u4eba\u7535\u8bdd\">                          \r\n                        </div>\r\n                        \r\n                          <label for=\"addfServiceProvide\" class=\"col-sm-2 control-label\" >\u670d\u52a1\u65b9</label>\r\n                        <div class=\"col-sm-2\">\r\n                            <select class=\"form-control\" id=\"addfServiceProvide\" name=\"fServiceProvide\">\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"addfRecieveUser\" class=\"col-sm-2 control-label\"  >\u63a5\u5355\u4eba</label>\r\n                        <div class=\"col-sm-2\">\r\n                            <select class=\"form-control\" id=\"addfRecieveUser\" name=\"fRecieveUser\">\r\n                            </select>\r\n                        </div>\r\n\r\n                        <label for=\"addfCallName\" class=\"col-sm-2 control-label\"  >\u6765\u7535\u4eba\u59d3\u540d</label>\r\n                        <div class=\"col-sm-2\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"addfCallName\" name=\"fCallName\" placeholder=\"\u6765\u7535\u4eba\u59d3\u540d\">                                              \r\n                        </div>\r\n\r\n                        <label for=\"addfServiceUser\" class=\"col-sm-2 control-label\" >\u670d\u52a1\u4eba\u5458</label>\r\n                        <div class=\"col-sm-2\">\r\n                            <select class=\"form-control\" id=\"addfServiceUser\" name=\"fServiceUser\">\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    \r\n\r\n\r\n                    <div class=\"form-group row\">\r\n                    \r\n                         <label for=\"addfRecieveTime\" class=\"col-sm-2 control-label\">\u63a5\u5355\u65f6\u95f4\r\n                         <span class=\" control-label\" id=\"addfRecieveTime_message\" style=\"color: red;width: 140px;height: auto\">&nbsp;&nbsp;&nbsp;</span></label>\r\n                         \r\n                        <div class=\"col-sm-2\">\r\n                            <input onblur=\"addfRecieveTime_check()\" onFocus=\"WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd HH:mm:ss'})\" type=\"text\" class=\"form-control\" id=\"addfRecieveTime\" name=\"fRecieveTime\">\r\n                        </div>\r\n\r\n                         <label for=\"addfObjectName\" class=\"col-sm-2 control-label\" >\u670d\u52a1\u5bf9\u8c61\u59d3\u540d</label>\r\n                        <div class=\"col-sm-2\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"addfObjectName\" name=\"fObjectName\" placeholder=\"\u670d\u52a1\u5bf9\u8c61\u59d3\u540d\">                                              \r\n\r\n                        </div> \r\n\r\n                        <label for=\"addfServiceType\" class=\"col-sm-2 control-label\" >\u670d\u52a1\u5927\u7c7b\r\n                                           <span class=\" control-label\" id=\"addfServiceType_message\" style=\"color: red;width: 140px;height: auto\">&nbsp;&nbsp;&nbsp;</span>\r\n                        </label>\r\n                        <div class=\"col-sm-2\">\r\n                            <select class=\"form-control\" id=\"addfServiceType\" name=\"fServiceType\">\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                     <label for=\"addfOrderEmergency\" class=\"col-sm-2 control-label\" >\u5de5\u5355\u7d27\u6025\u7a0b\u5ea6 </label>\r\n                        <div class=\"col-sm-2\">\r\n                            <select class=\"form-control\" id=\"addfOrderEmergency\" name=\"fOrderEmergency\">\r\n                            </select>\r\n                        </div>\r\n                    \r\n                       <label for=\"addfObjectPhone\" class=\"col-sm-2 control-label\" >\u670d\u52a1\u5bf9\u8c61\u7535\u8bdd</label>\r\n                        <div class=\"col-sm-2\">\r\n                          <input  onkeyup=\"value=value.replace(/[^\\d]/g,'')\" type=\"text\" class=\"form-control\" id=\"addfObjectPhone\" name=\"fObjectPhone\" placeholder=\"\u670d\u52a1\u5bf9\u8c61\u7535\u8bdd\">                                                                       \r\n                        </div> \r\n                    \r\n                       <label for=\"addfServiceItem\" class=\"col-sm-2 control-label\" >\u670d\u52a1\u9879\u76ee\r\n                                          <span class=\" control-label\" id=\"addfServiceItem_message\" style=\"color: red;width: 140px;height: auto\">&nbsp;&nbsp;&nbsp;</span>\r\n                       </label>\r\n                        <div class=\"col-sm-2\">\r\n                           <select class=\"form-control\" id=\"addfServiceItem\" name=\"fServiceItem\">\r\n                            </select>                       \r\n                         </div> \r\n                         \r\n                  \r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"addfPayStyle\" class=\"col-sm-2 control-label\" >\u4ed8\u6b3e\u65b9\u5f0f</label>\r\n                        <div class=\"col-sm-2\">\r\n                           <select class=\"form-control\" id=\"addfPayStyle\" name=\"fPayStyle\">\r\n                            </select>                       \r\n                         </div> \r\n                         \r\n                    \r\n                         \r\n                        <label for=\"addfRequestTime\" class=\"col-sm-2 control-label\">\u8981\u6c42\u670d\u52a1\u65f6\u95f4</label>\r\n                        <div class=\"col-sm-2\">\r\n                      <input onFocus=\"WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd HH:mm:ss'})\" type=\"text\" class=\"form-control\" id=\"addfRequestTime\" name=\"fRequestTime\">\r\n\r\n                        </div>\r\n                         \r\n                         <label for=\"addf".toCharArray();
  }
}