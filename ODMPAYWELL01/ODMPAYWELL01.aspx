<%@ Page language="c#" CodeFile="ODMPAYWELL01.aspx.cs" MasterPageFile="~/src/_Common/AppUtil/EFMasterPage/EFBaseMasterPage.master" AutoEventWireup="false" enableEventValidation="false" Inherits="tw.com.dsc.easyflowDotNet.forms.ODMPAYWELL01" %>
<%@ Register TagPrefix="uc1" TagName="gridUserControl" Src="../../_Common/PlatformUtil/KernelPage/Grid/gridUserControl.ascx" %>
<%@ Register TagPrefix="iewc" Namespace="Microsoft.Web.UI.WebControls" Assembly="Microsoft.Web.UI.WebControls" %>
<%@ Register TagPrefix="cc1" Namespace="tw.com.dsc.dscDotNet.dscWebControls" Assembly="PlatformUtil" %>

<asp:Content ID="ODMPAYWELL01FormContent" ContentPlaceHolderID="MasterPageContent" runat="server">
	<!--單檔架構 -->
	<!--2009/03/19:Joseph:<div id="cover" style="OVERFLOW: auto; WIDTH: 100%;">-->
		<div id="cover" style="WIDTH: 100%;">
			<div id="createRecord" style="WIDTH: 100%; HEIGHT: 100%" runat="server">
				<cc1:DscPanel id="ecPnlMaster" runat="server" Width="98%" IniHTML='&#10;<div style="OVERFLOW: auto; WIDTH: 100%; POSITION: relative; HEIGHT: 100%" ms_positioning="GridLayout"></div>'
					FrmDefineKeys-FrmType="Query" FrmDefineKeys-FrmID="FrmODMPAYWELL01" FrmDefineKeys-BOID="ODMPAYWELL01"
					BorderStyle="None" BorderColor="Transparent" BorderWidth="0px" Height="677px">
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
					<cc1:Dscpanel id='divheadDefault' style='DISPLAY: block' runat='server' Width='100%' Height='677px' BackColor='Transparent'>
						<div class='TabPage' style='POSITION: relative; HEIGHT: 677px; left: 0px; top: 0px;' >
							<asp:ValidationSummary id='ValidationSummaryHead01' style='Z-INDEX: 100; POSITION: absolute; LEFT: 745px; TOP: 7px;' runat='server' ShowSummary='False' ShowMessageBox='True'></asp:ValidationSummary>
							<!--此區間放入單頭頁籤 一 的各個dsc元件-->

<cc1:DscTextBox id='odmpaywell01001' runat='server' title='表單代號'
	style='display: none; Z-INDEX: 101; POSITION: absolute; LEFT: 245px; TOP: 16px;'
	TxtInput_TabIndex='0'>
	<INPUTSTYLE Width='120px'></INPUTSTYLE>
	<TITLESTYLE Width='110px'></TITLESTYLE>
	<FRMFIELDKEYS FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='odmpaywell01001'></FRMFIELDKEYS>
</cc1:DscTextBox>
<cc1:DscTextBox id='odmpaywell01002' runat='server' title='表單單號'
	style='display: none; Z-INDEX: 102; POSITION: absolute; LEFT: 245px; TOP: 49px;'
	TxtInput_TabIndex='0'>
	<INPUTSTYLE Width='120px'></INPUTSTYLE>
	<TITLESTYLE Width='110px'></TITLESTYLE>
	<FRMFIELDKEYS FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='odmpaywell01002'></FRMFIELDKEYS>
</cc1:DscTextBox>

<cc1:DscDateAssistant2 ID='datetime1' runat='server' Title='datetime1' ShowTitle='False'
	style="POSITION: absolute; left: 575px; top: 81px; z-index: 671;" 
	TxtInput_TabIndex='101' 
	DisplayMode='yyyyMMdd' DateSaveFormat='String' DateLan='ChristianEra' datePagePath='../../_Common/PlatformUtil/Resource/ASP/' 
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/calender.gif'>
	<InputStyle Width='103px' Height='23px' CssClass='Edit20' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='datetime1'></FrmFieldKeys>
</cc1:DscDateAssistant2>
<cc1:DscTextBox id='dept' runat='server' title='部門' ShowTitle='False'
	style="Z-INDEX:696; POSITION: absolute; LEFT: 110px; TOP: 116px;"
	TxtInput_TabIndex='102'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='dept'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='131px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='username' runat='server' title='請款人' ShowTitle='False'
	style="Z-INDEX:679; POSITION: absolute; LEFT: 343px; TOP: 116px;"
	TxtInput_TabIndex='103'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='username'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='111px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='textarea1' runat='server' title='內容01' ShowTitle='False'
	style="Z-INDEX:699; POSITION: absolute; LEFT: 66px; TOP: 218px;"
	TxtInput_TabIndex='111' TextMode='MultiLine'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='textarea1'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='500px' Height='75px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='money01' runat='server' title='金額01' ShowTitle='False'
	style="Z-INDEX:670; POSITION: absolute; LEFT: 628px; TOP: 239px;"
	TxtInput_TabIndex='112'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='money01'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='75px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='mtotal' runat='server' title='總金額' ShowTitle='False'
	style="Z-INDEX:669; POSITION: absolute; LEFT: 629px; TOP: 387px;"
	TxtInput_TabIndex='121'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='mtotal'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='75px' Height='25px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='inv01' runat='server' title='發票張數' ShowTitle='False'
	style="Z-INDEX:688; POSITION: absolute; LEFT: 173px; TOP: 418px;"
	TxtInput_TabIndex='123'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='inv01'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='26px' Height='20px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='inv02' runat='server' title='數據張數' ShowTitle='False'
	style="Z-INDEX:681; POSITION: absolute; LEFT: 285px; TOP: 417px;"
	TxtInput_TabIndex='125'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='inv02'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='30px' Height='20px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='orderno' runat='server' title='訂購單號' ShowTitle='False'
	style="Z-INDEX:684; POSITION: absolute; LEFT: 226px; TOP: 488px;"
	TxtInput_TabIndex='130'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='orderno'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='95px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='attother' runat='server' title='其他附件' ShowTitle='False'
	style="Z-INDEX:687; POSITION: absolute; LEFT: 184px; TOP: 569px;"
	TxtInput_TabIndex='131'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='attother'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='106px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscCheckBox ID='other' runat='server' Text='其他附件' ShowTitle='False'
	Style="z-index:690; position: absolute; left: 115px; top: 569px;"
	CheckBoxInput_TabIndex='137'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='17px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='other'></FrmFieldKeys>
</cc1:DscCheckBox>
<div style="display:none;">
<cc1:DscOpenQuery id='empl1' runat='server' title='empl1' ShowTitle='False'
	style="Z-INDEX: 689; POSITION: absolute; LEFT: 147px; TOP: 43px;"
	TxtInput_TabIndex='139' TextMode='SingleLine'
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/imgMan.gif'
	ReturnVisible='True'>
	<InputStyle Width='121px' Height='22px' CssClass='Edit20'></InputStyle>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='empl1'></FrmFieldKeys>
</cc1:DscOpenQuery>
</div>
<div style="display:none;">
<cc1:DscOpenQuery id='empl2' runat='server' title='empl2' ShowTitle='False'
	style="Z-INDEX: 700; POSITION: absolute; LEFT: 22px; TOP: 41px;"
	TxtInput_TabIndex='140' TextMode='SingleLine'
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/imgMan.gif'
	ReturnVisible='True'>
	<InputStyle Width='121px' Height='22px' CssClass='Edit20'></InputStyle>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='empl2'></FrmFieldKeys>
</cc1:DscOpenQuery>
</div>
<cc1:DscCheckBox ID='chkkind01' runat='server' Text='一般費用' ShowTitle='False'
	Style="z-index:695; position: absolute; left: 114px; top: 152px;"
	CheckBoxInput_TabIndex='141'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='17px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='chkkind01'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkkind02' runat='server' Text='資產' ShowTitle='False'
	Style="z-index:685; position: absolute; left: 219px; top: 152px;"
	CheckBoxInput_TabIndex='142'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='17px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='chkkind02'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkkind03' runat='server' Text='原物料' ShowTitle='False'
	Style="z-index:680; position: absolute; left: 298px; top: 152px;"
	CheckBoxInput_TabIndex='143'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='17px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='chkkind03'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkkind04' runat='server' Text='零用金' ShowTitle='False'
	Style="z-index:678; position: absolute; left: 383px; top: 152px;"
	CheckBoxInput_TabIndex='144'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='18px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='chkkind04'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkkind05' runat='server' Text='其他' ShowTitle='False'
	Style="z-index:677; position: absolute; left: 478px; top: 152px;"
	CheckBoxInput_TabIndex='145'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='17px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='chkkind05'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscDropDownList ID='selcurr01' runat='server' Title='幣別01' ShowTitle='False'
	Style="z-index:675; position: absolute; left: 571px; top: 242px;"
	DDLInput_TabIndex='152'>
	<Items>
		<asp:ListItem Selected='False' Value='NTD'>NTD</asp:ListItem>
		<asp:ListItem Selected='True' Value='USD'>USD</asp:ListItem>
	</Items>
	<TitleStyle Width='100px' />
	<InputStyle Width='55px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='selcurr01'></FrmFieldKeys>
	<CommentList F0001='Combo' F0002='ODMPAYWELL01_selcurr01' />
</cc1:DscDropDownList>
<cc1:DscDropDownList ID='selcurr06' runat='server' Title='幣別06' ShowTitle='False'
	Style="z-index:674; position: absolute; left: 572px; top: 391px;"
	DDLInput_TabIndex='152'>
	<Items>
		<asp:ListItem Selected='False' Value='NTD'>NTD</asp:ListItem>
		<asp:ListItem Selected='True' Value='USD'>USD</asp:ListItem>
	</Items>
	<TitleStyle Width='100px' />
	<InputStyle Width='55px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='selcurr06'></FrmFieldKeys>
	<CommentList F0001='Combo' F0002='ODMPAYWELL01_selcurr06' />
</cc1:DscDropDownList>
<cc1:DscCheckBox ID='chkadd01' runat='server' Text='發票' ShowTitle='False'
	Style="z-index:694; position: absolute; left: 115px; top: 422px;"
	CheckBoxInput_TabIndex='154'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='16px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='chkadd01'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkadd02' runat='server' Text='收據' ShowTitle='False'
	Style="z-index:683; position: absolute; left: 227px; top: 422px;"
	CheckBoxInput_TabIndex='155'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='18px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='chkadd02'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkadd03' runat='server' Text='訂購單' ShowTitle='False'
	Style="z-index:693; position: absolute; left: 115px; top: 495px;"
	CheckBoxInput_TabIndex='156'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='17px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='chkadd03'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkadd04' runat='server' Text='驗收' ShowTitle='False'
	Style="z-index:692; position: absolute; left: 115px; top: 531px;"
	CheckBoxInput_TabIndex='157'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='20px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='chkadd04'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkadd05' runat='server' Text='進貨單' ShowTitle='False'
	Style="z-index:686; position: absolute; left: 210px; top: 531px;"
	CheckBoxInput_TabIndex='158'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='19px' Height='23px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='chkadd05'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscCheckBox ID='chkadd06' runat='server' Text='資產採購單' ShowTitle='False'
	Style="z-index:691; position: absolute; left: 115px; top: 458px;"
	CheckBoxInput_TabIndex='159'
	Checked='False' CheckedTrueValue='1' CheckedFalseValue='0'>
	<InputStyle Width='18px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='chkadd06'></FrmFieldKeys>
</cc1:DscCheckBox>
<cc1:DscTextBox id='txtassno' runat='server' title='採購單號' ShowTitle='False'
	style="Z-INDEX:682; POSITION: absolute; LEFT: 255px; TOP: 452px;"
	TxtInput_TabIndex='160'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='txtassno'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='100px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscOpenQuery id='queryfirm' runat='server' title='受款人' ShowTitle='False'
	style="Z-INDEX: 672; POSITION: absolute; LEFT: 573px; TOP: 116px;"
	TxtInput_TabIndex='161' TextMode='SingleLine'
	BtnVisible='True' ImgSrc='../../_Common/AppUtil/Themes/images/Program/data.gif'
	ReturnVisible='True'>
	<InputStyle Width='90px' Height='23px' CssClass='Edit20'></InputStyle>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='queryfirm'></FrmFieldKeys>
</cc1:DscOpenQuery>
<cc1:DscTextBox id='txtother' runat='server' title='其他' ShowTitle='False'
	style="Z-INDEX:676; POSITION: absolute; LEFT: 544px; TOP: 153px;"
	TxtInput_TabIndex='162'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='txtother'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='88px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='textarea2' runat='server' title='內容02' ShowTitle='False'
	style="Z-INDEX:698; POSITION: absolute; LEFT: 67px; TOP: 298px;"
	TxtInput_TabIndex='163' TextMode='MultiLine'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='textarea2'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='500px' Height='75px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscDropDownList ID='selcurr02' runat='server' Title='幣别02' ShowTitle='False'
	Style="z-index:673; position: absolute; left: 573px; top: 328px;"
	DDLInput_TabIndex='164'>
	<Items>
		<asp:ListItem Selected='False' Value='NTD'>NTD</asp:ListItem>
		<asp:ListItem Selected='True' Value='USD'>USD</asp:ListItem>
	</Items>
	<TitleStyle Width='100px' />
	<InputStyle Width='55px' Height='22px' />
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='selcurr02'></FrmFieldKeys>
	<CommentList F0001='Combo' F0002='ODMPAYWELL01_selcurr02' />
</cc1:DscDropDownList>
<cc1:DscTextBox id='money02' runat='server' title='金額02' ShowTitle='False'
	style="Z-INDEX:668; POSITION: absolute; LEFT: 630px; TOP: 325px;"
	TxtInput_TabIndex='165'>
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='money02'></FrmFieldKeys>
	<TitleStyle Width='100px'></TitleStyle>
	<InputStyle Width='75px' Height='22px' CssClass='Edit20'></InputStyle>
</cc1:DscTextBox>
<cc1:DscTextBox id='kind' runat='server' title='預付費用' ShowTitle='False'
	style="display:none;Z-INDEX:697; POSITION: absolute; LEFT: 86px; TOP: 84px;">
	<FrmFieldKeys FrmID='FrmODMPAYWELL01' BOID='ODMPAYWELL01' FieldName='kind'></FrmFieldKeys>
</cc1:DscTextBox>
<asp:RadioButton ID='kind_ctrolRadio0' runat='server' GroupName='kind' Text='' Value='0' style='position:absolute;top:84px;left:86px;z-index:697;'/>
<asp:RadioButton ID='kind_ctrolRadio1' runat='server' GroupName='kind' Text='' Value='1' style='position:absolute;top:84px;left:177px;z-index:697;'/>

<div style="position:absolute; left:2px; top:5px; z-index:10; ">
	<img src="well請款_ef.png" id="Head01_file_1" runat="server" width="756" height="642" />
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
<script src="ODMPAYWELL01.js?NoCache=202108311455" type="text/javascript"></script>
</asp:Content>
