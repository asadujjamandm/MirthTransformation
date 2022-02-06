// Message Type //
var type = msg['MSH']['MSH.9']['MSH.9.1'].toString();

// Address //

var Address = {};

Address.Street1 = msg['PID']['PID.11']['PID.11.1'].toString().trim();
Address.Street2 = msg['PID']['PID.11']['PID.11.2'].toString().trim();
Address.City = msg['PID']['PID.11']['PID.11.3'].toString().trim();
Address.State = msg['PID']['PID.11']['PID.11.4'].toString().trim();
Address.ZIP = msg['PID']['PID.11']['PID.11.5'].toString().trim();
Address.Country = msg['PID']['PID.11']['PID.11.6'].toString().trim();
Address.AddressType = "Primary";
Address.Primary = "true";
//Address.Id =null;

var Addresses = [];


if((!IsNullOrEmpty(Address.Street1) || !IsNullOrEmpty(Address.Street2)) && 
	(!IsNullOrEmpty(Address.City) || !IsNullOrEmpty(Address.State)) &&
	(!IsNullOrEmpty(Address.Country)))
{
	Addresses.push(Address);
}

channelMap.put('Address', Address);
channelMap.put('Addresses', Addresses);

//logger.info('Address: ' + JSON.stringify(Address));

// PhoneNumber //

var PhoneNumberH = {};

PhoneNumberH.Number = msg['PID']['PID.13']['PID.13.1'].toString().trim();
PhoneNumberH.Type = msg['PID']['PID.13']['PID.13.3'].toString().trim();


var PhoneNumberW = {};

PhoneNumberW.Number = msg['PID']['PID.14']['PID.14.1'].toString().trim();
PhoneNumberW.Type = msg['PID']['PID.14']['PID.14.3'].toString().trim();


var PhoneNumbers = [];

if(!IsNullOrEmpty(PhoneNumberH.Number)){
	PhoneNumbers.push(PhoneNumberH);
}

if(!IsNullOrEmpty(PhoneNumberW.Number)){
	PhoneNumbers.push(PhoneNumberW);
}


channelMap.put('PhoneNumberH', PhoneNumberH);
channelMap.put('PhoneNumberW', PhoneNumberW);
channelMap.put('PhoneNumbers', PhoneNumbers);

//logger.info('PhoneNumber: ' + JSON.stringify(PhoneNumber));

// Patient //

var Patient = {};


var _values_list = [];

for (i = 0; i < getArrayOrXmlLength(msg['PID']); i++) {                 
    //
    for (j = 0; j < getArrayOrXmlLength(msg['PID'][i]['PID.3']); j++) {
   		_values_list.push(msg['PID'][i]['PID.3'][j]['PID.3.1'].toString());
   	}
    //}   
}

Patient.Id = _values_list[0];
Patient.FirstName = msg['PID']['PID.5']['PID.5.1'].toString().trim();
Patient.LastName = msg['PID']['PID.5']['PID.5.2'].toString().trim();
Patient.DOB = FormateDate(msg['PID']['PID.7']['PID.7.1'].toString().trim());
Patient.IdType = null;
Patient.Initials = null;
Patient.MiddleName = msg['PID']['PID.5']['PID.5.3'].toString().trim();
Patient.Sex = msg['PID']['PID.8']['PID.8.1'].toString().trim() === "M" ? "Male" : "Female";



Patient.Addresses = Addresses;
Patient.PhoneNumbers = PhoneNumbers;
channelMap.put('Patient', Patient);

//logger.info('Patient: ' + JSON.stringify(Patient));

// LabelItems //

var LabelItems = [];

var StoreName = {}
StoreName.Name = "StoreName";
StoreName.Text = msg['RXE']['RXE.40']['RXE.40.2'].toString().trim();

if(StoreName.Text != null && StoreName.Text != ""){
	LabelItems.push(StoreName);
}


var StoreAddress = {};
StoreAddress.Name = "StoreAddress";
StoreAddress.Text = msg['RXE']['RXE.41']['RXE.41.1'].toString().trim();

if(StoreAddress.Text != null && StoreAddress.Text != ""){
	LabelItems.push(StoreAddress);
}


var StoreCity = {};
StoreCity.Name = "StoreCity";
StoreCity.Text = msg['RXE']['RXE.41']['RXE.41.3'].toString().trim();

if(StoreCity.Text != null && StoreCity.Text != ""){
	LabelItems.push(StoreCity);
}

var StoreZip = {};
StoreZip.Name = "StoreZip"
StoreZip.Text = msg['RXE']['RXE.41']['RXE.41.5'].toString().trim();

if(StoreZip.Text != null && StoreZip.Text != ""){
	LabelItems.push(StoreZip);
}

var DEA = {};
DEA.Name = "DEA";
DEA.Text = msg['RXE']['RXE.13']['RXE.13.1'].toString().trim();

if(DEA.Text != null && DEA.Text != ""){
	LabelItems.push(DEA);
}

var PharmacistInitials= {};
PharmacistInitials.Name = "PharmacistInitials";
PharmacistInitials.Text = msg['ORC']['ORC.12']['ORC.12.21'].toString().trim();

if(PharmacistInitials.Text != null && PharmacistInitials.Text != ""){
	LabelItems.push(PharmacistInitials);
}

var PrescriberTitle = {};
PrescriberTitle.Name = "PrescriberTitle";
PrescriberTitle.Text = msg['ORC']['ORC.12']['ORC.12.3'].toString().trim();

if(PrescriberTitle.Text != null && PrescriberTitle.Text != ""){
	LabelItems.push(PrescriberTitle);
}

var PrescriberLastName = {};
PrescriberLastName.Name = "PrescriberLastName";
PrescriberLastName.Text = msg['RXE']['RXE.14']['RXE.14.2'].toString().trim();

if(PrescriberLastName.Text != null && PrescriberLastName.Text != ""){
	LabelItems.push(PrescriberLastName);
}


var PrescriberFirstName = {};
PrescriberFirstName.Name = "PrescriberFirstName";
PrescriberFirstName.Text = msg['RXE']['RXE.14']['RXE.14.3'].toString().trim();

if(PrescriberFirstName.Text != null && PrescriberFirstName.Text != ""){
	LabelItems.push(PrescriberFirstName);
}

channelMap.put('LabelItems', LabelItems);

//logger.info('LabelItems: ' + JSON.stringify(LabelItems));

// Med //

var Med = {};
//Med.Med_Id = null;
Med.Description = msg['RXE']['RXE.2']['RXE.2.2'].toString().trim();
if(IsNullOrEmpty(Med.Description)){
	Med.Description = null;
}
Med.Id = msg['RXE']['RXE.2']['RXE.2.1'].toString().trim();
Med.MedIdType = 0;
Med.Name = null;
Med.InventorySelector = "";

channelMap.put('Med', Med);

//logger.info(JSON.stringify(Med));

// Doses //
var TQ1count = getArrayOrXmlLength(msg['TQ1']);
var RXGcount = getArrayOrXmlLength(msg['RXG']);
var currentRXGCount = 0;
//logger.info('count: ' + TQ1count + "-" + RXGcount);
var Doses = [];

var Dose = {};

if(TQ1count) {
	for (i = 0; i < TQ1count; i++) {                 	

		if(!IsNullOrEmpty(msg['TQ1'][i]['TQ1.2']['TQ1.2.1'].toString().trim()))
		{		
			i++;
		}
		
		if(i<TQ1count && currentRXGCount<RXGcount)
		{
			//Dose.Id = null;
			Dose.AdminDateTime =  FormateDate(msg['TQ1'][i]['TQ1.7']['TQ1.7.1'].toString().trim());
			Dose.Quantity =  msg['RXG'][currentRXGCount]['RXG.5']['RXG.5.1'].toString().trim();
			Dose.Sig = "";
			Dose.TimeName = msg['RXG'][currentRXGCount]['RXG.13']['RXG.13.2'].toString().trim();       
			//logger.info('i: ' + i + " : " + currentRXGCount);
			currentRXGCount++;
			//logger.info('Dose: ' + JSON.stringify(Dose));
		
			Doses.push(Dose);
		}		
	}	
}
else {
	//Dose.Id = null;
	Dose.AdminDateTime = FormateDate(null);
	Dose.Quantity = 1;
	Dose.Sig = null;
	Dose.TimeName = null;

	Doses.push(Dose);
}

channelMap.put('Doses', Doses);
//logger.info('Doses: ' + JSON.stringify(Doses));

// HOA //

var HOA = {};

//HOA.Id = null;
HOA.StartDate = FormateDate(msg['RXE']['RXE.1']['RXE.1.4'].toString().trim());
HOA.EndDate = FormateDate(msg['RXE']['RXE.1']['RXE.1.5'].toString().trim());
HOA.Doses = Doses;
HOA.ScheduleType = 0;


channelMap.put('HOA', HOA);

//logger.info('HOA: ' + JSON.stringify(HOA));



// Scripts //

var Script = {};
//Script.Id = null;
Script.Action = ProcessScriptAction(msg['ORC']['ORC.1']['ORC.1.1'].toString().trim().toUpperCase());
Script.Packaging = DoesHOAExists(HOA) === true ? 1:5; //Adherence 1; Blister 2; Manual 3; Pouch 4; Vial 5;

var number = msg['RXE']['RXE.2']['RXE.2.1'].toString().trim().split('-');
var RxNumb = ""
if(number.length > 1) {
	for(i=0; i<number.length; i++) {
		RxNumb = RxNumb + number[i]
	}	
}
else {
	RxNumb = number[0];
}

Script.RxNumber = RxNumb;
Script.RefillNumber =msg['RXE']['RXE.17']['RXE.17.1'].toString().trim();
Script.TransactionId = Script.RxNumber + Script.RefillNumber + "00";
Script.Barcode = Script.TransactionId
Script.DispenseQuantity = msg['RXE']['RXE.10']['RXE.10.1'].toString().trim();

var BatchId = UUIDGenerator.getUUID();
Script.BatchId = BatchId;

Script.SequenceNumber = "1";
Script.PatientId = Patient.Id;
Script.FacilityId =null;
Script.Med = Med;
Script.DAW = msg['RXE']['RXE.9']['RXE.9.1'].toString() === "0" ? false : true;
Script.DaysSupply = msg['RXE']['RXE.1']['RXE.1.3'].toString().trim() == "" ? "0" : msg['RXE']['RXE.1']['RXE.1.3'].toString().trim();
Script.HOA = HOA;
Script.LabelItems = LabelItems;
Script.RefillsRemaining = msg['RXE']['RXE.16']['RXE.16.1'].toString().trim();
Script.RefillsTotal = parseInt(Script.RefillNumber) + parseInt(Script.RefillsRemaining);
Script.PartialNumber = "0";
Script.RxExpirationDate = FormateDate(msg['RXE']['RXE.1']['RXE.1.5'].toString().trim());

for (i = 0; i < getArrayOrXmlLength(msg['RXE']['RXE.7']); i++) {
	if(type === "RDS")	
		Script.Sig = msg['RXE']['RXE.7'][i]['RXE.7.2'].toString();
	if(type === "RDE")
		Script.Sig = msg['RXE']['RXE.7'][i]['RXE.7.1'].toString();
}

Script.Urgency = CalculateUrgency(msg['ORC']['ORC.27']['ORC.27.1'].toString().trim()).toString();

channelMap.put('Script', Script);

//logger.info('Scripts: ' + JSON.stringify(Script));

var Batch = {};

var Scripts = [];
Scripts.push(Script);
var Facilities = null;
var Patients = [];
Patients.push(Patient);



Batch.Id = BatchId;
Batch.TransmissionId = "";
Batch.ScriptCount = Scripts.length;
Batch.SourceTerminal = "UNKNOWN";
Batch.Scripts = Scripts;
Batch.Facilities = Facilities;
Batch.Patients = Patients;

channelMap.put('Batch', Batch);