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
		//填表時要驗證
		
		//Radio Button 驗証
			if ($('#chpay_txt').length>0 && document.getElementById('chpay_txt').value == '')
			{
				tErr += getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'chpay_Err', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+ '\r\n';
			}
		//Radio Button 驗証
			if ($('#kind_txt').length>0 && document.getElementById('kind_txt').value == '')
			{
				tErr += getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'kind_Err', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+ '\r\n';
			}
		//20230424 Peggy Star
		//驗證第二個開窗必填
		var _opentype01 = document.getElementById("opentype01_txt");
		var _openitem01 = document.getElementById("openitem01_txt");
		var _opentype02 = document.getElementById("opentype02_txt");
		var _openitem02 = document.getElementById("openitem02_txt");
		var _opentype03 = document.getElementById("opentype03_txt");
		var _openitem03 = document.getElementById("openitem03_txt");
		var _opentype04 = document.getElementById("opentype04_txt");
		var _openitem04 = document.getElementById("openitem04_txt");
		var _opentype05 = document.getElementById("opentype05_txt");
		var _openitem05 = document.getElementById("openitem05_txt");
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
		if (_opentype03 != null && _opentype03.value != "") {
			if (_openitem03.value == "") {
				tErr += "請選擇子項目!" + "\r\n";
			}
		}
		if (_opentype04 != null && _opentype04.value != "") {
			if (_openitem04.value == "") {
				tErr += "請選擇子項目!" + "\r\n";
			}
		}
		if (_opentype05 != null && _opentype05.value != "") {
			if (_openitem05.value == "") {
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
	var tdatetime1 = $('#datetime1_txt');
	if(tdatetime1.length>0){
		var tdatetime1Value = $('#datetime1_txt').val().trim();
		if (tdatetime1Value.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'datetime1', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//不允許空白驗證
	var tdept = $('#dept_txt');
	if(tdept.length>0){
		var tdeptValue = $('#dept_txt').val().trim();
		if (tdeptValue.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'dept', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//Int格式驗証
	var tinv01 = $('#inv01_txt');
	if(tinv01.length>0){
		var tinv01Value = $('#inv01_txt').val().trim();
		if (tinv01Value.length>0){
			if(!/^-?\d+$/.test(tinv01Value)){
				//輸入的資料不符合int數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'inv01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tIntErrMsg + '\r\n';
			}
		}
	}

	//Int格式驗証
	var tinv02 = $('#inv02_txt');
	if(tinv02.length>0){
		var tinv02Value = $('#inv02_txt').val().trim();
		if (tinv02Value.length>0){
			if(!/^-?\d+$/.test(tinv02Value)){
				//輸入的資料不符合int數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'inv02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tIntErrMsg + '\r\n';
			}
		}
	}

	//不允許空白驗證
	var tmoney01 = $('#money01_txt');
	if(tmoney01.length>0){
		var tmoney01Value = $('#money01_txt').val().trim();
		if (tmoney01Value.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'money01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//float格式驗証
	var tmoney01 = $('#money01_txt');
	if(tmoney01.length>0){
		var tmoney01Value = $('#money01_txt').val().trim();
		if (tmoney01Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney01Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'money01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney01Value=tmoney01Value.replace(/\,/g,'');
				$('#money01_txt').val(parseFloat(tmoney01Value).toFixed(2));
			}
		}
	}

	//float格式驗証
	var tmoney02 = $('#money02_txt');
	if(tmoney02.length>0){
		var tmoney02Value = $('#money02_txt').val().trim();
		if (tmoney02Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney02Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'money02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney02Value=tmoney02Value.replace(/\,/g,'');
				$('#money02_txt').val(parseFloat(tmoney02Value).toFixed(2));
			}
		}
	}

	//float格式驗証
	var tmoney03 = $('#money03_txt');
	if(tmoney03.length>0){
		var tmoney03Value = $('#money03_txt').val().trim();
		if (tmoney03Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney03Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'money03', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney03Value=tmoney03Value.replace(/\,/g,'');
				$('#money03_txt').val(parseFloat(tmoney03Value).toFixed(2));
			}
		}
	}

	//float格式驗証
	var tmoney04 = $('#money04_txt');
	if(tmoney04.length>0){
		var tmoney04Value = $('#money04_txt').val().trim();
		if (tmoney04Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney04Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'money04', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney04Value=tmoney04Value.replace(/\,/g,'');
				$('#money04_txt').val(parseFloat(tmoney04Value).toFixed(2));
			}
		}
	}

	//float格式驗証
	var tmoney05 = $('#money05_txt');
	if(tmoney05.length>0){
		var tmoney05Value = $('#money05_txt').val().trim();
		if (tmoney05Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney05Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'money05', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney05Value=tmoney05Value.replace(/\,/g,'');
				$('#money05_txt').val(parseFloat(tmoney05Value).toFixed(2));
			}
		}
	}

	//float格式驗証
	var tmtotal = $('#mtotal_txt');
	if(tmtotal.length>0){
		var tmtotalValue = $('#mtotal_txt').val().trim();
		if (tmtotalValue.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmtotalValue)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'mtotal', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmtotalValue=tmtotalValue.replace(/\,/g,'');
				$('#mtotal_txt').val(parseFloat(tmtotalValue).toFixed(2));
			}
		}
	}

	//不允許空白驗證
	var tpayee = $('#payee_txt');
	if(tpayee.length>0){
		var tpayeeValue = $('#payee_txt').val().trim();
		if (tpayeeValue.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'payee', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//不允許空白驗證
	var ttextarea1 = $('#textarea1_txt');
	if(ttextarea1.length>0){
		var ttextarea1Value = $('#textarea1_txt').val().trim();
		if (ttextarea1Value.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'textarea1', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//不允許空白驗證
	var tusername = $('#username_txt');
	if(tusername.length>0){
		var tusernameValue = $('#username_txt').val().trim();
		if (tusernameValue.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'username', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
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
	var tinv01 = $('#inv01_txt');
	if(tinv01.length>0){
		var tinv01Value = $('#inv01_txt').val().trim();
		if (tinv01Value.length>0){
			if(!/^-?\d+$/.test(tinv01Value)){
				//輸入的資料不符合int數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'inv01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tIntErrMsg + '\r\n';
			}
		}
	}

	//Int格式驗証
	var tinv02 = $('#inv02_txt');
	if(tinv02.length>0){
		var tinv02Value = $('#inv02_txt').val().trim();
		if (tinv02Value.length>0){
			if(!/^-?\d+$/.test(tinv02Value)){
				//輸入的資料不符合int數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'inv02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tIntErrMsg + '\r\n';
			}
		}
	}

	//float格式驗証
	var tmoney01 = $('#money01_txt');
	if(tmoney01.length>0){
		var tmoney01Value = $('#money01_txt').val().trim().replace(/\,/g, '');
		if (tmoney01Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney01Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'money01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney01Value=tmoney01Value.replace(/\,/g,'');
				$('#money01_txt').val(parseFloat(tmoney01Value).toFixed(2));
			}
		}
	}

	//float格式驗証
	var tmoney02 = $('#money02_txt');
	if(tmoney02.length>0){
		var tmoney02Value = $('#money02_txt').val().trim().replace(/\,/g, '');
		if (tmoney02Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney02Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'money02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney02Value=tmoney02Value.replace(/\,/g,'');
				$('#money02_txt').val(parseFloat(tmoney02Value).toFixed(2));
			}
		}
	}

	//float格式驗証
	var tmoney03 = $('#money03_txt');
	if(tmoney03.length>0){
		var tmoney03Value = $('#money03_txt').val().trim().replace(/\,/g, '');
		if (tmoney03Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney03Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'money03', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney03Value=tmoney03Value.replace(/\,/g,'');
				$('#money03_txt').val(parseFloat(tmoney03Value).toFixed(2));
			}
		}
	}

	//float格式驗証
	var tmoney04 = $('#money04_txt');
	if(tmoney04.length>0){
		var tmoney04Value = $('#money04_txt').val().trim().replace(/\,/g, '');
		if (tmoney04Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney04Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'money04', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney04Value=tmoney04Value.replace(/\,/g,'');
				$('#money04_txt').val(parseFloat(tmoney04Value).toFixed(2));
			}
		}
	}

	//float格式驗証
	var tmoney05 = $('#money05_txt');
	if(tmoney05.length>0){
		var tmoney05Value = $('#money05_txt').val().trim().replace(/\,/g, '');
		if (tmoney05Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney05Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'money05', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmoney05Value=tmoney05Value.replace(/\,/g,'');
				$('#money05_txt').val(parseFloat(tmoney05Value).toFixed(2));
			}
		}
	}

	//float格式驗証
	var tmtotal = $('#mtotal_txt');
	if(tmtotal.length>0){
		var tmtotalValue = $('#mtotal_txt').val().trim().replace(/\,/g, '');
		if (tmtotalValue.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmtotalValue)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'mtotal', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
			}
			else{
				tmtotalValue=tmtotalValue.replace(/\,/g,'');
				$('#mtotal_txt').val(parseFloat(tmtotalValue).toFixed(2));
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
		if($("#chkatt01_chk").length>0){
			if($("#chkatt01_chk")[0].checked){
				$("#inv01").show();
			}
			else{
				$("#inv01").hide();
			}
		}

		if($("#chkatt02_chk").length>0){
			if($("#chkatt02_chk")[0].checked){
				$("#inv02").show();
			}
			else{
				$("#inv02").hide();
			}
		}

		if($("#chkitem05_chk").length>0){
			if($("#chkitem05_chk")[0].checked){
				$("#chkother").show();
			}
			else{
				$("#chkother").hide();
			}
		}

		if($("#other_chk").length>0){
			if($("#other_chk")[0].checked){
				$("#attother").show();
			}
			else{
				$("#attother").hide();
			}
		}

		if($("#chpay_ctrolRadio2").length>0){
			if($("#chpay_ctrolRadio2")[0].checked){
				$("#payother").show();
			}
			else{
				$("#payother").hide();
			}
		}


	}
}

function InitTriggerOpen(){
	if($("#opentype01_txt").length>0){
		if($("#opentype01_txt").val()==""){
			$('#openitem01_txt')[0].style.backgroundColor='#deecea';
			$('#openitem01_txt').val("");
			$('#openitem01_txt2').text("");
			if(!$('#openitem01_txt').attr("disabled"))
			{
				$('#openitem01_txt').prop("disabled",true);
				$('#openitem01_btn').prop("disabled",true);
				$('#openitem01_btn').css("cursor","default");
				$('#openitem01_btn').css("pointer-events","none");
			}
		}
		else{
			$('#openitem01_txt')[0].style.backgroundColor='white';
			if($('#openitem01_txt').hasClass("PL_ReadOnly")){
				$('#openitem01_txt')[0].style.backgroundColor='#deecea';
			}
			else if($('#openitem01_txt').attr("disabled"))
			{
				$('#openitem01_txt').prop("disabled",false);
				$('#openitem01_btn').prop("disabled",false);
				$('#openitem01_btn').css("cursor","pointer");
				$('#openitem01_btn').css("pointer-events","auto");
			}
		}
	}

	if($("#opentype02_txt").length>0){
		if($("#opentype02_txt").val()==""){
			$('#openitem02_txt')[0].style.backgroundColor='#deecea';
			$('#openitem02_txt').val("");
			$('#openitem02_txt2').text("");
			if(!$('#openitem02_txt').attr("disabled"))
			{
				$('#openitem02_txt').prop("disabled",true);
				$('#openitem02_btn').prop("disabled",true);
				$('#openitem02_btn').css("cursor","default");
				$('#openitem02_btn').css("pointer-events","none");
			}
		}
		else{
			$('#openitem02_txt')[0].style.backgroundColor='white';
			if($('#openitem02_txt').hasClass("PL_ReadOnly")){
				$('#openitem02_txt')[0].style.backgroundColor='#deecea';
			}
			else if($('#openitem02_txt').attr("disabled"))
			{
				$('#openitem02_txt').prop("disabled",false);
				$('#openitem02_btn').prop("disabled",false);
				$('#openitem02_btn').css("cursor","pointer");
				$('#openitem02_btn').css("pointer-events","auto");
			}
		}
	}

	if($("#opentype03_txt").length>0){
		if($("#opentype03_txt").val()==""){
			$('#openitem03_txt')[0].style.backgroundColor='#deecea';
			$('#openitem03_txt').val("");
			$('#openitem03_txt2').text("");
			if(!$('#openitem03_txt').attr("disabled"))
			{
				$('#openitem03_txt').prop("disabled",true);
				$('#openitem03_btn').prop("disabled",true);
				$('#openitem03_btn').css("cursor","default");
				$('#openitem03_btn').css("pointer-events","none");
			}
		}
		else{
			$('#openitem03_txt')[0].style.backgroundColor='white';
			if($('#openitem03_txt').hasClass("PL_ReadOnly")){
				$('#openitem03_txt')[0].style.backgroundColor='#deecea';
			}
			else if($('#openitem03_txt').attr("disabled"))
			{
				$('#openitem03_txt').prop("disabled",false);
				$('#openitem03_btn').prop("disabled",false);
				$('#openitem03_btn').css("cursor","pointer");
				$('#openitem03_btn').css("pointer-events","auto");
			}
		}
	}

	if($("#opentype04_txt").length>0){
		if($("#opentype04_txt").val()==""){
			$('#openitem04_txt')[0].style.backgroundColor='#deecea';
			$('#openitem04_txt').val("");
			$('#openitem04_txt2').text("");
			if(!$('#openitem04_txt').attr("disabled"))
			{
				$('#openitem04_txt').prop("disabled",true);
				$('#openitem04_btn').prop("disabled",true);
				$('#openitem04_btn').css("cursor","default");
				$('#openitem04_btn').css("pointer-events","none");
			}
		}
		else{
			$('#openitem04_txt')[0].style.backgroundColor='white';
			if($('#openitem04_txt').hasClass("PL_ReadOnly")){
				$('#openitem04_txt')[0].style.backgroundColor='#deecea';
			}
			else if($('#openitem04_txt').attr("disabled"))
			{
				$('#openitem04_txt').prop("disabled",false);
				$('#openitem04_btn').prop("disabled",false);
				$('#openitem04_btn').css("cursor","pointer");
				$('#openitem04_btn').css("pointer-events","auto");
			}
		}
	}

	if($("#opentype05_txt").length>0){
		if($("#opentype05_txt").val()==""){
			$('#openitem05_txt')[0].style.backgroundColor='#deecea';
			$('#openitem05_txt').val("");
			$('#openitem05_txt2').text("");
			if(!$('#openitem05_txt').attr("disabled"))
			{
				$('#openitem05_txt').prop("disabled",true);
				$('#openitem05_btn').prop("disabled",true);
				$('#openitem05_btn').css("cursor","default");
				$('#openitem05_btn').css("pointer-events","none");
			}
		}
		else{
			$('#openitem05_txt')[0].style.backgroundColor='white';
			if($('#openitem05_txt').hasClass("PL_ReadOnly")){
				$('#openitem05_txt')[0].style.backgroundColor='#deecea';
			}
			else if($('#openitem05_txt').attr("disabled"))
			{
				$('#openitem05_txt').prop("disabled",false);
				$('#openitem05_btn').prop("disabled",false);
				$('#openitem05_btn').css("cursor","pointer");
				$('#openitem05_btn').css("pointer-events","auto");
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
		$('#openitem01_txt').val("");
		$('#openitem01_txt2').text("");
	}
}//EndFun_FunOnChange_opentype01()

function FunCheckIsChanged_opentype01()
{
	var PreSetValue = $('#hdnOpenQueryPreSetValue').val();
	if(PreSetValue.length>0){
		var aryPreSetValue = PreSetValue.split('§');
		if(aryPreSetValue.length>1){
			if("opentype01" == aryPreSetValue[0] && $('#opentype01_txt').val() != aryPreSetValue[1])
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
		$('#openitem02_txt').val("");
		$('#openitem02_txt2').text("");
	}
}//EndFun_FunOnChange_opentype02()

function FunCheckIsChanged_opentype02()
{
	var PreSetValue = $('#hdnOpenQueryPreSetValue').val();
	if(PreSetValue.length>0){
		var aryPreSetValue = PreSetValue.split('§');
		if(aryPreSetValue.length>1){
			if("opentype02" == aryPreSetValue[0] && $('#opentype02_txt').val() != aryPreSetValue[1])
				FunOnChange_opentype02();
		}
	}
	else{
		FunOnChange_opentype02();
	}
}//EndFun_FunCheckIsChanged_opentype02()

function FunOnChange_opentype03()
{
	var evt = (event)?event:window.event;
	var element=evt.srcElement || evt.target;
	//如果是透過 automimj 不觸發
	if (element != null && element.id != null)
	{
		$('#openitem03_txt').val("");
		$('#openitem03_txt2').text("");
	}
}//EndFun_FunOnChange_opentype03()

function FunCheckIsChanged_opentype03()
{
	var PreSetValue = $('#hdnOpenQueryPreSetValue').val();
	if(PreSetValue.length>0){
		var aryPreSetValue = PreSetValue.split('§');
		if(aryPreSetValue.length>1){
			if("opentype03" == aryPreSetValue[0] && $('#opentype03_txt').val() != aryPreSetValue[1])
				FunOnChange_opentype03();
		}
	}
	else{
		FunOnChange_opentype03();
	}
}//EndFun_FunCheckIsChanged_opentype03()

function FunOnChange_opentype04()
{
	var evt = (event)?event:window.event;
	var element=evt.srcElement || evt.target;
	//如果是透過 automimj 不觸發
	if (element != null && element.id != null)
	{
		$('#openitem04_txt').val("");
		$('#openitem04_txt2').text("");
	}
}//EndFun_FunOnChange_opentype04()

function FunCheckIsChanged_opentype04()
{
	var PreSetValue = $('#hdnOpenQueryPreSetValue').val();
	if(PreSetValue.length>0){
		var aryPreSetValue = PreSetValue.split('§');
		if(aryPreSetValue.length>1){
			if("opentype04" == aryPreSetValue[0] && $('#opentype04_txt').val() != aryPreSetValue[1])
				FunOnChange_opentype04();
		}
	}
	else{
		FunOnChange_opentype04();
	}
}//EndFun_FunCheckIsChanged_opentype04()

function FunOnChange_opentype05()
{
	var evt = (event)?event:window.event;
	var element=evt.srcElement || evt.target;
	//如果是透過 automimj 不觸發
	if (element != null && element.id != null)
	{
		$('#openitem05_txt').val("");
		$('#openitem05_txt2').text("");
	}
}//EndFun_FunOnChange_opentype05()

function FunCheckIsChanged_opentype05()
{
	var PreSetValue = $('#hdnOpenQueryPreSetValue').val();
	if(PreSetValue.length>0){
		var aryPreSetValue = PreSetValue.split('§');
		if(aryPreSetValue.length>1){
			if("opentype05" == aryPreSetValue[0] && $('#opentype05_txt').val() != aryPreSetValue[1])
				FunOnChange_opentype05();
		}
	}
	else{
		FunOnChange_opentype05();
	}
}//EndFun_FunCheckIsChanged_opentype05()



function InitNumberToWord()
{

}

function getMoneyWord(pNumberContrlID, pDecimalPlaces, pWordControlID)
{
	var strErr="";
	if($('#'+pNumberContrlID+'_txt').length>0 && $('#'+pNumberContrlID+'_txt').is(':visible')){
		var tControlNumValue = $('#'+pNumberContrlID+'_txt').val().trim();
		if(tControlNumValue.length>0){
			if(isNaN(tControlNumValue)) {
				//請輸入數值!
				strErr = getI18NForSpecial('PSMSG','NumsCheck','NumsCheckMSG001','../../../src/_Common/PlatFormUtil/KernelPage/I18N/I18NForJs.aspx');
			}
			else{
				//這裡使用者如果輸入超過16進位的數值，就會失真！
				//tControlNumValue = parseFloat(tControlNumValue).toFixed(pDecimalPlaces);
				tControlNumValue = tw.com.dsc.easyflowDotNet.program.MAWIODMFPAYCNT02.ajaxGetFixedNum(tControlNumValue, pDecimalPlaces).value;

				$('#'+pNumberContrlID+'_txt').val(tControlNumValue);
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
				$('#'+pNumberContrlID+'_txt').val("");
				$('#'+pWordControlID+'_txt').val("");
				return false;
			}

			var tControlWordValue = tw.com.dsc.easyflowDotNet.program.MAWIODMFPAYCNT02.ajaxGetMoneyWord(tControlNumValue).value;
			$('#'+pWordControlID+'_txt').val(tControlWordValue);
		}
		//2015/09/14;3.7.3.19;hiro;V00-20150914007;修正數值轉大寫，數值為空白時，沒有一併清空轉大寫欄位↓
		else {
			$('#'+pWordControlID+'_txt').val("");
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
	tSubjectSelf+='(電商)一般請款單V2-'+
$('#payee_txt').val();

	//自訂主旨+標準主旨
	tSubjectVal=tSubjectSelf+tSubjectTxt;

	if(tSubjectVal.length>255){tSubjectVal=tSubjectVal.substring(0,255);}
	//使用者自訂主旨end

	$("#MasterPage_txtCreateToolSubject_txt").val(tSubjectVal);
}

function domath_mtotal()
{
	try{
		if($("#money01_txt").length==0)
			return;
		var money01 = $("#money01_txt").val().trim().replace(/\,/g, '');
		if(isNaN(money01)){
			$("#mtotal_txt").val("");
			return;
		}
		var intmoney01 = money01.length>0?parseFloat(money01):0;

		document.getElementById("money01_txt").value=parseFloat(intmoney01).toFixed(2);
		intmoney01 = parseFloat($("#money01_txt").val().trim());

		if($("#money02_txt").length==0)
			return;
		var money02 = $("#money02_txt").val().trim().replace(/\,/g, '');
		if(isNaN(money02)){
			$("#mtotal_txt").val("");
			return;
		}
		var intmoney02 = money02.length>0?parseFloat(money02):0;

		document.getElementById("money02_txt").value=parseFloat(intmoney02).toFixed(2);
		intmoney02 = parseFloat($("#money02_txt").val().trim());

		if($("#money03_txt").length==0)
			return;
		var money03 = $("#money03_txt").val().trim().replace(/\,/g, '');
		if(isNaN(money03)){
			$("#mtotal_txt").val("");
			return;
		}
		var intmoney03 = money03.length>0?parseFloat(money03):0;

		document.getElementById("money03_txt").value=parseFloat(intmoney03).toFixed(2);
		intmoney03 = parseFloat($("#money03_txt").val().trim());

		if($("#money04_txt").length==0)
			return;
		var money04 = $("#money04_txt").val().trim().replace(/\,/g, '');
		if(isNaN(money04)){
			$("#mtotal_txt").val("");
			return;
		}
		var intmoney04 = money04.length>0?parseFloat(money04):0;

		document.getElementById("money04_txt").value=parseFloat(intmoney04).toFixed(2);
		intmoney04 = parseFloat($("#money04_txt").val().trim());

		if($("#money05_txt").length==0)
			return;
		var money05 = $("#money05_txt").val().trim().replace(/\,/g, '');
		if(isNaN(money05)){
			$("#mtotal_txt").val("");
			return;
		}
		var intmoney05 = money05.length>0?parseFloat(money05):0;

		document.getElementById("money05_txt").value=parseFloat(intmoney05).toFixed(2);
		intmoney05 = parseFloat($("#money05_txt").val().trim());

		var finalvalue = intmoney01+intmoney02+intmoney03+intmoney04+intmoney05;
		if(finalvalue==undefined || !isFinite(finalvalue)){
			$("#mtotal_txt").val("");
			return;
		}

		document.getElementById("mtotal_txt").value = parseFloat(finalvalue).toFixed(2);

		//^_^ 20230411 Peggy 重新加上千份位↓
		document.getElementById("mtotal_txt").value = OEMFormat(parseFloat(finalvalue).toFixed(2));
		document.getElementById("money01_txt").value = OEMFormat(parseFloat(money01).toFixed(2));
		document.getElementById("money02_txt").value = OEMFormat(parseFloat(money02).toFixed(2));
		document.getElementById("money03_txt").value = OEMFormat(parseFloat(money03).toFixed(2));
		document.getElementById("money04_txt").value = OEMFormat(parseFloat(money04).toFixed(2));
		document.getElementById("money05_txt").value = OEMFormat(parseFloat(money05).toFixed(2));
	    //^_^  20230411 Peggy 重新加上千份位↑


	}catch(err){
		$("#mtotal_txt").val("");
		var errorMsg = getI18NForSpecial('FD','CalculatedSet2','MutiLang_04','../../../src/_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx');
		alert(errorMsg+err);
	}
}


//單頭觸發必填欄位驗證
function chkTriggerFieldNull_Head()
{
	var tErr = '',tMsg = '';
	var tFieldNotFilledMsg = getI18NForSpecial('PSMSG', 'RequriedFieldNotFilled', '1', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx');
	if($("#chkatt01_chk").length>0){
		if($("#chkatt01_chk")[0].checked){
			if($("#inv01_txt").val().trim().length==0){
				tErr+='[inv01-'+getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'inv01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+']'+tFieldNotFilledMsg+'\r\n';
			}
		}
		else{
			$("#inv01_txt").val('');
		}
	}

	if($("#chkatt02_chk").length>0){
		if($("#chkatt02_chk")[0].checked){
			if($("#inv02_txt").val().trim().length==0){
				tErr+='[inv02-'+getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'inv02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+']'+tFieldNotFilledMsg+'\r\n';
			}
		}
		else{
			$("#inv02_txt").val('');
		}
	}

	if($("#chkitem05_chk").length>0){
		if($("#chkitem05_chk")[0].checked){
			if($("#chkother_txt").val().trim().length==0){
				tErr+='[chkother-'+getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'chkother', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+']'+tFieldNotFilledMsg+'\r\n';
			}
		}
		else{
			$("#chkother_txt").val('');
		}
	}

	if($("#other_chk").length>0){
		if($("#other_chk")[0].checked){
			if($("#attother_txt").val().trim().length==0){
				tErr+='[attother-'+getI18NForSpecial('FD', 'MAWIODMFPAYCNT02', 'attother', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+']'+tFieldNotFilledMsg+'\r\n';
			}
		}
		else{
			$("#attother_txt").val('');
		}
	}

	if($("#chpay_ctrolRadio2").length>0){
		if($("#chpay_ctrolRadio2")[0].checked){
			if($("#payother_txt").val().trim().length==0){
				tErr+='請填寫支付方式\r\n';
			}
		}
		else{
			$("#payother_txt").val('');
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
		if($('#DscOpenQuery'+tField+'_txt').length>0){
			var hdnValue = $('#DscOpenQuery'+tField+'_txt').val();
			$('#SelectPanel'+tField+'_hidText').val(hdnValue);
			$('#SelectPanel'+tField+'_hidText2').val(hdnValue);

			if($('#SelectPanel'+tField+'_lst').length>0){
				$('#SelectPanel'+tField+'_lst')[0].options.length=0;

				if($('#SelectPanel'+tField+'_lstTbx').length>0){
					$('#SelectPanel'+tField+'_lstTbx').val("");
				}

				if(hdnValue.length>0){
					var aryHdnFieldSplit = hdnValue.split('§');
					var intHdnFieldSplitLength = aryHdnFieldSplit.length;
					for (var j = 0; j < intHdnFieldSplitLength; j++){
						var tShowItem = aryHdnFieldSplit[j];
						tShowItem=tShowItem.replace(/┼┼/g, " ");
						var new_option = new Option(tShowItem, tShowItem);
						$('#SelectPanel'+tField+'_lst')[0].options.add(new_option);

						if($('#SelectPanel'+tField+'_lstTbx').length>0){
							document.getElementById('SelectPanel' + tField + '_lstTbx').value += tShowItem;
							if (j != intHdnFieldSplitLength - 1)
							{
								document.getElementById('SelectPanel' + tField + '_lstTbx').value += '\r\n';
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
		var bResult = tw.com.dsc.easyflowDotNet.program.MAWIODMFPAYCNT02.ajaxDoDispatchForm(pFormID, pSheetNo, pDispatchFormID).value;
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
	var open01 = document.getElementById("opentype01_txt"); //第一個類別
	var open02 = document.getElementById("opentype02_txt"); //第二個類別
	var open03 = document.getElementById("opentype03_txt"); //第二個類別
	var open04 = document.getElementById("opentype04_txt"); //第二個類別
	var open05 = document.getElementById("opentype05_txt"); //第二個類別

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

	if (open03 != null && open03.value != "") {
		//openitem
		OEMTurnningOnOff("On", "openitem03", true);
	}
	else {
		OEMTurnningOnOff("Off", "openitem03");
	}

	if (open04 != null && open04.value != "") {
		//openitem
		OEMTurnningOnOff("On", "openitem04", true);
	}
	else {
		OEMTurnningOnOff("Off", "openitem04");
	}

	if (open05 != null && open05.value != "") {
		//openitem
		OEMTurnningOnOff("On", "openitem05", true);
	}
	else {
		OEMTurnningOnOff("Off", "openitem05");
	}
}
//20230424 Peggy End

//20230411 Peggy 在這裡做條件判斷, 在aspx 引用OEMSetControl.js
//勾選chkitem02時,才顯示radioButton要勾選
function openRadio() {
	var _chkitem02 = document.getElementById("chkitem02_chk").checked;

	if (_chkitem02) {
		OEMTurnningOnOff("On", "chkven_ctrolRadio0,chkven_ctrolRadio1,orderno_txt,useyear_txt", false);
		//$("#orderno_txt").show();

	}
	else {
		document.getElementById("chkven_ctrolRadio0").checked = false;
		document.getElementById("chkven_ctrolRadio1").checked = false;
		document.getElementById("chkven_txt").value = "";
		document.getElementById("orderno_txt").value = "";
		document.getElementById("useyear_txt").value = "";

		OEMTurnningOnOff("Off", "chkven_ctrolRadio0,chkven_ctrolRadio1,orderno_txt,useyear_txt");
		/*	$("#orderno_txt").hide();*/

	}
}
