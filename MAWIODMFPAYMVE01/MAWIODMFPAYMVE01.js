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
		//數值驗証
		var tmoney01 = $('#money01_txt');
		if(tmoney01.length>0){
			if('readonly' !== tmoney01.attr('readonly') &&
				'disabled' !== tmoney01.attr('disabled')){
				var tmoney01Value = $('#money01_txt').val().trim();
				if(tmoney01Value.length==0 || isNaN(tmoney01Value))
				{
					tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money01_Err', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+ '\r\n';
				}
				else
				{
					if (tmoney01Value < 0 || tmoney01Value > 1000000000)
					{
						tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money01_Err', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+ '\r\n';
					}
				}
			}
		}

		//數值驗証
		var tmoney02 = $('#money02_txt');
		if(tmoney02.length>0){
			if('readonly' !== tmoney02.attr('readonly') &&
				'disabled' !== tmoney02.attr('disabled')){
				var tmoney02Value = $('#money02_txt').val().trim();
				if(tmoney02Value.length==0 || isNaN(tmoney02Value))
				{
					tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money02_Err', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+ '\r\n';
				}
				else
				{
					if (tmoney02Value < 0 || tmoney02Value > 1000000000)
					{
						tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money02_Err', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+ '\r\n';
					}
				}
			}
		}

		//數值驗証
		var tmoney03 = $('#money03_txt');
		if(tmoney03.length>0){
			if('readonly' !== tmoney03.attr('readonly') &&
				'disabled' !== tmoney03.attr('disabled')){
				var tmoney03Value = $('#money03_txt').val().trim();
				if(tmoney03Value.length==0 || isNaN(tmoney03Value))
				{
					tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money03', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money03_Err', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+ '\r\n';
				}
				else
				{
					if (tmoney03Value < 0 || tmoney03Value > 1000000000)
					{
						tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money03', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money03_Err', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+ '\r\n';
					}
				}
			}
		}

		//數值驗証
		var tmtotal = $('#mtotal_txt');
		if(tmtotal.length>0){
			var tmtotalValue = $('#mtotal_txt').val().trim();
			if(tmtotalValue.length==0 || isNaN(tmtotalValue))
			{
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'mtotal', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'mtotal_Err', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+ '\r\n';
			}
			else
			{
				if (tmtotalValue < 0 || tmtotalValue > 1000000000)
				{
					tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'mtotal', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'mtotal_Err', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+ '\r\n';
				}
			}
		}

		//Radio Button 驗証
			if ($('#chpay_txt').length>0 && document.getElementById('chpay_txt').value == '')
			{
				tErr += getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'chpay_Err', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+ '\r\n';
			}

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
			tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'datetime1', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//不允許空白驗證
	var tdept = $('#dept_txt');
	if(tdept.length>0){
		var tdeptValue = $('#dept_txt').val().trim();
		if (tdeptValue.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'dept', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//Int格式驗証
	var tinv01 = $('#inv01_txt');
	if(tinv01.length>0){
		var tinv01Value = $('#inv01_txt').val().trim();
		if (tinv01Value.length>0){
			if(!/^-?\d+$/.test(tinv01Value)){
				//輸入的資料不符合int數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'inv01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tIntErrMsg + '\r\n';
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
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'inv02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tIntErrMsg + '\r\n';
			}
		}
	}

	//不允許空白驗證
	var tmoney01 = $('#money01_txt');
	if(tmoney01.length>0){
		var tmoney01Value = $('#money01_txt').val().trim();
		if (tmoney01Value.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//float格式驗証
	var tmoney01 = $('#money01_txt');
	if(tmoney01.length>0){
		var tmoney01Value = $('#money01_txt').val().trim();
		if (tmoney01Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney01Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
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
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
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
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money03', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
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
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money04', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
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
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money05', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
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
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'mtotal', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
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
			tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'payee', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//不允許空白驗證
	var ttextarea1 = $('#textarea1_txt');
	if(ttextarea1.length>0){
		var ttextarea1Value = $('#textarea1_txt').val().trim();
		if (ttextarea1Value.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'textarea1', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
		}
	}

	//不允許空白驗證
	var tusername = $('#username_txt');
	if(tusername.length>0){
		var tusernameValue = $('#username_txt').val().trim();
		if (tusernameValue.length==0){
			//欄位不允許空白 !
			tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'username', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFieldNotFilledMsg + '\r\n';
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
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'inv01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tIntErrMsg + '\r\n';
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
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'inv02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tIntErrMsg + '\r\n';
			}
		}
	}

	//float格式驗証
	var tmoney01 = $('#money01_txt');
	if(tmoney01.length>0){
		var tmoney01Value = $('#money01_txt').val().trim();
		if (tmoney01Value.length>0){
			if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(tmoney01Value)){
				//輸入的資料不符合float數值格式 !
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
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
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
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
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money03', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
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
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money04', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
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
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'money05', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
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
				tErr += '「' + getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'mtotal', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx') + '」  ' + tFloatErrMsg + '\r\n';
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

		if($("#chkatt03_chk").length>0){
			if($("#chkatt03_chk")[0].checked){
				$("#orderno").show();
			}
			else{
				$("#orderno").hide();
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

		if($("#rdtc_ctrolRadio4").length>0){
			if($("#rdtc_ctrolRadio4")[0].checked){
				$("#chkother").show();
			}
			else{
				$("#chkother").hide();
			}
		}


	}
}

function InitTriggerOpen(){

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
				tControlNumValue = tw.com.dsc.easyflowDotNet.program.MAWIODMFPAYMVE01.ajaxGetFixedNum(tControlNumValue, pDecimalPlaces).value;

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

			var tControlWordValue = tw.com.dsc.easyflowDotNet.program.MAWIODMFPAYMVE01.ajaxGetMoneyWord(tControlNumValue).value;
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
	tSubjectSelf+='MVE請款單-';

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
		var money01 = $("#money01_txt").val().trim();
		if(isNaN(money01)){
			$("#mtotal_txt").val("");
			return;
		}
		var intmoney01 = money01.length>0?parseFloat(money01):0;

		document.getElementById("money01_txt").value=parseFloat(intmoney01).toFixed(2);
		intmoney01 = parseFloat($("#money01_txt").val().trim());

		if($("#money02_txt").length==0)
			return;
		var money02 = $("#money02_txt").val().trim();
		if(isNaN(money02)){
			$("#mtotal_txt").val("");
			return;
		}
		var intmoney02 = money02.length>0?parseFloat(money02):0;

		document.getElementById("money02_txt").value=parseFloat(intmoney02).toFixed(2);
		intmoney02 = parseFloat($("#money02_txt").val().trim());

		if($("#money03_txt").length==0)
			return;
		var money03 = $("#money03_txt").val().trim();
		if(isNaN(money03)){
			$("#mtotal_txt").val("");
			return;
		}
		var intmoney03 = money03.length>0?parseFloat(money03):0;

		document.getElementById("money03_txt").value=parseFloat(intmoney03).toFixed(2);
		intmoney03 = parseFloat($("#money03_txt").val().trim());

		if($("#money04_txt").length==0)
			return;
		var money04 = $("#money04_txt").val().trim();
		if(isNaN(money04)){
			$("#mtotal_txt").val("");
			return;
		}
		var intmoney04 = money04.length>0?parseFloat(money04):0;

		document.getElementById("money04_txt").value=parseFloat(intmoney04).toFixed(2);
		intmoney04 = parseFloat($("#money04_txt").val().trim());

		if($("#money05_txt").length==0)
			return;
		var money05 = $("#money05_txt").val().trim();
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

		document.getElementById("mtotal_txt").value=parseFloat(finalvalue).toFixed(2);
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
				tErr+='[inv01-'+getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'inv01', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+']'+tFieldNotFilledMsg+'\r\n';
			}
		}
		else{
			$("#inv01_txt").val('');
		}
	}

	if($("#chkatt02_chk").length>0){
		if($("#chkatt02_chk")[0].checked){
			if($("#inv02_txt").val().trim().length==0){
				tErr+='[inv02-'+getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'inv02', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+']'+tFieldNotFilledMsg+'\r\n';
			}
		}
		else{
			$("#inv02_txt").val('');
		}
	}

	if($("#chkatt03_chk").length>0){
		if($("#chkatt03_chk")[0].checked){
			if($("#orderno_txt").val().trim().length==0){
				tErr+='[orderno-'+getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'orderno', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+']'+tFieldNotFilledMsg+'\r\n';
			}
		}
		else{
			$("#orderno_txt").val('');
		}
	}

	if($("#other_chk").length>0){
		if($("#other_chk")[0].checked){
			if($("#attother_txt").val().trim().length==0){
				tErr+='[attother-'+getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'attother', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+']'+tFieldNotFilledMsg+'\r\n';
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

	if($("#rdtc_ctrolRadio4").length>0){
		if($("#rdtc_ctrolRadio4")[0].checked){
			if($("#chkother_txt").val().trim().length==0){
				tErr+='[chkother-'+getI18NForSpecial('FD', 'MAWIODMFPAYMVE01', 'chkother', '../../_Common/PlatformUtil/KernelPage/I18N/I18NForJs.aspx')+']'+tFieldNotFilledMsg+'\r\n';
			}
		}
		else{
			$("#chkother_txt").val('');
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
		var bResult = tw.com.dsc.easyflowDotNet.program.MAWIODMFPAYMVE01.ajaxDoDispatchForm(pFormID, pSheetNo, pDispatchFormID).value;
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


