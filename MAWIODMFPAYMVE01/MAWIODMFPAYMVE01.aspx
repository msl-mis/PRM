<%@ Page Language="c#" CodeFile="MAWIODMFPAYMVE01.aspx.cs" AutoEventWireup="false" enableEventValidation="false" Inherits="tw.com.dsc.easyflowDotNet.program.MAWIODMFPAYMVE01" %>
<%@ Register TagPrefix="uc1" TagName="gridUserControl" Src="../../_Common/PlatformUtil/KernelPage/Grid/gridUserControl.ascx" %>
<%@ Register TagPrefix="iewc" Namespace="Microsoft.Web.UI.WebControls" Assembly="Microsoft.Web.UI.WebControls" %>
<%@ Register TagPrefix="cc1" Namespace="tw.com.dsc.dscDotNet.dscWebControls" Assembly="PlatformUtil" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>
		<asp:literal id="LiteralTitle" runat="server"></asp:literal>
	</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta content="Microsoft Visual Studio .NET 7.1" name="GENERATOR" />
	<meta content="C#" name="CODE_LANGUAGE" />
	<meta content="JavaScript" name="vs_defaultClientScript" />
	<meta content="http://schemas.microsoft.com/intellisense/ie5" name="vs_targetSchema" />
	<!--CSS-->
	<link href="../../_Common/CSS/EasyFlow.css" type="text/css" rel="stylesheet" />
	<link href="../../_Common/PlatformUtil/Resource/CSS/MyCss.css" type="text/css" rel="stylesheet" />
	<link href="../../_Common/PlatformUtil/Resource/CSS/grid.css" type="text/css" rel="stylesheet" />
	<link href="../../_Common/PlatformUtil/Resource/CSS/grid_columns.css" type="text/css" rel="stylesheet" />
	<!--JavaScript-->
	<script src="../../_Common/PlatformUtil/Resource/JS/grid.js" type="text/javascript"></script>
	<script src="../../_Common/PlatformUtil/Resource/JS/paging1.js" type="text/javascript"></script>
	<script src="../../_Common/PlatformUtil/Resource/JS/BlackBox.js" type="text/javascript"></script>
	<script src="../../_Common/PlatformUtil/Resource/JS/hash.js" type="text/javascript"></script>
	<script src="../../_Common/PlatformUtil/Resource/JS/baseFixed.js" type="text/javascript"></script>
	<script src="../../_Common/PlatformUtil/Resource/JS/DivControl.js" type="text/javascript"></script>
	<script src="../../_Common/PlatformUtil/Resource/JS/myOpenDate.js" type="text/javascript"></script>
	<script src="../../_Common/PlatformUtil/Resource/JS/method.js" type="text/javascript"></script>
	<script src="../../_Common/PlatformUtil/Resource/JS/KeyCheck.js" type="text/javascript"></script>
	<script src="../../_Common/PlatformUtil/Resource/JS/I18N.js" type="text/javascript"></script>
	<script type="text/javascript"><!--
		var isFinished = false;
		function bodyLoad()
		{
			<asp:literal id="LiteralMsg" runat="server"></asp:literal>;
			<asp:Literal ID="LiteralHideCoverDiv" Runat=server></asp:Literal>;
			isFinished =true;
		}

		//2010/12/01:3.2.1.4:hiro:A00-20101201001:修正表單設計精靈用到多選開窗欄位，使用管理程式產生出來的管理程式出現錯誤↓
		function getMultiOpenWindowValues(setField)
		{
			if(document.getElementById("edReceiver_txt")!=null && document.getElementById("edReceiver_txt").value != null && document.getElementById("edReceiver_txt").value != "")
			{
				var tValueA = unescape(document.getElementById("edReceiver_txt").value);		   
				document.getElementById(setField).value = tValueA.replace(/├/g,";").replace(/§/g,"-");
				document.getElementById("edReceiver_txt").value = "";
			}
		}
		//2010/12/01:3.2.1.4:hiro:A00-20101201001:修正表單設計精靈用到多選開窗欄位，使用管理程式產生出來的管理程式出現錯誤↑
	--></script>
	<!--2011/01/13:3.2.1.8:hiro:S00-20110112001:修正管理程式欄位計算功能↓-->
	<script src="../../_Common/JS/jquery-Released.js" type="text/javascript"></script>
	<!--2013/01/24:3.5.1.44:hiro:S00-20130109001:雙檔作業的單身，支援組合多選開窗。-->
	<script src="../../_Common/JS/EFCommonFunction.js" type="text/javascript"></script>
	<script src="MAWIODMFPAYMVE01.js" type="text/javascript"></script>
	<!--2011/01/13:3.2.1.8:hiro:S00-20110112001:修正管理程式欄位計算功能↑-->
	
</head>
<body class="badybg2" leftmargin="0" topmargin="0" onload="setIndexChange();bodyLoad();autoMJtest();">
	<asp:Literal ID="LiteralCoverDiv" runat="server"></asp:Literal>
	<form id="Form1" method="post" runat="server">
		<!--ToolBar Area -->
		<table class="ToolBar" id="toolbarTable" cellspacing="0" cellpadding="5"
			style="width: 100%" runat="server">
			<tr>
				<td valign="middle" style="width: 25px; height: 30px;">
					<img src="../../_Common/AppUtil/Themes/images/Public/icon_01.jpg" />
				</td>
				<td style="font-size: 10pt; width: 250px;">
					<cc1:DscLabel ID="lblTitle" runat="server" Width="100%" LangText="" Text=""  F0001="FD" F0002="MAWIODMFPAYMVE01" F0003="lblTitle">
						<Comment F0001="" F0002="" F0003="">
						</Comment>
					</cc1:DscLabel>
				</td>
				<td id="toolbarTableTD" align="right" height="25"></td>
			</tr>
		</table>
		<!--單檔架構 -->
		<div id="createRecord" style="display: block" runat="server">
			<!--EcPnlMaster區塊 -->
			<cc1:DscPanel ID="ecPnlMaster" runat="server" Width="100%" FrmDefineKeys-BOID="MAWIODMFPAYMVE01"
				FrmDefineKeys-FrmID="FrmMAWIODMFPAYMVE01" FrmDefineKeys-FrmType="Query" FrmDefine-FrmID="FrmMAWIODMFPAYMVE01"
				FrmDefine-BOID="MAWIODMFPAYMVE01" FrmID="FrmMAWIODMFPAYMVE01" BOID="MAWIODMFPAYMVE01" BorderStyle="None"
				BorderColor="Transparent" BorderWidth="0px" IniHTML='&#10;<div style="OVERFLOW: auto; WIDTH: 100%; POSITION: relative; HEIGHT: 100%" ms_positioning="GridLayout"></div>'
				Height="250px">
<div style="display:none">
				<table class="divToolBar" width="100%" style="height:25px;">
				<tr><td >
				<iewc:TabStrip id="TabStrip1" runat="server" 
					TabDefaultStyle="background-image:url(../../_Common/AppUtil/Themes/images/Menu/Tbtn01.gif);"
					TabHoverStyle="background-image:url(../../_Common/AppUtil/Themes/images/Menu/Tbtn01.gif);"
					TabSelectedStyle="background-image:url(../../_Common/AppUtil/Themes/images/Menu/Tbtn02.gif);"
					CssClass="divToolBar2" >
					<iewc:Tab ID='headDefault' Text='單頭頁籤1' DefaultStyle='width:100px; height:27px;vertical-align:middle; text-align:center;'></iewc:Tab>

				</iewc:TabStrip>
				</td></tr></table>
</div>
				<table class="ToolBar" style="vertical-align:bottom; width:100%; height:20px; display:none;">
					<tr>
						<td valign="bottom">
							<table cellpadding="0" cellspacing="0">
								<tr>
									<td align="right"><asp:Image ID="Image1" runat="server" ImageUrl="../../_Common/AppUtil/Themes/images/Program/F_01.gif" /></td>
									<td style="background-image:url(../../_Common/AppUtil/Themes/images/Program/F_02.gif); background-repeat:repeat-x; background-position:center;"><asp:Label ID="lblTabStrip1" runat="server" Text="Label"></asp:Label></td>
									<td align="left"><asp:Image ID="Image2" runat="server" ImageUrl="../../_Common/AppUtil/Themes/images/Program/F_03.gif" /></td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<asp:LinkButton ID='linkBtnViewDraft' runat='server' ForeColor='Blue' OnClick='linkBtnViewDraft_Click'>LinkButton</asp:LinkButton>
					<cc1:Dscpanel id='divheadDefault' style='DISPLAY: block' runat='server' Width='100%' Height='926px' BackColor='Transparent'>
						<div class='TabPage' style='POSITION: relative; HEIGHT: 926px; left: 0px; top: 0px;' >
							<asp:ValidationSummary id='ValidationSummaryHead01' style='Z-INDEX: 100; POSITION: absolute; LEFT: 745px; TOP: 7px;' runat='server' ShowSummary='False' ShowMessageBox='True'></asp:ValidationSummary>
<div style='display: none;'>
	<cc1:DscTextBox id='resda019' runat='server'>
		<FrmFieldKeys BOID='MAWIODMFPAYMVE01' FieldName='resda019' FrmID='FrmMAWIODMFPAYMVE01' />
		<TitleStyle Width='180px'></TitleStyle>
		<InputStyle Width='120px' />
	</cc1:DscTextBox>
	<cc1:DscDropDownList ID='resda020' runat='server' AutoPostBack='False'
		border='0' cellpadding='2' cellspacing='0' DDLInput_TabIndex='3'
		InputEnabled='True' SelectedIndex='0' ShowTitle='True'
		TitleType='TitleLang01' Title='簽核狀態:' TitleWidth='120px'>
		<FrmFieldKeys BOID='MAWIODMFPAYMVE01' FieldName='resda020' FrmID='FrmMAWIODMFPAYMVE01' />
		<ReturnTextBoxStyle Width='120px' />
		<TitleStyle Width='180px' />
		<Items>
			<asp:ListItem Value='1' Selected='True'>未傳送</asp:ListItem>
			<asp:ListItem Value='2'>簽核中</asp:ListItem>
			<asp:ListItem Value='3'>已簽核</asp:ListItem>
			<asp:ListItem Value='4'>已抽單</asp:ListItem>
		</Items>
		<InputStyle Width='120px' />
	</cc1:DscDropDownList>
</div>
<div style='display: none;'>
	<cc1:DscDropDownList ID='resda021' runat='server' AutoPostBack='False'
		border='0' cellpadding='2' cellspacing='0' DDLInput_TabIndex='3'
		InputEnabled='True' SelectedIndex='0' ShowTitle='True'
		TitleType='TitleLang01' Title='簽核結果:' TitleWidth='120px'>
		<FrmFieldKeys BOID='MAWIODMFPAYMVE01' FieldName='resda021' FrmID='FrmMAWIODMFPAYMVE01' />
		<ReturnTextBoxStyle Width='120px' />
		<TitleStyle Width='180px' />
		<Items>
			<asp:ListItem Value='1' Selected='True'>未完成</asp:ListItem>
			<asp:ListItem Value='2'>同意</asp:ListItem>
			<asp:ListItem Value='3'>不同意</asp:ListItem>
			<asp:ListItem Value='4'>已抽單</asp:ListItem>
		</Items>
		<InputStyle Width='120px' />
	</cc1:DscDropDownList>
</div>

							<!--此區間放入單頭頁籤 一 的各個dsc元件-->

<cc1:DscTextBox id='odmfpaymve01001' runat='server' title='表單代號'
	style='display: none; Z-INDEX: 101; POSITION: absolute; LEFT: 245px; TOP: 16px;'
	TxtInput_TabIndex='0'>
	<INPUTSTYLE Width='120px'></INPUTSTYLE>
	<TITLESTYLE Width='110px'></TITLESTYLE>
	<FRMFIELDKEYS FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='odmfpaymve01001'></FRMFIELDKEYS>
</cc1:DscTextBox>
<cc1:DscTextBox id='odmfpaymve01002' runat='server' title='表單單號'
	style='display: none; Z-INDEX: 102; POSITION: absolute; LEFT: 245px; TOP: 49px;'
	TxtInput_TabIndex='0'>
	<INPUTSTYLE Width='120px'></INPUTSTYLE>
	<TITLESTYLE Width='110px'></TITLESTYLE>
	<FRMFIELDKEYS FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='odmfpaymve01002'></FRMFIELDKEYS>
</cc1:DscTextBox>

<cc1:DscDateAssistant2 ID='datetime1' runat='server' Title='datetime1' ShowTitle='False'
	style="POSITION: absolute; left: 611px; top: 110px; z-index: 663;" 
	TxtInput_TabIndex='101' 
	DisplayMode='yyyyMMdd' DateSaveFormat='String' DateLan='ChristianEra' datePagePath='../../_Common/PlatformUtil/Resource/ASP/' 
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/calender.gif'>
	<InputStyle Width='103px' Height='23px' CssClass='Edit20' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='datetime1'></FrmFieldKeys>
</cc1:DscDateAssistant2>
<cc1:DscTextBox id='dept' runat='server' title='部門' ShowTitle='False'
	style="Z-INDEX:698; POSITION: absolute; LEFT: 91px; TOP: 154px;"
	TxtInput_TabIndex='102'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='dept'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='125px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='username' runat='server' title='請款人' ShowTitle='False'
	style="Z-INDEX:679; POSITION: absolute; LEFT: 318px; TOP: 153px;"
	TxtInput_TabIndex='103'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='username'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='111px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='payee' runat='server' title='受款人' ShowTitle='False'
	style="Z-INDEX:677; POSITION: absolute; LEFT: 516px; TOP: 139px;"
	TxtInput_TabIndex='104' TextMode='MultiLine'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='payee'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='180px' Height='50px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<div style="display:none;">
<cc1:DscCheckBox ID='chkitem01' runat='server' Text='一般費用 Chi phí thường' ShowTitle='False'
	Style="z-index:662; position: absolute; left: 709px; top: 169px;"
	CheckBoxInput_TabIndex='105'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='16px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='chkitem01'></FrmFieldKeys>
</cc1:DscCheckBox>
</div>
<div style="display:none;">
<cc1:DscCheckBox ID='chkitem02' runat='server' Text='資產 Tài sản' ShowTitle='False'
	Style="z-index:659; position: absolute; left: 787px; top: 168px;"
	CheckBoxInput_TabIndex='106'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='16px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='chkitem02'></FrmFieldKeys>
</cc1:DscCheckBox>
</div>
<div style="display:none;">
<cc1:DscCheckBox ID='chkitem03' runat='server' Text='原物料 NVL' ShowTitle='False'
	Style="z-index:661; position: absolute; left: 732px; top: 173px;"
	CheckBoxInput_TabIndex='107'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='16px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='chkitem03'></FrmFieldKeys>
</cc1:DscCheckBox>
</div>
<div style="display:none;">
<cc1:DscCheckBox ID='chkitem04' runat='server' Text='零用金 Tiền mặt' ShowTitle='False'
	Style="z-index:660; position: absolute; left: 761px; top: 172px;"
	CheckBoxInput_TabIndex='108'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='16px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='chkitem04'></FrmFieldKeys>
</cc1:DscCheckBox>
</div>
<div style="display:none;">
<cc1:DscCheckBox ID='chkitem05' runat='server' Text='其他 Khác -' ShowTitle='False'
	Style="z-index:658; position: absolute; left: 809px; top: 173px;"
	CheckBoxInput_TabIndex='109'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='16px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='chkitem05'></FrmFieldKeys>
</cc1:DscCheckBox>
</div>
<cc1:DscTextBox id='chkother' runat='server' title='其他' ShowTitle='False'
	style="Z-INDEX:670; POSITION: absolute; LEFT: 562px; TOP: 201px;"
	TxtInput_TabIndex='110'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='chkother'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='88px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='textarea1' runat='server' title='內容01' ShowTitle='False'
	style="Z-INDEX:692; POSITION: absolute; LEFT: 91px; TOP: 353px;"
	TxtInput_TabIndex='111' TextMode='MultiLine'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='textarea1'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='425px' Height='80px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='money01' runat='server' title='金額01' ShowTitle='False'
	style="Z-INDEX:669; POSITION: absolute; LEFT: 586px; TOP: 384px;"
	TxtInput_TabIndex='112'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='money01'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='107px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='textarea2' runat='server' title='內容02' ShowTitle='False'
	style="Z-INDEX:691; POSITION: absolute; LEFT: 91px; TOP: 440px;"
	TxtInput_TabIndex='113' TextMode='MultiLine'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='textarea2'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='425px' Height='75px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='money02' runat='server' title='金額02' ShowTitle='False'
	style="Z-INDEX:668; POSITION: absolute; LEFT: 586px; TOP: 460px;"
	TxtInput_TabIndex='114'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='money02'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='107px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='textarea3' runat='server' title='內容03' ShowTitle='False'
	style="Z-INDEX:690; POSITION: absolute; LEFT: 91px; TOP: 518px;"
	TxtInput_TabIndex='115' TextMode='MultiLine'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='textarea3'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='425px' Height='65px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='money03' runat='server' title='金額03' ShowTitle='False'
	style="Z-INDEX:667; POSITION: absolute; LEFT: 586px; TOP: 542px;"
	TxtInput_TabIndex='116'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='money03'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='107px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='textarea4' runat='server' title='內容04' ShowTitle='False'
	style="Z-INDEX:689; POSITION: absolute; LEFT: 91px; TOP: 586px;"
	TxtInput_TabIndex='117' TextMode='MultiLine'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='textarea4'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='425px' Height='50px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='money04' runat='server' title='金額04' ShowTitle='False'
	style="Z-INDEX:666; POSITION: absolute; LEFT: 586px; TOP: 600px;"
	TxtInput_TabIndex='118'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='money04'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='107px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='textarea5' runat='server' title='內容05' ShowTitle='False'
	style="Z-INDEX:688; POSITION: absolute; LEFT: 91px; TOP: 641px;"
	TxtInput_TabIndex='119' TextMode='MultiLine'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='textarea5'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='425px' Height='40px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='money05' runat='server' title='金額05' ShowTitle='False'
	style="Z-INDEX:665; POSITION: absolute; LEFT: 586px; TOP: 650px;"
	TxtInput_TabIndex='120'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='money05'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='107px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='mtotal' runat='server' title='總金額' ShowTitle='False'
	style="Z-INDEX:664; POSITION: absolute; LEFT: 586px; TOP: 688px;"
	TxtInput_TabIndex='121'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='mtotal'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='107px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscCheckBox ID='chkatt01' runat='server' Text='發票' ShowTitle='False'
	Style="z-index:694; position: absolute; left: 89px; top: 721px;"
	CheckBoxInput_TabIndex='122'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='27px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='chkatt01'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscTextBox id='inv01' runat='server' title='發票張數' ShowTitle='False'
	style="Z-INDEX:685; POSITION: absolute; LEFT: 153px; TOP: 717px;"
	TxtInput_TabIndex='123'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='inv01'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='26px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscCheckBox ID='chkatt02' runat='server' Text='收據' ShowTitle='False'
	Style="z-index:681; position: absolute; left: 215px; top: 721px;"
	CheckBoxInput_TabIndex='124'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='27px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='chkatt02'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscTextBox id='inv02' runat='server' title='數據張數' ShowTitle='False'
	style="Z-INDEX:680; POSITION: absolute; LEFT: 277px; TOP: 716px;"
	TxtInput_TabIndex='125'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='inv02'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='30px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscCheckBox ID='chkatt03' runat='server' Text='訂購單' ShowTitle='False'
	Style="z-index:696; position: absolute; left: 89px; top: 755px;"
	CheckBoxInput_TabIndex='126'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='26px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='chkatt03'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkatt04' runat='server' Text='驗收單' ShowTitle='False'
	Style="z-index:695; position: absolute; left: 89px; top: 787px;"
	CheckBoxInput_TabIndex='127'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='24px' Height='27px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='chkatt04'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkatt05' runat='server' Text='進貨單' ShowTitle='False'
	Style="z-index:683; position: absolute; left: 169px; top: 786px;"
	CheckBoxInput_TabIndex='128'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='26px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='chkatt05'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscTextBox id='orderno' runat='server' title='訂購單號' ShowTitle='False'
	style="Z-INDEX:682; POSITION: absolute; LEFT: 196px; TOP: 749px;"
	TxtInput_TabIndex='130'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='orderno'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='90px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='attother' runat='server' title='其他附件' ShowTitle='False'
	style="Z-INDEX:686; POSITION: absolute; LEFT: 146px; TOP: 814px;"
	TxtInput_TabIndex='131'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='attother'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='106px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscCheckBox ID='other' runat='server' Text='其他附件' ShowTitle='False'
	Style="z-index:687; position: absolute; left: 89px; top: 821px;"
	CheckBoxInput_TabIndex='137'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='31px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='other'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscTextBox id='payother' runat='server' title='其他支付' ShowTitle='False'
	style="Z-INDEX:678; POSITION: absolute; LEFT: 372px; TOP: 261px;"
	TxtInput_TabIndex='138'>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='payother'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='69px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<div style="display:none;">
<cc1:DscOpenQuery id='empl1' runat='server' title='empl1' ShowTitle='False'
	style="Z-INDEX: 700; POSITION: absolute; LEFT: 32px; TOP: 41px;"
	TxtInput_TabIndex='139' TextMode='SingleLine'
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/imgMan.gif'
	ReturnVisible='True'>
	<InputStyle Width='121px' Height='22px' CssClass='Edit20'></InputStyle>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='empl1'></FrmFieldKeys>
</cc1:DscOpenQuery>
</div>
<div style="display:none;">
<cc1:DscOpenQuery id='empl2' runat='server' title='empl2' ShowTitle='False'
	style="Z-INDEX: 699; POSITION: absolute; LEFT: 33px; TOP: 8px;"
	TxtInput_TabIndex='140' TextMode='SingleLine'
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/imgMan.gif'
	ReturnVisible='True'>
	<InputStyle Width='121px' Height='22px' CssClass='Edit20'></InputStyle>
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='empl2'></FrmFieldKeys>
</cc1:DscOpenQuery>
</div>
<cc1:DscDateAssistant2 ID='paydate' runat='server' Title='付款日期' ShowTitle='False'
	style="POSITION: absolute; left: 154px; top: 112px; z-index: 684;" 
	TxtInput_TabIndex='141' 
	DisplayMode='yyyyMMdd' DateSaveFormat='String' DateLan='ChristianEra' datePagePath='../../_Common/PlatformUtil/Resource/ASP/' 
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/calender.gif'>
	<InputStyle Width='90px' Height='22px' CssClass='Edit20' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='paydate'></FrmFieldKeys>
</cc1:DscDateAssistant2>
<cc1:DscDropDownList ID='cur01' runat='server' Title='幣別01' ShowTitle='False'
	Style="z-index:676; position: absolute; left: 524px; top: 386px;"
	DDLInput_TabIndex='142'>
	<Items>
		<asp:ListItem Selected='True' Value='VND'>VND</asp:ListItem>
		<asp:ListItem Selected='False' Value='USD'>USD</asp:ListItem>
	</Items>
	<TitleStyle Width='100px' />
	<InputStyle Width='53px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='cur01'></FrmFieldKeys>
	<CommentList F0001='Combo' F0002='MAWIODMFPAYMVE01_cur01' />
</cc1:DscDropDownList>
<cc1:DscDropDownList ID='cur03' runat='server' Title='幣別03' ShowTitle='False'
	Style="z-index:674; position: absolute; left: 524px; top: 547px;"
	DDLInput_TabIndex='142'>
	<Items>
		<asp:ListItem Selected='True' Value='VND'>VND</asp:ListItem>
		<asp:ListItem Selected='False' Value='USD'>USD</asp:ListItem>
	</Items>
	<TitleStyle Width='100px' />
	<InputStyle Width='53px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='cur03'></FrmFieldKeys>
	<CommentList F0001='Combo' F0002='MAWIODMFPAYMVE01_cur03' />
</cc1:DscDropDownList>
<cc1:DscDropDownList ID='cur02' runat='server' Title='幣別02' ShowTitle='False'
	Style="z-index:675; position: absolute; left: 524px; top: 463px;"
	DDLInput_TabIndex='143'>
	<Items>
		<asp:ListItem Selected='True' Value='VND'>VND</asp:ListItem>
		<asp:ListItem Selected='False' Value='USD'>USD</asp:ListItem>
	</Items>
	<TitleStyle Width='100px' />
	<InputStyle Width='53px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='cur02'></FrmFieldKeys>
	<CommentList F0001='Combo' F0002='MAWIODMFPAYMVE01_cur02' />
</cc1:DscDropDownList>
<cc1:DscDropDownList ID='cur04' runat='server' Title='幣別04' ShowTitle='False'
	Style="z-index:673; position: absolute; left: 524px; top: 603px;"
	DDLInput_TabIndex='143'>
	<Items>
		<asp:ListItem Selected='True' Value='VND'>VND</asp:ListItem>
		<asp:ListItem Selected='False' Value='USD'>USD</asp:ListItem>
	</Items>
	<TitleStyle Width='100px' />
	<InputStyle Width='53px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='cur04'></FrmFieldKeys>
	<CommentList F0001='Combo' F0002='MAWIODMFPAYMVE01_cur04' />
</cc1:DscDropDownList>
<cc1:DscDropDownList ID='cur05' runat='server' Title='幣別05' ShowTitle='False'
	Style="z-index:672; position: absolute; left: 524px; top: 652px;"
	DDLInput_TabIndex='143'>
	<Items>
		<asp:ListItem Selected='True' Value='VND'>VND</asp:ListItem>
		<asp:ListItem Selected='False' Value='USD'>USD</asp:ListItem>
	</Items>
	<TitleStyle Width='100px' />
	<InputStyle Width='53px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='cur05'></FrmFieldKeys>
	<CommentList F0001='Combo' F0002='MAWIODMFPAYMVE01_cur05' />
</cc1:DscDropDownList>
<cc1:DscDropDownList ID='curr' runat='server' Title='幣別' ShowTitle='False'
	Style="z-index:671; position: absolute; left: 524px; top: 691px;"
	DDLInput_TabIndex='143'>
	<Items>
		<asp:ListItem Selected='True' Value='VND'>VND</asp:ListItem>
		<asp:ListItem Selected='False' Value='USD'>USD</asp:ListItem>
	</Items>
	<TitleStyle Width='100px' />
	<InputStyle Width='53px' Height='22px' />
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='curr'></FrmFieldKeys>
	<CommentList F0001='Combo' F0002='MAWIODMFPAYMVE01_curr' />
</cc1:DscDropDownList>
<cc1:DscTextBox id='chpay' runat='server' title='現金 Tiền mặt' ShowTitle='False'
	style="display:none;Z-INDEX:697; POSITION: absolute; LEFT: 97px; TOP: 265px;">
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='chpay'></FrmFieldKeys>
</cc1:DscTextBox>
<asp:RadioButton ID='chpay_ctrolRadio0' runat='server' GroupName='chpay' Text='' Value='0' style='position:absolute;top:265px;left:97px;z-index:697;'/>
<asp:RadioButton ID='chpay_ctrolRadio1' runat='server' GroupName='chpay' Text='' Value='1' style='position:absolute;top:265px;left:200px;z-index:697;'/>
<asp:RadioButton ID='chpay_ctrolRadio2' runat='server' GroupName='chpay' Text='' Value='2' style='position:absolute;top:265px;left:316px;z-index:697;'/>
<cc1:DscTextBox id='rdtc' runat='server' title='一般費用 Chi phí thường' ShowTitle='False'
	style="display:none;Z-INDEX:697; POSITION: absolute; LEFT: 97px; TOP: 202px;">
	<FrmFieldKeys FrmID='FrmMAWIODMFPAYMVE01' BOID='MAWIODMFPAYMVE01' FieldName='rdtc'></FrmFieldKeys>
</cc1:DscTextBox>
<asp:RadioButton ID='rdtc_ctrolRadio0' runat='server' GroupName='rdtc' Text='' Value='0' style='position:absolute;top:202px;left:97px;z-index:697;'/>
<asp:RadioButton ID='rdtc_ctrolRadio1' runat='server' GroupName='rdtc' Text='' Value='1' style='position:absolute;top:200px;left:227px;z-index:697;'/>
<asp:RadioButton ID='rdtc_ctrolRadio2' runat='server' GroupName='rdtc' Text='' Value='2' style='position:absolute;top:200px;left:308px;z-index:697;'/>
<asp:RadioButton ID='rdtc_ctrolRadio3' runat='server' GroupName='rdtc' Text='' Value='3' style='position:absolute;top:200px;left:404px;z-index:697;'/>
<asp:RadioButton ID='rdtc_ctrolRadio4' runat='server' GroupName='rdtc' Text='' Value='4' style='position:absolute;top:200px;left:501px;z-index:697;'/>

<div style="position:absolute; left:2px; top:5px; z-index:10; ">
	<img src="ODMFPAYMVE02.png" id="Head01_file_1" runat="server" width="736" height="891" />
</div>

						</div>
					</cc1:Dscpanel>


					
					<!--單身Grid畫面-->
				<cc1:DscPanel ID="hdnDisplayInCS" Style="display: none; z-index: 116; left: 264px;
					top: 72px" runat="server" Width="100%">
					<div style="overflow: auto; width: 100%; position: relative; height: 100%; background-color: transparent"
						ms_positioning="GridLayout">
					</div>
				</cc1:DscPanel>
				<cc1:DscPanel id="hdnDisplayInHTML" style="DISPLAY: none; Z-INDEX: 116; LEFT: 264px; TOP: 72px" runat="server">
						<div style="OVERFLOW: auto; WIDTH: 100%; POSITION: relative; HEIGHT: 100%; BACKGROUND-COLOR: transparent" >
						</div>
					</cc1:DscPanel>
			</cc1:DscPanel>
			<!--2012/12/25:3.5.1.38:hiro:S00-20121031003:3.修正多選開窗onChange事件。↓-->
			<asp:HiddenField ID='hdnOpenQueryPreSetValue' runat='server' Value='' />
			<!--2012/12/25:3.5.1.38:hiro:S00-20121031003:3.修正多選開窗onChange事件。↑-->
			<!--2010/12/01:3.2.1.4:hiro:A00-20101201001:修正表單設計精靈用到多選開窗欄位，使用管理程式產生出來的管理程式出現錯誤↓-->
			<cc1:DscPanel id="hdnDisplayInHTML2" style="DISPLAY: none; Z-INDEX: 116; LEFT: 264px; TOP: 72px"
				runat="server">
				<div style="OVERFLOW: auto; WIDTH: 100%; POSITION: relative; HEIGHT: 100%; BACKGROUND-COLOR: transparent" >
				<cc1:DscTextBox ID="edReceiver" runat="server" ShowTitle="False" Title="" Width="36px">
					<InputStyle Width="0px" />
					<Validator MsgF0001="" MsgF0002="" ValidatorExpression="" ValidatorMsg="" ValidatorName="" />
					<TitleStyle Width="60px" />
				</cc1:DscTextBox>
				</div>
			</cc1:DscPanel>
			<!--2010/12/01:3.2.1.4:hiro:A00-20101201001:修正表單設計精靈用到多選開窗欄位，使用管理程式產生出來的管理程式出現錯誤↑-->
		</div>
		<!--查詢畫面區塊 -->
		<div id="qbeResult" style="display: none; background-attachment: fixed; background-image: url(http://localhost/webcrm_new/0.00.00/src/_Common/PlatformUtil/Resource/Pic/Panel/falseGird.JPG);
			width: 98%; height: 300px" runat="server">
		</div>
	</form>
</body>
</html>
