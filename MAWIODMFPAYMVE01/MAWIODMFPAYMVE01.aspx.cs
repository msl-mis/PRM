using System;
using System.Text;
using System.IO;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Web;
using System.Web.SessionState;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using tw.com.dsc.crm.basepage;
using tw.com.dsc.dscDotNet.dscWeb;
using tw.com.dsc.dscDotNet.tool;
using tw.com.dsc.dscDotNet.grid;
using tw.com.dsc.dscDotNet.db;
using tw.com.dsc.dscDotNet.dscData;
using tw.com.dsc.dscDotNet.common;
using tw.com.dsc.dscDotNet.util;
using tw.com.dsc.dscDotNet.dscWebControls;
using tw.com.dsc.dscDotNet.kernelBasePage;
using EasyFlowEngine.PlatformInterface;
using com.digiwin.net.ef.classlibrary;
using System.Data.OracleClient;
using System.Data.OleDb;
using System.Data.Odbc;


namespace tw.com.dsc.easyflowDotNet.program
{
	/// <summary>
	/// MAWIODMFPAYMVE01 的摘要描述。
	/// </summary>
	public partial class MAWIODMFPAYMVE01 : tw.com.dsc.easyflowDotNet.kernelBasePage.EFProgramBasePage
	{
		#region 讀取 sysba 參數設定用物件
		/// <summary>
		/// 讀取 sysba 參數設定用物件
		/// </summary>
		private EF_CompanyParameterData _objEFPara;

		/// <summary>
		/// 讀取 sysba 參數設定用物件
		/// </summary>
		public EF_CompanyParameterData objEFPara
		{
			get
			{
				if (_objEFPara == null)
				{
					_objEFPara = new EF_CompanyParameterData(PLATFORMIF.Company, true);
				}
				return _objEFPara;
			}
			set
			{
				_objEFPara = value;
			}
		}
		#endregion 讀取 sysba 參數設定用物件

		//設定程式代號的title
		protected string PageTitle;
		protected void Page_Load(object sender, System.EventArgs e)
		{
			AjaxPro.Utility.RegisterTypeForAjax(typeof(MAWIODMFPAYMVE01));
			//隱藏span
			Page.Response.Expires = 0;

			//頁籤的多國語系
			UserInfoClass objUserInfo = (UserInfoClass)Session["UserInfo"];
			string tLanguageType = objUserInfo.Language;
			this.TabStrip1.Items[0].Text = MultiLanguage.GetComment("FD", "MAWIODMFPAYMVE01", "TabStrip1", tLanguageType);
			this.lblTitle.Text = MultiLanguage.GetComment("FD", "MAWIODMFPAYMVE01", "lblTitle", tLanguageType);

			//頁籤的多國語系
						string tHeadTabStrip01Text = MultiLanguage.GetComment("FD", "MAWIODMFPAYMVE01", "HeadTabStrip01", tLanguageType);
			if(tHeadTabStrip01Text.Length>4){
				this.TabStrip1.Items[0].Text = tHeadTabStrip01Text.Substring(0,4)+"..";
				this.TabStrip1.Items[0].ToolTip = tHeadTabStrip01Text;
			}
			else{
				this.TabStrip1.Items[0].Text = tHeadTabStrip01Text;
			}


			//程式title
			string tProgramTitle = MultiLanguage.GetComment("FD", "MAWIODMFPAYMVE01", "lblTitle", tLanguageType);
			LiteralTitle.Text = tProgramTitle;

			//多國語系
			

			//初始設定
			#region 增加初始設定
			ScriptManager.RegisterStartupScript(this, typeof(string), "InitTriggerMust", "InitTriggerMust('');", true);
ScriptManager.RegisterStartupScript(this, typeof(string), "InitCalculated", "InitCalculated();", true);
			#endregion
		}

		#region PreRender的動作
		protected override void _Page_PreRender(object sender, System.EventArgs e)
		{
			string tReturnValue = "";
			string tSQL = "";
			#region 與管理程式共用Before Prender區段
			//ToolTip參數：Y:顯示ToolTip；N:不顯示
			string strToolTipParameter = objEFPara.EF_getCompanyParameterData("ToolTip").ToString();
			
			if(strToolTipParameter=="Y"){
				this.payee.ToolTip = this.payee.Text;
this.textarea1.ToolTip = this.textarea1.Text;
this.textarea2.ToolTip = this.textarea2.Text;
this.textarea3.ToolTip = this.textarea3.Text;
this.textarea4.ToolTip = this.textarea4.Text;
this.textarea5.ToolTip = this.textarea5.Text;

			}

			#endregion 與管理程式共用Before Prender區段
			//管理程式不允許顯示新增按鈕
			SetToolBarButtonVisiable(ButtonStyleType.BtnAdd, false);


			
#region 自訂下拉選項
			
			#endregion 自訂下拉選項



base._Page_PreRender(sender, e);

			#region 與管理程式共用After Prender區段
			//單頭RadioButton控制項 start
			chpay.Attributes["style"] = "display:none;";
			chpay_ctrolRadio0.Checked = (chpay.Value == "0"); chpay_ctrolRadio0.Enabled = chpay.InputEnabled;
			chpay_ctrolRadio1.Checked = (chpay.Value == "1"); chpay_ctrolRadio1.Enabled = chpay.InputEnabled;
			chpay_ctrolRadio2.Checked = (chpay.Value == "2"); chpay_ctrolRadio2.Enabled = chpay.InputEnabled;
			rdtc.Attributes["style"] = "display:none;";
			rdtc_ctrolRadio0.Checked = (rdtc.Value == "0"); rdtc_ctrolRadio0.Enabled = rdtc.InputEnabled;
			rdtc_ctrolRadio1.Checked = (rdtc.Value == "1"); rdtc_ctrolRadio1.Enabled = rdtc.InputEnabled;
			rdtc_ctrolRadio2.Checked = (rdtc.Value == "2"); rdtc_ctrolRadio2.Enabled = rdtc.InputEnabled;
			rdtc_ctrolRadio3.Checked = (rdtc.Value == "3"); rdtc_ctrolRadio3.Enabled = rdtc.InputEnabled;
			rdtc_ctrolRadio4.Checked = (rdtc.Value == "4"); rdtc_ctrolRadio4.Enabled = rdtc.InputEnabled;


			//單頭RadioButton控制項 end

this.chkitem01.Text = String.Empty;
this.chkitem02.Text = String.Empty;
this.chkitem03.Text = String.Empty;
this.chkitem04.Text = String.Empty;
this.chkitem05.Text = String.Empty;
this.chkatt01.Text = String.Empty;
this.chkatt02.Text = String.Empty;
this.chkatt03.Text = String.Empty;
this.chkatt04.Text = String.Empty;
this.chkatt05.Text = String.Empty;
this.other.Text = String.Empty;


			mtotal.InputEnabled = false;//設定為欄位計算，預設唯讀


			#endregion 與管理程式共用After Prender區段


			if (base._BtnAdd != null) { base._BtnAdd.Visible = false; } //管理程式不能新增
			
			//if (base._BtnDelete != null) { base._BtnDelete.Visible = false; } //管理程式不能刪除
			if (base._BtnDelete != null)
			{
				string msg001 = MultiLanguage.GetComment("PSMSG", "DELWarring", "MSG001", UserInfo.Language); //提醒！您即將刪除表單資料，表單刪除後將無法還原！
				string errorMsg = String.Format("alert('{0}');", msg001);
				if (base._BtnDelete.Attributes["onclick"].IndexOf(errorMsg) == -1)
				{
					base._BtnDelete.Attributes["onclick"] = errorMsg + base._BtnDelete.Attributes["onclick"];
				}
			}

			//由EFBase檢查sysad是否存在報表，不存在則隱藏列印按鈕
			//if (base._BtnOutPut != null) { base._BtnOutPut.Visible = true; }//2008/12/25:Joseph:補上列印按鈕
			//if (base._BtnImgOutPut != null) { base._BtnImgOutPut.Visible = true; }
			linkBtnViewDraft.Text = String.Empty;

			
			if (DscSession[TaskId + "_action"] != null)
			{
				string tActionType = DscSession[TaskId + "_action"].ToString();
				if (tActionType == this.ACT_ONE_ROW_OF_QBE_GRID_CLICKED || tActionType == this.ACT_QBE_BTN_PRESSED)
				{
					DscRow dscRow = ((DscDataObj)DscSession[TaskId + "_dataObj"]).NowRow;
					if ( dscRow != null)
					{
						//設定目前 表單代號，單號
						string formId = String.Empty;
						string sheetNo = String.Empty;
						SetFormSheetNo(ref formId, ref sheetNo);
						string linkTitle = MultiLanguage.GetComment("FD", "NewProgWizard", "ViewDraft", ((UserInfoClass)Session["UserInfo"]).Language);//觀看表單原稿
						linkBtnViewDraft.Text = String.Format("{0}：{1}-{2}", linkTitle, dscRow[formId].Value, dscRow[sheetNo].Value);
						string url = String.Format("../../../src/FRM/{0}/{0}.aspx?FormType=Sent&formStatus=Display&Action=ShowOriginal&sheetNo={1}&CallProg={0}", dscRow[formId].Value, dscRow[sheetNo].Value);
						string strLinkOnclick = "window.showModalDialog(\""+url+"\", null, \"dialogHeight:600px;dialogWidth:900px;scrollbars=no;status=no;resizable=yes;\");";
                        //2018/03/14:6.1.7.1:俊詠：S00-20180313002:原稿開窗改為使用系統參數控管是要showDialog還是window.open。↓
						UserInfoClass tClass2 = (UserInfoClass)Session["UserInfo"];
			            DBCommand dbCommand = DscDBData.GetDataDBCommand();
			            string tSQL2 = "SELECT sysba002 FROM " + tClass2.Company + "..sysba WHERE sysba001='ProgWizardWindowOpenType'";
			            DataTable tDT = dbCommand.Query(tSQL2);
			            if(tDT!=null && tDT.Rows.Count>0)
			            {
			                if(tDT.Rows[0][0].ToString().Trim()=="1")
			                {
			                  //2020/08/26:6.1.16.2:俊詠:C01-20200826001:ProgWizardWindowOpenType設定為windowopen，在IE操作時彈跳視窗無法調整大小、無scrollbar，造成無法看到表單全部內容，但在chrome上無此問題。↓
			                  //strLinkOnclick = "window.open(\""+url+"\", null, \"dialogHeight:600px;dialogWidth:900px;scrollbars=no;status=no;resizable=yes;\");";
			                  strLinkOnclick = "window.open(\""+url+"\", null, \"dialogHeight:600px,dialogWidth:900px,scrollbars=no,status=no,resizable=yes\");";
			                  //2020/08/26:6.1.16.2:俊詠:C01-20200826001:ProgWizardWindowOpenType設定為windowopen，在IE操作時彈跳視窗無法調整大小、無scrollbar，造成無法看到表單全部內容，但在chrome上無此問題。↑
			                }
			            } 
						//2018/03/14:6.1.7.1:俊詠：S00-20180313002:原稿開窗改為使用系統參數控管是要showDialog還是window.open。↑
						linkBtnViewDraft.Attributes.Add("onclick",strLinkOnclick+";event.returnValue = false;return false;");
					
					}
				}
			}


			//2015/06/10;3.6.6.15;hiro;S00-20141225002,S00-20141225003;派送表單功能強化↓
			
			//2015/06/10;3.6.6.15;hiro;S00-20141225002,S00-20141225003;派送表單功能強化↑

			
			#region 設定Grid0隱藏欄位
			List<string> listGrid0HeaderString = new List<string>();
			int intGrid0HeaderCount = GridUserControl0.HeaderShown.Count;
			for (int j = 0; j < intGrid0HeaderCount; j++)
			{
				listGrid0HeaderString.Add(GridUserControl0.HeaderShown[j].ToString().Trim());
			}

			/*Grid0 Setting Start*/
			chkitem01.Attributes.Add("style", "display:none;");
			chkitem02.Attributes.Add("style", "display:none;");
			chkitem03.Attributes.Add("style", "display:none;");
			chkitem04.Attributes.Add("style", "display:none;");
			chkitem05.Attributes.Add("style", "display:none;");
			empl1.Attributes.Add("style", "display:none;");
			empl2.Attributes.Add("style", "display:none;");

		if(listGrid0HeaderString.Contains("chkitem01"))
			listGrid0HeaderString.Remove("chkitem01");
		if(listGrid0HeaderString.Contains("chkitem02"))
			listGrid0HeaderString.Remove("chkitem02");
		if(listGrid0HeaderString.Contains("chkitem03"))
			listGrid0HeaderString.Remove("chkitem03");
		if(listGrid0HeaderString.Contains("chkitem04"))
			listGrid0HeaderString.Remove("chkitem04");
		if(listGrid0HeaderString.Contains("chkitem05"))
			listGrid0HeaderString.Remove("chkitem05");
		if(listGrid0HeaderString.Contains("empl1"))
			listGrid0HeaderString.Remove("empl1");
		if(listGrid0HeaderString.Contains("empl2"))
			listGrid0HeaderString.Remove("empl2");

		if (GridUserControl0.HeaderShown.Contains("chkitem01"))
			GridUserControl0.HeaderShown.Remove("chkitem01");
		if (GridUserControl0.HeaderShown.Contains("chkitem02"))
			GridUserControl0.HeaderShown.Remove("chkitem02");
		if (GridUserControl0.HeaderShown.Contains("chkitem03"))
			GridUserControl0.HeaderShown.Remove("chkitem03");
		if (GridUserControl0.HeaderShown.Contains("chkitem04"))
			GridUserControl0.HeaderShown.Remove("chkitem04");
		if (GridUserControl0.HeaderShown.Contains("chkitem05"))
			GridUserControl0.HeaderShown.Remove("chkitem05");
		if (GridUserControl0.HeaderShown.Contains("empl1"))
			GridUserControl0.HeaderShown.Remove("empl1");
		if (GridUserControl0.HeaderShown.Contains("empl2"))
			GridUserControl0.HeaderShown.Remove("empl2");
			/*Grid0 Setting End*/

			string tGrid0HeaderString = "";
			foreach(string strShowColumn in listGrid0HeaderString)
			{
				tGrid0HeaderString+=strShowColumn+",";
			}

			if(tGrid0HeaderString.Length>0){
				tGrid0HeaderString=tGrid0HeaderString.Substring(0,tGrid0HeaderString.Length-1);
				GridUserControl0.headerOfGrid = tGrid0HeaderString;
				GridUserControl0.changeGridHeader();
			}
			else{
				//GridUserControl0.HeaderShown.Add("");
				//GridUserControl0.headerOfGrid = "";
				//GridUserControl0.changeGridHeader();
				//ecPnlDetail0.Attributes.Add("style", "display:none;");
			}
			#endregion 設定Grid0隱藏欄位


		}
		#endregion PreRender的動作



		#region 自訂grid顯示的欄位

		protected override void settingHeaderShown()
		{
			string tSQL="";
			string tReturnValue="";
			UserInfoClass objUserInfo = (UserInfoClass)Session["UserInfo"];
			string tLanguageType = objUserInfo.Language;  //string tLanguageType = this.UserInfo.Language;
			string strresda020_1 = MultiLanguage.GetComment("FD", "FormBox", "resda020_01", tLanguageType); //未傳送
			string strresda020_2 = MultiLanguage.GetComment("FD", "FormBox", "resda020_02", tLanguageType); //簽核中
			string strresda020_3 = MultiLanguage.GetComment("FD", "FormBox", "resda020_03", tLanguageType); //已簽核
			string strresda020_4 = MultiLanguage.GetComment("FD", "FormBox", "resda020_04", tLanguageType); //已抽單
			resda020.Items[0].Text = strresda020_1;
			resda020.Items[1].Text = strresda020_2;
			resda020.Items[2].Text = strresda020_3;
			resda020.Items[3].Text = strresda020_4;
			string strresda021_1 = MultiLanguage.GetComment("FD", "FormBox", "resda021_01", tLanguageType); //未完成
			string strresda021_2 = MultiLanguage.GetComment("FD", "FormBox", "resda021_02", tLanguageType); //同意
			string strresda021_3 = MultiLanguage.GetComment("FD", "FormBox", "resda021_03", tLanguageType); //不同意
			string strresda021_4 = MultiLanguage.GetComment("FD", "FormBox", "resda021_04", tLanguageType); //已抽單
			resda021.Items[0].Text = strresda021_1;
			resda021.Items[1].Text = strresda021_2;
			resda021.Items[2].Text = strresda021_3;
			resda021.Items[3].Text = strresda021_4;

			//自訂grid顯示的欄位
			#region 單頭

			GridUserControl0.ShowColumns("odmfpaymve01001");
			GridUserControl0.ShowColumns("odmfpaymve01002");
			GridUserControl0.ShowColumns("datetime1", 70, gridUserControl.GridColumnType.DateTime, "yyyy/MM/dd");
			GridUserControl0.ShowColumns("dept");
			GridUserControl0.ShowColumns("username");
			GridUserControl0.ShowColumns("payee");
			GridUserControl0.ShowColumns("chkitem01", gridUserControl.GridColumnType.DropDownList,"1=Y§0=N");
			GridUserControl0.ShowColumns("chkitem02", gridUserControl.GridColumnType.DropDownList,"1=Y§0=N");
			GridUserControl0.ShowColumns("chkitem03", gridUserControl.GridColumnType.DropDownList,"1=Y§0=N");
			GridUserControl0.ShowColumns("chkitem04", gridUserControl.GridColumnType.DropDownList,"1=Y§0=N");
			GridUserControl0.ShowColumns("chkitem05", gridUserControl.GridColumnType.DropDownList,"1=Y§0=N");
			GridUserControl0.ShowColumns("chkother");
			GridUserControl0.ShowColumns("textarea1");
			GridUserControl0.ShowColumns("money01");
			GridUserControl0.ShowColumns("textarea2");
			GridUserControl0.ShowColumns("money02");
			GridUserControl0.ShowColumns("textarea3");
			GridUserControl0.ShowColumns("money03");
			GridUserControl0.ShowColumns("textarea4");
			GridUserControl0.ShowColumns("money04");
			GridUserControl0.ShowColumns("textarea5");
			GridUserControl0.ShowColumns("money05");
			GridUserControl0.ShowColumns("mtotal");
			GridUserControl0.ShowColumns("chkatt01", gridUserControl.GridColumnType.DropDownList,"1=Y§0=N");
			GridUserControl0.ShowColumns("inv01");
			GridUserControl0.ShowColumns("chkatt02", gridUserControl.GridColumnType.DropDownList,"1=Y§0=N");
			GridUserControl0.ShowColumns("inv02");
			GridUserControl0.ShowColumns("chkatt03", gridUserControl.GridColumnType.DropDownList,"1=Y§0=N");
			GridUserControl0.ShowColumns("chkatt04", gridUserControl.GridColumnType.DropDownList,"1=Y§0=N");
			GridUserControl0.ShowColumns("chkatt05", gridUserControl.GridColumnType.DropDownList,"1=Y§0=N");
			GridUserControl0.ShowColumns("orderno");
			GridUserControl0.ShowColumns("attother");
			GridUserControl0.ShowColumns("chpay", gridUserControl.GridColumnType.DropDownList,"0=" + MultiLanguage.GetComment("FD", "ODMFPAYMVE01", "chpay_0", UserInfo.Language) + "§" + "1=" + MultiLanguage.GetComment("FD", "ODMFPAYMVE01", "chpay_1", UserInfo.Language) + "§" + "2=" + MultiLanguage.GetComment("FD", "ODMFPAYMVE01", "chpay_2", UserInfo.Language));
			GridUserControl0.ShowColumns("other", gridUserControl.GridColumnType.DropDownList,"1=Y§0=N");
			GridUserControl0.ShowColumns("payother");
			GridUserControl0.ShowColumns("empl1");
			GridUserControl0.ShowColumns("empl2");
			GridUserControl0.ShowColumns("paydate", 70, gridUserControl.GridColumnType.DateTime, "yyyy/MM/dd");
			GridUserControl0.ShowColumns("cur01", gridUserControl.GridColumnType.DropDownList,"VND=" + MultiLanguage.GetComment("Combo", "ODMFPAYMVE01_cur01", "VND", UserInfo.Language) + "§" +"USD=" + MultiLanguage.GetComment("Combo", "ODMFPAYMVE01_cur01", "USD", UserInfo.Language));
			GridUserControl0.ShowColumns("cur03", gridUserControl.GridColumnType.DropDownList,"VND=" + MultiLanguage.GetComment("Combo", "ODMFPAYMVE01_cur03", "VND", UserInfo.Language) + "§" +"USD=" + MultiLanguage.GetComment("Combo", "ODMFPAYMVE01_cur03", "USD", UserInfo.Language));
			GridUserControl0.ShowColumns("cur02", gridUserControl.GridColumnType.DropDownList,"VND=" + MultiLanguage.GetComment("Combo", "ODMFPAYMVE01_cur02", "VND", UserInfo.Language) + "§" +"USD=" + MultiLanguage.GetComment("Combo", "ODMFPAYMVE01_cur02", "USD", UserInfo.Language));
			GridUserControl0.ShowColumns("cur04", gridUserControl.GridColumnType.DropDownList,"VND=" + MultiLanguage.GetComment("Combo", "ODMFPAYMVE01_cur04", "VND", UserInfo.Language) + "§" +"USD=" + MultiLanguage.GetComment("Combo", "ODMFPAYMVE01_cur04", "USD", UserInfo.Language));
			GridUserControl0.ShowColumns("cur05", gridUserControl.GridColumnType.DropDownList,"VND=" + MultiLanguage.GetComment("Combo", "ODMFPAYMVE01_cur05", "VND", UserInfo.Language) + "§" +"USD=" + MultiLanguage.GetComment("Combo", "ODMFPAYMVE01_cur05", "USD", UserInfo.Language));
			GridUserControl0.ShowColumns("curr", gridUserControl.GridColumnType.DropDownList,"VND=" + MultiLanguage.GetComment("Combo", "ODMFPAYMVE01_curr", "VND", UserInfo.Language) + "§" +"USD=" + MultiLanguage.GetComment("Combo", "ODMFPAYMVE01_curr", "USD", UserInfo.Language));
			GridUserControl0.ShowColumns("rdtc", gridUserControl.GridColumnType.DropDownList,"0=" + MultiLanguage.GetComment("FD", "ODMFPAYMVE01", "rdtc_0", UserInfo.Language) + "§" + "1=" + MultiLanguage.GetComment("FD", "ODMFPAYMVE01", "rdtc_1", UserInfo.Language) + "§" + "2=" + MultiLanguage.GetComment("FD", "ODMFPAYMVE01", "rdtc_2", UserInfo.Language) + "§" + "3=" + MultiLanguage.GetComment("FD", "ODMFPAYMVE01", "rdtc_3", UserInfo.Language) + "§" + "4=" + MultiLanguage.GetComment("FD", "ODMFPAYMVE01", "rdtc_4", UserInfo.Language));
			GridUserControl0.ShowColumns("resda019");
			GridUserControl0.ShowColumns("resda020", gridUserControl.GridColumnType.DropDownList, "1=" + strresda020_1 + "§2=" + strresda020_2 + "§3=" + strresda020_3 + "§4=" + strresda020_4);
			GridUserControl0.ShowColumns("resda021", gridUserControl.GridColumnType.DropDownList, "1=" + strresda021_1 + "§2=" + strresda021_2 + "§3=" + strresda021_3 + "§4=" + strresda021_4);
			#endregion 單頭


			base.settingHeaderShown();
		}
		#endregion 自訂grid顯示的欄位

		#region 單頭QBE查詢條件欄位-進階選項查詢
		protected override void settingQBEAdvancedElement()
		{
			base.CusQBEAdvancedElements.Clear();
			base.CusQBEAdvancedElements.Add("odmfpaymve01001");
			base.CusQBEAdvancedElements.Add("odmfpaymve01002");
			base.CusQBEAdvancedElements.Add("datetime1");
			base.CusQBEAdvancedElements.Add("dept");
			base.CusQBEAdvancedElements.Add("username");
			base.CusQBEAdvancedElements.Add("payee");
			base.CusQBEAdvancedElements.Add("chkother");
			base.CusQBEAdvancedElements.Add("textarea1");
			base.CusQBEAdvancedElements.Add("money01");
			base.CusQBEAdvancedElements.Add("textarea2");
			base.CusQBEAdvancedElements.Add("money02");
			base.CusQBEAdvancedElements.Add("textarea3");
			base.CusQBEAdvancedElements.Add("money03");
			base.CusQBEAdvancedElements.Add("textarea4");
			base.CusQBEAdvancedElements.Add("money04");
			base.CusQBEAdvancedElements.Add("textarea5");
			base.CusQBEAdvancedElements.Add("money05");
			base.CusQBEAdvancedElements.Add("mtotal");
			base.CusQBEAdvancedElements.Add("chkatt01");
			base.CusQBEAdvancedElements.Add("inv01");
			base.CusQBEAdvancedElements.Add("chkatt02");
			base.CusQBEAdvancedElements.Add("inv02");
			base.CusQBEAdvancedElements.Add("chkatt03");
			base.CusQBEAdvancedElements.Add("chkatt04");
			base.CusQBEAdvancedElements.Add("chkatt05");
			base.CusQBEAdvancedElements.Add("orderno");
			base.CusQBEAdvancedElements.Add("attother");
			base.CusQBEAdvancedElements.Add("chpay");
			base.CusQBEAdvancedElements.Add("other");
			base.CusQBEAdvancedElements.Add("payother");
			base.CusQBEAdvancedElements.Add("paydate");
			base.CusQBEAdvancedElements.Add("cur01");
			base.CusQBEAdvancedElements.Add("cur03");
			base.CusQBEAdvancedElements.Add("cur02");
			base.CusQBEAdvancedElements.Add("cur04");
			base.CusQBEAdvancedElements.Add("cur05");
			base.CusQBEAdvancedElements.Add("curr");
			base.CusQBEAdvancedElements.Add("rdtc");
			base.CusQBEAdvancedElements.Add("resda019");
			base.CusQBEAdvancedElements.Add("resda020");
			base.CusQBEAdvancedElements.Add("resda021");
			base.CusQBEAdvancedElements.Add("resda020");
			base.CusQBEAdvancedElements.Add("resda021");

		}
		#endregion 單頭QBE查詢條件欄位-進階選項查詢

		

		// 設定 單別 單號
		private void SetFormSheetNo(ref string formId, ref string sheetNo)
		{
			DscDataObj dscDataObj = (DscDataObj)DscSession[TaskId + "_dataObj"];
			foreach (DictionaryEntry de in dscDataObj.keyFieldType)
			{
				string key = de.Key.ToString();
				if (key.Length > 3)
				{
					switch (key.Substring(key.Length - 3))
					{
						case "001": { formId = key; } break;
						case "002": { sheetNo = key; } break;
					}
				}
			}

			//如果都找不到，找最後三碼是 001 002 的
			if (formId == String.Empty && sheetNo == String.Empty)
			{
				for (int i = 0; i < dscDataObj.Columns.Count; i++)
				{
					string key = dscDataObj.Columns[i].Name;
					if (key.Length > 3)
					{
						switch (key.Substring(key.Length - 3))
						{
							case "001": { formId = key; } break;
							case "002": { sheetNo = key; } break;
						}
					}
				}
			}
		}

		//管理程式要有刪除的功能
		protected override void after_delete(tw.com.dsc.dscDotNet.db.transaction.DBTransaction deleteTrans)
		{
			BackupDeleteRowInfo();
			base.after_delete(deleteTrans);
		}
		


		#region setBasicInfo , 設定表單的基本屬性
		protected override void basicInfo()
		{
			//這個作業的BOID
			HeadBOID = "MAWIODMFPAYMVE01";
			//作業代號
			TaskId = "MAWIODMFPAYMVE01";
			//有幾個單身 ex.0-->單檔, 1-->雙檔(一個單身), 2-->雙檔(二個單身)
			DetailDepth = 0;
		}
		#endregion setBasicInfo , 設定表單的基本屬性

		protected override void settingClientFunction()
		{
			#region ========= 表單 SettingClientFunctio =========

			//參數1.為原本的開窗方式  參數2.為樹狀的開窗
			string tWindowOpenStyle = objEFPara.EF_getCompanyParameterData("WindowOpenStyle").ToString();

			//單頭控制項
			switch (tWindowOpenStyle){
				case "2":
					string tPara = "RESAK§10§" + this.UserInfo.DepartmentId + "§§§";
					string tUrl = "../../_Common/EFDefOpen/F2MutipleFrame.aspx?open=single&value=";
					empl1.HtmImg.Attributes.Add("onclick", "if(!SingleSelectEmpl('" + tUrl + System.Web.HttpUtility.UrlEncode(tPara) + "','" + empl1.TxtInput.ClientID + "','員工代號_empl1')){return false;}");
					break;
				default:
					empl1.HtmImg.Attributes.Add("onclick",MIMJUtil.getClickParams("empl1_btn","empl1_txt","S"));
					break;
			}
			empl1.TxtInput.Attributes.Add("onblur",MIMJUtil.getBlurParams("empl1_txt","員工代號_empl1","empl1_txt"));
			empl1.TxtInput.Attributes.Add("onchange","AddtoHash('empl1_txt');");
			
			switch (tWindowOpenStyle){
				case "2":
					string tPara = "RESAK§10§" + this.UserInfo.DepartmentId + "§§§";
					string tUrl = "../../_Common/EFDefOpen/F2MutipleFrame.aspx?open=single&value=";
					empl2.HtmImg.Attributes.Add("onclick", "if(!SingleSelectEmpl('" + tUrl + System.Web.HttpUtility.UrlEncode(tPara) + "','" + empl2.TxtInput.ClientID + "','員工代號_empl2')){return false;}");
					break;
				default:
					empl2.HtmImg.Attributes.Add("onclick",MIMJUtil.getClickParams("empl2_btn","empl2_txt","S"));
					break;
			}
			empl2.TxtInput.Attributes.Add("onblur",MIMJUtil.getBlurParams("empl2_txt","員工代號_empl2","empl2_txt"));
			empl2.TxtInput.Attributes.Add("onchange","AddtoHash('empl2_txt');");
			
			string strmoney01_DoMathScript_mtotal_onChange=string.Empty;
			if(money01.TxtInput.Attributes["onchange"]!=null){strmoney01_DoMathScript_mtotal_onChange=money01.TxtInput.Attributes["onchange"].ToString().Trim(';');}
			if(strmoney01_DoMathScript_mtotal_onChange.Length>0)
				strmoney01_DoMathScript_mtotal_onChange+=";";
			money01.TxtInput.Attributes.Add("onchange",strmoney01_DoMathScript_mtotal_onChange+"domath_mtotal();");

			string strmoney01_DoMathScript_mtotal_onblur=string.Empty;
			if(money01.TxtInput.Attributes["onblur"]!=null){strmoney01_DoMathScript_mtotal_onblur=money01.TxtInput.Attributes["onblur"].ToString().Trim(';');}
			if(strmoney01_DoMathScript_mtotal_onblur.Length>0)
				strmoney01_DoMathScript_mtotal_onblur+=";";
			money01.TxtInput.Attributes.Add("onblur",strmoney01_DoMathScript_mtotal_onblur+"domath_mtotal();");

			string strmoney02_DoMathScript_mtotal_onChange=string.Empty;
			if(money02.TxtInput.Attributes["onchange"]!=null){strmoney02_DoMathScript_mtotal_onChange=money02.TxtInput.Attributes["onchange"].ToString().Trim(';');}
			if(strmoney02_DoMathScript_mtotal_onChange.Length>0)
				strmoney02_DoMathScript_mtotal_onChange+=";";
			money02.TxtInput.Attributes.Add("onchange",strmoney02_DoMathScript_mtotal_onChange+"domath_mtotal();");

			string strmoney02_DoMathScript_mtotal_onblur=string.Empty;
			if(money02.TxtInput.Attributes["onblur"]!=null){strmoney02_DoMathScript_mtotal_onblur=money02.TxtInput.Attributes["onblur"].ToString().Trim(';');}
			if(strmoney02_DoMathScript_mtotal_onblur.Length>0)
				strmoney02_DoMathScript_mtotal_onblur+=";";
			money02.TxtInput.Attributes.Add("onblur",strmoney02_DoMathScript_mtotal_onblur+"domath_mtotal();");

			string strmoney03_DoMathScript_mtotal_onChange=string.Empty;
			if(money03.TxtInput.Attributes["onchange"]!=null){strmoney03_DoMathScript_mtotal_onChange=money03.TxtInput.Attributes["onchange"].ToString().Trim(';');}
			if(strmoney03_DoMathScript_mtotal_onChange.Length>0)
				strmoney03_DoMathScript_mtotal_onChange+=";";
			money03.TxtInput.Attributes.Add("onchange",strmoney03_DoMathScript_mtotal_onChange+"domath_mtotal();");

			string strmoney03_DoMathScript_mtotal_onblur=string.Empty;
			if(money03.TxtInput.Attributes["onblur"]!=null){strmoney03_DoMathScript_mtotal_onblur=money03.TxtInput.Attributes["onblur"].ToString().Trim(';');}
			if(strmoney03_DoMathScript_mtotal_onblur.Length>0)
				strmoney03_DoMathScript_mtotal_onblur+=";";
			money03.TxtInput.Attributes.Add("onblur",strmoney03_DoMathScript_mtotal_onblur+"domath_mtotal();");

			string strmoney04_DoMathScript_mtotal_onChange=string.Empty;
			if(money04.TxtInput.Attributes["onchange"]!=null){strmoney04_DoMathScript_mtotal_onChange=money04.TxtInput.Attributes["onchange"].ToString().Trim(';');}
			if(strmoney04_DoMathScript_mtotal_onChange.Length>0)
				strmoney04_DoMathScript_mtotal_onChange+=";";
			money04.TxtInput.Attributes.Add("onchange",strmoney04_DoMathScript_mtotal_onChange+"domath_mtotal();");

			string strmoney04_DoMathScript_mtotal_onblur=string.Empty;
			if(money04.TxtInput.Attributes["onblur"]!=null){strmoney04_DoMathScript_mtotal_onblur=money04.TxtInput.Attributes["onblur"].ToString().Trim(';');}
			if(strmoney04_DoMathScript_mtotal_onblur.Length>0)
				strmoney04_DoMathScript_mtotal_onblur+=";";
			money04.TxtInput.Attributes.Add("onblur",strmoney04_DoMathScript_mtotal_onblur+"domath_mtotal();");

			string strmoney05_DoMathScript_mtotal_onChange=string.Empty;
			if(money05.TxtInput.Attributes["onchange"]!=null){strmoney05_DoMathScript_mtotal_onChange=money05.TxtInput.Attributes["onchange"].ToString().Trim(';');}
			if(strmoney05_DoMathScript_mtotal_onChange.Length>0)
				strmoney05_DoMathScript_mtotal_onChange+=";";
			money05.TxtInput.Attributes.Add("onchange",strmoney05_DoMathScript_mtotal_onChange+"domath_mtotal();");

			string strmoney05_DoMathScript_mtotal_onblur=string.Empty;
			if(money05.TxtInput.Attributes["onblur"]!=null){strmoney05_DoMathScript_mtotal_onblur=money05.TxtInput.Attributes["onblur"].ToString().Trim(';');}
			if(strmoney05_DoMathScript_mtotal_onblur.Length>0)
				strmoney05_DoMathScript_mtotal_onblur+=";";
			money05.TxtInput.Attributes.Add("onblur",strmoney05_DoMathScript_mtotal_onblur+"domath_mtotal();");


this.chkatt01.Attributes.Add("onclick", " if($('#chkatt01_chk')[0].checked){{$('#inv01').show();}} else{{$('#inv01').hide();}} ");
this.chkatt02.Attributes.Add("onclick", " if($('#chkatt02_chk')[0].checked){{$('#inv02').show();}} else{{$('#inv02').hide();}} ");
this.chkatt03.Attributes.Add("onclick", " if($('#chkatt03_chk')[0].checked){{$('#orderno').show();}} else{{$('#orderno').hide();}} ");
this.other.Attributes.Add("onclick", " if($('#other_chk')[0].checked){{$('#attother').show();}} else{{$('#attother').hide();}} ");
this.chpay_ctrolRadio0.Attributes.Add("onclick", "InitTriggerMust('" + "" + "');document.getElementById('chpay_txt').value = '0';");
this.chpay_ctrolRadio1.Attributes.Add("onclick", "InitTriggerMust('" + "" + "');document.getElementById('chpay_txt').value = '1';");
this.chpay_ctrolRadio2.Attributes.Add("onclick", "InitTriggerMust('" + "" + "');document.getElementById('chpay_txt').value = '2';");
this.rdtc_ctrolRadio0.Attributes.Add("onclick", "InitTriggerMust('" + "" + "');document.getElementById('rdtc_txt').value = '0';");
this.rdtc_ctrolRadio1.Attributes.Add("onclick", "InitTriggerMust('" + "" + "');document.getElementById('rdtc_txt').value = '1';");
this.rdtc_ctrolRadio2.Attributes.Add("onclick", "InitTriggerMust('" + "" + "');document.getElementById('rdtc_txt').value = '2';");
this.rdtc_ctrolRadio3.Attributes.Add("onclick", "InitTriggerMust('" + "" + "');document.getElementById('rdtc_txt').value = '3';");
this.rdtc_ctrolRadio4.Attributes.Add("onclick", "InitTriggerMust('" + "" + "');document.getElementById('rdtc_txt').value = '4';");
		#endregion ========= 表單 SettingClientFunctio =========
		}

		/// <summary>
		/// %%必填%%
		/// </summary>
		/// <param name="pMiMjManager"></param>
		protected override void buildMiMjManager(Hashtable pMiMjManager)
		{
						#region ========= 表單 buildMiMjManager =========
			pMiMjManager.Add("empl1_0", empl1);
			pMiMjManager.Add("empl2_0", empl2);
			#endregion ========= 表單 buildMiMjManager =========

		}

		///<summary>
		///圖片控制項
		///</summary>
		///<param name="pListImage"></param>
		protected override void settingImgAssistantInfo(System.Collections.Generic.List<DigiWinImgAssistant> pListImage)
		{
			#region ========= 表單 settingImgAssistantInfo =========

			base.settingImgAssistantInfo(pListImage);

		#endregion ========= 表單 settingImgAssistantInfo =========
		}

		

		//觀看表單原稿
		protected void linkBtnViewDraft_Click(object sender, EventArgs e)
		{
			//設定目前 表單代號，單號
			string formId = String.Empty;
			string sheetNo = String.Empty;
			SetFormSheetNo(ref formId, ref sheetNo);

			DscRow dscRow = ((DscDataObj)DscSession[TaskId + "_dataObj"]).NowRow;
			string url = String.Format("~/src/FRM/{0}/{0}.aspx?FormType=Sent&formStatus=Display&sheetNo={1}&CallProg={0}", dscRow[formId].Value, dscRow[sheetNo].Value);
			Response.Redirect(url);
		}

		#region 派送表單強化功能
		//2015/06/10;3.6.6.15;hiro;S00-20141225002,S00-20141225003;派送表單功能強化↓
/*
表單串連紀錄檔(resfc)
欄位代號		欄位名稱
*resfc001		前置表單代號
*resfc002		前置表單單號
*resfc003		後置表單代號
*resfc004		後置表單單號
resfc005		送單時間
resfc006		後置表單填表人
resfc007		後置表單表單關係人
resfc008		後置表單條件式
resfc009		前置表單狀態碼
resfc010		後置表單狀態碼					(1=送簽中; 2=同意[結案]; 3=不同意[結案]; 4=抽單[結案])
resfc011		可否重送後置表單狀態碼			(1=不可重 送; 2=可以重送)
resfc012		記錄後置表單重送單別單號欄位	記錄格式: FormID_SheetNo;FormID_SheetNo... 以 "_" 串接單別和單號, 以 ";" 來串接第一次和第二次重送資訊
*/
		#region 取得派送後置表單簽核資訊
		/// <summary>
		/// 取得最後一次派送後置表單的簽核資訊
		/// </summary>
		/// <param name="pPreFormID">前置表單代號</param>
		/// <param name="pPreFormSheetNo">前置表單單號</param>
		/// <param name="pDispatchFormID">派送後置表單代號</param>
		/// <param name="pDSClbl">顯示派送後置表單簽核資訊的Label控件</param>
		/// <param name="pApproveType">顯示類型：簽核狀態(ApproveStatus)、簽核結果(ApproveResult)</param>
		protected void GetDispatchFormLabelText(string pPreFormID, string pPreFormSheetNo, string pDispatchFormID, DscLabel pDSClbl, string pApproveType){
			try
			{
				pDSClbl.Visible=true;
				UserInfoClass objUserInfo = (UserInfoClass)Session["UserInfo"];
				string tLanguageType = objUserInfo.Language;
				string tCompanyDBName = objUserInfo.Company;
				DBCommand dbCommand = DscDBData.GetDataDBCommand();
				//執行派送多筆時，顯示最後一次的派迗表單流程資訊
				string tSQL = @"select LangRESDA020.$Lang$ as resda020,LangRESDA021.$Lang$ as resda021
from $EFDB$..resfc
left join $EFDB$..resda on resda001=resfc003 and resda002=resfc004
left join EFNETSYS..SYSComment LangRESDA020 on LangRESDA020.F0003=resda020 and LangRESDA020.F0002='EFWizard_resda020' and LangRESDA020.F0001='Combo'
left join EFNETSYS..SYSComment LangRESDA021 on LangRESDA021.F0003=resda021 and LangRESDA021.F0002='EFWizard_resda021' and LangRESDA021.F0001='Combo'
where resfc001=@resfc001 and resfc002=@resfc002 and resfc003=@resfc003 and ISNULL(resfc004,'')<>'' order by resfc004 desc";
				tSQL = tSQL.Replace("$Lang$", tLanguageType).Replace("$EFDB$", tCompanyDBName);
				dbCommand.AddParameter("resfc001", pPreFormID);
				dbCommand.AddParameter("resfc002", pPreFormSheetNo);
				dbCommand.AddParameter("resfc003", pDispatchFormID);
				DataTable dtRESFC = dbCommand.Query(tSQL);
				if (dtRESFC != null && dtRESFC.Rows.Count>0)
				{
					string tresda020Value = dtRESFC.Rows[0]["resda020"]==DBNull.Value?"":dtRESFC.Rows[0]["resda020"].ToString().Trim();
					string tresda021Value = dtRESFC.Rows[0]["resda021"]==DBNull.Value?"":dtRESFC.Rows[0]["resda021"].ToString().Trim();
					if(pApproveType=="ApproveStatus")
						pDSClbl.Text=tresda020Value;
					else if(pApproveType=="ApproveResult")
						pDSClbl.Text=tresda021Value;
				}
				else{
					pDSClbl.Text=MultiLanguage.GetComment("FD", "DSCLabel", "DispatchFormNotSent", tLanguageType);//未執行派送表單
				}
			}
			catch (Exception ex)
			{
				pDSClbl.Visible=false;
				//執行失敗則清空Label
				pDSClbl.Text="";
			}
		}
		#endregion 取得派送後置表單簽核資訊

		#region 設定派送表單相關按鈕是否啟用
		/// <summary>
		/// 設定派送表單相關按鈕是否啟用
		/// </summary>
		/// <param name="pPreFormID">前置表單代號</param>
		/// <param name="pPreFormSheetNo">前置表單單號</param>
		/// <param name="pDispatchFormID">派送後置表單代號</param>
		/// <param name="pDSCbtn">派送表單相關的Button控件</param>
		/// <param name="pRunOrShow">按鈕功能：執行派送表單(DoDispatchForm)、顯示後置派送表單(ShowDispatchForm)</param>
		protected void SetDispatchFormButtonIsEnabled(string pPreFormID, string pPreFormSheetNo, string pDispatchFormID, DscButton pDSCbtn, string pRunOrShow){
			try
			{
				pDSCbtn.Visible=true;
				string tSQL="";
				UserInfoClass objUserInfo = (UserInfoClass)Session["UserInfo"];
				string tLanguageType = objUserInfo.Language;
				string tCompanyDBName = objUserInfo.Company;
				DBCommand dbCommand = DscDBData.GetDataDBCommand();

				if(pRunOrShow=="DoDispatchForm"){
					//已經執行過派送表單，則設定執行派送表單的按鈕為不啟用(如果要讓它可以執行多次，就不用判斷了，直接啟用即可)
					pDSCbtn.Enabled = true;
					tSQL = @"select resfc004 from $EFDB$..resfc
where resfc001=@resfc001 and resfc002=@resfc002 and resfc003=@resfc003 and ISNULL(resfc004,'')<>''";
					tSQL = tSQL.Replace("$EFDB$", tCompanyDBName);
					dbCommand.AddParameter("resfc001", pPreFormID);
					dbCommand.AddParameter("resfc002", pPreFormSheetNo);
					dbCommand.AddParameter("resfc003", pDispatchFormID);
					DataTable dtRESFC = dbCommand.Query(tSQL);
					if (dtRESFC != null && dtRESFC.Rows.Count>0){
						string tConfirmSTR=MultiLanguage.GetComment("Message", "EFWizardForm", "ConfirmDispatchFormOverTimes", tLanguageType);//派送表單已存在，是否執行第$Times$次派送表單？
						tConfirmSTR=tConfirmSTR.Replace("$Times$", (dtRESFC.Rows.Count+1).ToString());
						pDSCbtn.Attributes.Add("onclick", string.Format("if(confirm('{0}')){{jsDoDispatch('{1}','{2}','{3}');}} event.returnValue = false;return false;",
																				tConfirmSTR,
																				pPreFormID,
																				pPreFormSheetNo,
																				pDispatchFormID));
					}
					else{
						pDSCbtn.Attributes.Add("onclick", string.Format("jsDoDispatch('{0}','{1}','{2}');event.returnValue = false;return false;",
																		pPreFormID,
																		pPreFormSheetNo,
																		pDispatchFormID));
					}
				}
				else if(pRunOrShow=="ShowDispatchForm"){
					tSQL = @"select top 1 *,resda031 from $EFDB$..resdd
left join $EFDB$..resda on resda001=@DispatchFormID and resda001=resdd001 and resda002=resdd002
where resdd001=@DispatchFormID and resdd002=(select top 1 resfc004 from $EFDB$..resfc where resfc001=@FormID and resfc002=@SheetNo and resfc003=@DispatchFormID and ISNULL(resfc004,'')<>'' order by resfc005 desc)
order by resdd003 desc";
					tSQL = tSQL.Replace("$EFDB$", tCompanyDBName);
					dbCommand.ClearParameters();
					dbCommand.AddParameter("FormID", pPreFormID);
					dbCommand.AddParameter("SheetNo", pPreFormSheetNo);
					dbCommand.AddParameter("DispatchFormID", pDispatchFormID);
					DataTable dtRESDD = dbCommand.Query(tSQL);
					if (dtRESDD != null && dtRESDD.Rows.Count>0){
						string tUrl="";
						string tMenuName="";
						tSQL = @"select Url,MenuName from Menu where MenuID=@MenuID";
						dbCommand.ClearParameters();
						dbCommand.AddParameter("MenuID", pDispatchFormID);
						DataTable dtMenu = dbCommand.Query(tSQL);
						if (dtMenu != null && dtMenu.Rows.Count>0){
							tUrl=dtMenu.Rows[0]["Url"]==DBNull.Value?"":dtMenu.Rows[0]["Url"].ToString().Trim();
							tMenuName=dtMenu.Rows[0]["MenuName"]==DBNull.Value?"":dtMenu.Rows[0]["MenuName"].ToString().Trim();
						}
						
						if(tUrl!=""){
							
							//已經執行過派送表單，且在resdd找得到流程資料，則設定顯示派送表單的按鈕為啟用
							pDSCbtn.Enabled = true;
							string tSheetNo=dtRESDD.Rows[0]["resdd002"]==DBNull.Value?"":dtRESDD.Rows[0]["resdd002"].ToString().Trim();
							string tFlowNo=dtRESDD.Rows[0]["resdd003"]==DBNull.Value?"":dtRESDD.Rows[0]["resdd003"].ToString().Trim();
							string tBranchNo=dtRESDD.Rows[0]["resdd004"]==DBNull.Value?"":dtRESDD.Rows[0]["resdd004"].ToString().Trim();
							string tSerialNo=dtRESDD.Rows[0]["resdd005"]==DBNull.Value?"":dtRESDD.Rows[0]["resdd005"].ToString().Trim();
							string tApproveNo=dtRESDD.Rows[0]["resdd006"]==DBNull.Value?"":dtRESDD.Rows[0]["resdd006"].ToString().Trim();
							string tSubject=dtRESDD.Rows[0]["resda031"]==DBNull.Value?"":dtRESDD.Rows[0]["resda031"].ToString().Trim();
							tUrl=tUrl.Replace("../../../FRM","../../FRM");
							//pDSCbtn.Attributes.Add("onclick", string.Format("alert('"+tUrl+"');event.returnValue = false;return false;"));

							bool bIsReSendForm=false;//檢查頁面是否不是從「顯示前置表單」按鈕開啟，才可以執行顯示的功能
							//if (Request["IsReSendForm"] != null){
							//	if (Request["IsReSendForm"].ToString().Trim() == "Y"){
							//		bIsReSendForm=true;
							//	}
							//}
							if ((Request["IsReSendForm"] != null && Request["IsReSendForm"] == "Y") || (Request["Action"]!=null && Request["Action"] == "ShowOriginal"))
							{
								bIsReSendForm=true;
							}


							if(!bIsReSendForm){
								//pDSCbtn.Attributes.Add("onclick", string.Format("if(checkTabExist()){{createTab('{0}?FormType=In&formStatus=Approve&sheetNo={1}&flowNo={2}&branchNo={3}&SerialNo={4}&ApproveNo={5}&Subject={6}&gCursor=3','{7}','{8}','100');}}event.returnValue = false;return false;",
								//pDSCbtn.Attributes.Add("onclick", string.Format("window.showModalDialog('{0}?FormType=In&formStatus=Approve&sheetNo={1}&flowNo={2}&branchNo={3}&SerialNo={4}&ApproveNo={5}&Subject={6}&gCursor=3', null, \"dialogHeight:600px;dialogWidth:900px;scrollbars=no;status=no;resizable=yes;\");event.returnValue = false;return false;",
								pDSCbtn.Attributes.Add("onclick", string.Format("createTab('{0}?FormType=Sent&formStatus=Display&Action=ShowOriginal&sheetNo={1}&flowNo={2}&branchNo={3}&SerialNo={4}&ApproveNo={5}&Subject={6}&gCursor=3','{7}','{8}','100');event.returnValue = false;return false;",
												tUrl,
												tSheetNo,
												tFlowNo,
												tBranchNo,
												tSerialNo,
												tApproveNo,
												tSubject,
												pDispatchFormID,
												tMenuName));
							}
							else{
								//pDSCbtn.Attributes.Add("onclick", "alert('此畫面不支援顯示前置表單功能!');event.returnValue = false;return false;");
								pDSCbtn.Enabled = false;
							}
						}
						else{
							//派送表單的Menu路徑設定錯誤
							pDSCbtn.Enabled = false;
						}
					}
					else{
						//派送表單未執行，則設定顯示派送表單的按鈕為不啟用
						pDSCbtn.Enabled = false;
					}
				}
			}
			catch (Exception ex)
			{
				pDSCbtn.Enabled = false;
				pDSCbtn.Visible = false;
				throw ex;
			}
		}
		#endregion 設定派送表單相關按鈕是否啟用
		//2015/06/10;3.6.6.15;hiro;S00-20141225002,S00-20141225003;派送表單功能強化↑
		#endregion 派送表單強化功能

		#region Web Form 設計工具產生的程式碼
		override protected void OnInit(EventArgs e)
		{
			InitializeComponent();
			base.registChildObj(Page);
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
		#endregion Web Form 設計工具產生的程式碼

		public string getEasyFlowDataFieldValue(string pSQLString,string pValue)
		{
			string tResult = "";
			try
			{
				UserInfoClass objUserInfo = (UserInfoClass)Session["UserInfo"];
				DBCommand dbCommand = DscDBData.GetDataDBCommand();
				bool bHaveTwinSpace = true;
				while(bHaveTwinSpace){
					if(pSQLString.IndexOf("  ")!=-1 || pSQLString.IndexOf("\r\n")!=-1){
						pSQLString=pSQLString.Replace("\r\n"," ").Replace("  "," ");
					}
					else{
						bHaveTwinSpace=false;
					}
				}
				int intFromPosition = pSQLString.ToLower().IndexOf("from");
				pSQLString = pSQLString.Substring(0, intFromPosition) + "from " + objUserInfo.Company.ToString().Trim() + ".." +pSQLString.Substring(intFromPosition+5);
				DataTable tDt = dbCommand.Query(pSQLString);
				if (tDt != null)
				{
					for (int i = 0; i < tDt.Rows.Count; i++)
					{
						tResult = tDt.Rows[0]["" + pValue + ""].ToString().Trim();
					}
				}
			}
			catch (Exception e)
			{
			}
			return tResult;
		}

		public string createEasyFlowDataTable(string pEFDBType, string pSQLString, string pValue, string pText)
		{
			bool bHaveTwinSpace = true;
			while(bHaveTwinSpace){
				if(pSQLString.IndexOf("  ")!=-1 || pSQLString.IndexOf("\r\n")!=-1){
					pSQLString=pSQLString.Replace("\r\n"," ").Replace("  "," ");
				}
				else{
					bHaveTwinSpace=false;
				}
			}

			string tResult = "";
			try
			{
				UserInfoClass objUserInfo = (UserInfoClass)Session["UserInfo"];
				DBCommand dbCommand = DscDBData.GetDataDBCommand();

				DataTable tDt = new DataTable();
				if(pEFDBType=="0"){
					string strCompanyDB = objUserInfo.Company;
					string strSYSDBConn = LoadConfig.SysDBConnString;
					string[] aryDBConn = strSYSDBConn.Split(';');
					int intDBConnLen = aryDBConn.Length;
					for(int i=0;i<intDBConnLen;i++){
						if(aryDBConn[i].IndexOf("database=")>-1){
							aryDBConn[i]="database="+strCompanyDB;
							break;
						}
					}
					string strCompanyDBConn = string.Empty;
					for(int i=0;i<intDBConnLen;i++){
						strCompanyDBConn+=aryDBConn[i]+";";
					}

					DBCommand dbCommand_company = new DBCommand(strCompanyDBConn);
					tDt = dbCommand_company.Query(pSQLString);
				}
				else
					tDt = dbCommand.Query(pSQLString);

				if (tDt != null)
				{
					for (int i = 0; i < tDt.Rows.Count; i++)
					{
						if (i != tDt.Rows.Count - 1)
							tResult += tDt.Rows[i]["" + pValue + ""].ToString().Trim() + "Φ" + tDt.Rows[i]["" + pText + ""].ToString().Trim() + "§";
						else
							tResult += tDt.Rows[i]["" + pValue + ""].ToString().Trim() + "Φ" + tDt.Rows[i]["" + pText + ""].ToString().Trim();
					}
				}
			}
			catch (Exception e)
			{
			}
			return tResult;
		}

		public string getSQLSERVERDataField(string pSQLString, string pConn, string pValue)
		{
			string tResult = "";
			try
			{
				DataSet tDs = new DataSet();
				SqlConnection tDbConnection = new SqlConnection(pConn);//來源資料庫連線資訊
				tDbConnection.Open();
				SqlDataAdapter tAdpt = new SqlDataAdapter(pSQLString, pConn);//來源資料表配接器
				tAdpt.Fill(tDs, "Result");
				DataTable tDt = tDs.Tables["Result"];//離線來源資料"表"生出
				if (tDt != null)
				{
					for (int i = 0; i < tDt.Rows.Count; i++)
					{
						tResult = tDt.Rows[0]["" + pValue + ""].ToString().Trim();
					}
				}
			}
			catch (Exception e)
			{
			}
			return tResult;
		}

		public string createSQLSERVERDataTable(string pSQLString, string pConn, string pValue, string pText)
		{
			string tResult = "";
			try
			{
				DataSet tDs = new DataSet();
				SqlConnection tDbConnection = new SqlConnection(pConn);//來源資料庫連線資訊
				tDbConnection.Open();
				SqlDataAdapter tAdpt = new SqlDataAdapter(pSQLString, pConn);//來源資料表配接器
				tAdpt.Fill(tDs, "Result");
				DataTable tDt = tDs.Tables["Result"];//離線來源資料"表"生出

				if (tDt != null)
				{
					for (int i = 0; i < tDt.Rows.Count; i++)
					{
						if (i != tDt.Rows.Count - 1)
							tResult += tDt.Rows[i]["" + pValue + ""].ToString().Trim() + "Φ" + tDt.Rows[i]["" + pText + ""].ToString().Trim() + "§";
						else
							tResult += tDt.Rows[i]["" + pValue + ""].ToString().Trim() + "Φ" + tDt.Rows[i]["" + pText + ""].ToString().Trim();
					}
				}
			}
			catch (Exception e)
			{
			}
			return tResult;
		}

		public string getOracleDataField(string pSQLString, string pConn, string pValue)
		{
			string tResult = "";
			try
			{
				DataSet tDs = new DataSet();
				OracleConnection tDbConnection = new OracleConnection(pConn);//來源資料庫連線資訊
				tDbConnection.Open();
				OracleDataAdapter tAdpt = new OracleDataAdapter(pSQLString, pConn);//來源資料表配接器
				tAdpt.Fill(tDs, "Result");
				DataTable tDt = tDs.Tables["Result"];//離線來源資料"表"生出

				if (tDt != null)
				{
					for (int i = 0; i < tDt.Rows.Count; i++)
					{
						tResult = tDt.Rows[0]["" + pValue + ""].ToString().Trim();
					}
				}
			}
			catch (Exception e)
			{
			}
			return tResult;
		}

		public string createOracleDataTable(string pSQLString, string pConn, string pValue, string pText)
		{
			string tResult = "";
			try
			{
				DataSet tDs = new DataSet();
				OracleConnection tDbConnection = new OracleConnection(pConn);//來源資料庫連線資訊
				tDbConnection.Open();
				OracleDataAdapter tAdpt = new OracleDataAdapter(pSQLString, pConn);//來源資料表配接器
				tAdpt.Fill(tDs, "Result");
				DataTable tDt = tDs.Tables["Result"];//離線來源資料"表"生出

				if (tDt != null)
				{
					for (int i = 0; i < tDt.Rows.Count; i++)
					{
						if (i != tDt.Rows.Count - 1)
							tResult += tDt.Rows[i]["" + pValue + ""].ToString().Trim() + "Φ" + tDt.Rows[i]["" + pText + ""].ToString().Trim() + "§";
						else
							tResult += tDt.Rows[i]["" + pValue + ""].ToString().Trim() + "Φ" + tDt.Rows[i]["" + pText + ""].ToString().Trim();
					}
				}
			}
			catch (Exception e)
			{
			}
			return tResult;
		}

		public string getAccessDataField(string pSQLString, string pConn, string pValue)
		{
			string tResult = "";
			try
			{
				DataSet tDs = new DataSet();
				OleDbConnection tDbConnection = new OleDbConnection(pConn);//來源資料庫連線資訊
				tDbConnection.Open();
				OleDbDataAdapter tAdpt = new OleDbDataAdapter(pSQLString, pConn);//來源資料表配接器
				tAdpt.Fill(tDs, "Result");
				DataTable tDt = tDs.Tables["Result"];//離線來源資料"表"生出
				if (tDt != null)
				{
					for (int i = 0; i < tDt.Rows.Count; i++)
					{
						tResult = tDt.Rows[0]["" + pValue + ""].ToString().Trim();
					}
				}
			}
			catch (Exception e)
			{
			}
			return tResult;
		}

		public string createAccessDataTable(string pSQLString, string pConn, string pValue, string pText)
		{
			string tResult = "";
			try
			{
				DataSet tDs = new DataSet();
				OleDbConnection tDbConnection = new OleDbConnection(pConn);//來源資料庫連線資訊
				tDbConnection.Open();
				OleDbDataAdapter tAdpt = new OleDbDataAdapter(pSQLString, pConn);//來源資料表配接器
				tAdpt.Fill(tDs, "Result");
				DataTable tDt = tDs.Tables["Result"];//離線來源資料"表"生出

				if (tDt != null)
				{
					for (int i = 0; i < tDt.Rows.Count; i++)
					{
						if (i != tDt.Rows.Count - 1)
							tResult += tDt.Rows[i]["" + pValue + ""].ToString().Trim() + "Φ" + tDt.Rows[i]["" + pText + ""].ToString().Trim() + "§";
						else
							tResult += tDt.Rows[i]["" + pValue + ""].ToString().Trim() + "Φ" + tDt.Rows[i]["" + pText + ""].ToString().Trim();
					}
				}
			}
			catch (Exception e)
			{
			}
			return tResult;
		}

		public string getODBCDataField(string pSQLString, string pConn, string pValue)
		{
			string tResult = "";
			try
			{
				DataSet tDs = new DataSet();
				OdbcConnection tDbConnection = new OdbcConnection(pConn);//來源資料庫連線資訊
				tDbConnection.Open();
				OdbcDataAdapter tAdpt = new OdbcDataAdapter(pSQLString, pConn);//來源資料表配接器
				tAdpt.Fill(tDs, "Result");
				DataTable tDt = tDs.Tables["Result"];//離線來源資料"表"生出

				if (tDt != null)
				{
					for (int i = 0; i < tDt.Rows.Count; i++)
					{
						tResult = tDt.Rows[0]["" + pValue + ""].ToString().Trim();
					}
				}
			}
			catch (Exception e)
			{
			}
			return tResult;
		}

		public string createODBCDataTable(string pSQLString, string pConn, string pValue, string pText)
		{
			string tResult = "";
			try
			{
				DataSet tDs = new DataSet();
				OdbcConnection tDbConnection = new OdbcConnection(pConn);//來源資料庫連線資訊
				tDbConnection.Open();
				OdbcDataAdapter tAdpt = new OdbcDataAdapter(pSQLString, pConn);//來源資料表配接器
				tAdpt.Fill(tDs, "Result");
				DataTable tDt = tDs.Tables["Result"];//離線來源資料"表"生出

				if (tDt != null)
				{
					for (int i = 0; i < tDt.Rows.Count; i++)
					{
						if (i != tDt.Rows.Count - 1)
							tResult += tDt.Rows[i]["" + pValue + ""].ToString().Trim() + "Φ" + tDt.Rows[i]["" + pText + ""].ToString().Trim() + "§";
						else
							tResult += tDt.Rows[i]["" + pValue + ""].ToString().Trim() + "Φ" + tDt.Rows[i]["" + pText + ""].ToString().Trim();
					}
				}
			}
			catch (Exception e)
			{
			}
			return tResult;
		}

		public bool createSelectItemFromDB(string pReturnValue, DscDropDownList pDDL)
		{
			bool tRet = false;
			string[] temptArray = pReturnValue.Split('§');
			string[] tArray;
			string tValue = "";
			string tText = "";
			int iCount = temptArray.Length;
			ListItem tList = null;
			try
			{
				for (int i = 0; i < temptArray.Length; i++)
				{
					tArray = temptArray[i].Split('Φ');
					tValue = tArray[0].Trim();  //Value (內存)
					tText = tArray[1].Trim();   //Text  (外顯)
					if (!string.IsNullOrEmpty(tValue))
					{
						tList = new ListItem(tText, tValue);
						pDDL.Items.Add(tList);
					}
				}
				tRet = true;
			}
			catch (Exception e)
			{
				tRet = false;
			}
			return tRet;
		}

		#region createDDLSaveValueAndShowTextFromDB 產生下拉
		//2017/12/18;6.1.6.4;hiro;S00-20171218001;下拉控件資料來源，內存外顯請改為動態取得↓
		/// <summary>
		/// 產生下拉控件於settingHeaderShown所需內存外顯對應字串
		/// </summary>
		/// <param name="pReturnValue">從資料庫來源取得的選項字串</param>
		/// <param name="tSaveValueAndShowText">要放到settingHeaderShown對應該下拉控件的字串</param>
		/// <returns>true=成功; false=失敗</returns>
		public bool createDDLSaveValueAndShowTextFromDB(string pReturnValue,ref string tSaveValueAndShowText)
		{
			string[] aryDDLItems = pReturnValue.Split('§');
			string[] aryKeyAndShow;
			string tSaveValue = "";
			string tShowText = "";
			int iCount = aryDDLItems.Length;
			try
			{
				tSaveValueAndShowText="";
				foreach(string tEachDDLItem in aryDDLItems){
					aryKeyAndShow =tEachDDLItem.Split('Φ');
					if (aryKeyAndShow[0].Trim()!="")
					{
						tSaveValue = aryKeyAndShow[0].Trim();	//內存
						tShowText = aryKeyAndShow[1].Trim();	//外顯
						if(tSaveValueAndShowText!="")
							tSaveValueAndShowText+="§";
						tSaveValueAndShowText+=tSaveValue+"="+tShowText;
					}
				}
				return true;
			}
			catch (Exception e)
			{
				return false;
			}
		}
		//2017/12/18;6.1.6.4;hiro;S00-20171218001;下拉控件資料來源，內存外顯請改為動態取得↑
		#endregion createDDLSaveValueAndShowTextFromDB 產生下拉式選項的值

		//2013/06/07:3.6.1.4:hiro:S00-20130401009:增加數值自動轉換大寫金額格式↓
		#region 從CS取得定位後的數值(JS超出16進位會失真)
		/// <summary>
		/// 從CS取得定位後的數值
		/// </summary>
		/// <param name="pNumber">要轉換的數值</param>
		/// <param name="pDecimalPlaces">小數位</param>
		/// <returns>
		/// 回傳定位後的數值
		/// </returns>
		[AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
		public string ajaxGetFixedNum(string pNumber, int pDecimalPlaces)
		{
			decimal decimalNumber=0;
			decimal.TryParse(pNumber, out decimalNumber);
			if(pDecimalPlaces>2)
				pDecimalPlaces=2;//只處理到角分
			decimalNumber = Math.Round(decimalNumber, pDecimalPlaces, MidpointRounding.AwayFromZero);
			return decimalNumber.ToString();
		}
		#endregion 從CS取得定位後的數值(JS超出16進位會失真)

		#region 數值轉大寫金額格式
		/// <summary>
		/// 數值轉大寫金額格式
		/// </summary>
		/// <param name="pNumber">要轉換的數值</param>
		/// <returns>
		/// 回傳轉換完成的大寫金額格式
		/// </returns>
		[AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
		public string ajaxGetMoneyWord(string pNumber)
		{
			string strReturn="";
			UserInfoClass objUserInfo = (UserInfoClass)Session["UserInfo"];
			string tLanguageType = objUserInfo.Language;

			string[] aryNumMatchSTRING = new string[10];
			string[] aryInterPosition = new string[16];
			string[] aryDecimalPosition = new string[4];
			decimal decimalNumber=0;
			decimal.TryParse(pNumber, out decimalNumber);
			if(tLanguageType=="Lang03"){
				//簡體中文
				aryNumMatchSTRING=new string[]{"零","壹","贰","叁","肆","伍","陆","柒","捌","玖"};
				aryInterPosition=new string[]{"整","元","拾","佰","仟","万","拾","佰","仟","亿","拾","佰","仟","兆","拾","佰","仟"};
				aryDecimalPosition=new string[]{"角","分","厘","毫"};

				if (pNumber.IndexOf("-") > -1)
				{
					strReturn="负";
					decimalNumber=decimalNumber*(-1);//去除負號後面再來做轉換
				}
			}
			else if(tLanguageType=="Lang02"){
				//英文(格式待確認，先不做處理)
				return pNumber;
			}
			else{
				//繁體中文
				aryNumMatchSTRING=new string[]{"零","壹","貳","参","肆","伍","陸","柒","捌","玖"};
				aryInterPosition=new string[]{"整","圓","拾","佰","仟","萬","拾","佰","仟","億","拾","佰","仟","兆","拾","佰","仟"};
				aryDecimalPosition=new string[]{"角","分","厘","毫"};

				if(pNumber.IndexOf("-")>-1){
					strReturn="負";
					decimalNumber=decimalNumber*(-1);//去除負號後面再來做轉換
				}
			}

			string strIntegerSTR="";
			string strDecimalSTR="";
			string[] aryNumber = decimalNumber.ToString().Split('.');
			if(aryNumber.Length>1){
				//含小數位
				strIntegerSTR = aryNumber[0];
				strDecimalSTR = aryNumber[1];
			}
			else{
				strIntegerSTR = decimalNumber.ToString();
			}

			int intIntegerLenth = strIntegerSTR.Length;
			int intDecimalLenth = strDecimalSTR.Length;
			string strCharacters="";
			int intCharacters=0;
			string strNumMatchWord="";
			string strPositionWord="";
			string strSetZeroCTR="";
			int intZeroTime=0;
			for(int i=0;i<intIntegerLenth;i++){
				strCharacters=strIntegerSTR.Substring(i, 1);//取出需轉換的某一位的值
				intCharacters = Convert.ToInt32(strCharacters);

				strNumMatchWord=aryNumMatchSTRING[intCharacters];//大寫數字
				strPositionWord=aryInterPosition[intIntegerLenth-i];//位數字串

				if(intCharacters==0){
					++intZeroTime;
					strSetZeroCTR=aryNumMatchSTRING[0];
					if((intIntegerLenth-i) % 4 ==1){
						if(intZeroTime<4){
							//關鍵字不用加零，但是要寫出關鍵字，4位數都為0例外
							strReturn+=strPositionWord;
						}
						else if(i==intIntegerLenth-1){
							strReturn+=aryInterPosition[1];//一定要加圓/元
						}
						strSetZeroCTR="";
						intZeroTime=0;
					}
				}
				else{
					intZeroTime=0;
					strReturn+=strSetZeroCTR;
					strReturn+=aryNumMatchSTRING[intCharacters];
					strReturn+=aryInterPosition[intIntegerLenth-i];
					strSetZeroCTR="";
				}
			}

			if(strDecimalSTR=="" || strDecimalSTR=="0" || strDecimalSTR=="00"){
				strReturn+=aryInterPosition[0];//沒有小數，最後加上“整”
			}
			else{
				for(int i=0;i<intDecimalLenth;i++){
					strCharacters=strDecimalSTR.Substring(i, 1);//取出需轉換的某一位的值
					intCharacters = Convert.ToInt32(strCharacters);
					if(intCharacters!=0){
						strReturn+=aryNumMatchSTRING[intCharacters];
						strReturn+=aryDecimalPosition[i];
					}
				}

			}

			if(decimalNumber==0){
				//零元整
				strReturn=aryNumMatchSTRING[0]+aryInterPosition[1]+aryInterPosition[0];
			}

			return strReturn;
		}
		#endregion 數值轉大寫金額格式
		//2013/06/07:3.6.1.4:hiro:S00-20130401009:增加數值自動轉換大寫金額格式↑

		#region 取得日期時間相差天數、小時
		//2012/11/28:3.5.1.34:hiro:S00-20120321002:1.增加日期、日期時間計算功能。↓
		[AjaxPro.AjaxMethod(AjaxPro.HttpSessionStateRequirement.ReadWrite)]
		public string ajaxGetDiffDateTimeValue(string pStartDateTime,string pEndDateTime,string pCompareType)
		{
			string tReturn="0";
			try{
				if(pCompareType=="yyyyMMdd"){
					DateTime StartDateTime = DateTime.ParseExact(pStartDateTime, "yyyyMMdd", null, System.Globalization.DateTimeStyles.AllowWhiteSpaces);
					DateTime EndDateTime = DateTime.ParseExact(pEndDateTime, "yyyyMMdd", null, System.Globalization.DateTimeStyles.AllowWhiteSpaces);
					TimeSpan DifferenceTime = EndDateTime.Subtract(StartDateTime); //日期相減
					//2013/04/16:3.5.1.60:hiro:S00-20130329001:修改日期計算，天數相減計算結果加1↓
					//tReturn = DifferenceTime.TotalDays.ToString();
					tReturn = (DifferenceTime.TotalDays+1).ToString();
					//2013/04/16:3.5.1.60:hiro:S00-20130329001:修改日期計算，天數相減計算結果加1↑
				}
				else if(pCompareType=="HHmm"){
					DateTime StartDateTime = DateTime.ParseExact(DateTime.Now.ToString("yyyyMMdd")+pStartDateTime+"00", "yyyyMMddHHmmss", null, System.Globalization.DateTimeStyles.AllowWhiteSpaces);
					DateTime EndDateTime = DateTime.ParseExact(DateTime.Now.ToString("yyyyMMdd")+pEndDateTime+"00", "yyyyMMddHHmmss", null, System.Globalization.DateTimeStyles.AllowWhiteSpaces);
					TimeSpan DifferenceTime = EndDateTime.Subtract(StartDateTime); //日期相減
					tReturn = DifferenceTime.TotalHours.ToString();
				}
			}
			catch{
				tReturn="0";
			}
			return tReturn;
		}
		//2012/11/28:3.5.1.34:hiro:S00-20120321002:1.增加日期、日期時間計算功能。↑
		#endregion 取得日期時間相差天數、小時

#region 自訂Ajax
		
		#endregion 自訂Ajax
	}
}