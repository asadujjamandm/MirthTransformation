var AIMObj = {};
var LabelItems = $('LabelItems');


//AIMObj.EncodingCharacters = 
var EncodingCharacters = {}
EncodingCharacters.Name = "EncodingCharacters";
EncodingCharacters.Text = msg['MSH']['MSH.2'].toString();

if(!IsNullOrEmpty(EncodingCharacters.Text)){
	LabelItems.push(EncodingCharacters);
}


//AIMObj.FieldSeparator = 
var FieldSeparator = {}
FieldSeparator.Name = "FieldSeparator";
FieldSeparator.Text = msg['MSH']['MSH.1'].toString();

if(!IsNullOrEmpty(FieldSeparator.Text)){
	LabelItems.push(FieldSeparator);
}

//AIMObj.ReceivingApplication = 
var ReceivingApplication = {}
ReceivingApplication.Name = "ReceivingApplication";
ReceivingApplication.Text = msg['MSH']['MSH.5']['MSH.5.1'].toString();

if(!IsNullOrEmpty(ReceivingApplication.Text)){
	LabelItems.push(ReceivingApplication);
}

//AIMObj.ReceivingFacility = 
var ReceivingFacility = {}
ReceivingFacility.Name = "ReceivingFacility";
ReceivingFacility.Text = msg['MSH']['MSH.6']['MSH.6.1'].toString();

if(!IsNullOrEmpty(ReceivingFacility.Text)){
	LabelItems.push(ReceivingFacility);
}

//AIMObj.SendingApplication = 
var SendingApplication = {}
SendingApplication.Name = "SendingApplication";
SendingApplication.Text = msg['MSH']['MSH.3']['MSH.3.1'].toString();

if(!IsNullOrEmpty(SendingApplication.Text)){
	LabelItems.push(SendingApplication);
}

//AIMObj.SendingFacility = 
var SendingFacility = {}
SendingFacility.Name = "SendingFacility";
SendingFacility.Text = msg['MSH']['MSH.4']['MSH.4.1'].toString();

if(!IsNullOrEmpty(SendingFacility.Text)){
	LabelItems.push(SendingFacility);
}


//AIMObj.PMSCurrentDate = moment(msg['MSH']['MSH.7']['MSH.7.1'].toString(), 'YYYYMMDDhhmmss').format('YYYY/MM/DD hh:mm:ss A');
var PMSCurrentDate = {}
PMSCurrentDate.Name = "PMSCurrentDate";
PMSCurrentDate.Text = moment(msg['MSH']['MSH.7']['MSH.7.1'].toString(),'YYYYMMDDhhmmss').format('YYYY/MM/DD hh:mm:ss A');

if(!IsNullOrEmpty(PMSCurrentDate.Text)){
	LabelItems.push(PMSCurrentDate);
}

//AIMObj.MessageType = 
var MessageType = {}
MessageType.Name = "MessageType";
MessageType.Text =  msg['MSH']['MSH.9']['MSH.9.1'].toString();

if(!IsNullOrEmpty(MessageType.Text)){
	LabelItems.push(MessageType);
}

//AIMObj.MessageType2 = 
var MessageType2 = {}
MessageType2.Name = "MessageType2";
MessageType2.Text = msg['MSH']['MSH.9']['MSH.9.2'].toString();

if(!IsNullOrEmpty(MessageType2.Text)){
	LabelItems.push(MessageType2);
}

//AIMObj.MessageControlID = 
var MessageControlID = {}
MessageControlID.Name = "MessageControlID";
MessageControlID.Text = msg['MSH']['MSH.10']['MSH.10.1'].toString();

if(!IsNullOrEmpty(MessageControlID.Text)){
	LabelItems.push(MessageControlID);
}


//AIMObj.ProcessingID = 
var ProcessingID = {}
ProcessingID.Name = "ProcessingID";
ProcessingID.Text = msg['MSH']['MSH.11']['MSH.11.1'].toString();

if(!IsNullOrEmpty(ProcessingID.Text)){
	LabelItems.push(ProcessingID);
}

//AIMObj.VersionID = 
var VersionID = {}
VersionID.Name = "VersionID";
VersionID.Text = msg['MSH']['MSH.12']['MSH.12.1'].toString();

if(!IsNullOrEmpty(VersionID.Text)){
	LabelItems.push(VersionID);
}

//AIMObj.CountryCode = 
var CountryCode = {}
CountryCode.Name = "CountryCode";
CountryCode.Text = null; // not found

//AIMObj.CharacterSet = 
var CharacterSet = {}
CharacterSet.Name = "CharacterSete";
CharacterSet.Text = msg['MSH']['MSH.17']['MSH.17.1'].toString();

if(!IsNullOrEmpty(CharacterSet.Text)){
	LabelItems.push(CharacterSet);
}

//AIMObj.LanguageCode = 
var LanguageCode1 = {}
LanguageCode1.Name = "LanguageCode";
LanguageCode1.Text = msg['MSH']['MSH.18']['MSH.18.1'].toString();

if(!IsNullOrEmpty(LanguageCode1.Text)){
	LabelItems.push(LanguageCode1);
}

var LanguageCode2 = {};
LanguageCode2.Name = "LanguageCode2";
LanguageCode2.Text = msg['MSH']['MSH.18']['MSH.18.2'].toString();

if(IsNullOrEmpty(LanguageCode2.Text)){
	LabelItems.push(LanguageCode2);
}