<%@ Page language="c#" CodeFile="ODMPAYWELL02.aspx.cs" MasterPageFile="~/src/_Common/AppUtil/EFMasterPage/EFBaseMasterPage.master" AutoEventWireup="false" enableEventValidation="false" Inherits="tw.com.dsc.easyflowDotNet.forms.ODMPAYWELL02" %>
<%@ Register TagPrefix="uc1" TagName="gridUserControl" Src="../../_Common/PlatformUtil/KernelPage/Grid/gridUserControl.ascx" %>
<%@ Register TagPrefix="iewc" Namespace="Microsoft.Web.UI.WebControls" Assembly="Microsoft.Web.UI.WebControls" %>
<%@ Register TagPrefix="cc1" Namespace="tw.com.dsc.dscDotNet.dscWebControls" Assembly="PlatformUtil" %>

<asp:Content ID="ODMPAYWELL02FormContent" ContentPlaceHolderID="MasterPageContent" runat="server">
	<!--單檔架構 -->
	<!--2009/03/19:Joseph:<div id="cover" style="OVERFLOW: auto; WIDTH: 100%;">-->
		<div id="cover" style="WIDTH: 100%;">
			<div id="createRecord" style="WIDTH: 100%; HEIGHT: 100%" runat="server">
				<cc1:DscPanel id="ecPnlMaster" runat="server" Width="98%" IniHTML='&#10;<div style="OVERFLOW: auto; WIDTH: 100%; POSITION: relative; HEIGHT: 100%" ms_positioning="GridLayout"></div>'
					FrmDefineKeys-FrmType="Query" FrmDefineKeys-FrmID="FrmODMPAYWELL02" FrmDefineKeys-BOID="ODMPAYWELL02"
					BorderStyle="None" BorderColor="Transparent" BorderWidth="0px" Height="643px">
					<!--單頭頁籤-->
					<iewc:TabStrip id="TabStrip1" runat="server" 
						TabDefaultStyle="background-image:url(../../_Common/AppUtil/Themes/images/Menu/Tbtn01.gif);" 
						TabHoverStyle="background-image:url(../../_Common/AppUtil/Themes/images/Menu/Tbtn01.gif);" 
						TabSelectedStyle="background-image:url(../../_Common/AppUtil/Themes/images/Menu/Tbtn02.gif);" 
						CssClass="divToolBar2" >
						<iewc:Tab ID='headDefault' Text='單頭頁籤1' DefaultStyle='width:100px; height:27px;vertical-align:middle; text-align:center;'></iewc:Tab>
					</iewc:TabStrip>
					<!--單頭頁籤畫面集合-->

					<!--單頭頁籤 一-->
					<cc1:Dscpanel id='divheadDefault' style='DISPLAY: block' runat='server' Width='100%' Height='643px' BackColor='Transparent'>
						<div class='TabPage' style='POSITION: relative; HEIGHT: 643px; left: 0px; top: 0px;' >
							<asp:ValidationSummary id='ValidationSummaryHead01' style='Z-INDEX: 100; POSITION: absolute; LEFT: 745px; TOP: 7px;' runat='server' ShowSummary='False' ShowMessageBox='True'></asp:ValidationSummary>
							<!--此區間放入單頭頁籤 一 的各個dsc元件-->

<cc1:DscTextBox id='odmpaywell02001' runat='server' title='表單代號'
	style='display: none; Z-INDEX: 101; POSITION: absolute; LEFT: 245px; TOP: 16px;'
	TxtInput_TabIndex='0'>
	<INPUTSTYLE Width='120px'></INPUTSTYLE>
	<TITLESTYLE Width='110px'></TITLESTYLE>
	<FRMFIELDKEYS FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='odmpaywell02001'></FRMFIELDKEYS>
</cc1:DscTextBox>
<cc1:DscTextBox id='odmpaywell02002' runat='server' title='表單單號'
	style='display: none; Z-INDEX: 102; POSITION: absolute; LEFT: 245px; TOP: 49px;'
	TxtInput_TabIndex='0'>
	<INPUTSTYLE Width='120px'></INPUTSTYLE>
	<TITLESTYLE Width='110px'></TITLESTYLE>
	<FRMFIELDKEYS FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='odmpaywell02002'></FRMFIELDKEYS>
</cc1:DscTextBox>

<cc1:DscDateAssistant2 ID='datetime1' runat='server' Title='datetime1' ShowTitle='False'
	style="POSITION: absolute; left: 510px; top: 73px; z-index: 673;" 
	TxtInput_TabIndex='101' 
	DisplayMode='yyyyMMdd' DateSaveFormat='String' DateLan='ChristianEra' datePagePath='../../_Common/PlatformUtil/Resource/ASP/' 
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/calender.gif'>
	<InputStyle Width='103px' Height='23px' CssClass='Edit20' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='datetime1'></FrmFieldKeys>
</cc1:DscDateAssistant2>
<cc1:DscTextBox id='dept' runat='server' title='部門' ShowTitle='False'
	style="Z-INDEX:693; POSITION: absolute; LEFT: 95px; TOP: 107px;"
	TxtInput_TabIndex='102'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='dept'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='100px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='username' runat='server' title='請款人' ShowTitle='False'
	style="Z-INDEX:681; POSITION: absolute; LEFT: 322px; TOP: 106px;"
	TxtInput_TabIndex='103'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='username'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='100px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='textarea1' runat='server' title='內容01' ShowTitle='False'
	style="Z-INDEX:699; POSITION: absolute; LEFT: 64px; TOP: 234px;"
	TxtInput_TabIndex='111' TextMode='MultiLine'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='textarea1'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='350px' Height='100px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='money01' runat='server' title='金額01' ShowTitle='False'
	style="Z-INDEX:669; POSITION: absolute; LEFT: 580px; TOP: 269px;"
	TxtInput_TabIndex='112' TextAlign="Right">
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='money01'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='100px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='mtotal' runat='server' title='總金額' ShowTitle='False'
	style="Z-INDEX:667; POSITION: absolute; LEFT: 580px; TOP: 462px;"
	TxtInput_TabIndex='121' TextAlign="Right">
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='mtotal'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='100px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='inv01' runat='server' title='發票張數' ShowTitle='False'
	style="Z-INDEX:690; POSITION: absolute; LEFT: 116px; TOP: 490px;"
	TxtInput_TabIndex='123'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='inv01'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='26px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='inv02' runat='server' title='數據張數' ShowTitle='False'
	style="Z-INDEX:684; POSITION: absolute; LEFT: 228px; TOP: 490px;"
	TxtInput_TabIndex='125'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='inv02'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='30px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='orderno' runat='server' title='訂購單號' ShowTitle='False'
	style="Z-INDEX:670; POSITION: absolute; LEFT: 521px; TOP: 170px;"
	TxtInput_TabIndex='130'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='orderno'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='120px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='attother' runat='server' title='其他附件' ShowTitle='False'
	style="Z-INDEX:689; POSITION: absolute; LEFT: 128px; TOP: 563px;"
	TxtInput_TabIndex='131'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='attother'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='106px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscCheckBox ID='other' runat='server' Text='其他附件' ShowTitle='False'
	Style="z-index:697; position: absolute; left: 65px; top: 564px;"
	CheckBoxInput_TabIndex='137'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='17px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='other'></FrmFieldKeys>
</cc1:DscCheckBox>
<div style="display:none;">
<cc1:DscOpenQuery id='empl1' runat='server' title='empl1' ShowTitle='False'
	style="Z-INDEX: 688; POSITION: absolute; LEFT: 136px; TOP: 33px;"
	TxtInput_TabIndex='139' TextMode='SingleLine'
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/imgMan.gif'
	ReturnVisible='True'>
	<InputStyle Width='121px' Height='22px' CssClass='Edit20'></InputStyle>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='empl1'></FrmFieldKeys>
</cc1:DscOpenQuery>
</div>
<div style="display:none;">
<cc1:DscOpenQuery id='empl2' runat='server' title='empl2' ShowTitle='False'
	style="Z-INDEX: 700; POSITION: absolute; LEFT: 9px; TOP: 31px;"
	TxtInput_TabIndex='140' TextMode='SingleLine'
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/imgMan.gif'
	ReturnVisible='True'>
	<InputStyle Width='121px' Height='22px' CssClass='Edit20'></InputStyle>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='empl2'></FrmFieldKeys>
</cc1:DscOpenQuery>
</div>
<cc1:DscCheckBox ID='chkkind01' runat='server' Text='一般費用' ShowTitle='False'
	Style="z-index:694; position: absolute; left: 90px; top: 141px;"
	CheckBoxInput_TabIndex='141'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='17px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='chkkind01'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkkind02' runat='server' Text='資產' ShowTitle='False'
	Style="z-index:685; position: absolute; left: 184px; top: 141px;"
	CheckBoxInput_TabIndex='142'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='17px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='chkkind02'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkkind03' runat='server' Text='原物料' ShowTitle='False'
	Style="z-index:683; position: absolute; left: 246px; top: 141px;"
	CheckBoxInput_TabIndex='143'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='17px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='chkkind03'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkkind04' runat='server' Text='零用金' ShowTitle='False'
	Style="z-index:680; position: absolute; left: 332px; top: 141px;"
	CheckBoxInput_TabIndex='144'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='18px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='chkkind04'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkkind05' runat='server' Text='其他' ShowTitle='False'
	Style="z-index:679; position: absolute; left: 413px; top: 141px;"
	CheckBoxInput_TabIndex='145'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='17px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='chkkind05'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscDropDownList ID='curr' runat='server' Title='幣別' ShowTitle='False'
	Style="z-index:672; position: absolute; left: 516px; top: 464px;"
	DDLInput_TabIndex='152'>
	<Items>
		<asp:ListItem Selected='False' Value='NTD'>NTD</asp:ListItem>
		<asp:ListItem Selected='True' Value='USD'>USD</asp:ListItem>
	</Items>
	<TitleStyle Width='100px' />
	<InputStyle Width='55px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='curr'></FrmFieldKeys>
	<CommentList F0001='Combo' F0002='ODMPAYWELL02_curr' />
</cc1:DscDropDownList>
<cc1:DscCheckBox ID='chkadd01' runat='server' Text='發票' ShowTitle='False'
	Style="z-index:696; position: absolute; left: 65px; top: 492px;"
	CheckBoxInput_TabIndex='154'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='16px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='chkadd01'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkadd02' runat='server' Text='收據' ShowTitle='False'
	Style="z-index:686; position: absolute; left: 170px; top: 494px;"
	CheckBoxInput_TabIndex='155'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='18px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='chkadd02'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkadd04' runat='server' Text='驗收' ShowTitle='False'
	Style="z-index:695; position: absolute; left: 65px; top: 529px;"
	CheckBoxInput_TabIndex='157'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='20px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='chkadd04'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkadd05' runat='server' Text='進貨單' ShowTitle='False'
	Style="z-index:687; position: absolute; left: 170px; top: 529px;"
	CheckBoxInput_TabIndex='158'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='19px' Height='23px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='chkadd05'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscOpenQuery id='queryfirm' runat='server' title='受款人' ShowTitle='False'
	style="Z-INDEX: 671; POSITION: absolute; LEFT: 519px; TOP: 106px;"
	TxtInput_TabIndex='161' TextMode='SingleLine'
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/data.gif'
	ReturnVisible='True'>
	<InputStyle Width='50px' Height='23px' CssClass='Edit20'></InputStyle>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='queryfirm'></FrmFieldKeys>
</cc1:DscOpenQuery>
<cc1:DscTextBox id='txtother' runat='server' title='其他' ShowTitle='False'
	style="Z-INDEX:674; POSITION: absolute; LEFT: 473px; TOP: 139px;"
	TxtInput_TabIndex='162'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='txtother'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='88px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='textarea2' runat='server' title='內容02' ShowTitle='False'
	style="Z-INDEX:698; POSITION: absolute; LEFT: 64px; TOP: 346px;"
	TxtInput_TabIndex='163' TextMode='MultiLine'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='textarea2'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='350px' Height='100px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='money02' runat='server' title='金額02' ShowTitle='False'
	style="Z-INDEX:668; POSITION: absolute; LEFT: 580px; TOP: 388px;"
	TxtInput_TabIndex='165' TextAlign="Right">
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='money02'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='100px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscOpenQuery id='opentype01' runat='server' title='主類別01' ShowTitle='False'
	style="Z-INDEX: 676; POSITION: absolute; LEFT: 430px; TOP: 261px;"
	TxtInput_TabIndex='167' TextMode='SingleLine'
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/data.gif'
	ReturnVisible='True'>
	<InputStyle Width='35px' Height='22px' CssClass='Edit20'></InputStyle>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='opentype01'></FrmFieldKeys>
</cc1:DscOpenQuery>
<cc1:DscOpenQuery id='openitem01' runat='server' title='子類別01' ShowTitle='False'
	style="Z-INDEX: 678; POSITION: absolute; LEFT: 430px; TOP: 285px;"
	TxtInput_TabIndex='168' TextMode='SingleLine'
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/data.gif'
	ReturnVisible='True'>
	<InputStyle Width='35px' Height='22px' CssClass='Edit20'></InputStyle>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='openitem01'></FrmFieldKeys>
</cc1:DscOpenQuery>
<cc1:DscOpenQuery id='opentype02' runat='server' title='主類別02' ShowTitle='False'
	style="Z-INDEX: 675; POSITION: absolute; LEFT: 430px; TOP: 376px;"
	TxtInput_TabIndex='169' TextMode='SingleLine'
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/data.gif'
	ReturnVisible='True'>
	<InputStyle Width='35px' Height='24px' CssClass='Edit20'></InputStyle>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='opentype02'></FrmFieldKeys>
</cc1:DscOpenQuery>
<cc1:DscOpenQuery id='openitem02' runat='server' title='子類別02' ShowTitle='False'
	style="Z-INDEX: 677; POSITION: absolute; LEFT: 430px; TOP: 402px;"
	TxtInput_TabIndex='170' TextMode='SingleLine'
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/data.gif'
	ReturnVisible='True'>
	<InputStyle Width='35px' Height='22px' CssClass='Edit20'></InputStyle>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='openitem02'></FrmFieldKeys>
</cc1:DscOpenQuery>
<cc1:DscTextBox id='useyear' runat='server' title='使用年限' ShowTitle='False'
	style="Z-INDEX:691; POSITION: absolute; LEFT: 100px; TOP: 170px;"
	TxtInput_TabIndex='172'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='useyear'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='31px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='chkvn' runat='server' title='冠志廠' ShowTitle='False'
	style="display:none;Z-INDEX:691; POSITION: absolute; LEFT: 255px; TOP: 175px;">
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='chkvn'></FrmFieldKeys>
</cc1:DscTextBox>
<asp:RadioButton ID='chkvn_ctrolRadio0' runat='server' GroupName='chkvn' Text='' Value='0' style='position:absolute;top:175px;left:255px;z-index:691;'/>
<asp:RadioButton ID='chkvn_ctrolRadio1' runat='server' GroupName='chkvn' Text='' Value='1' style='position:absolute;top:175px;left:333px;z-index:691;'/>
<cc1:DscTextBox id='kind' runat='server' title='預付費用' ShowTitle='False'
	style="display:none;Z-INDEX:691; POSITION: absolute; LEFT: 101px; TOP: 77px;">
	<FrmFieldKeys FrmID='FrmODMPAYWELL02' BOID='ODMPAYWELL02' FieldName='kind'></FrmFieldKeys>
</cc1:DscTextBox>
<asp:RadioButton ID='kind_ctrolRadio0' runat='server' GroupName='kind' Text='' Value='0' style='position:absolute;top:77px;left:101px;z-index:691;'/>
<asp:RadioButton ID='kind_ctrolRadio1' runat='server' GroupName='kind' Text='' Value='1' style='position:absolute;top:77px;left:195px;z-index:691;'/>

<div style="position:absolute; left:2px; top:5px; z-index:10; ">
	<img src="ODMPAYWELLV2.png" id="Head01_file_1" runat="server" width="719" height="608" />
</div>

						</div>
					</cc1:Dscpanel>


					
					<!--單身Grid畫面-->
					
					<cc1:DscPanel id="hdnDisplayInCS" style="DISPLAY: none; Z-INDEX: 116; LEFT: 264px; TOP: 72px" runat="server" Width="100%">
						<div style="OVERFLOW: auto; WIDTH: 100%; POSITION: relative; HEIGHT: 100%; BACKGROUND-COLOR: transparent; left: 0px; top: 0px;" ></div>
					</cc1:DscPanel>
					<cc1:DscPanel id="hdnDisplayInHTML" style="DISPLAY: none; Z-INDEX: 116; LEFT: 264px; TOP: 72px" runat="server">
						<div style="OVERFLOW: auto; WIDTH: 100%; POSITION: relative; HEIGHT: 100%; BACKGROUND-COLOR: transparent" >
						</div>
					</cc1:DscPanel>
				</cc1:DscPanel>
				<!--2012/12/25:3.5.1.38:hiro:S00-20121031003:3.修正多選開窗onChange事件。↓-->
				<asp:HiddenField ID='hdnOpenQueryPreSetValue' runat='server' Value='' />
				<!--2012/12/25:3.5.1.38:hiro:S00-20121031003:3.修正多選開窗onChange事件。↑-->
				<!--2010/06/01:3.2.1.13:hiro:S00-20100323002:功能新增：新增人員、日期、部門(含多選開窗)元件↓-->
				<cc1:DscPanel id="hdnDisplayInHTML2" style="DISPLAY: none; Z-INDEX: 116; LEFT: 264px; TOP: 72px" runat="server">
					<div style="OVERFLOW: auto; WIDTH: 100%; POSITION: relative; HEIGHT: 100%; BACKGROUND-COLOR: transparent">
						<cc1:DscTextBox ID="edReceiver" runat="server" ShowTitle="False" Title="" Width="36px">
							<InputStyle Width="0px" />
							<Validator MsgF0001="" MsgF0002="" ValidatorExpression="" ValidatorMsg="" ValidatorName="" />
							<TitleStyle Width="60px" />
						</cc1:DscTextBox>
					</div>
				</cc1:DscPanel>
				<!--2010/06/01:3.2.1.13:hiro:S00-20100323002:功能新增：新增人員、日期、部門(含多選開窗)元件↑-->
			</div>
		</div>

<!--引用JavaScript-->
	<!--控制項觸發條件--20230424 Peggy-->
	 <script src="../../_Common/OEM/JS/OEMSetControl.js"></script>
    <!--三位一撇--20230424 Peggy-->
	<script src="../../_Common/OEM/JS/OEMUtils.js"></script>
<script src="ODMPAYWELL02.js?NoCache=20230508007" type="text/javascript"></script>
</asp:Content>
