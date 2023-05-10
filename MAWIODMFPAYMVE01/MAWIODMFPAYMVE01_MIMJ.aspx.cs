﻿using System;
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
	/// ODMFPAYMVE01_MIMJ 的摘要描述。
	/// </summary>
	public partial class MAWIODMFPAYMVE01_MIMJ : tw.com.dsc.easyflowDotNet.kernelBasePage.EFMIMJBasepage
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
