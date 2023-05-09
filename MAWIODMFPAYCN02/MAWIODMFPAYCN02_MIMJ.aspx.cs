using System;
using System.Collections;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Web;
using System.Web.SessionState;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Xml;
using System.Text;
using System.IO;
using System.Reflection;
//2010/12/29:3.2.1.18:hiro:S00-20101005002:新增連動式開窗選項控制項↓
using tw.com.dsc.dscDotNet.common;
//2010/12/29:3.2.1.18:hiro:S00-20101005002:新增連動式開窗選項控制項↑
//2015/06/10;3.7.3.6;hiro;S00-20150610002;增加CmpCode公司組織控件，依公司組織過濾加簽、轉寄名單↓
using tw.com.dsc.dscDotNet.tool;
using tw.com.dsc.dscDotNet.db;
using tw.com.dsc.dscDotNet.dscData;
using System.Collections.Generic;
//2015/06/10;3.7.3.6;hiro;S00-20150610002;增加CmpCode公司組織控件，依公司組織過濾加簽、轉寄名單↑

namespace tw.com.dsc.easyflowDotNet.forms
{
	/// <summary>
	/// ODMFPAYCN02_MIMJ 的摘要描述。
	/// </summary>
	public partial class MAWIODMFPAYCN02_MIMJ : tw.com.dsc.easyflowDotNet.kernelBasePage.EFMIMJBasepage
	{
		protected new void Page_Load(object sender, System.EventArgs e)
		{
			base.myPage_Load(sender, e);
		}

		#region MIFunction
		protected override void MIFunction()
		{
			switch(tBtnID)
			{
				case "opentype01_btn":			//開窗連結外部資料庫
				{
					base.doMIByDB("OpenMIMJ01","20", @"192.168.10.22", "price");
					break;
				}
				case "openitem01_btn":			//開窗連結外部資料庫
				{
					base.doMIByDB("TrigMIMJ01","05", @"192.168.10.22", "price");
					break;
				}
				case "opentype02_btn":			//開窗連結外部資料庫
				{
					base.doMIByDB("OpenMIMJ01","20", @"192.168.10.22", "price");
					break;
				}
				case "openitem02_btn":			//開窗連結外部資料庫
				{
					base.doMIByDB("TrigMIMJ01","05", @"192.168.10.22", "price");
					break;
				}
				case "opentype03_btn":			//開窗連結外部資料庫
				{
					base.doMIByDB("OpenMIMJ01","20", @"192.168.10.22", "price");
					break;
				}
				case "openitem03_btn":			//開窗連結外部資料庫
				{
					base.doMIByDB("TrigMIMJ01","05", @"192.168.10.22", "price");
					break;
				}
				case "opentype04_btn":			//開窗連結外部資料庫
				{
					base.doMIByDB("OpenMIMJ01","20", @"192.168.10.22", "price");
					break;
				}
				case "openitem04_btn":			//開窗連結外部資料庫
				{
					base.doMIByDB("TrigMIMJ01","05", @"192.168.10.22", "price");
					break;
				}
				case "opentype05_btn":			//開窗連結外部資料庫
				{
					base.doMIByDB("OpenMIMJ01","20", @"192.168.10.22", "price");
					break;
				}
				case "openitem05_btn":			//開窗連結外部資料庫
				{
					base.doMIByDB("TrigMIMJ01","05", @"192.168.10.22", "price");
					break;
				}
				case "empl1_btn":			//員工代號
				{
					base.doMI("RESAK","03");
					break;
				}
				case "empl2_btn":			//員工代號
				{
					base.doMI("RESAK","03");
					break;
				}

				default:
					break;
			}
		}
		#endregion MIFunction

		#region MJFunction
		protected override void MJFunction()
		{
			//2010/12/29:3.2.1.18:hiro:S00-20101005002:新增連動式開窗選項控制項↓
			bool bSelfResult = false;
			//2010/12/29:3.2.1.18:hiro:S00-20101005002:新增連動式開窗選項控制項↑
			switch(tMJ)//欄位ID命名要規則化
			{
				case "OpenMIMJ01_20_opentype01":	
				{
					bSelfResult = getMJResultByDB("OpenMIMJ01","20",1,FinalList, @"192.168.10.22", "price","opentype01_txt2=type_name");
					if(bSelfResult)
					{
						if (tAllInputValues["openitem01_txt"] != null && tAllInputValues["openitem01_txt"].ToString().Length > 0){
							string[] aryParamger = new string[2];
							aryParamger[0]=tAllInputValues["openitem01_txt"].ToString();
							aryParamger[1]=tAllInputValues["opentype01_txt"].ToString();
							//自訂MsgCode
							bool bTriggerMJ=getMJResultByDB("TrigMIMJ01","05",aryParamger,FinalList, @"192.168.10.22", "price","openitem01_txt2=item_name");
							if(!bTriggerMJ){
								base.FinalList.Add("openitem01_txt", "value", "");
								base.FinalList.Add("openitem01_txt2", "value", "");
								string strErrorMsg = "「'+$('#openitem01_lbl').text()+'」"+MultiLanguage.GetComment("PSMSG", "MJValidationError", "保留",this.UserInfo.Language.ToString().Trim());
								base.FinalList.Insert(0,"alert('"+strErrorMsg+"')");
							}
						}
					}
					FinishMJ(bSelfResult, FinalList);
					break;
				}
				case "TrigMIMJ01_05_openitem01":	
				{
					base.doMJByDB("TrigMIMJ01","05", @"192.168.10.22", "price","openitem01_txt2=item_name");
					break;
				}
				case "OpenMIMJ01_20_opentype02":	
				{
					bSelfResult = getMJResultByDB("OpenMIMJ01","20",1,FinalList, @"192.168.10.22", "price","opentype02_txt2=type_name");
					if(bSelfResult)
					{
						if (tAllInputValues["openitem02_txt"] != null && tAllInputValues["openitem02_txt"].ToString().Length > 0){
							string[] aryParamger = new string[2];
							aryParamger[0]=tAllInputValues["openitem02_txt"].ToString();
							aryParamger[1]=tAllInputValues["opentype02_txt"].ToString();
							//自訂MsgCode
							bool bTriggerMJ=getMJResultByDB("TrigMIMJ01","05",aryParamger,FinalList, @"192.168.10.22", "price","openitem02_txt2=item_name");
							if(!bTriggerMJ){
								base.FinalList.Add("openitem02_txt", "value", "");
								base.FinalList.Add("openitem02_txt2", "value", "");
								string strErrorMsg = "「'+$('#openitem02_lbl').text()+'」"+MultiLanguage.GetComment("PSMSG", "MJValidationError", "保留",this.UserInfo.Language.ToString().Trim());
								base.FinalList.Insert(0,"alert('"+strErrorMsg+"')");
							}
						}
					}
					FinishMJ(bSelfResult, FinalList);
					break;
				}
				case "TrigMIMJ01_05_openitem02":	
				{
					base.doMJByDB("TrigMIMJ01","05", @"192.168.10.22", "price","openitem02_txt2=item_name");
					break;
				}
				case "OpenMIMJ01_20_opentype03":	
				{
					bSelfResult = getMJResultByDB("OpenMIMJ01","20",1,FinalList, @"192.168.10.22", "price","opentype03_txt2=type_name");
					if(bSelfResult)
					{
						if (tAllInputValues["openitem03_txt"] != null && tAllInputValues["openitem03_txt"].ToString().Length > 0){
							string[] aryParamger = new string[2];
							aryParamger[0]=tAllInputValues["openitem03_txt"].ToString();
							aryParamger[1]=tAllInputValues["opentype03_txt"].ToString();
							//自訂MsgCode
							bool bTriggerMJ=getMJResultByDB("TrigMIMJ01","05",aryParamger,FinalList, @"192.168.10.22", "price","openitem03_txt2=item_name");
							if(!bTriggerMJ){
								base.FinalList.Add("openitem03_txt", "value", "");
								base.FinalList.Add("openitem03_txt2", "value", "");
								string strErrorMsg = "「'+$('#openitem03_lbl').text()+'」"+MultiLanguage.GetComment("PSMSG", "MJValidationError", "保留",this.UserInfo.Language.ToString().Trim());
								base.FinalList.Insert(0,"alert('"+strErrorMsg+"')");
							}
						}
					}
					FinishMJ(bSelfResult, FinalList);
					break;
				}
				case "TrigMIMJ01_05_openitem03":	
				{
					base.doMJByDB("TrigMIMJ01","05", @"192.168.10.22", "price","openitem03_txt2=item_name");
					break;
				}
				case "OpenMIMJ01_20_opentype04":	
				{
					bSelfResult = getMJResultByDB("OpenMIMJ01","20",1,FinalList, @"192.168.10.22", "price","opentype04_txt2=type_name");
					if(bSelfResult)
					{
						if (tAllInputValues["openitem04_txt"] != null && tAllInputValues["openitem04_txt"].ToString().Length > 0){
							string[] aryParamger = new string[2];
							aryParamger[0]=tAllInputValues["openitem04_txt"].ToString();
							aryParamger[1]=tAllInputValues["opentype04_txt"].ToString();
							//自訂MsgCode
							bool bTriggerMJ=getMJResultByDB("TrigMIMJ01","05",aryParamger,FinalList, @"192.168.10.22", "price","openitem04_txt2=item_name");
							if(!bTriggerMJ){
								base.FinalList.Add("openitem04_txt", "value", "");
								base.FinalList.Add("openitem04_txt2", "value", "");
								string strErrorMsg = "「'+$('#openitem04_lbl').text()+'」"+MultiLanguage.GetComment("PSMSG", "MJValidationError", "保留",this.UserInfo.Language.ToString().Trim());
								base.FinalList.Insert(0,"alert('"+strErrorMsg+"')");
							}
						}
					}
					FinishMJ(bSelfResult, FinalList);
					break;
				}
				case "TrigMIMJ01_05_openitem04":	
				{
					base.doMJByDB("TrigMIMJ01","05", @"192.168.10.22", "price","openitem04_txt2=item_name");
					break;
				}
				case "OpenMIMJ01_20_opentype05":	
				{
					bSelfResult = getMJResultByDB("OpenMIMJ01","20",1,FinalList, @"192.168.10.22", "price","opentype05_txt2=type_name");
					if(bSelfResult)
					{
						if (tAllInputValues["openitem05_txt"] != null && tAllInputValues["openitem05_txt"].ToString().Length > 0){
							string[] aryParamger = new string[2];
							aryParamger[0]=tAllInputValues["openitem05_txt"].ToString();
							aryParamger[1]=tAllInputValues["opentype05_txt"].ToString();
							//自訂MsgCode
							bool bTriggerMJ=getMJResultByDB("TrigMIMJ01","05",aryParamger,FinalList, @"192.168.10.22", "price","openitem05_txt2=item_name");
							if(!bTriggerMJ){
								base.FinalList.Add("openitem05_txt", "value", "");
								base.FinalList.Add("openitem05_txt2", "value", "");
								string strErrorMsg = "「'+$('#openitem05_lbl').text()+'」"+MultiLanguage.GetComment("PSMSG", "MJValidationError", "保留",this.UserInfo.Language.ToString().Trim());
								base.FinalList.Insert(0,"alert('"+strErrorMsg+"')");
							}
						}
					}
					FinishMJ(bSelfResult, FinalList);
					break;
				}
				case "TrigMIMJ01_05_openitem05":	
				{
					base.doMJByDB("TrigMIMJ01","05", @"192.168.10.22", "price","openitem05_txt2=item_name");
					break;
				}
				case "員工代號_empl1":	
				{
					base.doMJ("RESAK","03","empl1_txt2=resak002");
					break;
				}
				case "員工代號_empl2":	
				{
					base.doMJ("RESAK","03","empl2_txt2=resak002");
					break;
				}

				default:
					break;
			}
		}
		#endregion MJFunction

		//2015/06/10;3.7.3.6;hiro;S00-20150610002;增加CmpCode公司組織控件，依公司組織過濾加簽、轉寄名單↓
		/// <summary>
		/// 取得該員工所屬公司組織所需的SQL條件字串
		/// </summary>
		private string GetEmplAttachmentBaseDeptSQLString(){
			string strReturn = "";
			UserInfoClass tUserInfo = (UserInfoClass)Session["UserInfo"];

			string strSQL =  string.Format("select resal001 from {0}..resal WHERE resal001 in (select resan001 from {0}..resan where resan003='{1}') and resal005>1", tUserInfo.Company, tUserInfo.EmployeeId);
			DBCommand dbCommand = DscDBData.GetDataDBCommand();
			DataTable dtEmplAttachmentDept = dbCommand.Query(strSQL);
			//List<string> listBaseDeptNo = new List<string>();
			if (dtEmplAttachmentDept.Rows.Count > 0)
			{
				strReturn = " and (";
				int iCount = 0;
				//resal001(部門代號)、resal002(部門簡稱),resal004(上層部門代號),resal005(階層)
				strSQL =  string.Format("select resal001,resal002,resal004,resal005 from {0}..resal", tUserInfo.Company);
				DataTable dtAllDept = dbCommand.Query(strSQL);
				foreach(DataRow dr in dtEmplAttachmentDept.Rows)
				{
					//listBaseDeptNo.Add(GetBaseDeptNo(dr["real001"].ToString(), ref dtAllDept));
					if (iCount>0)
						strReturn += " or ";
					strReturn += "resal001='" + GetBaseDeptNo(dr["resal001"].ToString(), ref dtAllDept) + "'";
					++iCount;
				}
				strReturn += ")";
			}
			return strReturn;
		}

		private string GetBaseDeptNo(string pSonDeptNo, ref DataTable dtAllDept){
			string tParentDeptNo = "";
			dtAllDept.DefaultView.RowFilter = "resal001='"+pSonDeptNo+"'";
			if (dtAllDept.DefaultView.Count > 0) {
				string tDeptLevel=dtAllDept.DefaultView[0]["resal005"].ToString().Trim();
				if(tDeptLevel=="2"){
					return pSonDeptNo;
				}
				else{
					tParentDeptNo=dtAllDept.DefaultView[0]["resal004"].ToString().Trim();
					return GetBaseDeptNo(tParentDeptNo, ref dtAllDept);
				}
			}
			else
				return pSonDeptNo;
		}
		//2015/06/10;3.7.3.6;hiro;S00-20150610002;增加CmpCode公司組織控件，依公司組織過濾加簽、轉寄名單↑

		#region Web Form 設計工具產生的程式碼
		override protected void OnInit(EventArgs e)
		{
			// CODEGEN: 此為 ASP.NET Web Form 設計工具所需的呼叫。
			InitializeComponent();
			base.OnInit(e);
		}

		/// <summary>
		/// 此為設計工具支援所必須的方法 - 請勿使用程式碼編輯器修改
		/// 這個方法的內容。
		/// </summary>
		private void InitializeComponent()
		{
			this.Load += new System.EventHandler(this.Page_Load);
		}
		#endregion
	}
}
