//單頭自訂驗證
function CustomerSaveCheck_Head(tStatus)
{
	var tErr = "";
	var tFieldNotFilledMsg = getI18NForSpecial('PSMSG', 'Validation', 'RequriedFieldNotFilled', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tIntErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'IntErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tFloatErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'FloatErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tDecimalErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'DecimalErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	if (tStatus == "CREATE")
	{
		//20230424 Peggy Star
		//驗證第二個開窗必填
		var _opentype01 = document.getElementById("MasterPage_MasterPageContent_opentype01_txt");
		var _openitem01 = document.getElementById("MasterPage_MasterPageContent_openitem01_txt");
		var _opentype02 = document.getElementById("MasterPage_MasterPageContent_opentype02_txt");
		var _openitem02 = document.getElementById("MasterPage_MasterPageContent_openitem02_txt");

		if (_opentype01 != null && _opentype01.value != "") {
			if (_openitem01.value == "") {
				tErr += "請選擇子項目!" + "\r\n";
			}
		}
		if (_opentype02 != null && _opentype02.value != "") {
			if (_openitem02.value == "") {
				tErr += "請選擇子項目!" + "\r\n";
			}
		}

		//20230424 Peggy End

	}
	else if (tStatus == "APPROVE")
	{
		//簽核時要驗證

	}

	//填表及簽核都要驗證
	//不允許空白驗證
	var tdatetime1 = $('#MasterPage_MasterPageContent_datetime1_txt');
	if(tdatetime1.length>0){
		var tdatetime1Value = $('#MasterPage_MasterPageContent_datetime1_txt').val().trim();
		if (tdatetime1Value.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'datetime1', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//不允許空白驗證
	var tdept = $('#MasterPage_MasterPageContent_dept_txt');
	if(tdept.length>0){
		var tdeptValue = $('#MasterPage_MasterPageContent_dept_txt').val().trim();
		if (tdeptValue.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'dept', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//Int格式驗証
	var tinv01 = $('#MasterPage_MasterPageContent_inv01_txt');
	if(tinv01.length>0){
		var tinv01Value = $('#MasterPage_MasterPageContent_inv01_txt').val().trim();
		if (tinv01Value.length>0){
			if(!/^-?\d+$/.test(tinv01Value)){
				//輸入的資料不符合int數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'inv01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tIntErrMsg + '\r\n';
			}
		}
	}

	//Int格式驗証
	var tinv02 = $('#MasterPage_MasterPageContent_inv02_txt');
	if(tinv02.length>0){
		var tinv02Value = $('#MasterPage_MasterPageContent_inv02_txt').val().trim();
		if (tinv02Value.length>0){
			if(!/^-?\d+$/.test(tinv02Value)){
				//輸入的資料不符合int數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'inv02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tIntErrMsg + '\r\n';
			}
		}
	}

	//不允許空白驗證
	var tmoney01 = $('#MasterPage_MasterPageContent_money01_txt');
	if(tmoney01.length>0){
		var tmoney01Value = $('#MasterPage_MasterPageContent_money01_txt').val().trim();
		if (tmoney01Value.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'money01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//float格式驗証
	var tmoney01 = $('#MasterPage_MasterPageContent_money01_txt');
	if(tmoney01.length>0){
		var tmoney01Value = $('#MasterPage_MasterPageContent_money01_txt').val().trim();
		if (tmoney01Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney01Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'money01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney01Value=tmoney01Value.replace(/\,/g,'');
				$('#MasterPage_MasterPageContent_money01_txt').val(parseFloat(tmoney01Value).toFixed(4));
			}
		}
	}

	//float格式驗証
	var tmoney02 = $('#MasterPage_MasterPageContent_money02_txt');
	if(tmoney02.length>0){
		var tmoney02Value = $('#MasterPage_MasterPageContent_money02_txt').val().trim();
		if (tmoney02Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney02Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'money02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney02Value=tmoney02Value.replace(/\,/g,'');
				$('#MasterPage_MasterPageContent_money02_txt').val(parseFloat(tmoney02Value).toFixed(4));
			}
		}
	}

	//float格式驗証
	var tmtotal = $('#MasterPage_MasterPageContent_mtotal_txt');
	if(tmtotal.length>0){
		var tmtotalValue = $('#MasterPage_MasterPageContent_mtotal_txt').val().trim();
		if (tmtotalValue.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmtotalValue)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'mtotal', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmtotalValue=tmtotalValue.replace(/\,/g,'');
				$('#MasterPage_MasterPageContent_mtotal_txt').val(parseFloat(tmtotalValue).toFixed(4));
			}
		}
	}

	//不允許空白驗證
	var ttextarea1 = $('#MasterPage_MasterPageContent_textarea1_txt');
	if(ttextarea1.length>0){
		var ttextarea1Value = $('#MasterPage_MasterPageContent_textarea1_txt').val().trim();
		if (ttextarea1Value.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'textarea1', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//不允許空白驗證
	var tusername = $('#MasterPage_MasterPageContent_username_txt');
	if(tusername.length>0){
		var tusernameValue = $('#MasterPage_MasterPageContent_username_txt').val().trim();
		if (tusernameValue.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'username', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}



	if (tErr == "")
	{
		return true;
	}
	else
	{
		alert(tErr);
		return false;
	}
}

//2020/03/25;6.1.13.5;hiro;S00-20200225001;草稿儲存僅做數值驗證，不做其他驗證↓
//草稿數值驗證
function DraftSaveCheck(){
	var tErr = "";
	var tIntErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'IntErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tFloatErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'FloatErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tDecimalErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'DecimalErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	//數值驗證
	//Int格式驗証
	var tinv01 = $('#MasterPage_MasterPageContent_inv01_txt');
	if(tinv01.length>0){
		var tinv01Value = $('#MasterPage_MasterPageContent_inv01_txt').val().trim();
		if (tinv01Value.length>0){
			if(!/^-?\d+$/.test(tinv01Value)){
				//輸入的資料不符合int數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'inv01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tIntErrMsg + '\r\n';
			}
		}
	}

	//Int格式驗証
	var tinv02 = $('#MasterPage_MasterPageContent_inv02_txt');
	if(tinv02.length>0){
		var tinv02Value = $('#MasterPage_MasterPageContent_inv02_txt').val().trim();
		if (tinv02Value.length>0){
			if(!/^-?\d+$/.test(tinv02Value)){
				//輸入的資料不符合int數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'inv02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tIntErrMsg + '\r\n';
			}
		}
	}

	//float格式驗証
	var tmoney01 = $('#MasterPage_MasterPageContent_money01_txt');
	if(tmoney01.length>0){
		var tmoney01Value = $('#MasterPage_MasterPageContent_money01_txt').val().trim().replace(/\,/g, '');
		if (tmoney01Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney01Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'money01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney01Value=tmoney01Value.replace(/\,/g,'');
				$('#MasterPage_MasterPageContent_money01_txt').val(parseFloat(tmoney01Value).toFixed(4));
			}
		}
	}

	//float格式驗証
	var tmoney02 = $('#MasterPage_MasterPageContent_money02_txt');
	if(tmoney02.length>0){
		var tmoney02Value = $('#MasterPage_MasterPageContent_money02_txt').val().trim().replace(/\,/g, '');
		if (tmoney02Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney02Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'money02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney02Value=tmoney02Value.replace(/\,/g,'');
				$('#MasterPage_MasterPageContent_money02_txt').val(parseFloat(tmoney02Value).toFixed(4));
			}
		}
	}

	//float格式驗証
	var tmtotal = $('#MasterPage_MasterPageContent_mtotal_txt');
	if(tmtotal.length>0){
		var tmtotalValue = $('#MasterPage_MasterPageContent_mtotal_txt').val().trim();
		if (tmtotalValue.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmtotalValue)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'ODMPAYWELL02', 'mtotal', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmtotalValue=tmtotalValue.replace(/\,/g,'');
				$('#MasterPage_MasterPageContent_mtotal_txt').val(parseFloat(tmtotalValue).toFixed(4));
			}
		}
	}



	if (tErr == "")
	{
		return true;
	}
	else
	{
		alert(tErr);
		return false;
	}
}
//2020/03/25;6.1.13.5;hiro;S00-20200225001;草稿儲存僅做數值驗證，不做其他驗證↑

//單頭表單簽核鈕驗證單身全部欄位
function CustomerSaveCheck_DetailAllData(pFormId, pUniversalId)
{
	var tErr = "";

	

	if (tErr == "")
	{
		return true;
	}
	else
	{
		alert(tErr);
		return false;
	}
}


//單身自訂驗證
function CustomerSaveCheck_Body(tStatus)
{
	var tErr = "";
	var tFieldNotFilledMsg = getI18NForSpecial('PSMSG', 'Validation', 'RequriedFieldNotFilled', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tIntErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'IntErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tFloatErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'FloatErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	var tDecimalErrMsg = getI18NForSpecial('PSMSG', 'Validation', 'DecimalErrMsg', '../../_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	if (tStatus == "CREATE")
	{
		//填表時要驗證

	}
	else if (tStatus == "APPROVE")
	{
		//簽核時要驗證

	}

	//填表及簽核都要驗證


	if (tErr == "")
	{
		return true;
	}
	else
	{
		alert(tErr);
		return false;
	}
}

String.prototype.trim = function () {
	return this.replace(/^\s+|\s+$/g, "");
}

//填表時顯示提示字串
function InitOpenShowMSG(){
	alert('');
}

function InitTriggerMust(tStatus){
	if(tStatus=="CREATE" || tStatus=="DISPLAY" || tStatus==""){
		if($("#MasterPage_MasterPageContent_chkkind05_chk").length>0){
			if($("#MasterPage_MasterPageContent_chkkind05_chk")[0].checked){
				$("#MasterPage_MasterPageContent_txtother").show();
			}
			else{
				$("#MasterPage_MasterPageContent_txtother").hide();
			}
		}

		if($("#MasterPage_MasterPageContent_other_chk").length>0){
			if($("#MasterPage_MasterPageContent_other_chk")[0].checked){
				$("#MasterPage_MasterPageContent_attother").show();
			}
			else{
				$("#MasterPage_MasterPageContent_attother").hide();
			}
		}


	}
}

function InitTriggerOpen(){
	if($("#MasterPage_MasterPageContent_opentype01_txt").length>0){
		if($("#MasterPage_MasterPageContent_opentype01_txt").val()==""){
			$('#MasterPage_MasterPageContent_openitem01_txt')[0].style.backgroundColor='#deecea';
			$('#MasterPage_MasterPageContent_openitem01_txt').val("");
			$('#MasterPage_MasterPageContent_openitem01_txt2').text("");
			if(!$('#MasterPage_MasterPageContent_openitem01_txt').attr("disabled"))
			{
				$('#MasterPage_MasterPageContent_openitem01_txt').prop("disabled",true);
				$('#MasterPage_MasterPageContent_openitem01_btn').prop("disabled",true);
				$('#MasterPage_MasterPageContent_openitem01_btn').css("cursor","default");
				$('#MasterPage_MasterPageContent_openitem01_btn').css("pointer-events","none");
			}
		}
		else{
			$('#MasterPage_MasterPageContent_openitem01_txt')[0].style.backgroundColor='white';
			if($('#MasterPage_MasterPageContent_openitem01_txt').hasClass("PL_ReadOnly")){
				$('#MasterPage_MasterPageContent_openitem01_txt')[0].style.backgroundColor='#deecea';
			}
			else if($('#MasterPage_MasterPageContent_openitem01_txt').attr("disabled"))
			{
				$('#MasterPage_MasterPageContent_openitem01_txt').prop("disabled",false);
				$('#MasterPage_MasterPageContent_openitem01_btn').prop("disabled",false);
				$('#MasterPage_MasterPageContent_openitem01_btn').css("cursor","pointer");
				$('#MasterPage_MasterPageContent_openitem01_btn').css("pointer-events","auto");
			}
		}
	}

	if($("#MasterPage_MasterPageContent_opentype02_txt").length>0){
		if($("#MasterPage_MasterPageContent_opentype02_txt").val()==""){
			$('#MasterPage_MasterPageContent_openitem02_txt')[0].style.backgroundColor='#deecea';
			$('#MasterPage_MasterPageContent_openitem02_txt').val("");
			$('#MasterPage_MasterPageContent_openitem02_txt2').text("");
			if(!$('#MasterPage_MasterPageContent_openitem02_txt').attr("disabled"))
			{
				$('#MasterPage_MasterPageContent_openitem02_txt').prop("disabled",true);
				$('#MasterPage_MasterPageContent_openitem02_btn').prop("disabled",true);
				$('#MasterPage_MasterPageContent_openitem02_btn').css("cursor","default");
				$('#MasterPage_MasterPageContent_openitem02_btn').css("pointer-events","none");
			}
		}
		else{
			$('#MasterPage_MasterPageContent_openitem02_txt')[0].style.backgroundColor='white';
			if($('#MasterPage_MasterPageContent_openitem02_txt').hasClass("PL_ReadOnly")){
				$('#MasterPage_MasterPageContent_openitem02_txt')[0].style.backgroundColor='#deecea';
			}
			else if($('#MasterPage_MasterPageContent_openitem02_txt').attr("disabled"))
			{
				$('#MasterPage_MasterPageContent_openitem02_txt').prop("disabled",false);
				$('#MasterPage_MasterPageContent_openitem02_btn').prop("disabled",false);
				$('#MasterPage_MasterPageContent_openitem02_btn').css("cursor","pointer");
				$('#MasterPage_MasterPageContent_openitem02_btn').css("pointer-events","auto");
			}
		}
	}


}

function InitCalculated(){
	domath_mtotal();

}

function InitOnChangeItem()
{

}

function CreateOption(pValue,pText,objselect)
{
	var new_option = new Option(pText,pValue);
	objselect.options.add(new_option);
}

function FunOnChange_opentype01()
{
	var evt = (event)?event:window.event;
	var element=evt.srcElement || evt.target;
	//如果是透過 automimj 不觸發
	if (element != null && element.id != null)
	{
		$('#MasterPage_MasterPageContent_openitem01_txt').val("");
		$('#MasterPage_MasterPageContent_openitem01_txt2').text("");
	}
}//EndFun_FunOnChange_opentype01()

function FunCheckIsChanged_opentype01()
{
	var PreSetValue = $('#MasterPage_MasterPageContent_hdnOpenQueryPreSetValue').val();
	if(PreSetValue.length>0){
		var aryPreSetValue = PreSetValue.split('§');
		if(aryPreSetValue.length>1){
			if("opentype01" == aryPreSetValue[0] && $('#MasterPage_MasterPageContent_opentype01_txt').val() != aryPreSetValue[1])
				FunOnChange_opentype01();
		}
	}
	else{
		FunOnChange_opentype01();
	}
}//EndFun_FunCheckIsChanged_opentype01()

function FunOnChange_opentype02()
{
	var evt = (event)?event:window.event;
	var element=evt.srcElement || evt.target;
	//如果是透過 automimj 不觸發
	if (element != null && element.id != null)
	{
		$('#MasterPage_MasterPageContent_openitem02_txt').val("");
		$('#MasterPage_MasterPageContent_openitem02_txt2').text("");
	}
}//EndFun_FunOnChange_opentype02()

function FunCheckIsChanged_opentype02()
{
	var PreSetValue = $('#MasterPage_MasterPageContent_hdnOpenQueryPreSetValue').val();
	if(PreSetValue.length>0){
		var aryPreSetValue = PreSetValue.split('§');
		if(aryPreSetValue.length>1){
			if("opentype02" == aryPreSetValue[0] && $('#MasterPage_MasterPageContent_opentype02_txt').val() != aryPreSetValue[1])
				FunOnChange_opentype02();
		}
	}
	else{
		FunOnChange_opentype02();
	}
}//EndFun_FunCheckIsChanged_opentype02()



function InitNumberToWord()
{

}

function getMoneyWord(pNumberContrlID, pDecimalPlaces, pWordControlID)
{
	var strErr="";
	if($('#MasterPage_MasterPageContent_'+pNumberContrlID+'_txt').length>0 && $('#MasterPage_MasterPageContent_'+pNumberContrlID+'_txt').is(':visible')){
		var tControlNumValue = $('#MasterPage_MasterPageContent_'+pNumberContrlID+'_txt').val().trim();
		if(tControlNumValue.length>0){
			if(isNaN(tControlNumValue)) {
				//請輸入數值!
				strErr = getI18NForSpecial('PSMSG','NumsCheck','NumsCheckMSG001','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
			}
			else{
				//這裡使用者如果輸入超過16進位的數值，就會失真！
				//tControlNumValue = parseFloat(tControlNumValue).toFixed(pDecimalPlaces);
				tControlNumValue = tw.com.dsc.easyflowDotNet.forms.ODMPAYWELL02.ajaxGetFixedNum(tControlNumValue, pDecimalPlaces).value;

				$('#MasterPage_MasterPageContent_'+pNumberContrlID+'_txt').val(tControlNumValue);
				var iIntegerSTR="";
				var tDecimalSTR="";
				if(pDecimalPlaces>0){
					//含小數位
					var aryControlNumValue = tControlNumValue.toString().split('.');
					iIntegerSTR = parseInt(aryControlNumValue[0]);
					tDecimalSTR = aryControlNumValue[1];
				}
				else{
					iIntegerSTR = tControlNumValue;
				}

				//if(iIntegerSTR>=10000000000000000 || iIntegerSTR<=-9999999999999999)
				if(iIntegerSTR<0){
					if(iIntegerSTR.toString().length>17)
						//數值溢位!請輸入較大的數值!
						strErr = getI18NForSpecial('Message','NumsCheck','NumsOverRangMSG001','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
				}
				else{
					if(iIntegerSTR.toString().length>16)
						//數值溢位!請輸入較小的數值!
						strErr = getI18NForSpecial('Message','NumsCheck','NumsOverRangMSG002','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
				}
			}

			if(strErr!=""){
				alert(strErr);
				$('#MasterPage_MasterPageContent_'+pNumberContrlID+'_txt').val("");
				$('#MasterPage_MasterPageContent_'+pWordControlID+'_txt').val("");
				return false;
			}

			var tControlWordValue = tw.com.dsc.easyflowDotNet.forms.ODMPAYWELL02.ajaxGetMoneyWord(tControlNumValue).value;
			$('#MasterPage_MasterPageContent_'+pWordControlID+'_txt').val(tControlWordValue);
		}
		//2015/09/14;3.7.3.19;hiro;V00-20150914007;修正數值轉大寫，數值為空白時，沒有一併清空轉大寫欄位↓
		else {
			$('#MasterPage_MasterPageContent_'+pWordControlID+'_txt').val("");
		}
		//2015/09/14;3.7.3.19;hiro;V00-20150914007;修正數值轉大寫，數值為空白時，沒有一併清空轉大寫欄位↑
	}
	return true;
}

function InitReadOnly()
{

}


function SetCustomSubject()
{
	//使用者自訂主旨start
	var tSubjectVal='';
	var tSubjectTxt=document.getElementById("MasterPage_txtCreateToolSubject_txt").value;
	var tSubjectSelf='';
	tSubjectSelf+='ALL WELL 請款單V2-'+
$('#MasterPage_MasterPageContent_queryfirm_txt').val()+'-'+$('#MasterPage_MasterPageContent_queryfirm_txt2hdn').val();

	//自訂主旨+標準主旨
	tSubjectVal=tSubjectSelf+tSubjectTxt;

	if(tSubjectVal.length>255){tSubjectVal=tSubjectVal.substring(0,255);}
	//使用者自訂主旨end

	$("#MasterPage_txtCreateToolSubject_txt").val(tSubjectVal);
}

function domath_mtotal()
{
	try{
		if($("#MasterPage_MasterPageContent_money01_txt").length==0)
			return;
		var money01 = $("#MasterPage_MasterPageContent_money01_txt").val().trim().replace(/\,/g, '');
		if(isNaN(money01)){
			$("#MasterPage_MasterPageContent_mtotal_txt").val("");
			return;
		}
		var intmoney01 = money01.length>0?parseFloat(money01):0;

		document.getElementById("MasterPage_MasterPageContent_money01_txt").value=parseFloat(intmoney01).toFixed(4);
		intmoney01 = parseFloat($("#MasterPage_MasterPageContent_money01_txt").val().trim());

		if($("#MasterPage_MasterPageContent_money02_txt").length==0)
			return;
		var money02 = $("#MasterPage_MasterPageContent_money02_txt").val().trim().replace(/\,/g, '');
		if(isNaN(money02)){
			$("#MasterPage_MasterPageContent_mtotal_txt").val("");
			return;
		}
		var intmoney02 = money02.length>0?parseFloat(money02):0;

		document.getElementById("MasterPage_MasterPageContent_money02_txt").value=parseFloat(intmoney02).toFixed(4);
		intmoney02 = parseFloat($("#MasterPage_MasterPageContent_money02_txt").val().trim());

		var finalvalue = intmoney01+intmoney02;
		if(finalvalue==undefined || !isFinite(finalvalue)){
			$("#MasterPage_MasterPageContent_mtotal_txt").val("");
			return;
		}

		document.getElementById("MasterPage_MasterPageContent_mtotal_txt").value = parseFloat(finalvalue).toFixed(4);
		//^_^ 20230411 Peggy 重新加上千份位↓
		document.getElementById("MasterPage_MasterPageContent_mtotal_txt").value = OEMFormat(parseFloat(finalvalue).toFixed(2));
		document.getElementById("MasterPage_MasterPageContent_money01_txt").value = OEMFormat(parseFloat(money01).toFixed(2));
		document.getElementById("MasterPage_MasterPageContent_money02_txt").value = OEMFormat(parseFloat(money02).toFixed(2));
	    //^_^  20230411 Peggy 重新加上千份位↑
	}catch(err){
		$("#MasterPage_MasterPageContent_mtotal_txt").val("");
		var errorMsg = getI18NForSpecial('FD','CalculatedSet2','MutiLang_04','../../../src/_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx');
		alert(errorMsg+err);
	}
}


//單頭觸發必填欄位驗證
function chkTriggerFieldNull_Head()
{
	var tErr = '',tMsg = '';
	var tFieldNotFilledMsg = getI18NForSpecial('PSMSG', 'RequriedFieldNotFilled', '1', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx');
	if($("#MasterPage_MasterPageContent_chkkind05_chk").length>0){
		if($("#MasterPage_MasterPageContent_chkkind05_chk")[0].checked){
			if($("#MasterPage_MasterPageContent_txtother_txt").val().trim().length==0){
				tErr+='[txtother-'+getI18NForSpecial('FD', 'ODMPAYWELL02', 'txtother', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+']'+tFieldNotFilledMsg+'\r\n';
			}
		}
		else{
			$("#MasterPage_MasterPageContent_txtother_txt").val('');
		}
	}

	if($("#MasterPage_MasterPageContent_other_chk").length>0){
		if($("#MasterPage_MasterPageContent_other_chk")[0].checked){
			if($("#MasterPage_MasterPageContent_attother_txt").val().trim().length==0){
				tErr+='[attother-'+getI18NForSpecial('FD', 'ODMPAYWELL02', 'attother', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+']'+tFieldNotFilledMsg+'\r\n';
			}
		}
		else{
			$("#MasterPage_MasterPageContent_attother_txt").val('');
		}
	}

	if ($("#MasterPage_MasterPageContent_chkatt01_chk").length > 0) {
		if ($("#MasterPage_MasterPageContent_chkatt01_chk")[0].checked) {
			if ($("#MasterPage_MasterPageContent_inv01_txt").val().trim().length == 0) {
				tErr += '[inv01-' + getI18NForSpecial('FD', 'ODMFPAYCN02', 'inv01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + ']' + tFieldNotFilledMsg + '\r\n';
			}
		}
		else {
			$("#MasterPage_MasterPageContent_inv01_txt").val('');
		}
	}

	if ($("#MasterPage_MasterPageContent_chkatt02_chk").length > 0) {
		if ($("#MasterPage_MasterPageContent_chkatt02_chk")[0].checked) {
			if ($("#MasterPage_MasterPageContent_inv02_txt").val().trim().length == 0) {
				tErr += '[inv02-' + getI18NForSpecial('FD', 'ODMFPAYCN02', 'inv02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + ']' + tFieldNotFilledMsg + '\r\n';
			}
		}
		else {
			$("#MasterPage_MasterPageContent_inv02_txt").val('');
		}
	}
	//20230508 add peggy
	if ($("#MasterPage_MasterPageContent_chkkind02_chk").length > 0) {
		if ($("#MasterPage_MasterPageContent_chkkind02_chk")[0].checked) {
			if ($("#MasterPage_MasterPageContent_useyear_txt").val().trim().length == 0) {
				tErr += '請確認 "使用年限"  是否有填寫\r\n';
			}
			else
				if ($("#MasterPage_MasterPageContent_orderno_txt").val().trim().length == 0) {
					tErr += '請確認 "訂單號碼" 是否有填寫\r\n';
				}
				else if ($("#MasterPage_MasterPageContent_chkvn_txt").val().trim().length == 0) {
					tErr += '請確認 "使用單位" 是否有填寫\r\n';
				}
		}
		else {
			$("#MasterPage_MasterPageContent_useyear_txt").val('');
		}
	}


	if (tErr == '')
		return true;
	else{
		alert(tErr);
		return false;
	}
}

function setSelectPanelValue()
{
	var aryFields = [];//單頭、單身多選開窗
	var intFieldsLength = aryFields.length;
	for(var i=0;i<intFieldsLength;i++){
		var tField=aryFields[i];
		if($('#MasterPage_MasterPageContent_DscOpenQuery'+tField+'_txt').length>0){
			var hdnValue = $('#MasterPage_MasterPageContent_DscOpenQuery'+tField+'_txt').val();
			$('#MasterPage_MasterPageContent_SelectPanel'+tField+'_hidText').val(hdnValue);
			$('#MasterPage_MasterPageContent_SelectPanel'+tField+'_hidText2').val(hdnValue);

			if($('#MasterPage_MasterPageContent_SelectPanel'+tField+'_lst').length>0){
				$('#MasterPage_MasterPageContent_SelectPanel'+tField+'_lst')[0].options.length=0;

				if($('#MasterPage_MasterPageContent_SelectPanel'+tField+'_lstTbx').length>0){
					$('#MasterPage_MasterPageContent_SelectPanel'+tField+'_lstTbx').val("");
				}

				if(hdnValue.length>0){
					var aryHdnFieldSplit = hdnValue.split('§');
					var intHdnFieldSplitLength = aryHdnFieldSplit.length;
					for (var j = 0; j < intHdnFieldSplitLength; j++){
						var tShowItem = aryHdnFieldSplit[j];
						tShowItem=tShowItem.replace(/┼┼/g, " ");
						var new_option = new Option(tShowItem, tShowItem);
						$('#MasterPage_MasterPageContent_SelectPanel'+tField+'_lst')[0].options.add(new_option);

						if($('#MasterPage_MasterPageContent_SelectPanel'+tField+'_lstTbx').length>0){
							document.getElementById('MasterPage_MasterPageContent_SelectPanel' + tField + '_lstTbx').value += tShowItem;
							if (j != intHdnFieldSplitLength - 1)
							{
								document.getElementById('MasterPage_MasterPageContent_SelectPanel' + tField + '_lstTbx').value += '\r\n';
							}
						}
					}
				}
			}
		}
	}
}


function jsDoDispatch(pFormID, pSheetNo, pDispatchFormID){
	//若您已有編輯此表單資料, 此動作會清除您所編輯的資料! [請問是否繼續?
	var tConfirmSTR = getI18NForSpecial('FD','EFBaseMasterPage','EFMsgBoxJS007','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
	if(window.confirm(tConfirmSTR.split('[')[0].toString() + "\r\n\r\n" + tConfirmSTR.split('[')[1].toString())){
		var bResult = tw.com.dsc.easyflowDotNet.forms.ODMPAYWELL02.ajaxDoDispatchForm(pFormID, pSheetNo, pDispatchFormID).value;
		var tDispatchFormResult="";
		if(bResult){
			//執行派送表單成功!
			tDispatchFormResult=getI18NForSpecial('Message','EFWizardForm','DispatchFormSuccess','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
			alert(tDispatchFormResult);
			//Refresh 原頁面避免 Session 錯亂
			location.reload();
		}
		else{
			//執行派送表單失敗!
			tDispatchFormResult=getI18NForSpecial('Message','EFWizardForm','DispatchFormFail','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
			alert(tDispatchFormResult);
		}
	}
}


//20230424 Peggy Star
//第一個開窗後將第二個窗唯獨或開放，第二個開窗必填
function opentype_change() {
	var open01 = document.getElementById("MasterPage_MasterPageContent_opentype01_txt"); //第一個類別
	var open02 = document.getElementById("MasterPage_MasterPageContent_opentype02_txt"); //第二個類別

	if (open01 != null && open01.value != "") {
		//openitem
		OEMTurnningOnOff("On", "openitem01", true);
	}
	else {
		OEMTurnningOnOff("Off", "openitem01");
	}

	if (open02 != null && open02.value != "") {
		//openitem
		OEMTurnningOnOff("On", "openitem02", true);
	}
	else {
		OEMTurnningOnOff("Off", "openitem02");
	}
}
//20230424 Peggy End

//20230411 Peggy 在這裡做條件判斷, 在aspx 引用OEMSetControl.js
//勾選chkitem02時,才顯示radioButton要勾選
function openRadio() {
	var _chkkind02 = document.getElementById("MasterPage_MasterPageContent_chkkind02_chk").checked;

	if (_chkkind02) {
		OEMTurnningOnOff("On", "chkvn_ctrolRadio0,chkvn_ctrolRadio1,MasterPage_MasterPageContent_orderno_txt,MasterPage_MasterPageContent_useyear_txt", false);
		//$("#MasterPage_MasterPageContent_orderno_txt").show();

	}
	else {
		document.getElementById("MasterPage_MasterPageContent_chkvn_ctrolRadio0").checked = false;
		document.getElementById("MasterPage_MasterPageContent_chkvn_ctrolRadio1").checked = false;
		document.getElementById("MasterPage_MasterPageContent_chkvn_txt").value = "";
		document.getElementById("MasterPage_MasterPageContent_orderno_txt").value = "";
		document.getElementById("MasterPage_MasterPageContent_useyear_txt").value = "";

		OEMTurnningOnOff("Off", "chkvn_ctrolRadio0,chkvn_ctrolRadio1,MasterPage_MasterPageContent_orderno_txt,MasterPage_MasterPageContent_useyear_txt");
		/*	$("#MasterPage_MasterPageContent_orderno_txt").hide();*/

	}
}




