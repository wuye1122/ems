/*
 * JSP generated by Resin-4.0.36 (built Fri, 26 Apr 2013 03:31:59 PDT)
 */

package _jsp._WEB_22dINF._views._dataPush;
import javax.servlet.*;
import javax.servlet.jsp.*;
import javax.servlet.http.*;

public class _push_0log__jsp extends com.caucho.jsp.JavaPage
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
    depend = new com.caucho.vfs.Depend(appDir.lookup("WEB-INF/views/dataPush/push_log.jsp"), 4423082894658615078L, false);
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

  private final static char []_jsp_string7;
  private final static char []_jsp_string4;
  private final static char []_jsp_string6;
  private final static char []_jsp_string3;
  private final static char []_jsp_string1;
  private final static char []_jsp_string0;
  private final static char []_jsp_string2;
  private final static char []_jsp_string5;
  static {
    _jsp_string7 = "/push-log/query',\r\n      method: 'get',\r\n	  data: params,\r\n      type: 'json',\r\n    }).then(data => {\r\n	  console.log(data);\r\n	  this.total = data.total;\r\n      this.setState({\r\n      loading: false,\r\n      data: data.rows,\r\n      });\r\n    });\r\n  },\r\n  componentDidMount() {\r\n	console.log('componentDidMount state: ', this.state);\r\n	var params = this.state.params;\r\n	params['current']=this.state.current;\r\n	params['pageSize']='10';\r\n    this.fetch( params);\r\n  },\r\n  componentWillUpdate(){\r\n	console.log('componentWillUpdate state: ', this.state.params);\r\n  }, \r\n  componentDidUpdate(){\r\n	console.log('componentDidUpdate state: ', this.state);\r\n  },\r\n			 render() {\r\n				 const { getFieldProps } = this.props.form;\r\n    			return (\r\n     			 <div>\r\n					 <Form  className=\"ant-advanced-search-form\" >\r\n    <Row gutter={16}>\r\n      <Col sm={8}>\r\n        <FormItem\r\n          label=\"SESSION\uff1a\"\r\n          labelCol={{ span: 10 }}\r\n          wrapperCol={{ span: 8 }}\r\n        >\r\n          <Input  placeholder=\"\u8bf7\u8f93\u5165SESSION\" size=\"default\"  {...getFieldProps('sessionId')} />\r\n        </FormItem>\r\n        <FormItem\r\n          label=\"\u5f00\u59cb\u65f6\u95f4\uff1a\"\r\n          labelCol={{ span: 10 }}\r\n          wrapperCol={{ span: 14 }}\r\n        >\r\n          <DatePicker size=\"default\"  {...getFieldProps('startTime')}/>\r\n        </FormItem>\r\n      </Col>\r\n      <Col sm={8}>\r\n\r\n 		<FormItem\r\n    	 label=\"\u63a8\u9001\u4e8b\u4ef6\uff1a\"\r\n     	 labelCol={{ span: 10 }}\r\n   	   	 wrapperCol={{ span: 14 }}\r\n    	>\r\n      	<Select id=\"select\" size=\"large\"  style={{ width: 200 }} {...getFieldProps('eventType')} placeholder=\"\u8bf7\u9009\u62e9\u4e8b\u4ef6\"  >\r\n        	<Option value=\"QUEUE_ABANDON_PUSH_LOG\">\u6392\u961f\u653e\u5f03</Option>\r\n        	<Option value=\"ALERT_ABANDON_PUSH_LOG\">\u632f\u94c3\u653e\u5f03</Option>\r\n      	</Select>\r\n    	</FormItem>\r\n        <FormItem\r\n          label=\"\u7ed3\u675f\u65f6\u95f4\uff1a\"\r\n          labelCol={{ span: 10 }}\r\n          wrapperCol={{ span: 14 }}\r\n        >\r\n          <DatePicker size=\"default\" showTime format=\"yyyy-MM-dd HH:mm:ss\" placeholder=\"\u8bf7\u9009\u62e9\u65f6\u95f4\"  onChange={timeOnChange} {...getFieldProps('endTime')}/>\r\n        </FormItem>\r\n      </Col>\r\n    </Row>\r\n    <Row>\r\n      <Col span={12} offset={12} style={{ textAlign: 'right' }}>\r\n        <Button type=\"primary\"  onClick={this.handlerClick} >\u641c\u7d22</Button>\r\n        <Button onClick={this.handleReset}>\u6e05\u9664\u6761\u4ef6</Button>\r\n      </Col>\r\n    </Row>\r\n  </Form>\r\n        			 <Table  columns={columns} dataSource={this.state.data} loading={this.state.loading} pagination={this} size=\"middle\" footer={() => ''}/>\r\n      			</div>\r\n    		);\r\n  		},\r\n	 });\r\n\r\nfunction timeOnChange(value){\r\n				console.log('\u9009\u62e9\u4e86\u65f6\u95f4\uff1a', value);\r\n			}\r\n\r\n\r\nPagination = Form.create()(Pagination);\r\n\r\n\r\nReactDOM.render(<Pagination />, tableNode);\r\n</script>\r\n</body>\r\n</html>".toCharArray();
    _jsp_string4 = "/script/lib/ant/antd.min.js\"></script>\r\n<script src=\"".toCharArray();
    _jsp_string6 = "/css/ant/antd.min.css\">\r\n<style type=\"text/css\">\r\n#form {\r\n	margin-top: 20px;\r\n	margin-bottom: 30px;\r\n}\r\n\r\n.ant-advanced-search-form {\r\n	padding: 16px 8px;\r\n	background: #f8f8f8;\r\n	border: 1px solid #d9d9d9;\r\n	border-radius: 6px;\r\n	margin-bottom: 30px;\r\n}\r\n\r\n/* \u7531\u4e8e\u8f93\u5165\u6807\u7b7e\u957f\u5ea6\u4e0d\u786e\u5b9a\uff0c\u6240\u4ee5\u9700\u8981\u5fae\u8c03\u4f7f\u4e4b\u770b\u4e0a\u53bb\u5c45\u4e2d */\r\n.ant-advanced-search-form>.ant-row {\r\n	position: relative;\r\n	left: -6px;\r\n}\r\n\r\n.ant-advanced-search-form .ant-btn+.ant-btn {\r\n	margin-left: 8px;\r\n}\r\n</style>\r\n</head>\r\n<body>\r\n		<div id=\"table\"></div>\r\n	<!-- <div id=\"main\">\r\n		<div id=\"form\"></div>\r\n	</div> -->\r\n	<script type=\"text/babel\">\r\nconst { Form, Select, Input, DatePicker,Radio, Button, Row, Col, Table,Icon, Checkbox  } = antd;\r\nconst FormItem = Form.Item;\r\nconst RangePicker = DatePicker.RangePicker;\r\nconst Option = Select.Option;\r\nconst mainNode = document.getElementById('main');\r\nconst mountNode = document.getElementById('form');\r\nconst tableNode = document.getElementById('table');\r\n\r\n\r\n//table\r\nconst columns = [{\r\n  title: 'sessionId',\r\n  dataIndex: 'sessionId',\r\n}, {\r\n  title: '\u5750\u5e2d\u5de5\u53f7',\r\n  dataIndex: 'agentId',\r\n}, {\r\n  title: '\u4e3b\u53eb\u53f7\u7801',\r\n  dataIndex: 'ani',\r\n}, {\r\n  title: '\u88ab\u53eb\u53f7\u7801',\r\n  dataIndex: 'dnis',\r\n}, {\r\n  title: '\u6280\u80fd\u7ec4\u540d\u79f0',\r\n  dataIndex: 'groupName',\r\n}, {\r\n  title: '\u5f00\u59cb\u65f6\u95f4',\r\n  sorter: true,\r\n  dataIndex: 'startTime',\r\n}, {\r\n  title: '\u7ed3\u675f\u65f6\u95f4',\r\n  sorter: true,\r\n  dataIndex: 'endTime',\r\n}, {\r\n  title: '\u4e8b\u4ef6\u7c7b\u578b',\r\n  sorter: true,\r\n  dataIndex: 'endTime',\r\n},{\r\n  title: '\u4e8b\u4ef6\u7c7b\u578b',\r\n  sorter: true,\r\n  dataIndex: 'status',\r\n}];\r\n\r\n\r\nlet Pagination = React.createClass({\r\n			getInitialState() {\r\n   	 			return {\r\n					current:1,\r\n 					data: [],\r\n					params:{},\r\n  			 		showSizeChanger: false\r\n    			};\r\n				this.fetch({current:this.state.current,pageSize:10});\r\n  			},\r\n  			 onShowSizeChange(current, pageSize) {\r\n    			console.log('Current: ', current, '; PageSize: ', pageSize);\r\n				//console.log('total: ', data.total);\r\n  			 },\r\n  			 onChange(current) {\r\n    			console.log('Current: ', current);\r\n			    this.setState({current:current});\r\n				var params = this.state.params;\r\n					params['current']=current;\r\n					params['pageSize']='10';\r\n				this.fetch(params);\r\n 			 },\r\n			handleReset(e) {\r\n    				e.preventDefault();\r\n    			this.props.form.resetFields();\r\n  			},\r\n  			handlerClick(){\r\n				this.setState({params:this.props.form.getFieldsValue()});\r\n				console.log('values: ',this.props.form.getFieldsValue());\r\n				var params = this.state.params;\r\n					params['current']='1';\r\n					params['pageSize']='10';\r\n					params['sessionId']=this.props.form.getFieldsValue().sessionId;\r\n					params['startTime']=this.props.form.getFieldsValue().startTime;\r\n					params['eventType']=this.props.form.getFieldsValue().eventType;\r\n					params['endTime']=this.props.form.getFieldsValue().endTime;\r\n				this.fetch(params);\r\n  			},\r\nfetch(params={}) {\r\n    console.log('\u8bf7\u6c42\u53c2\u6570\uff1a', params);\r\n    this.setState({ loading: true });\r\n    reqwest({\r\n      url: '".toCharArray();
    _jsp_string3 = "/script/lib/react/browser.min.js\"></script>\r\n<script src=\"".toCharArray();
    _jsp_string1 = "/script/lib/react/react.min.js\"></script>\r\n<script src=\"".toCharArray();
    _jsp_string0 = "\r\n<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\r\n<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\r\n<title>\u63a8\u9001\u65e5\u5fd7</title>\r\n<script src=\"".toCharArray();
    _jsp_string2 = "/script/lib/react/react-dom.min.js\"></script>\r\n<script src=\"".toCharArray();
    _jsp_string5 = "/script/lib/react/reqwest.min.js\"></script>\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"".toCharArray();
  }
}
