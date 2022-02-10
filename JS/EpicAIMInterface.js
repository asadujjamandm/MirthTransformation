var AIMObj = {};
//var LabelItems = []
var LabelItems = $('LabelItems');

//AIMObj.FieldSeparator = msg['MSH']['MSH.1'].toString();
var FieldSeparator = {}
FieldSeparator.Name = "FieldSeparator";
FieldSeparator.Text = msg['MSH']['MSH.1'].toString();

if(!IsNullOrEmpty(FieldSeparator.Text)){
	LabelItems.push(FieldSeparator);
}

//AIMObj.EncodingCharacters = msg['MSH']['MSH.2'].toString();
var EncodingCharacters = {}
EncodingCharacters.Name = "EncodingCharacters";
EncodingCharacters.Text = msg['MSH']['MSH.2'].toString();

if(!IsNullOrEmpty(EncodingCharacters.Text)){
	LabelItems.push(EncodingCharacters);
}

//AIMObj.SendingApplication = msg['MSH']['MSH.3']['MSH.3.1'].toString();
var SendingApplication = {}
SendingApplication.Name = "SendingApplication";
SendingApplication.Text = msg['MSH']['MSH.3']['MSH.3.1'].toString();

if(!IsNullOrEmpty(SendingApplication.Text)){
	LabelItems.push(SendingApplication);
}

//AIMObj.SendingFacility = msg['MSH']['MSH.4']['MSH.4.1'].toString();
var SendingFacility = {}
SendingFacility.Name = "SendingFacility";
SendingFacility.Text = msg['MSH']['MSH.4']['MSH.4.1'].toString();

if(!IsNullOrEmpty(SendingFacility.Text)){
	LabelItems.push(SendingFacility);
}

//AIMObj.ReceivingApplication = msg['MSH']['MSH.5']['MSH.5.1'].toString();
var ReceivingApplication = {}
ReceivingApplication.Name = "ReceivingApplication";
ReceivingApplication.Text = msg['MSH']['MSH.5']['MSH.5.1'].toString();

if(!IsNullOrEmpty(ReceivingApplication.Text)){
	LabelItems.push(ReceivingApplication);
}

//AIMObj.ReceivingFacility = msg['MSH']['MSH.6']['MSH.6.1'].toString();
var ReceivingFacility = {}
ReceivingFacility.Name = "ReceivingFacility";
ReceivingFacility.Text = msg['MSH']['MSH.6']['MSH.6.1'].toString();

if(!IsNullOrEmpty(ReceivingFacility.Text)){
	LabelItems.push(ReceivingFacility);
}

//AIMObj.PMSCurrentDate = moment(msg['MSH']['MSH.7']['MSH.7.1'].toString(), 'YYYYMMDDhhmmss').format('YYYY/MM/DD hh:mm:ss A');
var PMSCurrentDate = {}
PMSCurrentDate.Name = "PMSCurrentDate";
PMSCurrentDate.Text =  moment(msg['MSH']['MSH.7']['MSH.7.1'].toString(), 'YYYYMMDDhhmmss').format('YYYY/MM/DD hh:mm:ss A');

if(!IsNullOrEmpty(PMSCurrentDate.Text)){
	LabelItems.push(PMSCurrentDate);
}

//AIMObj.SecurityCode = msg['MSH']['MSH.8']['MSH.8.1'].toString();
var SecurityCode = {}
SecurityCode.Name = "SecurityCode";
SecurityCode.Text = msg['MSH']['MSH.8']['MSH.8.1'].toString();

if(!IsNullOrEmpty(SecurityCode.Text)){
	LabelItems.push(SecurityCode);
}

//AIMObj.MessageType = msg['MSH']['MSH.9']['MSH.9.1'].toString();
var MessageType = {}
MessageType.Name = "MessageType";
MessageType.Text =  msg['MSH']['MSH.9']['MSH.9.1'].toString();

if(!IsNullOrEmpty(MessageType.Text)){
	LabelItems.push(MessageType);
}

//AIMObj.MessageType2 = msg['MSH']['MSH.9']['MSH.9.2'].toString();
var MessageType2 = {}
MessageType2.Name = "MessageType2";
MessageType2.Text = msg['MSH']['MSH.9']['MSH.9.2'].toString();

if(!IsNullOrEmpty(MessageType2.Text)){
	LabelItems.push(MessageType2);
}

//AIMObj.MessageControlID = msg['MSH']['MSH.10']['MSH.10.1'].toString();
var MessageControlID = {}
MessageControlID.Name = "MessageControlID";
MessageControlID.Text = msg['MSH']['MSH.10']['MSH.10.1'].toString();

if(!IsNullOrEmpty(MessageControlID.Text)){
	LabelItems.push(MessageControlID);
}

//AIMObj.ProcessingID = msg['MSH']['MSH.11']['MSH.11.1'].toString();
var ProcessingID = {}
ProcessingID.Name = "ProcessingID";
ProcessingID.Text = msg['MSH']['MSH.11']['MSH.11.1'].toString();

if(!IsNullOrEmpty(ProcessingID.Text)){
	LabelItems.push(ProcessingID);
}

//AIMObj.VersionID = msg['MSH']['MSH.12']['MSH.12.1'].toString();
var VersionID = {}
VersionID.Name = "VersionID";
VersionID.Text = msg['MSH']['MSH.12']['MSH.12.1'].toString();

if(!IsNullOrEmpty(VersionID.Text)){
	LabelItems.push(VersionID);
}

//AIMObj.SequenceNum = IsNullOrEmpty(msg['MSH']['MSH.13']['MSH.13.1'].toString()) ? 0 : msg['MSH']['MSH.13']['MSH.13.1'].toString();
var SequenceNum = {}
SequenceNum.Name = "SequenceNum";
SequenceNum.Text = IsNullOrEmpty(msg['MSH']['MSH.13']['MSH.13.1'].toString()) ? 0 : msg['MSH']['MSH.13']['MSH.13.1'].toString();

if(!IsNullOrEmpty(SequenceNum.Text)){
	LabelItems.push(SequenceNum);
}

//AIMObj.ContinuationPointer = msg['MSH']['MSH.14']['MSH.14.1'].toString();
var ContinuationPointer = {}
ContinuationPointer.Name = "ContinuationPointer";
ContinuationPointer.Text = msg['MSH']['MSH.14']['MSH.14.1'].toString();

if(!IsNullOrEmpty(ContinuationPointer.Text)){
	LabelItems.push(ContinuationPointer);
}

//AIMObj.AcceptACKType = msg['MSH']['MSH.15']['MSH.15.1'].toString();
var AcceptACKType = {}
AcceptACKType.Name = "AcceptACKType";
AcceptACKType.Text = msg['MSH']['MSH.15']['MSH.15.1'].toString();

if(!IsNullOrEmpty(AcceptACKType.Text)){
	LabelItems.push(AcceptACKType);
}

//AIMObj.AppACKType = msg['MSH']['MSH.16']['MSH.16.1'].toString();
var AppACKType = {}
AppACKType.Name = "AppACKType";
AppACKType.Text = msg['MSH']['MSH.16']['MSH.16.1'].toString();

if(!IsNullOrEmpty(AppACKType.Text)){
	LabelItems.push(AppACKType);
}

//AIMObj.CountryCode = msg['MSH']['MSH.17']['MSH.17.1'].toString();
var CountryCode = {}
CountryCode.Name = "CountryCode";
CountryCode.Text = msg['MSH']['MSH.17']['MSH.17.1'].toString();

if(!IsNullOrEmpty(CountryCode.Text)){
	LabelItems.push(CountryCode);
}

//AIMObj.CharacterSet = msg['MSH']['MSH.18']['MSH.18.1'].toString();
var CharacterSet = {}
CharacterSet.Name = "CharacterSete";
CharacterSet.Text = msg['MSH']['MSH.18']['MSH.18.1'].toString();

if(!IsNullOrEmpty(CharacterSet.Text)){
	LabelItems.push(CharacterSet);
}

//AIMObj.PatientAltID = msg['PID']['PID.4']['PID.4.1'].toString();
var PatientAltID = {}
PatientAltID.Name = "PatientAltID";
PatientAltID.Text = msg['PID']['PID.4']['PID.4.1'].toString();

if(!IsNullOrEmpty(PatientAltID.Text)){
	LabelItems.push(PatientAltID);
}

//AIMObj.LanguageCode = msg['PID']['PID.15']['PID.15.1'].toString(); // EN PID,15
var LanguageCode = {}
LanguageCode.Name = "LanguageCode";
LanguageCode.Text = msg['PID']['PID.15']['PID.15.1'].toString(); // EN PID,15

if(!IsNullOrEmpty(LanguageCode.Text)){
	LabelItems.push(LanguageCode);
}

//AIMObj.PatientSSN = msg['PID']['PID.19']['PID.19.1'].toString(); // PID,19
var PatientSSN = {}
PatientSSN.Name = "PatientSSN";
PatientSSN.Text = msg['PID']['PID.19']['PID.19.1'].toString(); // PID,19

if(!IsNullOrEmpty(PatientSSN.Text)){
	LabelItems.push(PatientSSN);
}

///AIMObj.Action = msg['ORC']['ORC.1']['ORC.1.1'].toString(); // ORC,1
var Action = {}
Action.Name = "Action";
Action.Text = msg['ORC']['ORC.1']['ORC.1.1'].toString(); // ORC,1

if(!IsNullOrEmpty(Action.Text)){
	LabelItems.push(Action);
}

//AIMObj.PromisedDate = IsNullOrEmpty(msg['ORC']['ORC.27']['ORC.27.1'].toString()) ? null : msg['ORC']['ORC.27']['ORC.27.1'].toString(); //ORC,27
var PromisedDate = {}
PromisedDate.Name = "PromisedDate";
PromisedDate.Text = IsNullOrEmpty(msg['ORC']['ORC.27']['ORC.27.1'].toString()) ? null : msg['ORC']['ORC.27']['ORC.27.1'].toString(); //ORC,27

if(!IsNullOrEmpty(PromisedDate.Text)){
	LabelItems.push(PromisedDate);
}

//AIMObj.DAW = msg['RXE']['RXE.9']['RXE.9.1'].toString();
var DAW = {}
DAW.Name = "DAW";
DAW.Text = msg['RXE']['RXE.9']['RXE.9.1'].toString();

if(!IsNullOrEmpty(DAW.Text)){
	LabelItems.push(DAW);
}

//AIMObj.PrescribedDrugName = msg['ZLB']['ZLB.1']['ZLB.1.1'].toString(); // ZLB,1.4
var PrescribedDrugName = {}
PrescribedDrugName.Name = "PrescribedDrugName";
PrescribedDrugName.Text = msg['ZLB']['ZLB.1']['ZLB.1.1'].toString(); // ZLB,1.4

if(!IsNullOrEmpty(PrescribedDrugName.Text)){
	LabelItems.push(PrescribedDrugName);
}

//AIMObj.UniqueId =  msg['ZLB']['ZLB.15']['ZLB.15.1'].toString();// ZLB,15.1
var UniqueId = {}
UniqueId.Name = "UniqueId";
UniqueId.Text = msg['ZLB']['ZLB.1']['ZLB.1.1'].toString(); // ZLB,1.4

if(!IsNullOrEmpty(UniqueId.Text)){
	LabelItems.push(UniqueId);
}

//AIMObj.IsPartial = msg['OBX']['OBX.3']['OBX.3.5'].toString(); // OBX[3],5 -- 3 -- IF OBX|3| contains 1 in the segment highlighted below... please display the quantity as “OBX|1| / OBX|6|
var IsPartial = {}
IsPartial.Name = "IsPartial";
IsPartial.Text = msg['ZLB']['ZLB.1']['ZLB.1.1'].toString(); // ZLB,1.4

if(!IsNullOrEmpty(IsPartial.Text)){
	LabelItems.push(IsPartial);
}

//AIMObj.PartialFill = msg['OBX']['OBX.1']['OBX.1.5'].toString(); //OBX[1],5
var PartialFill = {}
PartialFill.Name = "PartialFill";
PartialFill.Text = msg['OBX']['OBX.1']['OBX.1.5'].toString(); //OBX[1],5

if(!IsNullOrEmpty(PartialFill.Text)){
	LabelItems.push(PartialFill);
}

//AIMObj.OriginalDispenseQty = IsNullOrEmpty(msg['OBX']['OBX.6']['OBX.6.5'].toString()) ? 0 : msg['OBX']['OBX.6']['OBX.6.5'].toString(); //OBX[6],5
var OriginalDispenseQty = {}
OriginalDispenseQty.Name = "OriginalDispenseQty";
OriginalDispenseQty.Text = IsNullOrEmpty(msg['OBX']['OBX.6']['OBX.6.5'].toString()) ? 0 : msg['OBX']['OBX.6']['OBX.6.5'].toString(); //OBX[6],5

if(!IsNullOrEmpty(OriginalDispenseQty.Text)){
	LabelItems.push(OriginalDispenseQty);
}

//AIMObj.DosageForm = msg['OBX']['OBX.7']['OBX.7.5'].toString(); // OBX[7],5
var DosageForm = {}
DosageForm.Name = "OriginalDispenseQty";
DosageForm.Text = msg['OBX']['OBX.7']['OBX.7.5'].toString();

if(!IsNullOrEmpty(DosageForm.Text)){
	LabelItems.push(DosageForm);
}

//AIMObj.StoreNumber = msg['RXE']['RXE.40']['RXE.40.1'].toString().trim();
var StoreNumber = {}
StoreNumber.Name = "StoreNumber";
StoreNumber.Text = msg['RXE']['RXE.40']['RXE.40.1'].toString().trim();

if(!IsNullOrEmpty(StoreNumber.Text)){
	LabelItems.push(StoreNumber);
}

channelMap.put("LabelItems", LabelItems);